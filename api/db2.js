
const odbc = require('odbc');

var connection;

module.exports = {
  connect: async function(connectionString) {
    connection = await odbc.connect(connectionString);
  },

  callProcedure: async function(schema, name, bindings) {
    const results = await connection.callProcedure(null, schema, name, bindings);

    return results;
  }
}