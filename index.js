const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
const PORT = 8080

app.use(express.json())


app.listen(PORT, () => console.log(`Example api listening at http://localhost:${PORT}`))


app.get('/boxColor/:idx', async (req, res) => {
    const { idx } = req.params;
    const box = await prisma.colors.findUnique({
        where: {
            id: parseInt(idx),
        }
    })

    res.status(200).send({
        // color: boxColors[idx],
        color: box.hex
    })
})

app.put('/boxColor/:idx', async (req, res) => {
    const { idx } = req.params;
    // boxColors[idx] = req.body.color
    newColor = req.body.color

    const updatedColor = await prisma.colors.update({
        where: {
            id: parseInt(idx),
        },
        data: {
            hex: newColor
        }
    })


    res.json({
        message: "Successfully updated color"
    })



})







