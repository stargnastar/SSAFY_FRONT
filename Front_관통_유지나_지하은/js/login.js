 //등록
 let registBtn = document.getElementById("regist");


 registBtn.addEventListener("click", function () {
     // 문서에서 id로 input data 가져오기
     let content = document.getElementById("id").value;
     let content1 = document.getElementById("name").value;
     let content2 = document.getElementById("email").value;
     let content3 = document.getElementById("number1").value;
     let content4 = document.getElementById("number2").value;
 
     // 입력값 검증
     if (content === "" || content1 === "" ||content2 === "" ||content3 === "" ||content4 === "" ) {
         alert("다시 입력하세요.");
     }else {
         alert("회원가입 되었습니다.");
         let jsonStr = JSON.stringify(content);
         let jsonStr1 = JSON.stringify(content1);
         let jsonStr2 = JSON.stringify(content2);
         let jsonStr3 = JSON.stringify(content3);
         let jsonStr4 = JSON.stringify(content4);
         // localStorage에 집어넣어야..
         // 로컬스토리지에는 값이 문자열로만 저장됨!
         // setItem(키, 값)
         
         const arr = [content, content1, content2, content3, content4];
         const message = arr.join();
 
         localStorage.setItem(message);
     }