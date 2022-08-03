import Vue from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

Vue.filter('formatDate', val => dayjs(val).fromNow())
// Vue.filter('formatDateTime', val => dayjs(val).format('MMM D, YYYY h:mm A'))