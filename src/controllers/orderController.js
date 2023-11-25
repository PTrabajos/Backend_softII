import OrderRepository from "../repository/orderRepository.js";

const findAll = async (req, res) => {
    const result = await OrderRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await OrderRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {
    
    const result = await OrderRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = await OrderRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = await OrderRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const OrderController = { findAll, create, findOne, update, remove }

export default OrderController;