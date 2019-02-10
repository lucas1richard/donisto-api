/**
 * Container Generator
 */


module.exports = {
  description: 'Add a container component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Form',
    validate: value => (value ? true : 'The name is required')

  }, {
    type: 'list',
    name: 'component',
    message: 'Select a base component:',
    default: 'PureComponent',
    choices: () => ['PureComponent', 'Component']
  }, {
    type: 'confirm',
    name: 'wantActionsAndReducer',
    default: true,
    message: 'Do you want an actions/constants/selectors/reducer tuple for this container?'
  }, {
    type: 'confirm',
    name: 'wantSagas',
    default: true,
    message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)'
  },
  {
    type: 'directory',
    name: 'from',
    message: 'Where should this go?',
    basePath: `${process.cwd()}/src`
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    const actions = [{
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{properCase name}}/index.tsx',
      templateFile: './container/index.js.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{properCase name}}/tests/index.test.tsx',
      templateFile: './container/test.js.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: '{{ cwd }}/{{ from }}/{{properCase name}}/mapToProps.ts',
      templateFile: './container/mapToProps.js.hbs',
      abortOnFail: true
    }];

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '{{ cwd }}/{{ from }}/{{properCase name}}/actions.ts',
        templateFile: './container/actions.js.hbs',
        abortOnFail: true
      });
      actions.push({
        type: 'add',
        path: '{{ cwd }}/{{ from }}/{{properCase name}}/tests/actions.test.ts',
        templateFile: './container/actions.test.js.hbs',
        abortOnFail: true
      });

      // Constants
      actions.push({
        type: 'add',
        path: '{{ cwd }}/{{ from }}/{{properCase name}}/constants.ts',
        templateFile: './container/constants.js.hbs',
        abortOnFail: true
      });

      // Selectors
      actions.push({
        type: 'add',
        path: '{{ cwd }}/{{ from }}/{{properCase name}}/selectors.ts',
        templateFile: './container/selectors.js.hbs',
        abortOnFail: true
      });
      actions.push({
        type: 'add',
        path: '{{ cwd }}/{{ from }}/{{properCase name}}/tests/selectors.test.ts',
        templateFile: './container/selectors.test.js.hbs',
        abortOnFail: true
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '{{ cwd }}/{{ from }}/{{properCase name}}/reducer/index.ts',
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true
      });
      actions.push({
        type: 'add',
        path: '{{ cwd }}/{{ from }}/{{properCase name}}/tests/reducer.test.ts',
        templateFile: './container/reducer.test.js.hbs',
        abortOnFail: true
      });
    }

    // Sagas
    if (data.wantSagas) {
      actions.push({
        type: 'add',
        path: '{{ cwd }}/{{ from }}/{{properCase name}}/sagas/index.ts',
        templateFile: './container/sagas.js.hbs',
        abortOnFail: true
      });
      actions.push({
        type: 'add',
        path: '{{ cwd }}/{{ from }}/{{properCase name}}/sagas/controllers/defaultSaga.ts',
        templateFile: './container/sagaController.js.hbs',
        abortOnFail: true
      });
      actions.push({
        type: 'add',
        path: '{{ cwd }}/{{ from }}/{{properCase name}}/tests/sagas.test.ts',
        templateFile: './container/sagas.test.js.hbs',
        abortOnFail: true
      });
    }

    return actions;
  }
};
