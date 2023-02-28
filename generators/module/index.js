'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const camel = require('to-camel-case');



module.exports = class extends Generator {
  prompting() {
    let importvar = this.options.importvar != null ? this.options.importvar : null
    if(this.options.importvar != null)
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
        message: 'Hi, give the name of the REST in kebab-case?',
      }
    ];

    return this.prompt(prompts).then(props => {
      this.answers = props;
    });

  }

  writing() {
    let importvar = this.options.importvar != null ? this.options.importvar : this.answers.importvar
    let importentity = this.options.importentity != null ? this.options.importentity : this.answers.importentity
    let importcontroller = this.options.importproviders != null ? this.options.importproviders : this.answers.importproviders
    let importservice = this.options.importservice != null ? this.options.importservice : this.answers.importservice

    const moduleDir = path.join('app', 'src', 'modules');

    const creationFile = path.join(moduleDir, ('app.module.ts'));
    this.fs.copyTpl(
      this.templatePath('module.ts'),
      this.destinationPath(creationFile),
      {
        importvar,
        importentity,
        importcontroller,
        importservice
      },
    );
  }

};
