import React,{Component} from 'react';
import {Link} from 'react-router-dom';
//主页头部组件
import './index.less';
import SearchInput from '../SearchInut';

export default class HomeHeader extends Component{
    render(){
        return (
            <div className="home-header back">
                <Link to='/city'>
                    <div className="city">
                        <span ref="myCity">{this.props.cityName}</span>
                        <i className="iconfont icon-xiangxia2"></i>
                    </div>
                </Link>

                <div className="search">
                    <i className="iconfont icon-sousuo-xianxing"></i>
                    <SearchInput toSearch={this.toSearch.bind(this)} value="" />
                </div>
                <Link to="/login">
                    <div className="profile">
                        <i className="iconfont icon-yonghufill"></i>
                    </div>
                </Link>

            </div>

        )
    }
    toSearch(val){
        this.props.history.push('/search/all/'+val)
    }

}
