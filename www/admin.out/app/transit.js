// Compiled by ClojureScript 1.9.93 {}
goog.provide('app.transit');
goog.require('cljs.core');
goog.require('cognitect.transit');
app.transit.key_table = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"id",new cljs.core.Keyword(null,"rev","rev",12702670),"_rev",new cljs.core.Keyword(null,"type","type",1174270348),"type",new cljs.core.Keyword(null,"public?","public?",786025269),"$public",new cljs.core.Keyword(null,"created-at","created-at",-89248644),"createdAt",new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),"updatedAt",new cljs.core.Keyword(null,"created-by","created-by",-1870794445),"createdBy"], null);
app.transit.compare_js_objects = (function app$transit$compare_js_objects(var_args){
var args__7659__auto__ = [];
var len__7652__auto___9327 = arguments.length;
var i__7653__auto___9328 = (0);
while(true){
if((i__7653__auto___9328 < len__7652__auto___9327)){
args__7659__auto__.push((arguments[i__7653__auto___9328]));

var G__9329 = (i__7653__auto___9328 + (1));
i__7653__auto___9328 = G__9329;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return app.transit.compare_js_objects.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

app.transit.compare_js_objects.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,cljs.core.js__GT_clj,objs));
});

app.transit.compare_js_objects.cljs$lang$maxFixedArity = (0);

app.transit.compare_js_objects.cljs$lang$applyTo = (function (seq9326){
return app.transit.compare_js_objects.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9326));
});

app.transit.w = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
app.transit.r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
app.transit.untransit = (function app$transit$untransit(obj){
return cljs.core.with_meta.call(null,cognitect.transit.read.call(null,app.transit.r,obj.transit),cljs.core.reduce_kv.call(null,(function (acc,kw,k){
var temp__4655__auto__ = (obj[k]);
if(cljs.core.truth_(temp__4655__auto__)){
var v = temp__4655__auto__;
return cljs.core.assoc.call(null,acc,kw,v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,app.transit.key_table));
});
app.transit.transit = (function app$transit$transit(var_args){
var args9330 = [];
var len__7652__auto___9345 = arguments.length;
var i__7653__auto___9346 = (0);
while(true){
if((i__7653__auto___9346 < len__7652__auto___9345)){
args9330.push((arguments[i__7653__auto___9346]));

var G__9347 = (i__7653__auto___9346 + (1));
i__7653__auto___9346 = G__9347;
continue;
} else {
}
break;
}

var G__9332 = args9330.length;
switch (G__9332) {
case 2:
return app.transit.transit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.transit.transit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9330.length)].join('')));

}
});

app.transit.transit.cljs$core$IFn$_invoke$arity$2 = (function (data_type,data){
var transited_data = app.transit.transit.call(null,data);
(transited_data["type"] = data_type);

return transited_data;
});

app.transit.transit.cljs$core$IFn$_invoke$arity$1 = (function (data){
var transited_data = {"transit": cognitect.transit.write.call(null,app.transit.w,data)};
var seq__9333_9349 = cljs.core.seq.call(null,app.transit.key_table);
var chunk__9335_9350 = null;
var count__9336_9351 = (0);
var i__9337_9352 = (0);
while(true){
if((i__9337_9352 < count__9336_9351)){
var vec__9339_9353 = cljs.core._nth.call(null,chunk__9335_9350,i__9337_9352);
var kw_9354 = cljs.core.nth.call(null,vec__9339_9353,(0),null);
var k_9355 = cljs.core.nth.call(null,vec__9339_9353,(1),null);
var v_9356 = cljs.core.get.call(null,cljs.core.meta.call(null,data),kw_9354);
if(cljs.core.truth_(v_9356)){
(transited_data[k_9355] = v_9356);
} else {
}

var G__9357 = seq__9333_9349;
var G__9358 = chunk__9335_9350;
var G__9359 = count__9336_9351;
var G__9360 = (i__9337_9352 + (1));
seq__9333_9349 = G__9357;
chunk__9335_9350 = G__9358;
count__9336_9351 = G__9359;
i__9337_9352 = G__9360;
continue;
} else {
var temp__4657__auto___9361 = cljs.core.seq.call(null,seq__9333_9349);
if(temp__4657__auto___9361){
var seq__9333_9362__$1 = temp__4657__auto___9361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9333_9362__$1)){
var c__7388__auto___9363 = cljs.core.chunk_first.call(null,seq__9333_9362__$1);
var G__9364 = cljs.core.chunk_rest.call(null,seq__9333_9362__$1);
var G__9365 = c__7388__auto___9363;
var G__9366 = cljs.core.count.call(null,c__7388__auto___9363);
var G__9367 = (0);
seq__9333_9349 = G__9364;
chunk__9335_9350 = G__9365;
count__9336_9351 = G__9366;
i__9337_9352 = G__9367;
continue;
} else {
var vec__9342_9368 = cljs.core.first.call(null,seq__9333_9362__$1);
var kw_9369 = cljs.core.nth.call(null,vec__9342_9368,(0),null);
var k_9370 = cljs.core.nth.call(null,vec__9342_9368,(1),null);
var v_9371 = cljs.core.get.call(null,cljs.core.meta.call(null,data),kw_9369);
if(cljs.core.truth_(v_9371)){
(transited_data[k_9370] = v_9371);
} else {
}

var G__9372 = cljs.core.next.call(null,seq__9333_9362__$1);
var G__9373 = null;
var G__9374 = (0);
var G__9375 = (0);
seq__9333_9349 = G__9372;
chunk__9335_9350 = G__9373;
count__9336_9351 = G__9374;
i__9337_9352 = G__9375;
continue;
}
} else {
}
}
break;
}

return transited_data;
});

app.transit.transit.cljs$lang$maxFixedArity = 2;

app.transit.transit_all = (function app$transit$transit_all(all){
return cljs.core.reduce.call(null,(function (acc,data){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,data)),data);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.call(null,app.transit.untransit,all));
});

//# sourceMappingURL=transit.js.map