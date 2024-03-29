import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams} from 'react-router-dom';
import Gallery from '../../components/Gallery/Gallery';

const SubReddit = () => {
  
  const history = useHistory();
  const { subreddit } = useParams();
  const [resultsAPISub, setResultsAPISub] = useState([]);

    useEffect(() => {
      if (subreddit.length >0) {
        console.log("inside sub -> ",subreddit.trim());
        
        const fetchData = () => {
          axios.get('https://www.reddit.com/r/'+subreddit.trim()+'/hot.json')
    
            .then((response) => {
              setResultsAPISub(response.data['data'].children)
            })
            .catch(error => {
              console.log(error.message)
              console.error("Reddit API error")
            })
      }
    
      fetchData();
    }else {
      history.push('/');
    }
    }, [history, subreddit]);

    return (
      <Gallery ApiData={resultsAPISub} />
      )
}
export default SubReddit