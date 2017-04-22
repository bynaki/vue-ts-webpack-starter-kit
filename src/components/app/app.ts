import './app.css'
import Vue from 'vue'
import Component from 'vue-class-component'
import {join} from 'path'
import {
  Logger,
  DeclareLogger,
} from '../../utils'


@Component({
  name: 'app',
  template: require('./app.html')
})
@DeclareLogger()
export class AppComponent extends Vue {
  log: Logger

  mounted() {
    this.log.info('mounted')
  }
}
export default AppComponent
