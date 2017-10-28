$("document").ready(function(){
    $(".gradient1").mouseover(function(){
        $(".title").addClass("link-title");
    });
    $(".gradient1").mouseout(function(){
        $(".title").removeClass("link-title");
    });
});
