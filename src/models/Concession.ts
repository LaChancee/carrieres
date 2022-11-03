import {Model, DataTypes, DecimalDataType} from 'sequelize'

import { sequelize } from "../database/database"
import { Addresse } from './Addresse';
import { Mines } from './Mines';


export class Concession extends Model
{
    public id!: number;
    declare name: string;
    declare siret:string;
    declare license:string;
    declare phone: string;
    declare id_adresses: number;
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
    id_adresses: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    sequelize,
    tableName: "concessions",
    timestamps: false
});

Addresse.belongsTo(Concession,{foreignKey: "id_adresses"});
Concession.hasOne(Addresse, {foreignKey: "id_adresses"});
