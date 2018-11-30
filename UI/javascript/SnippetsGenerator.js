let SnippetsGenerator = function() {};

SnippetsGenerator.prototype.getSnippets = function(docID, keyWords) {
    let checkKeyWords = function(keyWords, string) {
        for (let i = 0; i < keyWords.length; ++i)
            if (string === keyWords[i])
                return true;
        return false;
    };

    let indexWeight = function(indices, pivotIndex, snippetHalfLength) {
        let pivot = indices[pivotIndex];
        let counter = 0;
        for (let i = 0; i < indices.length; ++i) {
            if (indices[i] > pivot - snippetHalfLength && indices[i] < pivot + snippetHalfLength)
                ++counter;
        }
        return counter;
    }

    let snippet_number = 3;
    let half_length = 1;

    let doc = API.getDocument(docID);
    // let doc = {
    //         docID: 1234,
    //         url: 'test.com',
    //         title: 'TEST',
    //         headings: ['About', 'Academic'],
    //         body: ['keyword1 keyword2 keyword3 keyword4 keyword5 keyword6 keyword7 keyword8 keyword9 keyword10']
    // };
    let body = doc.body;
    let result_counter = 0;
    let result = ['<p>'];
    for (let i = 0; i < body.length && result.length < snippet_number; ++i) {
        current_body = body[i].split(' ');
        let indices = [];
        for (let j = 0; j < current_body.length; ++j) {
            if (checkKeyWords(keyWords, current_body[j]))
                indices.push(j);
        }
        let maxPivot = 0;
        let maxWeight = 0;
        for (let k = 0; k < indices.length; ++k) {
            let weight = indexWeight(indices, i, half_length);
            if (weight > maxWeight) {
                maxWeight = weight;
                maxPivot = indices[i];
            }
        }
        result.push('...');
        for (let j = Math.max(0, maxPivot - half_length); j < Math.min(current_body.length, maxPivot + half_length + 1); ++j) {
            if (checkKeyWords(keyWords, current_body[j]))
                result.push('<b>' + current_body[j] + '</b>');
            else
                result.push(current_body[j]);
        }
        result.push('...');
    }
    result.push('</p>');
    let ret = {
        url: doc.url,
        title: doc.title,
        snippet: result.join(' '),
        body: [doc.body[0], doc.body[doc.body.length - 1]]
    };
    console.log(ret);
    return ret;
};

let Snippets = new SnippetsGenerator();
Snippets.getSnippets(1, ['keyword5', 'keyword6']);

let Snippet=function(header, url, body, snippet){
    this.header=header;
    this.url=url;
    this.body=body;
    this.snippet=snippet;

    return this;
}