async function fetchText() {
    let response = await fetch('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json');
    let data = await response.json();
    //console.log(typeof(data));
    var newArr = data.map(function(index) {
        return { value: index.genres };
    })
    console.log(newArr);
}
fetchText()