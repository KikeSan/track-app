import React,{Component} from 'react';
import Sidebar from './sidebar';
import Body from './body';

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        console.log('Dashboard',props.user);
    }
    render(){
        return (
            <div>
                <Sidebar/>
                <Body user={this.props.user}/>
            </div>
        )
    }
}