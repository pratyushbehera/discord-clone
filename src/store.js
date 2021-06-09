import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice'
import appReducer from './features/appSlice'
import { combineReducers } from 'redux'


const reducer = combineReducers({
    user: userReducer,
    app: appReducer,
})

export default configureStore({
    reducer
})