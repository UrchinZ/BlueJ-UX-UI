let SnippetsGenerator = function() {};

SnippetsGenerator.prototype.getSnippets = function(docID, keyWords) {
    let checkKeyWords = function(keyWords, string) {
        for (let i = 0; i < keyWords.length; ++i)
            if (string === keyWords[i])
                return true;
    };
    let snippet_number = 3;
    let half_length = 5;

    // <p> test test <b> keywords </b> </p>
    doc = API.getDocument(docID);
    body = doc.body;
    // result2 = {
    //     url: 'test.com',
    //     title: 'test2',
    //     snippet: 'This is the second test page',
    //     body: [''] Last one and first one
    // };
    result = [];
    let result_counter = 0;
    for (let i = 0; i < body.length; ++i) {
        current_body = body[i].split(' ');
        for (let j = 0; j < current_body.)
    }
};

let Snippets = new SnippetsGenerator();
Snippets.getSnippets(1, ['keyword1', 'keyword2']);