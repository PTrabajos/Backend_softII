import User from '../models/user.js'

const findAll = async () => {
    try {
        const result = await Product.findAll();
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (user) => {
    try {

        const newUser = await User.create(product);

        return newUser;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await User.findOne({
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

const update = async (user) => {
    try {
        const foundUser =  await User.findOne({
            where: {
                id: user.id
            }
        })

        foundUser.set(user)

        foundUser.save()

        return foundUser;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await User.destroy({
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


const UserRepository = { findAll, create, findOne,update, remove };

export default UserRepository; 
