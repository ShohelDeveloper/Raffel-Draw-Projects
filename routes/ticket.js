const router = require('express').Router()
const db = require('../db/db')

router.get('/t/:ticketId', (req,res) => {
    const ticketId = req.params.ticketId
    const ticket = db.findById(ticketId)
    res.status(200).json(ticket)
})
router.patch('/t/:ticketId', (req,res) => {
    const ticketId = req.params.ticketId
    const updateTicket = db.updateById(ticketId, req.body)
    res.status(200).json({message:"Updated Succesfully",updateTicket})
})
router.delete('/t/:ticketId', (req,res) => {
    const ticketId = req.params.ticketId
    db.deleteById(ticketId)
    res.status(203).send()
})


router.get('/u/:username', (req,res) => {
   const username = req.params.username
   const tickets = db.findByUsername(username)
   res.status(200).json(tickets)
})

// PATCH Update Tickets for a Given User
router.patch('/u/:username', (req,res) => {
    const usernameId = req.params.username
    const updateUserName = db.updateTicketByUsername(usernameId,req.body)
    res.status(200).json({message:"Succesfully Updated by Username", updateUserName})

})
router.delete('/u/:username', (req, res) => {
	const username = req.params.username;
	db.deleteByName(username);
	res.status(203).send();
});


router.post('/sell', (req,res) => {
   const {username,price} = req.body;
   const ticket = db.create(username,price)
   res.status(200).json({message:'Ticket Created Successfully', ticket})
})
router.post('/bulk', (req,res) => {
    const {username,price,quantity} = req.body;
    const tickets = db.bulkCreate(username,price,quantity)
    res.status(200).json({message:'Ticket Created Successfully', tickets})
})

router.get('/draw', (req,res) => {
     const winnerCount = req.query.wc ?? 3
     const winners = db.draw(winnerCount)
     res.status(200).json(winners)
})
router.get('', (req,res) => {
    const tickets = db.find()
    res.status(200).json(tickets)
})


module.exports = router