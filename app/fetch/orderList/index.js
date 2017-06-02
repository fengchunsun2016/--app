import {get,post} from '../index';

export function getOrderList(username) {
   return get('/api/orderList/'+username);
}

export function postComment(obj) {
   console.log(obj);
   return post('/api/comment',obj)
}