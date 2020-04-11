import * as components from './component'
var VuePlugin = {}
VuePlugin.install = function(Vue, options) {
    for(let component in components) {
        Vue.component('ylw'+component, components[component]);
    }
}
export default VuePlugin