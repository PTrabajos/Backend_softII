import ProductRepository from "../repository/productRepository.js";

const findAll = async (req, res) => {
    const result = await ProductRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await ProductRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {
    
    const result = await ProductRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = await ProductRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = await ProductRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const ProductController = { findAll, create, findOne, update, remove }

export default ProductController;