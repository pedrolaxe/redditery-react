import React, { useEffect, useState, useCallback, createRef } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

//views

//components
import MainContent from './components/MainContent/MainContent';
import Menu from './components/Menu/Menu';

//others
import GlobalStyle from './GlobalStyle';

const App = () => {
    const [isConstruction, setConstruction] = useState(false);

    return (
        <GlobalStyle />,
        <MainContent>
            <Router>
                {
                    isConstruction ?
                    <div style={{ textAlign: 'center', marginTop: 180 }}>
                        <h1>PÁGINA EM CONSTRUÇÃO</h1>
                    </div>
                : (
                    <>
                    <Switch>
                        <Route path="/" component={Menu} />
                        {/* <Route component={NotFound} /> */}
                    </Switch>
                    </>
                )
                }
            </Router>
        </MainContent>
    );

}

export default App;