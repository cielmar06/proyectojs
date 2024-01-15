function saludar (){ 
    let nombre= prompt ("ingresa tu nombre")
    alert("bienvenido a M de moda " + nombre)

    
}
saludar()
 
let mayorDeEdad= prompt ("¿eres mayor de edad? si , no ")

switch ( mayorDeEdad) {
    case "si":
    alert( "Apto para compra")

        break;
        case "no" :
        alert("No apto para compra")
        break
}
let edad = 18
if (edad>=18){ alert("mayor de edad")}
else 
{ alert
    ("no es mayor de edad")}

const coloresDeRemeras=["amarillo", "verde", "azul","negro" ]
console.log(coloresDeRemeras.length)
console.table(coloresDeRemeras)
console.log (coloresDeRemeras.join ("-") )

const CopiacoloresDeRemeras = coloresDeRemeras.slice(0,3)
console.log (CopiacoloresDeRemeras)


