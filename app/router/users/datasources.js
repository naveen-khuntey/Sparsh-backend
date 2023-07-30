const model = require("./model");

const find = async(appID) => {
    const signup = await model.findById(appID);
    return signup;
}

const create = async (signup) => {
    const {name, email, password} = signup; 
    const newSignup = await model.create({
        name,
        email,
        password
    });
    return newSignup;
}

module.exports = {
    create,
    find
}