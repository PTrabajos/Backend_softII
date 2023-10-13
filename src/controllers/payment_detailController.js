import Payment_detailRepository from "../repository/payment_deatilRepository.js";

const findAll = async (req, res) => {
    const result = await Payment_detailRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await Payment_detailRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {
    
    const result = await Payment_detailRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = await Payment_detailRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = await Payment_detailRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const Payment_detailController = { findAll, create, findOne, update, remove }

export default Payment_detailController;