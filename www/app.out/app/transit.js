// Compiled by ClojureScript 1.9.93 {}
goog.provide('app.transit');
goog.require('cljs.core');
goog.require('cognitect.transit');
app.transit.key_table = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"id",new cljs.core.Keyword(null,"rev","rev",12702670),"_rev",new cljs.core.Keyword(null,"type","type",1174270348),"type",new cljs.core.Keyword(null,"public?","public?",786025269),"$public",new cljs.core.Keyword(null,"created-at","created-at",-89248644),"createdAt",new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),"updatedAt",new cljs.core.Keyword(null,"created-by","created-by",-1870794445),"createdBy"], null);
app.transit.compare_js_objects = (function app$transit$compare_js_objects(var_args){
var args__7659__auto__ = [];
var len__7652__auto___9598 = arguments.length;
var i__7653__auto___9599 = (0);
while(true){
if((i__7653__auto___9599 < len__7652__auto___9598)){
args__7659__auto__.push((arguments[i__7653__auto___9599]));

var G__9600 = (i__7653__auto___9599 + (1));
i__7653__auto___9599 = G__9600;
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

app.transit.compare_js_objects.cljs$lang$applyTo = (function (seq9597){
return app.transit.compare_js_objects.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9597));
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
var args9601 = [];
var len__7652__auto___9616 = arguments.length;
var i__7653__auto___9617 = (0);
while(true){
if((i__7653__auto___9617 < len__7652__auto___9616)){
args9601.push((arguments[i__7653__auto___9617]));

var G__9618 = (i__7653__auto___9617 + (1));
i__7653__auto___9617 = G__9618;
continue;
} else {
}
break;
}

var G__9603 = args9601.length;
switch (G__9603) {
case 2:
return app.transit.transit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.transit.transit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9601.length)].join('')));

}
});

app.transit.transit.cljs$core$IFn$_invoke$arity$2 = (function (data_type,data){
var transited_data = app.transit.transit.call(null,data);
(transited_data["type"] = data_type);

return transited_data;
});

app.transit.transit.cljs$core$IFn$_invoke$arity$1 = (function (data){
var transited_data = {"transit": cognitect.transit.write.call(null,app.transit.w,data)};
var seq__9604_9620 = cljs.core.seq.call(null,app.transit.key_table);
var chunk__9606_9621 = null;
var count__9607_9622 = (0);
var i__9608_9623 = (0);
while(true){
if((i__9608_9623 < count__9607_9622)){
var vec__9610_9624 = cljs.core._nth.call(null,chunk__9606_9621,i__9608_9623);
var kw_9625 = cljs.core.nth.call(null,vec__9610_9624,(0),null);
var k_9626 = cljs.core.nth.call(null,vec__9610_9624,(1),null);
var v_9627 = cljs.core.get.call(null,cljs.core.meta.call(null,data),kw_9625);
if(cljs.core.truth_(v_9627)){
(transited_data[k_9626] = v_9627);
} else {
}

var G__9628 = seq__9604_9620;
var G__9629 = chunk__9606_9621;
var G__9630 = count__9607_9622;
var G__9631 = (i__9608_9623 + (1));
seq__9604_9620 = G__9628;
chunk__9606_9621 = G__9629;
count__9607_9622 = G__9630;
i__9608_9623 = G__9631;
continue;
} else {
var temp__4657__auto___9632 = cljs.core.seq.call(null,seq__9604_9620);
if(temp__4657__auto___9632){
var seq__9604_9633__$1 = temp__4657__auto___9632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9604_9633__$1)){
var c__7388__auto___9634 = cljs.core.chunk_first.call(null,seq__9604_9633__$1);
var G__9635 = cljs.core.chunk_rest.call(null,seq__9604_9633__$1);
var G__9636 = c__7388__auto___9634;
var G__9637 = cljs.core.count.call(null,c__7388__auto___9634);
var G__9638 = (0);
seq__9604_9620 = G__9635;
chunk__9606_9621 = G__9636;
count__9607_9622 = G__9637;
i__9608_9623 = G__9638;
continue;
} else {
var vec__9613_9639 = cljs.core.first.call(null,seq__9604_9633__$1);
var kw_9640 = cljs.core.nth.call(null,vec__9613_9639,(0),null);
var k_9641 = cljs.core.nth.call(null,vec__9613_9639,(1),null);
var v_9642 = cljs.core.get.call(null,cljs.core.meta.call(null,data),kw_9640);
if(cljs.core.truth_(v_9642)){
(transited_data[k_9641] = v_9642);
} else {
}

var G__9643 = cljs.core.next.call(null,seq__9604_9633__$1);
var G__9644 = null;
var G__9645 = (0);
var G__9646 = (0);
seq__9604_9620 = G__9643;
chunk__9606_9621 = G__9644;
count__9607_9622 = G__9645;
i__9608_9623 = G__9646;
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