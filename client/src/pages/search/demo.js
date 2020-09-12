import $conf from '@/common/config'
export default {
  hotSearch: [
    { text: '领卷中心' },
    { text: 'Redmi K20' },
    { text: 'Redmi Book 14' },
    { text: '智能积木 越野四驱车' },
    { text: '手环 腕带' },
  ],
  hotCate: [
    { text: '耳机' },
    { text: '手机' },
    { text: '音响' },
    { text: '手表' },
    { text: '配件' },
    { text: '网关/传感器' },
    { text: '健康' },
    { text: '酷玩' },
  ],
  filtrate: {
    index: 0,
    list: [
      { text: '综合', sort: 'asc' },
      { text: '销量', sort: '' },
      { text: '价格', sort: '' },
    ],
  },
  labelService: {
    index: 0,
    list: [{ text: '促销' }, { text: '分期' }, { text: '仅看有货' }],
  },
  labelCate: {
    index: 0,
    list: [{ text: '耳机' }, { text: '户外' }, { text: '配件' }],
  },
  dataList: [
    {
      cover: `${$conf.ossUrl}/phone/1.jpg`,
      title: '蓝牙耳机',
      desc: '雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作',
      sales: 199,
      comment_count: 1348,
      praise_count: '98%',
    },
    {
      cover: `${$conf.ossUrl}/phone/2.jpg`,
      title: '蓝牙耳机',
      desc: '雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作',
      sales: 199,
      comment_count: 1348,
      praise_count: '98%',
    },
    {
      cover: `${$conf.ossUrl}/phone/3.jpg`,
      title: '蓝牙耳机',
      desc: '雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作',
      sales: 199,
      comment_count: 1348,
      praise_count: '98%',
    },
    {
      cover: `${$conf.ossUrl}/phone/4.jpg`,
      title: '蓝牙耳机',
      desc: '雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作',
      sales: 199,
      comment_count: 1348,
      praise_count: '98%',
    },
    {
      cover: `${$conf.ossUrl}/phone/5.jpg`,
      title: '蓝牙耳机',
      desc: '雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作',
      sales: 199,
      comment_count: 1348,
      praise_count: '98%',
    },
  ],
}
