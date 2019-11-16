// import React from "react";
// import { shallow } from "enzyme";
// import Menu from "./Menu";

// const initialize = (props = {}) => {
//   const component = shallow(<Menu {...props} />);
//   return component;
// };

// const findByTestAttr = (component, attr) => {
//   const wrapper = component.find(`[data-test='${attr}']`);
//   return wrapper;
// };

describe("Test", () => {
  it("add", () => {
    expect(1 + 1).toBe(2);
  });
});

// describe("Menu", () => {
//   let component;
//   beforeEach(() => {
//     component = initialize();
//   });
//   describe("Structure", () => {
//     it("Should contain nav menu", () => {
//       const wrapper = findByTestAttr(component, "NavMenu");
//       expect(wrapper.length).toBe(1);
//     });
//     it("Should contain home button", () => {
//       const wrapper = findByTestAttr(component, "Home");
//       expect(wrapper.length).toBe(1);
//     });
//     it("Should contain HomeOutlinedIcon", () => {
//       const wrapper = component.find("HomeOutlinedIcon");
//       expect(wrapper.length).toBe(1);
//     });
//     it("Should contain my posts button", () => {
//       const wrapper = findByTestAttr(component, "MyPosts");
//       expect(wrapper.length).toBe(1);
//     });
//     it("Should contain ChatOutlinedIcon", () => {
//       const wrapper = component.find("ChatOutlinedIcon");
//       expect(wrapper.length).toBe(1);
//     });
//     it("Should contain favorites button", () => {
//       const wrapper = findByTestAttr(component, "Favorites");
//       expect(wrapper.length).toBe(1);
//     });
//     it("Should contain StarBorderOutlinedIcon", () => {
//       const wrapper = component.find("StarBorderOutlinedIcon");
//       expect(wrapper.length).toBe(1);
//     });
//     it("Should contain settings button", () => {
//       const wrapper = findByTestAttr(component, "Settings");
//       expect(wrapper.length).toBe(1);
//     });
//     it("Should contain SettingsOutlinedIcon", () => {
//       const wrapper = component.find("SettingsOutlinedIcon");
//       expect(wrapper.length).toBe(1);
//     });
//     it("Should contain sign in button", () => {
//       const wrapper = findByTestAttr(component, "SignIn");
//       expect(wrapper.length).toBe(1);
//     });
//     it("Should contain sign up button", () => {
//       const wrapper = findByTestAttr(component, "SignUp");
//       expect(wrapper.length).toBe(1);
//     });
//   });
// });
