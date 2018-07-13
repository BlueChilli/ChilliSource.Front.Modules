import React from "react";
import {
    MenuItem,
    ResponsiveMenu,
    SubMenuItem
} from "../../components/ResponsiveMenu/index";
import "../../components/ResponsiveMenu/css.css";

import { BrowserRouter } from "react-router-dom";

export default class BurgerMenu extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <ResponsiveMenu right style={{ background: "#eee" }}>
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/about">About</MenuItem>
                    <MenuItem showIf={true} to="/edit">
                        Edit
                    </MenuItem>
                    <SubMenuItem label="Drop Down">
                        <MenuItem to="/disney">Go To Disneyland</MenuItem>
                        <MenuItem to="/air-guitar">Air Guitar</MenuItem>
                    </SubMenuItem>
                    <MenuItem to="/test">Test</MenuItem>
                    <MenuItem to="/ping">Ping This</MenuItem>
                </ResponsiveMenu>
            </BrowserRouter>
        );
    }
}
