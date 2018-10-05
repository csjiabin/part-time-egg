// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Test from '../../../app/service/Test';
import Company from '../../../app/service/company';
import Job from '../../../app/service/job';
import User from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    test: Test;
    company: Company;
    job: Job;
    user: User;
  }
}
