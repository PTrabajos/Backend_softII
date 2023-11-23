class BaseRepository {
    
    constructor(modelo) {
        this.modelo = modelo;
    }

    findAll = async () => {
        try {
            const result = await this.modelo.findAll();
            return result;
        } catch(err) {
            console.error(err);
            return null;
        }
        
    }

    create = async (object) => {
        try {
            return await this.modelo.create(object)
        } catch(err) {
            console.error(err);
            return null;
        }
    }

    findOne = async (ID_USER) => {
        try {
            return await this.modelo.findOne({
                where: { ID_USER }
            })
        }
        catch(err) {
            console.error(err);
            return null;
        }
    }

    update =  async(object) => {
        const { ID_USER } = object;
        try {
            const result = await this.modelo.update({ where: { ID_USER } })
    
            if (result) {
                result.set(object)
                result.save()
            }
    
            return result;
                
        }
        catch(err) {
            console.error(err);
            return null;
        }
        
    }

    remove = async (id) => {
        try {
            await this.modelo.destroy({
                where: {
                    id
                }
            })
            return true;
        } catch (err) {
            console.error(err)
            return null
        }
    }

}

export default BaseRepository;