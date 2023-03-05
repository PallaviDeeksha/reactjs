import React from 'react'
import STYLE from "./menu.module.css"
 const Menu = () => {
  return (
    <div>
        <div id={STYLE.menuBlock}>
        <ul>
            <li>
                    <a href="">Music</a>
            </li>
            <li>
                    <a href="">Podcasts</a>
            </li>
            <li>
                    <a href="">Log In</a>
            </li>
            <li>
                    <a href="">Sign In</a>
            </li>

        </ul>
</div>
</div>
  )
    
}
export default Menu