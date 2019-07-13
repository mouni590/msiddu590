class mobile{
    arr:any = [];
    mobileId:number;
    mobileName:string;
    mobileCost:number;
    constructor(id:number,name:string,cost:number)
    {
        this.mobileId=id;
        this.mobileName=name;
        this.mobileCost=cost;
   
    }
   printMobileDetail()
    {
       this.arr.push(this.mobileId);
       this.arr.push(this.mobileName);
       this.arr.push(this.mobileCost);
       console.log(this.arr);
    }
   }

   class basicPhone extends mobile{
    mobileType:string;
    constructor(id:number,name:string,cost:number,type:string)
    {
        super(id,name,cost);
        this.mobileType=type;
    }
    printMobileDetail()
    {
       this.arr.push(this.mobileId);
       this.arr.push(this.mobileName);
       this.arr.push(this.mobileCost);
       this.arr.push(this.mobileType);
       console.log(this.arr);
    }
}
   class smartPhone extends mobile{
    mobileType:string;
    constructor(id:number,name:string,cost:number,type:string)
    {
        super(id,name,cost);
        this.mobileType=type;
    }
    printMobileDetail()
    {
       this.arr.push(this.mobileId);
       this.arr.push(this.mobileName);
       this.arr.push(this.mobileCost);
       this.arr.push(this.mobileType);
       console.log(this.arr);
    }
   }
   let smartPh = new mobile(12334,"samsung",238947);
   smartPh.printMobileDetail();
   let tom: mobile = new smartPhone(723487,"apple",8477364,"macOs");
     tom.printMobileDetail();
     let tom1: mobile = new smartPhone(435354,"asus",4784,"kitkat");
     tom1.printMobileDetail();