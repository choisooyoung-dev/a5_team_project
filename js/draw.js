// 영화 카드 하나하나 그려주는 funtion
export async function draw(moviesData) {
  const posterBox = document.querySelector(".posterBox");
  // posterBox.innerHTML = "" 이것 때문에 append안되고 새로 만들어짐
  moviesData.forEach((movie) => {
    // const poster = document.querySelector(".poster");
    const movieId = movie.id;
    const movieTitle = movie.title;
    const movieImg = movie.backdrop_path;
    const movieOverview = movie.overview;
    // console.log(movieReleaseDate);
    let addhtml = `
    <div class="poster" data-id=${movie.id}>
        <div class="card bg-dark text-white">
            <div class="movieId">${movieId}</div>
            <img src="https://image.tmdb.org/t/p/w1280${movieImg}" class="card-img posterImg" alt="movie poster image" />
            <div class="card-img-overlay posterContentsBox">
            <h5 class="card-title title">${movieTitle}</h5>
                <div class="contentWrap">
                <button class="btn btn-warning detailBtn" type="button" style="display: none" >더보기</button>
                </div>
            </div>
        </div>
    </div>
    `;
    posterBox.innerHTML += addhtml;
  });
  AddClicklistener();
}

// 상세페이지 그려줌
function AddClicklistener() {
  const poster = document.getElementsByClassName("poster");
  const detailBtn = document.getElementsByClassName("detailBtn");
  for (let i = 0; i < poster.length; i++) {
    poster[i].addEventListener("click", (e) => {
      const movie = poster[i];
      const movieId = movie.dataset.id;
      location.href = `detail.html?${movieId}`;
      console.log(movieId);
    });
    poster[i].addEventListener("mouseenter", (e) => {
      detailBtn[i].style.display = "block";
    });
    poster[i].addEventListener("mouseleave", (e) => {
      detailBtn[i].style.display = "none";
    });
  }
}

/* <button class="btn btn-warning detailBtn" type="button" style="display: none" >더보기</button>
// 1. 메인페이지 평점과 개봉일 지우기 */
// 2. 제목 폰트 키우기
// 3. 마우스 호버(더보기) 추가
