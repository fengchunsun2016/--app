
import React from 'react';
import {render} from 'react-dom';

import './assets/index.less';
import App from './containers/index';
import {Provider} from 'react-redux';
import {configureStore} from './store';
//可以在configureStore中写入初始状态
let store = configureStore({userInfo:{aaa:111}});


render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('root'));



