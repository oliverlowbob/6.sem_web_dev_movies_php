window.onload = async function () {
    var newUrl = "http://localhost/movies/";
    var response = await $.get(newUrl);
    var results = response.results;

    $("#movieTable > tbody").empty();

    for (var i = 0; i < results.length; i++) {
        $("#movieTable > tbody").append(
            "<tr>" +
            "<td> <a href='#' onClick='PressMovieName(" +
            results[i]["id"] +
            ")'>" +
            results[i]["title"] +
            "</a> " +
            "</td>" +
            "</tr>"
        );
    }
};

const languageNames = new Intl.DisplayNames(["en"], { type: "language" });

async function searchBtnClick() {
    // var selectedSearch = $("#selectMovies").find(":selected").val();
    var searchQuery = $("#searchQuery").val();

    var newUrl = "http://localhost/movies/?name=" + searchQuery;
    var response = await $.get(newUrl);
    var results = response.results;

    $("#movieTable > tbody").empty();

    for (var i = 0; i < results.length; i++) {
        $("#movieTable > tbody").append(
            "<tr>" +
            "<td> <a href='#' onClick='PressMovieName(" +
            results[i]["id"] +
            ")'>" +
            results[i]["title"] +
            "</a> " +
            "</td>" +
            "</tr>"
        );
    }

    $("#resultMovieSection").css("display", "block");
    $("#resultPersonSection").css("display", "none");
}

//     if(selectedSearch =="secMovieId"){
//         var newUrl = "http://localhost/movies/?name=" + searchQuery;
//         var response = await $.get(newUrl);
//         var results = response.results;

//         $("#movieTable > tbody").empty();

//         for(var i = 0; i<results.length; i++){
//             $("#movieTable > tbody").append(
//                 "<tr>"+
//                 "<td> <a href='#' onClick='PressMovieName("+ results[i]["id"] +")'>"+results[i]["title"]+"</a> "+ "</td>" +
//                 "</tr>"
//             );
//         }

//         $("#resultMovieSection").css("display", "block");
//         $("#resultPersonSection").css("display", "none");

//         return;
//     }

//     if(selectedSearch == "secMovieYearId"){
//         if(!searchQuery.includes(",")){
//             alert("Wrong format used - divide search parameters with comma");
//             return;
//         }

//         var splitQuery = searchQuery.split(",");

//         if(splitQuery.length > 2){
//             alert("Wrong format used - too many commas in query");
//             return;
//         }

//         var movieName = splitQuery[0];
//         var year = splitQuery[1];
//         var newUrl = startSearchMovieUrl + apiKey + "&query=" + movieName + "&year=" + year;
//         var response = await $.get(newUrl);
//         var results = response.results;

//         $("#movieTable > tbody").empty();

//         for(var i = 0; i<results.length; i++){
//             var releaseYear = results[i]["release_date"].split("-")[0]
//             var language = languageNames.of(results[i]["original_language"]);

//             $("#movieTable > tbody").append(
//                 "<tr>"+
//                 "<td> <a href='#' onClick='PressMovieName("+ results[i]["id"] +")'>"+results[i]["title"]+"</a> "+ "</td>" +
//                 "<td>"+releaseYear+"</td>" +
//                 "<td>"+language+"</td>" +
//                 "</tr>"
//             );
//         }

//         $("#resultMovieSection").css("display", "block");
//         $("#resultPersonSection").css("display", "none");

//         return;
//     }

//     if(selectedSearch == "secPersonId"){
//         var newUrl = startSearchPeopleUrl + apiKey + "&query=" + searchQuery;
//         var response = await $.get(newUrl);
//         var results = response.results;

//         for(var i = 0; i<results.length; i++){
//             $("#personTable > tbody").append(
//                 "<tr>"+
//                 "<td> <a href='#' onClick='PressPersonName("+ results[i]["id"] + ")'>"+results[i]["name"]+"</a> "+ "</td>" +
//                 "<td>"+results[i]["known_for_department"]+"</td>" +
//                 "</tr>"
//             );
//         }
//     }

//     $("#resultPersonSection").css("display", "block");
//     $("#resultMovieSection").css("display", "none");
// }

async function PressMovieName(movieId) {
    var newUrl = "http://localhost/movies/" + movieId;
    var unparsedResponse = await $.get(newUrl);
    var response = unparsedResponse.results[0];

    $("#movieTitle").text(response.title);
    $("#movieReleaseDate").text(response.released);
    $("#movieRuntime").text(response.runtime + " minutes");
    $("#movieOverview").text(response.overview);

    $("#resultMovieSection").css("display", "none");
    $("#searchSection").css("display", "none");
    $("#movieInfoSection").css("display", "block");
}

// async function PressPersonName(personId){
//     var newUrl = startGetPersonUrl + "/" + personId + apiKey;
//     var response = await $.get(newUrl);

//     $("#personName").text(response["name"]);
//     $("#personMainActivity").text(response["known_for_department"]);
//     $("#personBirthday").text(response["birthday"]);
//     $("#personBirthplace").text(response["place_of_birth"]);
//     $("#personBiography").text(response["biography"]);

//     if(response["deathday"] != null){
//         $("#personDeathDay").text(response["deathday"]);
//     }

//     if(response["homepage"] != null){
//         $("#personWebsite").html('<a href="' +response["homepage"] + '">Website</a>');
//     }

//     var search = "https://api.themoviedb.org/3/search/multi" + apiKey + "&query=" + response["name"];

//     var knownForResponse = await $.get(search);

//     var person = knownForResponse.results.find(x => x.media_type == "person")

//     var movies = person["known_for"];

//     for(var i = 0; i<movies.length; i++){
//         var releaseDate = movies[i]["release_date"];
//         if(releaseDate == undefined){
//             releaseDate = movies[i].first_air_date;
//         }

//         var title = movies[i].title;
//         if(title == undefined){
//             title = movies[i].name;
//         }

//         var releaseYear = releaseDate.split("-")[0];

//         $("#personMovies > table > tbody").append(
//             "<tr>"+
//             "<td>"+title+"</td>" +
//             "<td>"+releaseYear+"</td>" +
//             "<td>"+person["known_for_department"]+"</td>" +
//             "</tr>"
//         );
//     }

//     $("#resultPersonSection").css("display", "none");
//     $("#searchSection").css("display", "none");
//     $("#personInfoSection").css("display", "block");
// }

// function ShowFrontPagePerson(){
//     $("#personMovies > table > tbody").empty();
//     $("#personInfoSection").css("display", "none");
//     $("#resultPersonSection").css("display", "block");
//     $("#searchSection").css("display", "block");
// }

function ShowFrontPageMovie() {
    $("#movieActors > table > tbody").empty();
    $("#movieInfoSection").css("display", "none");
    $("#resultMovieSection").css("display", "block");
    $("#searchSection").css("display", "block");
}
