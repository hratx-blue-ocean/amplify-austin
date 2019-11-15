// import React from "react";
// import { shallow } from "enzyme";
// import Header from "./header";

// const initialize = (props = {}) => {
//   const component = shallow(<Header {...props} />);
//   return component;
// };

// const findByTestAttr = (component, attr) => {
//   const wrapper = component.find(`[data-test='${attr}']`);
//   return wrapper;
// };

// describe("Header Component Structure", () => {
//   let component;
//   beforeEach(() => {
//     component = initialize();
//   });

//   it("should render a MapOutlinedIcon", () => {
//     component = shallow(<Header />);
//     const wrapper = component.find("MapOutlinedIcon");
//     console.log(wrapper);
//     expect(wrapper.length).toBe(1);
//   });
//   it("should render a MenuIcon", () => {
//     const wrapper = component.find("MenuIcon");
//     expect(wrapper.length).toBe(1);
//   });
//   it("should render a div with a data-test HeaderContainer", () => {
//     const wrapper = findByTestAttr(component, "HeaderContainer");
//     expect(wrapper.length).toBe(1);
//   });
// });

// describe("Header Component State", () => {
//   let component;
//   beforeEach(() => {
//     component = initialize();
//   });
//   it("Should have a menuToggle state", () => {
//     expect(component.state().menuIsToggled).toBe(false);
//   });
// });

// describe("Header Functionality", () => {
//   let component;
//   beforeEach(() => {
//     component = initialize();
//   });
//   it("Should be able to click menu", () => {
//     const wrapper = component.find("MenuIcon");
//     wrapper.simulate("click", {});
//     expect(component.state().menuIsToggled).toBe(true);
//   });
// });
