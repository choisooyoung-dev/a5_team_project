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
    // console.log(movieReleaseDate);
    let addhtml = `
    <div class="poster" data-id=${movie.id}>
        <div class="card bg-dark text-white">
            <div class="movieId">${movieId}</div>
            <img src="https://image.tmdb.org/t/p/w500${movieImg}" class="card-img posterImg" alt="movie poster image" />
            <div class="card-img-overlay posterContentsBox">
            <h5 class="card-title title">${movieTitle}</h5>
            <div class="contentWrap">
                <p class="card-text">
                <i class="fa-solid fa-star star"></i>${movieRating}
                </p>
                <p class="card-text">
                ${movieReleaseDate}
                </p>
            </div>
            </div>
        </div>
    </div>
    `;
    posterBox.innerHTML += addhtml;
    const poster = document.getElementsByClassName("poster");
    for (let i = 0; i < poster.length; i++) {
      poster[i].addEventListener("click", () => {
        const movie = poster[i];
        const movieId = movie.dataset.id;
        console.log(movieId);
      });
    }
  });
}
