const supertest = require("supertest");
const router = require("../source/router");
const test = require("tape");;


test("Blog home route returns a status code of 200", t => {
    supertest(router)
        .get("/")
        .expect(200)
        .expect("content-type", "text/html")
        .end((err, res) => {
            t.error(err);
            t.equal(res.text.includes('<title>Blog<title>'), true);
            t.end();
        });
});

test("Blog home page includes the form", t => {
    supertest(router)
        .get("/")
        .expect(200)
        .expect("content-type", "text/html")
        .end((err, res) => {
            t.error(err);
            t.equal(res.text.includes('<section class="form-wrapper">'), true);
            t.end();
        });
});
