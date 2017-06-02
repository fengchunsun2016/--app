import React,{Component} from 'react';
import RouterMap from '../routes';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/userInfo';
import {getStorage} from '../local';

class App extends Component{
    constructor(){
        super();
        this.state = {
            done:false
        }
    }
    render(){
        return (
            <div>
                {this.state.done?<RouterMap/>:'正在加载...'}

            </div>
        )
    }
    componentDidMount(){
        //先找本地，没有的话赋予初始值
        let cityName = getStorage('cityName');
        if(cityName == null){
            cityName = '杭州'
        }
        this.props.userActions.update({cityName});

        this.setState({done:true});
        /*console.log(this.props.userActions)//*/
    }
}

export default connect(
    state=>{//mapDispatchToProps
        return {}
    },
    dispatch=>{
        return {//mapDispatchToProps:把Actions绑定到组件的属性上
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App);