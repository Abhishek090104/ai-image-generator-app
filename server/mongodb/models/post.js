import mongoose from 'mongoose';

const post = new mongoose.Schema({
    name: { type:String, required:true},
    prompt: { type:String, required:true},
    photo: { type:String, required:true}

});

const PostSchema = mongoose.model('post',post);

export default  PostSchema;