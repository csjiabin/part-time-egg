// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Access from '../../../app/middleware/access';
import Locals from '../../../app/middleware/locals';

declare module 'egg' {
  interface IMiddleware {
    access: typeof Access;
    locals: typeof Locals;
  }
}
