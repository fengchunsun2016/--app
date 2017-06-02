import React,{Component} from 'react';

export default class Star extends Component{
    constructor(props){
        super(props);
        let arr = [];
        for(var i=1;i<=5;i++){
            if(i<=props.star){
                arr.push(true);
            }else {
                arr.push(false);
            }
        }
        this.state = {
            arr
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.arr.map((item,index)=>(
                        item?
                        <i className="iconfont icon-collection_fill font" key={index}></i>
                        :<i className="iconfont icon-collection" key={index}></i>))
                }
            </div>
        )
    }
}
