# Responsive Menu

In this menu, we used [Bootstrap4 Grid System](https://getbootstrap.com/docs/4.0/layout/grid/). For react, please read documentation [Mick's ReactBS4Grid](https://github.com/mickrip/react-bs4grid).

## Main props used in Responsive Menu

These are the only props you should be aware of when using this component.  
Boostrap Grid props can be looked at [Mick's ReactBS4Grid](https://github.com/mickrip/react-bs4grid).
| Props | DataType | Values |
| --------------- | -------------- | -------------------------------------------------------- |
| theme | String | dark / light |
| responsiveWidth | Number/Integer | `767` by default. To decide responsive width of the menu |

## UseCases

> Beware of `classnames`. Especially in left Position Cases, we need `left-navbar`.  
> **Warning prefix** classes are the ones you should be implemented yourself.  
> **Sugar prefix** classes are not required. It is just to make looking good.

### Navbar Positioning Without Logo

#### Right

```
const  JustMenuRight  = () => {
    return (
        <Container  fluid>
            <Row  className="header header-dark warning-height">
                <Col  w="auto"  push="right">
                    <Menu  theme="light"  right  />
                </Col>
            </Row>
        </Container>
    );
};
```

#### Left

```
const JustMenuLeft = () => {
    return (
        <Container fluid>
            <Row className="header header-dark warning-height">
                <Col push="left" className="left-navbar">
                    <Menu theme="light" left />
                </Col>
            </Row>
        </Container>
    );
};
```

### Navbar Positioning With Logo

#### Right

```
const HeaderDarkWithLogoRight = () => {
    return (
        <Container fluid>
            <Row className="header header-dark">
                <Col
                    className="left-navbar"
                    alignItems="center"
                    w="auto"
                    md="auto"
                >
                    <Menu theme="light" left />
                </Col>
                <Col w="auto" sm="auto" push="right">
                    <Logo>
                        <h1>BlueChilli</h1>
                    </Logo>
                </Col>
            </Row>
        </Container>
    );
};
```

#### Left

```
const HeaderDarkWithLogoleft = () => {
    return (
        <Container fluid>
            <Row justifyContent="around" className="header header-dark">
                <Col w="auto" sm="auto">
                    <Logo>
                        <h1>BlueChilli</h1>
                    </Logo>
                </Col>
                <Col alignItems="center" w="auto" push="right">
                    <Menu theme="light" right />
                </Col>
            </Row>
        </Container>
    );
};
```

#### Themeing

> **NOTES**: You have to change the header classnNames such as `header header-dark`

```
/** === Colors === **/
$darkTheme: #212121;
$darkThemeTextColor: #f5f5f5;
$lightTheme: #e0e0e0;
$lightThemeTextColor: #424242;

/** === Header === **/
.header {
    color: $lightThemeTextColor;

    &-light {
        background: $lightTheme;

        .navbar-responsive__list-item {
            a {
                color: $lightThemeTextColor;
            }
            ul.submenu-items {
                background: $lightTheme;
                opacity: 0.9;
                border-color: $lightTheme;
            }
        }

        .bm-burger-bars {
            background: $lightThemeTextColor;
        }

        .bm-cross {
            background: $lightThemeTextColor;
        }

        .bm-menu {
            background: $lightTheme;
        }
    }

    &-dark {
        background: $darkTheme;
        color: $darkThemeTextColor;

        .navbar-responsive__list-item {
            a {
                color: $darkThemeTextColor;
            }
            ul.submenu-items {
                background: $darkTheme;
                opacity: 0.9;
                border-color: $darkTheme;
            }
        }

        .bm-burger-bars {
            background: $darkThemeTextColor;
        }

        .bm-cross {
            background: $darkThemeTextColor;
        }

        .bm-menu {
            background: $darkTheme;
        }
    }
}
```
