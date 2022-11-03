"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mines = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const Concession_1 = require("./Concession");
class Mines extends sequelize_1.Model {
}
exports.Mines = Mines;
Mines.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    longitude: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false
    },
    latitude: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false
    },
    id_concessions: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: database_1.sequelize,
    tableName: "mines",
    timestamps: false
});
Mines.belongsTo(Concession_1.Concession, { foreignKey: "id_concessions" });
Concession_1.Concession.hasMany(Mines, { foreignKey: "id_concessions" });
