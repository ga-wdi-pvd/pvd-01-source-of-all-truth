(function(){

  var request = new XMLHttpRequest();
  request.open('GET', './schedule.yml', true);
  var context = [];
  var yaml_lines = 0;
  var day_index = 0;
  request.onload = loadCalendarData;

  function loadCalendarData(){
    var res = this;
    if (res.status < 200 || res.status >= 400) {
      console.log("ERROR: " + res.status);
      return;
    } else {

      var doc = jsyaml.load(res.response)

      compileSchedule(doc); 

      updateTemplate(); 
    }
  }

  // Bug that omits the last day from the calendar....
  
  function compileSchedule(doc){
    var week = []

    for(var i = 0; i < doc[1].days.length; i++){
      if( ( i % 5 === 0 && i !== 0 ) || ( i+1 == doc[1].days.length ) ){
        week._index = context.length + 1
        context.push(week)
        week = []
        day_index += 2
      }

      var day = new Day(doc, i); 
      week.push(day);
      day_index++;
    }
  }

  function updateTemplate(){
    var tpl = app.innerHTML
    var template = Handlebars.compile(tpl)
    var html = template({weeks:context})
    document.querySelector(".events").innerHTML = html
    if(window.location.hash){
      if(window.location.hash === '#today' ){
        window.location.hash = '#' + moment().format("YYYY-MM-DD")
      }
      goTo(window.location.hash)
    }else{
      window.location.hash = '#' + moment().format("YYYY-MM-DD")
      goTo(window.location.hash)
    }
  }

  request.send();

  onhashchange = function(e){
    goTo(location.hash)
  }

  function goTo(hash){
    var id = hash.substr(1)
    var target = document.getElementById(id)
    try{
      document.querySelector(".target").classList.remove("target")
    } catch(e) {}
    if(!target) return
    target.classList.add("target")
    target.scrollIntoView()
  }

  today.onchange = function(event){
    window.location.hash = today.value
  }

  function Section(url,urls,time,start_date, event){
    this.date = start_date.format("ddd, MMM Do 'YY")
    this.yyyymmdd = start_date.format("YYYY-MM-DD")

    this.url = url;
    this.urls = urls;
    this.time = time;

    yaml_lines += (Object.keys(this).length); // not precisely on the right line...yet
    this["yamlLine"] = yaml_lines; // get line num for edit button

    for(var k in event[time]){
      this[k] = event[time][k];
    }
  }

  function Day(doc, i){
    let day = doc[1].days[i]

    this.section = day.day.map(function(event){
      var time = Object.keys(event)[0]
      if(typeof event[time].url === "string"){
        var url = event[time].url
      }
      if(typeof event[time].url === "object"){
        var urls = event[time].url.map(function(e){
          var title = Object.keys(e)[0]
          return {
            title: title,
            href: e[title]
          }
        })
      }

      delete event[time].url
      var start_date = moment(doc[0]["start-date"]).add(day_index,"days");
      var section = new Section(url, urls, time, start_date, event);
      return section;
    })
    this.date = this.section[0].date
    this.yyyymmdd = this.section[0].yyyymmdd

  }
})();
/*
 * pair with {{log this}} or some var in the handlebars view for debugging...
Template.registerHelper("log", function(something) {
    console.log(something);
});
*/
