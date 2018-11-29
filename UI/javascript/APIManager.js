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
        /*<?php
        $servername = this.indexingAddress;
        $username = "querying";
        $password = "querying";
        $dbname = "index";
        
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 

        $sql="Select * FROM "
        ?>;*/

         doc = {
            docID: 1234,
            url: 'test.com',
            title: 'TEST',
            headings: ['About', 'Academic'],
            body: ['Test text for body here. LOL!', 'Pargraph 2 test text for body here.']
        };
        return doc;
    };

    searchRequest(queryInfo) {
        const Http = new XMLHttpRequest();
        const url=this.rankingAddress + queryInfo;
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange=(e)=>{
            //console.log(Http.responseText);
            let obj = JSON.parse(Http.responseText);
            //console.log(obj);
            if(obj.pages.length<10){
                updateResults(obj.pages, 0, obj.pages.length);
            }
            else{
                updateResults(obj.pages, 0, 10);
            }
        }
    };

    sendQueryFeedback(docID) {
    };
}