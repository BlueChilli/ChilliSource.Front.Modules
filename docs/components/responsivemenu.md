# Responsive Menu

The responsive menu is meant to solve the problem of responsive navigation. Shows a hamburger 
on mobile.

## Quick Start

1. React dependencies and CSS.

```js
import {
    MenuItem,
    ResponsiveMenu,
    SubMenuItem
} from "./components/ResponsiveMenu/index";

import "./components/ResponsiveMenu/css.css";
```

2. Menu boilerplate

```js

<ResponsiveMenu right>
    <MenuItem to="/">Home</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem showIf={true} to="/edit">Edit</MenuItem>
    <SubMenuItem label="Drop Down">
        <MenuItem to="/disney">Go To Disneyland</MenuItem>
        <MenuItem to="/air-guitar">Air Guitar</MenuItem>
    </SubMenuItem>
    <MenuItem to="/test">Test</MenuItem>
    <MenuItem to="/ping">Ping This</MenuItem>
</ResponsiveMenu>
```


