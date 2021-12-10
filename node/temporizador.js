const schedule = require('node-schedule')

/* Executa na quarta feira, qualquer dia, qualquer mes
 * as 20h de 5 em 5 minutos
 */
const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 3', function () {
    console.log('Chamada da agenda!!!', new Date().getSeconds())
}) 

//Criando uma regra de recorrencia com o schedule
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // Executa de segunda a sexta
regra.hour = 21
regra.second = 15

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Segunda Chamada da agenda!!!', new Date().getSeconds())
}) 