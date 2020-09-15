import $conf from '@/common/config'
export default {
  tabBars: [
    { text: '全部', type: 'all', cover: `${$conf.ossUrl}/no_pay.png` },
    { text: '待付款', type: 'paying', cover: `${$conf.ossUrl}/no_pay.png`, msg: '您还没有待付款订单' },
    { text: '待收货', type: 'receiving', cover: `${$conf.ossUrl}/no_receiving.png`, msg: '您还没有待收货订单' },
    { text: '待评价', type: 'comment', cover: `${$conf.ossUrl}/no_comment.png`, msg: '您还没有待评价订单' },
  ],
  hotList: [
    {
      id: 1,
      cover: `${$conf.ossUrl}/phone/1.jpg`,
      title: '米家空调',
      desc: '1.5匹支流变频',
      price: 2699,
      sales: 2199,
    },
    {
      id: 2,
      cover: `${$conf.ossUrl}/phone/2.jpg`,
      title: '米家空调',
      desc: '1.5匹支流变频',
      price: 2699,
      sales: 2199,
    },
    {
      id: 3,
      cover: `${$conf.ossUrl}/phone/1.jpg`,
      title: '米家空调',
      desc: '1.5匹支流变频',
      price: 2699,
      sales: 2199,
    },
    {
      id: 4,
      cover: `${$conf.ossUrl}/phone/2.jpg`,
      title: '米家空调',
      desc: '1.5匹支流变频',
      price: 2699,
      sales: 2199,
    },
  ],
  dataList: [
    {
      created_at: '2020-09-15',
      status: '已发货',
      goods: [
        {
          cover: `${$conf.ossUrl}/phone/2.jpg`,
          title: '小米8',
          price: 1999,
          attr: '金色',
          num: 1,
        },
        {
          cover: `${$conf.ossUrl}/phone/3.jpg`,
          title: '小米10',
          price: 3999,
          attr: '红色',
          num: 1,
        },
      ],
    },
    {
      created_at: '2020-09-15',
      status: '未发货',
      goods: [
        {
          cover: `${$conf.ossUrl}/phone/3.jpg`,
          title: '华为Mate',
          price: 3999,
          attr: '黑色',
          num: 1,
        },
      ],
    },
    {
      created_at: '2020-09-15',
      status: '未发货',
      goods: [
        {
          cover: `${$conf.ossUrl}/phone/3.jpg`,
          title: 'iPhone 12',
          price: 3999,
          attr: '黑色',
          num: 1,
        },
      ],
    },
  ],
}
