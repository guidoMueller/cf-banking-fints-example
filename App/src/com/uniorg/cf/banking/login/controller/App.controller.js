import BaseController from "com/uniorg/cf/banking/login/controller/BaseController";

export default class App extends BaseController {

	onPressSideNavigationToggleButton (event) {
		//var oSideNavigation = this.getView().byId('sideNavigation');
		//oSideNavigation.setExpanded(!oSideNavigation.getExpanded());
		var toolPage = this.getView().byId("toolPage");
		toolPage.setSideExpanded(!toolPage.getSideExpanded());
	}

	onItemSelect(oEvent){
		var item = oEvent.getParameter("item");

		switch(item.getKey()){
			case "login":
				this.getRouter().navTo("login");
				break;
		}
	}
}