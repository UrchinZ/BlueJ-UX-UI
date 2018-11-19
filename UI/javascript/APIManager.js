let APIManager = function(rankingAddress = '', indexingAddress = '') {
    this.rankingAddress = rankingAddress;
    this.indexingAddress = indexingAddress;
};

APIManager.prototype.setRankingAddress = function(address) {
    this.rankingAddress = address;
};

APIManager.prototype.setIndexingAddress = function(address) {
    this.indexingAddress = address;
};

APIManager.prototype.getDocument = function(docID) {
    // let headerInit = {
    //     Content-Type : 'application/json',
    //     Accept-Charset : 'utf-8'
    // };
    // let header = new Headers(headerInit);
    // let requestInit = {
    //     method : 'GET',
    //     headers : header
    // };
    // let request = new Request(this.rankingAddress, requestInit);
    // Not sure if this is correct. Working on this
    // fetch(request).then(function(response) {return respons.json()})
    doc = {
        docID: 1234,
        url: 'test.com',
        title: 'TEST',
        headings: ['About', 'Academic'],
        body: ['Test text for body here. LOL!', 'Pargraph 2 test text for body here.']
    };
    return doc;
};

APIManager.prototype.searchRequest = function(queryInfo) {
    result1 = {
        url: 'test.com',
        title: 'test1',
        snippet: 'This is a test page'
    };
    result2 = {
        url: 'test.com',
        title: 'test2',
        snippet: 'This is the second test page'
    };
    result = [result1, result2];
    return result;
};

APIManager.prototype.sendQueryFeedback = function(docID) {
};

let API = new APIManager();

// Get search result for a given query as parameter
console.log(API.searchRequest(''));
// Get a document object (as described in deliverable 1)
console.log(API.getDocument(1));