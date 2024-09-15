// နိုပ်ရမဲ့ ဘက်တန်
var generateBtn = document.querySelector (
    "#generate");
  
  generateBtn.addEventListener ("click",writePassword);
  
  function writePassword () {
    //ရလာသော ပစည်းကို သိမ်းပါ
    var password = generatedPassword();
    // အလယ်မှာ ရေးပါ
    var passwordText = document.querySelector("#password");
    // value သိမ်းပေါ်
    passwordText.value = password;
  }
  
  function generatedPassword(){
    let passwordLength;
    let includeUpperCase;
    let includeLowerCase;
    let includeNumber;
    let includeSpecialCharacter;
  
  
    passwordLength = parseInt(prompt("စကားဝှာက်ကို ၈-လုံးမှ ၁၂၈-လုံးအတွင်းရွေးပါ"));
    includeUpperCase = confirm('စာလုံးကြီးရောပါစေချင်သေးလား');
    includeLowerCase = confirm('စာလုံးသေးရောထည်ချင်သေးလား');
    includeNumber = confirm ('နံပါတ်ရောထည့်ချင်သေးလား');
    includeSpecialCharacter = confirm ('အထူးစကားလုံးတွေရောထည့်ချင်သေးလား');
  //မမှန်မချင်း ပြန်မေးပါ  မှန်လျှင် ရှေ့ဆက်ပါ while
    while (isNaN(passwordLength) || passwordLength <8 || passwordLength >128){
        alert('ဒါလေးတောင်မှန်အော်မထည့်တတ်ဘူးလား၊ ၈လုံးမှ ၁၂၈ လုံးအတွင်းရွေးပါဆိုမှ');
        return "";
        parseInt(prompt("choice 8 to 128"));
    }
    //  || or
    // && and
  //ထပ်ခါထပ်ခါ ပြန်မေးပါ
    if(!includeUpperCase && !includeLowerCase && includeNumber && includeSpecialCharacter) {
        alert ("ဟဲ့ကောင်စုတ်၊ တစ်ခုခုရွှေးပါဆိုမှ") 
        // return "";
        parseInt(prompt("choic 8 to 128"));
    }
    let availableChar = "";
    if (includeUpperCase) {
        availableChar += 'ကခဂဃငစဆဇစျည';
    }if (includeLowerCase){
        availableChar += 'ပဖဗဘမယရလဝသဟ';
    }if (includeNumber){
        availableChar += '၁၂၃၄၅၆၇၈၉';
    }if (includeSpecialCharacter){
        availableChar += 'အအာဣဤ၍ဪ';
    }
    let password = "";
    for (let i=0; i<passwordLength; i++){
        let rendomIndex  = Math.floor(Math.random()* availableChar.length); password +=  availableChar.charAt(rendomIndex);
    }
    return password;
  }
  
  // Math.floor .ကိန်းဖျောက်