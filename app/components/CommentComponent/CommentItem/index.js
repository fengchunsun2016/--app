import React,{Component} from 'react';
import Star from '../../Star/index';
import './index.less';
export default class CommentItem extends Component{

    render(){
        let {star,userName,comment} = this.props.data;
        return (
            <div className="comment-item">
                <div>
                    <i className="iconfont icon-yonghufill"></i>
                    {userName}
                </div>
                <Star star={star}/>
                <div>
                    {comment}
                </div>
            </div>
        )
    }
}



