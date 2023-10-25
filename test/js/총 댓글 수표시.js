// h10 태그에 span요소 가져오기
const COMMENT_TOTAL = document.querySelector("h10 > span");

// 댓글의 총 개수를 표현하는 함수
function Total() {
    let comments = JSON.parse(localStorage.getItem('COMMENTLIST'));
    COMMENT_TOTAL.innerText = comments.length;
}