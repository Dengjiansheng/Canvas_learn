const Base = require('./base.js');
// const execTime = require('../middleware/koa-execTime');

module.exports = class extends Base {
  indexAction() {
    console.log(this.ctx.state.x);
    return this.display();
  }
};
