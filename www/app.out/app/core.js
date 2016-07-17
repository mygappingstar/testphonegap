// Compiled by ClojureScript 1.9.93 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('hoodie.store');
goog.require('markdown.core');
goog.require('app.states');
goog.require('app.pages');
goog.require('alandipert.storage_atom');
goog.require('javelin.core');
goog.require('cljs.core.async');
goog.require('rum.core');
goog.require('app.media_queries');
goog.require('hoodie.account');
goog.require('app.collections');
goog.require('app.routes');
goog.require('clojure.string');
goog.require('app.i18n');
if(typeof app.core.app !== 'undefined'){
} else {
app.core.app = (new Hoodie());
}
if(typeof app.core.market_value !== 'undefined'){
} else {
app.core.market_value = alandipert.storage_atom.local_storage.call(null,javelin.core.cell.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"market-value","market-value",-700469695));
}
cljs.core.reset_BANG_.call(null,alandipert.storage_atom.storage_delay,(1000));
if(typeof app.core.account_store !== 'undefined'){
} else {
app.core.account_store = hoodie.account.create_account_store.call(null,app.core.app,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
}
app.core.app.account.authenticate().done((function (p1__25742_SHARP_){
var temp__4657__auto__ = app.core.account_store.app.account.username;
if(cljs.core.truth_(temp__4657__auto__)){
var username = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,app.core.account_store.atom_store,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),p1__25742_SHARP_);
} else {
return null;
}
})).fail((function (){
console.log("mehhh");

return hoodie.account.sign_out.call(null,app.core.account_store);
}));
app.core.market = javelin.core.cell.call(null,cljs.core.PersistentArrayMap.EMPTY);
app.core.portfolio = javelin.core.cell.call(null,cljs.core.PersistentArrayMap.EMPTY);
app.core.portfolio_set = javelin.core.formula.call(null,(function (G__25743,G__25744,G__25745,G__25746){
return G__25743.call(null,G__25744.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),G__25745.call(null,G__25746)));
})).call(null,cljs.core.set,cljs.core.map,cljs.core.vals,app.core.portfolio);
app.core.market_set = javelin.core.formula.call(null,(function (G__25750,G__25747,G__25748,G__25749){
return G__25747.call(null,G__25748.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),G__25749.call(null,G__25750)));
})).call(null,app.core.market,cljs.core.set,cljs.core.map,cljs.core.vals);
app.core.unsorted_events = javelin.core.cell.call(null,cljs.core.PersistentArrayMap.EMPTY);
app.core.unsorted_news = javelin.core.cell.call(null,cljs.core.PersistentArrayMap.EMPTY);
app.core.db_store = hoodie.store.create_global_store.call(null,app.core.app,new cljs.core.PersistentArrayMap(null, 4, ["market",app.core.market,"event",app.core.unsorted_events,"news",app.core.unsorted_news,"ads",cljs.core.atom.call(null)], null));
app.core.user_store = hoodie.store.create_user_store.call(null,app.core.app,new cljs.core.PersistentArrayMap(null, 1, ["portfolio",app.core.portfolio], null));
setInterval((function (){
return hoodie.store.connect.call(null,app.core.db_store);
}),(10000));
app.core.no_error_QMARK_ = (function app$core$no_error_QMARK_(papa_results){
return (papa_results.errors.length === (0));
});
app.core.papa__GT_clj = (function app$core$papa__GT_clj(data,symbols,keywords){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (n,sym){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,(function (){var row = (data[n]);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,((function (row){
return (function (i,k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(row[i])], null);
});})(row))
,keywords));
})()], null);
}),symbols));
});
app.core.update_stock = (function app$core$update_stock(symbols,an_atom){
var url = [cljs.core.str("https://download.finance.yahoo.com/d/quotes.csv?f=snl1d1c&s="),cljs.core.str(clojure.string.join.call(null,"+",symbols))].join('');
return Papa.parse(url,{"download": true, "complete": ((function (url){
return (function (results){
if(cljs.core.truth_(app.core.no_error_QMARK_.call(null,results))){
return cljs.core.reset_BANG_.call(null,an_atom,app.core.papa__GT_clj.call(null,results.data,symbols,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"changes","changes",1492088)], null)));
} else {
return null;
}
});})(url))
});
});
var c__12497__auto___25783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto___25783){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto___25783){
return (function (state_25765){
var state_val_25766 = (state_25765[(1)]);
if((state_val_25766 === (1))){
var state_25765__$1 = state_25765;
var statearr_25767_25784 = state_25765__$1;
(statearr_25767_25784[(2)] = null);

(statearr_25767_25784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25766 === (2))){
var inst_25752 = (state_25765[(7)]);
var inst_25752__$1 = cljs.core.deref.call(null,app.core.market_set);
var state_25765__$1 = (function (){var statearr_25768 = state_25765;
(statearr_25768[(7)] = inst_25752__$1);

return statearr_25768;
})();
if(cljs.core.truth_(inst_25752__$1)){
var statearr_25769_25785 = state_25765__$1;
(statearr_25769_25785[(1)] = (4));

} else {
var statearr_25770_25786 = state_25765__$1;
(statearr_25770_25786[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25766 === (3))){
var inst_25763 = (state_25765[(2)]);
var state_25765__$1 = state_25765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25765__$1,inst_25763);
} else {
if((state_val_25766 === (4))){
var inst_25752 = (state_25765[(7)]);
var inst_25754 = app.core.update_stock.call(null,inst_25752,app.core.market_value);
var state_25765__$1 = state_25765;
var statearr_25771_25787 = state_25765__$1;
(statearr_25771_25787[(2)] = inst_25754);

(statearr_25771_25787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25766 === (5))){
var state_25765__$1 = state_25765;
var statearr_25772_25788 = state_25765__$1;
(statearr_25772_25788[(2)] = null);

(statearr_25772_25788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25766 === (6))){
var inst_25757 = (state_25765[(2)]);
var inst_25758 = cljs.core.async.timeout.call(null,(10000));
var state_25765__$1 = (function (){var statearr_25773 = state_25765;
(statearr_25773[(8)] = inst_25757);

return statearr_25773;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25765__$1,(7),inst_25758);
} else {
if((state_val_25766 === (7))){
var inst_25760 = (state_25765[(2)]);
var state_25765__$1 = (function (){var statearr_25774 = state_25765;
(statearr_25774[(9)] = inst_25760);

return statearr_25774;
})();
var statearr_25775_25789 = state_25765__$1;
(statearr_25775_25789[(2)] = null);

(statearr_25775_25789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__12497__auto___25783))
;
return ((function (switch__12385__auto__,c__12497__auto___25783){
return (function() {
var app$core$state_machine__12386__auto__ = null;
var app$core$state_machine__12386__auto____0 = (function (){
var statearr_25779 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25779[(0)] = app$core$state_machine__12386__auto__);

(statearr_25779[(1)] = (1));

return statearr_25779;
});
var app$core$state_machine__12386__auto____1 = (function (state_25765){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_25765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e25780){if((e25780 instanceof Object)){
var ex__12389__auto__ = e25780;
var statearr_25781_25790 = state_25765;
(statearr_25781_25790[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25791 = state_25765;
state_25765 = G__25791;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
app$core$state_machine__12386__auto__ = function(state_25765){
switch(arguments.length){
case 0:
return app$core$state_machine__12386__auto____0.call(this);
case 1:
return app$core$state_machine__12386__auto____1.call(this,state_25765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$core$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = app$core$state_machine__12386__auto____0;
app$core$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = app$core$state_machine__12386__auto____1;
return app$core$state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto___25783))
})();
var state__12499__auto__ = (function (){var statearr_25782 = f__12498__auto__.call(null);
(statearr_25782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___25783);

return statearr_25782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto___25783))
);

app.core.sort_by_time = (function app$core$sort_by_time(km_pairs){
return cljs.core.sort_by.call(null,(function (p__25796){
var vec__25797 = p__25796;
var k = cljs.core.nth.call(null,vec__25797,(0),null);
var m = cljs.core.nth.call(null,vec__25797,(1),null);
return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"minute","minute",-642875969)).call(null,m);
}),km_pairs);
});
app.core.group_by_day = (function app$core$group_by_day(km_pairs){
return cljs.core.group_by.call(null,(function (p__25804){
var vec__25805 = p__25804;
var k = cljs.core.nth.call(null,vec__25805,(0),null);
var m = cljs.core.nth.call(null,vec__25805,(1),null);
return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"day","day",-274800446)).call(null,m);
}),km_pairs);
});
app.core.group_and_sort = (function app$core$group_and_sort(coll){
return cljs.core.into.call(null,cljs.core.sorted_map.call(null),(function (){var iter__7357__auto__ = (function app$core$group_and_sort_$_iter__25824(s__25825){
return (new cljs.core.LazySeq(null,(function (){
var s__25825__$1 = s__25825;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25825__$1);
if(temp__4657__auto__){
var s__25825__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25825__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__25825__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__25827 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__25826 = (0);
while(true){
if((i__25826 < size__7356__auto__)){
var vec__25834 = cljs.core._nth.call(null,c__7355__auto__,i__25826);
var date = cljs.core.nth.call(null,vec__25834,(0),null);
var km_pairs = cljs.core.nth.call(null,vec__25834,(1),null);
cljs.core.chunk_append.call(null,b__25827,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,app.core.sort_by_time.call(null,km_pairs)], null));

var G__25840 = (i__25826 + (1));
i__25826 = G__25840;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25827),app$core$group_and_sort_$_iter__25824.call(null,cljs.core.chunk_rest.call(null,s__25825__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25827),null);
}
} else {
var vec__25837 = cljs.core.first.call(null,s__25825__$2);
var date = cljs.core.nth.call(null,vec__25837,(0),null);
var km_pairs = cljs.core.nth.call(null,vec__25837,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,app.core.sort_by_time.call(null,km_pairs)], null),app$core$group_and_sort_$_iter__25824.call(null,cljs.core.rest.call(null,s__25825__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7357__auto__.call(null,app.core.group_by_day.call(null,coll));
})());
});
app.core.sorted_news = javelin.core.formula.call(null,(function (G__25841,G__25842){
return G__25841.call(null,G__25842);
})).call(null,app.core.group_and_sort,app.core.unsorted_news);
app.core.sorted_events = javelin.core.formula.call(null,(function (G__25843,G__25844){
return G__25843.call(null,G__25844);
})).call(null,app.core.group_and_sort,app.core.unsorted_events);
app.core.top_title = rum.core.build_defc.call(null,(function (){
return React.createElement("div",{"id": "top-title"},"The title");
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"top-title");
app.core.top_actions = rum.core.build_defc.call(null,(function (){
return React.createElement("div",{"id": "top-actions"},React.createElement("i",{"className": "icon-add"}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"top-actions");
app.core.top_bar = rum.core.build_defc.call(null,(function (){
return React.createElement("div",{"id": "top-bar"},React.createElement("div",{"id": "top-logo"},React.createElement("i",{"onClick": (function (){
return cljs.core.swap_BANG_.call(null,app.states.show_sidebar_QMARK_,cljs.core.not);
}), "className": "icon-menu"})),sablono.interpreter.interpret.call(null,app.core.top_title.call(null)),sablono.interpreter.interpret.call(null,app.core.top_actions.call(null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"top-bar");
app.core.sidebar = rum.core.build_defc.call(null,(function (){
var attrs25850 = (cljs.core.truth_(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,app.core.account_store.atom_store)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"key","key",-1516042587),"sign-out",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__25849_SHARP_){
p1__25849_SHARP_.preventDefault();

return hoodie.account.sign_out.call(null,app.core.account_store);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-sign-out","i.icon-sign-out",-1634373563)], null),"Logout"], null):(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/sign-up",new cljs.core.Keyword(null,"key","key",-1516042587),"sign-up"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-profile","i.icon-profile",-463079291)], null),"Sign up"], null);
return cljs.core._conj.call(null,(function (){var x__7411__auto____$1 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/login",new cljs.core.Keyword(null,"key","key",-1516042587),"sign-in"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-sign-in","i.icon-sign-in",1598435812)], null),"Login"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto____$1);
})(),x__7411__auto__);
})());
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25850))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"sidebar"], null),attrs25850)):{"id": "sidebar"}),((cljs.core.map_QMARK_.call(null,attrs25850))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("a",{"href": "#/market", "key": "market"},React.createElement("i",{"className": "icon-stocks"}),"Market"),React.createElement("a",{"href": "#/news", "key": "news"},React.createElement("i",{"className": "icon-news"}),"News"),React.createElement("a",{"href": "#/events", "key": "events"},React.createElement("i",{"className": "icon-time"}),"Events"),React.createElement("a",{"href": "#/portfolio", "key": "portfolio"},React.createElement("i",{"className": "icon-portfolio"}),"Portfolio")], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25850),React.createElement("a",{"href": "#/market", "key": "market"},React.createElement("i",{"className": "icon-stocks"}),"Market"),React.createElement("a",{"href": "#/news", "key": "news"},React.createElement("i",{"className": "icon-news"}),"News"),React.createElement("a",{"href": "#/events", "key": "events"},React.createElement("i",{"className": "icon-time"}),"Events"),React.createElement("a",{"href": "#/portfolio", "key": "portfolio"},React.createElement("i",{"className": "icon-portfolio"}),"Portfolio")], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"sidebar");
app.core.main_nav = rum.core.build_defc.call(null,(function (){
var map__25867 = rum.core.react.call(null,app.routes.routing_state);
var map__25867__$1 = ((((!((map__25867 == null)))?((((map__25867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25867):map__25867);
var route_name = cljs.core.get.call(null,map__25867__$1,new cljs.core.Keyword("domkm.silk","name","domkm.silk/name",607245322));
return React.createElement("div",{"id": "main-nav"},cljs.core.into_array.call(null,(function (){var iter__7357__auto__ = ((function (map__25867,map__25867__$1,route_name){
return (function app$core$iter__25869(s__25870){
return (new cljs.core.LazySeq(null,((function (map__25867,map__25867__$1,route_name){
return (function (){
var s__25870__$1 = s__25870;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25870__$1);
if(temp__4657__auto__){
var s__25870__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25870__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__25870__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__25872 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__25871 = (0);
while(true){
if((i__25871 < size__7356__auto__)){
var vec__25879 = cljs.core._nth.call(null,c__7355__auto__,i__25871);
var item = cljs.core.nth.call(null,vec__25879,(0),null);
var icon = cljs.core.nth.call(null,vec__25879,(1),null);
cljs.core.chunk_append.call(null,b__25872,React.createElement("a",{"key": item, "href": [cljs.core.str("#/"),cljs.core.str(item)].join(''), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,route_name),item))?"active":null)], null))},React.createElement("i",{"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("icon-"),cljs.core.str(icon)].join('')], null))})));

var G__25885 = (i__25871 + (1));
i__25871 = G__25885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25872),app$core$iter__25869.call(null,cljs.core.chunk_rest.call(null,s__25870__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25872),null);
}
} else {
var vec__25882 = cljs.core.first.call(null,s__25870__$2);
var item = cljs.core.nth.call(null,vec__25882,(0),null);
var icon = cljs.core.nth.call(null,vec__25882,(1),null);
return cljs.core.cons.call(null,React.createElement("a",{"key": item, "href": [cljs.core.str("#/"),cljs.core.str(item)].join(''), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,route_name),item))?"active":null)], null))},React.createElement("i",{"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("icon-"),cljs.core.str(icon)].join('')], null))})),app$core$iter__25869.call(null,cljs.core.rest.call(null,s__25870__$2)));
}
} else {
return null;
}
break;
}
});})(map__25867,map__25867__$1,route_name))
,null,null));
});})(map__25867,map__25867__$1,route_name))
;
return iter__7357__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["market","stocks"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["news","news"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["calendar","time"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["portfolio","portfolio"], null)], null));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"main-nav");
app.core.login_box = rum.core.build_defc.call(null,(function (user_input,route_name){
return sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,app.core.account_store.atom_store))))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#login-box","#login-box",1605435143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username",new cljs.core.Keyword(null,"key","key",-1516042587),"username",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25886_SHARP_){
return cljs.core.swap_BANG_.call(null,user_input,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),p1__25886_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$2(rum.core.react.call(null,user_input),"")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"key","key",-1516042587),"password",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25887_SHARP_){
return cljs.core.swap_BANG_.call(null,user_input,cljs.core.assoc,new cljs.core.Keyword(null,"password","password",417022471),p1__25887_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$2(rum.core.react.call(null,user_input),"")], null)], null),(function (){var map__25888 = rum.core.react.call(null,user_input);
var map__25888__$1 = ((((!((map__25888 == null)))?((((map__25888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25888):map__25888);
var username = cljs.core.get.call(null,map__25888__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var password = cljs.core.get.call(null,map__25888__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"button",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not_every_QMARK_.call(null,cljs.core.not_empty,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [username,password], null)))?"disable":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__25888,map__25888__$1,username,password){
return (function (){
return ((cljs.core._EQ_.call(null,route_name,new cljs.core.Keyword(null,"login","login",55217519)))?hoodie.account.sign_in.call(null,app.core.account_store,username,password):hoodie.account.sign_up.call(null,app.core.account_store,username,password)).done(((function (map__25888,map__25888__$1,username,password){
return (function (){
return setTimeout(((function (map__25888,map__25888__$1,username,password){
return (function (){
return app.routes.go_to.call(null,"#/market");
});})(map__25888,map__25888__$1,username,password))
,(500));
});})(map__25888,map__25888__$1,username,password))
).fail(((function (map__25888,map__25888__$1,username,password){
return (function (error){
console.log(error);

return cljs.core.swap_BANG_.call(null,user_input,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),error);
});})(map__25888,map__25888__$1,username,password))
);
});})(map__25888,map__25888__$1,username,password))
], null),((cljs.core._EQ_.call(null,route_name,new cljs.core.Keyword(null,"login","login",55217519)))?"Sign in":"Sign up")], null);
})(),(function (){var map__25890 = rum.core.react.call(null,user_input);
var map__25890__$1 = ((((!((map__25890 == null)))?((((map__25890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25890):map__25890);
var error = cljs.core.get.call(null,map__25890__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Login failed: ",error.message], null);
} else {
return null;
}
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#login-box","#login-box",1605435143),"Logging in as ",new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,app.core.account_store.atom_store))], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"login-box");
app.core.current_ads = cljs.core.atom.call(null,(0));
app.core.rotate_ads = (function app$core$rotate_ads(){
var c__12497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto__){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto__){
return (function (state_25959){
var state_val_25960 = (state_25959[(1)]);
if((state_val_25960 === (1))){
var inst_25935 = app.collections.atom_stores.call(null,"ads");
var inst_25936 = cljs.core.deref.call(null,inst_25935);
var inst_25937 = inst_25936;
var state_25959__$1 = (function (){var statearr_25961 = state_25959;
(statearr_25961[(7)] = inst_25937);

return statearr_25961;
})();
var statearr_25962_25978 = state_25959__$1;
(statearr_25962_25978[(2)] = null);

(statearr_25962_25978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (2))){
var inst_25937 = (state_25959[(7)]);
var inst_25940 = (state_25959[(8)]);
var inst_25939 = cljs.core.deref.call(null,app.core.current_ads);
var inst_25940__$1 = (inst_25939 + (1));
var inst_25941 = cljs.core.count.call(null,inst_25937);
var inst_25942 = (inst_25941 - (1));
var inst_25943 = (inst_25940__$1 > inst_25942);
var state_25959__$1 = (function (){var statearr_25963 = state_25959;
(statearr_25963[(8)] = inst_25940__$1);

return statearr_25963;
})();
if(cljs.core.truth_(inst_25943)){
var statearr_25964_25979 = state_25959__$1;
(statearr_25964_25979[(1)] = (4));

} else {
var statearr_25965_25980 = state_25959__$1;
(statearr_25965_25980[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (3))){
var inst_25957 = (state_25959[(2)]);
var state_25959__$1 = state_25959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25959__$1,inst_25957);
} else {
if((state_val_25960 === (4))){
var state_25959__$1 = state_25959;
var statearr_25966_25981 = state_25959__$1;
(statearr_25966_25981[(2)] = (0));

(statearr_25966_25981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (5))){
var inst_25940 = (state_25959[(8)]);
var state_25959__$1 = state_25959;
var statearr_25967_25982 = state_25959__$1;
(statearr_25967_25982[(2)] = inst_25940);

(statearr_25967_25982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25960 === (6))){
var inst_25947 = (state_25959[(2)]);
var inst_25948 = cljs.core.reset_BANG_.call(null,app.core.current_ads,inst_25947);
var inst_25949 = ((10) * (1000));
var inst_25950 = cljs.core.async.timeout.call(null,inst_25949);
var state_25959__$1 = (function (){var statearr_25968 = state_25959;
(statearr_25968[(9)] = inst_25948);

return statearr_25968;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25959__$1,(7),inst_25950);
} else {
if((state_val_25960 === (7))){
var inst_25952 = (state_25959[(2)]);
var inst_25953 = app.collections.atom_stores.call(null,"ads");
var inst_25954 = cljs.core.deref.call(null,inst_25953);
var inst_25937 = inst_25954;
var state_25959__$1 = (function (){var statearr_25969 = state_25959;
(statearr_25969[(7)] = inst_25937);

(statearr_25969[(10)] = inst_25952);

return statearr_25969;
})();
var statearr_25970_25983 = state_25959__$1;
(statearr_25970_25983[(2)] = null);

(statearr_25970_25983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__12497__auto__))
;
return ((function (switch__12385__auto__,c__12497__auto__){
return (function() {
var app$core$rotate_ads_$_state_machine__12386__auto__ = null;
var app$core$rotate_ads_$_state_machine__12386__auto____0 = (function (){
var statearr_25974 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25974[(0)] = app$core$rotate_ads_$_state_machine__12386__auto__);

(statearr_25974[(1)] = (1));

return statearr_25974;
});
var app$core$rotate_ads_$_state_machine__12386__auto____1 = (function (state_25959){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_25959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e25975){if((e25975 instanceof Object)){
var ex__12389__auto__ = e25975;
var statearr_25976_25984 = state_25959;
(statearr_25976_25984[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25985 = state_25959;
state_25959 = G__25985;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
app$core$rotate_ads_$_state_machine__12386__auto__ = function(state_25959){
switch(arguments.length){
case 0:
return app$core$rotate_ads_$_state_machine__12386__auto____0.call(this);
case 1:
return app$core$rotate_ads_$_state_machine__12386__auto____1.call(this,state_25959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$core$rotate_ads_$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = app$core$rotate_ads_$_state_machine__12386__auto____0;
app$core$rotate_ads_$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = app$core$rotate_ads_$_state_machine__12386__auto____1;
return app$core$rotate_ads_$_state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto__))
})();
var state__12499__auto__ = (function (){var statearr_25977 = f__12498__auto__.call(null);
(statearr_25977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto__);

return statearr_25977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto__))
);

return c__12497__auto__;
});
app.core.rotate_ads.call(null);
app.core.bottom_ads = rum.core.build_defc.call(null,(function (){
var attrs25986 = (function (){var vec__25987 = cljs.core.nth.call(null,cljs.core.seq.call(null,rum.core.react.call(null,app.collections.atom_stores.call(null,"ads"))),rum.core.react.call(null,app.core.current_ads));
var id = cljs.core.nth.call(null,vec__25987,(0),null);
var map__25990 = cljs.core.nth.call(null,vec__25987,(1),null);
var map__25990__$1 = ((((!((map__25990 == null)))?((((map__25990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25990):map__25990);
var photo = cljs.core.get.call(null,map__25990__$1,new cljs.core.Keyword(null,"photo","photo",-52852781));
var link = cljs.core.get.call(null,map__25990__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
if(cljs.core.truth_(id)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),app.collections.photo_url.call(null,photo,new cljs.core.Keyword(null,"small","small",2133478704))], null)], null)], null);
} else {
return null;
}
})();
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25986))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"bottom-ads"], null),attrs25986)):{"id": "bottom-ads"}),((cljs.core.map_QMARK_.call(null,attrs25986))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25986)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"bottom-ads");
app.core.format_day = (function app$core$format_day(day){
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,day));
});
app.core.news_list_by_day = rum.core.build_defc.call(null,(function (p__25992){
var vec__25993 = p__25992;
var day = cljs.core.nth.call(null,vec__25993,(0),null);
var coll = cljs.core.nth.call(null,vec__25993,(1),null);
return React.createElement("div",{"className": "news-list-by-day"},React.createElement("div",{"key": (0)},sablono.interpreter.interpret.call(null,app.core.format_day.call(null,day))),cljs.core.into_array.call(null,(function (){var iter__7357__auto__ = ((function (vec__25993,day,coll){
return (function app$core$iter__25996(s__25997){
return (new cljs.core.LazySeq(null,((function (vec__25993,day,coll){
return (function (){
var s__25997__$1 = s__25997;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25997__$1);
if(temp__4657__auto__){
var s__25997__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25997__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__25997__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__25999 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__25998 = (0);
while(true){
if((i__25998 < size__7356__auto__)){
var vec__26011 = cljs.core._nth.call(null,c__7355__auto__,i__25998);
var id = cljs.core.nth.call(null,vec__26011,(0),null);
var map__26014 = cljs.core.nth.call(null,vec__26011,(1),null);
var map__26014__$1 = ((((!((map__26014 == null)))?((((map__26014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26014):map__26014);
var title = cljs.core.get.call(null,map__26014__$1,new cljs.core.Keyword(null,"title","title",636505583));
var photo = cljs.core.get.call(null,map__26014__$1,new cljs.core.Keyword(null,"photo","photo",-52852781));
cljs.core.chunk_append.call(null,b__25999,React.createElement("a",{"key": id, "href": [cljs.core.str("#/news/"),cljs.core.str(id)].join(''), "className": "news-list-item"},React.createElement("img",{"src": app.collections.photo_url.call(null,photo,new cljs.core.Keyword(null,"small","small",2133478704))}),(function (){var attrs26005 = title;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs26005))?sablono.interpreter.attributes.call(null,attrs26005):null),((cljs.core.map_QMARK_.call(null,attrs26005))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26005)], null)));
})()));

var G__26021 = (i__25998 + (1));
i__25998 = G__26021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25999),app$core$iter__25996.call(null,cljs.core.chunk_rest.call(null,s__25997__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25999),null);
}
} else {
var vec__26016 = cljs.core.first.call(null,s__25997__$2);
var id = cljs.core.nth.call(null,vec__26016,(0),null);
var map__26019 = cljs.core.nth.call(null,vec__26016,(1),null);
var map__26019__$1 = ((((!((map__26019 == null)))?((((map__26019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26019):map__26019);
var title = cljs.core.get.call(null,map__26019__$1,new cljs.core.Keyword(null,"title","title",636505583));
var photo = cljs.core.get.call(null,map__26019__$1,new cljs.core.Keyword(null,"photo","photo",-52852781));
return cljs.core.cons.call(null,React.createElement("a",{"key": id, "href": [cljs.core.str("#/news/"),cljs.core.str(id)].join(''), "className": "news-list-item"},React.createElement("img",{"src": app.collections.photo_url.call(null,photo,new cljs.core.Keyword(null,"small","small",2133478704))}),(function (){var attrs26005 = title;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs26005))?sablono.interpreter.attributes.call(null,attrs26005):null),((cljs.core.map_QMARK_.call(null,attrs26005))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26005)], null)));
})()),app$core$iter__25996.call(null,cljs.core.rest.call(null,s__25997__$2)));
}
} else {
return null;
}
break;
}
});})(vec__25993,day,coll))
,null,null));
});})(vec__25993,day,coll))
;
return iter__7357__auto__.call(null,coll);
})()));
}),null,"news-list-by-day");
app.core.news_list = rum.core.build_defc.call(null,(function (){
var attrs26024 = cljs.core.map_indexed.call(null,(function (p1__26023_SHARP_,p2__26022_SHARP_){
return rum.core.with_key.call(null,app.core.news_list_by_day.call(null,p2__26022_SHARP_),p1__26023_SHARP_);
}),rum.core.react.call(null,app.core.sorted_news));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26024))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"news-list"], null),attrs26024)):{"id": "news-list"}),((cljs.core.map_QMARK_.call(null,attrs26024))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26024)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"news-list");
app.core.event_list_by_day = rum.core.build_defc.call(null,(function (p__26025){
var vec__26026 = p__26025;
var day = cljs.core.nth.call(null,vec__26026,(0),null);
var coll = cljs.core.nth.call(null,vec__26026,(1),null);
return React.createElement("div",{"className": "event-list-by-day"},React.createElement("div",{"key": (0)},sablono.interpreter.interpret.call(null,app.core.format_day.call(null,day))),cljs.core.into_array.call(null,(function (){var iter__7357__auto__ = ((function (vec__26026,day,coll){
return (function app$core$iter__26029(s__26030){
return (new cljs.core.LazySeq(null,((function (vec__26026,day,coll){
return (function (){
var s__26030__$1 = s__26030;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26030__$1);
if(temp__4657__auto__){
var s__26030__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26030__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__26030__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__26032 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__26031 = (0);
while(true){
if((i__26031 < size__7356__auto__)){
var vec__26045 = cljs.core._nth.call(null,c__7355__auto__,i__26031);
var id = cljs.core.nth.call(null,vec__26045,(0),null);
var map__26048 = cljs.core.nth.call(null,vec__26045,(1),null);
var map__26048__$1 = ((((!((map__26048 == null)))?((((map__26048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26048):map__26048);
var title = cljs.core.get.call(null,map__26048__$1,new cljs.core.Keyword(null,"title","title",636505583));
var place = cljs.core.get.call(null,map__26048__$1,new cljs.core.Keyword(null,"place","place",-819689466));
cljs.core.chunk_append.call(null,b__26032,React.createElement("div",{"key": id, "className": "event-list-item"},(function (){var attrs26038 = title;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs26038))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs26038)):{"className": "title"}),((cljs.core.map_QMARK_.call(null,attrs26038))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26038)], null)));
})(),(function (){var attrs26039 = place;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs26039))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["place"], null)], null),attrs26039)):{"className": "place"}),((cljs.core.map_QMARK_.call(null,attrs26039))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26039)], null)));
})()));

var G__26055 = (i__26031 + (1));
i__26031 = G__26055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26032),app$core$iter__26029.call(null,cljs.core.chunk_rest.call(null,s__26030__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26032),null);
}
} else {
var vec__26050 = cljs.core.first.call(null,s__26030__$2);
var id = cljs.core.nth.call(null,vec__26050,(0),null);
var map__26053 = cljs.core.nth.call(null,vec__26050,(1),null);
var map__26053__$1 = ((((!((map__26053 == null)))?((((map__26053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26053):map__26053);
var title = cljs.core.get.call(null,map__26053__$1,new cljs.core.Keyword(null,"title","title",636505583));
var place = cljs.core.get.call(null,map__26053__$1,new cljs.core.Keyword(null,"place","place",-819689466));
return cljs.core.cons.call(null,React.createElement("div",{"key": id, "className": "event-list-item"},(function (){var attrs26038 = title;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs26038))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs26038)):{"className": "title"}),((cljs.core.map_QMARK_.call(null,attrs26038))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26038)], null)));
})(),(function (){var attrs26039 = place;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs26039))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["place"], null)], null),attrs26039)):{"className": "place"}),((cljs.core.map_QMARK_.call(null,attrs26039))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26039)], null)));
})()),app$core$iter__26029.call(null,cljs.core.rest.call(null,s__26030__$2)));
}
} else {
return null;
}
break;
}
});})(vec__26026,day,coll))
,null,null));
});})(vec__26026,day,coll))
;
return iter__7357__auto__.call(null,coll);
})()));
}),null,"event-list-by-day");
app.core.event_list = rum.core.build_defc.call(null,(function (){
var attrs26058 = cljs.core.map_indexed.call(null,(function (p1__26057_SHARP_,p2__26056_SHARP_){
return rum.core.with_key.call(null,app.core.event_list_by_day.call(null,p2__26056_SHARP_),p1__26057_SHARP_);
}),rum.core.react.call(null,app.core.sorted_events));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26058))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"news-list"], null),attrs26058)):{"id": "news-list"}),((cljs.core.map_QMARK_.call(null,attrs26058))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26058)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"event-list");
app.core.changes__GT_class = (function app$core$changes__GT_class(s){
if(cljs.core._EQ_.call(null,"+",cljs.core.first.call(null,cljs.core.seq.call(null,s)))){
return "positive";
} else {
return "negative";
}
});
app.core.format_changes = (function app$core$format_changes(s){
var vec__26062 = clojure.string.split.call(null,s," - ");
var x = cljs.core.nth.call(null,vec__26062,(0),null);
var y = cljs.core.nth.call(null,vec__26062,(1),null);
return [cljs.core.str(x),cljs.core.str(" ("),cljs.core.str(y),cljs.core.str(")")].join('');
});
app.core.format_date = (function app$core$format_date(s){
var vec__26068 = clojure.string.split.call(null,s,"/");
var m = cljs.core.nth.call(null,vec__26068,(0),null);
var d = cljs.core.nth.call(null,vec__26068,(1),null);
var y = cljs.core.nth.call(null,vec__26068,(2),null);
return [cljs.core.str(d),cljs.core.str("/"),cljs.core.str(m),cljs.core.str("/"),cljs.core.str(y)].join('');
});
app.core.market_selected = cljs.core.atom.call(null);
app.core.remove_from_portfolio = (function app$core$remove_from_portfolio(target){
var seq__26087 = cljs.core.seq.call(null,cljs.core.deref.call(null,app.core.portfolio));
var chunk__26089 = null;
var count__26090 = (0);
var i__26091 = (0);
while(true){
if((i__26091 < count__26090)){
var vec__26093 = cljs.core._nth.call(null,chunk__26089,i__26091);
var id = cljs.core.nth.call(null,vec__26093,(0),null);
var map__26096 = cljs.core.nth.call(null,vec__26093,(1),null);
var map__26096__$1 = ((((!((map__26096 == null)))?((((map__26096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26096):map__26096);
var sym = cljs.core.get.call(null,map__26096__$1,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core._EQ_.call(null,target,sym)){
cljs.core.swap_BANG_.call(null,app.core.portfolio,cljs.core.dissoc,id);

var G__26103 = seq__26087;
var G__26104 = chunk__26089;
var G__26105 = count__26090;
var G__26106 = (i__26091 + (1));
seq__26087 = G__26103;
chunk__26089 = G__26104;
count__26090 = G__26105;
i__26091 = G__26106;
continue;
} else {
var G__26107 = seq__26087;
var G__26108 = chunk__26089;
var G__26109 = count__26090;
var G__26110 = (i__26091 + (1));
seq__26087 = G__26107;
chunk__26089 = G__26108;
count__26090 = G__26109;
i__26091 = G__26110;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26087);
if(temp__4657__auto__){
var seq__26087__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26087__$1)){
var c__7388__auto__ = cljs.core.chunk_first.call(null,seq__26087__$1);
var G__26111 = cljs.core.chunk_rest.call(null,seq__26087__$1);
var G__26112 = c__7388__auto__;
var G__26113 = cljs.core.count.call(null,c__7388__auto__);
var G__26114 = (0);
seq__26087 = G__26111;
chunk__26089 = G__26112;
count__26090 = G__26113;
i__26091 = G__26114;
continue;
} else {
var vec__26098 = cljs.core.first.call(null,seq__26087__$1);
var id = cljs.core.nth.call(null,vec__26098,(0),null);
var map__26101 = cljs.core.nth.call(null,vec__26098,(1),null);
var map__26101__$1 = ((((!((map__26101 == null)))?((((map__26101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26101):map__26101);
var sym = cljs.core.get.call(null,map__26101__$1,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core._EQ_.call(null,target,sym)){
cljs.core.swap_BANG_.call(null,app.core.portfolio,cljs.core.dissoc,id);

var G__26115 = cljs.core.next.call(null,seq__26087__$1);
var G__26116 = null;
var G__26117 = (0);
var G__26118 = (0);
seq__26087 = G__26115;
chunk__26089 = G__26116;
count__26090 = G__26117;
i__26091 = G__26118;
continue;
} else {
var G__26119 = cljs.core.next.call(null,seq__26087__$1);
var G__26120 = null;
var G__26121 = (0);
var G__26122 = (0);
seq__26087 = G__26119;
chunk__26089 = G__26120;
count__26090 = G__26121;
i__26091 = G__26122;
continue;
}
}
} else {
return null;
}
}
break;
}
});
app.core.market_item_selected = rum.core.build_defc.call(null,(function (sym,p__26123){
var map__26124 = p__26123;
var map__26124__$1 = ((((!((map__26124 == null)))?((((map__26124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26124):map__26124);
var title = cljs.core.get.call(null,map__26124__$1,new cljs.core.Keyword(null,"title","title",636505583));
var value = cljs.core.get.call(null,map__26124__$1,new cljs.core.Keyword(null,"value","value",305978217));
return React.createElement("div",{"className": "market-item"},React.createElement("div",null,(function (){var attrs26127 = sym;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26127))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs26127)):{"className": "title"}),((cljs.core.map_QMARK_.call(null,attrs26127))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26127)], null)));
})(),(function (){var attrs26128 = value;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26128))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["value"], null)], null),attrs26128)):{"className": "value"}),((cljs.core.map_QMARK_.call(null,attrs26128))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26128)], null)));
})()),(function (){var attrs26126 = (cljs.core.truth_(rum.core.react.call(null,app.core.portfolio_set).call(null,sym))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26124,map__26124__$1,title,value){
return (function (){
app.core.remove_from_portfolio.call(null,sym);

return cljs.core.reset_BANG_.call(null,app.core.market_selected,null);
});})(map__26124,map__26124__$1,title,value))
], null),"Remove from portfolio"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26124,map__26124__$1,title,value){
return (function (){
hoodie.store.add_BANG_.call(null,app.core.user_store,"portfolio",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),sym], null));

return cljs.core.reset_BANG_.call(null,app.core.market_selected,null);
});})(map__26124,map__26124__$1,title,value))
], null),"Add to portfolio"], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26126))?sablono.interpreter.attributes.call(null,attrs26126):null),((cljs.core.map_QMARK_.call(null,attrs26126))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("button",{"key": (1), "onClick": ((function (attrs26126,map__26124,map__26124__$1,title,value){
return (function (){
return cljs.core.reset_BANG_.call(null,app.core.market_selected,null);
});})(attrs26126,map__26124,map__26124__$1,title,value))
},"Cancel")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26126),React.createElement("button",{"key": (1), "onClick": ((function (attrs26126,map__26124,map__26124__$1,title,value){
return (function (){
return cljs.core.reset_BANG_.call(null,app.core.market_selected,null);
});})(attrs26126,map__26124,map__26124__$1,title,value))
},"Cancel")], null)));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"market-item-selected");
app.core.market_item_unselected = rum.core.build_defc.call(null,(function (sym,p__26129){
var map__26130 = p__26129;
var map__26130__$1 = ((((!((map__26130 == null)))?((((map__26130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26130):map__26130);
var title = cljs.core.get.call(null,map__26130__$1,new cljs.core.Keyword(null,"title","title",636505583));
var value = cljs.core.get.call(null,map__26130__$1,new cljs.core.Keyword(null,"value","value",305978217));
var date = cljs.core.get.call(null,map__26130__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var changes = cljs.core.get.call(null,map__26130__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
return React.createElement("div",{"key": sym, "onClick": ((function (map__26130,map__26130__$1,title,value,date,changes){
return (function (){
return cljs.core.reset_BANG_.call(null,app.core.market_selected,sym);
});})(map__26130,map__26130__$1,title,value,date,changes))
, "className": "market-item"},React.createElement("div",null,(function (){var attrs26132 = sym;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26132))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs26132)):{"className": "title"}),((cljs.core.map_QMARK_.call(null,attrs26132))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26132)], null)));
})(),(function (){var attrs26133 = value;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26133))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["value"], null)], null),attrs26133)):{"className": "value"}),((cljs.core.map_QMARK_.call(null,attrs26133))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26133)], null)));
})()),React.createElement("div",null,React.createElement("span",{"className": "date"},React.createElement("i",{"className": "icon-clock"}),sablono.interpreter.interpret.call(null,app.core.format_date.call(null,date))),React.createElement("span",{"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["changes",app.core.changes__GT_class.call(null,changes)], null))},sablono.interpreter.interpret.call(null,app.core.format_changes.call(null,changes)))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"market-item-unselected");
app.core.market_item = rum.core.build_defc.call(null,(function (p__26136){
var vec__26137 = p__26136;
var sym = cljs.core.nth.call(null,vec__26137,(0),null);
var item = cljs.core.nth.call(null,vec__26137,(1),null);
if(cljs.core._EQ_.call(null,rum.core.react.call(null,app.core.market_selected),sym)){
return sablono.interpreter.interpret.call(null,app.core.market_item_selected.call(null,sym,item));
} else {
return sablono.interpreter.interpret.call(null,app.core.market_item_unselected.call(null,sym,item));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"market-item");
app.core.market_list = rum.core.build_defc.call(null,(function (){
var attrs26142 = cljs.core.map_indexed.call(null,(function (p1__26141_SHARP_,p2__26140_SHARP_){
return rum.core.with_key.call(null,app.core.market_item.call(null,p2__26140_SHARP_),p1__26141_SHARP_);
}),rum.core.react.call(null,app.core.market_value));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26142))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"market-list"], null),attrs26142)):{"id": "market-list"}),((cljs.core.map_QMARK_.call(null,attrs26142))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26142)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"market-list");
app.core.portfolio_list = rum.core.build_defc.call(null,(function (){
var attrs26145 = (function (){var m_list = rum.core.react.call(null,app.core.market_value);
var p_set = rum.core.react.call(null,app.core.portfolio_set);
var portfolio_market = cljs.core.filter.call(null,((function (m_list,p_set){
return (function (p__26146){
var vec__26147 = p__26146;
var id = cljs.core.nth.call(null,vec__26147,(0),null);
var item = cljs.core.nth.call(null,vec__26147,(1),null);
return p_set.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(item));
});})(m_list,p_set))
,m_list);
return cljs.core.map_indexed.call(null,((function (m_list,p_set,portfolio_market){
return (function (p1__26144_SHARP_,p2__26143_SHARP_){
return rum.core.with_key.call(null,app.core.market_item.call(null,p2__26143_SHARP_),p1__26144_SHARP_);
});})(m_list,p_set,portfolio_market))
,portfolio_market);
})();
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26145))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"market-list"], null),attrs26145)):{"id": "market-list"}),((cljs.core.map_QMARK_.call(null,attrs26145))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26145)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"portfolio-list");
app.core.news_item = rum.core.build_defc.call(null,(function (id){
return sablono.interpreter.interpret.call(null,(function (){var temp__4657__auto__ = cljs.core.get.call(null,rum.core.react.call(null,app.core.unsorted_news),id);
if(cljs.core.truth_(temp__4657__auto__)){
var map__26150 = temp__4657__auto__;
var map__26150__$1 = ((((!((map__26150 == null)))?((((map__26150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26150):map__26150);
var content = cljs.core.get.call(null,map__26150__$1,new cljs.core.Keyword(null,"content","content",15833224));
var title = cljs.core.get.call(null,map__26150__$1,new cljs.core.Keyword(null,"title","title",636505583));
var source = cljs.core.get.call(null,map__26150__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var photo = cljs.core.get.call(null,map__26150__$1,new cljs.core.Keyword(null,"photo","photo",-52852781));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".news-item",".news-item",-706423220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),app.collections.photo_url.call(null,photo,new cljs.core.Keyword(null,"medium","medium",-1864319384))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),markdown.core.md__GT_html.call(null,content)], null)], null)], null)], null);
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"news-item");
app.core.main_content = rum.core.build_defc.call(null,(function (){
var attrs26152 = (function (){var map__26153 = rum.core.react.call(null,app.routes.routing_state);
var map__26153__$1 = ((((!((map__26153 == null)))?((((map__26153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26153):map__26153);
var route_name = cljs.core.get.call(null,map__26153__$1,new cljs.core.Keyword("domkm.silk","name","domkm.silk/name",607245322));
var title = cljs.core.get.call(null,map__26153__$1,new cljs.core.Keyword(null,"title","title",636505583));
var id = cljs.core.get.call(null,map__26153__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var G__26155 = (((route_name instanceof cljs.core.Keyword))?route_name.fqn:null);
switch (G__26155) {
case "login":
return app.core.login_box.call(null,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),route_name);

break;
case "sign-up":
return app.core.login_box.call(null,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),route_name);

break;
case "market/item":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hello market"], null);

break;
case "home":
return app.core.market_list.call(null);

break;
case "market/index":
return app.core.market_list.call(null);

break;
case "news/index":
return app.core.news_list.call(null);

break;
case "calendar/index":
return app.core.event_list.call(null);

break;
case "news/item":
return app.core.news_item.call(null,id);

break;
case "portfolio/index":
return app.core.portfolio_list.call(null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"404 Not found"], null);

}
})();
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26152))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"main-content"], null),attrs26152)):{"id": "main-content"}),((cljs.core.map_QMARK_.call(null,attrs26152))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26152)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"main-content");
app.core.attention = rum.core.build_defc.call(null,(function (){
return sablono.interpreter.interpret.call(null,null
);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"attention");
app.core.body = rum.core.build_defc.call(null,(function (){
var attrs26157 = app.core.top_bar.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26157))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"wrapper"], null),attrs26157)):{"id": "wrapper"}),((cljs.core.map_QMARK_.call(null,attrs26157))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26158 = app.core.attention.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26158))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"all-content"], null),attrs26158)):{"id": "all-content"}),((cljs.core.map_QMARK_.call(null,attrs26158))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,app.core.sidebar.call(null)),React.createElement("div",{"id": "main", "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(rum.core.react.call(null,app.states.show_sidebar_QMARK_))?"show":null)], null))},sablono.interpreter.interpret.call(null,app.core.main_nav.call(null)),sablono.interpreter.interpret.call(null,app.core.main_content.call(null)),sablono.interpreter.interpret.call(null,app.core.bottom_ads.call(null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26158),sablono.interpreter.interpret.call(null,app.core.sidebar.call(null)),React.createElement("div",{"id": "main", "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(rum.core.react.call(null,app.states.show_sidebar_QMARK_))?"show":null)], null))},sablono.interpreter.interpret.call(null,app.core.main_nav.call(null)),sablono.interpreter.interpret.call(null,app.core.main_content.call(null)),sablono.interpreter.interpret.call(null,app.core.bottom_ads.call(null)))], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26157),(function (){var attrs26159 = app.core.attention.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26159))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"all-content"], null),attrs26159)):{"id": "all-content"}),((cljs.core.map_QMARK_.call(null,attrs26159))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,app.core.sidebar.call(null)),React.createElement("div",{"id": "main", "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(rum.core.react.call(null,app.states.show_sidebar_QMARK_))?"show":null)], null))},sablono.interpreter.interpret.call(null,app.core.main_nav.call(null)),sablono.interpreter.interpret.call(null,app.core.main_content.call(null)),sablono.interpreter.interpret.call(null,app.core.bottom_ads.call(null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26159),sablono.interpreter.interpret.call(null,app.core.sidebar.call(null)),React.createElement("div",{"id": "main", "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(rum.core.react.call(null,app.states.show_sidebar_QMARK_))?"show":null)], null))},sablono.interpreter.interpret.call(null,app.core.main_nav.call(null)),sablono.interpreter.interpret.call(null,app.core.main_content.call(null)),sablono.interpreter.interpret.call(null,app.core.bottom_ads.call(null)))], null)));
})()], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"body");
app.core.main = (function app$core$main(){
return rum.core.mount.call(null,app.core.body.call(null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map