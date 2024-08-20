console.log(this);

function haythis() {
  console.log('indise ths function, this' + this);
}

var child = {
  age: 11,
  ageTenYears: function() {
    console.log(this.age + 11);
  }
};

var investor = {
  name: 'cash saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    }
  }
};

haythis();
child.ageTenYears();
investor.investment.investmentGrowth();