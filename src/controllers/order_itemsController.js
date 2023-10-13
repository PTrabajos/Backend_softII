import Order_itemsRepository from "../repository/order_itemsRepository.js";

const findAll = async (req, res) => {
    const result = await Order_itemsRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await Order_itemsRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {
    
    const result = await Order_itemsRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = await Order_itemsRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = await Order_itemsRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const Order_itemController = { findAll, create, findOne, update, remove }

export default Order_itemController;