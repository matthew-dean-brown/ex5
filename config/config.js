import mysql from 'mysql2/promise'
import {config} from 'dotenv'
config()
const pool = mysql.createPool({
host:'127.0.0.1',
user:'root',
password:'root',
database:'shopleft'
})

export {pool}