import BaseController from "com/uniorg/cf/banking/example/controller/BaseController";
import ChartFormatter from "sap/viz/ui5/format/ChartFormatter"
import jQuery from "jquery.sap.global"
import JSONModel from "sap/ui/model/json/JSONModel"
import FlattenedDataset from "sap/viz/ui5/data/FlattenedDataset"
import FeedItem from "sap/viz/ui5/controls/common/feeds/FeedItem"
import Format from "sap/viz/ui5/api/env/Format"
import InitPageUtil from "com/uniorg/cf/banking/example/utils/InitPage"

export default class AccountSales extends BaseController {

	dataPath = "/apiFinTs/getAccountSalesChart/"
	settingsModel = {
		chartType: {
			name: "Chart Type",
			dateSelect: "Datumsauswahl",
			defaultSelected: "3",
			values: [{
				key: "0",
				name: "Bubble Chart",
				vizType: "timeseries_bubble",
				json: "/bubble/medium.json",
				value: ["Cost"],
				dataset: {
					"dimensions": [{
						"name": "Date",
						"value": "{Date}",
						"dataType": "date"
					}],
					"measures": [{
						"name": "Cost",
						"value": "{Cost}"
					},
						{
							"name": "Revenue",
							"value": "{Revenue}"
						}],

					data: {
						path: "/"
					}
				},
				vizProperties: {
					plotArea: {
						dataLabel: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
							visible: false
						},
						window: {
							start: "firstDataPoint",
							end: "lastDataPoint"
						}
					},
					valueAxis: {
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					categoryAxis: {
						title: {
							visible: true
						}
					},
					sizeLegend: {
						formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
						title: {
							visible: true
						}
					},
					title: {
						visible: false
					}
				}
			}, {
				key: "1",
				name: "Column Chart",
				vizType: "timeseries_column",
				json: "/column/medium.json",
				value: ["Cost"],
				dataset: {
					dimensions: [{
						name: 'Date',
						value: "{Date}",
						dataType: 'date'
					}],
					measures: [{
						name: 'Cost',
						value: '{Cost}'
					}],
					data: {
						path: "/"
					}
				},
				vizProperties: {
					plotArea: {
						dataLabel: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
							visible: false
						},
						window: {
							start: "firstDataPoint",
							end: "lastDataPoint"
						},
					},
					valueAxis: {
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					title: {
						visible: false
					}
				}
			}, {
				key: "2",
				name: "Column Chart with Multiple Series",
				vizType: "timeseries_column",
				json: "/timeBulletStacked.json",
				value: ["Haben", "Soll"],
				dataset: {
					dimensions: [{
						name: 'Date',
						value: "{Date}",
						dataType: 'date'
					}],
					measures: [{
						name: 'Haben',
						value: '{Cost2}'
					}, {
						name: 'Soll',
						value: '{Cost1}'
					}],
					data: {
						path: "/"
					}
				},
				vizProperties: {
					plotArea: {
						dataLabel: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
							visible: false
						},
						window: {
							start: "firstDataPoint",
							end: "lastDataPoint"
						},
					},
					valueAxis: {
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					title: {
						visible: false
					}
				}
			}, {
				key: "3",
				name: "Line Chart",
				vizType: "timeseries_line",
				json: "/column/timeAxis.json",
				value: ["Revenue"],
				dataset: {
					dimensions: [{
						name: 'Date',
						value: "{Date}",
						dataType: 'date'
					}],
					measures: [{
						name: 'Revenue',
						value: '{Revenue}'
					}],
					data: {
						path: "/"
					}
				},
				vizProperties: {
					plotArea: {
						window: {
							start: "firstDataPoint",
							end: "lastDataPoint"
						},
						dataLabel: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
							visible: false
						}
					},
					valueAxis: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					timeAxis: {
						title: {
							visible: false
						},
						interval: {
							unit: ''
						}
					},
					title: {
						visible: false
					},
					interaction: {
						syncValueAxis: false
					}
				}
			}, {
				key: "4",
				name: "Line Chart with Dynamic Value Axis",
				vizType: "timeseries_line",
				json: "/column/timeAxis.json",
				value: ["Revenue"],
				dataset: {
					dimensions: [{
						name: 'Date',
						value: "{Date}",
						dataType: 'date'
					}],
					measures: [{
						name: 'Revenue',
						value: '{Revenue}'
					}],
					data: {
						path: "/"
					}
				},
				vizProperties: {
					plotArea: {
						window: {
							start: "firstDataPoint",
							end: "lastDataPoint"
						},
						dataLabel: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
							visible: false
						}
					},
					valueAxis: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					timeAxis: {
						title: {
							visible: false
						}
					},
					title: {
						visible: false
					},
					interaction: {
						syncValueAxis: true
					}
				}
			}, {
				key: "5",
				name: "Scatter Chart",
				vizType: "timeseries_scatter",
				json: "/column/large.json",
				value: ["Cost"],
				dataset: {
					dimensions: [{
						name: 'Date',
						value: "{Date}",
						dataType: 'date'
					}],
					measures: [{
						name: 'Cost',
						value: '{Cost}'
					}],
					data: {
						path: "/"
					}
				},
				vizProperties: {
					plotArea: {
						dataLabel: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
							visible: false
						},
						window: {
							start: "firstDataPoint",
							end: "lastDataPoint"
						}
					},
					valueAxis: {
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					title: {
						visible: false,
					}

				}
			}, {
				key: "6",
				name: "Combined Column & Line",
				vizType: "timeseries_combination",
				json: "/column/medium.json",
				value: ["Revenue", "Cost"],
				dataset: {
					dimensions: [{
						name: 'Date',
						value: "{Date}",
						dataType: 'date'
					}],
					measures: [{
						name: 'Revenue',
						value: '{Revenue}'
					}, {
						name: 'Cost',
						value: '{Cost}'
					}],
					data: {
						path: "/"
					}
				},
				vizProperties: {
					plotArea: {
						window: {
							start: "firstDataPoint",
							end: "lastDataPoint"
						},
						dataLabel: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
							visible: false
						}
					},
					valueAxis: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					timeAxis: {
						title: {
							visible: false
						},
						interval: {
							unit: ''
						}
					},
					title: {
						visible: false
					},
					interaction: {
						syncValueAxis: false
					}
				}
			}, {
				key: "7",
				name: "Combined Column & Line with Dual Axis",
				vizType: "dual_timeseries_combination",
				json: "/column/medium.json",
				value: ["Revenue", "Cost"],
				dataset: {
					dimensions: [{
						name: 'Date',
						value: "{Date}",
						dataType: 'date'
					}],
					measures: [{
						name: 'Revenue',
						value: '{Revenue}'
					}, {
						name: 'Cost',
						value: '{Cost}'
					}],
					data: {
						path: "/"
					}
				},
				vizProperties: {
					plotArea: {
						window: {
							start: "firstDataPoint",
							end: "lastDataPoint"
						},
						dataLabel: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
							visible: false
						}
					},
					valueAxis: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					valueAxis2: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					timeAxis: {
						title: {
							visible: false
						},
						interval: {
							unit: ''
						}
					},
					title: {
						visible: false
					},
					interaction: {
						syncValueAxis: false
					}
				}
			}, {
				key: "8",
				name: "Bullet",
				vizType: "timeseries_bullet",
				json: "/timeBulletStacked.json",
				value: ["Cost", "Budget"],
				dataset: {
					dimensions: [{
						name: 'Date',
						value: "{Date}",
						dataType: 'date'
					}],
					measures: [{
						name: 'Cost',
						value: '{Cost}'
					}, {
						name: 'Budget',
						value: '{Budget}'
					}],
					data: {
						path: "/"
					}
				},
				vizProperties: {
					plotArea: {
						window: {
							start: "firstDataPoint",
							end: "lastDataPoint"
						},
						dataLabel: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
							visible: false
						},
						dataPointStyle: {
							rules: [{
								dataContext: {Cost: "*"},
								properties: {
									color: "sapUiChartPaletteSequentialHue1Light1"
								},
								displayName: "Actual",
								dataName: {Cost: "Actual"}
							}]
						}
					},
					valueAxis: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					valueAxis2: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					timeAxis: {
						title: {
							visible: false
						},
						interval: {
							unit: ''
						}
					},
					title: {
						visible: false
					},
					interaction: {
						syncValueAxis: false
					}
				}
			}, {
				key: "9",
				name: "Bullet Chart with Multiple Series",
				vizType: "timeseries_bullet",
				json: "/timeMultiple.json",
				value: ["Actual", "Budget"],
				dataset: {
					dimensions: [{
						name: 'Date',
						value: "{Date}",
						dataType: 'date'
					}, {
						name: 'Country',
						value: '{Country}'
					}],
					measures: [{
						name: 'Actual',
						value: '{Actual}'
					}, {
						name: 'Budget',
						value: "{Budget}"
					}],
					data: {
						path: "/"
					}
				},
				vizProperties: {
					plotArea: {
						window: {
							start: "firstDataPoint",
							end: "lastDataPoint"
						},
						dataLabel: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
							visible: false
						}
					},
					valueAxis: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					valueAxis2: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					timeAxis: {
						title: {
							visible: false
						},
						interval: {
							unit: ''
						}
					},
					title: {
						visible: false
					},
					interaction: {
						syncValueAxis: false
					}
				}
			}, {
				key: "10",
				name: "Stacked Column",
				vizType: "timeseries_stacked_column",
				json: "/timeBulletStacked.json",
				value: ["Haben", "Soll"],
				dataset: {
					dimensions: [{
						name: 'Date',
						value: "{Date}",
						dataType: 'date'
					}],
					measures: [{
						name: 'Haben',
						value: '{Cost2}'
					}, {
						name: 'Soll',
						value: '{Cost1}'
					}],
					data: {
						path: "/"
					}
				},
				vizProperties: {
					plotArea: {
						window: {
							start: "firstDataPoint",
							end: "lastDataPoint"
						},
						dataLabel: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
							visible: false
						},
					},
					valueAxis: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					valueAxis2: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					timeAxis: {
						title: {
							visible: false
						},
						interval: {
							unit: ''
						}
					},
					title: {
						visible: false
					},
					interaction: {
						syncValueAxis: false
					}
				}
			}, {
				key: "11",
				name: "Stacked Column 100%",
				vizType: "timeseries_100_stacked_column",
				json: "/timeBulletStacked.json",
				value: ["Haben", "Soll"],
				dataset: {
					dimensions: [{
						name: 'Date',
						value: "{Date}",
						dataType: 'date'
					}],
					measures: [{
						name: 'Haben',
						value: '{Cost2}'
					}, {
						name: 'Soll',
						value: '{Cost1}'
					}],
					data: {
						path: "/"
					}
				},
				vizProperties: {
					plotArea: {
						window: {
							start: "firstDataPoint",
							end: "lastDataPoint"
						},
						dataLabel: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
							visible: false
						},
					},
					valueAxis: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					valueAxis2: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					timeAxis: {
						title: {
							visible: false
						},
						interval: {
							unit: ''
						}
					},
					title: {
						visible: false
					},
					interaction: {
						syncValueAxis: false
					}
				}
			}, {
				key: "12",
				name: "Waterfall",
				vizType: "timeseries_waterfall",
				json: "/timeWaterFall.json",
				value: ["Change of Stock"],
				dataset: {
					dimensions: [{
						name: 'Date',
						value: "{Date}",
						dataType: 'date'
					}],
					measures: [{
						name: 'Change of Stock',
						value: '{Change of Stock}'
					}],
					data: {
						path: "/"
					}
				},
				vizProperties: {
					plotArea: {
						window: {
							start: "firstDataPoint",
							end: "lastDataPoint"
						},
						dataLabel: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
							visible: false
						},
					},
					valueAxis: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					timeAxis: {
						title: {
							visible: false
						},
						interval: {
							unit: ''
						}
					},
					title: {
						visible: false
					},
					interaction: {
						syncValueAxis: false
					}
				}
			}, {
				key: "13",
				name: "Periodic Waterfall",
				vizType: "timeseries_waterfall",
				json: "/demands_supplies.json",
				value: ["Supplies", "Demands"],
				dataset: {
					dimensions: [{
						name: 'Date',
						value: "{Date}",
						dataType: 'date'
					}],
					measures: [{
						name: 'Demands',
						value: '{Demands}'
					}, {
						name: 'Supplies',
						value: '{Supplies}'
					}],
					data: {
						path: "/"
					}
				},
				vizProperties: {
					plotArea: {
						window: {
							start: "firstDataPoint",
							end: null
						},
						dataLabel: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
							visible: false,
							recapTitle: "End of day",
							showRecap: true
						},
						startValue: 10
					},
					valueAxis: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					timeAxis: {
						title: {
							visible: false
						},
						interval: {
							unit: ''
						}
					},
					legend: {
						title: {
							visible: false
						},
						label: {
							text: {
								negativeValue: "Demands",
								positiveValue: "Supplies"
							}
						}
					},
					title: {
						visible: false
					},
					interaction: {
						syncValueAxis: false
					}
				}
			}, {
				key: "14",
				name: "Stacked Combination",
				vizType: "info/timeseries_stacked_combination",
				json: "/timeBulletStacked.json",
				value: ["Haben", "Soll", "Revenue"],
				dataset: {
					dimensions: [{
						name: 'Date',
						value: "{Date}",
						dataType: 'date'
					}],
					measures: [{
						name: 'Soll',
						value: '{Cost1}'
					}, {
						name: 'Haben',
						value: '{Cost2}'
					}, {
						name: 'Revenue',
						value: "{Revenue}"
					}],
					data: {
						path: "/"
					}
				},
				vizProperties: {
					plotArea: {
						window: {
							start: "firstDataPoint",
							end: "lastDataPoint"
						},
						dataLabel: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
							visible: false
						},
						dataShape: {
							primaryAxis: ["bar", "bar", "line"]
						}
					},
					valueAxis: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					valueAxis2: {
						visible: true,
						label: {
							formatString: ChartFormatter.DefaultPattern.SHORTFLOAT
						},
						title: {
							visible: false
						}
					},
					timeAxis: {
						title: {
							visible: false
						},
						interval: {
							unit: ''
						}
					},
					title: {
						visible: false
					},
					interaction: {
						syncValueAxis: false
					}
				}
			}]
		}
	}

	oVizFrame = null
	chartTypeSelect = null
	chart = null
	actualIban = null
	startDate = new Date(moment().subtract( 5, 'month' ).startOf( 'month' ))
	endDate = new Date()
	selectedViz = null

	onInit() {
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
											dateValueDRS2:this.startDate,
											secondDateValueDRS2: this.endDate,
											dateMinDRS2: this.startDate,
											dateMaxDRS2: this.endDate,
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

		this._loadInfoData( () => {
			Format.numericFormatter(ChartFormatter.getInstance());
			// set explored app's demo model on this sample
			var oModel = new JSONModel(this.settingsModel);
			oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
			this.getView().setModel(oModel);

			var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
			this.selectedVizKey = 3
			this.selectedViz = this.settingsModel.chartType.values[this.selectedVizKey]
			oVizFrame.setVizProperties(this.selectedViz.vizProperties);

			console.log(this.dataPath + "timeBulletStacked/" + this.actualIban + "/" + this.startDate + "/" + this.endDate);
			var dataModel = new JSONModel();
			this._setBusyViz(dataModel)
      dataModel.loadData(this.dataPath + "timeBulletStacked/" + this.actualIban + "/" + this.startDate + "/" + this.endDate)
			oVizFrame.setModel(dataModel);

			var oPopOver = this.getView().byId("idPopOver");
			oPopOver.connect(oVizFrame.getVizUid());
			oPopOver.setFormatString({
										 "Cost": ChartFormatter.DefaultPattern.STANDARDFLOAT,
										 "Revenue": ChartFormatter.DefaultPattern.STANDARDFLOAT
									 });

			InitPageUtil.initPageSettings(this.getView());
		} );

	}

	_loadInfoData( callback ) {
		let that = this
		let view = this.getView();
		let accountModel = view.getModel( "accounts" )


		accountModel.attachRequestCompleted( function() {
			let accounts = accountModel.getData();
			that.actualIban = accounts[1].iban
			callback();
		} );
		view.getModel( "accounts" ).loadData( "/apiFinTs/getAccounts" );
	}
	
	handleDateSelectChange( oEvent ) {
		let sFrom = oEvent.getParameter( "from" );
		let sTo = oEvent.getParameter( "to" );
		let bValid = oEvent.getParameter( "valid" );

		if (bValid) {
			this.startDate = new Date(sFrom)
			this.endDate = new Date(sTo)
			this.getView().getModel("dateSelect" ).setProperty("/dateValueDRS2", new Date(sFrom))
			this.getView().getModel("dateSelect" ).setProperty("/secondDateValueDRS2", new Date(sTo) )
			this._loadVizContainer()
		}
	}

	onAfterRendering(){
		this.chartTypeSelect = this.getView().byId('chartTypeSelect');
	}

	onChartTypeChanged(oEvent){
		if(this.oVizFrame){
			this.selectedVizKey = this.chart = parseInt(oEvent.getSource().getSelectedKey());

			var bindValue = this.settingsModel.chartType.values[this.selectedVizKey];
			this.selectedViz = bindValue
			this._loadVizContainer()
			
			
		}
	}

	_setBusyViz(dataModel) {
    let view = this.getView();
    dataModel.attachRequestSent( function() {
      let oVizFrame = view.byId( "idVizFrame" )
      oVizFrame.setBusyIndicatorDelay(0)
      oVizFrame.setBusy( true )
    } )
    dataModel.attachRequestCompleted( function() {
      let oVizFrame = view.byId( "idVizFrame" )
      oVizFrame.setBusyIndicatorDelay(0)
      oVizFrame.setBusy( false )
    } )
  }
	
	_loadVizContainer() {
		this.oVizFrame.destroyDataset();
		this.oVizFrame.destroyFeeds();
		this.oVizFrame.setVizType(this.selectedViz.vizType);
		let dataModel =  new JSONModel();
    this._setBusyViz(dataModel)
		switch(this.selectedViz.json) {
			case "/timeBulletStacked.json":
				dataModel.loadData(this.dataPath + "timeBulletStacked/" + this.actualIban + "/" + this.startDate + "/" + this.endDate)
				break;
			case "/column/timeAxis.json":
				dataModel.loadData(this.dataPath + "timeAxis/" + this.actualIban + "/" + this.startDate + "/" + this.endDate)
				break;
			case "/bubble/medium.json":
				dataModel.loadData(this.dataPath + "timeAxis/" + this.actualIban + "/" + this.startDate + "/" + this.endDate)
				break;
			case "/column/medium.json":
				dataModel.loadData(this.dataPath + "timeAxis/" + this.actualIban + "/" + this.startDate + "/" + this.endDate)
				break;
			case "/column/large.json":
				dataModel.loadData(this.dataPath + "timeAxis/" + this.actualIban + "/" + this.startDate + "/" + this.endDate)
				break;
			case "/timeMultiple.json":
				dataModel.loadData(this.dataPath + "timeAxis/" + this.actualIban + "/" + this.startDate + "/" + this.endDate)
				break;
			default:
				dataModel.loadData(this.dataPath + this.selectedViz.json)
		}

		this.oVizFrame.setModel(dataModel);
		var oDataset = new FlattenedDataset(this.selectedViz.dataset);
		this.oVizFrame.setDataset(oDataset);
		var props = this.selectedViz.vizProperties;
		if (this.selectedVizKey !== 8 && props.plotArea) {
			props.plotArea.dataPointStyle = null;
		}
		this.oVizFrame.setVizProperties(props);
		var feedValueAxis, feedValueAxis2, feedActualValues, feedTargetValues;
		if (this.selectedVizKey === 7) {
			feedValueAxis = new FeedItem({
																		 'uid': "valueAxis",
																		 'type': "Measure",
																		 'values': [this.selectedViz.value[0]]
																	 });
			feedValueAxis2 = new FeedItem({
																			'uid': "valueAxis2",
																			'type': "Measure",
																			'values': [this.selectedViz.value[1]]
																		});
		} else if (this.selectedVizKey === 8 || this.selectedVizKey === 9) {
			feedActualValues = new FeedItem({
																				'uid': "actualValues",
																				'type': "Measure",
																				'values': [this.selectedViz.value[0]]
																			});
			feedTargetValues = new FeedItem({
																				'uid': "targetValues",
																				'type': "Measure",
																				'values': [this.selectedViz.value[1]]
																			});
		} else {
			feedValueAxis = new FeedItem({
																		 'uid': "valueAxis",
																		 'type': "Measure",
																		 'values': this.selectedViz.value
																	 });
		}

		var feedTimeAxis = new FeedItem({
																			'uid': "timeAxis",
																			'type': "Dimension",
																			'values': ["Date"]
																		}),
			feedBubbleWidth = new FeedItem({
																			 "uid": "bubbleWidth",
																			 "type": "Measure",
																			 "values": ["Revenue"]
																		 }),
			feedTimeBulletColor = new FeedItem({
																					 "uid":"color",
																					 "type":"Dimension",
																					 "values":["Country"]
																				 });
		switch(this.selectedVizKey){
			case 0:
				this.oVizFrame.addFeed(feedValueAxis);
				this.oVizFrame.addFeed(feedTimeAxis);
				this.oVizFrame.addFeed(feedBubbleWidth);
				break;
			case 7:
				this.oVizFrame.addFeed(feedValueAxis);
				this.oVizFrame.addFeed(feedValueAxis2);
				this.oVizFrame.addFeed(feedTimeAxis);
				break;
			case 9:
				this.oVizFrame.addFeed(feedTimeBulletColor);
			case 8:
				this.oVizFrame.addFeed(feedActualValues);
				this.oVizFrame.addFeed(feedTargetValues);
				this.oVizFrame.addFeed(feedTimeAxis);
				this.oVizFrame.addFeed(feedValueAxis);
				break;
			default:
				this.oVizFrame.addFeed(feedValueAxis);
				this.oVizFrame.addFeed(feedTimeAxis);
				break;
		}
	}


}