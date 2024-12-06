const express = require('express');
const router = express.Router();
const Message = require('../models/message');

// دریافت همه پیام‌ها
router.get('/', async (req, res) => {
  try {
    const { email, startDate, endDate } = req.query;
    const filter = {};
    if (email) filter.email = email;
    if (startDate && endDate) {
      filter.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const messages = await Message.find(filter).sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching messages', error });
  }
});

// حذف پیام
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Message.findByIdAndDelete(id);
    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting message', error });
  }
});

module.exports = router;
