import React from "react";
import { Link, useHistory } from "react-router-dom";

import { MenuStyle } from "./MenuStyle";
import LogoReddit from "../../assets/images/reddit.png";
const Menu = () => {
  const history = useHistory();

  // function handleSubmit(e) {
    
  //   e.preventDefault();
    
  //   if(e.target.s.value.length > 0){
  //     console.log('searched -> '+ e.target.s.value);
  //     history.push('/r/'+e.target.s.value);}
  //     e.target.s.value = '';
  // }

  return (
    <MenuStyle>
      <div>
        <div className="menu-links">
          <div className="reddit-logo">
          <Link
                to={{
                  pathname: "/",
                }}
              >
                <img src={LogoReddit} alt="logo" width="30" />
              </Link>
          </div>
          <ul>
            <li>
              <Link
                to={{
                  pathname: "/",
                }}
              >
                ALL
              </Link>
            </li>
            ・
            <li>
              <Link
                to={{
                  pathname: "/r/funny",
                }}
              >
                FUNNY
              </Link>
            </li>
            ・
            <li>
              <Link
                to={{
                  pathname: "/r/pics",
                }}
              >
                PICTURES
              </Link>
            </li>
            ・
            <li>
              <Link
                to={{
                  pathname: "/r/gifs",
                }}
              >
                GIFS
              </Link>
            </li>
            ・
            <li>
              <Link
                to={{
                  pathname: "/r/adviceanimals",
                }}
              >
                MEMES
              </Link>
            </li>
            ・
            <li>
              <Link
                to={{
                  pathname: "/r/wtf",
                }}
                className="error"
              >
                WTF
              </Link>
            </li>
            ・
            <li>
              <Link
                to={{
                  pathname: "/r/mildlyinteresting",
                }}
              >
                INTERESTING
              </Link>
            </li>
            ・
            <li>
              <Link
                to={{
                  pathname: "/r/aww",
                }}
              >
                CUTE
              </Link>
            </li>
            ・
            <li>
              <Link
                to={{
                  pathname: "/r/gaming",
                }}
              >
                GAMING
              </Link>
            </li>
            ・
            <li>
              <Link
                to={{
                  pathname: "/r/earthporn",
                }}
              >
                EARTH
              </Link>
            </li>
            ・
            <li>
              <Link
                to={{
                  pathname: "/r/roomporn",
                }}
              >
                ROOMS
              </Link>
            </li>
            ・
            <li>
              <Link
                to={{
                  pathname: "/r/food",
                }}
              >
                FOOD
              </Link>
            </li>
            ・
            <li>
              <Link
                to={{
                  pathname: "/r/art",
                }}
              >
                ART
              </Link>
            </li>
          </ul>
        </div> 

        <div className="menu-options">
          {/* <form onSubmit={handleSubmit}> */}
            <ul>
            <li>
              <Link
                to={{
                  pathname: "/r/new",
                }}
              >
                  NEW
              </Link>
            </li>
            ・ BEST OF :
          </ul>
            
            <select defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>-</option>
              <option value="day">TODAY</option>
              <option value="week">THIS WEEK</option>
              <option value="month">THIS MONTH</option>
              <option value="year">THIS YEAR</option>
              <option value="all">ALL TIME</option>
            </select>
            
          {/* </form> */}
        </div>

      </div>
    </MenuStyle>
  )

}

export default Menu