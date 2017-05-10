const chalk = require('chalk')
const {
  isUndefined
} = require('../utils/utils.js')

module.exports = function handleSubmit (taskname) {
  let tPrompt = chalk.blue('Fetching')
  let tMsg = taskname
  
  
  if(isUndefined(taskname)){
    tMsg = `you must supply an argument to ${chalk.gray('masjs fetch «...»')}` 
    tPrompt = chalk.red('Error')
  } 

  if ( taskname === '.' ){
    tMsg = __dirname    
  }
 
  console.log( `${tPrompt} : ${tMsg}` )
  return {
    tMsg, 
    tPrompt
  }
}