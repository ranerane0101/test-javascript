const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲームは？',
        answers: [
            'スーパーファミコン',
            'プレイステーション2',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ] ,
        correct: 'ニンテンドーDS'
    }, {
        question: 'オンライン会議アプリとして一番主流なものは？',
        answers: [
            'Zoom',
            'Skype',
            'Line',
            'Discord'
        ] ,
        correct: 'Zoom'
    }, {
        question: '今最も人気なプログラミング言語は？',
        answers: [
            'Java',
            'PHP',
            'JavaScript',
            'Python'
        ] ,
        correct: 'JavaScript'
    }
];
// 問題数
const quizLength = quiz.length;

let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () =>{
    document.getElementById('js-question').textContent = quiz[quizIndex].question;

    let buttonIndex = 0;

    

    while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
}
}
// クイズをセットする
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    }else{
        window.alert('不正解！');
    }
    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        window.alert('終了！あなたの正解数は'+score + '/' + quizLength + 'です！');
    }
};

let handlerIndex = 0;

while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e)=>{
        clickHandler(e);
    });
    handlerIndex++;
}



