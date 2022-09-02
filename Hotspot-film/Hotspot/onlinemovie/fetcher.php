<?php
include 'dbh.php';


  $im = "SELECT * FROM movies ORDER BY name ASC" ;
  $records = mysqli_query($conn,$im);

  start:
  $i=0;

  echo"<div class='row'>";
    while($result = mysqli_fetch_assoc($records)){
      echo"<form action='movie.php' method='POST'>";
      echo"<div class='col'>";
      echo "<img src='uploads/".$result['imgpath']."' height='250' width='250' style='margin-top: 30px;margin-left:70px;margin-right:70px;' />";
        echo"<div class='noob'>";
          echo "<input type='submit' name='submit' class='btn btn-outline-info' style='display:block;width:300px;padding-bottom:20px;margin-bottom:50px;margin-left:40px;margin-right:50px;' value='".ucwords($result['name'])."'/>";
        echo"</div>";
      echo"</div>";
      echo"</form>";

      if ($i==5) {

        echo"</div>";

        goto start;
      }
      $i++;
    }
    echo"</div>";
    ?>
