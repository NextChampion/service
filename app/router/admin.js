/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-02-16 21:03:32
 * @LastEditTime: 2020-02-16 21:03:32
 * @LastEditors: zhangcunxia
 * @Description: 管理后台的接口
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.default.home.index);
  router.get('/list', controller.default.home.list);
};
