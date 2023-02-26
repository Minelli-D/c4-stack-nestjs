'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'list',
        name: 'generator',
        message: 'Which generator would you like to run?',
        choices: ['rest', 'service'],
      },
    ];

    return this.prompt(prompts).then((answers) => {
      this.composeWith(require.resolve(`../${answers.generator}`));
    });
  }
};
