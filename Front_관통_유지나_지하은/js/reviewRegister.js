//등록
let registBtn = document.getElementById("regist");
localStorage.setItem('data', "sdfdsfsdfd");

registBtn.addEventListener("click", function () {
    // 문서에서 id로 input data 가져오기
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    // 입력값 검증
    if (title === "") {
        alert("제목을 입력하세요.");
    }
    else if (content === "") {
        alert("내용을 입력하세요");
    }
    else {
        alert("리뷰가 등록되었습니다.");
        console.log(typeof title);
        console.log(content);


        // 리뷰리스트에 추가하기 구현하기!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        
        // 왠만하면 JSON 객체를 이용해서 json 문자열로 바꾼뒤에
        // localStorage에 넣으면..
        // 객체, 배열, -> 문자열로 바꿔야됨
        let jsonStr = JSON.stringify(title);
        let jsonStr1 = JSON.stringify(content);
        

        // localStorage에 집어넣어야..
        // 로컬스토리지에는 값이 문자열로만 저장됨!
        // setItem(키, 값)
        localStorage.setItem(jsonStr, jsonStr1);
    }
});

//취소
let cancelBtn = document.getElementById("cancel");


cancelBtn.addEventListener("click", function () {
    // 작성된 내용 모두 지우기
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    alert("리뷰 등록 취소되었습니다");

});





