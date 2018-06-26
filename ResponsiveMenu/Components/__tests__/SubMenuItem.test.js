import React from "react";
import { mount } from "enzyme";
import SubMenu from "../SubMenuItem";

describe("<SubMenu />", () => {
    const onClickWrapper = mount(<SubMenu />);
    const subMenuBtn = onClickWrapper.find(".submenu-item");
    const subMenuComponent = onClickWrapper.find("SubMenu").instance();

    /* renders */
    it("should render correctly", () => {
        expect(
            onClickWrapper.find("li.navbar-responsive__list-item").length
        ).toBe(1);
    });

    /* Testing dropdown working properly based on click */
    it("should render correctly based on click", () => {
        // console.log(onClickWrapper.debug());
        expect(onClickWrapper.find("ul.submenu-items").length).toBe(0);
        subMenuBtn.simulate("click");
        expect(onClickWrapper.find("ul.submenu-items").length).toBe(1);
        // console.log(onClickWrapper.find("ul.submenu-items"));
    });

    it("checking state", () => {
        // console.log(subMenuComponent.state.expanded);
        expect(subMenuComponent.state.expanded).toBe(false);
        subMenuBtn.simulate("click");
        expect(subMenuComponent.state.expanded).toBe(true);
    });

    beforeEach(() => {
        subMenuComponent.setState({ expanded: false });
    });
});
