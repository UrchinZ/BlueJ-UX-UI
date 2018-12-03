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
        let doc = {
            docID: 1234,
            url: 'test.com',
            title: 'TEST',
            headings: ['About', 'Academic'],
            body: ['Test text for body here. LOL!', 'Pargraph 2 test text for body here.']
        };
        return doc;

        /*const Http = new XMLHttpRequest();
        const url=this.indexingAddress + docID;
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange=(e)=>{
            //console.log(Http.responseText);
            let obj = JSON.parse(Http.responseText);
            //console.log(obj);
            //put in a call to snippet method here
        }*/
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
let API = new APIManager("http://green-x.cs.rpi.edu:5000/search?query=", "http://green-eth.cs.rpi.edu/querying");
// Get search result for a given query as parameter
//API.searchRequest('');
// Get a document object (as described in deliverable 1)
//API.getDocument(1);