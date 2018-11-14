const max_result = 20;
const min_result = 1;
const default_result = 7;
$(document).ready(function(){
	//input cursor start with search bar
	$("input").focus();

	/*filter block rendering*/
	var res_del_btn = "<input id=\"res_del\" class=\"btn\" type=\"button\" value=\"-\">";
	var res_add_btn="<input id=\"res_add\" class=\"btn\" type=\"button\" value=\"+\">";
	var res_num = "<span id=\"res_value\">7</span>";
	var res_max = "<input id=\"res_max\" class=\"btn\" type=\"button\" value=\"Max\">";
	var res_min = "<input id=\"res_min\" class=\"btn\" type=\"button\" value=\"Min\">";
	var res_default = "<input id=\"res_default\" class=\"btn\" type=\"button\" value=\"Default\">";
	var res_row_1 = "<div class=\"row\">"+res_min+res_default+res_max+"</div>";
	var res_row_2 = "<div class=\"row\">"+res_del_btn+res_num+res_add_btn+"</div>";
	var filter = "<div id=\"filter\"> <p>number of result per page</p>"+res_row_1+res_row_2+"</div>";
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
   $(document).on( "click","#res_add",function() {
   		 console.log("add clicked");
   		 var value = parseInt($("#res_value").text())+1;
   		 if(value > max_result){ //need to change the maximum value
   		 	alert("reached maximum number");
   		 } else {
   		 	$("#res_value").text(value);
   		 	console.log(value);
   		 }
	});

	$(document).on( "click","#res_del",function() {
   		 console.log("minus clicked");
   		 var value = parseInt($("#res_value").text())-1;
   		 if(value < min_result){ //need to change the maximum value
   		 	alert("reached min number");
   		 } else {
   		 	$("#res_value").text(value);
   		 	console.log(value);
   		 }
	});

	$(document).on( "click","#res_max",function() {
   		 console.log("max clicked");
   		 $("#res_value").text(max_result);
	});

	$(document).on( "click","#res_default",function() {
   		 console.log("min clicked");
   		 $("#res_value").text(default_result);
	});

	$(document).on( "click","#res_min",function() {
   		 console.log("min clicked");
   		 $("#res_value").text(min_result);
	});

});