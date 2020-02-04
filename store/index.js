/**
 * @flow
 * @overview 文件描述
 * @author heykk
 */
import {createStore} from 'redux';
import React from 'react';

const initState = {
    list: [
        {
            id: 1,
            name: 'kk1',
            age: 18,
        },
    ],
};

export function StudentReducer( state = initState, action ) {
    switch (action.type) {
        case 'Age':
            return action.payload;

        default:
            return state;
    }
}

export function connectStudentReducer() {
    return React.useReducer(StudentReducer, initState);
}


export function changedAge( id:number, age:number ) {
    return {
        type: 'Age',
        payload: {
            list: [
                {
                    id: 1,
                    name: 'kk1',
                    age: 20,
                },
            ],
        },
    }
}

let store = createStore(StudentReducer);
// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() => console.log('subscribe----', store.getState()));

export default store;

