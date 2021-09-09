async function fetchText() {
    let response = await fetch('http://api.nobelprize.org/v1/prize.json');
    let data = await response.json();
    //console.log(data); //whole api

    var newArray = data.prizes.filter(function(el) {
        return el.year >= 2000 && el.year <= 2019;
    });

    var newArray2 = data.prizes.filter(function(_el) {
        return _el.year >= 2000 && _el.year <= 2019 && _el.category == "chemistry";
    });

    console.log(newArray); //entries from year 2000 to 2019
    console.log(newArray2); //filtered category as chemistry



}
fetchText()