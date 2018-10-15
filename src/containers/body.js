import React,{Component} from 'react';
import styles from '../App.css';
import UserNav from '../components/userNav';
import Asistencia from '../components/asistencia';
import Reporte from '../components/reporte';

export default class Body extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className={styles.bodyMain}>
        <UserNav/>
        {
          this.props.view==='track'?
          <div className={styles.wrapperAs}>
            <Asistencia user={this.props.user} onClick={this.props.handleClick}/>
          </div>:
          <div className={styles.wrapperAs}>
          {console.log('Regis:::: ',this.props.regs)}
            <Reporte regis={this.props.regs}/>
          </div>
        }
        
      </div>
    )
  }
}