const http = require('http')

const app = require('./app')

const { loadPlanets } = require('./modals/planets.modal')

const PORT = process.env.PORT || 8000;

const server = http.createServer(app)

async function startServer() {
    await loadPlanets()
    
    server.listen(PORT, () => {
        console.log(`Listening to port ${PORT}..!`)
    })
}

startServer()



