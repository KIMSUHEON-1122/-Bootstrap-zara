    //스크롤 애니메이션
    $(window).on('load resize', function() {
            $("html,body").on('mousewheel DOMMouseScroll getScrollPoistion', function (e) {
                height = $(window).height();

                e.preventDefault();
                var delta = 0;
                if (!event) event = window.event;
                if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
                }
                else if (event.detail)
                delta = -event.detail / 3;
                var moveTop = $(window).scrollTop();
            
                if (delta < 0) {//마우스 휠을 위에서 아래로
                moveTop = moveTop + height;
            
                }
                else { //마우스 휠을 아래에서 위로
                moveTop = moveTop - height;
                }
                // 부드럽게 내려가기
                $("html, body").stop().animate({
                scrollTop: moveTop + 'px'
                }, {
                duration: 600, complete: function () {
                }
                });
            });
    }); 
//menu nav클릭 애니메이션
const elcars = document.querySelectorAll(".carousel-item");

$(".menu_nav li a").on('click', function(){
    const elAct = document.querySelector($(this).attr("href"));
    elcars.forEach(elcar => {
        elcar.classList.remove("active");
    })

    console.log('$(this).attr("href")',$(this).attr("href"));
    elAct.classList.add("active");
})

// tab list class붙이기
$(".tabul li").addClass("list-group-item");


// footer추가
const elFooterAdd = document.querySelectorAll(".carousel-item > div")
elFooterAdd.forEach(add => {
    const temp = document.createElement("div");
    temp.innerHTML = 
    `<p class="newletter">
        뉴스레터에 가입하세요
    </p>
    <div class="sns">
        <a href="#">tictoc</a>
        <a href="#">instagram</a>
        <a href="#">facebook</a>
        <a href="#">twitter</a>
        <a href="#">pinterest</a>
        <a href="#">kakao</a>
        <a href="#">youtube</a>
        <a href="#">spotify</a>
    </div>
    <div class="footer_footer">
        아이티엑스코리아 유한회사 | 사업자등록번호: 120-88-14733 | 대표자 : ROMAY DE LA COLINA JOSE MANUEL | 서울시 강남구 영동대로
        511 (삼성동, 트레이드타워 33층) | 대표번호: 080-479-0880 | 이메일: contact.kr@zara.com | 호스팅 서비스 사업자: ITX
        Merken, B.V. | 통신판매업신고 : 제2014-서울강남-02297
    </div>`;
    temp.classList.add("zara_main_slide");
    add.append(temp);
});
