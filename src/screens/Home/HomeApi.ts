// A mock function to mimic making an async request for data
export async function fetchMovies() {
   return fetch('https://api.themoviedb.org/3/trending/all/day?api_key=e11146bd4a81236990c1fa2f879c9ea6')
        .then((response) => response.json())
        .then((data) => data.results);
}
