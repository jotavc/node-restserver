//==================================================
//      Puerto
//==================================================
process.env.PORT = process.env.PORT || 3000;

//==================================================
//      Entorno
//==================================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';




//==================================================
//      Vencimiento del Token
//==================================================
// 60 segundos
// 60 segundos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = '48h';

//==================================================
//      SEED de autenticacion
//==================================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//==================================================
//      Base de datos
//==================================================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


//==================================================
//      Google Client ID
//==================================================
process.env.CLIENT_ID = process.env.CLIENT_ID || '491809850129-fom5lcbpvp051o69olt4pvtleoii9vvg.apps.googleusercontent.com';