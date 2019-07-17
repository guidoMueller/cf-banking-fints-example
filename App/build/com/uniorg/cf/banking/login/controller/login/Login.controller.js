"use strict";

sap.ui.define("com/uniorg/cf/banking/login/controller/login/Login.controller", ["sap/ui/model/json/JSONModel", "sap/ui/model/Filter", "sap/m/MessageBox", "com/uniorg/cf/banking/login/controller/BaseController"], function (JSONModel, Filter, MessageBox, BaseController) {
	"use strict";

	return BaseController.extend("com.uniorg.cf.banking.login.controller.login.Login", {
		onInit: function onInit() {
			var oJSONModel = new JSONModel("/apiFinTs/getBanks");
			this.getView().setModel(oJSONModel);
			var formModel = new JSONModel();
			this.getView().setModel(formModel, "formModel");
			this._loadInfoData();
		},
		_loadInfoData: function _loadInfoData() {
			this.getView().getModel().loadData("/login");
			this.getView().getModel("formModel").setData({
				user: "",
				pass: "",
				blz: ""
			});
		},
		onAfterRendering: function onAfterRendering() {
			console.log("onAfterRendering");
			var self = this;
			jQuery("input").on("keydown", function (evt) {
				if (evt.keyCode == 13) {
					evt.preventDefault();
					self.onLogin();
					console.log("test");
				}
			});
		},
		handleSuggest: function handleSuggest(oEvent) {
			var sTerm = oEvent.getParameter("suggestValue");
			var aFilters = [];
			if (sTerm) {
				aFilters.push(new Filter("name", sap.ui.model.FilterOperator.StartsWith, sTerm));
				aFilters.push(new Filter("blz", sap.ui.model.FilterOperator.StartsWith, sTerm));
				aFilters.push(new Filter("location", sap.ui.model.FilterOperator.StartsWith, sTerm));
			}
			oEvent.getSource().getBinding("suggestionItems").filter([new Filter(aFilters, false)]);
		},
		onLogin: function onLogin(evt) {
			var data = JSON.parse(this.getView().getModel("formModel").getJSON());
			var blz = this.getView().byId('inputBlz').getSelectedKey();
			data.blz = blz;
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;

			console.log(data.user);
			if (data.user === "" || data.user === undefined || data.user === null) {
				MessageBox.error("Kein Konto angegeben", {
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				});
				return;
			}
			if (data.pass === "" || data.pass === undefined || data.pass === null) {
				MessageBox.error("Kein Password angegeben", {
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				});
				return;
			}
			if (data.blz === "" || data.blz === undefined || data.blz === null) {
				MessageBox.error("Keine Bank angegeben", {
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				});
				return;
			}
			var view = this.getView().byId("loginContainer");
			view.setBusyIndicatorDelay(0);
			view.setBusy(true);
			$.post("/login", {
				code: Base64.encode(data.user + ";" + data.pass + ";" + data.blz)
			}, function (data, status) {
				console.log(data);
				if (data.message) {
					view.setBusy(false);
					location.href = location.href;
				}
			});
		}
	});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvbG9naW4vTG9naW4uY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJvbkluaXQiLCJvSlNPTk1vZGVsIiwiSlNPTk1vZGVsIiwiZ2V0VmlldyIsInNldE1vZGVsIiwiZm9ybU1vZGVsIiwiX2xvYWRJbmZvRGF0YSIsImdldE1vZGVsIiwibG9hZERhdGEiLCJzZXREYXRhIiwidXNlciIsInBhc3MiLCJibHoiLCJvbkFmdGVyUmVuZGVyaW5nIiwiY29uc29sZSIsImxvZyIsInNlbGYiLCJqUXVlcnkiLCJvbiIsImV2dCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uTG9naW4iLCJoYW5kbGVTdWdnZXN0Iiwib0V2ZW50Iiwic1Rlcm0iLCJnZXRQYXJhbWV0ZXIiLCJhRmlsdGVycyIsInB1c2giLCJGaWx0ZXIiLCJzYXAiLCJ1aSIsIm1vZGVsIiwiRmlsdGVyT3BlcmF0b3IiLCJTdGFydHNXaXRoIiwiZ2V0U291cmNlIiwiZ2V0QmluZGluZyIsImZpbHRlciIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJnZXRKU09OIiwiYnlJZCIsImdldFNlbGVjdGVkS2V5IiwiYkNvbXBhY3QiLCIkIiwiY2xvc2VzdCIsImxlbmd0aCIsInVuZGVmaW5lZCIsIk1lc3NhZ2VCb3giLCJlcnJvciIsInN0eWxlQ2xhc3MiLCJ2aWV3Iiwic2V0QnVzeUluZGljYXRvckRlbGF5Iiwic2V0QnVzeSIsInBvc3QiLCJjb2RlIiwiQmFzZTY0IiwiZW5jb2RlIiwic3RhdHVzIiwibWVzc2FnZSIsImxvY2F0aW9uIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0NBLFEsb0JBQVM7QUFDUixPQUFJQyxhQUFhLElBQUlDLFNBQUosQ0FBZSxvQkFBZixDQUFqQjtBQUNBLFFBQUtDLE9BQUwsR0FBZUMsUUFBZixDQUF5QkgsVUFBekI7QUFDQSxPQUFJSSxZQUFZLElBQUlILFNBQUosRUFBaEI7QUFDQSxRQUFLQyxPQUFMLEdBQWVDLFFBQWYsQ0FBeUJDLFNBQXpC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QWEsRUFBYixJQUFtQjBCLEtBQUsxQixHQUFMLEtBQWFvQyxTQUFoQyxJQUE2Q1YsS0FBSzFCLEdBQUwsS0FBYSxJQUE5RCxFQUFvRTtBQUNuRXFDLGVBQVdDLEtBQVgsQ0FDQyxzQkFERCxFQUVDO0FBQ0NDLGlCQUFZUCxXQUFXLGtCQUFYLEdBQWdDO0FBRDdDLEtBRkQ7QUFNQTtBQUNBO0FBQ0QsT0FBSVEsT0FBTyxLQUFLakQsT0FBTCxHQUFldUMsSUFBZixDQUFvQixnQkFBcEIsQ0FBWDtBQUNBVSxRQUFLQyxxQkFBTCxDQUEyQixDQUEzQjtBQUNBRCxRQUFLRSxPQUFMLENBQWMsSUFBZDtBQUNBVCxLQUFFVSxJQUFGLENBQVEsUUFBUixFQUNFO0FBQ0NDLFVBQU1DLE9BQU9DLE1BQVAsQ0FBZXBCLEtBQUs1QixJQUFMLEdBQVksR0FBWixHQUFrQjRCLEtBQUszQixJQUF2QixHQUE4QixHQUE5QixHQUFvQzJCLEtBQUsxQixHQUF4RDtBQURQLElBREYsRUFJRSxVQUFVMEIsSUFBVixFQUFnQnFCLE1BQWhCLEVBQXlCO0FBQ3hCN0MsWUFBUUMsR0FBUixDQUFZdUIsSUFBWjtBQUNBLFFBQUlBLEtBQUtzQixPQUFULEVBQWtCO0FBQ2pCUixVQUFLRSxPQUFMLENBQWMsS0FBZDtBQUNBTyxjQUFTQyxJQUFULEdBQWdCRCxTQUFTQyxJQUF6QjtBQUNBO0FBQ0QsSUFWSDtBQVdBIiwiZmlsZSI6ImNvbnRyb2xsZXIvbG9naW4vTG9naW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKU09OTW9kZWwgZnJvbSBcInNhcC91aS9tb2RlbC9qc29uL0pTT05Nb2RlbFwiO1xuaW1wb3J0IEZpbHRlciBmcm9tIFwic2FwL3VpL21vZGVsL0ZpbHRlclwiO1xuaW1wb3J0IE1lc3NhZ2VCb3ggZnJvbSBcInNhcC9tL01lc3NhZ2VCb3hcIlxuaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gXCJjb20vdW5pb3JnL2NmL2JhbmtpbmcvbG9naW4vY29udHJvbGxlci9CYXNlQ29udHJvbGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcblxuXHRvbkluaXQoKSB7XG5cdFx0dmFyIG9KU09OTW9kZWwgPSBuZXcgSlNPTk1vZGVsKCBcIi9hcGlGaW5Ucy9nZXRCYW5rc1wiICk7XG5cdFx0dGhpcy5nZXRWaWV3KCkuc2V0TW9kZWwoIG9KU09OTW9kZWwgKTtcblx0XHR2YXIgZm9ybU1vZGVsID0gbmV3IEpTT05Nb2RlbCgpO1xuXHRcdHRoaXMuZ2V0VmlldygpLnNldE1vZGVsKCBmb3JtTW9kZWwsIFwiZm9ybU1vZGVsXCIgKTtcblx0XHR0aGlzLl9sb2FkSW5mb0RhdGEoKTtcblx0fVxuXG5cdF9sb2FkSW5mb0RhdGEoKSB7XG5cdFx0dGhpcy5nZXRWaWV3KCkuZ2V0TW9kZWwoKS5sb2FkRGF0YSggXCIvbG9naW5cIiApO1xuXHRcdHRoaXMuZ2V0VmlldygpLmdldE1vZGVsKCBcImZvcm1Nb2RlbFwiICkuc2V0RGF0YSgge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXNlcjogXCJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhc3M6IFwiXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRibHo6IFwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdH1cblxuXHRvbkFmdGVyUmVuZGVyaW5nKCkge1xuXHRcdGNvbnNvbGUubG9nKFwib25BZnRlclJlbmRlcmluZ1wiKVxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRqUXVlcnkoXCJpbnB1dFwiKS5vbihcImtleWRvd25cIixcblx0XHRcdFx0XHRcdCAgIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0XHRcdFx0XHQgICBpZiAoZXZ0LmtleUNvZGUgPT0gMTMpIHtcblx0XHRcdFx0XHRcdFx0XHQgICBldnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHQgICBzZWxmLm9uTG9naW4oKVxuXHRcdFx0XHRcdFx0XHRcdCAgIGNvbnNvbGUubG9nKFwidGVzdFwiKVxuXHRcdFx0XHRcdFx0XHQgICB9XG5cdFx0XHRcdFx0XHQgICB9KTtcblx0fVxuXG5cdGhhbmRsZVN1Z2dlc3QoIG9FdmVudCApIHtcblx0XHRsZXQgc1Rlcm0gPSBvRXZlbnQuZ2V0UGFyYW1ldGVyKCBcInN1Z2dlc3RWYWx1ZVwiICk7XG5cdFx0bGV0IGFGaWx0ZXJzID0gW107XG5cdFx0aWYgKCBzVGVybSApIHtcblx0XHRcdGFGaWx0ZXJzLnB1c2goIG5ldyBGaWx0ZXIoIFwibmFtZVwiLCBzYXAudWkubW9kZWwuRmlsdGVyT3BlcmF0b3IuU3RhcnRzV2l0aCwgc1Rlcm0gKSApO1xuXHRcdFx0YUZpbHRlcnMucHVzaCggbmV3IEZpbHRlciggXCJibHpcIiwgc2FwLnVpLm1vZGVsLkZpbHRlck9wZXJhdG9yLlN0YXJ0c1dpdGgsIHNUZXJtICkgKTtcblx0XHRcdGFGaWx0ZXJzLnB1c2goIG5ldyBGaWx0ZXIoIFwibG9jYXRpb25cIiwgc2FwLnVpLm1vZGVsLkZpbHRlck9wZXJhdG9yLlN0YXJ0c1dpdGgsIHNUZXJtICkgKTtcblx0XHR9XG5cdFx0b0V2ZW50LmdldFNvdXJjZSgpLmdldEJpbmRpbmcoIFwic3VnZ2VzdGlvbkl0ZW1zXCIgKS5maWx0ZXIoIFtuZXcgRmlsdGVyKCBhRmlsdGVycywgZmFsc2UgKV0gKTtcblx0fVxuXG5cdG9uTG9naW4oIGV2dCApIHtcblx0XHRsZXQgZGF0YSA9IEpTT04ucGFyc2UoIHRoaXMuZ2V0VmlldygpLmdldE1vZGVsKCBcImZvcm1Nb2RlbFwiICkuZ2V0SlNPTigpICk7XG5cdFx0bGV0IGJseiA9IHRoaXMuZ2V0VmlldygpLmJ5SWQoICdpbnB1dEJseicgKS5nZXRTZWxlY3RlZEtleSgpO1xuXHRcdGRhdGEuYmx6ID0gYmx6O1xuXHRcdHZhciBiQ29tcGFjdCA9ICEhdGhpcy5nZXRWaWV3KCkuJCgpLmNsb3Nlc3QoXCIuc2FwVWlTaXplQ29tcGFjdFwiKS5sZW5ndGg7XG5cblx0XHRjb25zb2xlLmxvZyhkYXRhLnVzZXIpO1xuXHRcdGlmIChkYXRhLnVzZXIgPT09IFwiXCIgfHwgZGF0YS51c2VyID09PSB1bmRlZmluZWQgfHwgZGF0YS51c2VyID09PSBudWxsKSB7XG5cdFx0XHRNZXNzYWdlQm94LmVycm9yKFxuXHRcdFx0XHRcIktlaW4gS29udG8gYW5nZWdlYmVuXCIsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdHlsZUNsYXNzOiBiQ29tcGFjdCA/IFwic2FwVWlTaXplQ29tcGFjdFwiIDogXCJcIlxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGlmIChkYXRhLnBhc3MgPT09IFwiXCIgfHwgZGF0YS5wYXNzID09PSB1bmRlZmluZWQgfHwgZGF0YS5wYXNzID09PSBudWxsKSB7XG5cdFx0XHRNZXNzYWdlQm94LmVycm9yKFxuXHRcdFx0XHRcIktlaW4gUGFzc3dvcmQgYW5nZWdlYmVuXCIsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdHlsZUNsYXNzOiBiQ29tcGFjdCA/IFwic2FwVWlTaXplQ29tcGFjdFwiIDogXCJcIlxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGlmIChkYXRhLmJseiA9PT0gXCJcIiB8fCBkYXRhLmJseiA9PT0gdW5kZWZpbmVkIHx8IGRhdGEuYmx6ID09PSBudWxsKSB7XG5cdFx0XHRNZXNzYWdlQm94LmVycm9yKFxuXHRcdFx0XHRcIktlaW5lIEJhbmsgYW5nZWdlYmVuXCIsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdHlsZUNsYXNzOiBiQ29tcGFjdCA/IFwic2FwVWlTaXplQ29tcGFjdFwiIDogXCJcIlxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGxldCB2aWV3ID0gdGhpcy5nZXRWaWV3KCkuYnlJZChcImxvZ2luQ29udGFpbmVyXCIpXG5cdFx0dmlldy5zZXRCdXN5SW5kaWNhdG9yRGVsYXkoMClcblx0XHR2aWV3LnNldEJ1c3koIHRydWUgKVxuXHRcdCQucG9zdCggXCIvbG9naW5cIixcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNvZGU6IEJhc2U2NC5lbmNvZGUoIGRhdGEudXNlciArIFwiO1wiICsgZGF0YS5wYXNzICsgXCI7XCIgKyBkYXRhLmJseiApXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZ1bmN0aW9uKCBkYXRhLCBzdGF0dXMgKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0XHRcdFx0aWYgKGRhdGEubWVzc2FnZSkge1xuXHRcdFx0XHRcdFx0dmlldy5zZXRCdXN5KCBmYWxzZSApXG5cdFx0XHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaHJlZlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHR9XG59Il19