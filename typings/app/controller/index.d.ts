// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Company from '../../../app/controller/company';
import Home from '../../../app/controller/home';
import Job from '../../../app/controller/job';
import Upload from '../../../app/controller/upload';
import User from '../../../app/controller/user';
import AboutAbout from '../../../app/controller/about/about';
import AppApp from '../../../app/controller/app/app';

declare module 'egg' {
  interface IController {
    company: Company;
    home: Home;
    job: Job;
    upload: Upload;
    user: User;
    about: {
      about: AboutAbout;
    };
    app: {
      app: AppApp;
    };
  }
}