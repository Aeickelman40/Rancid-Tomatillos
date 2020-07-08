// Use async/await for all fetch calls

export const getMovies = async () => {
    const response = await fetch(
        "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
    );
    const movies = await response.json();
    const allMovies = movies.movies;
    return allMovies;
};

export const getIndividualMovieData = async (movieId) => {
    const response = await fetch(
        `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`
    );
    const movie = await response.json();
    return movie
}

export const postLogin = async (email, password) => {   
    const response = await fetch(
        "https://rancid-tomatillos.herokuapp.com/api/v2/login", {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify({
                "email": email,
                "password": password
            })
        }
    )
    const message = await response.json();
    console.log(message)
    return message;
};


