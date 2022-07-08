import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'

const config = defineConfig({
  title: 'Fighting Design',
  head: [['link', { rel: 'icon', href: 'https://tianyuhao.cn/fighting/imgs/FightingDesign.svg' }]],
  description,
  base: '/',
  themeConfig: {
    logo: 'https://tianyuhao.cn/fighting/imgs/FightingDesign.svg',
    nav,
    sidebar
  }
})

export default config
