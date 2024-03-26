const JsonToFormData = require('./../src');
test("Checking hello world", () => {
    expect(JsonToFormData()).toBe("hello NPM");
});