const tryImport = require(".")
const test = require("ava")

test("main", (t) => {
	t.is(tryImport("./fixtures/real"), "Hello World!")
	t.is(tryImport("./fixtures/fake"), undefined)
	t.is(tryImport.resolve("./fixtures/real"), require.resolve("./fixtures/real"))
	t.is(tryImport.resolve("./fixtures/fake"), undefined)
})
