import React from "react"
import STYLE from "./meesho.module.css"

const Meesho=()=> {
    return(
        <div>
        <nav>
            <logo>
                {/*<div id ={STYLE.logoBlock}>*/}

                          <img src="https://etimg.etb2bimg.com/photo/86809724.cms"></img>
               {/* </div>*/}
            </logo>
            <menu>
                <div id ={STYLE.menuBlock}>
                    <ul>
                        <li> <a href="">WISHLIST</a></li>
                        <li> <a href="">CART</a> </li>
                        <li> <a href="">LOGIN</a></li>
                        <li> <a href="">PROFILE</a></li>

                    </ul>

                </div>
            </menu>
            </nav>
            <footer>
                <div id ={STYLE.footerBlock}>
                    <ul>
                        <li> <a href="">HOME</a></li>
                        <li> <a href="">CATEGORIES</a> </li>
                        <li> <a href="">MY ORDERS</a></li>
                        <li> <a href="">HELP</a></li>
                        <li> <a href="">ACCOUNT</a></li>
                    </ul>
                </div>           
            </footer>
         
        </div>
            )
}
export default Meesho