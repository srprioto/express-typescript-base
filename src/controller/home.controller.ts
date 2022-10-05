import { Request, Response } from 'express';

class HomeController {

    constructor(){}

    getHome(req:Request, res:Response):any {

        res.json({
            msg: "hola mundo",
            
        })
    }
}

export default new HomeController();