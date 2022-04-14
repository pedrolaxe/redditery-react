import React from "react";
import { Link } from "react-router-dom";

import { MenuStyle } from "./MenuStyle";

const Menu = () => {
  return (
    <MenuStyle>
      <div>
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
          
        </ul>
      </div>
    </MenuStyle>
  )

}

export default Menu