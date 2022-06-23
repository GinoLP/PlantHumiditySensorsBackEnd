const {app, server} = require("./app");
const supertest = require("supertest");
const request = supertest(app);
const { connectDB, disconnectDB } = require('./mockingMongo');

describe("/sensors endpoint", () => {
    beforeAll(() => {
        connectDB();
    });

    afterAll(() => {
        disconnectDB();
        server.close();
    });

    it("post call should return correct json", async () => {
        const response = await request
            .post('/sensors')
            .send({
            name: "monstera",
            plantName: "Begonia Maculata",
            minHumidity: 5,
            maxHumidity: 10
            });

        expect(response.body.name).toBe("monstera");
        expect(response.body.plantName).toBe("Begonia Maculata");
        expect(response.body.minHumidity).toBe(5);
        expect(response.body.maxHumidity).toBe(10);
    })
})