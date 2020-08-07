<?php
function search($text){
   include_once('db.php');
	// let's filter the data that comes in
	$text = htmlspecialchars($text);
	$get_name = $db->prepare("SELECT tags FROM searchtool WHERE tags LIKE concat('%', :tags, '%')");
	$get_name -> execute(array('tags' => $text));
	// show the users on the page
   while($tag_name = $get_name->fetch(PDO::FETCH_ASSOC)){
      $STH = $db->query('SELECT name, link, tags from searchtool WHERE tags = "'.$tag_name['tags'].'"');
      # выбираем режим выборки
      $STH->setFetchMode(PDO::FETCH_OBJ);
      while($row = $STH->fetch()) {
   		echo
         '<div class="search_grid_container">'.
            '<div class="left_column_search_output">'.
               '<br />'.
               $row->name.
            '</div>'.
            '<a href='.'"'.$row->link.'"'.'>'.
               $row->link.
            '</a>'.
            '<div class="description_unimportant">'.
               $row->tags.
            '</div>'.
         '</div>';
   	}
   }
}

search($_GET['txt']);
?>
