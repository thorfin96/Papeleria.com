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
@Table(name = "detalleFactura")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class DetalleFacturaModel {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idFactura;
    private String fecha; //Corregir este tipo de dato
    private int nitProveedor;
    private int idProducto;
}