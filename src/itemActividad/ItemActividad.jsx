import './styles.css';
import Incomplete from './assets/uncomplet.png'
import Complete from './assets/complet.png'
import PropTypes from 'prop-types';

function ItemActividad(props) {
    return(
        <div style={{display:'flex', backgroundColor:'grey', margin:4, borderRadius:8, 
        padding:4, alignItems: 'center'}}>
            <div style={{display:'flex', width:20, height:20, margin:5}}>
                <img src={props.data.estado ? Complete : Incomplete} className='imgStyle' />
            </div>
            <div style={{display:'flex', flexDirection: 'column'}}>
                <p style={{margin: 0}}>{props.data.nombre}</p>
                <p style={{margin: 0}}>{props.data.descripcion}</p>
                <p style={{margin: 0}}>{props.data.fecha}</p>
            </div>
        </div>
    );
}

ItemActividad.propTypes= {
    data: PropTypes.array.isRequired,
  };

export default ItemActividad;