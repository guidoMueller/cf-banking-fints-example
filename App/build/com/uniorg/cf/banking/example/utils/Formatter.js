"use strict";

function dateMapper(date) {
	return moment(new Date(date)).format('L');
}
function amountMapper(amount, currency) {
	switch (currency) {
		case "EUR":
			currency = "€";
			break;
		default:
			currency = "€";

	}
	return amount + " " + currency;
}
function amountIn(amount, currency, isCredit, isExpense) {
	switch (currency) {
		case "EUR":
			currency = "€";
			break;
		default:
			currency = "€";

	}
	return isCredit && isExpense ? amount + " " + currency : "";
}
function amountOut(amount, currency, isCredit, isExpense) {
	switch (currency) {
		case "EUR":
			currency = "€";
			break;
		default:
			currency = "€";

	}
	return !isCredit && isExpense ? amount + " " + currency : "";
}

function getSaldo(value, isCredit) {
	console.log("getSaldo", value, isCredit);
	return isCredit ? value : "-" + value;
}
sap.ui.define("com/uniorg/cf/banking/example/utils/Formatter", [], function () {
	"use strict";

	return { dateMapper: dateMapper, amountMapper: amountMapper, amountIn: amountIn, amountOut: amountOut, getSaldo: getSaldo };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0Zvcm1hdHRlci5qcyJdLCJuYW1lcyI6WyJkYXRlTWFwcGVyIiwiZGF0ZSIsIm1vbWVudCIsIkRhdGUiLCJmb3JtYXQiLCJhbW91bnRNYXBwZXIiLCJhbW91bnQiLCJjdXJyZW5jeSIsImFtb3VudEluIiwiaXNDcmVkaXQiLCJpc0V4cGVuc2UiLCJhbW91bnRPdXQiLCJnZXRTYWxkbyIsInZhbHVlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxVQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUN6QixRQUFPQyxPQUFPLElBQUlDLElBQUosQ0FBU0YsSUFBVCxDQUFQLEVBQXVCRyxNQUF2QixDQUE4QixHQUE5QixDQUFQO0FBQ0E7QUFDRCxTQUFTQyxZQUFULENBQXNCQyxNQUF0QixFQUE4QkMsUUFBOUIsRUFBd0M7QUFDdkMsU0FBUUEsUUFBUjtBQUNDLE9BQUssS0FBTDtBQUNDQSxjQUFXLEdBQVg7QUFDQTtBQUNEO0FBQ0NBLGNBQVcsR0FBWDs7QUFMRjtBQVFBLFFBQU9ELFNBQVMsR0FBVCxHQUFlQyxRQUF0QjtBQUNBO0FBQ0QsU0FBU0MsUUFBVCxDQUFrQkYsTUFBbEIsRUFBMEJDLFFBQTFCLEVBQW9DRSxRQUFwQyxFQUE4Q0MsU0FBOUMsRUFBeUQ7QUFDeEQsU0FBUUgsUUFBUjtBQUNDLE9BQUssS0FBTDtBQUNDQSxjQUFXLEdBQVg7QUFDQTtBQUNEO0FBQ0NBLGNBQVcsR0FBWDs7QUFMRjtBQVFBLFFBQVNFLFlBQVlDLFNBQWIsR0FBMEJKLFNBQVMsR0FBVCxHQUFlQyxRQUF6QyxHQUFvRCxFQUE1RDtBQUNBO0FBQ0QsU0FBU0ksU0FBVCxDQUFtQkwsTUFBbkIsRUFBMkJDLFFBQTNCLEVBQXFDRSxRQUFyQyxFQUErQ0MsU0FBL0MsRUFBMEQ7QUFDekQsU0FBUUgsUUFBUjtBQUNDLE9BQUssS0FBTDtBQUNDQSxjQUFXLEdBQVg7QUFDQTtBQUNEO0FBQ0NBLGNBQVcsR0FBWDs7QUFMRjtBQVFBLFFBQVMsQ0FBQ0UsUUFBRCxJQUFhQyxTQUFkLEdBQTJCSixTQUFTLEdBQVQsR0FBZUMsUUFBMUMsR0FBcUQsRUFBN0Q7QUFDQTs7QUFHRCxTQUFTSyxRQUFULENBQWtCQyxLQUFsQixFQUF5QkosUUFBekIsRUFBbUM7QUFDbENLLFNBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixLQUF4QixFQUErQkosUUFBL0I7QUFDQSxRQUFRQSxRQUFELEdBQWFJLEtBQWIsR0FBcUIsTUFBTUEsS0FBbEM7QUFDQTs7OztRQUNjLEVBQUViLHNCQUFGLEVBQWNLLDBCQUFkLEVBQTRCRyxrQkFBNUIsRUFBc0NHLG9CQUF0QyxFQUFpREMsa0JBQWpELEUiLCJmaWxlIjoidXRpbHMvRm9ybWF0dGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZGF0ZU1hcHBlcihkYXRlKSB7XG5cdHJldHVybiBtb21lbnQobmV3IERhdGUoZGF0ZSkpLmZvcm1hdCgnTCcpXG59XG5mdW5jdGlvbiBhbW91bnRNYXBwZXIoYW1vdW50LCBjdXJyZW5jeSkge1xuXHRzd2l0Y2ggKGN1cnJlbmN5KSB7XG5cdFx0Y2FzZSBcIkVVUlwiOlxuXHRcdFx0Y3VycmVuY3kgPSBcIuKCrFwiXG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0Y3VycmVuY3kgPSBcIuKCrFwiXG5cblx0fVxuXHRyZXR1cm4gYW1vdW50ICsgXCIgXCIgKyBjdXJyZW5jeVxufVxuZnVuY3Rpb24gYW1vdW50SW4oYW1vdW50LCBjdXJyZW5jeSwgaXNDcmVkaXQsIGlzRXhwZW5zZSkge1xuXHRzd2l0Y2ggKGN1cnJlbmN5KSB7XG5cdFx0Y2FzZSBcIkVVUlwiOlxuXHRcdFx0Y3VycmVuY3kgPSBcIuKCrFwiXG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0Y3VycmVuY3kgPSBcIuKCrFwiXG5cblx0fVxuXHRyZXR1cm4gKChpc0NyZWRpdCAmJiBpc0V4cGVuc2UpID8gYW1vdW50ICsgXCIgXCIgKyBjdXJyZW5jeSA6IFwiXCIpXG59XG5mdW5jdGlvbiBhbW91bnRPdXQoYW1vdW50LCBjdXJyZW5jeSwgaXNDcmVkaXQsIGlzRXhwZW5zZSkge1xuXHRzd2l0Y2ggKGN1cnJlbmN5KSB7XG5cdFx0Y2FzZSBcIkVVUlwiOlxuXHRcdFx0Y3VycmVuY3kgPSBcIuKCrFwiXG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0Y3VycmVuY3kgPSBcIuKCrFwiXG5cblx0fVxuXHRyZXR1cm4gKCghaXNDcmVkaXQgJiYgaXNFeHBlbnNlKSA/IGFtb3VudCArIFwiIFwiICsgY3VycmVuY3kgOiBcIlwiKVxufVxuXG5cbmZ1bmN0aW9uIGdldFNhbGRvKHZhbHVlLCBpc0NyZWRpdCkge1xuXHRjb25zb2xlLmxvZyhcImdldFNhbGRvXCIsIHZhbHVlLCBpc0NyZWRpdClcblx0cmV0dXJuIChpc0NyZWRpdCkgPyB2YWx1ZSA6IFwiLVwiICsgdmFsdWVcbn1cbmV4cG9ydCBkZWZhdWx0IHsgZGF0ZU1hcHBlciwgYW1vdW50TWFwcGVyLCBhbW91bnRJbiwgYW1vdW50T3V0LCBnZXRTYWxkbyB9OyJdfQ==