import Sequelize from 'sequelize';
declare const attributes: {
    id: {
        type: Sequelize.DataTypeBigInt;
        autoIncrement: boolean;
    };
    [DonationKeys.UUID]: {
        type: Sequelize.DataTypeUUID;
        defaultValue: Sequelize.DataTypeUUIDv4;
        primaryKey: boolean;
    };
    [DonationKeys.AMOUNT]: {
        type: Sequelize.DataTypeDecimal;
        get(): number;
    };
    [DonationKeys.IS_ANONYMOUS]: {
        type: Sequelize.DataTypeBoolean;
        defaultValue: boolean;
        allowNull: boolean;
    };
    [DonationKeys.MESSAGE]: {
        type: Sequelize.DataTypeText;
        allowNull: boolean;
    };
};
export default attributes;
