import { draw } from "./draw.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDUyZDk1YTU1NzM4OTZhOWUyZTRkMDZiYmFjZDkzYSIsInN1YiI6IjY1MmY2NDQ5MGNiMzM1MTZmNjQwYjlkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V-gAyCfvw8yM8Ll7BDo1DEs9CS7vxzStmFhGra5s61g",
  },
};
// 페이지 수(초기값)
let count = 1;
let category = "top_rated";

async function showMovie(category, count) {
  // 별점순 영화 데이터 20개 가져오기
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=ko&page=${count}`,
    options
  );
  console.log(response);
  // console.log(response); // Response {type: 'cors', url: 'https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1', redirected: false, status: 200, ok: true, …}
  // json(클라이언트와 서버 간의 HTTP 통신 위한 텍스트 데이터 포맷)으로 표기
  const jsonData = await response.json();
  // jsonData 안에 results 키값이 우리가 원하는 영화 데이터니까 moviesData 변수로 지정
  const moviesData = await jsonData.results;

  // 영화 카드 그려주기
  draw(moviesData);
}
clickViewBtn();
showMovie(category, count);
switchCategory();

async function clickViewBtn() {
  const viewBtn = document.querySelector(".viewMoreBtn");
  viewBtn.addEventListener("click", function viewBtnClick(e) {
    e.preventDefault();
    count++;
    showMovie(category, count);
    // console.log(count);
    if (count === 5) {
      viewBtn.classList.add("none");
    }
  });
}

async function switchCategory() {
  const ratingBtn = document.getElementById("ratingBtn");
  const popularBtn = document.getElementById("popularBtn");
  ratingBtn.addEventListener("click", (e) => {
    e.preventDefault();
    category = "top_rated";
    // console.log(category);
    showMovie(category, count);
  });
  popularBtn.addEventListener("click", (e) => {
    e.preventDefault();
    category = "popular";
    // console.log(category);
    showMovie(category, count);
  });
}
