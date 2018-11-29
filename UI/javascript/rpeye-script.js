const max_result = 20;
const min_result = 1;
const default_result = 7;
//detach filter content before page is ready to serve
var filter = $("#filter").detach();
$(document).ready(function(){
	//input cursor start with search bar
	$("input").focus();

  /*user query function*/
	$('#search_btn').click(function(){
        var search = $('#query').val();
         var api=new APIManager("http://green-x.cs.rpi.edu:5000/search?query=", "http://green-eth.cs.rpi.edu/querying");
        console.log(search);
        if (search.length>1) //do nothing when query is empty
        {
          console.log(api.searchRequest(search));
        };
    })
    $('#query').keypress(function(e){
        if(e.which == 13){//Enter key pressed
        	console.log("enter pressed");
            $('#search_btn').click();//Trigger search button click event
        }
    });

	/*filter block rendering*/
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

   /*decrease number of result dipslayed in the page*/
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
	//change result per page to max
	$(document).on( "click","#res_max",function() {
   		 console.log("max clicked");
   		 $("#res_value").text(max_result);
	});
	//change result per page to 7
	$(document).on( "click","#res_default",function() {
   		 console.log("min clicked");
   		 $("#res_value").text(default_result);
	});
	//chage result per page to min
	$(document).on( "click","#res_min",function() {
   		 console.log("min clicked");
   		 $("#res_value").text(min_result);
	});

});