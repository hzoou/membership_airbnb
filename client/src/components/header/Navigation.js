import React, {useEffect, useState} from 'react';
import styled from "styled-components";

export default () => {
    const [ user, setUser ] = useState(null);

    const Navigation = styled.div`
        height: 80px;
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: 20px;
        font-size: 14px;
        font-weight: 600;
    `;

    const NavItem = styled.div`
        height: -webkit-fill-available;
        line-height: 80px;
        margin-right: 25px;
        
        &:hover {
            border-bottom: 3px solid #b8b8b8; 
            cursor: pointer;
        }
    `;

    const Login = styled.a`
        color: #484848;
        text-decoration: none;
    `;

    const Profile = styled.img`
        width: 35px;
        border-radius: 50%;
        cursor: pointer;
    `;

    const getJwtToken = async () => {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [ key, value ] = cookie.trim().split('=');
            if (key === 'jwt') {
                try {
                    const res = await fetch('http://localhost:8080/api/user', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ token: value }) });
                    const result = await res.json();
                    setUser(result.data);
                } catch (e) {
                    console.log(e.message);
                }
            }
        }
    };

    const clickProfile = () => {
        const confirm = window.confirm('로그아웃 하시겠습니까?');
        if (!confirm) return;
        deleteCookie('jwt');

    };

    const deleteCookie = (key) => {
        document.cookie = key + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
        window.location.reload();
    };

    useEffect(() => { getJwtToken() }, []);

    return (
        <Navigation>
            <NavItem>
                <span>호스트가 되어보세요</span>
            </NavItem>
            <NavItem>
                <span>도움말</span>
            </NavItem>
    {user ? <Profile src="https://lh3.googleusercontent.com/a-/AAuE7mD0kzR2EMXnwtDB3EO9riv9ilRbWvufCrXg4eTk" onClick={clickProfile}/> :
            <NavItem>
                <span><Login href="http://localhost:8080/api/login">로그인</Login></span>
            </NavItem>}
            <NavItem>
            </NavItem>
        </Navigation>
    )
};