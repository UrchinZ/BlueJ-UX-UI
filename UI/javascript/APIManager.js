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
};

APIManager.prototype.searchRequest = function(queryInfo, pageNum) {
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

// let API = new APIManager();

console.log(123);
console.log(max_result);
console.log(min_result);
console.log(default_result);