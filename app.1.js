new Vue({
  // tell Vue what element to control
  el: '#app',
  // tell Vue all the data that is relevant to this instance
  data: {
    // the variable 'title' can now be used in template tags {{}} in the HTML
    // but the template tags must occur niside of the #app instance
    statement: 'becoming a Vue ninja',
    name: 'Mike',
    url: 'http://google.com',
    classes: ['one', 'two'],
    wage: 50,
    coords: {
      x: 0,
      y: 0
    } 
    },
  methods: {
    // can invoke the function/method exactly the same as a data variable, inside {{}}
    greet(timeOfDay){
      this.title 
      return `Good ${timeOfDay} there ${this.name}, you are ${this.statement}`
    },
    changeWage(amount) {
      this.wage += amount
    },
    logEvent(e) {
      console.log(e)
    },
    logCoords(e) {
      this.coords.x = e.offsetX
      this.coords.y = e.offsetY
    },
    updateName(e) {
      this.name = e.target.value
    },
    logMessage() {
      console.log('test button log message')
    }
  }
})