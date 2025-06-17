const request = require("supertest");
const app = require("../server");

let server;

beforeAll((done) => {
  server = app.listen(0, done); // Démarre le serveur avant les tests
});

afterAll((done) => {
  server.close(done); // Ferme le serveur après tous les tests
});

describe("GET /", () => {
  test("respond with hello world", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      "Hello World from cloud campus nemesis cicd devrait passer"
    );
  });
});

describe("GET /nemesis", () => {
  test("respond with route nemesis", async () => {
    const response = await request(app).get("/nemesis");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("route nemesis");
  });
});
