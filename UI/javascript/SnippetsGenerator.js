let SnippetsGenerator = function() {};

SnippetsGenerator.prototype.getSnippets = function(docID, keyWords) {
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
    result = '';
    for (let i = 0; i < body.length; ++i) {
        current_body = str.split(bodt[i], ' ');
        console.log(current_body);
    }
};