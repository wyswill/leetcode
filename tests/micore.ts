class vm {
  private db: Array<number> = [];
  private popEvent(): number {
    return this.db.pop();
  }
  public scan(datas: Array<number>): void {
    this.db = this.db.concat(datas);
  }
  public excute(): void {
    console.time("excute");
    while (this.db.length > 0) {
      console.log(this.popEvent());
    }
    console.timeEnd("excute");
  }
}
const jsVm: vm = new vm();
jsVm.scan([1, 2, 3, 4, 5, 6]);
jsVm.scan([32, 4, 2345, 2, , 1, , 6, 345, 6, 1, 34, 1234]);
console.log(jsVm);
jsVm.excute();
