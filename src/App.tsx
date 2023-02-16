import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Foo1 } from './Foo';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Foo1 />
            </header>
        </div>
    );
}

export default App;