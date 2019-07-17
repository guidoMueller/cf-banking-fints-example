import JSONModel from "sap/ui/model/json/JSONModel";
import Filter from "sap/ui/model/Filter";
import MessageBox from "sap/m/MessageBox"
import BaseController from "com/uniorg/cf/banking/login/controller/BaseController";

export default class Login extends BaseController {

	onInit() {
		var oJSONModel = new JSONModel( "/apiFinTs/getBanks" );
		this.getView().setModel( oJSONModel );
		var formModel = new JSONModel();
		this.getView().setModel( formModel, "formModel" );
		this._loadInfoData();
	}

	_loadInfoData() {
		this.getView().getModel().loadData( "/login" );
		this.getView().getModel( "formModel" ).setData( {
															user: "",
															pass: "",
															blz: ""
														} );
	}

	onAfterRendering() {
		console.log("onAfterRendering")
		var self = this;
		jQuery("input").on("keydown",
						   function(evt) {
							   if (evt.keyCode == 13) {
								   evt.preventDefault();
								   self.onLogin()
								   console.log("test")
							   }
						   });
	}

	handleSuggest( oEvent ) {
		let sTerm = oEvent.getParameter( "suggestValue" );
		let aFilters = [];
		if ( sTerm ) {
			aFilters.push( new Filter( "name", sap.ui.model.FilterOperator.StartsWith, sTerm ) );
			aFilters.push( new Filter( "blz", sap.ui.model.FilterOperator.StartsWith, sTerm ) );
			aFilters.push( new Filter( "location", sap.ui.model.FilterOperator.StartsWith, sTerm ) );
		}
		oEvent.getSource().getBinding( "suggestionItems" ).filter( [new Filter( aFilters, false )] );
	}

	onLogin( evt ) {
		let data = JSON.parse( this.getView().getModel( "formModel" ).getJSON() );
		let blz = this.getView().byId( 'inputBlz' ).getSelectedKey();
		data.blz = blz;
		var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;

		console.log(data.user);
		if (data.user === "" || data.user === undefined || data.user === null) {
			MessageBox.error(
				"Kein Konto angegeben",
				{
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
			return
		}
		if (data.pass === "" || data.pass === undefined || data.pass === null) {
			MessageBox.error(
				"Kein Password angegeben",
				{
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
			return
		}
		if (data.blz === "" || data.blz === undefined || data.blz === null) {
			MessageBox.error(
				"Keine Bank angegeben",
				{
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
			return
		}
		let view = this.getView().byId("loginContainer")
		view.setBusyIndicatorDelay(0)
		view.setBusy( true )
		$.post( "/login",
				{
					code: Base64.encode( data.user + ";" + data.pass + ";" + data.blz )
				},
				function( data, status ) {
					console.log(data);
					if (data.message) {
						view.setBusy( false )
						location.href = location.href
					}
				} );
	}
}