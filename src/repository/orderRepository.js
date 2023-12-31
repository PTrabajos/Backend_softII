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

const findOne = async (id) => {
    try {
        return await Order.findOne({
            where: {
                id
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
                id
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

const remove = async (id) => {
    try {
        await Order.destroy({
            where: {
                id
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
