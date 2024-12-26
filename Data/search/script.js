document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // 기본 폼 제출 동작 방지

        const searchTerm = searchInput.value.trim(); // 검색어 가져오기
        if (!searchTerm) {
            alert('Please enter a search term.'); // 검색어 없으면 경고창
            return;
        }

        const newUrl = `http://${searchTerm}.ggomewiki.kro.kr`;
        console.log(`Redirecting to: ${newUrl}`); // 디버깅용 URL 출력
        window.location.href = newUrl; // 새 URL로 이동
    });
});
