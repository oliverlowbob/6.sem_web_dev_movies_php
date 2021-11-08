<?php
    require_once("DatabaseConnector.php");

    define('ERROR', 'error');

    Class Movies extends DatabaseConnector{

        function statusCode($status) {
            $statusInfo['status'] = $status;
            return $statusInfo;
        }

        public function updateMovie($id, $title, $overview, $released, $runtime){
            $con = (new DatabaseConnector())->getConnection();

            if ($con) {
                $sql = "UPDATE films.movies SET title=?, overview=?, released=?, runtime=? WHERE id=?";
                $stmt= $con->prepare($sql);
                $stmt->execute([$title, $overview, $released, $runtime, $id]);
                $stmt = null;
            }else {
                return $this->statusCode(ERROR);
            } 
        }

        public function getMovie($movieId){
            $con = (new DatabaseConnector())->getConnection();

            if ($con) {
                $results = array();

                $cQuery = "SELECT * FROM films.movies WHERE id = " . $movieId . ";";

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
