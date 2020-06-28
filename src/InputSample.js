import React, { useState } from 'react';

function InputSample() {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onReset = () => {
        setText('');
    }
    return (
        <div>
            {/* 여기에 value={text}넣지 않으면 초기화 버튼 클릭해도 값 사라지지 않음!!! */}
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    );
}

export default InputSample;