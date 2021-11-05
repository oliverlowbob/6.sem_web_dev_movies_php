<?php 
    require_once("src/Movies.php");

    $movies = new Movies();

    $url = strtok($_SERVER['REQUEST_URI'], "?");    // GET parameters are removed
    // If there is a trailing slash, it is removed, so that it is not taken into account by the explode function
    if (substr($url, strlen($url) - 1) == '/') {
        $url = substr($url, 0, strlen($url) - 1);
    }
    // Everything up to the folder where this file exists is removed.
    // This allows the API to be deployed to any directory in the server
    $url = substr($url, strpos($url, basename(__DIR__)));

    $urlPieces = explode('/', urldecode($url));

    header('Content-Type: application/json');
    header('Accept-version: v1');

    $requestMethod = $_SERVER['REQUEST_METHOD'];

    switch($requestMethod){
        case "GET":
            if (isset($_GET['name'])) {                   // Search movie by name
                echo json_encode($movies->searchMovies($_GET['name']));
            } else {                                            // Get all movies
                echo json_encode($movies->getAllMovies());
            }
            break;
            

        }
?>