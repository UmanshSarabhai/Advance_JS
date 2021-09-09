function display() {
    var originalName = document.getElementById("txtInputData").value;
    const apiLink = "https://api.github.com/search/repositories?q=";
    var apiHit = apiLink.concat(originalName)


    $.ajax({
        url: apiHit,
        type: "GET",
        dataType: "json",
        success: function(data) {
            //console.log(data)
            var newArray = data.items.map(function(el) {
                return [el.name, el.full_name, el.private, el.owner.login, el.owner.url, el.score];
            });
            console.log(newArray);

        },
        error: function(error) {
            console.log(`Error ${error}`);
        }

    });

}