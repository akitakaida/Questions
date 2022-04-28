//リストの作成とリセット
let numbers = [50, 2, 1, 9];
function addList() {
    let addNumber = parseInt(document.forms[0].elements["addNumber"].value);
    if(addNumber <= 0 ){
        alert("正の整数を入力してください！");
    }else{
        numbers.push(addNumber);
        let list = document.getElementById('list');
        list.innerText = `リスト：[${numbers}]`;
    }
}
function resetList() {
    numbers.splice(0, numbers.length);
    var list = document.getElementById('list');
    list.innerText = `リスト：[]`;
}

//全ての順列を生成
//参考：https://qiita.com/higuma/items/5af4e62bdf4df42ce673
function permutation(array){
    let purmutation = [];
    let purmutations = [];
    function makePermutation(array, permutation, purmutations){
        let arrayCopy;
        let element;
        if (array.length > 0) {
            for (let i = 0; i < array.length; i++) {
                //arrayをすべてコピー
                arrayCopy = array.slice(0);
                //コピーしたもののi番目を切り出し
                element = arrayCopy.splice(i,1);
                //要素の一つ減ったarrayCopyとelementが末尾に追加されたpermutationで再帰関数を呼び出し
                makePermutation(arrayCopy, permutation.concat(element), purmutations);
            }
        }else{
            //purmutationsに作った順列を追加
            purmutations.push(permutation);
        }
    }
    makePermutation(array,purmutation,purmutations);
    return purmutations;
}


//問題の回答
function answer4(){
    let maxNumber = 0;
    let newNumber = 0;
    let numbersPermutation = permutation(numbers);
    numbersPermutation.forEach((element)=>{
        let newNumberString = "";
        for (i = 0; i < element.length; i++) {
            newNumberString += element[i].toString();
        }
        newNumber = parseInt(newNumberString);
        if (newNumber > maxNumber) {
            maxNumber = newNumber;
        }
    });
    let answer = document.getElementById('answer');
    answer.innerText = maxNumber;
}
