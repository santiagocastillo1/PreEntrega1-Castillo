//Variables
// // let nombre; //declariacion => no numeros ni caracteres especiales salvo _ o $
// // nombre = "Santiago"; // asignacion
// // let apellido = "Castillo"; //inicializacion

// // const CLAVE = "oruga"; //las constantes siempre se incializan

// // // nombre=prompt("ingresa tu nombre")
// // // //alert(nombre)
// // // console.log(nombre2)

// // // let nombre2= prompt("ingresa tu nombre en la constante");
// // // console.log(nombre2);
// // // nombre2 = prompt ("ingresa tu nuevo nombre en la constante");
// // // console.log(nombre2);
// // // CONDICIONALES si (condicion) entonces {algo}
// // if(false) {
// //     // bloque de ejecucion
// //     console.log("hola mundo")
// // }

// // //operadores = asignacion == comparacion

// // if(CLAVE == "Oruga");


// // // let talle=100

// // // if(talle >=100){
// // //     console.log("Talle XL");
// // // } else if (talle >=80) {
// // //     console.log("Talle L");
// // // }else if (talle>= 60){
// // //     console.log("Talle M");
// // // }else if(talle>= 40){
// // //     console.log("Talle S");
// // // } else {
// // //     console.log("Talle XS");
// // // }

// // // let num= prompt("Ingresa tu edad")

// // // if(num === 18){
// // //     console.log("podes entrar");
// // // }

// // // if (isNaN(num)) {
// // //     console.log(num);
// // // }

// // // let valorBooleano= "5" === 5

// // // if(valorBooleano){
// // //     console.log("Hola tarola");
// // // }

// // let usuarioGuardado = "Bart";
// // let passGuardado = "elbarto";

// // let ingresoUsuario = prompt("Ingresa tu usuario");

// // // //if anidado
// // // if(usuarioGuardado === ingresoUsuario){
// // let ingresoPass = prompt("Ingresa tu password");
// // //     if(passGuardado===ingresoPass){
// // //         console.log("Ya podes ingresar");
// // //     }else {
// // //         console.log("contraseña incorrecta");
// // //     }
// // // }else{
// // //     console.log("Usuario no encontrado")
// // // }


// // // modulo division %
// // // if(10 % 2 == 0){
// // //     console.log("hola");
// // // }
// // //Operadores logicos && comparacion1 && comparacion2 devuelve true solo si las dos condiciones o comparaciones son true

// // // if(10 == 10 $$ "Hola"=="hola"){ //false
// // // //     console.log("mensaje");
// // // // }
// // // let validacionUser = usuarioGuardado == ingresoUsuario;
// // // let validacionPass = passGuardado ==ingresoPass;
// // // let validacionIngreso = validacionUser && validacionPass;

// // // if(validacionIngreso){
// // //     console.log("Podes ingresar")
// // // }else{
// // //     console.log("credeciales incorrectas");
// // // }

// // // op OR || => comp1 || comp2, true || true, true || false, false || true ##### false | false => false

// // // if (ingresoUsuario === "Bart" ||
// // //      ingresoUsuario == "bart" || 
// // //      ingresoUsuario ==="BART"
// // //     ){
// // //     console.log("Hola Bart");
// // // }


// // //validacion de votantes

// // let edadObligatoria = 18;
// // let edadOptativa = 16;
// // let edadLimite = 69;
// // let edadUsuario = parserInt(prompt("Ingresa tu edad"))

// // if(edadUsuario>= edadObligatoria && edadUsuario <= edadLimite){
// //     console.log("Esta obligada a votar");
// //     }else if (edadUsuario >= edadOptativa || edadUsuario > edadLimite) {
// //         console.log("Podes votar si queres");
// //     } else{
// //         console.log("No podes votar");
// //     }
// //     //Pasar las comparaciones a variables Booleanas




// // console.log("Fin del programa")
//for (desde; hasta; actualizacion){}

// for (let i = 0; i <=100; i = i + 1) {
//     console.log(i);
// }

// for (let i=10 ; i >=0; i = i-1){
//     console.log("Tiempo restante para el despegue: " + i);
// }
// i++ es igual a i=i+1
// for (let i =1 ; i <=3; i++){
//     alert("Ya llegamos a la india");
//     alert("No");
// }
// // alert ("A ver... Ya!");

// let ingreso = prompt("Ingresa un Numero")
// let limite = prompt ("Ingresa un numero hasta donde queres el resultado de la tabla");

// for (let i = -10; i <= limite; i++){

//     let result= ingreso * i;
//     console.log("El resultado de la multiplicacion" + ingreso + " x " + i + " es: " + result);
// }

//break 

// while
// let i= 0
// while(i < 10) {
//     console.log(i);

//     // condicion de salida
//     i = i + 1;//i++
// }

// let ingreso= prompt ("Ingresa un producto. para salir ingresa 0")

// while (ingreso !=="0") {
//     console.log("El producto es "+ ingreso);
//     //validar que el campo no este vacio

//     //condicion de salida del bucle
//     ingreso = prompt ("Ingresa OTRO producto. Para salir ingresa 0 ")
// }

//do while

// let ingreso = "";
// do {
//     ingreso = prompt ("Ingresa un producto. Para salir ingresa 0");
//     console.log("El prodicto es " + ingreso);
// } while (ingreso !== "0");

// console.log("Compra finalizada");

// El cajero automatico
// debemos generar un script para la operacion de un cajero automatico
/* el mismo tiene que:
1_ mostrar un mensaje de bienvenida
2_ permitir hasta 3 intentos de ingreso con el pin del cliente
2a_ si ingresa correctamente dar mensaje de bienvenida
2b_ terminados los intentos informar al cliente que se comunique con el banco
3_ una vez ingresa mostrar las siguientes opciones en pantalla:
a- saldo
b- retiro
c- deposito
d- salir
4_ al finalizar mostrar mensaje
// */

// alert("Bienvenido al banco");
//  //Primer pantalla del cajero
//  let pinGuardado= "5701";
//  let ingresar= false

//  for (let i = 2; i >=0 ; i = i - 1) {
//      let ingreso=prompt("Ingresa tu PIN");
//      if (pinGuardado === ingreso) {
//          alert("Bienvenido,Ya podes operar");
//  ingresar=true
//          break;
//      }else{
//          alert("Error ingrese nuevamente");
//      }
//  }

//  console.log(ingresar);
//  //segunda pantalla
//  if (ingresar){} //true o un false
//     let saldo = 20000
//     let opcion = prompt(
//          "Elegí una opción: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
//        );

//       while (opcion != "x") 
//       if (opcion=="1") {
//              alert("Tu saldo es :" + saldo)
//          }else if (opcion =="2") {
//              let retiro= prompt("Ingresa el monto a retirar")
//              if (retiro > saldo) {
//                  alert("Saldo insuficiente")
//             }else{
//                  saldo = saldo - + retiro; //convertir a numero agregando el +
//                  alert("retiro exitoso tu saldo es " + saldo);
//              }
//          }else if (opcion =="3") {
//              let deposito= prompt("Ingresa el monto a depositar");
//              //validar que el deposito no sea negativo
//              saldo = saldo + +deposito;
//          }else{
//              alert("Opcion no valida");
         




        
//          //condicion de salida
//          opcion = prompt(
//          "Elegí una opción: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
//          );
//         } else {
//      alert("Se te acabaron los intentos");}
 
//  let ingreso = prompt(
//      "Selecciona una bebida \n 1-Café \n 2- Té \n 3- Agua caliente"
//    ); 
//    if (ingreso == "1" || ingreso === "UNO") {
//      alert("Seleccionaste Café");
//    } else if (ingreso == "2") {
//      alert("Seleccionaste Té");
//    } else if (ingreso == "3") {
//      alert("Seleccionaste Agua caliente");
//    } else {
//      alert("No seleccionaste una bebida");
//    }
//  switch (ingreso) {
//      case "1":
//      case "UNO"
//  //ESTO NO ES TAN COMUN
//          :alert("Seleccionaste Café");
//          break;
//      case "2":
//          alert("Seleccionaste Té");
//      case "3":
//          alert ("Seleccionaste Agua Caliente");
//      default:
//          alert("No seleccionaste una bebida");
//          break;
//  }
//FUNCION => declaracion 
// function saludar(params) {
//     //bloque de ejecucion
//     let nombreIngresado= prompt ("Ingresa tu nombre")
//     console.log("Hola" + nombreIngresado);
// }

// // llamado

// // saludar()

// function saludarConParametros(taco) {
//     console.log("Hola" + taco);//julian, pepe, santi
// }
// function saludarConMomento(momento, nombre) {
//     console.log("Buenos/as" + momento + " " + nombre );
// }
// // let nombre= prompt ("Ingresa tu nombre")
// let momento= prompt("Ingresa el momento del dia")
// // saludarConParametros("Julian")
// // saludarConParametros("pepe")
// // saludarConParametros("santi")
// // saludarConParametros(1)
// // saludarConParametros(nombre)

// saludarConMomento(momento, nombre)

// let resultado =0;
// function sumar(n1, n2) {
//     resultado = n1+ n2
// }
// console.log(resultado);

// sumar(3,5)
// console.log(resultado);

// //devolver un valor o proceso
// function sumar(n1,n2) {
//      return n1 + n2;
// }
// let resultado;
// console.log(resultado);
// resultado = sumar(2,4);
// console.log(resultado);
// let resultado2= sumar (4,10)
// console.log(resultado2);

// console.log(sumar(resultado, resultado2));

// //SCOPE o Ambito
// let variableGlobal= "Soy una variable global"
// console.log(variableGlobal);


// if (true) {
//     let variableGlobal= "Soy la variable local y solo vivo dentro del if";
//     console.log(variableGlobal);
// }
// console.log(variableGlobal);

// let res =0

// function sumar(n1,n2) {
//     let res = n1 + n2;
//     return res;
// }
// function restar(n1,n2) {
//     let res =n1 - n2;
//     return res;
// }
//  let resSuma=sumar(99,4)
//  console.log(resSuma);
// restar(99,4)
// console.log(res);

// let n1 = prompt ("Ingrese el primer numero");
// let n2 = prompt ("Ingrese el segundo numero")
// // n1 = parseFloat (n1);
// // n2 = parseFloat (n2);
// // function suma(a, b) {
// //     return a + b;
// // }
// //funcion anonima
// function resta(a,b) {
//     return a + b;
// }
// //arrow function ()=>
//     const suma = (a,b)=> {
//      return a + b;
//     };
// let resultado = suma (parseFloat (n1), +n2);
// console.log(resultado);

//objetos
//objeto literal
// const contacto1 = {
//     nombre: "kevin",
//     edad: 20,
//     tel:"1234567"
// };

// const contacto2 ={
//     nombre: "Julieta",
//     tel: "12349878",
//     email: "juli@gmail.com"
// };
// console.log(contacto1);
// // console.log(contacto1.nombre);
// // console.log(contacto1.edad);
// // console.log(contacto1.email);
// // console.log(contacto1["edad"]);


// console.log(contacto2);
// // console.log(contacto2.nombre);
// // console.log(contacto2.edad);
// // console.log(contacto2.email);
// // console.log(contacto2["tel"]);
// // console.log(contacto2["direccion"]);

// contacto1.email = "kevin@gmail.com";
// contacto1.tel = "97413933";
// console.log(contacto1);
// console.log(contacto1.tel);

// // function constructora

// function Personaje (nombre,edad,avatar) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.avatar = avatar;
// }

// const personaje1= new Personaje("Bart",10,"img.jpg")

// console.log(personaje1);


// alert("Bienvenido al banco");

// // Primer pantalla del cajero
// let pinGuardado = "5701";
// let ingresar = false;

// for (let i = 2; i >= 0; i--) {
//     let ingreso = prompt("Ingresa tu PIN");
//     if (pinGuardado === ingreso) {
//         alert("Bienvenido, ya puedes operar");
//         ingresar = true;
//         break;
//     } else {
//         alert("Error, ingresa nuevamente. Te quedan " + i + " intentos.");
//     }
// }

// console.log(ingresar);

// // Segunda pantalla
// if (ingresar) {
//     let saldo = 20000;
//     let opcion;

//     do {
//         opcion = prompt(
//             "Elegí una opción: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
//         );

//         switch (opcion) {
//             case "1":
//                 alert("Tu saldo es: " + saldo);
//                 break;
//             case "2":
//                 let retiro = parseFloat(prompt("Ingresa el monto a retirar"));
//                 if (retiro > saldo) {
//                     alert("Saldo insuficiente");
//                 } else {
//                     saldo -= retiro;
//                     alert("Retiro exitoso. Tu saldo es " + saldo);
//                 }
//                 break;
//             case "3":
//                 let deposito = parseFloat(prompt("Ingresa el monto a depositar"));
//                 if (deposito > 0) {
//                     saldo += deposito;
//                     alert("Depósito exitoso. Tu saldo es " + saldo);
//                 } else {
//                     alert("Monto no válido para depósito");
//                 }
//                 break;
//             case "X":
//             case "x":
//                 alert("Finalizando operación. Gracias por usar el cajero.");
//                 break;
//             default:
//                 alert("Opción no válida");
//                 break;
//         }
//     } while (opcion !== "X" && opcion !== "x");
// } else {
//     alert("Se te acabaron los intentos");
// }

// // Opciones de bebida 
// let ingresoBebida = prompt(
//     "Selecciona una bebida \n 1 - Café \n 2 - Té \n 3 - Agua caliente"
// );
// switch (ingresoBebida) {
//     case "1":
//     case "UNO":
//         alert("Seleccionaste Café");
//         break;
//     case "2":
//         alert("Seleccionaste Té");
//         break;
//     case "3":
//         alert("Seleccionaste Agua caliente");
//         break;
//     default:
//         alert("No seleccionaste una bebida");
//         break;
// }


// function sumarRango(inicio, fin) {
//     let total = 0;
//     for (let i = inicio; i <= fin; i++){
//         total= total + i;
//     }
//     return total;
// }



// // let total = 0;

// // for (let i = 0; i <= 10; i++) {
// //     total = total + i;
// //     console.log("Valor de total en la vuelta" + i +"="+ total);
    
    
// // }


// //  console.log(sumarRango(1, 10));
// //  console.log(sumarRango(2, 210));
// //  console.log(sumarRango(-10, 10));
// //  console.log(0, 1);
 

// //  function mayorQue(n) {
// //     return  (m)=> m > n
// //  }
// //  const mayorQueDiez = mayorQue(10) // (m)=> m > 10

// //  console.log(mayorQueDiez);
 
// //  console.log(mayorQueDiez(8)); //(8) => 8 > 10 =false
 

// //  function asignarOperacion(operacion) {
// //     switch (operacion) {
// //         case "+":
// //             return (n1, n2)=> n1 + n2;
// //             break;
// //         case "-":
// //             return (n1, n2)=> n1 - n2;
// //             break;

// //         default:
// //             return "Op no valida"
// //             break;
// //     }
//  //}

// //  const sumar = asignarOperacion("+")
// //  const restar = asignarOperacion ("-")

// //  console.log(sumar(12,4));
// //  console.log(restar(12,4));
 
 
//  // recibir una funcion
// //  const nums = [1, 3, 2, 5, 1, 3, 10];
// // function porCadaUno (arr,fn){
// //     for  (const element of arr) {
// //         fn(element)
// //     }
// // }

// // // porCadaUno(nums, console.log)
// // // porCadaUno(biblioteca,console.log)

// // const cuadruple= []
// // function porCuatro(n) {
// //     return cuadruple.push(n * 4)
// // }

// // // porCadaUno (nums, porCuatro) //v1

// // porCadaUno(nums, (el)=>{
// //     cuadruple.push(el * 4)
// // })
// // console.log(nums);


// // console.log(cuadruple);

// const servicios = [
//     { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
//     { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
//     { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
//     { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
//     { id: 5, nombre: "uñas", precio: 1300, img: "esculpidas.webp" },
//     { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
//     { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
//     { id: 8, nombre: "mascarillas", precio: 2300, img: "mascarilla.jpeg" },
//   ];

// const cliente ={
//     id:234,
//     nombre: "Santiago",
//     apellido: "Castillo",
//     direccion:" Primera junta 2265",
//     idPrestamo: (1, 3)
// };
// const cliente2 ={
//     id:235,
//     nombre: "Santiago",
//     apellido: "Castillo",
//     direccion:" Primera junta 2265",
//     idPrestamo: (2, 3)
// };

// const prestamo={
//     id:1,
//     monto:2000,
//     plazo:30,
//     interes:20,
//     idCliente:234
// };

// const prestamosActivos =[]
// const carteraCliente= []
// carteraCliente.push(cliente,cliente2)
// prestamosActivos.push(prestamo)
// console.log(prestamosActivos);
// console.log(carteraCliente);


// function buscarCliente(arr, id) {

//     //podre el id del prestamo
//     returnarr.find(el => el.id === id)
// }

// buscarCliente(carteraCliente,234)

// const clienteEncontrado = buscarCliente (carteraCliente, 234)

// console.log(clienteEncontrado);
// function buscarPrestamos(arr, id) {
//     return arr.filter(el=>el.id===id)
// }

// console.log(buscarPrestamos(prestamosActivos, 1));//dentro de la funcion buscarPrestamos (arr idCliente)


// function buscarPorNombre(arr, filtro){
//     //return arr.find(el=> el.nombre === filtro)
//     return arr.find(el=> el.nombre.includes(filtro.toLowerCase()))
// }


// const manicura= buscarPorNombre(servicios," MANICURA")
// console.log(manicura);


// //armar una funcion que compare por precio < o >
// //   const price = parseInt(prompt("ingrese un numero"));
// //   function filtrarBarato(arr, price){
// //     // console.table(filtrarBarato(servicios, price));
// //     const filtrarMenor = arr.filter((el)=>el.precio < price);
// //     return filtrarMenor;
// //   }
// //   const barato = filtrarBarato(servicios, price);
// //   console.log(barato);
// //   const price2 = parseInt(prompt("ingrese un numero"));
// //   const masBarato = filtrarBarato(barato, price);
// //   console.log(masBarato);
  

  
// // const cuadruple = []
// //   //.forEach()
// //   servicios.forEach((servicio)=>{
// //     console.log(servicio);
    
// //   })

// // nums.forEach((num)=>{
// //     return cuadruple.push ( num * 4)
// // })

// // console.log(cuadruple);

// //find() devuelve el primer elemento que coincida

// // const encontrado= servicios.find((el)=> el.precio > 2000)
// // const encontrarElUno= nums.find(el=> el == 1)
// // console.log(encontrado);

// //filter() devuelve un array con todas las coincidencias


// // const filtrar = servicios.filter(el=> el.precio > 2000)
// // const filtrarPorNombre = servicios.filter(el=> el.nombre.includes("ma"))
// // console.log(filtrarPorNombre);

// // filtrarPorNombre.forEach(EL=>{
// //     console.log(el.nombre);
    
// // })

// //map devuelve un nuevo array
// const precioActualizado= servicios.map((el) => {
//     return{
//         id: el.id,
//         nombre: el.nombre,
//         img:el.img,
//         precio: el.precio * 1.15
//     };
// });
// console.table(servicios);
// console.table (precioActualizado);

// //reduce

// let cargoFijo = 250;
// const total = servicios.reduce((acc, el) =>{
//     return acc + el.precio;
// }, cargoFijo);

// //math
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.min(0, 6, 7, -34, 5, -99, Infinity));
// console.log(Math.max(0, 6, 7, -34, 5, -99, Infinity));
// console.log(Math.sqrt(125));
// console.log(Math.cbrt(125));

// function asignarOperacion(operacion) {
//     switch (operacion) {
//         case "+":
//             return(a, b) => a + b;
//             case "-":
//                 return(a, b) => a - b;
//             case "raiz":
                
//                 return (a) => {
//                     if (a <0) {
//                         return "No existe raiz negativa"
//                     }else{
//                         return Math.sqrt(a);
//                     }
//                 };

//                 //hagamos la division (/)
//         default:
//             return () => "El operador no es válido";
//     }
// }
// // let raizDe25 = asignarOperacion("raiz");

// // console.log(raizDe25(25));

// console.log(Math.ceil(4.00001));

// log

// //selector por class 
// const lista = document.getElementsByClassName("lista");
// const paises = document.getElementsByClassName("pais");


// //selector por tagname

// const divs= document.getElementsByTagName("div");

// //crear nodos
// const parrafo= document.createElement("p")

// parrafo.innerText= "Soy un párrafo creado desde JS"
// contenedor.appendChild(parrafo)

// //titulo.remove()

// //acceder al valor de los inputs
// const inputs = docu


// const producto = {
//     nombre: "Papas",
//     precio: 230,
//   };
//   let concatenado =
//     "Producto: " + producto.nombre + ", precio: $" + producto.precio;
//     let template= `PRODUCTO: ${producto.nombre}, 
//     PRECIO: $ ${producto.precio}`;//interpolacion
//   // contenedor.innerText = concatenado;
//   contenedor.innerText = template;




// crear html (servicios)

//localStorage.setItem("saludo", "Hola FLanders")
localStorage.setItem("isValid", true)
localStorage.setItem("edad", 20)

const numeros= [1,23,4,5,6,7,78]
localStorage.setItem("numeros", numeros)

//ver los valores almacenados
const saludo= localStorage.getItem("saludo")
console.log(typeof saludo);
const isValid= localStorage.getItem("isValid") === "true" //
//trampa LOCALSTORAGE guarda string
let mayorQue= 5 > 10
console.log(isValid);

localStorage.setItem("usuario",{nombre:"pedro" , edad: 36, pass:"1234" });


// //localStorage.setItem("darkMode", "activo")
// const toggleButton = document.getElementById("darkModeToggle");

// if (localStorage.getItem("darkMode") === "activo") {
//     document.body.classList.add("dark-mode");
// }
// //trabajar con el boton
// toggleButton.addEventListener("click", () => { if (document.body.classList.contains)("dark-mode")){
//         document.body.classList.remove("dark-mode");
//         localStorage.setItem("darkMode", "inactivo");
//     } else {
//         document.body.classList.add("dark-mode");
//         localStorage.setItem("darkMode", "activo");
//     }
// });

localStorage.setItem("darkMode", "activo")
const toggleButton = document.getElementById("darkModeToggle");
if (localStorage.getItem("darkMode") === "activo") {
document.body.classList.add("dark-mode");
}
//trabajar con el boton
toggleButton.addEventListener("click", () => {
if (document.body.classList.contains("dark-mode")) {
document.body.classList.remove("dark-mode");
localStorage.setItem("darkMode", "inactivo");
} else {
document.body.classList.add("dark-mode");
localStorage.setItem("darkMode", "activo");
}
});

//limpiar el LS

localStorage.removeItem("darkmode");
localStorage.removeItem("saludo");
//localStorage.clear() // elimina todas claves
// sessionStorage
// sessionStorage.setItem("sesion", "activa"); 
const userObject = { nombre : "Pedro", edad: 36, pass:"1234" };

 alert("Bienvenido al banco");

 // Definición del usuario y las operaciones del cajero
 let usuario = {
     pinGuardado: "5701",
     intentosRestantes: 3,
     saldo: 20000,
     transacciones: [],

     verificarPin: function () {
         while (this.intentosRestantes > 0) {
             let ingreso = prompt("Ingresa tu PIN");
            if (this.pinGuardado === ingreso) {
                 alert("Bienvenido, ya puedes operar");
                 return true;
             } else {
                this.intentosRestantes--;
                 alert("Error, ingresa nuevamente. Te quedan " + this.intentosRestantes + " intentos.");
            }
         }
         alert("Se te acabaron los intentos");
         return false;
     },

    mostrarSaldo: function () {
         alert("Tu saldo es: " + this.saldo);
        this.transacciones.push("Consulta de saldo: " + this.saldo);
     },

     retirarDinero: function () {
         let retiro = parseFloat(prompt("Ingresa el monto a retirar"));
         if (retiro > this.saldo) {
             alert("Saldo insuficiente");
         } else {
             this.saldo -= retiro;
             alert("Retiro exitoso. Tu saldo es " + this.saldo);
             this.transacciones.push("Retiro: " + retiro);
         }
     },

     depositarDinero: function () {
         let deposito = parseFloat(prompt("Ingresa el monto a depositar"));
         if (deposito > 0) {
            this.saldo += deposito;
            alert("Depósito exitoso. Tu saldo es " + this.saldo);
            this.transacciones.push("Depósito: " + deposito);
        } else {
             alert("Monto no válido para depósito");
        }
    },

     mostrarTransacciones: function () {
         if (this.transacciones.length === 0) {
             alert("No hay transacciones recientes.");
         } else {
             alert("Transacciones recientes:\n" + this.transacciones.join("\n"));
         }
     }
 };

 // Verificación del PIN
 let ingresar = usuario.verificarPin();

 // Si el usuario ingresó correctamente el PIN, muestra las opciones
 if (ingresar) {
     let opcion;

     do {
         opcion = prompt(
             "Elegí una opción: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n4 - Ver transacciones. \nPresioná X para finalizar."
         );

         switch (opcion) {
             case "1":
                 usuario.mostrarSaldo();
                 break;
             case "2":
                 usuario.retirarDinero();
                 break;
             case "3":
                 usuario.depositarDinero();
                 break;
             case "4":
                 usuario.mostrarTransacciones();
                 break;
             case "X":
             case "x":
                 alert("Finalizando operación. Gracias por usar el cajero.");
                 break;
             default:
                 alert("Opción no válida");
                 break;
        }
    } while (opcion !== "X" && opcion !== "x");
 }

// // Opciones de bebida usando un array y permitiendo agregar nuevas
let bebidas = ["Café", "Té", "Agua caliente"];

 function seleccionarBebida() {
     let ingresoBebida = prompt(
         "Selecciona una bebida \n1 - Café \n2 - Té \n3 - Agua caliente \n4 - Agregar nueva bebida"
     );

     switch (ingresoBebida) {
         case "1":
         case "2":
         case "3":
             let indice = parseInt(ingresoBebida) - 1;
             alert("Seleccionaste " + bebidas[indice]);
             break;
         case "4":
             let nuevaBebida = prompt("Ingresa el nombre de la nueva bebida:");
            if (nuevaBebida) {
                 bebidas.push(nuevaBebida);
                 alert("Has agregado " + nuevaBebida + " a las opciones.");
            } else {
                alert("Nombre de bebida no válido");
             }
             break;
         default:
             alert("Opción no válida");
             break;
     }
 }

 // Ejecutar la selección de bebidas
 seleccionarBebida();

 // Mostrar las opciones de bebidas actualizadas
 alert("Opciones de bebidas disponibles: \n" + bebidas.join("\n"));

 // Ejemplo de uso de un método en el objeto
function sumarRango(inicio, fin) {
     let total = 0;
     for (let i = inicio; i <= fin; i++) {
         total += i;
     }
     return total;
 }

 console.log("Suma de 1 a 10:", sumarRango(1, 10));