"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concession = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const Addresse_1 = require("./Addresse");
class Concession extends sequelize_1.Model {
}
exports.Concession = Concession;
Concession.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    siret: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    license: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    addresse_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: database_1.sequelize,
    tableName: "mines",
    timestamps: false
});
Addresse_1.Addresse.belongsTo(Concession, { foreignKey: "addresse_id" });
Concession.hasOne(Addresse_1.Addresse, { foreignKey: "addresse_id" });
