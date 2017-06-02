
import React,{Component} from 'react';
import OrderListComponent from '../../../components/OrderListComponent/OrderListComponent';
import {getOrderList,postComment} from '../../../fetch/orderList';

export default class OrderList extends Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.data.length?<OrderListComponent data={this.state.data} commitComment={this.commitComment.bind(this)}/>:'正在加载...'
                }
            </div>
        )
    }
    //提交评价
    commitComment(id,content,callback){//id  内容  callback更改评价状态
        // callback();
        postComment(id,content).then(res=>res.json()).then(data=>{
            callback()
        })
    }
    componentDidMount(){
        getOrderList(this.props.username).then(res=>res.json()).then(data=>{
            this.setState({data})
        })
    }
}