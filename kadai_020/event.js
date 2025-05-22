// textというidを持つHTML要素を取得し、定数に代入する
const page = document.getElementById('btn');
// HTML要素がクリックされたときにイベント処理を実行する
page.addEventListener('click', () => {
  console.log('ボタンをクリックしました');
  text.textContent = 'ボタンをクリックしました';
});
