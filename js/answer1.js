//リストの作成とリセット
var numbers = [1,2,3];
function addList(){
    var addNumber = parseInt(document.forms[0].elements["addNumber"].value);
    numbers.push(addNumber);
    var list = document.getElementById('list');
    list.innerText = `リスト：[${numbers}]`;
}
function resetList(){
    numbers.splice(0,numbers.length);
    var list = document.getElementById('list');
    list.innerText = `リスト：[]`;
}

//question1の回答
function answer1(){
    var sumFor = 0;
    var sumWhile = 0;
    var sumRecursion = 0;

    //for メソッドでの回答
    for(var i=0; i<numbers.length; i++){
        sumFor += numbers[i];
    }

    //while メソッドでの回答
    var j =0;
    while(j < numbers.length){
        sumWhile += numbers[j]; 
        j++;
    }

    //再帰関数での回答
    function recursion(k){
        if(k === 1){
             return numbers[0];
        }
        return numbers[k-1] + recursion(k-1); 
    }
    sumRecursion = recursion(numbers.length);
    const answers = [
        {method: "forメソッド", sum: sumFor, answer: "answerFor"}, 
        {method: "Whileメソッド", sum: sumWhile, answer: "answerWhile"}, 
        {method: "再帰関数", sum: sumRecursion, answer: "answerRecursion"}, 
    ];

    answers.forEach(sumAndAnswer=>{
        var text = document.getElementById(sumAndAnswer['answer']);
        text.innerText = `${sumAndAnswer["method"]}での回答:　${sumAndAnswer["sum"]}`;
    });
}