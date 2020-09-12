import $conf from '@/common/config'
export default {
  tabBars: [
    {
      id: 1,
      name: '关注',
    },
    {
      id: 2,
      name: '推荐',
    },
    {
      id: 3,
      name: '体育',
    },
    {
      id: 4,
      name: '热点',
    },
    {
      id: 5,
      name: '财经',
    },
    {
      id: 6,
      name: '娱乐',
    },
    {
      id: 7,
      name: '军事',
    },
    {
      id: 8,
      name: '历史',
    },
    {
      id: 9,
      name: '本地',
    },
  ],
  carousel: [
    { src: `${$conf.ossUrl}/banner1.jpg` },
    { src: `${$conf.ossUrl}/demo4.jpg` },
    { src: `${$conf.ossUrl}/demo8.jpg` },
  ],
  cateList: [
    { src: `${$conf.ossUrl}/cate/1.gif`, name: '新品分类' },
    { src: `${$conf.ossUrl}/cate/2.gif`, name: '小米众筹' },
    { src: `${$conf.ossUrl}/cate/3.gif`, name: '以旧换新' },
    { src: `${$conf.ossUrl}/cate/4.gif`, name: '1分拼团' },
    { src: `${$conf.ossUrl}/cate/5.gif`, name: '超值特卖' },
    { src: `${$conf.ossUrl}/cate/6.gif`, name: '小米秒杀' },
    { src: `${$conf.ossUrl}/cate/7.gif`, name: '真心想要' },
    { src: `${$conf.ossUrl}/cate/8.gif`, name: '电视热卖' },
    { src: `${$conf.ossUrl}/cate/9.gif`, name: '家电热卖' },
    { src: `${$conf.ossUrl}/cate/10.gif`, name: '米粉卡' },
  ],
  threeAd: {
    left: { src: `${$conf.ossUrl}/demo1.jpg` },
    rightTop: { src: `${$conf.ossUrl}/demo22.jpg` },
    rightBottom: { src: `${$conf.ossUrl}/demo3.jpg` },
  },
  bigAd: {
    title: '每日精选',
    cover: `${$conf.ossUrl}/demo4.jpg`,
  },
  goodsList: [
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
}
