const shortid = require("shortid");
const URL = require("../models/url");

async function handleGeneratNewShortUrl(req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error : "url required"});

    const existingUrl = await URL.findOne({ redirectUrl: body.url, createdBy: req.user._id });
    if(existingUrl){
        const allUrls = await URL.find({createdBy: req.user._id});
        return res.render("home", {
            id:existingUrl.shortId,
            urls: allUrls,
        })
    }
    const shortId = shortid.generate();
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });

    const allUrls = await URL.find({createdBy: req.user._id});
    
    return res.render("home", {
        id: shortId,
        urls: allUrls,
    });
}

async function handleGetAnalytic(req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
}

module.exports = {
    handleGeneratNewShortUrl,
    handleGetAnalytic
}