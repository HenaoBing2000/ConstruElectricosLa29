<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $ingresarFechaActual=$_POST["fechaActual"];
    $nombreUsuario=$_POST["nombre"];
    $contraseñaUsuario=$_POST["contraseña"];
    $cedulaUsuario=$_POST["cedula"];
    $principal=$_POST["principal"];
    
    
    

    echo "Nombre: $nombreUsuario <br>";
    echo "Cedula: $cedulaUsuario <br>";
    echo "Tipo usuario: $principal<br>";
    

    exit();
}
    echo $_SERVER
?>