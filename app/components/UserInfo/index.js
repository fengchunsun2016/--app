import React,{Component} from 'react';
import './index.less';
export default class UserInfo extends Component{
    render(){
        return (
            <div className="user-info">
                <div className="">用户名：{this.props.userInfo.username}</div>
                <div>城 市 ：{this.props.userInfo.cityName}</div>
            </div>
        )
    }
}


