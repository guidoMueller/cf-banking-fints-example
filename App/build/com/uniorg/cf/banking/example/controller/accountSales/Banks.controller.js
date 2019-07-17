"use strict";

sap.ui.define("com/uniorg/cf/banking/example/controller/accountSales/Banks.controller", ["sap/ui/model/json/JSONModel", "com/uniorg/cf/banking/example/controller/BaseController"], function (JSONModel, BaseController) {
	"use strict";

	return BaseController.extend("com.uniorg.cf.banking.example.controller.accountSales.Banks", {
		onInit: function onInit() {
			var oJSONModel = new JSONModel();
			this.getView().setModel(oJSONModel);
			this._loadInfoData();
		},
		_loadInfoData: function _loadInfoData() {
			this.getView().getModel().loadData("/apiFinTs/getBanks");
		}
	});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvYWNjb3VudFNhbGVzL0JhbmtzLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsib25Jbml0Iiwib0pTT05Nb2RlbCIsIkpTT05Nb2RlbCIsImdldFZpZXciLCJzZXRNb2RlbCIsIl9sb2FkSW5mb0RhdGEiLCJnZXRNb2RlbCIsImxvYWREYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQ0EsUSxvQkFBUTtBQUNQLE9BQUlDLGFBQWEsSUFBSUMsU0FBSixFQUFqQjtBQUNBLFFBQUtDLE9BQUwsR0FBZUMsUUFBZixDQUF3QkgsVUFBeEI7QUFDQSxRQUFLSSxhQUFMO0FBQ0EsRztBQUVEQSxlLDJCQUFlO0FBQ2QsUUFBS0YsT0FBTCxHQUFlRyxRQUFmLEdBQTBCQyxRQUExQixDQUFtQyxvQkFBbkM7QUFDQSIsImZpbGUiOiJjb250cm9sbGVyL2FjY291bnRTYWxlcy9CYW5rcy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpTT05Nb2RlbCBmcm9tIFwic2FwL3VpL21vZGVsL2pzb24vSlNPTk1vZGVsXCI7XG5pbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSBcImNvbS91bmlvcmcvY2YvYmFua2luZy9leGFtcGxlL2NvbnRyb2xsZXIvQmFzZUNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFua3MgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG5cblx0b25Jbml0KCl7XG5cdFx0dmFyIG9KU09OTW9kZWwgPSBuZXcgSlNPTk1vZGVsKCk7XG5cdFx0dGhpcy5nZXRWaWV3KCkuc2V0TW9kZWwob0pTT05Nb2RlbCk7XG5cdFx0dGhpcy5fbG9hZEluZm9EYXRhKCk7XG5cdH1cblxuXHRfbG9hZEluZm9EYXRhKCl7XG5cdFx0dGhpcy5nZXRWaWV3KCkuZ2V0TW9kZWwoKS5sb2FkRGF0YShcIi9hcGlGaW5Ucy9nZXRCYW5rc1wiKTtcblx0fVxufSJdfQ==