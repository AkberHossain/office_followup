export default ({ app, router, Vue }) => {
  // something to do
  var bus = new Vue()
  Object.defineProperties(Vue.prototype, { $bus: { get: function () { return bus } } })
}
