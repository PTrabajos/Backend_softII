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

    findOne = async (id) => {
        try {
            return await this.modelo.findOne({
                where: { id }
            })
        }
        catch(err) {
            console.error(err);
            return null;
        }
    }
    /*
    update =  async(object) => {
        const { id } = object;
        try {
            const result = await this.modelo.update(object, { where: { id } })
    
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
    */
    update = async (object) => {
        const { id } = object;
        try {
            const [rowsUpdated, [updatedRecord]] = await this.modelo.update(object, {
                where: { id },
                returning: true, // This ensures that the updated record is returned
            });
    
            if (rowsUpdated > 0) {
                return updatedRecord;
            } else {
                return null; // No records were updated
            }
        } catch (err) {
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