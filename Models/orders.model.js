const mongoose = require("mongoose");

const OrdersSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  totalAmount: Number,
});

const OrdersModel = mongoose.model("Ordersdb", OrdersSchema);

module.exports = OrdersModel;
