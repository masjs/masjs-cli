const program = require('commander')
const {
  handleSubmitCommand,
  handleFetchCommand
} = require('./actions/actions.js')

let versionNum = '0.0.1'

program
  .version(versionNum)

program
  .command('fetch [taskname]')
  .action(handleFetchCommand)

program
  .command('submit [taskname]')
  .action(handleSubmitCommand)


program.parse(process.argv)

if( process.argv.slice(2).length === 0 ){
  program.outputHelp()
}

