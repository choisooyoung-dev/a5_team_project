// Options 
function Authorization() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDUyZDk1YTU1NzM4OTZhOWUyZTRkMDZiYmFjZDkzYSIsInN1YiI6IjY1MmY2NDQ5MGNiMzM1MTZmNjQwYjlkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V-gAyCfvw8yM8Ll7BDo1DEs9CS7vxzStmFhGra5s61g",
    }
  };
  return options;
}

// Add-data
// 한글은 인코더 
// 완벽한 URL을 인코딩 해야 한다면 encodeURI()를, URL의 일부분을 인코딩해야 한다면 encodeURIComponent()를 사용하자!
// 띄어쓰기는 알아서 걸러준다 
//  backdrop_path null인건 걸르고 (o)
//  인기순으로 내림차순 popularity (o)
//  아무리많아도 20개표시 
//  moreBtn 누르면 나머지 20개표시 만약 20개가 안채워진다? 다음페이지에서 검색해서 추가
//  count는 5까지
async function SearchMovie() {
  const inputData = document.querySelector('.searchInput').value;
  if (inputData == "") {
    alert("값을 입력하시오");
    return;
  } else if (/[!@#$%^&*()_+\-=,.<>/?~`{}]/.test(inputData)) {
    alert("특수문자X");
    return;
  } else if (inputData.includes("]")) {
    alert("특수문자X");
    return;
  } else if (inputData.includes("[")) {
    alert("특수문자X");
    return;
  }
  const encodedText = encodeURIComponent(inputData);
  let count = 1;
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodedText}&include_adult=false&language=ko&page=${count}`, Authorization())
  const jsonData = await response.json()
  const searchData = jsonData.results;
  const descData = searchData.sort((a, b) => b.popularity - a.popularity);
  const addMovie = document.querySelector(".posterBox");
  // 화면에있는 카드들 싹다 삭제
  // index.html에서 만약 display none으로 사용한다면
  // addMovie.style.display = none;
  addMovie.innerHTML = "";
  searchData.forEach(movie => {
    if (movie.backdrop_path !== null) {
      let addhtml = `
      <div class="poster" data-id=${movie.id}>
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
              <i class="fa-solid fa-star star"></i>${movie.popularity}
              <i class="fa-solid fa-star star"></i>${movie.vote_average}
            </p>
          </div>
        </div>
      </div>
    </div>
      `

      addMovie.innerHTML += addhtml;
    }

  });
  document.getElementById('searchInput').value = null;
  document.getElementById('searchInput').focus();
}

async function ClickBtn() {

  const searchBtn = document.getElementById("searchBtn");
  searchBtn.addEventListener("click", () => {
    SearchMovie();
  });
}

async function EnterBtn() {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      SearchMovie();
    }
  });
}
document.getElementById('searchInput').focus();
ClickBtn();
EnterBtn();
