import React from 'react';

function Wrapper({ children }) {
    // children은 비구조화 할당으로 데이터 받아옴
    const style = {
        border: '2px solid black',
        padding: 16
    };

return <div style={style}>{children}</div>
}

export default Wrapper;