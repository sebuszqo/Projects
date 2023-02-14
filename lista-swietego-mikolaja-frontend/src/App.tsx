import React from 'react';
import './App.css';
import {GiftsView} from "./views/GiftsView";
import {Link, Route, Routes} from "react-router-dom";
import {NotFoundView} from "./views/NotFoundView";

function App() {
    return (
        <>
            {/*it should be in other component too but for learning purpose it's here */}
            <h1>Santa App</h1>
            Menu: <Link to={'/gift'}>Switch to gifts</Link> |
            <Link to={'/'}>Switch to main</Link>
            <Routes>
                {/*<Route path='/' element={<MainView/>}/>*/}
                <Route path='/gift' element={<GiftsView/>}/>
                <Route path='/child' element={<GiftsView/>}/>
                <Route path='*' element={<NotFoundView/>}/>
            </Routes>
        </>
    );
}

export default App;
