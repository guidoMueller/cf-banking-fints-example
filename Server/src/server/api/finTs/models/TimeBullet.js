export default class TimeBullet {

  constructor(Revenue, Cost,Date) {
    this.Budget=0
    this.Cost= Cost
    this.Cost1= 0
    this.Cost2= 0
    this.Date= Date
    this.Revenue= Revenue
    this.Target= 900000
  }

  setRevenue(value) {
    this.Revenue = parseFloat(this.Revenue) + parseFloat(value);
  }

  setCost(value) {
    this.Cost = parseFloat(this.Cost) + parseFloat(value);
  }

  setCost1(value) {
    this.Cost1 = parseFloat(this.Cost1) + parseFloat(value);
  }

  setCost2(value) {
    this.Cost2 = parseFloat(this.Cost2) + parseFloat(value);
  }

}