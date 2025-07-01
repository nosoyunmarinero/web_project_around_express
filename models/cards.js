const mongoose = require('mongoose');
const { Types } = mongoose;

const cardSchema = new mongoose.Schema({
  name: {
    type:String,
    minlength: 2,
    maxlength: 30,
    require: true
  },
  link: {
    type:String,
    validate: {
      validator: function(v){
      return /https?:\/\/(www\.)?[\w\-]+\.\w+(\/[A-Za-z0-9._~:/?%#\[\]@!$&'()*+,;=-]*)?/.test(v);
      },
      message: props => `${props.value} no es una direccion URL válida`
    },
    required: [true, 'Se requiere una URL válida']
  },
  owner: {
    type: Types.ObjectId,
    require: true
  },
  likes: {
    type: Types.ObjectId,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('card', cardSchema);