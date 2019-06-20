import Sequelize from 'sequelize';
declare const attributes: {
    id: {
        type: Sequelize.BigIntDataTypeConstructor;
        autoIncrement: boolean;
    };
    [CauseKeys.UUID]: {
        type: Sequelize.AbstractDataTypeConstructor;
        defaultValue: Sequelize.AbstractDataTypeConstructor;
        primaryKey: boolean;
    };
    [CauseKeys.NAME]: {
        type: Sequelize.StringDataTypeConstructor;
        allowNull: boolean;
    };
    [CauseKeys.SUGGESTED_DONATION]: {
        type: Sequelize.DecimalDataTypeConstructor;
        allowNull: boolean;
        get(): number;
    };
    [CauseKeys.GOAL_AMOUNT]: {
        type: Sequelize.DecimalDataTypeConstructor;
        allowNull: boolean;
        get(): number;
    };
};
export default attributes;
