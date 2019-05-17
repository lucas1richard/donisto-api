import Sequelize from 'sequelize';
declare const attributes: {
    id: {
        type: Sequelize.DataTypeBigInt;
        autoIncrement: boolean;
    };
    [CauseKeys.UUID]: {
        type: Sequelize.DataTypeUUID;
        defaultValue: Sequelize.DataTypeUUIDv4;
        primaryKey: boolean;
    };
    [CauseKeys.NAME]: {
        type: Sequelize.DataTypeString;
        allowNull: boolean;
    };
    [CauseKeys.SUGGESTED_DONATION]: {
        type: Sequelize.DataTypeDecimal;
        allowNull: boolean;
        get(): number;
    };
};
export default attributes;
