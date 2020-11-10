import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faCircleNotch as fasCircleNotch,
  faChevronLeft as fasChevronLeft,
  faChevronDown as fasChevronDown,
  faCheck as fasCheck,
  faTimes as fasTimes
} from '@fortawesome/free-solid-svg-icons'

import {
  faEnvelopeOpen as farEnvelopeOpen,
  faCheckCircle as farCheckCircle
} from '@fortawesome/free-regular-svg-icons'

library.add(
  fasCircleNotch, fasChevronLeft, fasChevronDown, fasCheck, fasTimes
)

library.add(
  farEnvelopeOpen, farCheckCircle
)

Vue.component('fa', FontAwesomeIcon)
