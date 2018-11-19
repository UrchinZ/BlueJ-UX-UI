let SnippetsGenerator = function() {};

SnippetsGenerator.prototype.getSnippets = function(docID, keyWords) {
    let length = 20;
    // <p> test test <b> keywords </b> </p>
    doc = API.getDocument(docID);
    body = doc.body;
    // result2 = {
    //     url: 'test.com',
    //     title: 'test2',
    //     snippet: 'This is the second test page',
    //     body: [''] Last one and first one
    // };
    result = '';
    for (let i = 0; i < body.length; ++i) {
        console.log(body[i]);
    }
};

let Snippets = new SnippetsGenerator();
Snippets.getSnippets(1, ['keyword1', 'keyword2']);