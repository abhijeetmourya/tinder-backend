import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    name: String,
    imagurl: String
});

export default mongoose.model('cards', cardSchema)