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
@Table(name = "proveedor")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Proveedor {
@Id
//@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int nit;
    private String nombreProveedor;
    private String celuiarProveedor;
    private String direccionProveedor;
    private String correoProveedor;
    private int idGerenteProveedor;



}
