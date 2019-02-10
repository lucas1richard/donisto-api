module.exports = {
  description: 'Add an unconnected dumb component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'ES6 Class (Pure)', 'ES6 Class', 'Styled Component']
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
    validate: (value) => value ? true : 'The name is required'
  }, {
    type: 'directory',
    name: 'from',
    message: 'Where should this go?',
    basePath: process.cwd()
  }],
  actions: (data) => {
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function':
        componentTemplate = './component/stateless.js.hbs';
        break;
      case 'ES6 Class (Pure)':
        componentTemplate = './component/es6-pure.js.hbs';
        break;
      case 'ES6 Class':
        componentTemplate = './component/es6.js.hbs';
        break;
      case 'Styled Component':
        componentTemplate = './component/sc.js.hbs';
        break;
      default:
        componentTemplate = './component/es6.js.hbs';
    }

    const actions = [{
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{ properCase name}}/index.js',
      templateFile: componentTemplate,
      abortOnFail: true
    },
    {
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{ properCase name}}/__tests__/index.test.js',
      templateFile: './component/test.js.hbs',
      abortOnFail: true
    }];

    return actions;
  }
};
