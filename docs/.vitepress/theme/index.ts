import DefaultTheme from 'vitepress/theme'
import FightingDesign from 'fighting-design'
import 'fighting-design/theme/style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(FightingDesign)
  }
}
