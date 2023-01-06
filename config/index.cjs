/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx6f3709f88f919692',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7d346d3ae732d47a37831d1f65475fa6',

  PROVINCE: '江苏',
  CITY: '无锡',

  USERS: [
    {
      // 想要发送的人的名字
      name: '我',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oVLhj6i8m1NhPjKCHLHtYmr6dSWI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'yrZjl2QcH65kLy1dClWUGrC8GKGbtZ3XSw2iPDt-frY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '跑跑', year: '1995', date: '02-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // 换成了阴历
        {
          type: '*生日', name: '慧慧', year: '1995', date: '07-20',
        },
        {
          type: '节日', name: '结婚纪念日', year: '2021', date: '04-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2017-12-30' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2021-04-19' },
        // 举办婚礼的日子
        { keyword: 'wedding_day', date: '2022-10-06' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '慧慧',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oVLhj6p6HPLzg7HXFxvmjw4TI8aY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'yrZjl2QcH65kLy1dClWUGrC8GKGbtZ3XSw2iPDt-frY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '跑跑', year: '1995', date: '02-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // 换成了阴历
        {
          type: '*生日', name: '慧慧', year: '1995', date: '07-20',
        },
        {
          type: '节日', name: '结婚纪念日', year: '2021', date: '04-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2017-12-30' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2021-04-19' },
        // 举办婚礼的日子
        { keyword: 'wedding_day', date: '2022-10-06' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'ky-irDcHD6KWnxmlpzUzOjz5SLxHWmJSDsqCBsEb_uU',

  CALLBACK_USERS: [
    {
      name: '我',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oVLhj6i8m1NhPjKCHLHtYmr6dSWI',
    }
  ],

}

module.exports = USER_CONFIG

