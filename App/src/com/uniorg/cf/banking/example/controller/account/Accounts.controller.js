import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "com/uniorg/cf/banking/example/controller/BaseController";
import Formatter from "com/uniorg/cf/banking/example/utils/Formatter"

export default class Accounts extends BaseController {

  formatter = Formatter

  onInit() {
    var oJSONModel = new JSONModel();
    this.getView().setModel( oJSONModel );
    this._loadInfoData();
  }

  _loadInfoData() {
    let model = this.getView().getModel();
    model.loadData( "/apiFinTs/getAccounts" );
    model.attachRequestCompleted( function() {
      let accounts = model.getData();
      sap.ui.getCore().getModel("accountModel").setData(accounts[0]);
    } );
  }

  onPressAccount( oEvent ) {
    var oItem = oEvent.getSource();
    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
    oRouter.navTo("accountSalesIban", {
      iban: oItem.getBindingContext().getProperty("iban")
    });
  }
}