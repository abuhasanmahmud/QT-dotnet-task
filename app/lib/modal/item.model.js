import { Schema, model, models } from "mongoose";

const itemSchema = new Schema({
  name: { type: String, required: true },
  imgurl: { type: String, required: true },
  price: { type: String, required: true },
});

const Item = models.Item || model("Item", itemSchema);

export default Item;
