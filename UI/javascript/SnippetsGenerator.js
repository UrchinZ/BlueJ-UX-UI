// The SnippetGenerator class can initialize a instance of snippet generator
let SnippetsGenerator = function() {};

// This function return the snippet given doc ID and key words input by user
// This function rely on the API manager so include API manager class first in html file
// This function will get document throught API manager class

// Basic idea: for each key word in the document body, calculate a score for that pivot if
// the center of the snippet is over there. The pivot with highest score will become one of
// the pivot.
SnippetsGenerator.prototype.getSnippets = function(docID, keyWords) {
    // Output some debug information
    console.log('Call to get snippet');
    console.log('Receiving docID:' + docID);
    console.log('Receiving keyWords list:' + keyWords);

    // Internal function to check if the string is one of the key words
    // Return true if the string is one of the key words otherwise false
    // This function is case incensitive
    let checkKeyWords = function(keyWords, string) {
        string = string.toLowerCase()
        for (let i = 0; i < keyWords.length; ++i)
            if (string === keyWords[i].toLowerCase())
                return true;
        return false;
    };

    // This function calculate the weight of an index given the pivot index
    // and the indices list that contain the key words
    let indexWeight = function(indices, pivotIndex, snippetHalfLength) {
        let pivot = indices[pivotIndex];
        let counter = 0;
        for (let i = 0; i < indices.length; ++i) {
            if (indices[i] > pivot - snippetHalfLength && indices[i] < pivot + snippetHalfLength)
                ++counter;
        }
        return counter;
    }

    // Some algorithm settings
    // Snippet number indicate the number of snippets that we want to find
    let snippet_number = 3;
    // Half length indicate half of the length of each snippet
    let half_length = 2;

    // First get the document through API manager
    let doc = API.getDocument(docID);
    // Dummy result
    // let doc = {
    //         docID: 1234,
    //         url: 'test.com',
    //         title: 'TEST',
    //         headings: ['About', 'Academic'],
    //         body: ['keyword1 keyword2 keyword3 keyword4 keyword5 keyword6 keyword7 keyword8 keyword9 keyword10']
    // };

    // Get the body of doc for feature use
    let body = doc.body;
    let result_counter = 0;

    // Initialize the result array
    let result = [];

    // One snippet for each body
    for (let i = 0; i < body.length && result_counter < snippet_number; ++i) {
        // Convert string to array
        current_body = body[i].split(' ');

        // Find the indices of key words
        let indices = [];
        for (let j = 0; j < current_body.length; ++j) {
            if (checkKeyWords(keyWords, current_body[j]))
                indices.push(j);
        }
        // If no index in this paragraph
        if (indices.length === 0) continue;

        // We got the indices of key words
        // Calculate the pivot for best snippet
        ++result_counter;

        // Simple maximum record algorithm
        let maxPivot = 0;
        let maxWeight = 0;

        // Calculate weight for each pivots
        for (let k = 0; k < indices.length; ++k) {
            let weight = indexWeight(indices, i, half_length);
            if (weight > maxWeight) {
                maxWeight = weight;
                maxPivot = indices[i];
            }
        }

        // Record the result
        result.push('...');
        for (let j = Math.max(0, maxPivot - half_length); j < Math.min(current_body.length, maxPivot + half_length + 1); ++j) {
            if (checkKeyWords(keyWords, current_body[j]))
                result.push(current_body[j]);
                // result.push('<b>' + current_body[j] + '</b>');
            else
                result.push(current_body[j]);
        }
        result.push('...\n');
    }
    // Close the paragraph tag
    // result.push('</p>');

    // Construct the return value by specification
    let ret = {
        url: doc.url,
        title: doc.title,
        snippet: result.join(' '),
        body: [doc.body[0], doc.body[doc.body.length - 1]]
    };
    // Debug output
    console.log(ret);
    return ret;
};

// This is a sample usage of snippet generator
let Snippets = new SnippetsGenerator();
Snippets.getSnippets("fd34edfe67a924377d8a9dfe9a78a38a", ['body', 'test']);