// Options 
function Authorization() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzhlMDdjMThkZDBhMWM0NTM0YjUxNTBhZDYxM2U5NSIsInN1YiI6IjY1MmUzNzdkMDI0ZWM4MDBjNzc1YmRkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V_ZMM9I8ONt9rx1KohktMjCW18-Y_8mbUmMQRwZgZ0I"
        }
    };
    return options;
}

// Url
//   async function MovieImgUrl() {
//     const response = await fetch('https://api.themoviedb.org/3/configuration', Authorization());
//     const jsonData = await response.json()
//     return jsonData.images.base_url + jsonData.images.poster_sizes[3];
// }

// Add-data
// 한글은 인코더 
// 완벽한 URL을 인코딩 해야 한다면 encodeURI()를, URL의 일부분을 인코딩해야 한다면 encodeURIComponent()를 사용하자!
// const originalText = "한 ";
// const encodedText = encodeURIComponent(originalText);
// const encodedText = encodeURI(originalText);
// 띄어쓰기는 알아서 걸러준다 
//  `https://image.tmdb.org/t/p/w500${movieArr[i].backdrop_path}` 이미지url
async function SearchMovie() {
    const inputData = document.querySelector('.searchInput');
    const encodedText = encodeURIComponent(inputData.value);
    let count = 1;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodedText}&include_adult=false&language=ko&page=${count}`, Authorization())
    const jsonData = await response.json()
    const searchData = jsonData.results;
    const addMovie = document.querySelector(".posterBox");
    // 화면에있는 카드들 싹다 삭제
    addMovie.innerHTML = "";
    searchData.forEach(movie => {
        let addhtml =`
        <div class="poster">
        <div class="card bg-dark text-white">
          <div class="movieId">${movie.id}</div>
          <img
            src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}"
            class="card-img posterImg"
            alt="movie poster image"
          />
          <div class="card-img-overlay posterContentsBox">
            <h5 class="card-title title">${movie.title}</h5>
            <div class="contentWrap">
              <p class="card-text">
                <i class="fa-solid fa-star star"></i>${movie.vote_average}
              </p>
            </div>
          </div>
        </div>
      </div>
        `
        // addMovie.innerHTML += addhtml;
        // 이번에는 appendChild써보자
        addMovie.appendChild(addhtml);
    });
}
