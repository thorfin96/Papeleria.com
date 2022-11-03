document.addEventListener("DOMContentLoaded",() =>{ //apenas cargue el html cargue esto
    //console.log("Comenzar a codificar"); 
    const Facturas = document.querySelector("#facturas");
    const FacturaForm = document.querySelector("#create-factura"); //creamos una constante y una url segundaria
    FacturaForm.addEventListener("submit", createFacturas); //Cuando=dubmit y creamos la funcion create facturas//toma los datos al presionar submit ejecuta el create proveedor
    console.log(FacturaForm); //los console son pra mostrar por consola si esta funcionando 
    //console.log(Facturas);
    fetch("http://localhost:8080/factura/all") 
        .then(response => response.json()) 
        //.then(response => console.log(response)) 
        .then(factura => factura.forEach(slapItOnTheDOM)) //crear (variable) una factura y va a estar llena de y la recorremos
    function slapItOnTheDOM(factura){ 
        //console.log("insertando el listado de proveedores"); 
        const facturaLi = document.createElement("li");  //crea una lista
        facturaLi.dataset.idFactura = factura.idFactura;  //prametrisamos
        facturaLi.innerHTML = '<span>'+ factura.idFactura + " - " + factura.idVendedor +' - '+factura.nitPapeleria+'</span>'
        Facturas.appendChild(facturaLi);   //en Facturas guarde  los hijos 
    //console.log("Identificador factura",factura.idFactura); //ver si funciona el listado
    
    }

    function createFacturas(event){
        console.log("Vamos a crear una factura");
        event.preventDefault();  //hasta que no termines de ejecutar la funcion no termina
        let nuevaFactura = reunirFormData(); //reune los datos del html
         fetch("http://localhost:8080/factura/",{
            method: "POST",
            headers:{ //otra lista 
                'Content-Type':'application/json', 
                'Accept':'application/json' //acepta cuando retorna datos
            },
            body: JSON.stringify(nuevaFactura)
        })
                .then(rest => rest.json())  //la promesa ejecutamos tolo lo del return
                .then(factura=>(slapItOnTheDOM(factura)))
    }

    //reunir form data es nesesario
    function reunirFormData(){
        //return por si las moscas
        idFactura: event.target.idFactura.value; //el evento lo crea el indexhtml busca el idFactura y muetra los valores ingresados .value
        idVendedor: event.target.idVendedor.value;
        nitPapeleria: event.target.nitPapeleria.value;
        
    }

})
    