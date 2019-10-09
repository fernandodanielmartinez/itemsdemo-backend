module.exports = (app) => {
    const items = require('../controllers/item.controller.js');

    // Create a new Item
    app.post('/items', items.create);

    // Retrieve all Items
    app.get('/items', items.findAll);

    // Update a Item with itemId
    app.put('/items/:itemId', items.update);

    // Delete a Item with itemId
    app.delete('/items/:itemId', items.delete);
}