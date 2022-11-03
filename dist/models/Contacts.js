"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const Concession_1 = require("./Concession");
class Contacts extends sequelize_1.Model {
}
exports.Contacts = Contacts;
Contacts.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    mail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    id_concessions: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: database_1.sequelize,
    tableName: "contacts",
    timestamps: false,
});
Contacts.belongsTo(Concession_1.Concession, { foreignKey: "id_concessions" });
Concession_1.Concession.hasOne(Contacts, { foreignKey: "id_concessions" });
