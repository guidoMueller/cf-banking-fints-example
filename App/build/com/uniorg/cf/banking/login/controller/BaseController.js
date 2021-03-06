"use strict";

sap.ui.define("com/uniorg/cf/banking/login/controller/BaseController", ["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";

	return Controller.extend("com.uniorg.cf.banking.login.controller.BaseController", {
		getRouter: function getRouter() {
			return this.getOwnerComponent().getRouter();
		},
		getResourceBundle: function getResourceBundle() {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		}
	});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvQmFzZUNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZ2V0Um91dGVyIiwiZ2V0T3duZXJDb21wb25lbnQiLCJnZXRSZXNvdXJjZUJ1bmRsZSIsImdldE1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQ0EsVyx1QkFBWTtBQUNYLFVBQU8sS0FBS0MsaUJBQUwsR0FBeUJELFNBQXpCLEVBQVA7QUFDQSxHO0FBRURFLG1CLCtCQUFvQjtBQUNuQixVQUFPLEtBQUtELGlCQUFMLEdBQXlCRSxRQUF6QixDQUFrQyxNQUFsQyxFQUEwQ0QsaUJBQTFDLEVBQVA7QUFDQSIsImZpbGUiOiJjb250cm9sbGVyL0Jhc2VDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcInNhcC91aS9jb3JlL212Yy9Db250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG5cblx0Z2V0Um91dGVyKCkge1xuXHRcdHJldHVybiB0aGlzLmdldE93bmVyQ29tcG9uZW50KCkuZ2V0Um91dGVyKCk7XG5cdH1cblxuXHRnZXRSZXNvdXJjZUJ1bmRsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRPd25lckNvbXBvbmVudCgpLmdldE1vZGVsKFwiaTE4blwiKS5nZXRSZXNvdXJjZUJ1bmRsZSgpO1xuXHR9XG59Il19