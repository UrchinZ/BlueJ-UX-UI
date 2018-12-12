
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
        //docID="fd34edfe67a924377d8a9dfe9a78a38a";       //This value can be hard coded so that we may show entire functionality of UIcomponent
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
        //take results and update UI
        UI.updateUI(obj.pages, startResult, startResult+maxresults);
    };

    sendQueryFeedback(docID) {
    };
}
//create global variables
let API = new APIManager("http://green-x.cs.rpi.edu:8080/search?query=", "http://green-eth.cs.rpi.edu/querying?id=");
