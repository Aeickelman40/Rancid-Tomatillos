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
    return message;
};

export const getUserRatings = async () => {
    //Change this back to the correct user
    const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/users/63/ratings')
    const userRatings = await response.json()
    return userRatings;
    
}

export const addMovieRating = async (rating, userId, movieId) => {
    let numRating = parseInt(rating)
      const response = await fetch(
          `https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`, {
              "method": "POST",
              "headers": {
                  "content-type": "application/json"
              },
              "body": JSON.stringify({
                "movie_id": movieId,
                "rating": numRating
              })
          }
      )
      const message = await response.json();
      return message;
}

export const deleteMovieRating = async (userId, movieId) => {
    console.log('userId', userId)
    console.log('movieId', movieId)
    const response = await fetch(
        `https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings/${movieId}`, {
            "method": "DELETE"        
        }  
    )
    const data = await response;
    return data;
}

export const getFavoriteMovies = async () => {
    const response = await fetch('http://localhost:3001/favorites')
    const userFavorites = await response.json()    
    return userFavorites
}


