$(".menu").click(function(){
    $(".mobile").toggleClass("open");
    $(".backdrop").toggleClass("open");
    $("body").toggleClass("open");


    $(".backdrop").click(function(){
        $(".mobile").removeClass("open");
        $(".backdrop").removeClass("open");
        $("body").removeClass("open");
    });
});