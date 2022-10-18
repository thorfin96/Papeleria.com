package com.papeleria.Papeleria.Controllers;

import com.papeleria.Papeleria.Models.DetalleFacturaModel;
import com.papeleria.Papeleria.Repositories.DetalleFacturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/detalleFactura")
public class DetalleFacturaController {
    @Autowired
    DetalleFacturaRepository detalleFacturaRepository;
    
    @GetMapping(path = "/all")
    public Iterable<DetalleFacturaModel> getdetallefactura(){
        return detalleFacturaRepository.findAll();
    }

    @PostMapping(path = "/guardar")
    public DetalleFacturaModel savedetalleFactura(@RequestBody DetalleFacturaModel detalleFactura){
        return detalleFacturaRepository.save(detalleFactura);
    }

    @DeleteMapping(path ="/eliminar/{id}" )
    public void deleteDetalleFactura(@PathVariable("id") int id){
        detalleFacturaRepository.deleteById(id);
    }

}
