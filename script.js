const movies = []


// append Movies from Movies array
function appendMovies(allMovies) {
    $('#movieContainer').html('')
    movies.forEach((arr) => {
        $('#movieContainer').append(`<li id="${arr[0]}">${arr[0]}&#160;&#160;&#160;Rating: &#160;${arr[1]}<button>Remove</button></li>`)
    })
}

// get Movie and rating move into nested array
$('#movieRatings').on('submit', function (e) {
    e.preventDefault()
    const movie = $('#title').val().trim()
    const rating =parseInt($('#rating').val())
    if ($(`#${movie}`).length || movie.length <= 2 || rating === ''){
        return;};
    movies.push([movie, rating])
    $('#movieRatings').trigger('reset')
    appendMovies(movies)
})

$('#movieContainer').on('click', 'button', function () {
    for (let i = 0; i < movies.length; i++) {
        if ($(this).parent().attr('id') === movies[i][0]) {
            movies.splice(i,1)
        }
    }
    $(this).parent().remove()
})

$('#aToZ').on('click', function () {
    sortsMovies(movies, 'movies')
    appendMovies(movies)
})
$('#zToA').on('click', function () {
    reverseSortMovies(movies, 'movies')
    appendMovies(movies)
})
$('#lowest').on('click', function () {
    sortsMovies(movies, 'rating')
    appendMovies(movies)
})
$('#highest').on('click', function () {
    reverseSortMovies(movies, 'rating')
    appendMovies(movies)
})

function sortsMovies(arr,sortBy) {
    return arr.sort((a, b) => {
        const sortIndex = sortBy === 'movies' ? 0 : 1
        if (a[sortIndex] < b[sortIndex]) {
            return -1;
        }
        if (a[sortIndex] > b[sortIndex]) {
            return 1;
        }
        return 0
    })
}
function reverseSortMovies(arr,sortBy) {
    return sortsMovies(arr, sortBy).reverse();
}