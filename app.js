import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import measureRoutes from './src/routes/measure.js';
import order_detailRoutes from './src/routes/order_detail.js';
import order_itemsRoutes from './src/routes/order_items.js';
import payment_detailRoutes from './src/routes/payment_detail.js';
import productRoutes from './src/routes/product.js';
import userRoutes from './src/routes/user.js';

let app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ result: 'OK'});
})

app.use("/measure", measureRoutes);
app.use("/order_detail", order_detailRoutes);
app.use("/order_items", order_itemsRoutes);
app.use("/payment_detail", payment_detailRoutes);
app.use("/product", productRoutes);
app.use("/user", userRoutes);


export default app