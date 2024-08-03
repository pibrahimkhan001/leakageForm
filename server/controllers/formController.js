const Form = require('../models/Form');

// Fetch forms for today's date
const getTodayForms = async (req, res) => {
  const { date } = req.query;
  try {
    const forms = await Form.find({
      date: { $gte: new Date(`${date}T00:00:00Z`), $lt: new Date(`${date}T23:59:59Z`) },
    });
    res.json(forms);
  } catch (error) {
    console.error('Error fetching today’s forms:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Fetch pending forms
const getPendingForms = async (req, res) => {
  try {
    const forms = await Form.find({ status: 'pending' });
    res.json(forms);
  } catch (error) {
    console.error('Error fetching pending forms:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Fetch saved forms
const getSavedForms = async (req, res) => {
  try {
    const forms = await Form.find({ status: 'saved' });
    res.json(forms);
  } catch (error) {
    console.error('Error fetching saved forms:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create or update form entry
const createOrUpdateForm = async (req, res) => {
  const { date, skuName, actualCount, totalCount, status } = req.body;

  // Calculate reject count
  const rejectCount = totalCount - actualCount;

  try {
    const newForm = new Form({
      date,
      skuName,
      rejectCount,
      actualCount,
      totalCount,
      status,
    });

    const form = await newForm.save();
    res.status(201).json(form);
  } catch (error) {
    console.error('Error saving form:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getTodayForms,
  getPendingForms,
  getSavedForms,
  createOrUpdateForm,
};
