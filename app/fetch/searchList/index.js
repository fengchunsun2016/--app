import {get} from '../index';


export function getSearchList() {
    return get('/api/search')
}
