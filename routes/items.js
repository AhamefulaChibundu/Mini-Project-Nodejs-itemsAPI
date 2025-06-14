import express from 'express';
import { v4 as uuid } from 'uuid';

const router = express.Router();

let items = [];

// Validate item body
function isValidItemBody(body) {
    return body && typeof body.itemName === 'string' && typeof body.Description === 'string' && body.itemName.trim() !== '';
}

// GET all items
router.get('/', (req, res) => {
    try {
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error while fetching items' });
    }
});

// POST new item
router.post('/', (req, res) => {
    try {
        const item = req.body;

        if (!isValidItemBody(item)) {
            return res.status(400).json({ message: 'Invalid item data. "itemName" and "Description" is required and must be a non-empty string.' });
        }

        const withId = { ...item, id: uuid() };
        items.push(withId);

        res.status(201).json({
            message: `Item was added successfully`,
            item: withId
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error while adding item' });
    }
});

// GET single item by id
router.get('/:id', (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Item ID is required in the URL parameter' });
        }

        const foundItem = items.find((item) => item.id === id);

        if (!foundItem) {
            return res.status(404).json({ message: `Item with ID ${id} not found` });
        }

        res.status(200).json(foundItem);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error while fetching item' });
    }
});

// PUT (update) item by id
router.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        if (!id) {
            return res.status(400).json({ message: 'Item ID is required in the URL parameter' });
        }

        if (!updates || Object.keys(updates).length === 0) {
            return res.status(400).json({ message: 'Update data is required in the request body' });
        }

        const item = items.find((item) => item.id === id);

        if (!item) {
            return res.status(404).json({ message: `Item with ID ${id} not found` });
        }

        Object.assign(item, updates);

        res.status(200).json({
            message: `Item with ID ${id} has been updated`,
            updatedItem: item
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error while updating item' });
    }
});

// DELETE item by id
router.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Item ID is required in the URL parameter' });
        }

        const itemExists = items.some((item) => item.id === id);

        if (!itemExists) {
            return res.status(404).json({ message: `Item with ID ${id} not found` });
        }

        items = items.filter((item) => item.id !== id);

        res.status(200).json({ message: `Item with ID ${id} has been deleted` });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error while deleting item' });
    }
});

export default router;
