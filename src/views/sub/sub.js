import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const SubReddit = () => {

  const history = useHistory();
  const { subreddit } = useParams();

  useEffect(() => {
    if (subreddit) {
      console.log("inside sub -> ",subreddit);
    } else {
      history.push('/');
    }
  }, [ history, subreddit]);

    return (
        <div>
          <p>
            SubReddit {subreddit}
          </p>
        </div>
      )
}
export default SubReddit