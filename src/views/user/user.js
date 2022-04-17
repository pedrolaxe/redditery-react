import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams} from 'react-router-dom';
import Gallery from '../../components/Gallery/Gallery';

const User = () => {
  
  const history = useHistory();
  const { user_reddit } = useParams();
  const [resultsAPISub, setResultsAPISub] = useState([]);

    useEffect(() => {
      if (user_reddit.length >0) {
        console.log("inside sub -> ",user_reddit.trim());
        
        const fetchData = () => {
          axios.get('https://www.reddit.com/user/'+user_reddit.trim()+'/submitted.json')
    
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
    }, [history, user_reddit, resultsAPISub]);

    return (
      <Gallery ApiData={resultsAPISub} />
      )
}
export default User