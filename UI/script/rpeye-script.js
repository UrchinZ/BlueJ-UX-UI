$(document).ready(function(){
	//input cursor start with search bar
	$("input").focus();

	/*filter block rendering*/
	//var num_res = "<div class=\"input-group\"><input id=\"min\" class=\"btn\" type=\"button\" value=\"-\"><span id=\"num_res_value\">7</span><input id=\"add\" class=\"btn\" type=\"button\" value=\"+\"></div>";
	var num_res="<input id=\"clicker\" class=\"btn\" type=\"button\" value=\"+\">";
	var filter = "<div id=\"filter\">"+num_res+"</div>";
	var content = null;
	/*based swap filter and content*/
    $("#filter_btn").click(function(){
  		//show filter content
  		if ( filter ) {
  			$("#filter_btn").text("Save"); //change filter button text
    		content=$("#content").children().detach(); //swap out content
    		$("#content").prepend($(filter)); //show filter content
    		filter = null; //clear out filter holder
    	//hide filter content, show back result page
  		} else {
  			/*might need to change this*/
  			$("#filter_btn").text("Filter");
    		filter = $( "#filter" ).detach();
    		/*show original content*/
    		$("#content").prepend($(content));
  		}
    });
    console.log("ready");

	/*In filter, change number of result displayed in the page*/
   /*	$( "#clicker" ).on( "click", function() {
   		alert("clicked");
	});*/
});