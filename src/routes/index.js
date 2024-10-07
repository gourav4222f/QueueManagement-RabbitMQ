const express = require("express")
const router = express.Router()


/*
* Routes virsion imports
*/
const v1routes = require("./v1")




/*
* Routes monting
*/
router.use("/v1",v1routes)




/*
* Routes exports
*/
module.exports = router;