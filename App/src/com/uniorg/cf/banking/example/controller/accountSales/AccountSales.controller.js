import JSONModel from "sap/ui/model/json/JSONModel";
import Filter from "sap/ui/model/Filter";
import Sorter from "sap/ui/model/Sorter"
import Formatter from "com/uniorg/cf/banking/example/utils/Formatter"
import BaseController from "com/uniorg/cf/banking/example/controller/BaseController";

export default class AccountSales extends BaseController {

	_oResponsivePopover = null

	startDate = new Date(moment().subtract( 5, 'month' ).startOf( 'month' ))
	endDate = new Date()
	actualIban = null
	formatter = Formatter

	onInit() {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.getRoute("accountSalesIban").attachPatternMatched(this._onObjectMatched, this);

		var oJSONModel = new JSONModel();
		this.getView().setModel( oJSONModel );
		var oJSONModelAccounts = new JSONModel();
		this.getView().setModel( oJSONModelAccounts, "accounts" );

		var dateFrom = new Date();
		dateFrom.setUTCDate(2);
		dateFrom.setUTCMonth(1);
		dateFrom.setUTCFullYear(2014);

		var dateTo = new Date();
		dateTo.setUTCDate(17);
		dateTo.setUTCMonth(1);
		dateTo.setUTCFullYear(2014);


		var oModel = new JSONModel();
		oModel.setData( {
							delimiterDRS1: "@",
							dateValueDRS1: dateFrom,
							secondDateValueDRS1: dateTo,
							dateFormatDRS1: "yyyy/MM/dd",
							dateValueDRS2:new Date(moment().subtract( 6, 'month' ).startOf( 'month' )),
							secondDateValueDRS2: new Date(),
							dateMinDRS2: new Date(moment().subtract( 6, 'month' ).startOf( 'month' )),
							dateMaxDRS2: new Date(),
							ranges: {
								'Today': [moment(), moment()],
								'Yesterday': [moment().subtract( 1, 'days' ), moment().subtract( 1, 'days' )],
								'Last 7 Days': [moment().subtract( 6, 'days' ), moment()],
								'Last 30 Days': [moment().subtract( 29, 'days' ), moment()],
								'This Month': [moment().startOf( 'month' ), moment().endOf( 'month' )],
								'Last Month': [moment().subtract( 1, 'month' ).startOf( 'month' ), moment().subtract( 1, 'month' ).endOf( 'month' )]
							},
						} );
		this.getView().setModel( oModel, "dateSelect" );
		this._iEvent = 0;
		this._loadInfoData( () => {

		} );
		var that = this;
		if ( !this._oResponsivePopover ) {
			this._oResponsivePopover = sap.ui.xmlfragment( "com.uniorg.cf.banking.example.fragments.SortPopover", this );
			this._oResponsivePopover.setModel( this.getView().getModel() );
		}
		var oTable = this.getView().byId( "accountSalesTable" );
		var oItems = oTable.getBinding( "items" );
		var oSorter = new Sorter( "valueDate", true );
		oItems.sort( oSorter );
		oTable.addEventDelegate( {
									 onAfterRendering: function() {
										 console.log( this );
										 var oHeader = $( "#" + this.sId ).find( '.sapMListTblHeaderCell' ); //Get hold of table header elements
										 console.log( oHeader );
										 for ( var i = 0; i < oHeader.length; i++ ) {
											 var oID = oHeader[i].id;
											 that.onClickSort( oID );
										 }
									 }
								 }, oTable );
	}

	_onObjectMatched (oEvent) {
		console.log(oEvent.getParameter("arguments").iban)
	}

	handleDateSelectChange( oEvent ) {
		let sFrom = oEvent.getParameter( "from" );
		let sTo = oEvent.getParameter( "to" );
		let bValid = oEvent.getParameter( "valid" );
		this._iEvent++;

		if (bValid) {
			this.startDate = new Date(sFrom)
			this.endDate = new Date(sTo)
			this.getView().getModel("dateSelect" ).setProperty("/dateValueDRS2", new Date(sFrom))
			this.getView().getModel("dateSelect" ).setProperty("/secondDateValueDRS2", new Date(sTo) )
			this.loadData()
		}
	}

	onClickSort( oID ) {
		var that = this;
		$( '#' + oID ).click( function( oEvent, b ) { //Attach Table Header Element Event
			var oTarget = oEvent.currentTarget; //Get hold of Header Element
			let sort = $( oTarget ).data( "sort" )
			console.log( sort );
			var oLabelText = oTarget.childNodes[0].textContent; //Get Column Header text
			var oIndex = oTarget.id.slice( -1 ); //Get the column Index
			var oView = that.getView();
			var oTable = oView.byId( "accountSalesTable" );
			var oModel = oTable.getModel().getProperty( "/transactions" ); //Get Hold of Table Model Values

			var oKeys = Object.keys( oModel[0] ); //Get Hold of Model Keys to filter the value

			oView.getModel().setProperty( "/bindingValue", sort ); //Save the key value to property
			that._oResponsivePopover.openBy( oTarget );
		} );
	}

	onChange( oEvent ) {
		var oValue = oEvent.getParameter( "value" );
		var oMultipleValues = oValue.split( "," );
		var oTable = this.getView().byId( "accountSalesTable" );
		var oBindingPath = this.getView().getModel().getProperty( "/bindingValue" ); //Get Hold of Model Key value that was saved
		var aFilters = [];
		console.log( oBindingPath );
		for ( var i = 0; i < oMultipleValues.length; i++ ) {
			var oFilter = new Filter( oBindingPath, "Contains", oMultipleValues[i] );
			aFilters.push( oFilter )
		}
		var oItems = oTable.getBinding( "items" );
		oItems.filter( aFilters, "Application" );
		this._oResponsivePopover.close();
	}

	onAscending() {
		var oTable = this.getView().byId( "accountSalesTable" );
		var oItems = oTable.getBinding( "items" );
		var oBindingPath = this.getView().getModel().getProperty( "/bindingValue" );
		var oSorter = new Sorter( oBindingPath );
		oItems.sort( oSorter );
		this._oResponsivePopover.close();
	}

	onDescending() {
		var oTable = this.getView().byId( "accountSalesTable" );
		var oItems = oTable.getBinding( "items" );
		var oBindingPath = this.getView().getModel().getProperty( "/bindingValue" );
		var oSorter = new Sorter( oBindingPath, true );
		oItems.sort( oSorter );
		this._oResponsivePopover.close();
	}

	onOpen( oEvent ) {
		//On Popover open focus on Input control
		var oPopover = sap.ui.getCore().byId( oEvent.getParameter( "id" ) );
		var oPopoverContent = oPopover.getContent()[0];
		var oCustomListItem = oPopoverContent.getItems()[2];
		var oCustomContent = oCustomListItem.getContent()[0];
		var oInput = oCustomContent.getItems()[1];
		oInput.focus();
		oInput.$().find( '.sapMInputBaseInner' )[0].select();
	}

	_loadInfoData( callback ) {
		let that = this
		let view = this.getView();
		let accountModel = view.getModel( "accounts" )
		let viewModel = view.getModel()
		viewModel.attachRequestSent( function() {
			let oTable = view.byId( "accountSalesTable" )
			oTable.setBusy( true )
			console.log( "attachRequestSent" );
		} )
		viewModel.attachRequestCompleted( function() {
			let oTable = view.byId( "accountSalesTable" )
			oTable.setBusy( false )
			console.log( "attachRequestCompleted" );
		} )
		accountModel.attachRequestCompleted( function() {
			let accounts = accountModel.getData();
			that.actualIban = accounts[0].iban
			that.loadData()
			callback();
		} );
		view.getModel( "accounts" ).loadData( "/apiFinTs/getAccounts" );
	}

	loadData() {
		let view = this.getView();
		let viewModel = view.getModel()
		//this.getView().getModel().loadData( "/apiFinTs/getAccountSales/" + this.actualIban + "/" + new Date( "2018-01-01T12:00:00Z" ) + "/" + new Date( "2019-05-20T12:00:00Z" ) );
		viewModel.loadData( "/apiFinTs/getAccountSales/" + this.actualIban + "/" + this.startDate + "/" + this.endDate );
	}

	selectAccount( oEvent ) {

		var oItem = oEvent.getSource();
		let iban = oItem.getProperty( "key" );
		this.actualIban = iban
		console.log( oItem.getProperty( "key" ) )

		this.getView().getModel("dateSelect" ).setProperty("/dateValueDRS2", new Date(moment().subtract( 6, 'month' ).startOf( 'month' )));
		this.getView().getModel("dateSelect" ).setProperty("/secondDateValueDRS2", new Date() );
		this.getView().getModel().loadData( "/apiFinTs/getAccountSales/" + iban + "/" + new Date(moment().subtract( 6, 'month' ).startOf( 'month' )) + "/" + new Date() );
	}

	filterTableViewAll() {
		let oTable = this.getView().byId( "accountSalesTable" )
		oTable.getBinding( "items" ).filter( [] );
	}

	filterTableViewIn() {
		let aFilters = [];
		aFilters.push( new Filter( "isCredit", sap.ui.model.FilterOperator.EQ, true ) );
		aFilters.push( new Filter( "isExpense", sap.ui.model.FilterOperator.EQ, true ) );

		let oTable = this.getView().byId( "accountSalesTable" )
		oTable.getBinding( "items" ).filter( [new Filter( aFilters, true )] );
	}

	filterTableViewOut() {
		let aFilters = [];
		aFilters.push( new Filter( "isCredit", sap.ui.model.FilterOperator.EQ, false ) );
		aFilters.push( new Filter( "isExpense", sap.ui.model.FilterOperator.EQ, true ) );

		let oTable = this.getView().byId( "accountSalesTable" )
		oTable.getBinding( "items" ).filter( [new Filter( aFilters, true )] );
	}
}