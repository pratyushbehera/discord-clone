import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import './App.css';
import Drawer from '@material-ui/core/Drawer';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { login, logout } from "./features/userSlice";

const App = () => {
    let dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(login({
                    uid: authUser.uid,
                    photo: authUser.photoURL,
                    email: authUser.email,
                    displayName: authUser.displayName
                }))
            }
            else {
                dispatch(logout());
            }
        })
    }, [dispatch]);

    const [drawer, setDrawer] = useState(false);

    const openMenu = () => {
        setDrawer(!drawer);
    }

    return <div className="app">
        {user ?
            <>
                <Sidebar onClose={null}/>
                <Drawer anchor={"left"} open={drawer} onClose={openMenu}>
                    <Sidebar open={drawer} onClose={openMenu}/>
                </Drawer>
                <Chat openMenu={openMenu} />
            </>
            :
            <Login />

        }

    </div>
}

export default App;