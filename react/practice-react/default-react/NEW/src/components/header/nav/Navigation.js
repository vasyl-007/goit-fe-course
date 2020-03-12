import React from 'react'
import css from "./Navigation.moudle.css";


const Navigation = () => ( //sl
    <div className={css.navigationList}>
        <nav>

            
            <ul>
                <li>
                    <a href="#" className={css.navlink}>Home</a>
                </li>
            </ul>

        </nav>

    </div>
);

export default Navigation;