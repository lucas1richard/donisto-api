/**
 * Container Generator
 */


module.exports = {
  description: 'Add a route endpoint',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'newendpoint',
    validate: value => (value ? true : 'The name is required')

  }, {
    type: 'directory',
    name: 'from',
    message: 'Where should this go?',
    basePath: `${process.cwd()}/src`
  }],
  actions: () => {
    // Generate index.js and index.test.js
    const actions = [{
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{ name }}/index.ts',
      templateFile: './route/index.ts.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{ name}}/controllers/get{{properCase name}}/index.ts',
      templateFile: './route/getController.ts.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{ name}}/controllers/delete{{properCase name}}/index.ts',
      templateFile: './route/deleteController.ts.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{ name}}/controllers/create{{properCase name}}/index.ts',
      templateFile: './route/createController.ts.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{ name}}/controllers/create{{properCase name}}/validate.ts',
      templateFile: './route/validate.ts.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{ name}}/controllers/update{{properCase name}}/index.ts',
      templateFile: './route/updateController.ts.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{ name}}/controllers/update{{properCase name}}/validate.ts',
      templateFile: './route/validate.ts.hbs',
      abortOnFail: true
    }];

    return actions;
  }
};
