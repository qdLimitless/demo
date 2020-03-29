import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?'
  // Object.assign将后面两个参数合并到第一个参数中
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uid: '0',
    needNewCode: 1,
    format: 'json'
  })

  return jsonp(url, data, options)
}

export function getDiscList () {
  const url = '/api/getDiscList'
  
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongList (disstid) {
  let url = '/api/getDisc'
  let data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq.json',
    hostUin: 0,
    needNewCode: 0,
    notice: 0,
    inCharset: 'utf8',
    outCharset: 'utf-8',
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
