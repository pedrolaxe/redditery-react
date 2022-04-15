import React, { useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Home from './views/home/home';
import SubReddit from './views/sub/sub';
import User from './views/user/user';
import MainContent from './components/MainContent/MainContent';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

//others
import './App.css';
import GlobalStyle from './GlobalStyle';

const App = () => {
    
    const [isConstruction, setConstruction] = useState(false);

    return (
        <>
        <GlobalStyle />
        <MainContent>
           
            <Router forceRefresh={true}>
                {
                isConstruction ?
                    <div style={{ textAlign: 'center', marginTop: 180 }}>
                        <h1>MAINTENANCE MODE</h1>
                    </div>
                    : (
                        <>
                         <Menu />
                            <Switch>
                                <Route path="/r/:subreddit" component={SubReddit} />
                                <Route path="/user/:user_reddit" component={User} />
                                <Route path="/" component={Home} />
                            </Switch>
                         <Footer />    
                        </>
                    )
                    }
            </Router>
        </MainContent>
        </>
    );

}

export default App;