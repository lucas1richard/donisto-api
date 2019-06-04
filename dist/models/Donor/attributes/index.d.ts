import Sequelize from 'sequelize';
declare const attributes: {
    id: {
        type: Sequelize.DataTypeBigInt;
        autoIncrement: boolean;
    };
    [DonorKeys.UUID]: {
        type: Sequelize.DataTypeUUID;
        defaultValue: Sequelize.DataTypeUUIDv4;
        primaryKey: boolean;
    };
    [DonorKeys.FIRST_NAME]: {
        type: Sequelize.DataTypeString;
        allowNull: boolean;
    };
    [DonorKeys.LAST_NAME]: {
        type: Sequelize.DataTypeString;
        allowNull: boolean;
    };
};
export default attributes;
