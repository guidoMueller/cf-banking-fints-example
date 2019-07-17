export default class TimeAxis {

  constructor(Revenue, Cost,Date) {
    this.Cost= Cost
    this.Date= Date
    this.Revenue= Revenue
  }

  setRevenue(value) {
    this.Revenue = parseFloat(this.Revenue) + parseFloat(value);
  }
  setCost(value) {
    this.Cost = parseFloat(this.Cost) + parseFloat(value);
  }

}