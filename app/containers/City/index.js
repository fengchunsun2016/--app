import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo';
import {bindActionCreators} from 'redux';
import CurrentCity from '../../components/CurrentCity/CurrentCity';
import ChooseCity from '../../components/ChooseCity/ChooseCity';
class City extends Component{
    render(){
        console.log(this.props.userInfo);
        return (
            <div>
                <HeaderComponent title="当前城市" history={this.props.history}/>

                <CurrentCity cityName={this.props.userInfo.cityName}/>

                <ChooseCity changeCity={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(city){
        let oldInfo = this.props.userInfo;
        oldInfo.cityName = city;
        this.props.userActions.update(oldInfo);
        this.props.history.push('/');
    }
}
export default connect(
    state=>{
        console.log(state)
        return {userInfo:state.userInfo}
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(City)