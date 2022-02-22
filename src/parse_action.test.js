import parseActions from "./parse_action";

test('with no action', () => {
  const actions = [];
  const result = [];
  expect(parseActions("AC", actions)).toEqual(result);
});

test('with a bet', () => {
  const actions = [{initials: "AC", bet: 10}];
  const result = [10];
  expect(parseActions("AC", actions)).toEqual(result);
});

test('with a bet from someone else', () => {
  const actions = [{initials: "TC", bet: 10}];
  const result = [];
  expect(parseActions("AC", actions)).toEqual(result);
});

test('with a check', () => {
  const actions = [{initials: "AC", action: "check"}];
  const result = ["x"];
  expect(parseActions("AC", actions)).toEqual(result);
});

test('with a fold', () => {
  const actions = [{initials: "AC", action: "fold"}];
  const result = [""];
  expect(parseActions("AC", actions)).toEqual(result);
})