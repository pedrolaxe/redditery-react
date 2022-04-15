import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Gallery from '../../components/Gallery/Gallery';

const Home = () => {

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
            })
      }
    
      fetchData("pics", "hot");
    }, []);

    return (
        <Gallery ApiData={resultsAPI} />
      )
}
export default Home