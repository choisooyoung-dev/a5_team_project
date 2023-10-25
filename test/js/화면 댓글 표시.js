// 화면에 댓글 표시하는 함수
function DisplayComments() {
    COMMENTLIST.innerHTML = "";

    // 기존 댓글 가져오기
    let comments = JSON.parse(localStorage.getItem('COMMENTLIST'));
    
    comments.forEach((newcomment) => {

        let list_element = document.createElement('ul');
        list_element.innerHTML = `
            <li>${newcomment.name}</li>
            <li>${newcomment.comment}</li>
            <li><button id="Del_btn" class="btn btn-warning" type="button">삭제</button></li>
        `;

        // 화면에 표시될 데이터 추가
        COMMENTLIST.appendChild(list_element)

    });
}