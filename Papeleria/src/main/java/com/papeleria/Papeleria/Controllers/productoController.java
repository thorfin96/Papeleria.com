package com.papeleria.Papeleria.Controllers;

import com.papeleria.Papeleria.Models.Producto;
import com.papeleria.Papeleria.Repositories.productoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/producto")
public class productoController {
    @Autowired
    productoRepository productorepository;

    @GetMapping(path = "/all")
    public Iterable<Producto> getproducto(){
        return productorepository.findAll();
    }

    @PostMapping(path = "/guardar")
    public Producto saveproducto(@RequestBody Producto producto){
        return productorepository.save(producto);
    }

    @DeleteMapping(path ="/eliminar/{id}" )
    public void deletProducto(@PathVariable("id") int id){
        productorepository.deleteById(id);
    }

}
