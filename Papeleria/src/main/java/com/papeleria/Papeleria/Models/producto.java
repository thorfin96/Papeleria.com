package com.papeleria.Papeleria.Models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "producto")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class producto {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idproducto;
    private String nombreProducto;
    private String detalleProducto;
    
}
