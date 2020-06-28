import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
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