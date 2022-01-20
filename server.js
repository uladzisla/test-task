import express from "express";
import cors from "cors";

const app = express();
const port = 3000;
const corsOptions = {
    origin: "*",
    credentials: true, 
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.get("/", (request, response) => {
response.send("Hello from Express!");
});

const users = [
    {
    name: "Tom",
    mail: "tomhanks@gmail.com",
    password: "run_Forrest",
    },
    {
    name: "Anthony",
    mail: "anthony_hopkins@gmail.com",
    password: "SilenceOfTheLambs",
    },
    {
    name: "Morgan",
    mail: "morgan-freeman@gmail.com",
    password: "darkKnight123",
    },
];

app.get("/users", (req, res) => {
res.send(users);
});

app.listen(port, (err) => {
if (err) {
return console.log("something bad happened", err);
}
console.log(`server is listening on ${port}`);
});