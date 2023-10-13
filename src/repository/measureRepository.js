import Measure from '../models/measure.js'

const findAll = async () => {
    try {
        const result = await Measure.findAll();
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (measure) => {
    try {

        const newMeasure= await Measure.create(measure);

        return newMeasure;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Measure.findOne({
            where: {
                id
            }
        })
    }
    catch(err) {
        console.error(err)
        return null;
    }
}


const remove = async (id) => {
    try {
        await Measure.destroy({
            where: {
                id
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}


const MeasureRepository = { findAll, create, findOne, remove };

export default MeasureRepository; 
