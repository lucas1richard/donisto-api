import Sequelize from 'sequelize';
declare const attributes: {
    id: {
        type: Sequelize.DataTypeBigInt;
        autoIncrement: boolean;
    };
    [ContactKeys.UUID]: {
        type: Sequelize.DataTypeUUID;
        defaultValue: Sequelize.DataTypeUUIDv4;
        primaryKey: boolean;
    };
    [ContactKeys.FIRST_NAME]: {
        type: Sequelize.DataTypeString;
        allowNull: boolean;
    };
    [ContactKeys.LAST_NAME]: {
        type: Sequelize.DataTypeString;
        allowNull: boolean;
    };
};
export default attributes;
