window.onload = async function () {
    const newUrl = "http://localhost/movies/";
    const response = await $.get(newUrl);
    const results = response.results;

    $("#movieTable > tbody").empty();

    var bodyStr = "";

    for (var i = 0; i < results.length; i++) {
        bodyStr +=
            "<tr>" +
            "<td> <a href='#' onClick='PressMovieName(" + results[i]["id"] + ")'>" + results[i]["title"] + "</a> " + "</td>" +
            "<td> <a href='#' onClick='UpdateMovie(" + results[i]["id"] + ")'>" + "Update" + "</a> " + "</td>" +
            "</tr>";
    }

    $("#movieTable > tbody").append(bodyStr);
};

async function SaveMovieInfo(movieId){
    const newUrl = "http://localhost/movies";

    const requestData = {
        
    };

    const response = await $.post(newUrl, requestData);
}

async function searchBtnClick() {
    const searchQuery = $("#searchQuery").val();

    const newUrl = "http://localhost/movies/?name=" + searchQuery;
    const response = await $.get(newUrl);
    const results = response.results;

    $("#movieTable > tbody").empty();

    var bodyStr = "";

    for (var i = 0; i < results.length; i++) {
        bodyStr +=
            "<tr>" +
            "<td> <a href='#' onClick='PressMovieName(" +
            results[i]["id"] +
            ")'>" +
            results[i]["title"] +
            "</a> " +
            "</td>" +
            "</tr>";
    }

    $("#movieTable > tbody").append(bodyStr);

    $("#resultMovieSection").css("display", "block");
    $("#resultPersonSection").css("display", "none");
}

async function UpdateMovie(movieId) {
    const newUrl = "http://localhost/movies/" + movieId;
    const unparsedResponse = await $.get(newUrl);
    const response = unparsedResponse.results[0];

    $("#movieTitle").val(response.title);
    $("#movieTitle").prop("readonly", false);
    $("#movieReleaseDate").val(response.released);
    $("#movieReleaseDate").prop("readonly", false);
    $("#movieRuntime").val(response.runtime + " minutes");
    $("#movieRuntime").prop("readonly", false);
    $("#movieOverview").val(response.overview);
    $("#movieOverview").prop("readonly", false);

    $("#saveBtn").css("display", "inline-block");

    $("#resultMovieSection").css("display", "none");
    $("#searchSection").css("display", "none");
    $("#movieInfoSection").css("display", "block");
}

async function PressMovieName(movieId) {
    const newUrl = "http://localhost/movies/" + movieId;
    const unparsedResponse = await $.get(newUrl);
    const response = unparsedResponse.results[0];

    $("#saveBtn").css("display", "hidden");

    $("#movieTitle").val(response.title);
    $("#movieTitle").prop("readonly", true);
    $("#movieReleaseDate").val(response.released);
    $("#movieReleaseDate").prop("readonly", true);
    $("#movieRuntime").val(response.runtime + " minutes");
    $("#movieRuntime").prop("readonly", true);
    $("#movieOverview").val(response.overview);
    $("#movieOverview").prop("readonly", true);

    $("#resultMovieSection").css("display", "none");
    $("#searchSection").css("display", "none");
    $("#movieInfoSection").css("display", "block");
}

function ShowFrontPageMovie() {
    $("#movieActors > table > tbody").empty();
    $("#movieInfoSection").css("display", "none");
    $("#resultMovieSection").css("display", "block");
    $("#searchSection").css("display", "block");
}
