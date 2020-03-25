(function(){
	var keyss=true;  
function compi(){
	 keyss=false;
        var values=$("textarea").val();
        var converter = new showdown.Converter();
        var valuesss=converter.makeHtml(values);
	var repht=valuesss..split("<a href=\"").join("<a target=<\"_blank\" href=\"");
        $("div.htmlhtml").html(repht);
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
