$(".menu").click(function(){
    $(".mobile").toggleClass("open");
    $(".backdrop").toggleClass("open");


    $(".backdrop").click(function(){
        $(".mobile").removeClass("open");
        $(".backdrop").removeClass("open");
    });
});