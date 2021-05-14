var express = require('express');
const router = express.Router();
const axios = require('axios')
const cheerio = require('cheerio')
const functions = require('./functions')


//**********************************************
router.post('/links', async (req, res) => {
    
    const data = await functions.scrapLinks(req.body.url)
    return res.send(data)

})

router.post('/scripts', async (req, res) => {

    const data = await functions.scrapJS(req.body.url)
    return res.send(data)

})

router.post('/images', async (req, res) => {

    const data = await functions.scrapImages(req.body.url)
    return res.send(data)

})




module.exports = router;