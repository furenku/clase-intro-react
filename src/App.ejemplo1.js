import React, { Component } from 'react';



function MiPrimerComponente( props ) {
  return (
    <h3>
      {props.texto}
    </h3>
  )
}

function Persona( props ) {
  return (
    <p>
      {props.apellido}, {props.nombres}.
      {props.edad} años.
      <b>
        Profesión: {props.profesion}
      </b>
    </p>

  );
}


class App extends Component {
  render() {
    return (
      
      <div>
      
       <MiPrimerComponente texto="abc"/>
       <MiPrimerComponente texto="def"/>
       <MiPrimerComponente texto="gih"/>

       <Persona apellido="Pérez" nombres="Carlos" edad="44" profesion="programador"/>

       <Persona apellido="Torres Jiménez" nombres="Claudia" edad="24" profesion="funcionaria"/>

      </div>
      
      
      
    );
  }
}

export default App;
