import UIComponent from "sap/ui/core/UIComponent";

export default class Component extends UIComponent {

	metadata = {
		manifest: "json"
	}

	init() {
		UIComponent.prototype.init.apply( this, arguments );

		// initialize router
		this.getRouter().initialize();
	}
}