import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
// import fetch from 'node-fetch';
// import fetch from 'node-fetch';
import axios from 'axios';



class UsuarioController {

    documento:any = "";
    url:string = "";

    constructor() {
        this.documento = 47479298;
        this.url = `https://ww1.sunat.gob.pe/ol-ti-itatencionf5030/registro/solicitante?tipDocu=1&numDocu=${this.documento}`;
    }

    getUsuarios(req:Request, res:Response):any {

        res.json({
            msg: "usuarios",
            
        })
    }

    async getUsuario(req:Request, res:Response) {

        const { id } = req.params;

        const response:any = await fetch(this.url, { method: 'POST' });
        console.log(response);
        // console.log(response.headers.get('set-cookie'));

        const response2:any = await fetch(
            this.url,
            { 
                method: 'POST',
                headers: {
                    cookie: response.headers.get('set-cookie')
                }
            }
        );
        console.log(response2);
        const data = await response2.json();
        console.log(data);

        res.json({
            msg: "usuarios",
            id,
            data
        })
    }

    postUsuario(req:Request, res:Response) {

        const { body } = req;

        res.json({
            msg: "usuarios",
            body
        })
    }

    putUsuario(req:Request, res:Response) {

        const { id } = req.params;
        const { body } = req;

        res.json({
            msg: "usuarios",
            id,
            body
        })
    }

    deleteUsuario(req:Request, res:Response) {

        const { id } = req.params;

        res.json({
            msg: "usuarios"
        })

    }

    
    // async enviarCorreo(req:Request, res:Response) {

    //     let transporter:nodemailer.Transporter = nodemailer.createTransport({
    //         host: "smtp.gmail.com",
    //         port: 465,
    //         secure: true, // true for 465, false for other ports
    //         auth: {
    //             user: "eg.miloti@gmail.com", // generated ethereal user
    //             pass: "rnca lhsu pvvr bznq", // generated ethereal password
    //         },
    //     });

    //     await transporter.sendMail({
    //         from: '"Fred Foo" <renato@pruebasdecorreo.com>', // sender address
    //         to: "renatoluhe@gmail.com", // list of receivers
    //         subject: "Hello ", // Subject line
    //         // text: "Hello world?", // plain text body
    //         html: "<h1>Hello world?</h1>", // html body
    //     });




    //     res.json({
    //         msg: "enviar correo"
    //     })
    // }

    // async getWithAx(req:Request, res:Response){

    //     console.log(this.url);

    //     let resto:any;

    //     const ruta:string = "https://ww1.sunat.gob.pe/ol-ti-itatencionf5030/registro/solicitante?tipDocu=1&numDocu=47479298"
        
    //     try {
    //         resto = await axios.post(ruta);
    //         // console.log(resto.data);
    //     } catch (error) {
    //         console.log(error);
    //     }

    //     res.json(resto.data)

    // }


}

export default new UsuarioController();