
//From sample express server
const axios= require('axios');
//const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const acadiaCode='acad';

const getPark = function(parkCode){
    axios({
        method: 'get',
        url: "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&api_key=uTBpWbcCgrFOiCgZtY5tLGfJ6qAj6rgf2NhzteS7",
        
    })
    .then(function(response){
        let re = response.data;
        console.log(re);
        return re;
    })
    .catch(function (error){
        console.log(error);
    });
}

const getParksInState=function(stateCode){
    axios({
        method: 'get',
        url: "https://developer.nps.gov/api/v1/parks?stateCode=" + stateCode + "&api_key=uTBpWbcCgrFOiCgZtY5tLGfJ6qAj6rgf2NhzteS7",
        
    })
    .then(function(response){
        let re = response.data;
        console.log(re);
        return re;
    })
    .catch(function (error){
        console.log(error);
    });
}
console.log(getPark(acadiaCode));
console.log(getParksInState('CA'));
