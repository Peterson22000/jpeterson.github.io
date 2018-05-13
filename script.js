$(document).ready(function(){
    faqControl();
});

function faqControl(){
    $(".a").hide();
    $(".q").on("click".function(){
        $(this).next().slideToggle();
    });
}