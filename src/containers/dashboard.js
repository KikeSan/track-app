import React,{Component} from 'react';
import Sidebar from './sidebar';
import Body from './body';
import Reporte from '../components/reporte';

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state ={
            view:'track',
            
        }
        this.changeView = this.changeView.bind(this);
    }
    changeView(ref){
        console.log('changeView: ',ref);
        
        this.setState({
            view:ref
        })
    }
    render(){
        return (
            <div>
                <Sidebar handleClick={this.changeView}/>
                <Body user={this.props.user} view={this.state.view}/>
            </div>
        )
    }
}