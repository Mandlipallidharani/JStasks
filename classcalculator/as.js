class Calculator {
    constructor() {}
    add(a, b) {
      return a + b;
    }
    sub(a, b) {
      return a - b;
    }
    mul(a, b) {
      return a * b;
    }
    div(a, b) {
      return a / b;
    }
    pow(a, b) {
      return Math.pow(a ,b);
    }
  }
  class CompoundInterest {
    constructor() {}
    compoundInterest(principle, rate, time) {
      let cal = new Calculator();
       let B = cal.pow(cal.add(1,cal.div(rate,100)), time);
      let A = cal.mul(principle, B);
      let CI = cal.sub(A , principle);
      console.log('Compound interest is ' + CI);
    }
    compound() {
      if(time<1) {
        rate=cal.div(5.5, 100);
        const si = cal.mul(principle,rate,time);
      }
      else {
        rate=cal.div(6,100);
        const ci = cal.mul(CI,6);
      }
    }
  }
  let int = new CompoundInterest();
  console.log(int.compoundInterest(10000,5,2));
  
