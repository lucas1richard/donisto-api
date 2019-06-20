import Sequelize from 'sequelize';
declare const attributes: {
    id: {
        type: Sequelize.BigIntDataTypeConstructor;
        autoIncrement: boolean;
    };
    [DonationKeys.UUID]: {
        type: Sequelize.AbstractDataTypeConstructor;
        defaultValue: Sequelize.AbstractDataTypeConstructor;
        primaryKey: boolean;
    };
    [DonationKeys.AMOUNT]: {
        type: Sequelize.DecimalDataTypeConstructor;
        get(): number;
    };
    [DonationKeys.IS_ANONYMOUS]: {
        type: Sequelize.AbstractDataTypeConstructor;
        defaultValue: boolean;
        allowNull: boolean;
    };
    [DonationKeys.MESSAGE]: {
        type: Sequelize.TextDataTypeConstructor;
        allowNull: boolean;
    };
};
export default attributes;
