// Compiled by ClojureScript 1.9.93 {}
goog.provide('app.collections');
goog.require('cljs.core');
if(typeof app.collections.type_name !== 'undefined'){
} else {
app.collections.type_name = new cljs.core.PersistentArrayMap(null, 4, ["event","Event","news","News","market","Market","ads","Ads"], null);
}
if(typeof app.collections.key_names !== 'undefined'){
} else {
app.collections.key_names = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","title","event/title",740957249),"Title",new cljs.core.Keyword("event","date","event/date",-1887472208),"Date"], null);
}
app.collections.key_name = (function app$collections$key_name(data_type,k){
return app.collections.key_names.call(null,cljs.core.keyword.call(null,data_type,cljs.core.name.call(null,k)),cljs.core.name.call(null,k));
});
if(typeof app.collections.type_keys !== 'undefined'){
} else {
app.collections.type_keys = new cljs.core.PersistentArrayMap(null, 5, ["event",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"place","place",-819689466),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"minute","minute",-642875969)], null),"news",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"photo","photo",-52852781)], null),"market",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"order","order",-1254677256)], null),"ads",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"photo","photo",-52852781),new cljs.core.Keyword(null,"link","link",-1769163468)], null),"photo",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"note","note",1426297904)], null)], null);
}
if(typeof app.collections.atom_stores !== 'undefined'){
} else {
app.collections.atom_stores = new cljs.core.PersistentArrayMap(null, 5, ["market",cljs.core.atom.call(null),"event",cljs.core.atom.call(null),"ads",cljs.core.atom.call(null),"news",cljs.core.atom.call(null),"photo",cljs.core.atom.call(null)], null);
}
app.collections.type_field = (function app$collections$type_field(var_args){
var args__7659__auto__ = [];
var len__7652__auto___25734 = arguments.length;
var i__7653__auto___25735 = (0);
while(true){
if((i__7653__auto___25735 < len__7652__auto___25734)){
args__7659__auto__.push((arguments[i__7653__auto___25735]));

var G__25736 = (i__7653__auto___25735 + (1));
i__7653__auto___25735 = G__25736;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((2) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((2)),(0),null)):null);
return app.collections.type_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7660__auto__);
});

app.collections.type_field.cljs$core$IFn$_invoke$arity$variadic = (function (data_type,k,_){
if(cljs.core.truth_(k)){
return cljs.core.keyword.call(null,data_type,cljs.core.name.call(null,k));
} else {
return null;
}
});

app.collections.type_field.cljs$lang$maxFixedArity = (2);

app.collections.type_field.cljs$lang$applyTo = (function (seq25731){
var G__25732 = cljs.core.first.call(null,seq25731);
var seq25731__$1 = cljs.core.next.call(null,seq25731);
var G__25733 = cljs.core.first.call(null,seq25731__$1);
var seq25731__$2 = cljs.core.next.call(null,seq25731__$1);
return app.collections.type_field.cljs$core$IFn$_invoke$arity$variadic(G__25732,G__25733,seq25731__$2);
});

if(typeof app.collections.validate !== 'undefined'){
} else {
app.collections.validate = (function (){var method_table__7502__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7503__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7504__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7505__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7506__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"app.collections","validate"),app.collections.type_field,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7506__auto__,method_table__7502__auto__,prefer_table__7503__auto__,method_cache__7504__auto__,cached_hierarchy__7505__auto__));
})();
}
app.collections.not_empty_QMARK_ = (function app$collections$not_empty_QMARK_(v){
return (typeof v === 'number') || ((typeof v === 'string') && (cljs.core.not_EQ_.call(null,"",v)));
});
cljs.core._add_method.call(null,app.collections.validate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (data_type,k,v){
return app.collections.not_empty_QMARK_.call(null,v);
}));
app.collections.photo_url = (function app$collections$photo_url(base_url,size){
return [cljs.core.str((function (){var G__25738 = (((size instanceof cljs.core.Keyword))?size.fqn:null);
switch (G__25738) {
case "small":
return "/200x150/";

break;
default:
return "/400x300/";

}
})()),cljs.core.str(base_url)].join('');
});

//# sourceMappingURL=collections.js.map