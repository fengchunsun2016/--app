import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
require('./index.less');
import {Link} from 'react-router-dom';


export default class Slider extends Component{
    constructor(){
        super();
        this.state = {index:0}
    }
    render(){
        var opts = {
            continuous: false,
            callback:(index)=>{
                this.setState({
                    index
                });
            }
        }
        return (
            <div >
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                        <ul>
                           <Link to="/search/meishi"> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to="/search/meishi"> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to="/search/meishi"> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to="/search/meishi"> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to="/search/meishi"> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to="/search/meishi"> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to="/search/meishi"> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to="/search/meishi"> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to="/search/meishi"> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to="/search/meishi"> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                           <Link to='/search/huoguo'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/huoguo'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/huoguo'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/huoguo'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/huoguo'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/huoguo'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/huoguo'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/huoguo'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/huoguo'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/huoguo'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                           <Link to='/search/malatang'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/malatang'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/malatang'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/malatang'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/malatang'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/malatang'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/malatang'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/malatang'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                           <Link to='/search/malatang'> <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li></Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index==0?"active":""}></li>
                    <li className={this.state.index==1?"active":""}></li>
                    <li className={this.state.index==2?"active":""}></li>
                </ul>
            </div>
        )
    }
}
