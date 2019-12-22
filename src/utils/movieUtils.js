const API_KEY = "b18ad59f8eb07b4d3fe4ed65e6007d77"
const URL_API = "https://api.themoviedb.org/3"

export const getMoviePoster = (id) =>{
    return fetch(URL_API+"/movie/"+id+"?api_key="+API_KEY+"&language=en-US")
    .then(response => response.json())
    .then(data=>{
        return data.poster_path
    })
}

export const getMovies = (query) => {
    return fetch("https://api.themoviedb.org/3/search/movie?api_key="+API_KEY+"&query=" + query)
    .then(response => response.json())
    
}
