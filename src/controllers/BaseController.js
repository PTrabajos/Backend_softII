class BaseController {

    constructor(repository) {
        this.repository = repository
    }

    findAll = async (req, res) => {
        const result = await this.repository.findAll();
    
        return this.sendResponse(result, res);
    }

    findOne = async (req, res) => {
        const id = req.params.id;
        const result = await this.repository.findOne(id);
    
        return this.sendResponse(result, res);
    }

    create = async (req, res) => {
    
        const result = await this.repository.create(req.body);
    
        return this.sendResponse(result, res);
    }

    remove = async (req, res) => {

        const id = req.params.id;
    
        const result = await this.repository.remove(id)
    
        return this.sendResponse(result, res);
    }

    update = async (req,res) => {
        const result = await this.repository.update(req.body);
    
        if (result)
            return res.status(200).json(result);
        else    
            return res.status(500).json({ message: 'No encontrado.'})
    }

    sendResponse = (result, res) => {
        if (result)
            return res.status(200).json(result);
        else
            return res.status(500).json({ message: 'Ha ocurrido un error'})
    } 

}

export default BaseController;