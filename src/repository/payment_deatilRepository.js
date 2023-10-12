import Payment_detail from '../models/payment_detail.js'

const findAll = async () => {
    try {
        const result = await Payment_detail.findAll();
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (payment_detail) => {
    try {

        const newPayment_detail = await Payment_detail.create(payment_detail);

        return newPayment_detail;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Payment_detail.findOne({
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

const update = async (payment_detail) => {
    try {
        const foundPayment_detail =  await Payment_detail.findOne({
            where: {
                id: payment.id
            }
        })

        foundPayment_detail.set(payment)

        foundPayment_detail.save()

        return foundPayment_detail;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Payment_detail.destroy({
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


const Payment_detailRepository = { findAll, create, findOne,update, remove };

export default Payment_detailRepository; 
