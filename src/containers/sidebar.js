import React,{Component} from 'react';
import styles from '../App.css';

export default class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            active:1
        }
        this.checkActive = this.checkActive.bind(this);
    }
    checkActive(ref){
        console.log(typeof Number(ref.currentTarget.id))
        this.setState({
            active:Number(ref.currentTarget.id)
        })
        this.props.handleClick(Number(ref.currentTarget.id)===1?'track':'reporte');
    }
    render(){
        console.log('active',this.state.active);
        
        return(
            <div className={styles.sidebar}>
                <img src="https://contanex.com/central/tracking/assets/images/logo.png" className={styles.logo}/>
                <a className={this.state.active===1?styles.itemActive:styles.itemMenu} onClick={this.checkActive} id="1">Tracking</a>
                <a className={this.state.active===2?styles.itemActive:styles.itemMenu} onClick={this.checkActive} id="2">Tus asistencias</a>
                <hr/>
            </div>
        )
    }
}