const sql = require("mssql");

const config = {
  user: "jaysonguyendb", // better stored in an app setting such as process.env.DB_USER
  password: "Thanhnguyen1", // better stored in an app setting such as process.env.DB_PASSWORD
  server: "jaysonguyendb.database.windows.net", // better stored in an app setting such as process.env.DB_SERVER
  port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
  database: "jaysonguyendb", // better stored in an app setting such as process.env.DB_NAME
  authentication: {
    type: "default",
  },
  options: {
    encrypt: true,
  },
};

console.log("Starting...");

const getUser = async () => {
  try {
    var poolConnection = await sql.connect(config);

    console.log("Reading rows from the Table...");
    var resultSet = await poolConnection
      .request()
      .query(`SELECT * FROM doUong`);

    poolConnection.close();
    if (resultSet) {
      return {
        EM: "Get data successful",
        EC: 0,
        DT: resultSet.recordset,
      };
    } else {
      //empty result
      return {
        EM: "Get data successful",
        EC: 0,
        DT: [],
      };
    }
  } catch (err) {
    console.log(err);
    return {
      EM: "Error from services",
      EC: 1,
      DT: "",
    };
  }
};

const insertMonAn = async () => {
  try {
    var poolConnection = await sql.connect(config);
    var resultSet = await poolConnection.query(
      `Insert into Datmonannhanh (mamonan, tenmonan) values (24, 'Thit Lon')`
    );
    poolConnection.close();
    if (resultSet) {
      return {
        EM: "Insert data successfull",
        EC: 0,
        DT: resultSet.recordset,
      };
    } else {
      return {
        EM: "Insert data successfull",
        EC: 0,
        DT: [],
      };
    }
    // console.log(resultSet);
  } catch (err) {
    console.log(err);
    return {
      EM: "Error from services",
      EC: 1,
      DT: "",
    };
  }
};

// xoa mon an
const deleteMonAn = async (id) => {
  try {
    var poolConnection = await sql.connect(config);

    console.log("Reading rows from the Table...");
    var resultSet = await poolConnection.query(
      `Delete from Datmonannhanh where mamonan like '${id}'`
    );
    poolConnection.close();
    if (resultSet) {
      return {
        EM: "Delete data successfull",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "Delete data successfull",
        EC: 0,
        DT: [],
      };
    }
  } catch (err) {
    console.log(err);
    return {
      EM: "Error from services",
      EC: 1,
      DT: "",
    };
  }
};

//controller

let getMeal = async () => {
  try {
    let monan = await getUser();
    console.log(monan);
  } catch (error) {
    console.log(error);
  }
};

let deleteMeal = async () => {
  try {
    await deleteMonAn(2);
    await console.log(getMeal());
  } catch (err) {
    console.log(err);
  }
};

//test push git hub lan cuoi cung trong dem 

// getMeal();
insertMonAn();

//kjashdkashdkhaskjdhakshd Thao My da sua dong nay
// Thanhf Nguyen sua lai Dong nay cua My
console.log("hahahahahahah ");

