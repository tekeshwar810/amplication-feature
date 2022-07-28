import { createLogger, format, transports } from "winston";
import 'winston-daily-rotate-file'

const getLoagger = (fileName = 'application') => {
    const fileLogTransport = new transports.DailyRotateFile({
        filename:`logs/${fileName}-%DATE%.log`,
        datePattern:'YYYY-MM-DD',
        json:true,
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '30d'
    })

    const consoleTransport = new transports.Console({
        level: 'error',
        handleExceptions: false,
        // json: false,
        // colorize: true,
        format: format.printf((i) => `${i.message}`),
      });
      
    const logger = createLogger({
        level: 'info',
        format: format.combine(
          format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
          }),
          
          format.errors({ stack: true }),
          format.splat(),
          format.printf(
            ({ level, message, label = process.env.NODE_ENV, timestamp }) =>
              `${timestamp} [${label}] ${level}: ${message}`
          )
        ),
        defaultMeta: { service: 'my-app' },
        transports: [consoleTransport],
      });
      logger.add(fileLogTransport);
    //   let log:any = logger.stream
      
    //   logger.stream = {
    //          write: function (message:any, _encoding:any){
    //         return logger.info(message);
    //   }
    //   }
    class MyStream {
        write(text: string) {
            logger.info(text)
        }
    }
    let myStream = new MyStream()
    return { logger:logger,stream:myStream }
   
}
export default getLoagger();