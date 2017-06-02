import React,{Component} from 'react';
import Star from '../Star';
import './index.less';

export default class InfoComponent extends Component{
    render(){
        console.log(this.props.data);
        let {img,star,desc,title,subTitle,price} = this.props.data;
        return (
            <div className="info-component">
                <div className="info-list">
                    <img src={img} alt=""/>
                    <div className="info-text">
                        <h3>{title}</h3>
                        <div className="star-info">
                            <Star star={star}/> <span>${price}</span>
                        </div>
                        <p>{subTitle}</p>

                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html:desc}}>

                </div>
            </div>
        )
    }
}
