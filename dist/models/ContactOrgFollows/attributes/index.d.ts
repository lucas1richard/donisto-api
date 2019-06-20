import Sequelize from 'sequelize';
declare const attributes: {
    id: {
        type: Sequelize.BigIntDataTypeConstructor;
        autoIncrement: boolean;
    };
    [ContactOrgFollowsKeys.UUID]: {
        type: Sequelize.AbstractDataTypeConstructor;
        defaultValue: Sequelize.AbstractDataTypeConstructor;
        primaryKey: boolean;
    };
    [ContactOrgFollowsKeys.REJECTED]: {
        type: Sequelize.AbstractDataTypeConstructor;
        defaultValue: boolean;
    };
};
export default attributes;
