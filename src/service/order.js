import BaseRepository from "../repository/baseRepository.js";
import Order from "../models/order.js";
import User from "../models/user";
//import OrderItem from "../models/order_item.js"
//import OrderParticipant from "../models/order_participant.js"


const findAllComplete = () => {

    const orderRepository = new BaseRepository(Order)
    const userRepository = new BaseRepository(User)
    //const orderItemRepository = new BaseRepository(OrderItem)
    //const orderParticipantRepository = new BaseRepository(OrderParticipant)

    const orders = orderRepository.findAll()
    const users = userRepository.findAll()
    //const orderItems = orderItemRepository.findAll()
    //const orderParticipants = orderParticipantRepository.findAll()

    const allOrders = orders.map(item => {
        return {
            ...item, 
            user: users.filter(x => x.idUser === item.idUser)[0],
        }
    })

    return allOrders

}

const service = { findAllComplete }

export default service