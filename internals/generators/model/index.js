/**
 * Container Generator
 */


module.exports = {
  description: 'Add a database model',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Newmodel',
    validate: value => (value ? true : 'The name is required')

  }, {
    type: 'directory',
    name: 'from',
    message: 'Where should this go?',
    basePath: `${process.cwd()}/src/models`
  }],
  actions: () => {
    // Generate index.js and index.test.js
    const actions = [{
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{ name }}/index.ts',
      templateFile: './model/index.ts.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{ name}}/attributes/index.ts',
      templateFile: './model/Attributes.ts.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{ name}}/types/Attributes.ts',
      templateFile: './model/AttributesDef.ts.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{ name}}/types/{{properCase name}}Instance.ts',
      templateFile: './model/Instance.ts.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{ name}}/types/{{properCase name}}Keys.ts',
      templateFile: './model/Keys.ts.hbs',
      abortOnFail: true
    }];

    return actions;
  }
};
