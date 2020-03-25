(function(){
	var keyss=true;  
function compi(){
	 keyss=false;
        var values=$("textarea").val();
        var converter = new showdown.Converter();
        var valuesss=converter.makeHtml(values);
	
        $("div.htmlhtml").html(valuesss);
        $("code.htmltext").text(valuesss);
      }
	  $("textarea").val("");
	 
    $.get("demo.md", function(data, status){
	    if(keyss){
	    $("textarea").val(data);compi();}
    }, "text");
    $(document).ready(function(){
      $("textarea").keyup(compi);
    });
  })();
