import demo from "./demo"

describe("demo", () => {
  it("should return 101", () => {
    expect(demo()).toBe(101)
  })
  it("should return 201", () => {
    expect(demo(11)).toBe(201)
  })
})
