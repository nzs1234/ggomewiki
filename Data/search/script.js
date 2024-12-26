const searchForm = document.querySelector('form');
const searchButton = document.getElementById('searchButton'); // 버튼 요소 선택

searchButton.addEventListener('click', (event) => {
    event.preventDefault();

    const searchTerm = document.getElementById('searchInput').value; // 검색어 입력 필드에서 값 가져오기
    const newUrl = `http://${searchTerm}.ggomewiki.kro.kr`;

    window.location.href = newUrl;
});
