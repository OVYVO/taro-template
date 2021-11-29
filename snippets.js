const fs = require('fs');

let snippets = {}
let tag = ['View','Image','Text','RichText','CoverView','CoverImage']

let taroclass = `
import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

export default class Index extends Component{
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount(){

  }
  componentDidShow () {

  }
  
  render(){
    return(
      <View className='$1-container'></View>
    )
  }

}
`
let tarofunc = `
import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import {
  useReady,
  useDidShow,
  useDidHide,
} from '@tarojs/taro'

import './index.scss'

export default function Index () {
  // 可以使用所有的 React Hooks
  useEffect(() => {})

  // 对应 onReady
  useReady(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  return (
    <View className='$1-container'></View>
  )
}
`

tag.forEach(item=>{
  snippets[item] ={
    "prefix": item,
    "body": [
      `<${item} className='$1'>$0</${item}>`
    ],
    "description": item
  }
})
snippets.taroclass = {
  "prefix": 'taroclass',
  "body": [taroclass],
  "description": 'taroclass'
}
snippets.tarofunc = {
  "prefix": 'tarofunc',
  "body": [tarofunc],
  "description": 'tarofunc'
}

fs.writeFile('./snippets/taro.json', JSON.stringify(snippets), (err) => {
  if (err) throw err;
  console.log('文件已被保存');
})

