//취소
let cancelBtn = document.getElementById("cancel");


cancelBtn.addEventListener("click", function () {
    // 작성된 내용 모두 지우기
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    alert("리뷰 등록 취소되었습니다");
    
});