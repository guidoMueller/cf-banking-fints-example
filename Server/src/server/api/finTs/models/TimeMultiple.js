export default class TimeMultiple {

  constructor(Revenue, Cost,Date) {
    this.Actual=0
    this.Budget= Cost
    this.Cost= 0
    this.Country= 0
    this.Date= Date
  }

  setActual(value) {
    this.Actual = parseFloat(this.Actual) + parseFloat(value);
  }

  setCost(value) {
    this.Cost = parseFloat(this.Cost) + parseFloat(value);
  }

}