import Order_detail from '../models/order_detail.js'
import User from '../models/user.js';

const findAll = async () => {
    try {
        const result = await Order_detail.findAll({
            include: [
                {
                    model: User, // Modelo que deseas unir
                    required: true, // INNER JOIN
                    as: 'user', // Alias de la relación, si lo tienes definido
                    attributes: ['first_name', 'last_name', 'profileImage']
                }
            ],
            //raw: true,
        });

        console.log(result);
        return result;
    } catch(err) {
        console.error(err);
        return null;
    }
}

const create = async (ordetail) => {
    try {

        const newOrder_detail = await Order_detail.create(ordetail);

        return newOrder_detail;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Order_detail.findOne({
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

const update = async (ordetail) => {
    try {
        const foundOrder_detail =  await Order_detail.findOne({
            where: {
                id: orden.id
            }
        })

        foundOrder_detail.set(ordetail)

        foundOrder_detail.save()

        return foundOrder_detail;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Order_detail.destroy({
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


const Order_detailRepository = { findAll, create, findOne,update, remove };

export default Order_detailRepository; 
