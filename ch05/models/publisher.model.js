module.exports = (sequelize, Sequelize) => {
    const Publisher = sequelize.define("publisher", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
    });

    return Publisher;
};