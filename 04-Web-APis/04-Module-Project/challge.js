let question = [
    {
        question: "န-အက္ခရာက ဘယ်နှစ်လုံးမြောက်မှာရှိပါသလဲ?",
        options:['10', '20', '15', '41'],
        feedback: '20'
    },
    {
        question: "I-အက္ခရာက ဘယ်နှစ်လုံးမြောက်မှာရှိပါသလဲ?",
        options:['3', '9', '15', '26'],
        feedback: '9'
    },
    {
        question: "သင့်နာမည်မှာ အဖိုနှင့်အမ အက္ခရာ ဘယ်ဟာက ပိုများများပါနေသလဲ၊ ဥပမာ: စံရွှေမောင်?",
        options:['အဖို', 'အမ', 'ညီတူ', 'လုံးဝမပါ'],
        feedback: 'အဖို'
    },
];

let timeLeft = 5;
let currentQuestion = 0;
let score=0;


function startQuiz(){
    const userName = document.querySelector("#name").value;
    if (userName.trim() === ""){
        alert("နာမည်လေး ထည့်ရန်မမေ့ပါနဲ့");
        return;
    }

    document.querySelector(".welcome").style.display= "none";
    document.querySelector(".exam").style.display="block"; 


    // shuffleArray(quiz);
       quizes = shuffleArray(quiz);
    displayQuiz();
    startTimer();//done


}

function startTimer(){
    let timer = setInterval(() =>{
        if(timeLeft > 0){
            timeLeft--;
            document.querySelector("#time").textContent = timeLeft  + `စက္ကန့်ပဲ ကျန်ပါတော့တယ်`;
        }else{
            clearInterval(timer);
            document.querySelector("#time").textContent =  "အချိန်စေ့ပါပီ";
            disableQuiz();
            setTimeout (nextQuiz, 2000);
        }
    }, 1500);
};

function displayQuiz(){
    const quizBox = document.querySelector("#question");
    const quizText = quizes[currentQuiz].question;
    const options = quizes [currentQuiz].options;

    const quizHTML = `
        <div>Question  ${currentQuiz + 1}:</div>
        <div>${quizText}</div>
        <div>
            ${options.map((option) => creaeOptino(option)).join("")}
        </div>
    `;

    quizBox.innerHTML = quizHTML;
    document.querySelector("#nextQuiz").style.display='block';
}

function creaeOptino(option){
    `
    <div>
        <input type="radio=" name="feedback" value="${option}">${option}
    </div>
    `;
}
function shuffleArray(quiz){
    for (let i=quizes.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i))[(quiz[i], quiz[j]=

        )]

    }

}

submiQuiz();

teaAgain();


nexQuiz();

// userName.trim() === '' စပေ့ပုတ်ခဲ့ရင် နာမည် မထည့်မချင်း မသွားရ

// none က အကုန်ဖယ် hidden နေရာယူတယ် မပျောက်ပါ  ဖျောက်
// 'visible' ကဖော်ပြလိုက်တယ်  block  တခြားတနေရာကဟာကို ယူပြီးလာပေါ်   ပေါ်

// shuffleArray ကလားဖန်ထို lorem နဲ့တူ