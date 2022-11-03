import {Model, DataTypes, DecimalDataType} from 'sequelize'

import { sequelize } from "../database/database"
import { Concession } from './Concession';


export class Mines extends Model
{
    public id!: number;
    declare name: string;
    declare longitude:DecimalDataType;
    declare latitude:DecimalDataType;
    declare concession_id: number;
}

Mines.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    longitude: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    latitude: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    concession_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    sequelize,
    tableName: "mines",
    timestamps: false
});

Mines.belongsTo(Concession,{foreignKey: "concession_id"});
Concession.hasMany(Mines, {foreignKey: "concession_id"});
