/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-02-16 21:03:28
 * @LastEditTime: 2020-02-16 21:03:28
 * @LastEditors: zhangcunxia
 * @Description:博客前台的接口路由
 */
'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.index);
};
