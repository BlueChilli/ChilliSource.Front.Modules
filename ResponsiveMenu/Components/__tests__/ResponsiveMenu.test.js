import React from "react";
import { shallow, mount } from "enzyme";
import ResponsiveMenu, { Navbar } from "../ResponsiveMenu";

describe("<ResponsiveMenu />", () => {
    const responsiveMenuWrapper = mount(<ResponsiveMenu />);

    it("renders navbar inside media query", () => {
        responsiveMenuWrapper.setProps({ responsiveWidth: 1000 });
        responsiveMenuWrapper.update(); // u hit me hard
        expect(responsiveMenuWrapper.find("Navbar").length).toBe(1);
    });

    it("renders navbar component", () => {
        const navbarWrapper = shallow(<Navbar />);
        expect(navbarWrapper.find("nav.navbar-desktop").length).toBe(1);
        expect(navbarWrapper.find("ul.navbar-responsive__list").length).toBe(1);
    });

    responsiveMenuWrapper.unmount();
});
