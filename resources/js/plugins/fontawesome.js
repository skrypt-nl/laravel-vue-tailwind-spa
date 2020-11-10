import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faCircleNotch as fasCircleNotch,
  faChevronLeft as fasChevronLeft
} from '@fortawesome/free-solid-svg-icons'

import {
  faEnvelopeOpen as farEnvelopeOpen,
  faCheckCircle as farCheckCircle
} from '@fortawesome/free-regular-svg-icons'

library.add(
  fasCircleNotch, fasChevronLeft
)

library.add(
  farEnvelopeOpen, farCheckCircle
)

Vue.component('fa', FontAwesomeIcon)
