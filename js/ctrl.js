"use strict";
var forma = document.getElementById("forma");
var salidasD = document.getElementById("salidaDiv");


function procesa(){
var A = forma["a"].value;
        var B = forma["b"].value;
        var div;
try{
if (A === "0"){
throw new Error ("A no puede ser 0 ingrese un nuevo número");
}
if(A.length === 0 ){
        throw new Error ("Ingrese A");
       }
        if(A.value <= 0){
            throw new Error ("No puede ser menor a 0. Ingrese nuevamente");
         
         }
if (B === "0"){
throw new Error ("B No puede ser 0 ingrese un nuevo número");
        }
         if(B.length === 0 ){
        throw new Error ("Ingrese B");
         }
         
         if(B <= 0){
          throw new Error ("B no puede ser menor a 0. Ingrese nuevamente");
         }
         div = A / B;
         
         }
         catch(e){
             div=e.message;
            
         }
         finally{
             salidasD.textContent= div+" ";
         }
}
