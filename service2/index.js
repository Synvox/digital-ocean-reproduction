const app = require("express")();
const { faker } = require("@faker-js/faker");

app.use((_, res) => {
  res.send(`Hello from service 2 (${faker.lorem.words(5)})`);
});

app.listen(4050);
