document.addEventListener("DOMContentLoaded",() =>{ //apenas cargue el html cargue esto
//console.log("Comenzar a codificar"); 
const Producto = document.querySelector("#producto");
const ProductoForm = document.querySelector("#create-producto") //creamos una constante y una url segundaria
ProductoForm.addEventListener("submit",createProducto); //toma los datos al presionar submit ejecuta el create proveedor
//console.log(ProductoForm); los console son pra mostrar por consola si esta funcionando 
//console.log(Producto);
fetch("http://localhost:8080/producto/all") 
    .then(response => response.json()) 
    //.then(response => console.log(response)) 
    .then(Producto => Producto.forEach(slapItOnTheDOM)) 
function slapItOnTheDOM(producto){ 
    //console.log("insertando el listado de proveedores"); 
    const productoLi = document.createElement("li");  //crea una lista
    productoLi.dataset.idProducto = producto.idProducto;  
    productoLi.innerHTML = '<span>'+ producto.idproducto + " - " + producto.nombreProducto +' - '+producto.detalleProducto+'</span>'
    Producto.appendChild(productoLi); 
//console.log("Identificador del proveedor",producto.idProducto);

}
function createProducto (event){  //ver linea 4
    console.log("vamos a crear un producto")
    event.preventDefault(); //espera hasta que termine la funcion
    let nuevoProducto = reunirFormData();//reune los datos del formulario
    return fetch ("http://localhost:8080/producto.html" ,{ //Creamos otra lista
    method:"POST" ,
    headers: {
        'Content_Type': 'aplication/json',
        'Acept': 'Aplication/Json'
    },
    body: JSON.stringify(nuevoProducto) //mostramos los datos de la lista

    } )
     .then(res => res.json()) //la promesa ejecuta todo la lista
     .then(producto => (slapItOnTheDOM(producto))) //llamamos a la funcion slapitonthedom para que me muestre mi producto
    
    }
    function reunirFormData (){ 
        return {  //lo adicionamos por un error 
        idProducto: event.target.idProducto.value,  //index html genera el evento para tomar los datos ingresados
        nombreProducto: event.target.nombreProducto.value,
        detalleProducto: event.target.detalleProducto.value
    }
    }
})





/*
//document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('DOMContentLoaded', () => {
        const Producto = document.querySelector('#producto')
        const ProductoInfo = document.querySelector('#producto-info')
        const ProductoForm = document.querySelector('#create-producto')
        //proveedorForm.addEventListener('submit', () => console.log("hello"))
        proveedorForm.addEventListener('submit', createProducto)
        //console.log("proveedor ul", proveedores)
        //console.log("profile div", proveedorInfo)
        //console.log("form", proveedorForm)
        fetch('http://localhost:8080/producto/all')
                .then(response => response.json())
                .then(producto => producto.forEach(slapItOnTheDOM))
        //.then(console.log)
        function slapItOnTheDOM(producto) {
            const productoLi = document.createElement('li');
            productoLi.dataset.idProducto = producto.idProducto
            productoLi.innerHTML = '<span>'+producto.nombreProducto+' - '+producto.detalleProducto+'</span>'
            producto.appendChild(productoLi);
            console.log("Listado de productos", productoLi)
            console.log("Identificador de proveedor:", productoLi.dataset.idProducto)
        
            /////boton para borrar el proveedor
            const buttond = document.createElement('button')
            buttond.dataset.idProducto = producto.idProducto
            buttond.setAttribute("id", "delete-button-"+producto.idProducto)
            buttond.innerText = "DELETE"
            producto.appendChild(buttond);
            console.log('Boton de borrado '+producto.nombreProducto, buttond)
            //buttond.addEventListener('clic', console.log(proveedor))
            buttond.addEventListener('click', () => deleteProducto(producto))
            /////boton para actualizar
            const buttonu = document.createElement('button')
            buttonu.dataset.idProveedor = proveedor.idProveedor
            buttonu.setAttribute("id", "update-button-"+proveedor.idProveedor)
            buttonu.innerText = "UPDATE"
            proveedores.appendChild(buttonu);
            buttonu.addEventListener('click', () => editProveedor(proveedor))
        }
        function createProveedor(event) {
            console.log("Creando proveedor!")
            event.preventDefault();
            let nuevoProveedor = reunirFormData();
            return fetch('http://localhost:8080/proveedor/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(nuevoProveedor)
            })
                    .then(res => res.json())
                    .then(proveedor => (slapItOnTheDOM(proveedor)));
        }
        //Funcion para editar el proveedor por medio de un formulario.
        
        function editProveedor(proveedor) {
            console.log("Editando proveedor!")
            console.log(proveedor.nombreProveedor + 'va a ser editado')
            // create the form element, add the id just in case you need it later, fill it out with html and append it
            const eForm = document.createElement('form')
            eForm.id = "update-form"
            eForm.innerHTML = '<h2> Update '+proveedor.nombreProveedor+'</h2> Nombre:<br><input type="text" name="nombreProveedor" value="'+proveedor.nombreProveedor+'"><br>email:<br><input type="text" name="emailProveedor" value="'+proveedor.emailProveedor+'"><br>Id:<br><input type="text" name="idProveedor" value="'+proveedor.idProveedor+'"><br><input type="submit" name="">'
            proveedorInfo.append(eForm)
    //add event listener that invokes the update function 
            eForm.addEventListener('submit', (event) => updateProveedor(event, proveedor))
        }
        //edición en la base de datos
        function updateProveedor(event, proveedor) {
            console.log("actualizando proveedor en bd")
            event.preventDefault(); 
            let updatedProv = reunirFormData () 
            updateOnBackend (updatedProv, updatedProv.idProveedor) 
        .then (updateOnFrontEnd) 
        }
        
        function updateOnBackend(updatedProv, id){
            console.log("fetch began")
        return fetch('http://localhost:8080/proveedor/'+id, {
          method: "PUT",
          body: JSON.stringify(updatedProv),
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(res => res.json())
      }
      function updateOnFrontEnd(proveedor){
        console.log(proveedor.nombreProveedor+' va a ser actualizado')
        const proveedorSpan = proveedores.querySelector('li[data-id="'+proveedor.idProveedor+'"]>span')
        proveedorSpan.innerText = proveedor.nombreProveedor+' - '+proveedor.emailProveedor
        console.log(proveedor.nombreProveedor+' fue actualizado ')
      }
      
      function deleteProveedor(proveedor) {
        console.log(proveedor.nombreProveedor + 'va a ser borrado')
        const proveedorLi = document.querySelector('[data-id="'+proveedor.idProveedor+'"]');
        const buttond = document.querySelector('#delete-button-'+proveedor.idProveedor);
        const buttonu = document.querySelector('#update-button-'+proveedor.idProveedor);
        return  fetch("http://localhost:8080/proveedor/"+proveedor.idProveedor, {
          method: "DELETE"
        })
        .then(response => response.json())
        .then(() => {
          proveedorLi.remove();
          buttond.remove()
          buttonu.remove()   
        })
      }
        function reunirFormData() {
            return {
                idProveedor: event.target.idProveedor.value,
                nombreProveedor: event.target.nombreProveedor.value,
                emailProveedor: event.target.emailProveedor.value
            }
        }
    })
    */