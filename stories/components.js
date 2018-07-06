import React from 'react';
import {storiesOf} from '@storybook/react';
import BurgerMenu from "./comps/BurgerMenu";
import "./helpers/storybook.css";

const isTest = true;

storiesOf('Components', module)
  .add('Hamburger Menu', () => <BurgerMenu/>);
