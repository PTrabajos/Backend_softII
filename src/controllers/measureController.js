import MeasureRepository from "../repository/measureRepository.js";

const findAll = async (req, res) => {
    const result = await MeasureRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await MeasureRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {
    
    const result = await MeasureRepository.create(req.body);

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = await MeasureRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const MeasureController = { findAll, create, findOne, remove }

export default MeasureController;