import React,{Component} from 'react';
import SearchHeader from '../../components/SearchHeader';
import SearchList from './subpage/SearchList';

export default class Search extends Component{
    render(){
        return (
            <div>
                <SearchHeader value={''||this.props.match.params.keyword} history={this.props.history} toSearch={this.toSearch.bind(this)} />
                <SearchList/>
            </div>
        )
    }
    toSearch(value){
        console.log(this.props);
        let kind = this.props.match.params.kind||'all';
        this.props.history.push('/search/'+kind+'/'+value);
    }
}
