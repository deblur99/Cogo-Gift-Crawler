/*
할 일 
1. form에 들어오는 데이터를 입력받음
2. 검색하기 버튼을 눌렀을 때, form에 있는 데이터를 바탕으로 서버에 get 요청과 함께 query string으로 요청 보내기
3. 서버에서 파라미터 받아서 크롤링 수행하고, 클라이언트는 그 결과를 응답으로 받음
4. 응답으로 받은 문자열을 테이블에 표시하기
+ 서버에서 처리중일 때, 버튼 비활성화 및 검색하기 텍스트 부분 바꾸기 (처리중... 으로)
*/

function onClickedSearchBtn() {
    searchForm.submit();
}

proxyUrl = "https://cors-anywhere.herokuapp.com";
baseUrl = `${proxyUrl}/http://localhost:50004`;

searchForm = document.getElementById("param-form");
searchForm.addEventListener("submit", (event) => {
    // 버튼 비활성화 및 문구 변경

    event.preventDefault();
    fetch(event.target.action, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            // 응답 데이터 반영하기
            console.log(JSON.stringify(res));
        })
        .catch((e) => {
            window.alert(
                `서버 요청 중 문제가 발생했습니다.\n${JSON.stringify(e)}`
            );
        })
        .finally(() => {
            // 버튼 활성화 및 문구 재변경
        });
});

// searchBtn = document.getElementById("search-btn");
// searchBtn.addEventListener("click", onClickedSearchBtn);
