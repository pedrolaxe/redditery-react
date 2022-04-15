import React, { useEffect, useState, useCallback, createRef } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Home from './views/home/home';
import SubReddit from './views/sub/sub';
import MainContent from './components/MainContent/MainContent';
import Menu from './components/Menu/Menu';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

//others
import './App.css';
import GlobalStyle from './GlobalStyle';

const App = () => {
    const [isConstruction, setConstruction] = useState(false);
    const [resultsAPI, setResultsAPI] = useState([]);

    useEffect(() => {
        const fetchData = async (sub, category) => {
          await axios.get('https://www.reddit.com/r/'+sub+'/'+category+'.json')
    
            .then((response) => {
                setResultsAPI(response.data['data'].children)
                //console.log(resultsAPI);
              
            })
            .catch(error => {
              console.log(error.message)
              console.error("Reddit API error")
              setConstruction(true);
            })
      }
    
      fetchData("pics", "hot");
    }, []);

    return (
        <>
        <GlobalStyle />
        <MainContent>
           
            <Router>
                {
                isConstruction ?
                    <div style={{ textAlign: 'center', marginTop: 180 }}>
                        <h1>PÁGINA EM CONSTRUÇÃO</h1>
                    </div>
                    : (
                        <>
                         <Menu />
                         <Gallery ApiData={resultsAPI} />
                            <Switch>
                                <Route path="/r/:subreddit" component={SubReddit} />
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