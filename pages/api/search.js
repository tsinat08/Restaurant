import axios from 'axios';
const apiKey= process.env.NEXT_PUBLIC_ENV_VARIABLE
export default async (req, res) => {
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
}
