import React, { Component } from 'react';

import PropTypes from 'prop-types';

import style from './Contador.css';

// tomado de https://www.javascriptstuff.com/css-modules-by-example/
import cx from "classnames";

/*
Más métodos para aplicar estilos en React
https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
*/

class Contador extends Component {
  


  constructor( props ) {
    
    super( props );

    // definimos nuestro estado:

    this.state = {
      numeroClicks: this.props.inicio,
      activado: false
    }

  }

  render() {

    let classes;

    if( ! this.state.activado ) {

      classes = style.Contador;

    } else {
      // usar 'cx' de librería 'classnames' para combinar clases
      classes = cx( style.Contador, style.activado );

    }
    

    return (
      <div className={classes} onClick={ () => this.incrementar() }>
        Número de clicks: {this.state.numeroClicks}
      </div>
    )
  }

  incrementar() {
    // tomamos el valor de 'activado' en el estado
    // y lo invertimos:
    let estaActivado = ! this.state.activado;

    // actualizamos el estado
    this.setState({
      numeroClicks: this.state.numeroClicks + this.props.incremento,
      activado: estaActivado
    })
    
  }
  
}

// especificar tipos de propiedades
Contador.propTypes = {
  inicio: PropTypes.number,
  incremento: PropTypes.number
}




export default Contador;