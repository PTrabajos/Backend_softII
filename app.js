import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import docTypeRoutes from './src/routes/doc_type.js';
import measureRoutes from './src/routes/measure.js';
import orderItemRoutes from './src/routes/order_item.js';
import orderParticipantRoutes from './src/routes/order_participant.js';
import orderRoutes from './src/routes/order.js';
import participationRoutes from './src/routes/participation.js';
import problemTypeRoutes from './src/routes/problem_type.js';
import productRoutes from './src/routes/product.js';
import userPaymentRoutes from './src/routes/user_payment.js';
import supportRoutes from './src/routes/support.js';

import userRoutes from './src/routes/user.js';

let app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

app.get('/', (req, res) => {
    return res.json({ result: 'OK'});
})

app.use("/docType", docTypeRoutes);
app.use("/measure", measureRoutes);
app.use("/orderItem", orderItemRoutes);
app.use("/orderParticipant", orderParticipantRoutes);
app.use("/order", orderRoutes);
app.use("/participation", participationRoutes);
app.use("/problemType", problemTypeRoutes);
app.use("/product", productRoutes);
app.use("/userPayment", userPaymentRoutes);
app.use("/user", userRoutes);
app.use("/support", supportRoutes);


export default app