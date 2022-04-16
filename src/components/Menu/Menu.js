import React from "react";
import { Link, useHistory } from "react-router-dom";

import { MenuStyle } from "./MenuStyle";

const Menu = () => {
  const history = useHistory();

  function handleSubmit(e) {
    
    e.preventDefault();
    
    if(e.target.s.value.length > 0){
      console.log('searched -> '+ e.target.s.value);
      history.push('/r/'+e.target.s.value);}
      e.target.s.value = '';
  }

  return (
    <MenuStyle>
      <div>
        <div className="menu-links">
          <ul>
            <li>
              <Link
                to={{
                  pathname: "/",
                }}
              >
                HOME
              </Link>
            </li>

            <li>
              <Link
                to={{
                  pathname: "/r/videos",
                }}
              >
                VIDEOS
              </Link>
            </li>

            <li>
              <Link
                to={{
                  pathname: "/r/funny",
                }}
              >
                FUNNY
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/r/cats",
                }}
              >
                CATS
              </Link>
            </li>
          </ul>
        </div>

        <div className="menu-options">
          <form onSubmit={handleSubmit}>
            <select>
              <option value="hot">hot</option>
              <option value="new">new</option>
              <option value="top">top</option>
            </select>
            
            <input type="text" name="s" placeholder="search subreddits" />
            <button type="submit">Search</button>
          </form>
        </div>

      </div>
    </MenuStyle>
  )

}

export default Menu