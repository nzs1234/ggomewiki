// 폼 요소와 버튼을 정확히 선택했는지 확인
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

    // 검색어 가져오기
    const searchTerm = searchInput.value.trim();

    // 검색어가 입력되지 않은 경우 처리
    if (!searchTerm) {
        alert('Please enter a search term.');
        return;
    }

    // 새로운 URL로 이동
    const newUrl = `http://${searchTerm}.ggomewiki.kro.kr`;
    window.location.href = newUrl;
});
