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
@Table(name = "factura")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Factura {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idFactura;
    private int idVendedor;
    private int nitPapeleria;
}
