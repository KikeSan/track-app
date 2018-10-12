import React,{Component} from 'react';
import styles from '../App.css';
export default class Asistencia extends Component{
  constructor(props){
    super();
  }
  render(){
    return(
      <div className={styles.asistencia}>
        <h2>Asistencia</h2>
        <div>
          <h3>Hola {this.props.user},</h3>
          <p>Bienvenido al sistema de seguimiento de tiempos y actividades.</p>
          <a></a>
        </div>
      </div>
    )
  }
}