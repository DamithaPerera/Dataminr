import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: "mysql-5e6c904b-e85e-4bd2-9905-c21683402e28-dataminr3139456993-c.a.aivencloud.com",
    user: "avnadmin",
    password: "AVNS_Z8-SCAq9rtvIJJouEaA",
    database: 'defaultdb',
    port: 11716
});
console.log('⚡ DB connected')


export default connection;

