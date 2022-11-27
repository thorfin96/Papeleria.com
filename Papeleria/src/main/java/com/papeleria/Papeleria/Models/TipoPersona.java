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
@Table(name = "tipopersonas")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter 
public class TipoPersona {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idTipo;
    private int Rol;

}
