
import React,{Component} from 'react';
import OrderListItem from './OrderListItem';

export default class Home extends Component{
    render(){
        return (
            <div>
                <h3>订单列表</h3>
                {
                    this.props.data.map((item,index)=>(
                        <OrderListItem data={item} key={index} commitComment={this.props.commitComment}/>
                    ))
                }
            </div>
        )
    }
}