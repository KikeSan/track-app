import React,{Component} from 'react';
import styles from '../App.css';
export default class Asistencia extends Component{
  constructor(props){
    super();
    this.state={
      ent:false,
      in:''
    }
    this.toogleBtn=this.toogleBtn.bind(this);
    this.checkText=this.checkText.bind(this);
  }
  toogleBtn(){
    this.state.ent?
    this.setState({in:''}):
    this.setState({in:'Entrada: '+new Date})
    this.setState({
      ent:!this.state.ent
    })
  }
  checkText(){
    return 'btnEntrada';
    //return this.state.ent?'btnEntrada btnSalida':'btnEntrada'
  }
  render(){
    return(
      <div className={styles.asistencia}>
        <h2>Asistencia</h2>
        <div>
          <h3>Hola {this.props.user},</h3>
          <p>Bienvenido al sistema de seguimiento de tiempos y actividades.</p>
          <a className={this.state.ent?styles.btnSalida:styles.btnEntrada} onClick={this.toogleBtn}>{this.state.ent?'Registrar salida':'Registrar entrada'}</a>
          {this.state.in!==''?
            <p className={styles.time}>{this.state.in}</p>:
            <p></p>
          }
        </div>
      </div>
    )
  }
}