const express = require("express");
const cookieParser = require("cookie-parser");
const {connectToMongoDb} = require("./connect")
const path = require("path")
const { checkForAuthorization, restrictTo } = require("./middlewares/auth")
require('dotenv').config();

const URL = require("./models/url")
const app = express();
const PORT = process.env.PORT || 8001;

const staticRouters = require("./routes/staticRouters")
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user")

app.use(express.json());
app.use(express.urlencoded({ extended : false}))
app.use(cookieParser());
app.use(checkForAuthorization);

connectToMongoDb()

app.set("view engine", "ejs");
app.set("views",path.resolve("./views"));


app.use("/url",restrictTo(["NORMAL", "ADMIN"]), urlRoute);
app.use("/",  staticRouters);
app.use("/user", userRoute);

app.get('/url/:shortId', async (req, res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory:{
                    timestamp: Date.now(),
                }
            },
        }
    );
    res.redirect(entry.redirectUrl)

})

app.listen(PORT, ()=> console.log(`server started at PORT:${PORT}`));
