const mongoose = require('mongoose');
const {SeatSchema} = require('./Seat');

const TicketSchema = new mongoose.Schema({
    tripId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trip'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    seats: [SeatSchema],
    phone: {type: Number},
    address: {type: String},
    note: {type: String},
    totalPrice: {type: Number, required: true}
})

const Ticket = mongoose.model('Ticket', TicketSchema, 'Ticket')
module.exports = {Ticket, TicketSchema}