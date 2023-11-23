import BaseRepository from "../repository/baseRepository.js";
import Order from "../models/order.js";
import User from "../models/user";
/*
findAllComplete() {
    const orderRepository = new BaseRepository(Order)
    const userRepository = new BaseRepository(User)

    const orders = orderRepository.findAll()
    const users = userRepository.findAll()

    const ordersComplete = orders.map( item => {
        return {
            ...item, 
        }
    } )

    return ordersComplete
}
*/