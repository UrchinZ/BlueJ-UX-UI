let SnippetsGenerator = function() {};

SnippetsGenerator.prototype.getSnippets = function(docID, keyWords) {
    let length = 20;
    // <p> test test <b> keywords </b> </p>
    doc = API.getDocument(docID);
};