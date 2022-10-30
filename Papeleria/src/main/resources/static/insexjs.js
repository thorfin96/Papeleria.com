fetch("http://localhost:8080/producto/all")
.then(res => res.json())  //lo convertimos a unjson
.then(rest => console.log(res))  // que lo muestre por consola es ña respuesta
.catch (err => console.error)  // si falla un error