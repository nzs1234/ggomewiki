const button = document.getElementById('myButton');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    // 버튼 클릭 시 실행될 코드
    result.textContent = '버튼이 클릭되었습니다!';
});
