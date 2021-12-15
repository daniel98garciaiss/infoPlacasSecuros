
const express = require('express');
const sockets = require('../helpers/sockets');
const router = express.Router();


// const securosDriver = require('../drivers/securos');

// setTimeout(securosDriver.start, 30000);

////////////////////////////////////////////////////////////
////////////////////////// VISTAS ///////////////////////////
////////////////////////////////////////////////////////////

/////////////////// VISTA RELAYS //////////////////////
router.get('/', async (req,res) => {           //ASYNC


    res.render('index');
});
 

///////////////////// API ///////////////////////////

router.post('/api/set-plate', async (req,res) => {           
    let {data} = req.body;
    req.io.emit('setPlate', {data}); 
    res.send("ok");
});


router.post('/api/sync', async (req,res) => {           
    let {data} = req.body;
    req.io.emit('setSync', {data});
    res.send("ok");
});

module.exports = router;
