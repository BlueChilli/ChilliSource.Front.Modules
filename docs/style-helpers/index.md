# Style Helpers

This starter project contains a number of useful style helpers to get you started on your implementation. Designed with 8-point grid in mind - which is what our designers use - you can be sure using these classes will definitely help you in reproducing their designs to the pixel-perfect standard.

The folder contains the following files:

- `index.scss`
- `buttons.scss`
- `variables.scss`
- `form.scss`
- `layout.scss`
- `spacing.scss`
- `typography.scss`
- `react-widgets.scss`

<br />

## Getting Started

You should start by importing `style-helpers`/`index.scss` into your entry point component. This way, you get all the styles and are ready to go. After that,

> You should definitely edit these files. Its the one place for you to brand the app to your liking.

- `index.scss`
- `variables.scss`

You might have to, very rarely, once-in-a-while, might have to make changes to the following files:

- typography.scss

You will use classes from other files but you never have to look into them at all. They preconfigured to work as you'd expect. You should absolutely read on but can rest assured, those files are good to roll.

<br />

## Colors

> Should be updated in variables.scss

List of variables:

Background Colors(_generally associated with branding_)

- `$primaryColor` : This is the main color everywhere - links, primary buttons, caret, text selection, etc.. **REQUIRED**
- `$darkPrimaryColor` : optional. If not provided, will self compute. Comment it out if you don't need it.
- `$secondaryColor`: The background color to denote secondary actions like a cancel button **REQUIRED**

Text Colors

- `$primaryTextColor`: The main color of text everywhere
- `$secondaryTextColor`: The color for secondary actions like a cancel button
- `headingTextColor`: The color used for heading i.e. h1, h2, h3, h4, etc..
- `primaryButtonTextColor`: This is the color used for primary actions - login, sign up, call-to-actions, etc. Make sure it is contrasting enough with respect to `$primaryColor`

When you start your project, take the colors from Zeplin's "Style Guide" and update the variables there.

Do not worry if your project doesn't have all these colors to update. Leave them be. **DO NOT COMMENT THEM OUT**

For the project to work properly, it **NEEDS** all the variables apart from `$darkPrimaryColor` to exist. **DO NOT REMOVE OR COMMENT THEM OUT**

<br />

## Fonts

It's quite upto the developer to choose whether to use [embedded Google Fonts](#embedded-google-fonts) or to [include source files](#adding-font-source-files) with the project. I'm one who does the latter, but up to you.

#### Embedded Google Fonts

Since you won't be providing the source files, you can't unfortunately use `@font-face` declaration since this is being done behind the scenes by Google Fonts itself.

Steps:

1. Go to `style-helpers`/`index.scss`
2. Follow the instructions there to embed the font(s)

#### Adding Font Source Files

1. Download the source font files to your computer
2. Go to [Font Squirrel](https://www.fontsquirrel.com/tools/webfont-generator) and compress your fonts. Let the settings be at optimal.
3. Follow the instructions in `style-helpers`/`index.scss`

<br />

## Layout

The classes in this section help in arranging items inside a container i.e. `div`, `button`, `p`, etc..

The list below is of class names. Add it to a containing element and the styles will be applied to it. Apart from the first one i.e. `flex`, all the others are used in conjugation with the `flex` class.

| Class Name | Description                                                                                                                                 | Example                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `flex`     | Arranges the children of the containing element in a flex arrangement. Default is **horizontal**, floating left and **vertically centered** | `<element className="flex" />`        |
| `center`   | Children are centered **vertically** and **horizontally**                                                                                   | `<element className="flex center" />` |
| `end`      | Children are centered **vertically** and **floating right**                                                                                 | `<element className="flex end" />`    |
| `bottom`   | Children are positioned at **vertically bottom** of the container                                                                           | `<element className="flex bottom" />` |
| `col`      | Switching the **arrangement to vertical** instead of horizontal                                                                             | `<element className="flex col" />`    |
| `wrap`     | Modifies hte behaviour so that flex items can flow through to a new line rather than compressing all items into a single line               | `<element className="flex wrap" />`   |

<br />

## Spacing

The classes in this section help in adding spacing between elements, whether it be [padding](#padding) or [margins](#margins).

### Padding

| Class Name                | Description                                                                                     | Example            |
| ------------------------- | ----------------------------------------------------------------------------------------------- | ------------------ |
| `padding-<NUMBER>`        | Adds a padding of `8 * NUMBER` px on all sides of the element. NUMBER can be 1 to 12, including | `padding-4`        |
| `padding-top-<NUMBER>`    | Adds a padding top of `8 * NUMBER` px. NUMBER can be 1 to 12, including                         | `padding-top-4`    |
| `padding-right-<NUMBER>`  | Adds a padding right of `8 * NUMBER` px. NUMBER can be 1 to 12, including                       | `padding-right-4`  |
| `padding-bottom-<NUMBER>` | Adds a padding bottom of `8 * NUMBER` px. NUMBER can be 1 to 12, including                      | `padding-bottom-4` |
| `padding-left-<NUMBER>`   | Adds a padding left of `8 * NUMBER` px. NUMBER can be 1 to 12, including                        | `padding-left-4`   |

### Margins

| Class Name               | Description                                                                                    | Example           |
| ------------------------ | ---------------------------------------------------------------------------------------------- | ----------------- |
| `margin-<NUMBER>`        | Adds a margin of `8 * NUMBER` px on all sides of the element. NUMBER can be 1 to 12, including | `margin-1`        |
| `margin-top-<NUMBER>`    | Adds a margin top of `8 * NUMBER` px. NUMBER can be 1 to 12, including                         | `margin-top-1`    |
| `margin-right-<NUMBER>`  | Adds a margin right of `8 * NUMBER` px. NUMBER can be 1 to 12, including                       | `margin-right-1`  |
| `margin-bottom-<NUMBER>` | Adds a margin bottom of `8 * NUMBER` px. NUMBER can be 1 to 12, including                      | `margin-bottom-1` |
| `margin-left-<NUMBER>`   | Adds a margin left of `8 * NUMBER` px. NUMBER can be 1 to 12, including                        | `margin-left-1`   |

<br />

## Form & Form Components

All the form components have been pre-made and pre-styled. Once you update your colors and fonts as [instructed above](#colors), the form components will automagically style themselves.

If you do decide to edit these styles - available in `form.scss` - be aware that it'll affect the entire project. **In most cases**, creating custom component will do the trick. You can refer to creating custom components for `redux-form`'s `Field` component on its [website](https://redux-form.com).

<br />

## Buttons

The styles for the buttons have also been pre-made. All styles, as before, inherit from colors and typography above. So as long as you have completed those two steps above, you need not worry about this modifying styles either.

You can use the button styles as follows:

| Class Name         | Description                                                           | Example                                           |
| ------------------ | --------------------------------------------------------------------- | ------------------------------------------------- |
| `button`           | Base class for any element being displayed like a button              | `<element className="button" />`                  |
| `button-primary`   | Primary button. For e.g. Call To Action                               | `<element className="button button-primary" />`   |
| `button-secondary` | Secondary button. For e.g. Cancel button                              | `<element className="button button-secondary" />` |
| `button-tertiary`  | Tertiary button. For e.g. leat important action in a group of actions | `<element className="button button-tertiary" />`  |
| `button-disabled`  | Disabled button. For e.g. Login button with an incomplete field       | `<element className="button button-disabled" />`  |

<br />

## React Widgets

React widgets are an à la carte set of polished, extensible, and accessible form inputs built for React. We have taken those components and simplified them further for our use case so that they align with our style guide and respect our design principles. All the styles in this file - `react-widgets.scss` - are **REQUIRED**. Please **DO NOT COMMENT THEM OUT** or **DELETE THEM**.
