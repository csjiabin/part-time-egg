// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Company from '../../../app/model/company';
import Job from '../../../app/model/job';
import User from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Company: ReturnType<typeof Company>;
    Job: ReturnType<typeof Job>;
    User: ReturnType<typeof User>;
  }
}
