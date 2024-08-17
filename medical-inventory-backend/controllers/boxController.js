const Box = require('../models/Box.js');
const InventoryLog = require('../models/InventoryLog.js');

exports.getBoxInventory = async (req, res) => {
  try {
    const box = await Box.findOne({ identifier: req.params.id });
    if (!box) {
      return res.status(404).json({ msg: 'Box not found' });
    }
    res.json(box);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateBoxInventory = async (req, res) => {
  const { items } = req.body;
  try {
    const box = await Box.findOneAndUpdate(
      { identifier: req.params.id },
      { items },
      { new: true }
    );

    // Log the update
    const logEntries = items.map(item => ({
      box: box._id,
      user: req.user.id,
      action: 'updated',
      item: item.name,
      quantity: item.quantity
    }));

    await InventoryLog.insertMany(logEntries);

    res.json(box);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
