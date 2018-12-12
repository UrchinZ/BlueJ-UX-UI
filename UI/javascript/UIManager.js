//this is the format of a class that should be passed by the API calls to ranking
class json{
    constructor(docid, keywords){
        this.docid = docid;
        this.keywords = keywords;
    };
}

//class that handles ui updates from results being returned
class UIManager{
    construct(){

    };

    //called when the results are returned from a query to update the UI with the results
    updateUI(results, start, end){
          console.log(results);

          
          var gen=new SnippetsGenerator();
          var i;

          //take the info node, remove everything in it, and copy it for future use
          var resultTemplate=document.getElementById("info");
          resultTemplate.innerHTML="";
          var container=document.getElementById("content");
          //console.log(results[start]);

          if(results.length==0){    //added in for ranking not having any documents returning
            results=[new json("0a137b375cc3881a70e186ce2172c8d1", ["google", "Google"]), new json("fd34edfe67a924377d8a9dfe9a78a38a", ["bing", "BING"])];
            container.appendChild(document.createTextNode("There were no results returned for your query, here are some sample results."));
          } 
          console.log(results); 

          for(i=start; i<end && i<results.length; i++){           
            
            console.log(results[i]);
            var snip=gen.getSnippets(results[i].docid, results[i].keywords);

            var div=resultTemplate.cloneNode(false);
            div.class="resultDiv";

            //create the link for the html
            var url=document.createElement("a");
            url.href="https://"+snip.url;
            url.innerText=snip.title;

            //console.log(url);

            //append everything to the div element
            div.appendChild(url);
            div.appendChild(document.createElement("br"));  //new line element
            div.appendChild(document.createTextNode(snip.snippet)); //add in the text snippet
            //append the div to the container element
            container.appendChild(div);

            console.log(div);
          }
    }
}

var UI = new UIManager();