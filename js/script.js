// 変数定義---------------------------------------------------

let result = document.querySelector('p');
// console.log(result);

let randomType = document.querySelector('h2 span');

let catType = ['茶トラ', '八割れ', 'くろねこ', '三毛猫', 'しろねこ', 'くろねこ'];

let catImg = document.querySelectorAll('img');

let button = document.querySelector('button');

let catFlame = document.querySelectorAll('.grid div');

let resultNumber = document.querySelector('p span');
// -----------------------------------------------------------

// ページをロードしたら猫を並べる

window.addEventListener('load', function() {
    load();
    result.classList.add('disappear');
});

// 「もう一回」ボタンで初期化

button.addEventListener('click', function() {

    load();
    let randomNumber = Math.floor(Math.random() * 6)
    randomType.innerHTML = catType[randomNumber];

    for (let m = 0; m < catFlame.length; m++) {
        catFlame[m].classList.add('initial');
    }

    // カウントアップ開始

    let count = 0;
    let timer = setInterval(countUp, 1000);


    function countUp() {
        count++;
        // console.log(count);

        // 5秒後に猫が消える

        if (count == 5) {

            for (let j = 0; j < catImg.length; j++) {
                catImg[j].classList.add('disappear');

                let catFlame = catImg[j].closest('div');
                catFlame.classList.add('choose');
            }
        }

            // マスを選んだときのイベント
        
        if (count >= 5 && count < 8) {

            for (let k = 0; k < catFlame.length; k++) {
                catFlame[k].addEventListener('click', function(event) {
                    
                    event.currentTarget.classList.remove('initial');
                    event.currentTarget.classList.add('chosen');

                    // console.log(event.currentTarget);
                });
            }
        }


        // 8秒後にタイマー停止

        if (count >= 8) {
            clearTimeout(timer);

            // 猫が現れる

            for (let l = 0; l < catImg.length; l++) {
                catImg[l].classList.remove('disappear');
                catFlame[l].classList.remove('choose');
                catFlame[l].classList.add('pointer-none');

                // 答え合わせ
                if (catImg[l].alt == randomType.innerHTML) {
                    catFlame[l].classList.add('answer');

                    if (catFlame[l].classList.contains('chosen')) {
                        catFlame[l].classList.add('correct');
                        resultNumber.innerHTML = Number(resultNumber.innerHTML) + 1;
                        result.classList.remove('disappear');
                    }
                }
            }
        }

    }

});



// 猫を並べる関数
function load() {
    for (let i = 0; i < catImg.length; i++) {
        let randomNumber = Math.floor(Math.random() * (6)); 
        catImg[i].src = 'image/cat_0' + Number(randomNumber + 1) + '.png';
        catImg[i].alt = catType[randomNumber];
    }
};



// 「足し算」ファイル参照！！！
// setTimeInterval? setTimeOut?　調べてコード書き直す！！！