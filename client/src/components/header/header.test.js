import React from "react";
import { shallow } from "enzyme";
import Header from "./header";

describe("Header Component Structure", () => {
  const component = shallow(<Header />);
  it("should render one nested divs", () => {
    const wrapper = component.find("div div");
    expect(wrapper.length).toBe(1);
  });
  it("should render a MapOutlinedIcon", () => {
    const wrapper = component.find("MapOutlinedIcon");
    expect(wrapper.length).toBe(1);
  });
  it("should render a MenuIcon", () => {
    const wrapper = component.find("MenuIcon");
    expect(wrapper.length).toBe(1);
  });
  it("should render a div with HeaderContainer", () => {
    const wrapper = component.find(".HeaderContainer");
    expect(wrapper.length).toBe(1);
  });
  it("should have a map icon", () => {
    const wrapper = component.find(".mapIcon");
    expect(wrapper.length).toBe(1);
  });
  it("should have a menu icon", () => {
    const wrapper = component.find(".menuIcon");
    expect(wrapper.length).toBe(1);
  });
});

describe("Header Component State", () => {
  it("Should have a menuToggle state", () => {});
});
