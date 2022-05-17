<?php

include 'conexion.php';
$nombre = strip_tags($_POST['nombre']);
$apaterno = strip_tags($_POST['apaterno']);
$amaterno = strip_tags($_POST['amaterno']);
$cuidad = strip_tags($_POST['ciudad']);


if (
preg_match('/[A-Za-z áéíóúñ]{2,50}/i', $nombre) &&
preg_match('/[A-Za-z áéíóúñ]{2,50}/i', $apaterno) &&
preg_match('/[A-Za-z áéíóúñ]{2,50}/i', $amaterno) &&
preg_match('/[A-Za-z áéíóúñ]{2,50}/i', $ciudad)
){
	$insercion  = "insert into usuario(nombre, apaterno, amaterno, ciudad) values('$nombre', '$apaterno', '$amaterno', '$ciudad')";
	$query = pg_query($con, $insercion);
	if($query){
		echo "Los datos se guerdaron exitosamente";
	}else{
		echo "Algo salió mal, intentelo de nuevo";
	}
	pg_close($con);
}
else {
	echo "Uno o más de los datos ingresados no cumplen con el formato adecuado";
}

?>
