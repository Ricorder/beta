const { model, Schema, pluralize } = require('mongoose');
pluralize(null);

const ToDoSchema = new Schema({
  author: {
    required: true,  
    type: String
  },
  text: {
    required: true,  
    type: String
  },
  comment: String,
  completed: Boolean,
},
  { timestamps: true }
)

const ToDo = model('ToDo', ToDoSchema)
module.exports = ToDo
