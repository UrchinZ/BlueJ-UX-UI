class APIManager{

    constructor(rankingAddress = '', indexingAddress = '') {
        this.rankingAddress = rankingAddress;
        this.indexingAddress = indexingAddress;
        this.finishedAPI=false;
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
        Http.open("GET", url);
        this.finishedAPI=false;
        this.callAPI(Http);
        
        var i=0;
         while(!this.finishedAPI){
            i++;
            if(i==10000){
                break;
            }             
         }
         console.log("finished: "+this.finishedAPI);
        // return x;
    };

    callAPI(Http){
        Http.send();
        Http.onreadystatechange=(e)=>{
            //console.log(Http.responseText);
            let obj = JSON.parse(Http.responseText);
            console.log(obj);
            this.finishedAPI=true;
            //updateUI(obj.pages, startResult, startResult+maxresults);

        }
    }

    searchRequest(queryInfo, maxresults=10, startResult=0) {
        console.log("passing in query Info, maxresults, startresult")
        console.log(queryInfo)
        console.log(maxresults)
        console.log(startResult)
        const Http = new XMLHttpRequest();
        const url=this.rankingAddress + queryInfo;
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange=(e)=>{
            //console.log(Http.responseText);
            let obj =  JSON.parse(Http.responseText);
            console.log(obj);
            updateUI(obj.docs, startResult, startResult+maxresults);

        }
    };

    sendQueryFeedback(docID) {
    };
}
let API = new APIManager("http://green-x.cs.rpi.edu:8080/search?query=", "http://green-eth.cs.rpi.edu/querying?id=");
// Get search result for a given query as parameter
//API.searchRequest('');
// Get a document object (as described in deliverable 1)
//API.getDocument(1);