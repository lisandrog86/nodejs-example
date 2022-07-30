import mongoose, { Schema, Types } from 'mongoose';


interface IComment {
    article: Types.ObjectId,
    author: string,
    body: string
}

const Comment = mongoose.model('Comment', new mongoose.Schema<IComment>({
    author: {type: String, required: true},
    body: {type: String, required: true},
    article: { type: Schema.Types.ObjectId, ref: 'Article' }
}, {timestamps: true}));

export {Comment, IComment};
