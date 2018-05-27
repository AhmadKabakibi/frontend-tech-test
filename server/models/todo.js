import mongoose from 'mongoose';

var Schema = mongoose.Schema({
    id:Number,
    title: String,
    completed: Boolean
});

export default mongoose.model('Todo', Schema);