// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Comment from '../../../app/model/comment';
import Company from '../../../app/model/company';
import Job from '../../../app/model/job';
import MongoPaginate from '../../../app/model/mongoPaginate';
import Msg from '../../../app/model/msg';
import Room from '../../../app/model/room';
import User from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Comment: ReturnType<typeof Comment>;
    Company: ReturnType<typeof Company>;
    Job: ReturnType<typeof Job>;
    MongoPaginate: ReturnType<typeof MongoPaginate>;
    Msg: ReturnType<typeof Msg>;
    Room: ReturnType<typeof Room>;
    User: ReturnType<typeof User>;
  }
}
