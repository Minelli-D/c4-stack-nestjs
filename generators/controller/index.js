'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const camel = require('to-camel-case');



module.exports = class extends Generator {
  prompting() {
    let name = this.options.name != null ? this.options.name : null
    if(this.options.name != null)
      return
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the swell ${chalk.red('generator-c-4-stack')} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Hi, give the name of the SERVICE in kebab-case?',
      }
    ];

    return this.prompt(prompts).then(props => {
      this.answers = props;
    });

  }

  writing() {
    let name = this.options.name != null ? this.options.name : this.answers.name
    let entityName = this.options.entityName != null ? this.options.entityName : null
    let entityId = this.options.entityId != null ? this.options.entityId : null

    const controllerDir = path.join('app', 'src', 'controller');

    const creationFile = path.join(controllerDir, (name+'.controller.ts'));
    const nameFile = name
    name = camel(name)
    this.fs.copyTpl(
      this.templatePath('controller.ts'),
      this.destinationPath(creationFile),
      { nameFile,name,entityName, entityId },
    );
  }

};
