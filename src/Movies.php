<?php
    require_once("DatabaseConnector.php");

    define('ERROR', 'error');

    Class Movies extends DatabaseConnector{

        function statusCode($status) {
            $statusInfo['status'] = $status;
            return $statusInfo;
        }

        public function getAllMovies(){
            $con = (new DatabaseConnector())->getConnection();

            if ($con) {
                $results = array();

                $cQuery = "SELECT * FROM films.movies";

                $stmt = $con->query($cQuery);      

                $results['_total'] = $stmt->rowCount();
                
                $movies = array();
                while($row = $stmt->fetch()) {
                    $result['id'] = $row['id'];
                    $result['title'] = $row['title'];
                    $result['overview'] = $row['overview'];
                    $result['released'] = $row['released'];
                    $result['runtime'] = $row['runtime'];
                    $movies[] = $result;
                }
                
                $results['results'] = $movies;

                $stmt = null;
                
                return($results);

            } else {
                return $this->statusCode(ERROR);
            } 
        }

        public function searchMovies($searchText){
            $con = (new DatabaseConnector())->getConnection();

            if ($con) {
                $results = array();

                $cQuery = 'SELECT * FROM films.movies WHERE title LIKE "%' . $searchText . '%"';

                $stmt = $con->query($cQuery);      

                $results['_total'] = $stmt->rowCount();
                
                $movies = array();
                while($row = $stmt->fetch()) {
                    $result['id'] = $row['id'];
                    $result['title'] = $row['title'];
                    $result['overview'] = $row['overview'];
                    $result['released'] = $row['released'];
                    $result['runtime'] = $row['runtime'];
                    $movies[] = $result;
                }
                
                $results['results'] = $movies;

                $stmt = null;
                
                return($results);

            } else {
                return $this->statusCode(ERROR);
            } 
        }

    }
?>