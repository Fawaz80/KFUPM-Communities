//routes
const router = require("express").Router();
const eventController = require("../controller/event");

//Get list of all events in the database
router.get("/", eventController.getAllEvents);

// Add a new event to the database
router.post("/", eventController.createEvent);

// Get a event by ID
router.get('/', eventController.getEventById);

// Update a event by ID
router.put('/', eventController.updateEventById);

// Delete a event by ID
router.delete('/', eventController.deleteEventById);
 
//export modules
 module.exports = router;