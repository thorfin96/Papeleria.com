package com.papeleria.Papeleria.Repositories;

import org.springframework.data.repository.CrudRepository;

import com.papeleria.Papeleria.Models.Producto;

public interface productoRepository extends CrudRepository <Producto, Integer> {
    
}
