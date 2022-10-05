import express from 'express';
import userRoutes from './routes/usuario.route';
import homeRoutes from './routes/home.route';

class Server {
    private app:express.Application;
    private port:string;
    private apiPath = {
        home: "/",
        usuarios: "/usuarios"
    }

    constructor(){
        this.app = express()
        this.port = process.env.PORT || "8000";
        this.routes();
    }

    routes(){
        this.app.use(this.apiPath.usuarios, userRoutes)
        this.app.use(this.apiPath.home, homeRoutes)
    }

    listen(){
        console.clear();
        this.app.listen(this.port, () => { 
            console.log("Server on http://localhost:8000");
        });
    }

}

export default Server;