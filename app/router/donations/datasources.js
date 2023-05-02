const model = require("./model");

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

    return newDonTION;
}

module.exports = {
    create,
    find
}