const searchForm = document.querySelector('form');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', (event) => {
    event.preventDefault(); // 페이지 새로고침 방지
    const searchTerm = document.getElementById('searchInput').value;
    const newUrl = `http://${searchTerm}.ggomewiki.kro.kr`;
    window.location.href = newUrl; // 입력된 검색어로 URL 이동
});
