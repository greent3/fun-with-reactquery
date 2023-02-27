const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
const PORT = 8080

app.use(express.json())

app.listen(PORT, () => console.log(`Example api listening at http://localhost:${PORT}`))



{/* This is my fake server */ }
let boxColors = {
    0: '#05958F',
    1: '#ffa31b',
    2: '#d4af37'
}

app.get('/boxColor/:idx', (req, res) => {
    const { idx } = req.params;

    res.status(200).send({
        color: boxColors[idx],
    })
})

app.put('/boxColor/:idx', (req, res) => {
    const { idx } = req.params;
    boxColors[idx] = req.body.color

    res.json({
        message: "Successfully updated color"
    })
})





