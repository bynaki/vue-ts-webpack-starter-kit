import Vue from 'vue'
import Component from 'vue-class-component'
import {join} from 'path'
import {
  Logger,
  DeclareLogger,
} from '../../utils'
import 'bootstrap'


@Component({
  name: 'hello',
  template: require('./hello.html'),
})
@DeclareLogger()
export class HelloComponent extends Vue {
  log: Logger

  mounted() {
    this.log.info('mounted')
  }

  onClick() {
    this.log.info('click!!')
    $('#myModal').modal('show')
  }
}
export default HelloComponent
