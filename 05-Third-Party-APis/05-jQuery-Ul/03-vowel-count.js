// Write code to return the the number of vowels in `str`

// var str = "Aeiou"

var vowelCount = function(str) {
    var result = 0;
    var vowels = ["a", "e", "i", "o", "u"];
  
    for (var i = 0; i < str.length; i++) {
      var letter = str[i].toLowerCase(); 
  
      if (vowels.indexOf(letter) !== -1) {
        result += 1;
      }
    }
  
    return result;
  
  };
  
  vowelCount("therefore I am")
  
  
  
  // var vowelCount = function(str) {
  //   var result = 0;
  //   var vowels = ["a", "e", "i", "o", "u"];
  //   var vowerTotal = [];
  
  //   for (var i = 0; i < str.length; i++) {
  //     var letter = str[i].toLowerCase(); 
  
  //     if (vowels.indexOf(letter) !== -1) {
  //       result += 1;
  //       vowerTotal.push(letter);
  //     }
  //   }
  
  //   return {
  //         count: result,
  //         vowels: vowerTotal 
  //   }
  // };
  // let output = vowelCount ("Hello yangon ");
  // console.log(output.count);
  // console.log(output.vowels);
  
  // !== က စာလုံးတူ ရှာတာ -၁ ဆို နောက်ကနေရှာ
  // litter စာလုံးနဲ့ vowels နဲ့ တူရှာ 
  // တွေရင် resultပေါင်း
      // အသစ်စကားလုံးကို letter ထဲသိမ်း
  
      // letter ထဲမှာ  aeiou ဘာမှ မလုပ်နဲ ပါရင် အောက်က += ပေါင်း
      // name value
  
  // Alternatively, this problem could have been solved without the use of `indexOf`, but by using the logical OR (||) operator to check for each vowel
  
  // var vowelCount = function (str) {
  //   var result = 0;
  
  //   for (var i = 0; i < str.length; i++) {
  //     var letter = str[i].toLowerCase();
  
  //     if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
  //       result += 1;
  //     }
  //   }
  
  //   return result;
  // };
  