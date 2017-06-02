import React,{Component} from 'react';
import SearchInput from '../SearchInut';
import './index.less';

export default class SearchHeader extends Component{
    render(){
        return (
            <div className="back search-header">
                <i className="iconfont icon-fanhui" onClick={this.back.bind(this)}></i>
                <div>
                    <SearchInput value={this.props.value} toSearch={this.props.toSearch} />
                </div>

            </div>
        )
    }
    back(){
        this.props.history.go(-1);
    }
}
