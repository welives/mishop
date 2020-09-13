import $conf from '@/common/config'
export default {
  dataList: [
    {
      checked: false,
      id: 1,
      title: '商品标题1',
      cover: `${$conf.ossUrl}/phone/1.jpg`,
      spec: [
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
      price: 996,
      num: 1,
      buy_min: 1,
      stock: 999,
    },
    {
      checked: false,
      id: 2,
      title: '商品标题2',
      cover: `${$conf.ossUrl}/phone/2.jpg`,
      spec: [
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
      price: 997,
      num: 2,
      buy_min: 1,
      stock: 999,
    },
    {
      checked: false,
      id: 3,
      title: '商品标题3',
      cover: `${$conf.ossUrl}/phone/3.jpg`,
      spec: [
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
      price: 715,
      num: 3,
      buy_min: 1,
      stock: 999,
    },
  ],
}
