import React from 'react';
import { useState } from 'react';
import LoginForm from './LoginForm';

function Login(props) {
    const [login, setLogin] = useState(false);
    const [name, setName] = useState("");
    return (
        <div>
            {/*로그인이 false일 때 로그인창, true 인사창 */}   
            {
                login ? (<h1>{name}님 반갑습니다</h1>) : (            
                // props 값으로 set메소드 전달
                <LoginForm setLogin={setLogin} setName={setName} />)
            }
        </div>
    );
}

export default Login;



