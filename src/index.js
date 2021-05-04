import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './Data/Base/Base';

const render = () => {
    ReactDOM.render(
            <App setPassword={store.setPassword.bind(store)} getInfo={store.getInfo.bind(store)} setName={store.setName.bind(store)} getStep={store.getStep.bind(store)} setPass={() => {}} setBirthday={store.setBirthday.bind(store)} />
        ,
        document.getElementById('root')
    );
}

//Делаю так, чтобы база могла обновлять экран
store.subscribe(render);
