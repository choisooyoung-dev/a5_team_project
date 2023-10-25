// 해당 html 요소들 가져오기
const COMMENTINPUT = document.querySelector('.Comment_write_container');
const COMMENTLIST = document.getElementById('Comment_list');
const COMMENTFORM = document.getElementById('Commentform');

// 로컬스토리지에 COMMENTLIST 항목이 없을때 비어있는 COMMENTLIST 만들기
if (localStorage.getItem('COMMENTLIST') === null) {
    localStorage.setItem('COMMENTLIST', JSON.stringify([]));
}


// 댓글 작성 함수
function WriteComment() {
    // submit 태그 누를시에 창이 새로고침되는 것(초기화면으로 돌아오는 것)을 막아줌
    COMMENTINPUT.onsubmit = function (event) {
        event.preventDefault();

        // 영화 id값 가져오기는 일단 보류
        let username = document.getElementById('UserName').value;
        let password = document.getElementById('password').value;
        let comment = document.getElementById('Comment_box').value;

        // 작성자 객체 생성
        let newcomment = {
            // id : `${movieId}`,
            name: username,
            pw: password,
            comment: comment
        };

        // 기존 댓글 가져오기 및 추가
        let comments = JSON.parse(localStorage.getItem('COMMENTLIST'));
        comments.push(newcomment);

        // 로컬스토리지에 댓글 저장
        localStorage.setItem('COMMENTLIST', JSON.stringify(comments));

        // 입력값 초기화
        COMMENTFORM.reset();

    }
}

// 등록 버튼을 클릭하면 댓글 작성 함수 실행
COMMENTFORM.addEventListener("submit", WriteComment);