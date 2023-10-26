// 영화 카드 하나하나 그려주는 funtion
export async function draw(moviesData) {
  const posterBox = document.querySelector(".posterBox");
  // posterBox.innerHTML = "" 이것 때문에 append안되고 새로 만들어짐
  moviesData.forEach((movie) => {
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
            <img src="https://image.tmdb.org/t/p/w1280${movieImg}" class="card-img posterImg" alt="movie poster image" />
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

// 상세페이지 그려줌
function AddClicklistener() {
  //   const posterBox = document.querySelector(".posterBox");
  const poster = document.getElementsByClassName("poster");
  //   const viewMoreBtn = document.querySelector(".viewMoreBtn");
  //   const backBtn = document.querySelector(".backBtn");
  //   console.log(viewMoreBtn);

  for (let i = 0; i < poster.length; i++) {
    poster[i].addEventListener("click", (e) => {
      //   viewMoreBtn.classList.add("none");
      //   backBtn.classList.remove("none");
      const movie = poster[i];
      const movieId = movie.dataset.id;
      //   const movieTitle = movie.querySelector(".title").innerText;
      //   const movieImgSrc = movie.querySelector("img").src;
      //   const movieRating = movie.querySelector(".rating").innerText;
      //   const movieReleaseDate = movie.querySelector(".reDate").innerText;
      //   const movieOverview = movie.querySelector(".overview").innerText;
      location.href = `detail.html?${movieId}`;
      console.log(movieId);
      //   posterBox.innerHTML = "";

      //   posterBox.innerHTML += addhtml;
    });
  }
}
