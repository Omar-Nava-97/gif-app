
export  const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=15&q=${ encodeURI(category) }&api_key=35aeUZwis2B83uNFrnKpRnlZnrPurhpU`;
    const resp = await fetch( url);

    const {data} = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.fixed_height.url
        }
    })

    return gifs;

}