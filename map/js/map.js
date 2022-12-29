$(".que").click(function () {
  $(this).next(".anw").stop().slideToggle(300);
  $(this).toggleClass("on").siblings().removeClass("on");
  $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
});

$(".que").on("click", function () {
  $(".ganhyun_img").animate(
    {
      left: "-189px",
    },
    1000
  );
  $(".jujung_img").animate(
    {
      right: "-189px",
    },
    1000
  );
  $(".ganhwa_img").animate(
    {
      left: "-189px",
    },
    1000
  );
  $(".wivm_logo").animate(
    {
      opacity: "1",
    },
    1000
  );
  $(".noru_img").animate(
    {
      opacity: "1",
    },
    1000
  );
  $(".eki_img").animate(
    {
      opacity: "1",
    },
    1000
  );
  $(".train01").animate(
    {
      top: "380px",
      right: "171px",
    },
    1000
  );
  $(".train02").animate(
    {
      top: "446px",
      right: "105px",
    },
    1000
  );
});
