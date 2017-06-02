import React,{Component} from 'react';
import {getComment} from '../../../fetch/detail';
import CommentComponent from '../../../components/CommentComponent'
import LoadMore from '../../../components/LoadMore';

export default class Comment extends Component{
    constructor(){
        super();
        this.state = {
            page:0,
            data:[],
            hasMore:true,
            isLoading:true
        }
    }

    render(){
        return (
            <div>
                {
                    this.state.data.length?<CommentComponent data={this.state.data}/>:<div>正在加载...</div>

                }
                  <LoadMore isLoading={this.state.isLoading} hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)} />

            </div>
        )
    }
    componentDidMount(){
        this.processData(getComment(this.props.id,0))
    }
    loadMore(){
        this.setState({
            page:this.state.page+1,
            isLoading:true
        },()=>{
            this.processData(getComment(this.props.id,this.state.page))
        })
    }

    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            console.log(data)
            /*console.log(data);*/
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false
            })
        })
    }

}
