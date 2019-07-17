import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "com/uniorg/cf/banking/example/controller/BaseController";

export default class Banks extends BaseController {

	onInit(){
		var oJSONModel = new JSONModel();
		this.getView().setModel(oJSONModel);
		this._loadInfoData();
	}

	_loadInfoData(){
		this.getView().getModel().loadData("/apiFinTs/getBanks");
	}
}