module.exports = {
  connectionString: [
    `Driver=IBM i Access ODBC Driver`,
    `System=${process.env.DB2_SYSTEM}`,
    `UID=${process.env.DB2_UID}`,
    `Password=${process.env.DB2_PASSWORD}`,
    `DBQ=${process.env.DB2_LIBL}`,
    `Naming=1`,
  ].join(';'),
};
