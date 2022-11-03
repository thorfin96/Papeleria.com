document.addEventListener("DOMContentLoaded",() =>{ //apenas cargue el html cargue esto
//console.log("Comenzar a codificar"); 
const Producto = document.querySelector("#producto");
const ProductoForm = document.querySelector("#create-producto") //creamos una constante y una url segundaria
ProductoForm.addEventListener("submit", createProductos); //toma los datos al presionar submit ejecuta el create producto
//console.log(ProductoForm); los console son pra mostrar por consola si esta funcionando 
//console.log(Producto);
fetch("http://localhost:8080/Producto.html/all") 
    .then(response => response.json()) 
    //.then(response => console.log(response)) 
    .then(producto => producto.forEach(slapItOnTheDOM)) 
function slapItOnTheDOM(producto){ 
    //console.log("insertando el listado de proveedores"); 
    const productoLi = document.createElement("li");  //crea una lista
    productoLi.dataset.idProducto = producto.idProducto;  
    productoLi.innerHTML = '<span>'+ producto.idProducto + 
    " - " + producto.nombreProducto +' - '
    +producto.detalleProducto +'</span>'
    Producto.appendChild(productoLi); 
//console.log("Identificador del proveedor",producto.idProducto);

}
function createProductos (event){  //ver linea 4
    console.log("vamos a crear un producto")
    event.preventDefault(); //espera hasta que termine la funcion
    let nuevoProducto = reunirFormData();//reune los datos del formulario
    return fetch ("http://localhost:8080/Producto.html/" , { //Creamos otra lista
    method:"POST" ,
    headers: {
        'Content_Type': 'aplication/json',
        'Accept': 'Aplication/Json'
    },
    body: JSON.stringify(nuevoProducto) //mostramos los datos de la lista

    } )
     .then(rest => rest.json()) //la promesa ejecuta todo la lista
     .then(producto => (slapItOnTheDOM(producto))) //llamamos a la funcion slapitonthedom para que me muestre mi producto
    
    }
    function reunirFormData (){ 
        return {//lo adicionamos por un error 
        idProducto: event.target.idProducto.value,  //index html genera el evento para tomar los datos ingresados
        nombreProducto: event.target.nombreProducto.value,
        detalleProducto: event.target.detalleProducto.value
         }
    
    }
})