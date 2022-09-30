import {connect, connection} from 'mongoose'

const conn = {
    isConnected: false
}

export async function dbConnect() {

    if (conn.isConnected){
        return
    }

    const user = 'admin'
    const password = 'ISeeestars99l'

    const db = await connect(`mongodb+srv://${user}:${password}@elclusterdedonaldo.qcnjput.mongodb.net/?retryWrites=true&w=majority`)
    conn.isConnected = db.connections[0].readyState
    console.log(db.connection.db.databaseName);

}

connection.on('connected', () => {
    console.log('DB is running');
})

connection.on('error', error => {
    console.log(error);
})

