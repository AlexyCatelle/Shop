import Sequelize from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        underscored: true,
    }
});

export default sequelize;