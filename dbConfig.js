


var express = require('express');
var oracledb = require('oracledb');



function dbConfig() {
    //user          : process.env.NODE_ORACLEDB_USER || "system",
    this.user = process.env.NODE_ORACLEDB_USER || "BEACON";

    // Instead of hard coding the password, consider prompting for it,
    // passing it in an environment variable via process.env, or using
    //  Authentication.
    //password      : process.env.NODE_ORACLEDB_PASSWORD || "Wellness123",
    this.password = process.env.NODE_ORACLEDB_PASSWORD || "Oracle#123";

    // For information on connection strings see:
    // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#connectionstrings
    //connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost:1521/xe",
   // this.connectString = process.env.NODE_ORACLEDB_CONNECTIONSTRING || "10.226.6.33:1521/IESDB";
    this.connectString = process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost:1521/orcl.infics.com"

    // Setting externalAuth is optional.  It defaults to false.  See:
    // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#extauth
    this.externalAuth = process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false;

    this.oracledbInst = oracledb;

    //Each non-pooled connection and each session in the connection pool has its own cache of statements with a default size of 30
    this.stmtCacheSize = 30;

    this.poolMax = 10;

    this.poolMin = 2;

    this.poolIncrement = 1;

    this.poolTimeout = 2;

    this.getConnectAttrInst = {
        user          : process.env.NODE_ORACLEDB_USER || "BEACON",
        password      : process.env.NODE_ORACLEDB_PASSWORD || "Oracle#123",
        connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost:1521/orcl.infics.com"
    }

}

module.exports = new dbConfig();
