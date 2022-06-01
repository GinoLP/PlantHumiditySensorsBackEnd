const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)

describe("/sensors endpoint", () => {
    it("post call should return correct json", async () => {
        await request.post("/sensors")
            .send({
                "name": "monstera",
                "plantName": "Begonia Maculata",
                "minHumidity": 5,
                "maxHumidity": "10"
            })
            .expect((res) => {
                res.body.name = "monstera";
                res.body.plantName = "Begonia Maculata";
                res.body.minHumidity = 5;
                res.body.maxHumidity = 10;
            })
    })
})