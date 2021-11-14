<?php
    require_once("DatabaseConnector.php");

    define('ERROR', 'error');

    Class Users extends DatabaseConnector{

        function statusCode($status) {
            $statusInfo['status'] = $status;
            return $statusInfo;
        }

        public function addUser($username, $email, $password){
            $con = (new DatabaseConnector())->getConnection();

            if ($con) {
                $sql = "INSERT INTO films.user (username, email, password) VALUES (?, ?, ?)";
                $stmt= $con->prepare($sql);
                $stmt->execute([$username, $email, $password]);
                $stmt = null;
            }else {
                return $this->statusCode(ERROR);
            } 
        }

        
    }
