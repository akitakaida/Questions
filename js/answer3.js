//問題３の回答
function answer3() {
    let times = parseInt(document.forms[0].elements['times'].value);
    let twoPriveousNumber = 0;
    let priviousNumber = 1;
    let FibonacciNumber;
    //入力された数が2未満の場合のエラー表示
    if(times < 2){
        alert("２以上の数を入力してください！");
    }else{
        let answer = document.getElementById('answer');//追加する親要素を取得
        answer.innerHTML = "<summary>1個目: 0</summary><p>2個目: 1</p>";
        for(let i = 3; i <= times; i++){
            FibonacciNumber = twoPriveousNumber + priviousNumber;
            let add = document.createElement('p'); //pタグを生成
            add.textContent = `${i}個目: ${FibonacciNumber}`; //フィボナッチ数をテキストとして入れる
            answer.appendChild(add); //pタグを追加
            twoPriveousNumber = priviousNumber;
            priviousNumber = FibonacciNumber;
        }
    }
}

