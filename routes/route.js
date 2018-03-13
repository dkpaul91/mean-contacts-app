const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

// Retrieving Data
router.get('/contact', (req, res, next) => {
    Contact.find().then((contacts) => {
        res.json(contacts);
    }, (err) => {
        res.status(400).send();
    });
});

// Add Contact
router.post('/contact', (req, res, next) => {
    let newContact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    });

    newContact.save().then((contact) => {
        res.json(contact);
    }, (err) => {
        res.status(400).send();
    });
});

// Delete Data
router.delete('/contact/:id', (req, res, next) => {
    Contact.remove({_id: req.params.id}).then((contact) => {
        res.json(contact);
    }, (err) => {
        res.status(400).send();
    });
});

module.exports = router;