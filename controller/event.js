// Import the event model
const Event = require('../models/event'); 


// Get all event
async function getAllEvents(req, res) {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Create a new event
async function createEvent(req, res) {
    try {
        const { eventTitle, eventText, eventImages, eventDatePosted, eventCom } = req.body;
        const newEvent = new Event({ eventTitle, eventText, eventImages, eventDatePosted, eventCom });
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get a event by ID
async function getEventById(req, res) {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update a event by ID
async function updateEventById(req, res) {
    try {
        const { eventTitle, eventText, eventImages, eventDatePosted, eventCom } = req.body;
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            { eventTitle, eventText, eventImages, eventDatePosted, eventCom },
            { new: true }
        );
        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete a event by ID
async function deleteEventById(req, res) {
    try {
        const deletedEvent = await Song.findByIdAndDelete(req.params.id);
        if (!deletedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//export modules
module.exports = {
    getAllEvents,
    createEvent,
    getEventById,
    updateEventById,
    deleteEventById
};