var tableData = require("../data/tableData");
var waitData = require("../data/waitData");

module.exports = function(app) {
    app.get("/api/tables", (req, res) => {
      res.json(tableData);
    });
  
    app.get("/api/waitlist", (req, res) => {
      res.json(waitData);
    });
  
    app.post("/api/tables", (req, res) => {
    
      if (tableData.length < 5) {
        tableData.push(req.body);
        res.json(true);
      }
      else {
        waitData.push(req.body);
        res.json(false);
      }
    });
  
    app.post("/api/clear", (req, res) => {
      // Empties out the arrays of data.
      tableData.length = 0;
      waitData.length = 0;
  
      res.json({ ok: true });
    });
  };