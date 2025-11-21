const ConvertSecsIntoHoursAndMins = require("./question-6");

test("Convert total seconds into hours, minutes, and seconds ", () => {
  expect(ConvertSecsIntoHoursAndMins(3665)).toEqual([1, 1, 5]);
});

test("Convert total seconds into hours, minutes, and seconds ", () => {
  expect(ConvertSecsIntoHoursAndMins(3665)).not.toEqual([0, 61, 5]);
});

test("Convert total seconds into hours, minutes, and seconds ", () => {
  expect(ConvertSecsIntoHoursAndMins(3665)).not.toEqual([1, 0, 65]);
});
