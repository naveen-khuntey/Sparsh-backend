const model = require("./model");

const find1 = async() => {
    const donation = await model.find();
    return donation;
}
const find = async(appID) => {
    const donation = await model.findById(appID);
    return donation;
}

const create = async (donation) => {
    const {name, phone, blood, bmi, pin} = donation; 
    const newDonation = await model.create({
        name,
        phone,
        blood,
        bmi,
        pin
    });

    return newDonation;
}

module.exports = {
    create,
    find,
    find1
}