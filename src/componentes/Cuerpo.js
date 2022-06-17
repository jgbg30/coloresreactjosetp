
import React,{useState} from 'react';
import '../App.css'

const Cuerpo = () => {

    const [color, setColor] = useState ('');
    
    function cambiarcolor(e) {
       setColor(e.target.value);
        document.body.style.backgroundColor = `${color}`
    }

  return (
    <div className="cuadroparacolor">
        <p>Selecciona un Color</p>
    <input type="color" id="color" value={color} onChange={cambiarcolor}/> 
  </div>
    )
}
export default Cuerpo





