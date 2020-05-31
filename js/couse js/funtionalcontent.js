$(function () {
    let i=2;
    let content = getNextcontent();

    $(document).ready(function(){
          $("#btnfinish").hide();
      });

    if (content) {
        //console.log(question);
        $("#maincontent").text(content.contenttext);
    }


    $("#btnNext").on("click", function () {
        if ($(this).text() != "Finish") {
            let content = getNextcontent();
                console.log(content);
                $("#maincontent").text(content.contenttext);
        }
        else {
            console.log("Checking test");

        }
    });

    $("#btnNext").on("click", function () {
        i++;
        if(i==4){
            $(document).ready(function(){
                $("#btnNext").hide();
            });
            $(document).ready(function(){
                $("#btnfinish").show();
            });
        }
    });

});


