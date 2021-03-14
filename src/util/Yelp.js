const Yelp={
    searchYelp(term, location, sort_by){
        return fetch(`/api?term=${term}&location=${location}&sort_by=${sort_by}`).then((response) =>{
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(((business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address:business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };
                }));
            }
        })
    }
}
export default Yelp;