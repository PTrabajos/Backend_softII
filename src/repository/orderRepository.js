import Order from '../models/order.js'
import User from '../models/user.js';

const findAll = async () => {
    try {
        const result = await Order.findAll({
            include: [
                {
                    model: User, // Modelo que deseas unir
                    required: true, // INNER JOIN
                    as: 'User', // Alias de la relación, si lo tienes definido
                    attributes: ['firstName', 'lastName', 'profileImage']
                }
            ],
            //raw: true,
        });

        console.log(result);
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
}

const create = async (ordetail) => {
    try {

        const newOrder = await Order.create(ordetail);

        return newOrder;

    } catch (err) {
        console.error(err)

        return null;
    }
}

const findOne = async (ID_ORDER) => {
    try {
        return await Order.findOne({
            where: {
                ID_ORDER
            }
        })
    }
    catch (err) {
        console.error(err)
        return null;
    }
}

const update = async (ordetail) => {
    try {
        const foundOrder = await Order.findOne({
            where: {
                ID_ORDER
            }
        })

        foundOrder.set(ordetail)

        foundOrder.save()

        return foundOrder;

    }
    catch (err) {
        console.error(err)
        return null;
    }
}

const remove = async (ID_ORDER) => {
    try {
        await Order.destroy({
            where: {
                ID_ORDER
            }
        })

        return true;
    }
    catch (err) {
        console.error(err)
        return null;
    }

}


const OrderRepository = { findAll, create, findOne, update, remove };

export default OrderRepository; 
