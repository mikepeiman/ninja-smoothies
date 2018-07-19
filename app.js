new Vue({
  el: '#app',
  data: {
    name: 'Mike',
    age: 38,
    title: 'Cool stuff',
    showName: true,
    showAge: true,
    ninjas: [
      { name: 'Mikesan', age: 38, belt: 'Gold' },
      { name: 'Melissan', age: 26, belt: 'Black' },
      { name: 'Kayasan', age: 4.95, belt: 'Green' },
    ]
  },
  methods: {
  toggleName() {
    this.showName = !this.showName
  },
  toggleAge() {
    this.showAge = !this.showAge
  }
  }
})