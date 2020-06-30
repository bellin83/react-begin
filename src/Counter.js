import React, { useState, useReducer } from 'react';


function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter() {

    const [number, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }
    const onDecrease = () => {
        dispatch({
            type: 'DECREMENT'
        });
    }
    return (
        <div>
            <h1>{number}</h1>
            {/* 함수 type값 그대로 넣어줘야 함. onIncrease()처럼 호출하면 안됨. 그럼 바로 렌더링 하면서 한번 실행 됨!! */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;