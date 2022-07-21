import mongoose, { ObjectId } from 'mongoose';


interface IArticle {
    //_id: ObjectId
    title: string,
    author: string,
    body: string
}

const Article = mongoose.model('Article', new mongoose.Schema<IArticle>({
    title: {type: String, required: true},
    author: {type: String, required: true},
    body: {type: String, required: true},
}, {timestamps: true}));

export {Article, IArticle};
