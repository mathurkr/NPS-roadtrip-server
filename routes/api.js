const express=require(express);
const router = express.Router();
const axios= require('axios');

router.get('/CA_results', (req,res,next)=>{
   
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
    
});