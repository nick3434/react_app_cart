const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/api/checkout", (req, res) => {
    const { id, amount } = req.body;
    console.log("id:", id);
    console.log("amount:", amount);
    res.status(200).json({
        message: "Payment Successful", success: true
    });
})
app.listen(5001, () => {
    console.log("Server is running on port 5001");
});