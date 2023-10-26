const COMMENTFORM = document.getElementById('CommentForm');
const COMMENTLIST = document.getElementById('CommentList');
const COMMENTTOTAL = document.querySelector("h7 > span");
const MOVIEID = GetMovieId();

// API
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDUyZDk1YTU1NzM4OTZhOWUyZTRkMDZiYmFjZDkzYSIsInN1YiI6IjY1MmY2NDQ5MGNiMzM1MTZmNjQwYjlkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V-gAyCfvw8yM8Ll7BDo1DEs9CS7vxzStmFhGra5s61g",
//   },
// };

// 페이지 로드시에 아래 함수 실행
window.onload = function () {
    // 화면에 댓글 표시
    DisplayComments();
    // 총 댓글 수 표시
    Total()
}

COMMENTFORM.addEventListener("submit", WriteComment);
COMMENTLIST.addEventListener("click", function (event) {
    if (event.target.classList.contains("Del_btn")) {
        DeleteComment();
    }
});

// 댓글 작성하기
function WriteComment(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let comment = document.getElementById('comment').value;
    let comments = GetCommentFromMovieID(MOVIEID);
    comments.push({ username, password, comment });
    SetCommentFromMovieID(MOVIEID, comments);
    // 입력내용 비우기
    COMMENTFORM.reset();
    DisplayComments()
    Total()

}

// 댓글 삭제하기
function DeleteComment() {
    let comments = GetCommentFromMovieID(MOVIEID);

    // 유저로부터 입력값을 받을수 있고 문구를 띄운다.
    let password = prompt("비밀번호를 입력해주세요.");

    // 비밀번호 일치여부 체크
    let checkpassword = comments.find(comments => comments.password === password);

    if (checkpassword) {
        // 비밀번호가 일치하는 댓글을 제외시키고 업데이트된 댓글 목록 생성
        let updatecomment = comments.filter(comments => comments !== checkpassword)
        SetCommentFromMovieID(MOVIEID, updatecomment)
        DisplayComments()
        Total()
    }
    else {
        alert("비밀번호를 확인해주세요.");
    }
}

// 댓글 표시하기
function DisplayComments() {
    COMMENTLIST.innerHTML = "";
    let comments = GetCommentFromMovieID(MOVIEID);

    comments.forEach(element => {
        let comment_element = document.createElement('div');
        comment_element.innerHTML = `
    <p>${element.username}</p>
    <p>${element.comment}</p>
    <button id="Del_btn" class="btn btn-warning Del_btn" type="button">삭제</button>
    `;

        COMMENTLIST.appendChild(comment_element);
    });
}

// 총 댓글 수 표시하기
function Total() {
    let comments = GetCommentFromMovieID(MOVIEID);
    COMMENTTOTAL.innerText = comments.length;
}

// 영화 id 추출하기
function GetMovieId() {
    let temp = location.href.split("?");
    let movieId = temp[1];
    return movieId;
}

// 영화 id를 기반으로 해당 영화 댓글 가져오기
function GetCommentFromMovieID(MOVIEID) {
    // 해당하는 영화 localStorage에 빈배열 생성
    if (localStorage.getItem(`${MOVIEID}`) === null) {
        localStorage.setItem(`${MOVIEID}`, JSON.stringify([]));
    }

    return JSON.parse(localStorage.getItem(`${MOVIEID}`));
}

// 해당 영화id localStorage에 댓글 저장하기
function SetCommentFromMovieID(MOVIEID, comments) {
    localStorage.setItem(`${MOVIEID}`, JSON.stringify(comments))
}