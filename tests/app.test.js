const request = require("supertest");
const app = require("../server");

beforeAll(async () => {
  await app.listen(3000);
});

afterAll(async () => {
  await app.close();
});

describe("GET /", () => {
  test("respond with hello world", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      "Hello World from cloud campus nemesis v2! branch dev modification"
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
