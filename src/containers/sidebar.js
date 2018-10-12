import React,{Component} from 'react';
import styles from '../App.css';

export default class Sidebar extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div className={styles.sidebar}>
                <img src="https://kike.pe/img/logoAzul.png" className={styles.logo}/>
                <a className={styles.itemMenu}>Tracking</a>
                <a className={styles.itemMenu}>Tus asistencias</a>
                <hr/>
            </div>
        )
    }
}