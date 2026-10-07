const express = require("express");
const app = express();

const carRoutes = require("./routes/carRoutes");
const userRoutes = require("./routes/userRouter");

app.use(express.json());

app.use("/api/cars/v1", carRoutes);
app.use("/api/users/v1", userRoutes);

app.get("/", (req, res) => {
  res.send("MVC API is running");
});

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
