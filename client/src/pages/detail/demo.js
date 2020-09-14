import $conf from '@/common/config'
export default {
  carousel: [
    { src: `${$conf.ossUrl}/phone/1.jpg` },
    { src: `${$conf.ossUrl}/phone/2.jpg` },
    { src: `${$conf.ossUrl}/phone/3.jpg` },
    { src: `${$conf.ossUrl}/phone/4.jpg` },
  ],
  detail: {
    id: 10,
    title: '小米MIX3 6GB+128GB',
    desc: '磁动力滑盖全面屏 / 前后旗舰AI双摄 / 四曲面彩色陶瓷机身 / 高效10W无线充电',
    cover: `${$conf.ossUrl}/cate_01.png`,
    price: 3299,
    num: 1,
    buy_min: 1,
    stock: 999,
  },
  baseAttrs: [
    { icon: 'icon-cpu', title: 'CPU', desc: '骁龙845八核' },
    { icon: 'icon-cpu', title: 'CPU', desc: '骁龙845八核' },
    { icon: 'icon-cpu', title: 'CPU', desc: '骁龙845八核' },
    { icon: 'icon-cpu', title: 'CPU', desc: '骁龙845八核' },
    { icon: 'icon-cpu', title: 'CPU', desc: '骁龙845八核' },
  ],
  comments: [
    {
      username: '煎蛋',
      avatar: 'http://qfjny782p.hn-bkt.clouddn.com/demo/default.jpg',
      created_at: '2020-09-12',
      praise_count: 111,
      content: 'uni-app仿小米商城实战项目',
      imageList: [
        'http://qfjny782p.hn-bkt.clouddn.com/demo/phone/1.jpg',
        'http://qfjny782p.hn-bkt.clouddn.com/demo/phone/2.jpg',
        'http://qfjny782p.hn-bkt.clouddn.com/demo/phone/3.jpg',
      ],
    },
    {
      username: '绿师',
      avatar: 'http://qfjny782p.hn-bkt.clouddn.com/demo/userpic/10.jpg',
      created_at: '2020-09-12',
      praise_count: 111,
      content: 'uni-app仿小米商城实战项目',
      imageList: [
        'http://qfjny782p.hn-bkt.clouddn.com/demo/phone/1.jpg',
        'http://qfjny782p.hn-bkt.clouddn.com/demo/phone/3.jpg',
        'http://qfjny782p.hn-bkt.clouddn.com/demo/phone/5.jpg',
      ],
    },
    {
      username: '咸鱼',
      avatar: 'http://qfjny782p.hn-bkt.clouddn.com/demo/userpic/3.jpg',
      created_at: '2020-09-12',
      praise_count: 111,
      content: 'uni-app仿小米商城实战项目',
      imageList: [
        'http://qfjny782p.hn-bkt.clouddn.com/demo/phone/2.jpg',
        'http://qfjny782p.hn-bkt.clouddn.com/demo/phone/4.jpg',
        'http://qfjny782p.hn-bkt.clouddn.com/demo/phone/6.jpg',
      ],
    },
    {
      username: '女神',
      avatar: 'http://qfjny782p.hn-bkt.clouddn.com/demo/userpic/14.jpg',
      created_at: '2020-09-12',
      praise_count: 111,
      content: 'uni-app仿小米商城实战项目',
      imageList: [
        'http://qfjny782p.hn-bkt.clouddn.com/demo/phone/6.jpg',
        'http://qfjny782p.hn-bkt.clouddn.com/demo/phone/5.jpg',
        'http://qfjny782p.hn-bkt.clouddn.com/demo/phone/4.jpg',
      ],
    },
  ],
  context: `
<p>
  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a3a59ce66c43a5fc38eeb3625947c411.jpg">
  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2b9b1262b6184b4696f0a6c0b012357f.jpg">
  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d928b517823df058c911c6e5da841b16.jpg">
  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d2c844f074858bc2c2c55cae5ef8902.jpg">
  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3abc766a307a2f93b5e23a2e81749d0f.jpg">
  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2dbee9feae79452f855cad31f5a42863.jpg">
  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d73879d0954e792b6965f191753b04a8.jpg">
  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27ce4c6fa032d81e238d29e7900e7754.jpg">
  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/732754e14457be2c23186245d2fcf563.jpg">
  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c2599aa00ec142cd584964398779420b.jpg">
  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/538d339e5c3a408a6ab931286814243f.jpg">
</p>`,
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
  specList: [
    {
      title: '颜色',
      index: 0,
      list: [{ text: '火焰红' }, { text: '炭黑' }, { text: '冰川蓝' }],
    },
    {
      title: '容量',
      index: 0,
      list: [{ text: '64GB' }, { text: '128GB' }],
    },
    {
      title: '套餐',
      index: 0,
      list: [{ text: '标配' }, { text: '套餐一' }, { text: '套餐二' }],
    },
  ],
}
