import Counter from "./Counter"

import { shallow } from "enzyme"

describe("Counter Testing", () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Counter />)
  })
  test("render the title of counter", () => {
    expect(wrapper.find("h1").text()).toContain("Counter")
  })

  test("render a button with `increment` text", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment")
  })

  test("Initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0")
  })

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("1")
  })
})
