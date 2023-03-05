import React from 'react'
import STYLE from "./footer.module.css"

const Footer = () => {
  return (
    <div>
        <div id={STYLE.footerBlock}>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Search</a>
                </li>
                <li>
                    <a href="">My Library</a>
                </li>
                <li>
                    <a href="">Pro</a>
                </li>
            </ul>

        </div>
    </div>
  )
}
export default Footer