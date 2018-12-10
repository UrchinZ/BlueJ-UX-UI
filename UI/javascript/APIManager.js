
//class to deal with API calls
class APIManager{

    constructor(rankingAddress = '', indexingAddress = '') {
        this.rankingAddress = rankingAddress;
        this.indexingAddress = indexingAddress;
    }

    setRankingAddress(address) {
        this.rankingAddress = address;
    };

    setIndexingAddress(address) {
        this.indexingAddress = address;
    };

    getDocument(docID) {
        console.log(docID);
        const Http = new XMLHttpRequest();
        const url=this.indexingAddress + docID;
        //make API call synchronus to allow proper functionality
        Http.open("GET", url, false);
        Http.send();
        let obj =  JSON.parse(Http.responseText);
        console.log(obj);
        return obj.data;
    };
    searchRequest(queryInfo, maxresults=10, startResult=0) {
        console.log("passing in query Info, maxresults, startresult")
        console.log(queryInfo)
        console.log(maxresults)
        console.log(startResult)

        const Http = new XMLHttpRequest();
        const url=this.rankingAddress + queryInfo;
        Http.open("GET", url, false);
        Http.send();
        let obj =  JSON.parse(Http.responseText);
        console.log(obj);
        Manager.updateUI(obj.pages, startResult, startResult+maxresults);
    };

    sendQueryFeedback(docID) {
    };
}


//class to deal with updating UI
class UIManager{
    construct(){

    };

    updateUI(results, start, end){
          console.log(results);  

          var i;
          //grab the element that we will put our result divs into
          var container=document.getElementById("info");
          container.innerHTML="";
          //console.log(results[start]);

          //console.log()
            
          for(i=start; i<end && i<results.length; i++){
            //var snip=new Snippet("header", "google.com", "body", "snippet");
            //add in code to use snippet generator
            
            var gen=new SnippetsGenerator();
            var snip=gen.getSnippets(results[i].docid, results[i].keywords);

            var div=document.createElement("div");
            div.class="resultDiv";

            //create the link for the html
            var url=document.createElement("a");
            url.href=snip.url;
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

//create global variables
let API = new APIManager("http://green-x.cs.rpi.edu:8080/search?query=", "http://green-eth.cs.rpi.edu/querying?id=");
let Manager = new UIManager();