import {Model, DataTypes, DecimalDataType} from 'sequelize'

import { sequelize } from "../database/database"
import { Concession } from './Concession';
import { Mines } from './Mines';


export class Addresse extends Model
{
    public id!: number;
    declare street: string;
    declare complement:string;
    declare zipcode:string;
    declare town: string;
}

Addresse.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    complement: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zipcode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    town: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
},
{
    sequelize,
    tableName: "mines",
    timestamps: false
});
