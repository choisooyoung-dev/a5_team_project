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
export  async function SearchMovie() {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${검색어url인코딩}&include_adult=false&language=ko&page=${count}`, Authorization())
    const jsonData = await response.json()
    const movieData = jsonData.results;
    const movieAppend = document.getElementById("movie-container");
    movieData.forEach(movie => {
        // let addhtml = `
        //     <div class="movie-card" data-id=${movie.id} style="display:block">
        //         <img src="${url}${movie.poster_path}" alt="" width="300px" id="img-${movie.id}">
        //         <p class="movie-title" id="title-${movie.id}">${movie.title}</p>
        //         <p class="movie-vote_average">${movie.vote_average}</p>
        //         <p class="movie-overview" id ="overview-${movie.id}" style="display:none">  ${movie.overview}</p>
        //     </div>
        // `;
        let addhtml =`
        <div class="posterImgBox">

            <img
                class="posterImg"
                id="${movie.id}"
                src="${movieImg}"
                alt="poster image"
            />

            <div class="posterContentsBox">

            <span class="posterId">${movieId}</span>

            <h2 class="title">${movieTitle}</h2>

            <div class="ratingBox">
                    <span class="rating">평점 ${movieRating}</span>
                </div>
            </div>
        </div>`
        movieAppend.innerHTML += addhtml;
    });
}
