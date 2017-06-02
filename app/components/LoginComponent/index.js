import React,{Component} from 'react';
import './index.less';

export default class LoginComponent extends Component{
    constructor(){
        super();
        this.state ={
            val:''
        }
    }
    render(){
        return (
            <div className="login-component">
                <input type="text" onChange={this.changeValue.bind(this)} placeholder="请输入用户名"/>
                <button onClick={this.login.bind(this)} className="back">登录</button>
            </div>
        )
    }
    changeValue(e){
        this.setState({
            val:e.target.value
        })
    }
    login(){
        this.props.login(this.state.val)
    }
}
