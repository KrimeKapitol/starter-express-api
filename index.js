const express = require('express')
const app = express()
app.all('/fivem/api', (req, res) => {
    const _data = "750066aa-197a-4d08-aedc-2f92562982d2";
    const User = req.socket.remoteAddress; 
    console.log("[API]:", _data, "User:", User);
     res.json(_data);
})
app.listen(process.env.PORT || 30422)
