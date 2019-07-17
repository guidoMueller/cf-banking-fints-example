import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "com/uniorg/cf/banking/example/controller/BaseController";

export default class App extends BaseController {

	onInit() {
		var oJSONModel = new JSONModel();

		sap.ui.getCore().setModel(oJSONModel,"accountModel");

		this.getView().setModel( sap.ui.getCore().getModel("accountModel") );
	}

	onPressSideNavigationToggleButton (event) {
		console.log(this.getView().getModel().getData())
		//var oSideNavigation = this.getView().byId('sideNavigation');
		//oSideNavigation.setExpanded(!oSideNavigation.getExpanded());
		var toolPage = this.getView().byId("toolPage");
		toolPage.setSideExpanded(!toolPage.getSideExpanded());
	}

	onItemSelect(oEvent){
		var item = oEvent.getParameter("item");

		switch(item.getKey()){
			case "accounts":
				this.getRouter().navTo("accounts");
				break;
			case "banks":
				this.getRouter().navTo("banks");
				break;
			case "accountSales":
				this.getRouter().navTo("accountSales");
				break;
			case "accountSalesChart":
				this.getRouter().navTo("accountSalesChart");
				break;
		}
	}
}