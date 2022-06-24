import Connection from "./Connection";

const dbConnect = new Connection("db_name_here", "db_user_here", "db_pass_here", {
    dialect: "mysql",
    port: 3306,
    host: "localhost",
});

export { dbConnect };