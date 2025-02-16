import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import { getToken, removeToken } from '../authToken.js';
import { removeMessages } from '../chatMessages.js';

function UserAvatar() {
    const [userName, setUserName] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    let navigate = useNavigate(); 

    React.useEffect(() => {
        if (getToken() && !userName) {
            setLoading(true);
            async function fetchData() {
                try {
                    const response = await fetch(`http://localhost:1337/api/users/me`, {
                        headers: { Authorization: `BEARER ${getToken()}` },
                    })
                    let user = await response.json()
                    if (user.data === null){
                        console.error('auth token invalid')
                        removeToken();
                        removeMessages();
                        navigate("/", { replace: true });
                        window.location.reload()
                    }
                    else {
                        console.log('user', user)
                        setUserName(user.first_name)
                    }
                } catch {
                    console.error('couldnt fetch user in userAvatar')
                    removeToken();
                    removeMessages();
                    navigate("/", { replace: true });
                    window.location.reload()
                } finally {
                    setLoading(false);
                }
            }
            fetchData();
        }
    }, []);
    if (!loading && userName){
        return (
            <Avatar sx={{ color: '#1d1d1d', fontFamily: "Times New Roman" }}>{userName[0]}</Avatar>
        )
    }
}

export default UserAvatar