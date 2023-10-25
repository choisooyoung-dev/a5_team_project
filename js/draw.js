// 영화 카드 하나하나 그려주는 funtion
export async function draw(moviesData) {
  moviesData.forEach((movie) => {
    const posterBox = document.querySelector(".posterBox");
    // const poster = document.querySelector(".poster");
    const movieId = movie.id;
    const movieTitle = movie.title;
    const movieImg = movie.backdrop_path;
    const movieRating = movie.vote_average;
    const movieReleaseDate = movie.release_date;
    const movieOverview = movie.overview;
    // console.log(movieReleaseDate);
    let addhtml = `
    <div class="poster" data-id=${movie.id}>
        <div class="card bg-dark text-white">
            <div class="movieId">${movieId}</div>
            <img src="https://image.tmdb.org/t/p/w500${movieImg}" class="card-img posterImg" alt="movie poster image" />
            <div class="card-img-overlay posterContentsBox">
            <h5 class="card-title title">${movieTitle}</h5>
                <div class="contentWrap">
                    <p class="card-text rating">
                    <i class="fa-solid fa-star star"></i>${movieRating}
                    </p>
                    <p class="card-text reDate">
                    ${movieReleaseDate}
                    </p>
                    <p class="none overview">${movieOverview}</p>
                </div>
            </div>
        </div>
    </div>
    `;
    posterBox.innerHTML += addhtml;
  });
  AddClicklistener();
}

function AddClicklistener() {
  const posterBox = document.querySelector(".posterBox");
  const poster = document.getElementsByClassName("poster");
  const viewMoreBtn = document.querySelector(".viewMoreBtn");
  const backBtn = document.querySelector(".backBtn");
  console.log(viewMoreBtn);

  for (let i = 0; i < poster.length; i++) {
    poster[i].addEventListener("click", () => {
      viewMoreBtn.classList.add("none");
      backBtn.classList.remove("none");
      const movie = poster[i];
      const movieId = movie.dataset.id;
      const movieTitle = movie.querySelector(".title").innerText;
      const movieImgSrc = movie.querySelector("img").src;
      const movieRating = movie.querySelector(".rating").innerText;
      const movieReleaseDate = movie.querySelector(".reDate").innerText;
      const movieOverview = movie.querySelector(".overview").innerText;

      posterBox.innerHTML = "";

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
      posterBox.innerHTML += addhtml;
    });
  }
}
