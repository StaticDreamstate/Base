import { Sequelize, Options } from "sequelize";

export default class Connection {

    private instance: Sequelize | undefined;
    private db_name: string;
    private db_user: string;
    private db_pass: string;
    private db_config: Options;

    constructor(
        dbName: string,
        dbUser: string,
        dbPass: string,
        dbConfig: Options
    ) {

        this.db_name = dbName;
        this.db_user = dbUser;
        this.db_pass = dbPass;
        this.db_config = dbConfig;

        try {
            this.instance = new Sequelize(
                this.db_name,
                this.db_user,
                this.db_pass,
                this.db_config
            );
        } catch(error) {
            console.log("Error.");
            throw error;
        }
    }

    getInstance() {
        return this.instance;
      }

};