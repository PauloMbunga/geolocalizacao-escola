console.log('process.env.DATABASEE_URL :>> ', process.env.DATABASE_URL);
 module.exports = {
   "type": "postgres",
   "url": process.env.DATABASE_URL,
   "synchronize": false,
   "logging": false,

   "entities": [
      "dist/models/**/*.js"
   ],
   "migrations": [
      "dist/database/migration/**/*.js"
   ],
   "subscribers": [
      "dist/database/subscriber/**/*.js"
   ],
   "cli": {
      "migrationsDir": "src/database/migration",
   }
}