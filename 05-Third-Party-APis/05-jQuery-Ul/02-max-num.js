
var maxNum = function (arr) {
    var max = arr[0];
  
    for (var i = 1; i < arr.length; i++) {
      var currentNum = arr[i];
  
      if (currentNum > max) {
        max = currentNum;
      }
    }
  
    return max;
  };
  
  maxNum([2, 4, 3, -3, 44, 88, 4444, 452, 5555])
  
  
  
  
  
  // var i = 1 indexnumber
  // ဂဏန်းကြီးရာကို ရှာ
  // arr.length [ 9 ]တခုချင်းလျော့
  