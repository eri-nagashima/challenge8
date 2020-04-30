//グローバル変数
const LOCAL_SWITCH = 'Switch文の「case」の中のブロックスコープ!!'; //ID 0
const LOCAL_BOB = 'ここはグローバルな関数「bob()」ローカル変数から連絡!!'; //ID 1
const GLOBAL = 'グローバル変数(定数)「whatBobSays」で連絡!！'; //ID 2
const LOCAL_NEST_FUNCTION = 'グローバルな関数「bob()」の中で作られた関数!!'; //ID 3
const LOCAL_FOR = 'ここはfor文のブロックスコープにあるローカル変数から連絡!!'; //ID 4
const LOCAL_OBJ = 'オブジェクトで設定したオブジェクトメソッドで連絡中!!'; //ID 5

//吹き出しの番号を指定するID

//グローバル変数(定数)
const whatBobSays = GLOBAL;

//起動時に呼ばれる
window.onload = function () {
  //起動時に呼び出す関数
  bob();
};

//talkIDに応じてBobの発する言葉を決める関数
function bob() {
  const whatBobSays = LOCAL_BOB;

  //ID3用関数
  let getBobSaysId3 = function () {
    const whatBobSays = LOCAL_NEST_FUNCTION;
    return whatBobSays;
  };

  for (let talkID = 0; talkID <= 5; talkID++) {
    // const whatBobSays = LOCAL_FOR; //ローカル変数(定数) --> case 4に移動させる

    switch (talkID) {
      case 0: //switch文の`case`の中で、ID2の文字列が格納された変数`whatBobSays`を宣言して使用する??
        // -->新たにブロックを作ってローカル変数を宣言する
        {
          let whatBobSays = LOCAL_SWITCH;
          console.log(whatBobSays);
        }
        break;

      case 1: //ID1の文字列が既に格納され関数`bob()`のローカル変数`whatBobSays`を使用する
        // -->bob()関数内で宣言されているローカル変数？をそのまま出力
        console.log(whatBobSays);
        break;

      case 2: //ID2の文字列が既に格納されたグローバル変数`whatBobSays`を使用する
        break;

      case 3: //関数`bob()`の中で関数`whatBobSays`を作成し、その中で宣言したものを利用する
        //-->新たに関数を作り、その中でローカル変数を宣言し、関数スコープする
        console.log(getBobSaysId3());
        break;

      case 4: //関数`bob()`内のfor文のブロックスコープにある、ID4の文字列が格納された変数`whatBobSays`から取得する
        // -->新たにブロックを作り、for文のすぐ下で宣言されているローカル定数を持ってくる
        {
          const whatBobSays = LOCAL_FOR;
          console.log(whatBobSays);
        }

        break;

      default:
        //オブジェクトを作成し、ID5の文字列を返すオブジェクトメソッド`whatBobSays`を使用する
        // -->新たにオブジェクトのメソッドを作り、その中でローカル変数を宣言する
        const getBobSaysId5 = {
          func: function () {
            this.whatBobSays = LOCAL_OBJ;
            return this.whatBobSays;
          },
        };
        console.log(getBobSaysId5.func());
        break;
    }
  }
}

//「発言する文字列」「発言を識別する番号」を入力すると画面の吹き出しに表示してくれる関数
function setDialog(whatHeSays, talkID) {
  if (talkID <= 5) {
    let bobSays = document.getElementsByClassName('bob-says');
    //Bobの吹き出しに文字列を表示
    bobSays[talkID].firstElementChild.innerHTML = whatHeSays;
    console.log(talkID);
    talkID++;
  }
}
// setDialog(whatBobSays, talkID);
