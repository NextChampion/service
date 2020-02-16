/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-02-16 21:01:57
 * @LastEditTime: 2020-02-16 21:01:57
 * @LastEditors: zhangcunxia
 * @Description:博客接口
 */

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, api';
  }

  async list() {
    const { ctx } = this;
    ctx.body = 'list';
  }
}

module.exports = HomeController;
