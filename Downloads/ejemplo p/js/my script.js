var array;
function cargarpagina(){
array=[
    {nombre:"paula",codigo:"192092",doc:"123456",prog:"ing"},
    {nombre:"paula",codigo:"192092",doc:"123456",prog:"ing"},
    {nombre:"paula",codigo:"192092",doc:"123456",prog:"ing"}
]
console.log(array);
}
function calcular(){
 let nombre=$("#nombre").val();
   for(let i=0;i<array.length;i++){
       if (nombre==array[i].nombre){
        console.log("EL NOMBRE FUE ENCONTRADO Y ES:" +nombre);
        break;
       }
       else{
           console.log("EL NOMBRE NO FUE ENCONTRADO"); 
       }
   }
}