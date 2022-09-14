import restaurant from "../CssModules/RestaurantRegister.module.css";
import ukr from "../img/ukraine.png";
import ger from "../img/germany.jpg";
import bel from "../img/belarus.png";
import React from "react";

export default function PhoneNumber({CountryChange}) {
    return(
        <div className={restaurant.CountryTypeMenu}>
            <div className={restaurant.CountryTypeMenuItem}
                 onClick={() => CountryChange('Ukraine')}>
                <img src={ukr} alt="Ukraine"/>
                <span>Ukraine</span>
                <span>(+380)</span>
            </div>
            <div className={restaurant.CountryTypeMenuItem}
                 onClick={() => CountryChange('Germany')}>
                <img src={ger} alt="Germany"/>
                <span>Germany</span>
                <span>(+49)</span>
            </div>
            <div className={restaurant.CountryTypeMenuItem}
                 onClick={() => CountryChange('Belarus')}>
                <img src={bel} alt="Belarus"/>
                <span>Belarus</span>
                <span>(+375)</span>
            </div>
        </div>
    )
}