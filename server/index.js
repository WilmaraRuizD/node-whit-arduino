
import { SerialPort } from 'serialport';
import * as dotenv from "dotenv";

dotenv.config();

const port=new SerialPort(
    {path: process.env.PUERTO, baudRate: 9600 });
      
      port.on('data', function (data) {
        // console.log('Data:',(JSON.stringify(data)))
        // console.log(data.toString('utf8'));
        const sensor=data.toString('utf8')
        console.log(sensor);

      })

      
