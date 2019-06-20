import Sequelize from 'sequelize';
declare const attributes: {
    id: {
        type: Sequelize.BigIntDataTypeConstructor;
        autoIncrement: boolean;
    };
    [DonorKeys.UUID]: {
        type: Sequelize.AbstractDataTypeConstructor;
        defaultValue: Sequelize.AbstractDataTypeConstructor;
        primaryKey: boolean;
    };
    [DonorKeys.FIRST_NAME]: {
        type: Sequelize.StringDataTypeConstructor;
        allowNull: boolean;
    };
    [DonorKeys.LAST_NAME]: {
        type: Sequelize.StringDataTypeConstructor;
        allowNull: boolean;
    };
};
export default attributes;
