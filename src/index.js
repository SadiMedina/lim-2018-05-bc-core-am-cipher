
let offset = document.getElementById("desplazamiento");
let string = document.getElementById("text-trabajo");
let clear  = document.getElementById("borrar");

document.getElementById("codificar").addEventListener("click",function(){              
document.getElementById("text-resultado").value = window.cipher.encode(offset.value,string.value);
})

document.getElementById("decodificar").addEventListener("click",function(){
document.getElementById("text-resultado").value = window.cipher.decode(offset.value,string.value);
})

document.getElementById("borrar").addEventListener("click",function(){
document.getElementById("text-trabajo").value = " ";
})


