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
        docID: 1,
        keywords: ['keyword1', 'keyword2'],
        rank: 0.2
    };
    result2 = {
        docID: 2,
        keywords: ['keyword3', 'keyword4'],
        rank: 0.8
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