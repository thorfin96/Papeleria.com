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
@Table(name = "inventario")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Inventario {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int nitProveedor;
    private int idProducto;
    private String fecha;
    private int cantidadProducto;
    private int valorProducto;
}
