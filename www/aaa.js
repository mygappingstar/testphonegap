var app = new Hoodie();

if (! app.account.username) {
  app.account.signIn('user', 'password').then(function(){
    console.log('not logged in')
  });
}
app.global.connect().done(
  function(){console.log('global connected')}
);
var myType='mehhh';
conn = function () {
  app.global.connect();

}
add1 = function () {
  app.store(myType).add({a:1}).done(function(){
  console.log('added')
    })
}
list = function() {
  app.store.findAll(myType).done(function(all){
    console.log(all);
  })
}
listAll = function () {
  app.global.findAll(myType).done(function(all){
    console.log(all)
  })
  .fail(function(e){
    console.log(e)
  })  
}
pubAll = function () {
  app.store.findAll(myType).publish().then(function(all){
    console.log('pubbed...')
  })
}
delAll = function () {
  app.store.removeAll(myType).then(function(all){
    console.log('killed...')
  })
}
