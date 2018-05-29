
/*Función Encriptar: Te permite ingresar un Texto en Mayusculas, Minuscula ... */
function encriptar () {
    let textoIngresado = document.getElementById("text-trabajo").value;
    let posicion = parseInt(document.getElementById("desplazamiento").value);
    let palabraCifrada = "";
    
    for (i = 0; i < textoIngresado.length; i++){
      let CodigoAscii = textoIngresado.charCodeAt(i);
      if(CodigoAscii >= 65 && CodigoAscii <=90 ){
        palabraCifrada += String.fromCharCode((CodigoAscii-65+posicion)%26+65);
        document.getElementById("text-resultado").value= palabraCifrada;}
      
      else if(CodigoAscii >= 97 && CodigoAscii <=122 ){
        palabraCifrada += String.fromCharCode((CodigoAscii-97+posicion)%26+97);
        document.getElementById("text-resultado").value= palabraCifrada;}
      
      else{
        palabraCifrada += String.fromCharCode(CodigoAscii);
        document.getElementById("text-resultado").value= palabraCifrada;} 
      }
      }

/*Función Desencriptar*/
function desencriptar () {
    let textoDescifrado = document.getElementById("text-trabajo").value;
    let posicion = parseInt(document.getElementById("desplazamiento").value);
    let palabraDescifrada = "";
    
    for (i = 0; i < textoDescifrado.length; i++){
      let CodigoAscii = textoDescifrado.charCodeAt(i);
      if(CodigoAscii >= 65 && CodigoAscii <=90 ){
        palabraDescifrada += String.fromCharCode((CodigoAscii-65-posicion)%26);
        document.getElementById("text-resultado").value= palabraDescifrada;}
      
      else if(CodigoAscii >= 97 && CodigoAscii <=122 ){
        palabraDescifrada += String.fromCharCode((CodigoAscii-97-posicion)%26+97);
        document.getElementById("text-resultado").value= palabraDescifrada;}
      
      else{
        palabraDescifrada += String.fromCharCode(CodigoAscii);
        document.getElementById("text-resultado").value= palabraDescifrada;} 
      }
      }

   

/*Funcion borrar*/
 function borrar(){
  document.getElementById("text-trabajo").value="";
}
