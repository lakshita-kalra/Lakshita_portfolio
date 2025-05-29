const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(__dirname));
app.use(express.json());

// Handle form submission
app.post("/contact", (req, res) => {
  const newMessage = req.body;

  fs.readFile("messages.json", "utf8", (err, data) => {
    let messages = [];

    if (!err && data) {
      messages = JSON.parse(data);
    }

    messages.push(newMessage);

    fs.writeFile("messages.json", JSON.stringify(messages, null, 2), err => {
      if (err) {
        return res.status(500).json({ message: "Error saving message." });
      }
      res.json({ message: "Message sent successfully!" });
    });
  });
});

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"home.html"));
});


app.get("/hello", (req,res)=>{
    res.send("kjsbfnfsdsef");
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});