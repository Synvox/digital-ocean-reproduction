const app = require("express")();
const moment = require("moment");

app.use((_, res) => {
  res.send(`Hello from service 1 ${moment().format("l")}`);
});

app.listen(4050);
