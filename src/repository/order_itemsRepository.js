import Order_items from '../models/order_items.js'

const findAll = async () => {
    try {
        const result = await Order_items.findAll();
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (ord_item) => {
    try {

        const newOrder_items = await Order_items.create(ord_item);

        return newOrder_items;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Order_items.findOne({
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

const update = async (ord_item) => {
    try {
        const foundOrder_items =  await Order_items.findOne({
            where: {
                id: item.id
            }
        })

        foundOrder_items.set(item)

        foundOrder_items.save()

        return foundOrder_items;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Order_items.destroy({
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


const Order_itemsRepository = { findAll, create, findOne,update, remove };

export default Order_itemsRepository; 
