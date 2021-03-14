const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios=require('axios')

const app = express();
const port = process.env.PORT || 3000;

const apiKey= process.env.REACT_APP_API_KEY;
app.use(cors());

app.use(express.static('build'));

app.get('/api', async (req,res)=>{
    try{
        const response= await axios.get(`https://api.yelp.com/v3/businesses/search?term=${req.query.term}&location=${req.query.location}&sort_by=${req.query.sort_by}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                },
            });
        const data=response.data;
        res.status(200).json({...data})
    }catch (e){
        console.log(e);
        res.status(404).json({error:e.message})
    }

});

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
});

