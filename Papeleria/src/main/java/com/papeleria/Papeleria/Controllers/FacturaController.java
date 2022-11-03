package com.papeleria.Papeleria.Controllers;

import com.papeleria.Papeleria.Models.Factura;
import com.papeleria.Papeleria.Repositories.FacturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/factura")
public class FacturaController {
    
    @Autowired
    FacturaRepository facturaRepository;

   


    @GetMapping(path = "/all")
    public Iterable<Factura> getfactura(){
        return facturaRepository.findAll();
    }

    @PostMapping(path = "/guardar")
    public Factura savefactura(@RequestBody Factura factura){
        return facturaRepository.save(factura);
    }

    @DeleteMapping(path ="/eliminar/{id}" )
    public void deletFactura(@PathVariable("id") int id){
        facturaRepository.deleteById(id);
    }

}