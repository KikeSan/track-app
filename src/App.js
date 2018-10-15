import React, { Component } from 'react';
import styles from './App.css';
import Dashboard from './containers/dashboard';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      user:'admin',
      pass:'',
      success:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.verifyUser = this.verifyUser.bind(this);
  }
  

  handleChange = e => {
    const hasError = e.target.value.length < 3;
    //const isPresent = this.state.contacts.some(c => c.name === e.target.value)
    this.setState({
      hasError,
      [e.target.name]: e.target.value
    })
  }
  verifyUser = e =>{
    e.preventDefault();
    console.log(this.state.user,this.state.pass)
    /* this.setState({
      success:true
    }) */
    if(this.state.user==='admin' && this.state.pass=='@dm1n'){
      this.setState({
        success:true
      })
    }
  }

  render() {
    if(!this.state.success){
      return (
        <div className={styles.loginWrapper}>
          <div className={styles.loginContainer}>
            <div className={styles.panel}>
              <img src="https://contanex.com/central/tracking/assets/images/contanex.png" className={styles.logoLogin}/>
              <h2>Contanex Tracking</h2>
              <form>
                <input className={styles.inputForm} type="text" name="user" placeholder="Usuario" onChange={this.handleChange}/>
                <input className={styles.inputForm} type="password"  name="pass" placeholder="Contraseña" onChange={this.handleChange}/>
                <button className={styles.btnPrimary} onClick={this.verifyUser} type="submit">Ingresar</button>
              </form>
              <div><br/>
                <p className={styles.small}>©2017 Contanex</p>
              </div>
            </div>
          </div>
        </div>
      )
    }else{
      console.log('App',this.state.user)
      return(<Dashboard user={this.state.user}/>)
    }
  }
}