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
@Table(name = "personas")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Personas {
@Id
//@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idTipo;
    private String primerNombre;
    private int cedula;
    private String primerApellido;
    private String segundoNombre;
    private int Celular;
    private String segundoApellido;
    private String correoElectronico;
    private String Direccion;
    private String Contraseña;
    private String Usuario;
}
