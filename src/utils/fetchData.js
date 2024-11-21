export const exerciseOptions = {
	method: 'GET',
	// hostname: 'exercisedb.p.rapidapi.com',
	// port: null,
	// path: '/status',
	headers: {
		'x-rapidapi-key': '14dcb30451mshbf32578767211d5p16fb64jsn39bdbed7f373',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	  'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
	},
  };

export const fetchData= async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}