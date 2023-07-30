const model = require("./model");

const find1 = async() => {
    const appointment = await model.find();
    return appointment;
}
const find = async(appID) => {
    const appointment = await model.findById(appID);
    return appointment;
}
 
const create = async (appointment) => {
    const {name, date, phone, email} = appointment;
 
    const newAppointment = await model.create({
        name,
        date,
        phone,
        email,
    });

    return newAppointment;
}

module.exports = {
    create,
    find,
    find1
}