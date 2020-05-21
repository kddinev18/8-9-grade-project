
$(function(){
    
    $(".btn").on("click", function(){
        let me = $(this);
        
        $(".btn").removeClass("btn-selected");
        
        me.addClass("btn-selected");

    });
    
    
});