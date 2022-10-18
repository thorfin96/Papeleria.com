/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.papeleria.Papeleria.Repositories;

import com.papeleria.Papeleria.Models.Inventario;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author KIRITODANI
 */
public interface InventarioRepository extends CrudRepository<Inventario, Integer> {
    
}
