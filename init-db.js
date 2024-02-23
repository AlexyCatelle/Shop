import sequelize from "./app/db/database.js";
import Product from "./app/models/Product.js";

try {
    await sequelize.drop();
    await sequelize.sync();
    await Product.create({ title: 'DVD', description: 'Regardez vos films préférés' });
    await Product.create({ title: 'Blu-ray', description: `La HD c'est cool` });
} catch (error) {
    console.error(error);
}