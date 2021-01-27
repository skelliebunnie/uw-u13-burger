var express = require("express");

var router = express.Router();

// Import the model (hamburgers.js) to use its database functions.
var hamburgers = require("../models/hamburger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  hamburgers.all(function(data) {
    var hbsObject = {
      hamburgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/hamburgers", function(req, res) {
  hamburgers.create([
    "burger_name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/hamburgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  hamburgers.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/hamburgers/:id", function(req, res) {

  hamburgers.destroy(req.params.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
