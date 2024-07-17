
// li .ကို ဖျေက်ထားနည်း
document.querySelector('#submit').disabled = true;

//၁၀. on 8  စာမရေးပဲ submiနိုပ်မရအောင် လုပ်နည်း
document.querySelector('#task').onkeyup = function () {
    if (document.querySelector('#task').value.length > 0) {
        document.querySelector('#submit').disabled = false;
    }else {
        document.querySelector('#submit').disabled = true;
    }
}
/*
    //8. အပေါ်က သုံးမယ်ဆို မလိုပါ
    // onkeyup ရေးသားနည်း
    document.querySelector('#task').onkeyup = function () {
    // ရေးထားပီသား ပြန်ဖော်ပြ
    document.querySelector('#submit').disabled = false;

}
*/ 

// ၇.
document.querySelector("form").onsubmit = function () {
    //၂. ရေးထားပီးသောစားကို သိမ်း
    // placeholder ထဲမှာ ထည့်လိုက်တဲ့စာကို သိမ်းရန်
    let taskContainer = document.querySelector('#task').value;
    //၃. အသစ်သစ် မှန်သမျှထည့်// const ရေးလို့လည်းရ
    // li ကိုအသစ်တည်ဆောက်
    let li = document.createElement('li');
    //၄. အပေါ်ကစာကို ဒီမှာထည့်
    // ထည့်ပြီးစာများကို li ထဲသို့ထားရန်
    li.innerHTML = taskContainer;
    //၅. သိမ်းထားသော နေရာ
    // ul > li ထည့်
    document.querySelector('#tasks').append(li);

    //၆. ရေးထားတဲ့ စာ ဖျောက်
    // placeholder ထဲက ရိုက်ပြီးစာများ မကျန်အောင်ပြုခြင်း
    document.querySelector('#task').value = "";

    //၉. စာမပါရင် submit  နိုပ်မရပါနဲ့ 
    // စာမရေးဘဲ နိုပ်မရအောင် လုပ်ထားခြင်း
    document.querySelector('#submit').disabled = true;
    //၁. မပျောက်စေချင်ရင်
    // submit-နိပ်လိုက်သောအခါ page refresh မလုပ်ရန်
    return false;
}


// function အစားထိုးခြင်း အသုံးပြုပုံ

// function ( ) { }
// = () => { }