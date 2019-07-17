import Controller from "sap/ui/core/mvc/Controller";

export default class BaseController extends Controller {

	getRouter() {
		return this.getOwnerComponent().getRouter();
	}

	getResourceBundle() {
		return this.getOwnerComponent().getModel("i18n").getResourceBundle();
	}
}