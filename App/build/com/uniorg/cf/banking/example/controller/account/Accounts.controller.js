"use strict";

sap.ui.define("com/uniorg/cf/banking/example/controller/account/Accounts.controller", ["sap/ui/model/json/JSONModel", "com/uniorg/cf/banking/example/controller/BaseController", "com/uniorg/cf/banking/example/utils/Formatter"], function (JSONModel, BaseController, Formatter) {
  "use strict";

  return BaseController.extend("com.uniorg.cf.banking.example.controller.account.Accounts", {
    formatter: Formatter,
    onInit: function onInit() {
      var oJSONModel = new JSONModel();
      this.getView().setModel(oJSONModel);
      this._loadInfoData();
    },
    _loadInfoData: function _loadInfoData() {
      var model = this.getView().getModel();
      model.loadData("/apiFinTs/getAccounts");
      model.attachRequestCompleted(function () {
        var accounts = model.getData();
        sap.ui.getCore().getModel("accountModel").setData(accounts[0]);
      });
    },
    onPressAccount: function onPressAccount(oEvent) {
      var oItem = oEvent.getSource();
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("accountSalesIban", {
        iban: oItem.getBindingContext().getProperty("iban")
      });
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvYWNjb3VudC9BY2NvdW50cy5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImZvcm1hdHRlciIsIkZvcm1hdHRlciIsIm9uSW5pdCIsIm9KU09OTW9kZWwiLCJKU09OTW9kZWwiLCJnZXRWaWV3Iiwic2V0TW9kZWwiLCJfbG9hZEluZm9EYXRhIiwibW9kZWwiLCJnZXRNb2RlbCIsImxvYWREYXRhIiwiYXR0YWNoUmVxdWVzdENvbXBsZXRlZCIsImFjY291bnRzIiwiZ2V0RGF0YSIsInNhcCIsInVpIiwiZ2V0Q29yZSIsInNldERhdGEiLCJvblByZXNzQWNjb3VudCIsIm9FdmVudCIsIm9JdGVtIiwiZ2V0U291cmNlIiwib1JvdXRlciIsImNvcmUiLCJVSUNvbXBvbmVudCIsImdldFJvdXRlckZvciIsIm5hdlRvIiwiaWJhbiIsImdldEJpbmRpbmdDb250ZXh0IiwiZ2V0UHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1FQSxhLEVBQVlDLFM7QUFFWkMsVSxvQkFBUztBQUNQLFVBQUlDLGFBQWEsSUFBSUMsU0FBSixFQUFqQjtBQUNBLFdBQUtDLE9BQUwsR0FBZUMsUUFBZixDQUF5QkgsVUFBekI7QUFDQSxXQUFLSSxhQUFMO0FBQ0QsSztBQUVEQSxpQiwyQkFBZ0I7QUFDZCxVQUFJQyxRQUFRLEtBQUtILE9BQUwsR0FBZUksUUFBZixFQUFaO0FBQ0FELFlBQU1FLFFBQU4sQ0FBZ0IsdUJBQWhCO0FBQ0FGLFlBQU1HLHNCQUFOLENBQThCLFlBQVc7QUFDdkMsWUFBSUMsV0FBV0osTUFBTUssT0FBTixFQUFmO0FBQ0FDLFlBQUlDLEVBQUosQ0FBT0MsT0FBUCxHQUFpQlAsUUFBakIsQ0FBMEIsY0FBMUIsRUFBMENRLE9BQTFDLENBQWtETCxTQUFTLENBQVQsQ0FBbEQ7QUFDRCxPQUhEO0FBSUQsSztBQUVETSxrQiwwQkFBZ0JDLE0sRUFBUztBQUN2QixVQUFJQyxRQUFRRCxPQUFPRSxTQUFQLEVBQVo7QUFDQSxVQUFJQyxVQUFVUixJQUFJQyxFQUFKLENBQU9RLElBQVAsQ0FBWUMsV0FBWixDQUF3QkMsWUFBeEIsQ0FBcUMsSUFBckMsQ0FBZDtBQUNBSCxjQUFRSSxLQUFSLENBQWMsa0JBQWQsRUFBa0M7QUFDaENDLGNBQU1QLE1BQU1RLGlCQUFOLEdBQTBCQyxXQUExQixDQUFzQyxNQUF0QztBQUQwQixPQUFsQztBQUdEIiwiZmlsZSI6ImNvbnRyb2xsZXIvYWNjb3VudC9BY2NvdW50cy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpTT05Nb2RlbCBmcm9tIFwic2FwL3VpL21vZGVsL2pzb24vSlNPTk1vZGVsXCI7XG5pbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSBcImNvbS91bmlvcmcvY2YvYmFua2luZy9leGFtcGxlL2NvbnRyb2xsZXIvQmFzZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBGb3JtYXR0ZXIgZnJvbSBcImNvbS91bmlvcmcvY2YvYmFua2luZy9leGFtcGxlL3V0aWxzL0Zvcm1hdHRlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnRzIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuXG4gIGZvcm1hdHRlciA9IEZvcm1hdHRlclxuXG4gIG9uSW5pdCgpIHtcbiAgICB2YXIgb0pTT05Nb2RlbCA9IG5ldyBKU09OTW9kZWwoKTtcbiAgICB0aGlzLmdldFZpZXcoKS5zZXRNb2RlbCggb0pTT05Nb2RlbCApO1xuICAgIHRoaXMuX2xvYWRJbmZvRGF0YSgpO1xuICB9XG5cbiAgX2xvYWRJbmZvRGF0YSgpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLmdldFZpZXcoKS5nZXRNb2RlbCgpO1xuICAgIG1vZGVsLmxvYWREYXRhKCBcIi9hcGlGaW5Ucy9nZXRBY2NvdW50c1wiICk7XG4gICAgbW9kZWwuYXR0YWNoUmVxdWVzdENvbXBsZXRlZCggZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgYWNjb3VudHMgPSBtb2RlbC5nZXREYXRhKCk7XG4gICAgICBzYXAudWkuZ2V0Q29yZSgpLmdldE1vZGVsKFwiYWNjb3VudE1vZGVsXCIpLnNldERhdGEoYWNjb3VudHNbMF0pO1xuICAgIH0gKTtcbiAgfVxuXG4gIG9uUHJlc3NBY2NvdW50KCBvRXZlbnQgKSB7XG4gICAgdmFyIG9JdGVtID0gb0V2ZW50LmdldFNvdXJjZSgpO1xuICAgIHZhciBvUm91dGVyID0gc2FwLnVpLmNvcmUuVUlDb21wb25lbnQuZ2V0Um91dGVyRm9yKHRoaXMpO1xuICAgIG9Sb3V0ZXIubmF2VG8oXCJhY2NvdW50U2FsZXNJYmFuXCIsIHtcbiAgICAgIGliYW46IG9JdGVtLmdldEJpbmRpbmdDb250ZXh0KCkuZ2V0UHJvcGVydHkoXCJpYmFuXCIpXG4gICAgfSk7XG4gIH1cbn0iXX0=