import { useState } from 'react';
import './App.css'
import CrearActividad  from './crearActividad/CrearActividad';
import DetalleActividad from './detalleActividad/DetalleActividad'; 
import ItemActividad from './itemActividad/ItemActividad';
import datos from './data/todo.json'


function App() {
  const [data, setData] = useState(datos);

  const handleClicAdd = (value) =>{
    setData(value);
  };

  return (
    <div className="principal">
    <header className="header"><h1>To do list</h1></header>
    <main className="main">
      <aside className="aside">
        <CrearActividad dato = {data} agregar ={handleClicAdd}/>
        <DetalleActividad />
      </aside>
      <section className="section">
        <h2>Lista de actividades</h2>
        {data.map((value,index) => 
          <ItemActividad 
          key={index}
          id={value.id}
          data={value}
          />)}
      </section>
    </main>
  </div>
  )
}

export default App
