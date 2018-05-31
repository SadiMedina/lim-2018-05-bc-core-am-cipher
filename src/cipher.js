window.cipher = {
  encode:(offset, string)=>{
    let posicion = parseInt(offset); //convertiendo en entero el desplazamiento
    let palabraCifrada= " "; //para concatenar
    for(let i=0;i<string.length;i++){
       let codigoAscii=string.charCodeAt(i);
       if(codigoAscii >= 65 && codigoAscii <=90){ 
          palabraCifrada+=String.fromCharCode((codigoAscii-65+posicion)%26+65);}
       else if(codigoAscii >=97 && codigoAscii <=122){
              palabraCifrada+=String.fromCharCode((codigoAscii-97+posicion)%26+97);}
       else {palabraCifrada+=String.fromCharCode(codigoAscii);}
          }
          return palabraCifrada;
          },

  decode:(offset, string)=>{
     let posicion = parseInt(offset);
     let palabraDescifrada = " " ; 
     for(let i=0;i<string.length;i++){
        let codigoAscii=string.charCodeAt(i);
        if(codigoAscii >= 65 && codigoAscii <=90){
          palabraDescifrada+=String.fromCharCode((codigoAscii-90-posicion)%26+90);}
        else if(codigoAscii >=97 && codigoAscii<=122){
                palabraDescifrada+=String.fromCharCode((codigoAscii-122-posicion)%26+122);}
        else{palabraDescifrada+=String.fromCharCode(codigoAscii)}
         }
         return palabraDescifrada;
         },
         
    }
