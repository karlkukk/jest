const {
  findLongestString,
  checkTheEnding,
  fetchUser,
} = require("./functions.js");

test("array", () => {
    expect(findLongestString(['welcome' ,'hey', 'hello'])).toBe('welcome');
  });


test("strings", () => {
  expect(checkTheEnding('welcome', 'ome')).toBe(true);
  expect(checkTheEnding('welcome', 'end')).toBe(false);
  expect(checkTheEnding('', 'end')).toBe('Both strings are required');
});

test("fetched user's name should be Clementine Bauch", async () => {
  const data = await fetchUser(3);
  console.log(data.name);
  expect(data.name).toBe("Clementine Bauch");
});


