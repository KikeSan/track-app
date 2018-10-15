import React,{Component} from 'react';
import styles from '../App.css';

export default class Reporte extends Component{
  constructor(props){
    super(props);
    this.state ={

    }
  }
  render(){
    console.log('Registros Report: ',this.props.regis)
    const registers = this.props.regis.map(reg=>{
      console.log('map: ',reg)
      return (
        <div className={styles.reporte} key={reg.id}>
          <ul>
            <li>
              <div className={styles.itemCol}><p>Tiempo</p><p>{reg.fecha}</p></div>
              <div className={styles.itemCol}><p>Fecha</p><p>{reg.fecha}</p></div>
              <div className={styles.itemCol}><p>Ingreso</p><p>{reg.in}</p></div>
              <div className={styles.itemCol}><p>Salida</p><p>{reg.out}</p></div>
            </li>
          </ul>
        </div>
      )
    })
    return(
      <div>
        <h2>Tu reporte</h2>
        
        {registers}
      </div>
    )
  }
}