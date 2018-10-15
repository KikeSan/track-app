import React,{Component} from 'react';
import Sidebar from './sidebar';
import Body from './body';

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state ={
            view:'track',
            registros:[{
                id:1,
                fecha:'10/10/218',
                in:'11:00am',
                out:'12:00pm'
            },{
                id:2,
                fecha:'12/10/218',
                in:'09:00am',
                out:'10:00am'
            },{
                id:3,
                fecha:'14/10/218',
                in:'11:00am',
                out:'12:00pm'
            }]
        }
        this.changeView = this.changeView.bind(this);
        this.updateRegister = this.updateRegister.bind(this);
    }
    changeView(ref){
        console.log('changeView: ',ref);
        
        this.setState({
            view:ref
        })
    }
    updateRegister(fecha,entrada,salida){
        console.log('New reg: ',fecha,entrada,salida);
        
        const up = {
            id:this.state.registros.length+1,
            fecha: fecha,
            in:entrada,
            out:salida
        }
        this.setState({
            registros:[...this.state.registros,up]
        })
        console.log('Registros: ',this.state.registros)
    }
    render(){
        return (
            <div>
                <Sidebar handleClick={this.changeView}/>
                {console.log('Registros RENDER: ',this.state.registros)}
                <Body user={this.props.user} view={this.state.view} handleClick={this.updateRegister} regs={this.state.registros}/>
            </div>
        )
    }
}