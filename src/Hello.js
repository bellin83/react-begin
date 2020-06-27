import React from 'react';

// Function 시작은 대문자로.
function Hello({ color, name }) {
    // 비구조화 할당으로 color, name parameter부에서 선언 가능
    // 여기서 {{}}는 react문법 + 객체라서 {{두번}}
    return <div style={{
        color
    }}>안녕하세요. {name}</div>;
}

Hello.defaultProps = {
    name: '이름없음'
};

export default Hello;