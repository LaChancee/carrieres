"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addresse = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
class Addresse extends sequelize_1.Model {
}
exports.Addresse = Addresse;
Addresse.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    street: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    complement: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    zipcode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    town: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: database_1.sequelize,
    tableName: "mines",
    timestamps: false
});
