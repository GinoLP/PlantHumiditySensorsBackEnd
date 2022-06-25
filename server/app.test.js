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
            .send(sensors[0]);

        expect(response.body.name).toBe("monstera");
        expect(response.body.plantName).toBe("Begonia Maculata");
        expect(response.body.minHumidity).toBe(5);
        expect(response.body.maxHumidity).toBe(10);
    })

    it("get all should return all the elements in the collection", async() =>{
        sensors.forEach(sensor => await request.post('/sensors').send(sensor));
    })
})

const sensors = [{
    name: "monstera",
    plantName: "Begonia Maculata",
    minHumidity: 5,
    maxHumidity: 10
},{
    name: "plant1",
    plantName: "plant1Name",
    minHumidity: 6,
    maxHumidity: 44
},{

},{
    name: "plant2",
    plantName: "plant2Name",
    minHumidity: 7,
    maxHumidity: 202
}]