
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
        //docID="fd34edfe67a924377d8a9dfe9a78a38a";       //This value is hard coded so that we may show entire functionality of UIcomponent
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

//this is the format of a class that should be passed by the API calls to ranking
class json{
    constructor(docid, keywords){
        this.docid = docid;
        this.keywords = keywords;
    };
}

//class to deal with updating UI
class UIManager{
    construct(){

    };

    updateUI(results, start, end){
          console.log(results);
          if(results.length==0){    //added in for ranking not having any documents returning
            results=[new json("0a137b375cc3881a70e186ce2172c8d1", ["google", "Google"]), new json("fd34edfe67a924377d8a9dfe9a78a38a", ["bing", "BING"])];
          } 
          console.log(results); 

          
          var gen=new SnippetsGenerator();
          var i;

          //take the info node, remove everything in it, and copy it for future use
          var resultTemplate=document.getElementById("info");
          resultTemplate.innerHTML="";
          var container=document.getElementById("content");
          //console.log(results[start]);

          //console.log()
            
          for(i=start; i<end && i<results.length; i++){
            //var snip=new Snippet("header", "google.com", "body", "snippet");
            //add in code to use snippet generator
            
            
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
            console.log("div", div);
            container.appendChild(div);

            console.log(div);
          }
    }
}

//create global variables
let API = new APIManager("http://green-x.cs.rpi.edu:8080/search?query=", "http://green-eth.cs.rpi.edu/querying?id=");
let Manager = new UIManager();