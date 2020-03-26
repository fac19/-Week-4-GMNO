const supertest = require("supertest");
const router = require("../source/router");
const test = require("tape");;

test("Home route returns a status code of 200", t => {
    supertest(router)
        .get("/")
        .expect(200)
        .expect("content-type", "text/html")
        .end((err, res) => {
            t.error(err);
            t.equal(res.text, "<h1>Hello, this was a success</h1>");
            t.end();
        });
});