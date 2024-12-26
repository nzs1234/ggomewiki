document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm'); // 폼 선택
    const searchInput = document.getElementById('searchInput'); // 입력 필드 선택

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // 기본 폼 제출 동작 방지

        const searchTerm = searchInput.value.trim(); // 입력값에서 공백 제거
        if (!searchTerm) {
            alert('Please enter a search term.'); // 검색어가 없으면 경고 표시
            return;
        }

        const newUrl = `http://${searchTerm}.ggomewiki.kro.kr`; // 올바른 URL 생성
        console.log(`Redirecting to: ${newUrl}`); // 콘솔에 URL 출력
        window.location.href = newUrl; // 생성된 URL로 이동
    });
});
