import Sequelize from 'sequelize';
declare const attributes: {
    id: {
        type: Sequelize.BigIntDataTypeConstructor;
        autoIncrement: boolean;
    };
    [NewsFeedKeys.UUID]: {
        type: Sequelize.AbstractDataTypeConstructor;
        defaultValue: Sequelize.AbstractDataTypeConstructor;
        primaryKey: boolean;
    };
    [NewsFeedKeys.TITLE]: {
        type: Sequelize.StringDataTypeConstructor;
    };
    [NewsFeedKeys.TEXT]: {
        type: Sequelize.TextDataTypeConstructor;
    };
};
export default attributes;
