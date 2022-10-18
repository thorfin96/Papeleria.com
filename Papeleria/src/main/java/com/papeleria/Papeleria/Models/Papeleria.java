package com.papeleria.Papeleria.Models;
import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "papeleria")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Papeleria {
@Id
//@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int nitPapeleria;
    private String nombrePapeleria;
    private int telefonoPapeleria;
    private int direccionPapeleria;
    private String correoPapeleria;
    private int idGerente;
}
