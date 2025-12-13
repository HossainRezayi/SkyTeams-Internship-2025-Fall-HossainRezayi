const TrafficLight = require("./question-12");

test("Traffic Light System using switch-case ", () => {
  expect(TrafficLight("Green")).toBe("Go");
});

test("Traffic Light System using switch-case ", () => {
  expect(TrafficLight("Red")).toBe("Stop");
});

test("Traffic Light System using switch-case ", () => {
  expect(TrafficLight("Yellow")).toBe("Ready");
});
