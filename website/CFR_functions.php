<? php
function Navagation(){
	$nav = 'data/navagation.txt'; //Path to your *.txt file 
	echo file_get_contents( $nav );
}

?>