// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Company from '../../../app/controller/company';
import Home from '../../../app/controller/home';
import Job from '../../../app/controller/job';
import Robot from '../../../app/controller/robot';
import Upload from '../../../app/controller/upload';
import User from '../../../app/controller/user';
import AboutAbout from '../../../app/controller/about/about';
import AdminAdmin from '../../../app/controller/admin/admin';
import AppApp from '../../../app/controller/app/app';
import CategoryCategory from '../../../app/controller/category/category';
import IndexIndex from '../../../app/controller/index/index';

declare module 'egg' {
  interface IController {
    company: Company;
    home: Home;
    job: Job;
    robot: Robot;
    upload: Upload;
    user: User;
    about: {
      about: AboutAbout;
    };
    admin: {
      admin: AdminAdmin;
    };
    app: {
      app: AppApp;
    };
    category: {
      category: CategoryCategory;
    };
    index: {
      index: IndexIndex;
    };
  }
}
