import React from 'react';


const LoginForm = (props) => {
    const {setLogin, setName} = props
    return (
        <form action="" onSubmit={(e)=>{
            e.preventDefault();
            setLogin(true);
        }}>
            <input type="text" onChange={(e)=>{ setName(e.target.value) }} />
            <input type="submit" value="로그인" />
        </form>
    );
};

export default LoginForm;