import React from "react";
import MenuItem from "../MenuItem";
import { shallow } from "enzyme";

describe("<MenuItem />", () => {
    // without `to` prop, got a warning due to prop-types required
    const menuItemComponent = shallow(<MenuItem to="/" />);

    // What does MenuItem Render?
    it("should always render one Link Tag", () => {
        expect(menuItemComponent.find("Link").length).toBe(1);
    });

    // Expect "to" prop to be defined on Link
    const linkComponent = menuItemComponent.find("Link");
    it("Expect 'to' prop to be defined", () => {
        expect(linkComponent.props().to).toBeDefined();
    });
});
