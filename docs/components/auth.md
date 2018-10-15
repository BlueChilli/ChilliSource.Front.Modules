# Authentication

Most of the BlueChilli projects use the same backend framework and as a result, have the exact same APIs for user management. Therefore, use this module **ONLY IF** you are using the [Account](account.md) module.

## Getting Started

This module contains two wrappers, _NOT_ an actual component. They are `requireAuthentication` & `doNotRequireAuthentication`;

Import it as such: <br>
`import {requireAuthentication, doNotRequireAuthentication} from '../modules/Auth'`

## Usage

Ideally, you'd be using `react-route-dom`(React React 4 for the browser) as your navigation system and therefore, using these wrappers is a piece of cake.

You can wrap any component in these wrappers in a route like so: <br>
`<Route path="..." component={requireAuthentication(<YOUR_COMPONENT_HERE>)} />`

Even if you are not using the routing system, you can still wrap any component in these wrappers and it'll work.

## Description

- `requireAuthentication` <br>
  This wrapper ensures that your component will only be loaded into the DOM if the user is logged in. If not, it'll redirect the user to the login page.

- `doNotRequireAuthentication` <br>
  This wrapper ensures user can't see the pages like sign up survey etc. whilst they are still logged in. If you have any sort of account management, it's generally a good idea to wrap components that can be seen by the user while they are not logged in with this wrapper.
