import PersonaRepository from "../repository/personaRepository.js";

const findAll = async (req, res) => {
    const result = await PersonaRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await PersonaRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {
    
    const result = await PersonaRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = await PersonaRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = await PersonaRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const PersonaController = { findAll, create, findOne, update, remove }

export default PersonaController;