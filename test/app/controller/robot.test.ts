import { app } from 'egg-mock/bootstrap';
import * as powerAssert from 'power-assert';

describe('test/app/controller/robot.test.ts', () => {
  it('should GET /api/robot', async () => {
    const result = await app.httpRequest().get('/api/robot', {
      text: 'hello,word!'
    }).expect(200);
    powerAssert(result.body.success === true);
  });
});
