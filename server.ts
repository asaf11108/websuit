/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
import '@angular/localize/init';
import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as  compression from 'compression';
import * as  nodemailer from 'nodemailer';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();

  server.use(cookieParser());
  server.use(bodyParser.json()); 
  server.use(compression());
  
  const distFolder = join(process.cwd(), 'dist/websuit/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  const domino = require("domino");
  const win = domino.createWindow(distFolder + indexHtml);
  global["window"] = win;
  global["document"] = win.document;

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  server.post('/contact-us', (req, res) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'webking.online.info@gmail.com',
        pass: 'webking123'
      }
    });
    
    const mailOptions = {
      from: 'webking.online.info@gmail.com',
      to: ['asaf11108@gmail.com', 'leon.good.life@gmail.com'],
      subject: 'Email from WebKing',
      text: `Name: ${req.body.name}\n\nEmail: ${req.body.email}\n\nMessage: ${req.body.message}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) res.json(error);
      else res.json(info);
    });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
