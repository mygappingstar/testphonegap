// Compiled by ClojureScript 1.9.93 {}
goog.provide('app.routes');
goog.require('cljs.core');
goog.require('domkm.silk');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('app.states');
goog.require('goog.History');
app.routes.go_to = (function app$routes$go_to(url){
return (window.location["href"] = url);
});
app.routes.page_routes = domkm.silk.routes.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["login"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contact","contact",609093372),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contact"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sign-up"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("market","index","market/index",1681387553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["market"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("market","item","market/item",-812803922),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["market",new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("news","index","news/index",-1511855942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["news"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("news","item","news/item",254316859),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["news",new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","index","calendar/index",-1424533213),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["calendar"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","item","calendar/item",490480048),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["calendar",new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio","index","portfolio/index",-544646323),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["portfolio"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pages",new cljs.core.Keyword(null,"title","title",636505583)], null)], null)], null)], null));
app.routes.all_routes = domkm.silk.routes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.routes.page_routes], null));
app.routes.routing_state = cljs.core.atom.call(null);
app.routes.content_fading_in_QMARK_ = cljs.core.atom.call(null,true);
app.routes.scroll_to_content_BANG_ = (function app$routes$scroll_to_content_BANG_(){
var temp__4657__auto__ = document.getElementById("content");
if(cljs.core.truth_(temp__4657__auto__)){
var content = temp__4657__auto__;
cljs.core.reset_BANG_.call(null,app.routes.content_fading_in_QMARK_,false);

cljs.core.reset_BANG_.call(null,app.routes.content_fading_in_QMARK_,true);

return window.setTimeout(((function (content,temp__4657__auto__){
return (function (){
return cljs.core.reset_BANG_.call(null,app.routes.content_fading_in_QMARK_,false);
});})(content,temp__4657__auto__))
,(500));
} else {
return null;
}
});
app.routes.routing_handler = (function app$routes$routing_handler(event){
var url = event.token;
var new_route_state = domkm.silk.arrive.call(null,app.routes.all_routes,url);
cljs.core.reset_BANG_.call(null,app.routes.routing_state,new_route_state);

cljs.core.reset_BANG_.call(null,app.states.show_sidebar_QMARK_,false);

return app.routes.scroll_to_content_BANG_.call(null);
});
var h_15467 = (new goog.History());
goog.events.listen(h_15467,goog.history.EventType.NAVIGATE,app.routes.routing_handler);

var G__15466_15468 = h_15467;
G__15466_15468.setEnabled(true);

app.routes.item__GT_url_pattern = (function app$routes$item__GT_url_pattern(item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.name.call(null,item)], null)], null);

});
app.routes.module_url = (function app$routes$module_url(item){
return cljs.core.apply.call(null,domkm.silk.depart,app.routes.all_routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.name.call(null,item))], null));
});
app.routes.page_url = (function app$routes$page_url(item){
return cljs.core.apply.call(null,domkm.silk.depart,app.routes.all_routes,app.routes.item__GT_url_pattern.call(null,item));
});
app.routes.current_url_QMARK_ = (function app$routes$current_url_QMARK_(p__15469,item){
var map__15472 = p__15469;
var map__15472__$1 = ((((!((map__15472 == null)))?((((map__15472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15472):map__15472);
var route = map__15472__$1;
var route_name = cljs.core.get.call(null,map__15472__$1,new cljs.core.Keyword("domkm.silk","name","domkm.silk/name",607245322));
var title = cljs.core.get.call(null,map__15472__$1,new cljs.core.Keyword(null,"title","title",636505583));
return ((cljs.core._EQ_.call(null,"module",cljs.core.namespace.call(null,item))) && ((cljs.core._EQ_.call(null,cljs.core.name.call(null,item),cljs.core.namespace.call(null,route_name))) || (((cljs.core.namespace.call(null,route_name) == null)) && (cljs.core._EQ_.call(null,cljs.core.name.call(null,item),cljs.core.name.call(null,route_name)))))) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pages","pages",-285406513),route_name)) && (cljs.core._EQ_.call(null,"pages",cljs.core.namespace.call(null,item))) && (cljs.core._EQ_.call(null,title,cljs.core.name.call(null,item))));
});

//# sourceMappingURL=routes.js.map