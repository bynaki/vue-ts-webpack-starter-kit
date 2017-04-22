import './welcome.css'
import Vue from 'vue'
import Component from 'vue-class-component'
import {join} from 'path'
import {
  Logger,
  DeclareLogger,
} from '../../utils'


@Component({
  name: 'welcome',
  template: require('./welcome.html'),
})
@DeclareLogger()
export class WelcomeComponent extends Vue {
  log: Logger
  msg: string = ''

  mounted() {
    this.log.info('mounted')
    this.msg = 'Welcome to Your Vue.js App'
  }
}
export default WelcomeComponent
