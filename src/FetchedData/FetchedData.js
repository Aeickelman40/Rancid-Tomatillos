// Use asyn/await for all fetch calls

export const getMovies = async () => {
    const response = await fetch(
        "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
    );
    const movies = await response.json();
    const allMovies = movies.movies;
    return allMovies;
};

// export const postLogin = async (email, password) => {
//     const response = await fetch(
//         "https://rancid-tomatillos.herokuapp.com/api/v2/login", {
//             "method": "POST",
//             "headers": {
//                 "content-type": "application/json"
//             },
//             "body": JSON.stringify({
//                 "email": email,
//                 "password": password
//             })
//         }
//     )
//     const message = await response.json();
//     console.log(message)
//     return message;
// }
// import React from 'react';
// import App from '../App/App';

// function FetchedData() {

// async function getMovieData() {
//     let response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies');
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         } else {
//             let fetchedMovieData = await response.json();
//             console.log(fetchedMovieData.movies)
//             return fetchedMovieData.movies;  
//         }
//     }
//     return getMovieData();
// }

// const getSomeAdvice = async () => {
//     const response = await fetch('https://api.adviceslip.com/advice');
//     const data = await response.json();
//     return data.advice.slip;
// };

// getSomeAdvice().then(data => console.log(data)).catch(err => console.error(err));

// getMovieData() {
//     fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
//         .then(response => {
//             if (response.ok) {
//                 return response.json()
//             } else {
//                 throw new Error({
//                     ...response
//                 })
//             }
//         })
//         .then(movies => {
//             console.log(movies);
//             this.setState({
//                 movies: movies,
//                 error: ''
//             })
//         })
//         .catch(error => {
//             console.log(error)
//             this.setState({
//                 error: 'Error Message Goes Here'
//             })
//         })
// }

// export default FetchedData;