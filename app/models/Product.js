import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/database.js';

class Product extends Model {}

Product.init({
    title:{
        type:DataTypes.TEXT,
    },
    description :{
        type:DataTypes.TEXT,
    }
},
{
    sequelize,
    modelName:'Product',
    tableName:'product',
}
)

export default Product;