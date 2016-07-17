// Compiled by ClojureScript 1.9.93 {}
goog.provide('app.media_queries');
goog.require('cljs.core');
goog.require('cljsjs.enquire');
app.media_queries.media_result = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
app.media_queries.titles = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zero","zero",-858964576),new cljs.core.Keyword(null,"tiny","tiny",1577883515),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"large","large",-196820544),new cljs.core.Keyword(null,"xlarge","xlarge",-905930014)], null);
app.media_queries.title__GT_rank = cljs.core.zipmap.call(null,app.media_queries.titles,cljs.core.range.call(null));
app.media_queries.size__GT_query = (function app$media_queries$size__GT_query(p__15452){
var vec__15456 = p__15452;
var min_val = cljs.core.nth.call(null,vec__15456,(0),null);
var max_val = cljs.core.nth.call(null,vec__15456,(1),null);
if((min_val === (0))){
return [cljs.core.str("(max-width: "),cljs.core.str(max_val),cljs.core.str("px)")].join('');
} else {
if((max_val === (0))){
return [cljs.core.str("(min-width: "),cljs.core.str(min_val),cljs.core.str("px)")].join('');
} else {
return [cljs.core.str("(min-width: "),cljs.core.str(min_val),cljs.core.str("px) and (max-width: "),cljs.core.str(max_val),cljs.core.str("px)")].join('');

}
}
});
app.media_queries.tiny = (320);
app.media_queries.small = (480);
app.media_queries.medium = (640);
app.media_queries.large = (1024);
app.media_queries.xlarge = (1200);
app.media_queries.title__GT_size = cljs.core.zipmap.call(null,app.media_queries.titles,cljs.core.map.call(null,app.media_queries.size__GT_query,cljs.core.partition.call(null,(2),(1),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.media_queries.tiny,app.media_queries.small,app.media_queries.medium,app.media_queries.large,app.media_queries.xlarge,(0)], null))));
app.media_queries.compare_size = (function app$media_queries$compare_size(comparator_fn,current_media_result,size){
return comparator_fn.call(null,app.media_queries.title__GT_rank.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(current_media_result)),app.media_queries.title__GT_rank.call(null,size));
});
cljs.core.doall.call(null,cljs.core.map.call(null,(function (title){
var size = app.media_queries.title__GT_size.call(null,title);
return enquire.register(size,((function (size){
return (function (){
return cljs.core.swap_BANG_.call(null,app.media_queries.media_result,cljs.core.assoc,new cljs.core.Keyword(null,"size","size",1098693007),title);
});})(size))
,cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"large","large",-196820544),size));
}),app.media_queries.titles));

//# sourceMappingURL=media_queries.js.map