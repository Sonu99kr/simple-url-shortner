const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId: {
        type : String,
        unique : true,
        required : true
    },
    redirectUrl: {
        type : String,
        required : true
    },
    visitHistory: [{timestamp: {type: Number}}],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }
}, 
    {timestamps: true}
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;