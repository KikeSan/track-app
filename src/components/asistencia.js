import React,{Component} from 'react';
import styles from '../App.css';
export default class Asistencia extends Component{
  constructor(props){
    super(props);
    this.state={
      ent:false,
      in:'',
      horaIn:'',
      horaOut:''
    }
    this.toogleBtn=this.toogleBtn.bind(this);
    this.checkText=this.checkText.bind(this);
  }
  toogleBtn(){
    const dat = new Date();

    if(this.state.ent){
      this.setState({
        in:'',
        horaOut: dat.getHours()+':'+dat.getMinutes()+':'+dat.getSeconds()
      })
      this.props.onClick(dat.getDay()+'/'+dat.getMonth()+'/'+dat.getFullYear(), this.state.horaIn, dat.getHours()+':'+dat.getMinutes()+':'+dat.getSeconds());
    }else{
      this.setState({
        in:'Entrada: '+dat,
        horaIn: dat.getHours()+':'+dat.getMinutes()+':'+dat.getSeconds()
      });
    }

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
      <div>
        <h2>Asistencia</h2>
        <div className={styles.asistencia}>
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
      </div>
    )
  }
}