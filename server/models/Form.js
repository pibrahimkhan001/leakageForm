const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  skuName: {
    type: String,
    required: true,
  },
  rejectCount: {
    type: Number,
    required: true,
  },
  actualCount: {
    type: Number,
    required: true,
  },
  totalCount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'saved'],
    default: 'pending',
  },
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
