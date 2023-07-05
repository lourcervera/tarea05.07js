/*En un establecimiento de juegos existen cuatro salas: 
Arcade, Consolas, Rol, Realidad Virtual. 
Si un usuario paga 4 créditos puede acceder a todas,
si paga 3 solo podrá acceder a las tres primeras, 
si paga 2 a las dos primeras y si paga 1 solo a la primera sala.*/

let cantidadDeCreditos= parseInt(prompt( "ingrese cuantos creditos desea comprar, recuerde que solo puede comprar hasta 4"))

switch (cantidadDeCreditos) {
    case 1:
        console.log("puede acceder solo a sala de Arcade")
        
        break;
    case 2:
        console.log("puede acceder solo a las salas de Arcade y Consolas")

        break;
    case 3: 
        console.log( "puede acceder solo a las salas de Arcade, Consolas y Rol")
        
        break;
    case 4:
        console.log(" puede acceder a todas las salas: Arcade,Consolas, Rol y Realidad virtual")    


    default: alert("recuerde que solo puede comprar entre 1 y 4 creditos")
        break;
}