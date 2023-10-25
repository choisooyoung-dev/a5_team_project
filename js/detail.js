let addhtml = `
<div class="poster detail-poster" data-id=${movieId}>
    <div class="card bg-dark text-white">
        <div class="movieId">${movieId}</div>
            <img src="${movieImgSrc}" class="card-img posterImg" alt="movie poster image" />
            <div class="card-img-overlay posterContentsBox">
            <h5 class="card-title title">${movieTitle}</h5>
            <div class="contentWrap">
                <p class="card-text">
                <i class="fa-solid fa-star star"></i>${movieRating}
                </p>
                <p class="card-text">
                ${movieReleaseDate}
                </p>
                <p class="card-text">${movieOverview}</p>
            </div>
        </div>
    </div>
</div>
<div class="poster detail-poster" data-id=${movieId}>
    <div class="card bg-dark text-white">
        <div class="movieId">${movieId}</div>
            <div class="contentWrap">
                <p class="card-text">
                작성자
                </p>
                <p class="card-text">
                작성일
                </p>
                <p class="card-text">
                  댓글창
                </p>
                <p class="card-text">
                비밀번호
              </p>
              <button class="btn btn-warning" type="button">
              댓글 달기
            </button>
            </div>
        </div>
    </div>
</div>
<div class="poster detail-poster" data-id=${movieId}>
    <div class="card bg-dark text-white">
        <div class="movieId">${movieId}</div>
            <div class="contentWrap">
                <p class="card-text">
                최수영
                </p>
                <p class="card-text">
               2023-10-25
                </p>
                <p class="card-text">
              우오라왕리ㅏ농라ㅗ아ㅣ
                </p>
                <p class="card-text">
                비밀번호 입력하시오
              </p>
              <button class="btn btn-warning" type="button">
              수정
            </button>
            <button class="btn btn-warning" type="button">
              삭제
            </button>
            </div>
        </div>
    </div>
</div>
`;
