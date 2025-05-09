// 変数宣言

var spanSec = 0;
var time;
var speed = 1500;
var startButton;    //スタートボタン
var stopButton;     //ストップボタン
var resetButton;    //リセットボタン
var intervalId;

// 数字の設定　１～２０の数字をランダムに設定する。
var num1 = Math.floor(Math.random() * 21);
var num2 = Math.floor(Math.random() * 21);

// コンソールログ　数字の値の確認
console.log(num1);
console.log(num2);

// 数字を画面に設定する
document.getElementById('num1').textContent = num1;
document.getElementById('num2').textContent = num2;

// 足し算した結果を確認
var answer = num1 + num2;
// var answer = num1 - num2;

// document.getElementById('answer').textContent = answer;

// ループ処理
window.onload = function () {

    time = document.getElementById('time');

    // ボタンのセット
    startButton = document.getElementById('start');
    stopButton = document.getElementById('stop');
    resetButton = document.getElementById('reset');

    // スタートボタンを押した際の処理
    startButton.onclick = function () {

        //速さを取得
        speed = 1500;

        // 画面で設定した速さの値を取得する
        let speedRadio = document.getElementsByName('speed');
        // let len = speedRadio.length;
        len = speedRadio.length;
        // speedRadio[0].checked = true;
        speedRadio[0].checked = "";

        console.log(speedRadio);
        console.log(speedRadio[0]);
        console.log(speedRadio.item(0).value);
        // let checkValue = speed;

        // 繰り返し
        for (let i = 0; i < len; i++) {
            // もしチェックが付いていたら
            if (speedRadio.item(i).checked) {
                // checkValue = speedRadio.item(i).value;
                speed = speedRadio.item(i).value;
                console.log(speed);
            }
        }

        // ストップボタンを押した際の処理を呼び出す
        stop();

        // タイムカウントをリセットする

        spanSec = 0;
        // スタートボタンを押した際の処理を呼び出す
        start();

    };

    // ストップボタンを押した際の処理の宣言
    stopButton.onclick = function () {
        stop();
    };

};

// スタートボタンを押した際の処理
function start() {
    if (intervalId == null) {
        intervalId = setInterval(function () {
            // タイムカウントをカウントする
            spanSec++;
            // 2カウントに1回のペースで問題、解答を交互に更新、表示する

            // 解答の表示
            if (spanSec % 2 == 0) {
                sec.innerHTML = Math.ceil(spanSec / 2);
                answer = num1 + num2;
                // answer = num1 % num2;
                document.getElementById('num1').textContent = num1;
                document.getElementById('num2').textContent = num2;
                document.getElementById('answer').textContent = answer;

            }

            // 問題の更新
            else {
                sec.innerHTML = Math.ceil(spanSec / 2);
                num1 = Math.floor(Math.random() * 21);
                num2 = Math.floor(Math.random() * 21);
                document.getElementById('num1').textContent = num1;
                document.getElementById('num2').textContent = num2;
                document.getElementById('answer').textContent = null;
                // answer = num1 + num2;
                // document.getElementById('answer').textContent = answer;
            }
        }, Number(speed));
        console.log(speed);
    }
    console.log(speed);
}

// ストップボタンを押した際の処理
function stop() {
    clearInterval(intervalId);
    intervalId = null;
}

// リセットボタンを押した際の処理
function reset() {
    spanSec = 0;
    time.innerHTML = spanSec;

}