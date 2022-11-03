import {Model, DataTypes, DecimalDataType} from 'sequelize'

import { sequelize } from "../database/database"
import { Mines } from './Mines';


export class Concession extends Model
{
    public id!: number;
    declare name: string;
    declare siret:string;
    declare license:string;
    declare phone: string;
    declare addresse_id: number;
}

Concession.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    siret: {
        type: DataTypes.STRING,
        allowNull: false
    },
    license: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addresse_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    sequelize,
    tableName: "mines",
    timestamps: false
});

Mines.belongsTo(Concession,{foreignKey: "addresse_id"});
Concession.hasMany(Mines, {foreignKey: "addresse_id"});
