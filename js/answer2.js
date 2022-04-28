//リストの作成とリセット
var list1 = ["a", "b", "c"];
var list2 = ["1", "2", "3"];
var lists = [list1, list2];

function addList(i) {
    var index = i - 1;
    var add = document.forms[index].elements["add"].value; //リストに追加する値を取得
    lists[index].push(add); //lists内の適切なリストに値を追加
    var list = document.getElementById('list' + i );
    list.innerText = `リスト：[${lists[index]}]`;
}

function resetList(i) {
    var index = i - 1;
    lists[index].splice(0,lists[index].length);
    var list = document.getElementById('list' + i);
    list.innerText = "リスト：[ ]";
}

//問題２の回答
function answer2() {
    //合成後のリストを定義
    var fusionList = [];
    //list2の方が長い場合
    if(list1.length <= list2.length){
        for(i=0; i<list1.length; i++){
            fusionList.push(list1[i]);
            fusionList.push(list2[i]);
        }
        for(j=list1.length; j<list2.length; j++){
            fusionList.push(list2[j]); //list2の残りの要素を追加
        }
    }else{ //list1の方が長い場合
        for (i = 0; i < list2.length; i++) {
            fusionList.push(list1[i]);
            fusionList.push(list2[i]);
        }
        for (j = list2.length; j < list1.length; j++) {
            fusionList.push(list1[j]);
        }
    }
    var list = document.getElementById('Answer');
    list.innerText = `[${fusionList}]`;
}

