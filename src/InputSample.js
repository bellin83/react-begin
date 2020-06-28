import React, { useState } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    }
    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
    }
    return (
        <div>
            {/* 여기에 value={text}넣지 않으면 초기화 버튼 클릭해도 값 사라지지 않음!!! */}
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;