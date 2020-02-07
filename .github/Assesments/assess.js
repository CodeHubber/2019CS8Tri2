$(".type1").click(
    function(){
        alert("Hello")
    }
);

$(".type2").click(
    function(){
       var blah = $(this).css("background-color");
       $('#bottom').css("background-color",blah);
    }
 );
