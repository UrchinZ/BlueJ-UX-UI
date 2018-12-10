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
        var pg = require('pg');
        delete pg.native;
        var connect = "postgress://querying:querying@"+this.indexingAddress+"/ip:5432/index";
        var client = new pg.client(connect);
        client.connect();
        var query = client.query("SELECT * ");
        console.log(client.query(query));
    };

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
            let obj = JSON.parse(Http.responseText);
            console.log(obj);
            updateUI(obj.pages, startResult, startResult+maxresults);

        }
    };

    sendQueryFeedback(docID) {
    };
}
let API = new APIManager("http://green-x.cs.rpi.edu:8080/search?query=", "green-z.cs.rpi.edu");
// Get search result for a given query as parameter
//API.searchRequest('');
// Get a document object (as described in deliverable 1)
//API.getDocument(1);