//全ての計算式を生成する関数
function createFomula(n, fomula, fomulae) {
    let calculationSymbols = [" + ", " - ", ""];
    let pre;
    if (n < 9) {
        for (let i = 0; i < calculationSymbols.length; i++) {
            pre = [n, calculationSymbols[i]];
            createFomula(n + 1, fomula.concat(pre), fomulae);
        }
    } else {
        fomula.push(n);
        fomulae.push(fomula);
    }
}


//question5の回答
function answer5() {
    let fomulae = [];
    let fomula = [];
    let answers = [];
    createFomula(1, fomula, fomulae);
    fomulae.forEach((fomula)=>{
        //＋もーもない場合に数字を結合
        for(i = fomula.length - 1 ; i >= 0; i --){
            if(fomula[i] === ""){
                let fusionNum = "";
                fusionNum += fomula.splice(i-1,1).toString();
                fusionNum += fomula.splice(i,1).toString();
                fomula[i-1] = parseInt(fusionNum);
            }
        }
        //足し算と引き算を実行
        let cal = fomula[0];
        for(i = 0; i < fomula.length; i ++){
            if(fomula[i] === " + "){
                cal += fomula[ i + 1 ];
            }else if(fomula[i] === " - "){
                cal -= fomula[ i + 1 ];
            }
        }
        if(cal === 100){
            fomula.push(' = 100');
            answers.push(fomula);
        }
    });
    //追加する親要素を取得し、RESET
    let answerArea = document.getElementById('answer'); 
    answerArea.innerHTML ='<summary>1 + 2 + 34 – 5 + 67 – 8 + 9 = 100</summary>';
    //結果を表示
    answers.forEach((answer)=>{
        let text = "";
        let add = document.createElement('p');//pタグを生成
        answer.forEach((element)=>{
            text += element.toString();
        });
        add.textContent = text;
        answerArea.appendChild(add);
    });
    answerArea.setAttribute('open','open');
}
