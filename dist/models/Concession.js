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
    id_adresses: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: database_1.sequelize,
    tableName: "concessions",
    timestamps: false
});
Addresse_1.Addresse.belongsTo(Concession, { foreignKey: "id_adresses" });
Concession.hasOne(Addresse_1.Addresse, { foreignKey: "id_adresses" });
