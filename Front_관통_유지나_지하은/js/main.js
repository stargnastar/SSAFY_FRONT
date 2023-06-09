
//요청 URL
const URL = "https://www.googleapis.com/youtube/v3/search";
const API_KEY = "AIzaSyANeHG0NduLXjBiX11z-hTKYep9hjsTnog";

window.onload = function () {
  //검색어 가져오기

  let keyword = "상체운동";
  console.log(keyword);
  //그 검색어로 fetch를 이용해서 요청하기
  fetch(
    `${URL}?key=${API_KEY}&part=snippet&q=${keyword}&type=video&maxResults=10`
  )
    .then((res) => res.json())
    .then((body) => body.items)
    .then((items) => {
      //요청결과가 토착하면 리스트 아이템, img추가하기
      //ul태그 가져오기
      const ulTag = document.querySelector("#search-result-list1");
      for (let i = 0; i < items.length; i++) {
        let liTag = document.createElement("li");

        let divTag = document.createElement("div");
        divTag.setAttribute("class", "card");

        let imgTag = document.createElement("img");
        imgTag.src = items[i].snippet.thumbnails.medium.url;
        imgTag.setAttribute("class", "card-img-top");
        imgTag.setAttribute("alt", items[i].snippet.title);

        let div2Tag = document.createElement("div");
        div2Tag.setAttribute("class", "card-body");

        let h5Tag = document.createElement("h5");
        h5Tag.class = "card-title";
        h5Tag.innerText = items[i].snippet.title;


        let pTag = document.createElement("p");
        pTag.setAttribute("class", "card-text");

        let div3Tag = document.createElement("div");
        div3Tag.innerText = items[i].snippet.channelTitle;
        console.log(div3Tag.innerText);

        let div4Tag = document.createElement("div");
        div4Tag.innerText = items[i].snippet.description;

        let aTag = document.createElement("a");
        aTag.setAttribute("href", items[i].snippet.thumbnails.default.url);
        aTag.setAttribute("class", "btn btn-primary");
        aTag.setAttribute("role", "button");
        aTag.setAttribute("data-bs-toggle", "button");
        aTag.innerText = "운동시작";




        ulTag.appendChild(liTag);
        liTag.appendChild(divTag);
        divTag.appendChild(imgTag);
        divTag.appendChild(div2Tag);

        div2Tag.appendChild(h5Tag);
        div2Tag.appendChild(pTag);
        pTag.appendChild(div3Tag);
        pTag.appendChild(div4Tag);
        div2Tag.appendChild(aTag);
      }

    });

  let keyword2 = "하체운동";
  console.log(keyword2);
  //그 검색어로 fetch를 이용해서 요청하기
  fetch(
    `${URL}?key=${API_KEY}&part=snippet&q=${keyword2}&type=video&maxResults=10`
  )
    .then((res) => res.json())
    .then((body) => body.items)
    .then((items) => {
      //요청결과가 토착하면 리스트 아이템, img추가하기
      //ul태그 가져오기
      const ulTag = document.querySelector("#search-result-list2");
      for (let i = 0; i < items.length; i++) {
        let liTag = document.createElement("li");

        let divTag = document.createElement("div");
        divTag.setAttribute("class", "card");

        let imgTag = document.createElement("img");
        imgTag.src = items[i].snippet.thumbnails.medium.url;
        imgTag.setAttribute("class", "card-img-top");
        imgTag.setAttribute("alt", items[i].snippet.title);

        let div2Tag = document.createElement("div");
        div2Tag.setAttribute("class", "card-body");

        let h5Tag = document.createElement("h5");
        h5Tag.class = "card-title";
        h5Tag.innerText = items[i].snippet.title;


        let pTag = document.createElement("p");
        pTag.setAttribute("class", "card-text");

        let div3Tag = document.createElement("div");
        div3Tag.innerText = items[i].snippet.channelTitle;
        console.log(div3Tag.innerText);

        let div4Tag = document.createElement("div");
        div4Tag.innerText = items[i].snippet.description;

        let aTag = document.createElement("a");
        aTag.setAttribute("href", items[i].snippet.thumbnails.default.url);
        aTag.setAttribute("class", "btn btn-primary");
        aTag.setAttribute("role", "button");
        aTag.setAttribute("data-bs-toggle", "button");
        aTag.innerText = "운동시작";




        ulTag.appendChild(liTag);
        liTag.appendChild(divTag);
        divTag.appendChild(imgTag);
        divTag.appendChild(div2Tag);

        div2Tag.appendChild(h5Tag);
        div2Tag.appendChild(pTag);
        pTag.appendChild(div3Tag);
        pTag.appendChild(div4Tag);
        div2Tag.appendChild(aTag);
      }

    });

  let keyword3 = "유산소운동";
  console.log(keyword3);
  //그 검색어로 fetch를 이용해서 요청하기
  fetch(
    `${URL}?key=${API_KEY}&part=snippet&q=${keyword3}&type=video&maxResults=10`
  )
    .then((res) => res.json())
    .then((body) => body.items)
    .then((items) => {
      //요청결과가 토착하면 리스트 아이템, img추가하기
      //ul태그 가져오기
      const ulTag = document.querySelector("#search-result-list3");
      for (let i = 0; i < items.length; i++) {
        let liTag = document.createElement("li");

        let divTag = document.createElement("div");
        divTag.setAttribute("class", "card");

        let imgTag = document.createElement("img");
        imgTag.src = items[i].snippet.thumbnails.medium.url;
        imgTag.setAttribute("class", "card-img-top");
        imgTag.setAttribute("alt", items[i].snippet.title);

        let div2Tag = document.createElement("div");
        div2Tag.setAttribute("class", "card-body");

        let h5Tag = document.createElement("h5");
        h5Tag.class = "card-title";
        h5Tag.innerText = items[i].snippet.title;


        let pTag = document.createElement("p");
        pTag.setAttribute("class", "card-text");

        let div3Tag = document.createElement("div");
        div3Tag.innerText = items[i].snippet.channelTitle;
        console.log(div3Tag.innerText);

        let div4Tag = document.createElement("div");
        div4Tag.innerText = items[i].snippet.description;

        let aTag = document.createElement("a");
        aTag.setAttribute("href", items[i].snippet.thumbnails.default.url);
        aTag.setAttribute("class", "btn btn-primary");
        aTag.setAttribute("role", "button");
        aTag.setAttribute("data-bs-toggle", "button");
        aTag.innerText = "운동시작";




        ulTag.appendChild(liTag);
        liTag.appendChild(divTag);
        divTag.appendChild(imgTag);
        divTag.appendChild(div2Tag);

        div2Tag.appendChild(h5Tag);
        div2Tag.appendChild(pTag);
        pTag.appendChild(div3Tag);
        pTag.appendChild(div4Tag);
        div2Tag.appendChild(aTag);
      }

    });

};




const reviewss = document.querySelector("#goReview");
reviewss.addEventListener("click", function () {
  window.open("reviewList.html", "_self");

});

const loginbtn = document.querySelector("#loginbtn");
loginbtn.addEventListener("click", function () {
  window.open("login.html", "_self");

});











