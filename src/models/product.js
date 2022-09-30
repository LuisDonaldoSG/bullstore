
import { Schema,model,models } from "mongoose"

const userSchema = new Schema({
    name:String,
    price:Number,
    image:String
})

module.exports =  models.products || model('products', userSchema);
