"use strict";

sap.ui.define("com/uniorg/cf/banking/example/controller/accountSales/AccountSalesChart.controller", ["com/uniorg/cf/banking/example/controller/BaseController", "sap/viz/ui5/format/ChartFormatter", "jquery.sap.global", "sap/ui/model/json/JSONModel", "sap/viz/ui5/data/FlattenedDataset", "sap/viz/ui5/controls/common/feeds/FeedItem", "sap/viz/ui5/api/env/Format", "com/uniorg/cf/banking/example/utils/InitPage"], function (BaseController, ChartFormatter, jQuery, JSONModel, FlattenedDataset, FeedItem, Format, InitPageUtil) {
	"use strict";

	return BaseController.extend("com.uniorg.cf.banking.example.controller.accountSales.AccountSales", {
		dataPath: "/apiFinTs/getAccountSalesChart/",
		settingsModel: {
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
						}, {
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
							visible: false
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
									dataContext: { Cost: "*" },
									properties: {
										color: "sapUiChartPaletteSequentialHue1Light1"
									},
									displayName: "Actual",
									dataName: { Cost: "Actual" }
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
		},
		oVizFrame: null,
		chartTypeSelect: null,
		chart: null,
		actualIban: null,
		startDate: new Date(moment().subtract(5, 'month').startOf('month')),
		endDate: new Date(),
		selectedViz: null,
		onInit: function onInit() {
			var _this = this;

			var oJSONModelAccounts = new JSONModel();
			this.getView().setModel(oJSONModelAccounts, "accounts");
			var dateFrom = new Date();
			dateFrom.setUTCDate(2);
			dateFrom.setUTCMonth(1);
			dateFrom.setUTCFullYear(2014);

			var dateTo = new Date();
			dateTo.setUTCDate(17);
			dateTo.setUTCMonth(1);
			dateTo.setUTCFullYear(2014);

			var oModel = new JSONModel();
			oModel.setData({
				delimiterDRS1: "@",
				dateValueDRS1: dateFrom,
				secondDateValueDRS1: dateTo,
				dateFormatDRS1: "yyyy/MM/dd",
				dateValueDRS2: this.startDate,
				secondDateValueDRS2: this.endDate,
				dateMinDRS2: this.startDate,
				dateMaxDRS2: this.endDate,
				ranges: {
					'Today': [moment(), moment()],
					'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
					'Last 7 Days': [moment().subtract(6, 'days'), moment()],
					'Last 30 Days': [moment().subtract(29, 'days'), moment()],
					'This Month': [moment().startOf('month'), moment().endOf('month')],
					'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
				}
			});
			this.getView().setModel(oModel, "dateSelect");

			this._loadInfoData(function () {
				Format.numericFormatter(ChartFormatter.getInstance());
				// set explored app's demo model on this sample
				var oModel = new JSONModel(_this.settingsModel);
				oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
				_this.getView().setModel(oModel);

				var oVizFrame = _this.oVizFrame = _this.getView().byId("idVizFrame");
				_this.selectedVizKey = 3;
				_this.selectedViz = _this.settingsModel.chartType.values[_this.selectedVizKey];
				oVizFrame.setVizProperties(_this.selectedViz.vizProperties);

				console.log(_this.dataPath + "timeBulletStacked/" + _this.actualIban + "/" + _this.startDate + "/" + _this.endDate);
				var dataModel = new JSONModel();
				_this._setBusyViz(dataModel);
				dataModel.loadData(_this.dataPath + "timeBulletStacked/" + _this.actualIban + "/" + _this.startDate + "/" + _this.endDate);
				oVizFrame.setModel(dataModel);

				var oPopOver = _this.getView().byId("idPopOver");
				oPopOver.connect(oVizFrame.getVizUid());
				oPopOver.setFormatString({
					"Cost": ChartFormatter.DefaultPattern.STANDARDFLOAT,
					"Revenue": ChartFormatter.DefaultPattern.STANDARDFLOAT
				});

				InitPageUtil.initPageSettings(_this.getView());
			});
		},
		_loadInfoData: function _loadInfoData(callback) {
			var that = this;
			var view = this.getView();
			var accountModel = view.getModel("accounts");

			accountModel.attachRequestCompleted(function () {
				var accounts = accountModel.getData();
				that.actualIban = accounts[1].iban;
				callback();
			});
			view.getModel("accounts").loadData("/apiFinTs/getAccounts");
		},
		handleDateSelectChange: function handleDateSelectChange(oEvent) {
			var sFrom = oEvent.getParameter("from");
			var sTo = oEvent.getParameter("to");
			var bValid = oEvent.getParameter("valid");

			if (bValid) {
				this.startDate = new Date(sFrom);
				this.endDate = new Date(sTo);
				this.getView().getModel("dateSelect").setProperty("/dateValueDRS2", new Date(sFrom));
				this.getView().getModel("dateSelect").setProperty("/secondDateValueDRS2", new Date(sTo));
				this._loadVizContainer();
			}
		},
		onAfterRendering: function onAfterRendering() {
			this.chartTypeSelect = this.getView().byId('chartTypeSelect');
		},
		onChartTypeChanged: function onChartTypeChanged(oEvent) {
			if (this.oVizFrame) {
				this.selectedVizKey = this.chart = parseInt(oEvent.getSource().getSelectedKey());

				var bindValue = this.settingsModel.chartType.values[this.selectedVizKey];
				this.selectedViz = bindValue;
				this._loadVizContainer();
			}
		},
		_setBusyViz: function _setBusyViz(dataModel) {
			var view = this.getView();
			dataModel.attachRequestSent(function () {
				var oVizFrame = view.byId("idVizFrame");
				oVizFrame.setBusyIndicatorDelay(0);
				oVizFrame.setBusy(true);
			});
			dataModel.attachRequestCompleted(function () {
				var oVizFrame = view.byId("idVizFrame");
				oVizFrame.setBusyIndicatorDelay(0);
				oVizFrame.setBusy(false);
			});
		},
		_loadVizContainer: function _loadVizContainer() {
			this.oVizFrame.destroyDataset();
			this.oVizFrame.destroyFeeds();
			this.oVizFrame.setVizType(this.selectedViz.vizType);
			var dataModel = new JSONModel();
			this._setBusyViz(dataModel);
			switch (this.selectedViz.json) {
				case "/timeBulletStacked.json":
					dataModel.loadData(this.dataPath + "timeBulletStacked/" + this.actualIban + "/" + this.startDate + "/" + this.endDate);
					break;
				case "/column/timeAxis.json":
					dataModel.loadData(this.dataPath + "timeAxis/" + this.actualIban + "/" + this.startDate + "/" + this.endDate);
					break;
				case "/bubble/medium.json":
					dataModel.loadData(this.dataPath + "timeAxis/" + this.actualIban + "/" + this.startDate + "/" + this.endDate);
					break;
				case "/column/medium.json":
					dataModel.loadData(this.dataPath + "timeAxis/" + this.actualIban + "/" + this.startDate + "/" + this.endDate);
					break;
				case "/column/large.json":
					dataModel.loadData(this.dataPath + "timeAxis/" + this.actualIban + "/" + this.startDate + "/" + this.endDate);
					break;
				case "/timeMultiple.json":
					dataModel.loadData(this.dataPath + "timeAxis/" + this.actualIban + "/" + this.startDate + "/" + this.endDate);
					break;
				default:
					dataModel.loadData(this.dataPath + this.selectedViz.json);
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
				"uid": "color",
				"type": "Dimension",
				"values": ["Country"]
			});
			switch (this.selectedVizKey) {
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
	});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvYWNjb3VudFNhbGVzL0FjY291bnRTYWxlc0NoYXJ0LmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZGF0YVBhdGgiLCJzZXR0aW5nc01vZGVsIiwiY2hhcnRUeXBlIiwibmFtZSIsImRhdGVTZWxlY3QiLCJkZWZhdWx0U2VsZWN0ZWQiLCJ2YWx1ZXMiLCJrZXkiLCJ2aXpUeXBlIiwianNvbiIsInZhbHVlIiwiZGF0YXNldCIsImRhdGEiLCJwYXRoIiwidml6UHJvcGVydGllcyIsInBsb3RBcmVhIiwiZGF0YUxhYmVsIiwiZm9ybWF0U3RyaW5nIiwiQ2hhcnRGb3JtYXR0ZXIiLCJEZWZhdWx0UGF0dGVybiIsIlNIT1JURkxPQVRfTUZEMiIsInZpc2libGUiLCJ3aW5kb3ciLCJzdGFydCIsImVuZCIsInZhbHVlQXhpcyIsImxhYmVsIiwiU0hPUlRGTE9BVCIsInRpdGxlIiwiY2F0ZWdvcnlBeGlzIiwic2l6ZUxlZ2VuZCIsImRpbWVuc2lvbnMiLCJkYXRhVHlwZSIsIm1lYXN1cmVzIiwidGltZUF4aXMiLCJpbnRlcnZhbCIsInVuaXQiLCJpbnRlcmFjdGlvbiIsInN5bmNWYWx1ZUF4aXMiLCJ2YWx1ZUF4aXMyIiwiZGF0YVBvaW50U3R5bGUiLCJydWxlcyIsImRhdGFDb250ZXh0IiwiQ29zdCIsInByb3BlcnRpZXMiLCJjb2xvciIsImRpc3BsYXlOYW1lIiwiZGF0YU5hbWUiLCJyZWNhcFRpdGxlIiwic2hvd1JlY2FwIiwic3RhcnRWYWx1ZSIsImxlZ2VuZCIsInRleHQiLCJuZWdhdGl2ZVZhbHVlIiwicG9zaXRpdmVWYWx1ZSIsImRhdGFTaGFwZSIsInByaW1hcnlBeGlzIiwib1ZpekZyYW1lIiwiY2hhcnRUeXBlU2VsZWN0IiwiY2hhcnQiLCJhY3R1YWxJYmFuIiwic3RhcnREYXRlIiwiRGF0ZSIsIm1vbWVudCIsInN1YnRyYWN0Iiwic3RhcnRPZiIsImVuZERhdGUiLCJzZWxlY3RlZFZpeiIsIm9uSW5pdCIsIm9KU09OTW9kZWxBY2NvdW50cyIsIkpTT05Nb2RlbCIsImdldFZpZXciLCJzZXRNb2RlbCIsImRhdGVGcm9tIiwic2V0VVRDRGF0ZSIsInNldFVUQ01vbnRoIiwic2V0VVRDRnVsbFllYXIiLCJkYXRlVG8iLCJvTW9kZWwiLCJzZXREYXRhIiwiZGVsaW1pdGVyRFJTMSIsImRhdGVWYWx1ZURSUzEiLCJzZWNvbmREYXRlVmFsdWVEUlMxIiwiZGF0ZUZvcm1hdERSUzEiLCJkYXRlVmFsdWVEUlMyIiwic2Vjb25kRGF0ZVZhbHVlRFJTMiIsImRhdGVNaW5EUlMyIiwiZGF0ZU1heERSUzIiLCJyYW5nZXMiLCJlbmRPZiIsIl9sb2FkSW5mb0RhdGEiLCJGb3JtYXQiLCJudW1lcmljRm9ybWF0dGVyIiwiZ2V0SW5zdGFuY2UiLCJzZXREZWZhdWx0QmluZGluZ01vZGUiLCJzYXAiLCJ1aSIsIm1vZGVsIiwiQmluZGluZ01vZGUiLCJPbmVXYXkiLCJieUlkIiwic2VsZWN0ZWRWaXpLZXkiLCJzZXRWaXpQcm9wZXJ0aWVzIiwiY29uc29sZSIsImxvZyIsImRhdGFNb2RlbCIsIl9zZXRCdXN5Vml6IiwibG9hZERhdGEiLCJvUG9wT3ZlciIsImNvbm5lY3QiLCJnZXRWaXpVaWQiLCJzZXRGb3JtYXRTdHJpbmciLCJTVEFOREFSREZMT0FUIiwiSW5pdFBhZ2VVdGlsIiwiaW5pdFBhZ2VTZXR0aW5ncyIsImNhbGxiYWNrIiwidGhhdCIsInZpZXciLCJhY2NvdW50TW9kZWwiLCJnZXRNb2RlbCIsImF0dGFjaFJlcXVlc3RDb21wbGV0ZWQiLCJhY2NvdW50cyIsImdldERhdGEiLCJpYmFuIiwiaGFuZGxlRGF0ZVNlbGVjdENoYW5nZSIsIm9FdmVudCIsInNGcm9tIiwiZ2V0UGFyYW1ldGVyIiwic1RvIiwiYlZhbGlkIiwic2V0UHJvcGVydHkiLCJfbG9hZFZpekNvbnRhaW5lciIsIm9uQWZ0ZXJSZW5kZXJpbmciLCJvbkNoYXJ0VHlwZUNoYW5nZWQiLCJwYXJzZUludCIsImdldFNvdXJjZSIsImdldFNlbGVjdGVkS2V5IiwiYmluZFZhbHVlIiwiYXR0YWNoUmVxdWVzdFNlbnQiLCJzZXRCdXN5SW5kaWNhdG9yRGVsYXkiLCJzZXRCdXN5IiwiZGVzdHJveURhdGFzZXQiLCJkZXN0cm95RmVlZHMiLCJzZXRWaXpUeXBlIiwib0RhdGFzZXQiLCJGbGF0dGVuZWREYXRhc2V0Iiwic2V0RGF0YXNldCIsInByb3BzIiwiZmVlZFZhbHVlQXhpcyIsImZlZWRWYWx1ZUF4aXMyIiwiZmVlZEFjdHVhbFZhbHVlcyIsImZlZWRUYXJnZXRWYWx1ZXMiLCJGZWVkSXRlbSIsImZlZWRUaW1lQXhpcyIsImZlZWRCdWJibGVXaWR0aCIsImZlZWRUaW1lQnVsbGV0Q29sb3IiLCJhZGRGZWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFXQ0EsVSxFQUFXLGlDO0FBQ1hDLGUsRUFBZ0I7QUFDZkMsY0FBVztBQUNWQyxVQUFNLFlBREk7QUFFVkMsZ0JBQVksZUFGRjtBQUdWQyxxQkFBaUIsR0FIUDtBQUlWQyxZQUFRLENBQUM7QUFDUkMsVUFBSyxHQURHO0FBRVJKLFdBQU0sY0FGRTtBQUdSSyxjQUFTLG1CQUhEO0FBSVJDLFdBQU0scUJBSkU7QUFLUkMsWUFBTyxDQUFDLE1BQUQsQ0FMQztBQU1SQyxjQUFTO0FBQ1Isb0JBQWMsQ0FBQztBQUNkLGVBQVEsTUFETTtBQUVkLGdCQUFTLFFBRks7QUFHZCxtQkFBWTtBQUhFLE9BQUQsQ0FETjtBQU1SLGtCQUFZLENBQUM7QUFDWixlQUFRLE1BREk7QUFFWixnQkFBUztBQUZHLE9BQUQsRUFJWDtBQUNDLGVBQVEsU0FEVDtBQUVDLGdCQUFTO0FBRlYsT0FKVyxDQU5KOztBQWVSQyxZQUFNO0FBQ0xDLGFBQU07QUFERDtBQWZFLE1BTkQ7QUF5QlJDLG9CQUFlO0FBQ2RDLGdCQUFVO0FBQ1RDLGtCQUFXO0FBQ1ZDLHNCQUFjQyxlQUFlQyxjQUFmLENBQThCQyxlQURsQztBQUVWQyxpQkFBUztBQUZDLFFBREY7QUFLVEMsZUFBUTtBQUNQQyxlQUFPLGdCQURBO0FBRVBDLGFBQUs7QUFGRTtBQUxDLE9BREk7QUFXZEMsaUJBQVc7QUFD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LENBQWVtRyxPQUFmLENBQXVCTixnQkFBdkI7QUFDQSxVQUFLN0YsU0FBTCxDQUFlbUcsT0FBZixDQUF1QkwsZ0JBQXZCO0FBQ0EsVUFBSzlGLFNBQUwsQ0FBZW1HLE9BQWYsQ0FBdUJILFlBQXZCO0FBQ0EsVUFBS2hHLFNBQUwsQ0FBZW1HLE9BQWYsQ0FBdUJSLGFBQXZCO0FBQ0E7QUFDRDtBQUNDLFVBQUszRixTQUFMLENBQWVtRyxPQUFmLENBQXVCUixhQUF2QjtBQUNBLFVBQUszRixTQUFMLENBQWVtRyxPQUFmLENBQXVCSCxZQUF2QjtBQUNBO0FBdEJGO0FBd0JBIiwiZmlsZSI6ImNvbnRyb2xsZXIvYWNjb3VudFNhbGVzL0FjY291bnRTYWxlc0NoYXJ0LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSBcImNvbS91bmlvcmcvY2YvYmFua2luZy9leGFtcGxlL2NvbnRyb2xsZXIvQmFzZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBDaGFydEZvcm1hdHRlciBmcm9tIFwic2FwL3Zpei91aTUvZm9ybWF0L0NoYXJ0Rm9ybWF0dGVyXCJcbmltcG9ydCBqUXVlcnkgZnJvbSBcImpxdWVyeS5zYXAuZ2xvYmFsXCJcbmltcG9ydCBKU09OTW9kZWwgZnJvbSBcInNhcC91aS9tb2RlbC9qc29uL0pTT05Nb2RlbFwiXG5pbXBvcnQgRmxhdHRlbmVkRGF0YXNldCBmcm9tIFwic2FwL3Zpei91aTUvZGF0YS9GbGF0dGVuZWREYXRhc2V0XCJcbmltcG9ydCBGZWVkSXRlbSBmcm9tIFwic2FwL3Zpei91aTUvY29udHJvbHMvY29tbW9uL2ZlZWRzL0ZlZWRJdGVtXCJcbmltcG9ydCBGb3JtYXQgZnJvbSBcInNhcC92aXovdWk1L2FwaS9lbnYvRm9ybWF0XCJcbmltcG9ydCBJbml0UGFnZVV0aWwgZnJvbSBcImNvbS91bmlvcmcvY2YvYmFua2luZy9leGFtcGxlL3V0aWxzL0luaXRQYWdlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudFNhbGVzIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuXG5cdGRhdGFQYXRoID0gXCIvYXBpRmluVHMvZ2V0QWNjb3VudFNhbGVzQ2hhcnQvXCJcblx0c2V0dGluZ3NNb2RlbCA9IHtcblx0XHRjaGFydFR5cGU6IHtcblx0XHRcdG5hbWU6IFwiQ2hhcnQgVHlwZVwiLFxuXHRcdFx0ZGF0ZVNlbGVjdDogXCJEYXR1bXNhdXN3YWhsXCIsXG5cdFx0XHRkZWZhdWx0U2VsZWN0ZWQ6IFwiM1wiLFxuXHRcdFx0dmFsdWVzOiBbe1xuXHRcdFx0XHRrZXk6IFwiMFwiLFxuXHRcdFx0XHRuYW1lOiBcIkJ1YmJsZSBDaGFydFwiLFxuXHRcdFx0XHR2aXpUeXBlOiBcInRpbWVzZXJpZXNfYnViYmxlXCIsXG5cdFx0XHRcdGpzb246IFwiL2J1YmJsZS9tZWRpdW0uanNvblwiLFxuXHRcdFx0XHR2YWx1ZTogW1wiQ29zdFwiXSxcblx0XHRcdFx0ZGF0YXNldDoge1xuXHRcdFx0XHRcdFwiZGltZW5zaW9uc1wiOiBbe1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiRGF0ZVwiLFxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcIntEYXRlfVwiLFxuXHRcdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImRhdGVcIlxuXHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdFwibWVhc3VyZXNcIjogW3tcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkNvc3RcIixcblx0XHRcdFx0XHRcdFwidmFsdWVcIjogXCJ7Q29zdH1cIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlJldmVudWVcIixcblx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcIntSZXZlbnVlfVwiXG5cdFx0XHRcdFx0XHR9XSxcblxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHBhdGg6IFwiL1wiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR2aXpQcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdFx0cGxvdEFyZWE6IHtcblx0XHRcdFx0XHRcdGRhdGFMYWJlbDoge1xuXHRcdFx0XHRcdFx0XHRmb3JtYXRTdHJpbmc6IENoYXJ0Rm9ybWF0dGVyLkRlZmF1bHRQYXR0ZXJuLlNIT1JURkxPQVRfTUZEMixcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR3aW5kb3c6IHtcblx0XHRcdFx0XHRcdFx0c3RhcnQ6IFwiZmlyc3REYXRhUG9pbnRcIixcblx0XHRcdFx0XHRcdFx0ZW5kOiBcImxhc3REYXRhUG9pbnRcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dmFsdWVBeGlzOiB7XG5cdFx0XHRcdFx0XHRsYWJlbDoge1xuXHRcdFx0XHRcdFx0XHRmb3JtYXRTdHJpbmc6IENoYXJ0Rm9ybWF0dGVyLkRlZmF1bHRQYXR0ZXJuLlNIT1JURkxPQVRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2F0ZWdvcnlBeGlzOiB7XG5cdFx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiB0cnVlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaXplTGVnZW5kOiB7XG5cdFx0XHRcdFx0XHRmb3JtYXRTdHJpbmc6IENoYXJ0Rm9ybWF0dGVyLkRlZmF1bHRQYXR0ZXJuLlNIT1JURkxPQVRfTUZEMixcblx0XHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHRcdHZpc2libGU6IHRydWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwge1xuXHRcdFx0XHRrZXk6IFwiMVwiLFxuXHRcdFx0XHRuYW1lOiBcIkNvbHVtbiBDaGFydFwiLFxuXHRcdFx0XHR2aXpUeXBlOiBcInRpbWVzZXJpZXNfY29sdW1uXCIsXG5cdFx0XHRcdGpzb246IFwiL2NvbHVtbi9tZWRpdW0uanNvblwiLFxuXHRcdFx0XHR2YWx1ZTogW1wiQ29zdFwiXSxcblx0XHRcdFx0ZGF0YXNldDoge1xuXHRcdFx0XHRcdGRpbWVuc2lvbnM6IFt7XG5cdFx0XHRcdFx0XHRuYW1lOiAnRGF0ZScsXG5cdFx0XHRcdFx0XHR2YWx1ZTogXCJ7RGF0ZX1cIixcblx0XHRcdFx0XHRcdGRhdGFUeXBlOiAnZGF0ZSdcblx0XHRcdFx0XHR9XSxcblx0XHRcdFx0XHRtZWFzdXJlczogW3tcblx0XHRcdFx0XHRcdG5hbWU6ICdDb3N0Jyxcblx0XHRcdFx0XHRcdHZhbHVlOiAne0Nvc3R9J1xuXHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHBhdGg6IFwiL1wiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR2aXpQcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdFx0cGxvdEFyZWE6IHtcblx0XHRcdFx0XHRcdGRhdGFMYWJlbDoge1xuXHRcdFx0XHRcdFx0XHRmb3JtYXRTdHJpbmc6IENoYXJ0Rm9ybWF0dGVyLkRlZmF1bHRQYXR0ZXJuLlNIT1JURkxPQVRfTUZEMixcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR3aW5kb3c6IHtcblx0XHRcdFx0XHRcdFx0c3RhcnQ6IFwiZmlyc3REYXRhUG9pbnRcIixcblx0XHRcdFx0XHRcdFx0ZW5kOiBcImxhc3REYXRhUG9pbnRcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHZhbHVlQXhpczoge1xuXHRcdFx0XHRcdFx0bGFiZWw6IHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0U3RyaW5nOiBDaGFydEZvcm1hdHRlci5EZWZhdWx0UGF0dGVybi5TSE9SVEZMT0FUXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwge1xuXHRcdFx0XHRrZXk6IFwiMlwiLFxuXHRcdFx0XHRuYW1lOiBcIkNvbHVtbiBDaGFydCB3aXRoIE11bHRpcGxlIFNlcmllc1wiLFxuXHRcdFx0XHR2aXpUeXBlOiBcInRpbWVzZXJpZXNfY29sdW1uXCIsXG5cdFx0XHRcdGpzb246IFwiL3RpbWVCdWxsZXRTdGFja2VkLmpzb25cIixcblx0XHRcdFx0dmFsdWU6IFtcIkhhYmVuXCIsIFwiU29sbFwiXSxcblx0XHRcdFx0ZGF0YXNldDoge1xuXHRcdFx0XHRcdGRpbWVuc2lvbnM6IFt7XG5cdFx0XHRcdFx0XHRuYW1lOiAnRGF0ZScsXG5cdFx0XHRcdFx0XHR2YWx1ZTogXCJ7RGF0ZX1cIixcblx0XHRcdFx0XHRcdGRhdGFUeXBlOiAnZGF0ZSdcblx0XHRcdFx0XHR9XSxcblx0XHRcdFx0XHRtZWFzdXJlczogW3tcblx0XHRcdFx0XHRcdG5hbWU6ICdIYWJlbicsXG5cdFx0XHRcdFx0XHR2YWx1ZTogJ3tDb3N0Mn0nXG5cdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0bmFtZTogJ1NvbGwnLFxuXHRcdFx0XHRcdFx0dmFsdWU6ICd7Q29zdDF9J1xuXHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHBhdGg6IFwiL1wiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR2aXpQcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdFx0cGxvdEFyZWE6IHtcblx0XHRcdFx0XHRcdGRhdGFMYWJlbDoge1xuXHRcdFx0XHRcdFx0XHRmb3JtYXRTdHJpbmc6IENoYXJ0Rm9ybWF0dGVyLkRlZmF1bHRQYXR0ZXJuLlNIT1JURkxPQVRfTUZEMixcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR3aW5kb3c6IHtcblx0XHRcdFx0XHRcdFx0c3RhcnQ6IFwiZmlyc3REYXRhUG9pbnRcIixcblx0XHRcdFx0XHRcdFx0ZW5kOiBcImxhc3REYXRhUG9pbnRcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHZhbHVlQXhpczoge1xuXHRcdFx0XHRcdFx0bGFiZWw6IHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0U3RyaW5nOiBDaGFydEZvcm1hdHRlci5EZWZhdWx0UGF0dGVybi5TSE9SVEZMT0FUXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwge1xuXHRcdFx0XHRrZXk6IFwiM1wiLFxuXHRcdFx0XHRuYW1lOiBcIkxpbmUgQ2hhcnRcIixcblx0XHRcdFx0dml6VHlwZTogXCJ0aW1lc2VyaWVzX2xpbmVcIixcblx0XHRcdFx0anNvbjogXCIvY29sdW1uL3RpbWVBeGlzLmpzb25cIixcblx0XHRcdFx0dmFsdWU6IFtcIlJldmVudWVcIl0sXG5cdFx0XHRcdGRhdGFzZXQ6IHtcblx0XHRcdFx0XHRkaW1lbnNpb25zOiBbe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0RhdGUnLFxuXHRcdFx0XHRcdFx0dmFsdWU6IFwie0RhdGV9XCIsXG5cdFx0XHRcdFx0XHRkYXRhVHlwZTogJ2RhdGUnXG5cdFx0XHRcdFx0fV0sXG5cdFx0XHRcdFx0bWVhc3VyZXM6IFt7XG5cdFx0XHRcdFx0XHRuYW1lOiAnUmV2ZW51ZScsXG5cdFx0XHRcdFx0XHR2YWx1ZTogJ3tSZXZlbnVlfSdcblx0XHRcdFx0XHR9XSxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRwYXRoOiBcIi9cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0dml6UHJvcGVydGllczoge1xuXHRcdFx0XHRcdHBsb3RBcmVhOiB7XG5cdFx0XHRcdFx0XHR3aW5kb3c6IHtcblx0XHRcdFx0XHRcdFx0c3RhcnQ6IFwiZmlyc3REYXRhUG9pbnRcIixcblx0XHRcdFx0XHRcdFx0ZW5kOiBcImxhc3REYXRhUG9pbnRcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGRhdGFMYWJlbDoge1xuXHRcdFx0XHRcdFx0XHRmb3JtYXRTdHJpbmc6IENoYXJ0Rm9ybWF0dGVyLkRlZmF1bHRQYXR0ZXJuLlNIT1JURkxPQVRfTUZEMixcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHZhbHVlQXhpczoge1xuXHRcdFx0XHRcdFx0dmlzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGxhYmVsOiB7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdFN0cmluZzogQ2hhcnRGb3JtYXR0ZXIuRGVmYXVsdFBhdHRlcm4uU0hPUlRGTE9BVFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aW1lQXhpczoge1xuXHRcdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRpbnRlcnZhbDoge1xuXHRcdFx0XHRcdFx0XHR1bml0OiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRpbnRlcmFjdGlvbjoge1xuXHRcdFx0XHRcdFx0c3luY1ZhbHVlQXhpczogZmFsc2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIHtcblx0XHRcdFx0a2V5OiBcIjRcIixcblx0XHRcdFx0bmFtZTogXCJMaW5lIENoYXJ0IHdpdGggRHluYW1pYyBWYWx1ZSBBeGlzXCIsXG5cdFx0XHRcdHZpelR5cGU6IFwidGltZXNlcmllc19saW5lXCIsXG5cdFx0XHRcdGpzb246IFwiL2NvbHVtbi90aW1lQXhpcy5qc29uXCIsXG5cdFx0XHRcdHZhbHVlOiBbXCJSZXZlbnVlXCJdLFxuXHRcdFx0XHRkYXRhc2V0OiB7XG5cdFx0XHRcdFx0ZGltZW5zaW9uczogW3tcblx0XHRcdFx0XHRcdG5hbWU6ICdEYXRlJyxcblx0XHRcdFx0XHRcdHZhbHVlOiBcIntEYXRlfVwiLFxuXHRcdFx0XHRcdFx0ZGF0YVR5cGU6ICdkYXRlJ1xuXHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdG1lYXN1cmVzOiBbe1xuXHRcdFx0XHRcdFx0bmFtZTogJ1JldmVudWUnLFxuXHRcdFx0XHRcdFx0dmFsdWU6ICd7UmV2ZW51ZX0nXG5cdFx0XHRcdFx0fV0sXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0cGF0aDogXCIvXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZpelByb3BlcnRpZXM6IHtcblx0XHRcdFx0XHRwbG90QXJlYToge1xuXHRcdFx0XHRcdFx0d2luZG93OiB7XG5cdFx0XHRcdFx0XHRcdHN0YXJ0OiBcImZpcnN0RGF0YVBvaW50XCIsXG5cdFx0XHRcdFx0XHRcdGVuZDogXCJsYXN0RGF0YVBvaW50XCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRkYXRhTGFiZWw6IHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0U3RyaW5nOiBDaGFydEZvcm1hdHRlci5EZWZhdWx0UGF0dGVybi5TSE9SVEZMT0FUX01GRDIsXG5cdFx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR2YWx1ZUF4aXM6IHtcblx0XHRcdFx0XHRcdHZpc2libGU6IHRydWUsXG5cdFx0XHRcdFx0XHRsYWJlbDoge1xuXHRcdFx0XHRcdFx0XHRmb3JtYXRTdHJpbmc6IENoYXJ0Rm9ybWF0dGVyLkRlZmF1bHRQYXR0ZXJuLlNIT1JURkxPQVRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGltZUF4aXM6IHtcblx0XHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGludGVyYWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRzeW5jVmFsdWVBeGlzOiB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LCB7XG5cdFx0XHRcdGtleTogXCI1XCIsXG5cdFx0XHRcdG5hbWU6IFwiU2NhdHRlciBDaGFydFwiLFxuXHRcdFx0XHR2aXpUeXBlOiBcInRpbWVzZXJpZXNfc2NhdHRlclwiLFxuXHRcdFx0XHRqc29uOiBcIi9jb2x1bW4vbGFyZ2UuanNvblwiLFxuXHRcdFx0XHR2YWx1ZTogW1wiQ29zdFwiXSxcblx0XHRcdFx0ZGF0YXNldDoge1xuXHRcdFx0XHRcdGRpbWVuc2lvbnM6IFt7XG5cdFx0XHRcdFx0XHRuYW1lOiAnRGF0ZScsXG5cdFx0XHRcdFx0XHR2YWx1ZTogXCJ7RGF0ZX1cIixcblx0XHRcdFx0XHRcdGRhdGFUeXBlOiAnZGF0ZSdcblx0XHRcdFx0XHR9XSxcblx0XHRcdFx0XHRtZWFzdXJlczogW3tcblx0XHRcdFx0XHRcdG5hbWU6ICdDb3N0Jyxcblx0XHRcdFx0XHRcdHZhbHVlOiAne0Nvc3R9J1xuXHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHBhdGg6IFwiL1wiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR2aXpQcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdFx0cGxvdEFyZWE6IHtcblx0XHRcdFx0XHRcdGRhdGFMYWJlbDoge1xuXHRcdFx0XHRcdFx0XHRmb3JtYXRTdHJpbmc6IENoYXJ0Rm9ybWF0dGVyLkRlZmF1bHRQYXR0ZXJuLlNIT1JURkxPQVRfTUZEMixcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR3aW5kb3c6IHtcblx0XHRcdFx0XHRcdFx0c3RhcnQ6IFwiZmlyc3REYXRhUG9pbnRcIixcblx0XHRcdFx0XHRcdFx0ZW5kOiBcImxhc3REYXRhUG9pbnRcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dmFsdWVBeGlzOiB7XG5cdFx0XHRcdFx0XHRsYWJlbDoge1xuXHRcdFx0XHRcdFx0XHRmb3JtYXRTdHJpbmc6IENoYXJ0Rm9ybWF0dGVyLkRlZmF1bHRQYXR0ZXJuLlNIT1JURkxPQVRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlLFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHR9LCB7XG5cdFx0XHRcdGtleTogXCI2XCIsXG5cdFx0XHRcdG5hbWU6IFwiQ29tYmluZWQgQ29sdW1uICYgTGluZVwiLFxuXHRcdFx0XHR2aXpUeXBlOiBcInRpbWVzZXJpZXNfY29tYmluYXRpb25cIixcblx0XHRcdFx0anNvbjogXCIvY29sdW1uL21lZGl1bS5qc29uXCIsXG5cdFx0XHRcdHZhbHVlOiBbXCJSZXZlbnVlXCIsIFwiQ29zdFwiXSxcblx0XHRcdFx0ZGF0YXNldDoge1xuXHRcdFx0XHRcdGRpbWVuc2lvbnM6IFt7XG5cdFx0XHRcdFx0XHRuYW1lOiAnRGF0ZScsXG5cdFx0XHRcdFx0XHR2YWx1ZTogXCJ7RGF0ZX1cIixcblx0XHRcdFx0XHRcdGRhdGFUeXBlOiAnZGF0ZSdcblx0XHRcdFx0XHR9XSxcblx0XHRcdFx0XHRtZWFzdXJlczogW3tcblx0XHRcdFx0XHRcdG5hbWU6ICdSZXZlbnVlJyxcblx0XHRcdFx0XHRcdHZhbHVlOiAne1JldmVudWV9J1xuXHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdG5hbWU6ICdDb3N0Jyxcblx0XHRcdFx0XHRcdHZhbHVlOiAne0Nvc3R9J1xuXHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHBhdGg6IFwiL1wiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR2aXpQcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdFx0cGxvdEFyZWE6IHtcblx0XHRcdFx0XHRcdHdpbmRvdzoge1xuXHRcdFx0XHRcdFx0XHRzdGFydDogXCJmaXJzdERhdGFQb2ludFwiLFxuXHRcdFx0XHRcdFx0XHRlbmQ6IFwibGFzdERhdGFQb2ludFwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZGF0YUxhYmVsOiB7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdFN0cmluZzogQ2hhcnRGb3JtYXR0ZXIuRGVmYXVsdFBhdHRlcm4uU0hPUlRGTE9BVF9NRkQyLFxuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dmFsdWVBeGlzOiB7XG5cdFx0XHRcdFx0XHR2aXNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0bGFiZWw6IHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0U3RyaW5nOiBDaGFydEZvcm1hdHRlci5EZWZhdWx0UGF0dGVybi5TSE9SVEZMT0FUXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRpbWVBeGlzOiB7XG5cdFx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGludGVydmFsOiB7XG5cdFx0XHRcdFx0XHRcdHVuaXQ6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGludGVyYWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRzeW5jVmFsdWVBeGlzOiBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwge1xuXHRcdFx0XHRrZXk6IFwiN1wiLFxuXHRcdFx0XHRuYW1lOiBcIkNvbWJpbmVkIENvbHVtbiAmIExpbmUgd2l0aCBEdWFsIEF4aXNcIixcblx0XHRcdFx0dml6VHlwZTogXCJkdWFsX3RpbWVzZXJpZXNfY29tYmluYXRpb25cIixcblx0XHRcdFx0anNvbjogXCIvY29sdW1uL21lZGl1bS5qc29uXCIsXG5cdFx0XHRcdHZhbHVlOiBbXCJSZXZlbnVlXCIsIFwiQ29zdFwiXSxcblx0XHRcdFx0ZGF0YXNldDoge1xuXHRcdFx0XHRcdGRpbWVuc2lvbnM6IFt7XG5cdFx0XHRcdFx0XHRuYW1lOiAnRGF0ZScsXG5cdFx0XHRcdFx0XHR2YWx1ZTogXCJ7RGF0ZX1cIixcblx0XHRcdFx0XHRcdGRhdGFUeXBlOiAnZGF0ZSdcblx0XHRcdFx0XHR9XSxcblx0XHRcdFx0XHRtZWFzdXJlczogW3tcblx0XHRcdFx0XHRcdG5hbWU6ICdSZXZlbnVlJyxcblx0XHRcdFx0XHRcdHZhbHVlOiAne1JldmVudWV9J1xuXHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdG5hbWU6ICdDb3N0Jyxcblx0XHRcdFx0XHRcdHZhbHVlOiAne0Nvc3R9J1xuXHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHBhdGg6IFwiL1wiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR2aXpQcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdFx0cGxvdEFyZWE6IHtcblx0XHRcdFx0XHRcdHdpbmRvdzoge1xuXHRcdFx0XHRcdFx0XHRzdGFydDogXCJmaXJzdERhdGFQb2ludFwiLFxuXHRcdFx0XHRcdFx0XHRlbmQ6IFwibGFzdERhdGFQb2ludFwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZGF0YUxhYmVsOiB7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdFN0cmluZzogQ2hhcnRGb3JtYXR0ZXIuRGVmYXVsdFBhdHRlcm4uU0hPUlRGTE9BVF9NRkQyLFxuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dmFsdWVBeGlzOiB7XG5cdFx0XHRcdFx0XHR2aXNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0bGFiZWw6IHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0U3RyaW5nOiBDaGFydEZvcm1hdHRlci5EZWZhdWx0UGF0dGVybi5TSE9SVEZMT0FUXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHZhbHVlQXhpczI6IHtcblx0XHRcdFx0XHRcdHZpc2libGU6IHRydWUsXG5cdFx0XHRcdFx0XHRsYWJlbDoge1xuXHRcdFx0XHRcdFx0XHRmb3JtYXRTdHJpbmc6IENoYXJ0Rm9ybWF0dGVyLkRlZmF1bHRQYXR0ZXJuLlNIT1JURkxPQVRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGltZUF4aXM6IHtcblx0XHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0aW50ZXJ2YWw6IHtcblx0XHRcdFx0XHRcdFx0dW5pdDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0aW50ZXJhY3Rpb246IHtcblx0XHRcdFx0XHRcdHN5bmNWYWx1ZUF4aXM6IGZhbHNlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LCB7XG5cdFx0XHRcdGtleTogXCI4XCIsXG5cdFx0XHRcdG5hbWU6IFwiQnVsbGV0XCIsXG5cdFx0XHRcdHZpelR5cGU6IFwidGltZXNlcmllc19idWxsZXRcIixcblx0XHRcdFx0anNvbjogXCIvdGltZUJ1bGxldFN0YWNrZWQuanNvblwiLFxuXHRcdFx0XHR2YWx1ZTogW1wiQ29zdFwiLCBcIkJ1ZGdldFwiXSxcblx0XHRcdFx0ZGF0YXNldDoge1xuXHRcdFx0XHRcdGRpbWVuc2lvbnM6IFt7XG5cdFx0XHRcdFx0XHRuYW1lOiAnRGF0ZScsXG5cdFx0XHRcdFx0XHR2YWx1ZTogXCJ7RGF0ZX1cIixcblx0XHRcdFx0XHRcdGRhdGFUeXBlOiAnZGF0ZSdcblx0XHRcdFx0XHR9XSxcblx0XHRcdFx0XHRtZWFzdXJlczogW3tcblx0XHRcdFx0XHRcdG5hbWU6ICdDb3N0Jyxcblx0XHRcdFx0XHRcdHZhbHVlOiAne0Nvc3R9J1xuXHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdG5hbWU6ICdCdWRnZXQnLFxuXHRcdFx0XHRcdFx0dmFsdWU6ICd7QnVkZ2V0fSdcblx0XHRcdFx0XHR9XSxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRwYXRoOiBcIi9cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0dml6UHJvcGVydGllczoge1xuXHRcdFx0XHRcdHBsb3RBcmVhOiB7XG5cdFx0XHRcdFx0XHR3aW5kb3c6IHtcblx0XHRcdFx0XHRcdFx0c3RhcnQ6IFwiZmlyc3REYXRhUG9pbnRcIixcblx0XHRcdFx0XHRcdFx0ZW5kOiBcImxhc3REYXRhUG9pbnRcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGRhdGFMYWJlbDoge1xuXHRcdFx0XHRcdFx0XHRmb3JtYXRTdHJpbmc6IENoYXJ0Rm9ybWF0dGVyLkRlZmF1bHRQYXR0ZXJuLlNIT1JURkxPQVRfTUZEMixcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRkYXRhUG9pbnRTdHlsZToge1xuXHRcdFx0XHRcdFx0XHRydWxlczogW3tcblx0XHRcdFx0XHRcdFx0XHRkYXRhQ29udGV4dDoge0Nvc3Q6IFwiKlwifSxcblx0XHRcdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogXCJzYXBVaUNoYXJ0UGFsZXR0ZVNlcXVlbnRpYWxIdWUxTGlnaHQxXCJcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXlOYW1lOiBcIkFjdHVhbFwiLFxuXHRcdFx0XHRcdFx0XHRcdGRhdGFOYW1lOiB7Q29zdDogXCJBY3R1YWxcIn1cblx0XHRcdFx0XHRcdFx0fV1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHZhbHVlQXhpczoge1xuXHRcdFx0XHRcdFx0dmlzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGxhYmVsOiB7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdFN0cmluZzogQ2hhcnRGb3JtYXR0ZXIuRGVmYXVsdFBhdHRlcm4uU0hPUlRGTE9BVFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR2YWx1ZUF4aXMyOiB7XG5cdFx0XHRcdFx0XHR2aXNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0bGFiZWw6IHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0U3RyaW5nOiBDaGFydEZvcm1hdHRlci5EZWZhdWx0UGF0dGVybi5TSE9SVEZMT0FUXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRpbWVBeGlzOiB7XG5cdFx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGludGVydmFsOiB7XG5cdFx0XHRcdFx0XHRcdHVuaXQ6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGludGVyYWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRzeW5jVmFsdWVBeGlzOiBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwge1xuXHRcdFx0XHRrZXk6IFwiOVwiLFxuXHRcdFx0XHRuYW1lOiBcIkJ1bGxldCBDaGFydCB3aXRoIE11bHRpcGxlIFNlcmllc1wiLFxuXHRcdFx0XHR2aXpUeXBlOiBcInRpbWVzZXJpZXNfYnVsbGV0XCIsXG5cdFx0XHRcdGpzb246IFwiL3RpbWVNdWx0aXBsZS5qc29uXCIsXG5cdFx0XHRcdHZhbHVlOiBbXCJBY3R1YWxcIiwgXCJCdWRnZXRcIl0sXG5cdFx0XHRcdGRhdGFzZXQ6IHtcblx0XHRcdFx0XHRkaW1lbnNpb25zOiBbe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0RhdGUnLFxuXHRcdFx0XHRcdFx0dmFsdWU6IFwie0RhdGV9XCIsXG5cdFx0XHRcdFx0XHRkYXRhVHlwZTogJ2RhdGUnXG5cdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0bmFtZTogJ0NvdW50cnknLFxuXHRcdFx0XHRcdFx0dmFsdWU6ICd7Q291bnRyeX0nXG5cdFx0XHRcdFx0fV0sXG5cdFx0XHRcdFx0bWVhc3VyZXM6IFt7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQWN0dWFsJyxcblx0XHRcdFx0XHRcdHZhbHVlOiAne0FjdHVhbH0nXG5cdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0bmFtZTogJ0J1ZGdldCcsXG5cdFx0XHRcdFx0XHR2YWx1ZTogXCJ7QnVkZ2V0fVwiXG5cdFx0XHRcdFx0fV0sXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0cGF0aDogXCIvXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZpelByb3BlcnRpZXM6IHtcblx0XHRcdFx0XHRwbG90QXJlYToge1xuXHRcdFx0XHRcdFx0d2luZG93OiB7XG5cdFx0XHRcdFx0XHRcdHN0YXJ0OiBcImZpcnN0RGF0YVBvaW50XCIsXG5cdFx0XHRcdFx0XHRcdGVuZDogXCJsYXN0RGF0YVBvaW50XCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRkYXRhTGFiZWw6IHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0U3RyaW5nOiBDaGFydEZvcm1hdHRlci5EZWZhdWx0UGF0dGVybi5TSE9SVEZMT0FUX01GRDIsXG5cdFx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR2YWx1ZUF4aXM6IHtcblx0XHRcdFx0XHRcdHZpc2libGU6IHRydWUsXG5cdFx0XHRcdFx0XHRsYWJlbDoge1xuXHRcdFx0XHRcdFx0XHRmb3JtYXRTdHJpbmc6IENoYXJ0Rm9ybWF0dGVyLkRlZmF1bHRQYXR0ZXJuLlNIT1JURkxPQVRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dmFsdWVBeGlzMjoge1xuXHRcdFx0XHRcdFx0dmlzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGxhYmVsOiB7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdFN0cmluZzogQ2hhcnRGb3JtYXR0ZXIuRGVmYXVsdFBhdHRlcm4uU0hPUlRGTE9BVFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aW1lQXhpczoge1xuXHRcdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRpbnRlcnZhbDoge1xuXHRcdFx0XHRcdFx0XHR1bml0OiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRpbnRlcmFjdGlvbjoge1xuXHRcdFx0XHRcdFx0c3luY1ZhbHVlQXhpczogZmFsc2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIHtcblx0XHRcdFx0a2V5OiBcIjEwXCIsXG5cdFx0XHRcdG5hbWU6IFwiU3RhY2tlZCBDb2x1bW5cIixcblx0XHRcdFx0dml6VHlwZTogXCJ0aW1lc2VyaWVzX3N0YWNrZWRfY29sdW1uXCIsXG5cdFx0XHRcdGpzb246IFwiL3RpbWVCdWxsZXRTdGFja2VkLmpzb25cIixcblx0XHRcdFx0dmFsdWU6IFtcIkhhYmVuXCIsIFwiU29sbFwiXSxcblx0XHRcdFx0ZGF0YXNldDoge1xuXHRcdFx0XHRcdGRpbWVuc2lvbnM6IFt7XG5cdFx0XHRcdFx0XHRuYW1lOiAnRGF0ZScsXG5cdFx0XHRcdFx0XHR2YWx1ZTogXCJ7RGF0ZX1cIixcblx0XHRcdFx0XHRcdGRhdGFUeXBlOiAnZGF0ZSdcblx0XHRcdFx0XHR9XSxcblx0XHRcdFx0XHRtZWFzdXJlczogW3tcblx0XHRcdFx0XHRcdG5hbWU6ICdIYWJlbicsXG5cdFx0XHRcdFx0XHR2YWx1ZTogJ3tDb3N0Mn0nXG5cdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0bmFtZTogJ1NvbGwnLFxuXHRcdFx0XHRcdFx0dmFsdWU6ICd7Q29zdDF9J1xuXHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHBhdGg6IFwiL1wiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR2aXpQcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdFx0cGxvdEFyZWE6IHtcblx0XHRcdFx0XHRcdHdpbmRvdzoge1xuXHRcdFx0XHRcdFx0XHRzdGFydDogXCJmaXJzdERhdGFQb2ludFwiLFxuXHRcdFx0XHRcdFx0XHRlbmQ6IFwibGFzdERhdGFQb2ludFwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZGF0YUxhYmVsOiB7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdFN0cmluZzogQ2hhcnRGb3JtYXR0ZXIuRGVmYXVsdFBhdHRlcm4uU0hPUlRGTE9BVF9NRkQyLFxuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHZhbHVlQXhpczoge1xuXHRcdFx0XHRcdFx0dmlzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGxhYmVsOiB7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdFN0cmluZzogQ2hhcnRGb3JtYXR0ZXIuRGVmYXVsdFBhdHRlcm4uU0hPUlRGTE9BVFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR2YWx1ZUF4aXMyOiB7XG5cdFx0XHRcdFx0XHR2aXNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0bGFiZWw6IHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0U3RyaW5nOiBDaGFydEZvcm1hdHRlci5EZWZhdWx0UGF0dGVybi5TSE9SVEZMT0FUXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRpbWVBeGlzOiB7XG5cdFx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGludGVydmFsOiB7XG5cdFx0XHRcdFx0XHRcdHVuaXQ6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGludGVyYWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRzeW5jVmFsdWVBeGlzOiBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwge1xuXHRcdFx0XHRrZXk6IFwiMTFcIixcblx0XHRcdFx0bmFtZTogXCJTdGFja2VkIENvbHVtbiAxMDAlXCIsXG5cdFx0XHRcdHZpelR5cGU6IFwidGltZXNlcmllc18xMDBfc3RhY2tlZF9jb2x1bW5cIixcblx0XHRcdFx0anNvbjogXCIvdGltZUJ1bGxldFN0YWNrZWQuanNvblwiLFxuXHRcdFx0XHR2YWx1ZTogW1wiSGFiZW5cIiwgXCJTb2xsXCJdLFxuXHRcdFx0XHRkYXRhc2V0OiB7XG5cdFx0XHRcdFx0ZGltZW5zaW9uczogW3tcblx0XHRcdFx0XHRcdG5hbWU6ICdEYXRlJyxcblx0XHRcdFx0XHRcdHZhbHVlOiBcIntEYXRlfVwiLFxuXHRcdFx0XHRcdFx0ZGF0YVR5cGU6ICdkYXRlJ1xuXHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdG1lYXN1cmVzOiBbe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0hhYmVuJyxcblx0XHRcdFx0XHRcdHZhbHVlOiAne0Nvc3QyfSdcblx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRuYW1lOiAnU29sbCcsXG5cdFx0XHRcdFx0XHR2YWx1ZTogJ3tDb3N0MX0nXG5cdFx0XHRcdFx0fV0sXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0cGF0aDogXCIvXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZpelByb3BlcnRpZXM6IHtcblx0XHRcdFx0XHRwbG90QXJlYToge1xuXHRcdFx0XHRcdFx0d2luZG93OiB7XG5cdFx0XHRcdFx0XHRcdHN0YXJ0OiBcImZpcnN0RGF0YVBvaW50XCIsXG5cdFx0XHRcdFx0XHRcdGVuZDogXCJsYXN0RGF0YVBvaW50XCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRkYXRhTGFiZWw6IHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0U3RyaW5nOiBDaGFydEZvcm1hdHRlci5EZWZhdWx0UGF0dGVybi5TSE9SVEZMT0FUX01GRDIsXG5cdFx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dmFsdWVBeGlzOiB7XG5cdFx0XHRcdFx0XHR2aXNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0bGFiZWw6IHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0U3RyaW5nOiBDaGFydEZvcm1hdHRlci5EZWZhdWx0UGF0dGVybi5TSE9SVEZMT0FUXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHZhbHVlQXhpczI6IHtcblx0XHRcdFx0XHRcdHZpc2libGU6IHRydWUsXG5cdFx0XHRcdFx0XHRsYWJlbDoge1xuXHRcdFx0XHRcdFx0XHRmb3JtYXRTdHJpbmc6IENoYXJ0Rm9ybWF0dGVyLkRlZmF1bHRQYXR0ZXJuLlNIT1JURkxPQVRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGltZUF4aXM6IHtcblx0XHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0aW50ZXJ2YWw6IHtcblx0XHRcdFx0XHRcdFx0dW5pdDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0aW50ZXJhY3Rpb246IHtcblx0XHRcdFx0XHRcdHN5bmNWYWx1ZUF4aXM6IGZhbHNlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LCB7XG5cdFx0XHRcdGtleTogXCIxMlwiLFxuXHRcdFx0XHRuYW1lOiBcIldhdGVyZmFsbFwiLFxuXHRcdFx0XHR2aXpUeXBlOiBcInRpbWVzZXJpZXNfd2F0ZXJmYWxsXCIsXG5cdFx0XHRcdGpzb246IFwiL3RpbWVXYXRlckZhbGwuanNvblwiLFxuXHRcdFx0XHR2YWx1ZTogW1wiQ2hhbmdlIG9mIFN0b2NrXCJdLFxuXHRcdFx0XHRkYXRhc2V0OiB7XG5cdFx0XHRcdFx0ZGltZW5zaW9uczogW3tcblx0XHRcdFx0XHRcdG5hbWU6ICdEYXRlJyxcblx0XHRcdFx0XHRcdHZhbHVlOiBcIntEYXRlfVwiLFxuXHRcdFx0XHRcdFx0ZGF0YVR5cGU6ICdkYXRlJ1xuXHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdG1lYXN1cmVzOiBbe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0NoYW5nZSBvZiBTdG9jaycsXG5cdFx0XHRcdFx0XHR2YWx1ZTogJ3tDaGFuZ2Ugb2YgU3RvY2t9J1xuXHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHBhdGg6IFwiL1wiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR2aXpQcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdFx0cGxvdEFyZWE6IHtcblx0XHRcdFx0XHRcdHdpbmRvdzoge1xuXHRcdFx0XHRcdFx0XHRzdGFydDogXCJmaXJzdERhdGFQb2ludFwiLFxuXHRcdFx0XHRcdFx0XHRlbmQ6IFwibGFzdERhdGFQb2ludFwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZGF0YUxhYmVsOiB7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdFN0cmluZzogQ2hhcnRGb3JtYXR0ZXIuRGVmYXVsdFBhdHRlcm4uU0hPUlRGTE9BVF9NRkQyLFxuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHZhbHVlQXhpczoge1xuXHRcdFx0XHRcdFx0dmlzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGxhYmVsOiB7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdFN0cmluZzogQ2hhcnRGb3JtYXR0ZXIuRGVmYXVsdFBhdHRlcm4uU0hPUlRGTE9BVFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aW1lQXhpczoge1xuXHRcdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRpbnRlcnZhbDoge1xuXHRcdFx0XHRcdFx0XHR1bml0OiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRpbnRlcmFjdGlvbjoge1xuXHRcdFx0XHRcdFx0c3luY1ZhbHVlQXhpczogZmFsc2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIHtcblx0XHRcdFx0a2V5OiBcIjEzXCIsXG5cdFx0XHRcdG5hbWU6IFwiUGVyaW9kaWMgV2F0ZXJmYWxsXCIsXG5cdFx0XHRcdHZpelR5cGU6IFwidGltZXNlcmllc193YXRlcmZhbGxcIixcblx0XHRcdFx0anNvbjogXCIvZGVtYW5kc19zdXBwbGllcy5qc29uXCIsXG5cdFx0XHRcdHZhbHVlOiBbXCJTdXBwbGllc1wiLCBcIkRlbWFuZHNcIl0sXG5cdFx0XHRcdGRhdGFzZXQ6IHtcblx0XHRcdFx0XHRkaW1lbnNpb25zOiBbe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0RhdGUnLFxuXHRcdFx0XHRcdFx0dmFsdWU6IFwie0RhdGV9XCIsXG5cdFx0XHRcdFx0XHRkYXRhVHlwZTogJ2RhdGUnXG5cdFx0XHRcdFx0fV0sXG5cdFx0XHRcdFx0bWVhc3VyZXM6IFt7XG5cdFx0XHRcdFx0XHRuYW1lOiAnRGVtYW5kcycsXG5cdFx0XHRcdFx0XHR2YWx1ZTogJ3tEZW1hbmRzfSdcblx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRuYW1lOiAnU3VwcGxpZXMnLFxuXHRcdFx0XHRcdFx0dmFsdWU6ICd7U3VwcGxpZXN9J1xuXHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHBhdGg6IFwiL1wiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR2aXpQcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdFx0cGxvdEFyZWE6IHtcblx0XHRcdFx0XHRcdHdpbmRvdzoge1xuXHRcdFx0XHRcdFx0XHRzdGFydDogXCJmaXJzdERhdGFQb2ludFwiLFxuXHRcdFx0XHRcdFx0XHRlbmQ6IG51bGxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRkYXRhTGFiZWw6IHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0U3RyaW5nOiBDaGFydEZvcm1hdHRlci5EZWZhdWx0UGF0dGVybi5TSE9SVEZMT0FUX01GRDIsXG5cdFx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRyZWNhcFRpdGxlOiBcIkVuZCBvZiBkYXlcIixcblx0XHRcdFx0XHRcdFx0c2hvd1JlY2FwOiB0cnVlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0c3RhcnRWYWx1ZTogMTBcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHZhbHVlQXhpczoge1xuXHRcdFx0XHRcdFx0dmlzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGxhYmVsOiB7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdFN0cmluZzogQ2hhcnRGb3JtYXR0ZXIuRGVmYXVsdFBhdHRlcm4uU0hPUlRGTE9BVFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aW1lQXhpczoge1xuXHRcdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRpbnRlcnZhbDoge1xuXHRcdFx0XHRcdFx0XHR1bml0OiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bGVnZW5kOiB7XG5cdFx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGxhYmVsOiB7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IHtcblx0XHRcdFx0XHRcdFx0XHRuZWdhdGl2ZVZhbHVlOiBcIkRlbWFuZHNcIixcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGl2ZVZhbHVlOiBcIlN1cHBsaWVzXCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRpbnRlcmFjdGlvbjoge1xuXHRcdFx0XHRcdFx0c3luY1ZhbHVlQXhpczogZmFsc2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIHtcblx0XHRcdFx0a2V5OiBcIjE0XCIsXG5cdFx0XHRcdG5hbWU6IFwiU3RhY2tlZCBDb21iaW5hdGlvblwiLFxuXHRcdFx0XHR2aXpUeXBlOiBcImluZm8vdGltZXNlcmllc19zdGFja2VkX2NvbWJpbmF0aW9uXCIsXG5cdFx0XHRcdGpzb246IFwiL3RpbWVCdWxsZXRTdGFja2VkLmpzb25cIixcblx0XHRcdFx0dmFsdWU6IFtcIkhhYmVuXCIsIFwiU29sbFwiLCBcIlJldmVudWVcIl0sXG5cdFx0XHRcdGRhdGFzZXQ6IHtcblx0XHRcdFx0XHRkaW1lbnNpb25zOiBbe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0RhdGUnLFxuXHRcdFx0XHRcdFx0dmFsdWU6IFwie0RhdGV9XCIsXG5cdFx0XHRcdFx0XHRkYXRhVHlwZTogJ2RhdGUnXG5cdFx0XHRcdFx0fV0sXG5cdFx0XHRcdFx0bWVhc3VyZXM6IFt7XG5cdFx0XHRcdFx0XHRuYW1lOiAnU29sbCcsXG5cdFx0XHRcdFx0XHR2YWx1ZTogJ3tDb3N0MX0nXG5cdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0bmFtZTogJ0hhYmVuJyxcblx0XHRcdFx0XHRcdHZhbHVlOiAne0Nvc3QyfSdcblx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRuYW1lOiAnUmV2ZW51ZScsXG5cdFx0XHRcdFx0XHR2YWx1ZTogXCJ7UmV2ZW51ZX1cIlxuXHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHBhdGg6IFwiL1wiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR2aXpQcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdFx0cGxvdEFyZWE6IHtcblx0XHRcdFx0XHRcdHdpbmRvdzoge1xuXHRcdFx0XHRcdFx0XHRzdGFydDogXCJmaXJzdERhdGFQb2ludFwiLFxuXHRcdFx0XHRcdFx0XHRlbmQ6IFwibGFzdERhdGFQb2ludFwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZGF0YUxhYmVsOiB7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdFN0cmluZzogQ2hhcnRGb3JtYXR0ZXIuRGVmYXVsdFBhdHRlcm4uU0hPUlRGTE9BVF9NRkQyLFxuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGRhdGFTaGFwZToge1xuXHRcdFx0XHRcdFx0XHRwcmltYXJ5QXhpczogW1wiYmFyXCIsIFwiYmFyXCIsIFwibGluZVwiXVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dmFsdWVBeGlzOiB7XG5cdFx0XHRcdFx0XHR2aXNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0bGFiZWw6IHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0U3RyaW5nOiBDaGFydEZvcm1hdHRlci5EZWZhdWx0UGF0dGVybi5TSE9SVEZMT0FUXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHZhbHVlQXhpczI6IHtcblx0XHRcdFx0XHRcdHZpc2libGU6IHRydWUsXG5cdFx0XHRcdFx0XHRsYWJlbDoge1xuXHRcdFx0XHRcdFx0XHRmb3JtYXRTdHJpbmc6IENoYXJ0Rm9ybWF0dGVyLkRlZmF1bHRQYXR0ZXJuLlNIT1JURkxPQVRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGltZUF4aXM6IHtcblx0XHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0aW50ZXJ2YWw6IHtcblx0XHRcdFx0XHRcdFx0dW5pdDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0aW50ZXJhY3Rpb246IHtcblx0XHRcdFx0XHRcdHN5bmNWYWx1ZUF4aXM6IGZhbHNlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XVxuXHRcdH1cblx0fVxuXG5cdG9WaXpGcmFtZSA9IG51bGxcblx0Y2hhcnRUeXBlU2VsZWN0ID0gbnVsbFxuXHRjaGFydCA9IG51bGxcblx0YWN0dWFsSWJhbiA9IG51bGxcblx0c3RhcnREYXRlID0gbmV3IERhdGUobW9tZW50KCkuc3VidHJhY3QoIDUsICdtb250aCcgKS5zdGFydE9mKCAnbW9udGgnICkpXG5cdGVuZERhdGUgPSBuZXcgRGF0ZSgpXG5cdHNlbGVjdGVkVml6ID0gbnVsbFxuXG5cdG9uSW5pdCgpIHtcblx0XHR2YXIgb0pTT05Nb2RlbEFjY291bnRzID0gbmV3IEpTT05Nb2RlbCgpO1xuXHRcdHRoaXMuZ2V0VmlldygpLnNldE1vZGVsKCBvSlNPTk1vZGVsQWNjb3VudHMsIFwiYWNjb3VudHNcIiApO1xuXHRcdHZhciBkYXRlRnJvbSA9IG5ldyBEYXRlKCk7XG5cdFx0ZGF0ZUZyb20uc2V0VVRDRGF0ZSgyKTtcblx0XHRkYXRlRnJvbS5zZXRVVENNb250aCgxKTtcblx0XHRkYXRlRnJvbS5zZXRVVENGdWxsWWVhcigyMDE0KTtcblxuXHRcdHZhciBkYXRlVG8gPSBuZXcgRGF0ZSgpO1xuXHRcdGRhdGVUby5zZXRVVENEYXRlKDE3KTtcblx0XHRkYXRlVG8uc2V0VVRDTW9udGgoMSk7XG5cdFx0ZGF0ZVRvLnNldFVUQ0Z1bGxZZWFyKDIwMTQpO1xuXG5cdFx0dmFyIG9Nb2RlbCA9IG5ldyBKU09OTW9kZWwoKTtcblx0XHRvTW9kZWwuc2V0RGF0YSgge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlbGltaXRlckRSUzE6IFwiQFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGVWYWx1ZURSUzE6IGRhdGVGcm9tLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlY29uZERhdGVWYWx1ZURSUzE6IGRhdGVUbyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRlRm9ybWF0RFJTMTogXCJ5eXl5L01NL2RkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0ZVZhbHVlRFJTMjp0aGlzLnN0YXJ0RGF0ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWNvbmREYXRlVmFsdWVEUlMyOiB0aGlzLmVuZERhdGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0ZU1pbkRSUzI6IHRoaXMuc3RhcnREYXRlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGVNYXhEUlMyOiB0aGlzLmVuZERhdGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmFuZ2VzOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnVG9kYXknOiBbbW9tZW50KCksIG1vbWVudCgpXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdZZXN0ZXJkYXknOiBbbW9tZW50KCkuc3VidHJhY3QoIDEsICdkYXlzJyApLCBtb21lbnQoKS5zdWJ0cmFjdCggMSwgJ2RheXMnICldLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J0xhc3QgNyBEYXlzJzogW21vbWVudCgpLnN1YnRyYWN0KCA2LCAnZGF5cycgKSwgbW9tZW50KCldLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J0xhc3QgMzAgRGF5cyc6IFttb21lbnQoKS5zdWJ0cmFjdCggMjksICdkYXlzJyApLCBtb21lbnQoKV0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnVGhpcyBNb250aCc6IFttb21lbnQoKS5zdGFydE9mKCAnbW9udGgnICksIG1vbWVudCgpLmVuZE9mKCAnbW9udGgnICldLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J0xhc3QgTW9udGgnOiBbbW9tZW50KCkuc3VidHJhY3QoIDEsICdtb250aCcgKS5zdGFydE9mKCAnbW9udGgnICksIG1vbWVudCgpLnN1YnRyYWN0KCAxLCAnbW9udGgnICkuZW5kT2YoICdtb250aCcgKV1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0dGhpcy5nZXRWaWV3KCkuc2V0TW9kZWwoIG9Nb2RlbCwgXCJkYXRlU2VsZWN0XCIgKTtcblxuXHRcdHRoaXMuX2xvYWRJbmZvRGF0YSggKCkgPT4ge1xuXHRcdFx0Rm9ybWF0Lm51bWVyaWNGb3JtYXR0ZXIoQ2hhcnRGb3JtYXR0ZXIuZ2V0SW5zdGFuY2UoKSk7XG5cdFx0XHQvLyBzZXQgZXhwbG9yZWQgYXBwJ3MgZGVtbyBtb2RlbCBvbiB0aGlzIHNhbXBsZVxuXHRcdFx0dmFyIG9Nb2RlbCA9IG5ldyBKU09OTW9kZWwodGhpcy5zZXR0aW5nc01vZGVsKTtcblx0XHRcdG9Nb2RlbC5zZXREZWZhdWx0QmluZGluZ01vZGUoc2FwLnVpLm1vZGVsLkJpbmRpbmdNb2RlLk9uZVdheSk7XG5cdFx0XHR0aGlzLmdldFZpZXcoKS5zZXRNb2RlbChvTW9kZWwpO1xuXG5cdFx0XHR2YXIgb1ZpekZyYW1lID0gdGhpcy5vVml6RnJhbWUgPSB0aGlzLmdldFZpZXcoKS5ieUlkKFwiaWRWaXpGcmFtZVwiKTtcblx0XHRcdHRoaXMuc2VsZWN0ZWRWaXpLZXkgPSAzXG5cdFx0XHR0aGlzLnNlbGVjdGVkVml6ID0gdGhpcy5zZXR0aW5nc01vZGVsLmNoYXJ0VHlwZS52YWx1ZXNbdGhpcy5zZWxlY3RlZFZpektleV1cblx0XHRcdG9WaXpGcmFtZS5zZXRWaXpQcm9wZXJ0aWVzKHRoaXMuc2VsZWN0ZWRWaXoudml6UHJvcGVydGllcyk7XG5cblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuZGF0YVBhdGggKyBcInRpbWVCdWxsZXRTdGFja2VkL1wiICsgdGhpcy5hY3R1YWxJYmFuICsgXCIvXCIgKyB0aGlzLnN0YXJ0RGF0ZSArIFwiL1wiICsgdGhpcy5lbmREYXRlKTtcblx0XHRcdHZhciBkYXRhTW9kZWwgPSBuZXcgSlNPTk1vZGVsKCk7XG5cdFx0XHR0aGlzLl9zZXRCdXN5Vml6KGRhdGFNb2RlbClcbiAgICAgIGRhdGFNb2RlbC5sb2FkRGF0YSh0aGlzLmRhdGFQYXRoICsgXCJ0aW1lQnVsbGV0U3RhY2tlZC9cIiArIHRoaXMuYWN0dWFsSWJhbiArIFwiL1wiICsgdGhpcy5zdGFydERhdGUgKyBcIi9cIiArIHRoaXMuZW5kRGF0ZSlcblx0XHRcdG9WaXpGcmFtZS5zZXRNb2RlbChkYXRhTW9kZWwpO1xuXG5cdFx0XHR2YXIgb1BvcE92ZXIgPSB0aGlzLmdldFZpZXcoKS5ieUlkKFwiaWRQb3BPdmVyXCIpO1xuXHRcdFx0b1BvcE92ZXIuY29ubmVjdChvVml6RnJhbWUuZ2V0Vml6VWlkKCkpO1xuXHRcdFx0b1BvcE92ZXIuc2V0Rm9ybWF0U3RyaW5nKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0IFwiQ29zdFwiOiBDaGFydEZvcm1hdHRlci5EZWZhdWx0UGF0dGVybi5TVEFOREFSREZMT0FULFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgXCJSZXZlbnVlXCI6IENoYXJ0Rm9ybWF0dGVyLkRlZmF1bHRQYXR0ZXJuLlNUQU5EQVJERkxPQVRcblx0XHRcdFx0XHRcdFx0XHRcdCB9KTtcblxuXHRcdFx0SW5pdFBhZ2VVdGlsLmluaXRQYWdlU2V0dGluZ3ModGhpcy5nZXRWaWV3KCkpO1xuXHRcdH0gKTtcblxuXHR9XG5cblx0X2xvYWRJbmZvRGF0YSggY2FsbGJhY2sgKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0bGV0IHZpZXcgPSB0aGlzLmdldFZpZXcoKTtcblx0XHRsZXQgYWNjb3VudE1vZGVsID0gdmlldy5nZXRNb2RlbCggXCJhY2NvdW50c1wiIClcblxuXG5cdFx0YWNjb3VudE1vZGVsLmF0dGFjaFJlcXVlc3RDb21wbGV0ZWQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IGFjY291bnRzID0gYWNjb3VudE1vZGVsLmdldERhdGEoKTtcblx0XHRcdHRoYXQuYWN0dWFsSWJhbiA9IGFjY291bnRzWzFdLmliYW5cblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fSApO1xuXHRcdHZpZXcuZ2V0TW9kZWwoIFwiYWNjb3VudHNcIiApLmxvYWREYXRhKCBcIi9hcGlGaW5Ucy9nZXRBY2NvdW50c1wiICk7XG5cdH1cblx0XG5cdGhhbmRsZURhdGVTZWxlY3RDaGFuZ2UoIG9FdmVudCApIHtcblx0XHRsZXQgc0Zyb20gPSBvRXZlbnQuZ2V0UGFyYW1ldGVyKCBcImZyb21cIiApO1xuXHRcdGxldCBzVG8gPSBvRXZlbnQuZ2V0UGFyYW1ldGVyKCBcInRvXCIgKTtcblx0XHRsZXQgYlZhbGlkID0gb0V2ZW50LmdldFBhcmFtZXRlciggXCJ2YWxpZFwiICk7XG5cblx0XHRpZiAoYlZhbGlkKSB7XG5cdFx0XHR0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHNGcm9tKVxuXHRcdFx0dGhpcy5lbmREYXRlID0gbmV3IERhdGUoc1RvKVxuXHRcdFx0dGhpcy5nZXRWaWV3KCkuZ2V0TW9kZWwoXCJkYXRlU2VsZWN0XCIgKS5zZXRQcm9wZXJ0eShcIi9kYXRlVmFsdWVEUlMyXCIsIG5ldyBEYXRlKHNGcm9tKSlcblx0XHRcdHRoaXMuZ2V0VmlldygpLmdldE1vZGVsKFwiZGF0ZVNlbGVjdFwiICkuc2V0UHJvcGVydHkoXCIvc2Vjb25kRGF0ZVZhbHVlRFJTMlwiLCBuZXcgRGF0ZShzVG8pIClcblx0XHRcdHRoaXMuX2xvYWRWaXpDb250YWluZXIoKVxuXHRcdH1cblx0fVxuXG5cdG9uQWZ0ZXJSZW5kZXJpbmcoKXtcblx0XHR0aGlzLmNoYXJ0VHlwZVNlbGVjdCA9IHRoaXMuZ2V0VmlldygpLmJ5SWQoJ2NoYXJ0VHlwZVNlbGVjdCcpO1xuXHR9XG5cblx0b25DaGFydFR5cGVDaGFuZ2VkKG9FdmVudCl7XG5cdFx0aWYodGhpcy5vVml6RnJhbWUpe1xuXHRcdFx0dGhpcy5zZWxlY3RlZFZpektleSA9IHRoaXMuY2hhcnQgPSBwYXJzZUludChvRXZlbnQuZ2V0U291cmNlKCkuZ2V0U2VsZWN0ZWRLZXkoKSk7XG5cblx0XHRcdHZhciBiaW5kVmFsdWUgPSB0aGlzLnNldHRpbmdzTW9kZWwuY2hhcnRUeXBlLnZhbHVlc1t0aGlzLnNlbGVjdGVkVml6S2V5XTtcblx0XHRcdHRoaXMuc2VsZWN0ZWRWaXogPSBiaW5kVmFsdWVcblx0XHRcdHRoaXMuX2xvYWRWaXpDb250YWluZXIoKVxuXHRcdFx0XG5cdFx0XHRcblx0XHR9XG5cdH1cblxuXHRfc2V0QnVzeVZpeihkYXRhTW9kZWwpIHtcbiAgICBsZXQgdmlldyA9IHRoaXMuZ2V0VmlldygpO1xuICAgIGRhdGFNb2RlbC5hdHRhY2hSZXF1ZXN0U2VudCggZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgb1ZpekZyYW1lID0gdmlldy5ieUlkKCBcImlkVml6RnJhbWVcIiApXG4gICAgICBvVml6RnJhbWUuc2V0QnVzeUluZGljYXRvckRlbGF5KDApXG4gICAgICBvVml6RnJhbWUuc2V0QnVzeSggdHJ1ZSApXG4gICAgfSApXG4gICAgZGF0YU1vZGVsLmF0dGFjaFJlcXVlc3RDb21wbGV0ZWQoIGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IG9WaXpGcmFtZSA9IHZpZXcuYnlJZCggXCJpZFZpekZyYW1lXCIgKVxuICAgICAgb1ZpekZyYW1lLnNldEJ1c3lJbmRpY2F0b3JEZWxheSgwKVxuICAgICAgb1ZpekZyYW1lLnNldEJ1c3koIGZhbHNlIClcbiAgICB9IClcbiAgfVxuXHRcblx0X2xvYWRWaXpDb250YWluZXIoKSB7XG5cdFx0dGhpcy5vVml6RnJhbWUuZGVzdHJveURhdGFzZXQoKTtcblx0XHR0aGlzLm9WaXpGcmFtZS5kZXN0cm95RmVlZHMoKTtcblx0XHR0aGlzLm9WaXpGcmFtZS5zZXRWaXpUeXBlKHRoaXMuc2VsZWN0ZWRWaXoudml6VHlwZSk7XG5cdFx0bGV0IGRhdGFNb2RlbCA9ICBuZXcgSlNPTk1vZGVsKCk7XG4gICAgdGhpcy5fc2V0QnVzeVZpeihkYXRhTW9kZWwpXG5cdFx0c3dpdGNoKHRoaXMuc2VsZWN0ZWRWaXouanNvbikge1xuXHRcdFx0Y2FzZSBcIi90aW1lQnVsbGV0U3RhY2tlZC5qc29uXCI6XG5cdFx0XHRcdGRhdGFNb2RlbC5sb2FkRGF0YSh0aGlzLmRhdGFQYXRoICsgXCJ0aW1lQnVsbGV0U3RhY2tlZC9cIiArIHRoaXMuYWN0dWFsSWJhbiArIFwiL1wiICsgdGhpcy5zdGFydERhdGUgKyBcIi9cIiArIHRoaXMuZW5kRGF0ZSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiL2NvbHVtbi90aW1lQXhpcy5qc29uXCI6XG5cdFx0XHRcdGRhdGFNb2RlbC5sb2FkRGF0YSh0aGlzLmRhdGFQYXRoICsgXCJ0aW1lQXhpcy9cIiArIHRoaXMuYWN0dWFsSWJhbiArIFwiL1wiICsgdGhpcy5zdGFydERhdGUgKyBcIi9cIiArIHRoaXMuZW5kRGF0ZSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiL2J1YmJsZS9tZWRpdW0uanNvblwiOlxuXHRcdFx0XHRkYXRhTW9kZWwubG9hZERhdGEodGhpcy5kYXRhUGF0aCArIFwidGltZUF4aXMvXCIgKyB0aGlzLmFjdHVhbEliYW4gKyBcIi9cIiArIHRoaXMuc3RhcnREYXRlICsgXCIvXCIgKyB0aGlzLmVuZERhdGUpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIi9jb2x1bW4vbWVkaXVtLmpzb25cIjpcblx0XHRcdFx0ZGF0YU1vZGVsLmxvYWREYXRhKHRoaXMuZGF0YVBhdGggKyBcInRpbWVBeGlzL1wiICsgdGhpcy5hY3R1YWxJYmFuICsgXCIvXCIgKyB0aGlzLnN0YXJ0RGF0ZSArIFwiL1wiICsgdGhpcy5lbmREYXRlKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCIvY29sdW1uL2xhcmdlLmpzb25cIjpcblx0XHRcdFx0ZGF0YU1vZGVsLmxvYWREYXRhKHRoaXMuZGF0YVBhdGggKyBcInRpbWVBeGlzL1wiICsgdGhpcy5hY3R1YWxJYmFuICsgXCIvXCIgKyB0aGlzLnN0YXJ0RGF0ZSArIFwiL1wiICsgdGhpcy5lbmREYXRlKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCIvdGltZU11bHRpcGxlLmpzb25cIjpcblx0XHRcdFx0ZGF0YU1vZGVsLmxvYWREYXRhKHRoaXMuZGF0YVBhdGggKyBcInRpbWVBeGlzL1wiICsgdGhpcy5hY3R1YWxJYmFuICsgXCIvXCIgKyB0aGlzLnN0YXJ0RGF0ZSArIFwiL1wiICsgdGhpcy5lbmREYXRlKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGRhdGFNb2RlbC5sb2FkRGF0YSh0aGlzLmRhdGFQYXRoICsgdGhpcy5zZWxlY3RlZFZpei5qc29uKVxuXHRcdH1cblxuXHRcdHRoaXMub1ZpekZyYW1lLnNldE1vZGVsKGRhdGFNb2RlbCk7XG5cdFx0dmFyIG9EYXRhc2V0ID0gbmV3IEZsYXR0ZW5lZERhdGFzZXQodGhpcy5zZWxlY3RlZFZpei5kYXRhc2V0KTtcblx0XHR0aGlzLm9WaXpGcmFtZS5zZXREYXRhc2V0KG9EYXRhc2V0KTtcblx0XHR2YXIgcHJvcHMgPSB0aGlzLnNlbGVjdGVkVml6LnZpelByb3BlcnRpZXM7XG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRWaXpLZXkgIT09IDggJiYgcHJvcHMucGxvdEFyZWEpIHtcblx0XHRcdHByb3BzLnBsb3RBcmVhLmRhdGFQb2ludFN0eWxlID0gbnVsbDtcblx0XHR9XG5cdFx0dGhpcy5vVml6RnJhbWUuc2V0Vml6UHJvcGVydGllcyhwcm9wcyk7XG5cdFx0dmFyIGZlZWRWYWx1ZUF4aXMsIGZlZWRWYWx1ZUF4aXMyLCBmZWVkQWN0dWFsVmFsdWVzLCBmZWVkVGFyZ2V0VmFsdWVzO1xuXHRcdGlmICh0aGlzLnNlbGVjdGVkVml6S2V5ID09PSA3KSB7XG5cdFx0XHRmZWVkVmFsdWVBeGlzID0gbmV3IEZlZWRJdGVtKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAndWlkJzogXCJ2YWx1ZUF4aXNcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAndHlwZSc6IFwiTWVhc3VyZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICd2YWx1ZXMnOiBbdGhpcy5zZWxlY3RlZFZpei52YWx1ZVswXV1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfSk7XG5cdFx0XHRmZWVkVmFsdWVBeGlzMiA9IG5ldyBGZWVkSXRlbSh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd1aWQnOiBcInZhbHVlQXhpczJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3R5cGUnOiBcIk1lYXN1cmVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3ZhbHVlcyc6IFt0aGlzLnNlbGVjdGVkVml6LnZhbHVlWzFdXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkVml6S2V5ID09PSA4IHx8IHRoaXMuc2VsZWN0ZWRWaXpLZXkgPT09IDkpIHtcblx0XHRcdGZlZWRBY3R1YWxWYWx1ZXMgPSBuZXcgRmVlZEl0ZW0oe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd1aWQnOiBcImFjdHVhbFZhbHVlc1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd0eXBlJzogXCJNZWFzdXJlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3ZhbHVlcyc6IFt0aGlzLnNlbGVjdGVkVml6LnZhbHVlWzBdXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdGZlZWRUYXJnZXRWYWx1ZXMgPSBuZXcgRmVlZEl0ZW0oe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd1aWQnOiBcInRhcmdldFZhbHVlc1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd0eXBlJzogXCJNZWFzdXJlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3ZhbHVlcyc6IFt0aGlzLnNlbGVjdGVkVml6LnZhbHVlWzFdXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZmVlZFZhbHVlQXhpcyA9IG5ldyBGZWVkSXRlbSh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgJ3VpZCc6IFwidmFsdWVBeGlzXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgJ3R5cGUnOiBcIk1lYXN1cmVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAndmFsdWVzJzogdGhpcy5zZWxlY3RlZFZpei52YWx1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB9KTtcblx0XHR9XG5cblx0XHR2YXIgZmVlZFRpbWVBeGlzID0gbmV3IEZlZWRJdGVtKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3VpZCc6IFwidGltZUF4aXNcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3R5cGUnOiBcIkRpbWVuc2lvblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndmFsdWVzJzogW1wiRGF0ZVwiXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRmZWVkQnViYmxlV2lkdGggPSBuZXcgRmVlZEl0ZW0oe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXCJ1aWRcIjogXCJidWJibGVXaWR0aFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXCJ0eXBlXCI6IFwiTWVhc3VyZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXCJ2YWx1ZXNcIjogW1wiUmV2ZW51ZVwiXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IH0pLFxuXHRcdFx0ZmVlZFRpbWVCdWxsZXRDb2xvciA9IG5ldyBGZWVkSXRlbSh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXCJ1aWRcIjpcImNvbG9yXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXCJ0eXBlXCI6XCJEaW1lbnNpb25cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcInZhbHVlc1wiOltcIkNvdW50cnlcIl1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfSk7XG5cdFx0c3dpdGNoKHRoaXMuc2VsZWN0ZWRWaXpLZXkpe1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHR0aGlzLm9WaXpGcmFtZS5hZGRGZWVkKGZlZWRWYWx1ZUF4aXMpO1xuXHRcdFx0XHR0aGlzLm9WaXpGcmFtZS5hZGRGZWVkKGZlZWRUaW1lQXhpcyk7XG5cdFx0XHRcdHRoaXMub1ZpekZyYW1lLmFkZEZlZWQoZmVlZEJ1YmJsZVdpZHRoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDc6XG5cdFx0XHRcdHRoaXMub1ZpekZyYW1lLmFkZEZlZWQoZmVlZFZhbHVlQXhpcyk7XG5cdFx0XHRcdHRoaXMub1ZpekZyYW1lLmFkZEZlZWQoZmVlZFZhbHVlQXhpczIpO1xuXHRcdFx0XHR0aGlzLm9WaXpGcmFtZS5hZGRGZWVkKGZlZWRUaW1lQXhpcyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA5OlxuXHRcdFx0XHR0aGlzLm9WaXpGcmFtZS5hZGRGZWVkKGZlZWRUaW1lQnVsbGV0Q29sb3IpO1xuXHRcdFx0Y2FzZSA4OlxuXHRcdFx0XHR0aGlzLm9WaXpGcmFtZS5hZGRGZWVkKGZlZWRBY3R1YWxWYWx1ZXMpO1xuXHRcdFx0XHR0aGlzLm9WaXpGcmFtZS5hZGRGZWVkKGZlZWRUYXJnZXRWYWx1ZXMpO1xuXHRcdFx0XHR0aGlzLm9WaXpGcmFtZS5hZGRGZWVkKGZlZWRUaW1lQXhpcyk7XG5cdFx0XHRcdHRoaXMub1ZpekZyYW1lLmFkZEZlZWQoZmVlZFZhbHVlQXhpcyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhpcy5vVml6RnJhbWUuYWRkRmVlZChmZWVkVmFsdWVBeGlzKTtcblx0XHRcdFx0dGhpcy5vVml6RnJhbWUuYWRkRmVlZChmZWVkVGltZUF4aXMpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXG59Il19