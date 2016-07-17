// Compiled by ClojureScript 1.9.93 {}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = cljs.core.atom.call(null,(0));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4657__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4657__auto__){
return (function (){
return cljs.core.cons.call(null,node,javelin$core$bf_seq_$_walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4657__auto__))
,null,null));
} else {
return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.peek.call(null,pri_map));
if(cljs.core.truth_(temp__4657__auto__)){
var next = temp__4657__auto__;
var popq = cljs.core.pop.call(null,pri_map);
var old = next.prev;
var new$ = (function (){var temp__4655__auto__ = next.thunk;
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null);
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.call(null,new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);
} else {
}

var G__8960 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__){
return (function (p1__8958_SHARP_,p2__8959_SHARP_){
return cljs.core.assoc.call(null,p1__8958_SHARP_,p2__8959_SHARP_,p2__8959_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__))
,popq,next.sinks));
pri_map = G__8960;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.call(null,javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.call(null,c,c.rank);
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.call(null,javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e8962){if((e8962 instanceof Error)){
var _ = e8962;
return null;
} else {
throw e8962;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__8965 = c;
javelin.core.add_sync_BANG_.call(null,G__8965);

return G__8965;
} else {
var G__8966 = c;
javelin.core.propagate_STAR_.call(null,javelin.core.cell__GT_pm.call(null,G__8966));

return G__8966;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___8977 = arguments.length;
var i__7653__auto___8978 = (0);
while(true){
if((i__7653__auto___8978 < len__7652__auto___8977)){
args__7659__auto__.push((arguments[i__7653__auto___8978]));

var G__8979 = (i__7653__auto___8978 + (1));
i__7653__auto___8978 = G__8979;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8969){
var vec__8970 = p__8969;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__8970,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__8973 = cljs.core.seq.call(null,srcs);
var chunk__8974 = null;
var count__8975 = (0);
var i__8976 = (0);
while(true){
if((i__8976 < count__8975)){
var src = cljs.core._nth.call(null,chunk__8974,i__8976);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8980 = seq__8973;
var G__8981 = chunk__8974;
var G__8982 = count__8975;
var G__8983 = (i__8976 + (1));
seq__8973 = G__8980;
chunk__8974 = G__8981;
count__8975 = G__8982;
i__8976 = G__8983;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8973);
if(temp__4657__auto__){
var seq__8973__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8973__$1)){
var c__7388__auto__ = cljs.core.chunk_first.call(null,seq__8973__$1);
var G__8984 = cljs.core.chunk_rest.call(null,seq__8973__$1);
var G__8985 = c__7388__auto__;
var G__8986 = cljs.core.count.call(null,c__7388__auto__);
var G__8987 = (0);
seq__8973 = G__8984;
chunk__8974 = G__8985;
count__8975 = G__8986;
i__8976 = G__8987;
continue;
} else {
var src = cljs.core.first.call(null,seq__8973__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8988 = cljs.core.next.call(null,seq__8973__$1);
var G__8989 = null;
var G__8990 = (0);
var G__8991 = (0);
seq__8973 = G__8988;
chunk__8974 = G__8989;
count__8975 = G__8990;
i__8976 = G__8991;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq8967){
var G__8968 = cljs.core.first.call(null,seq8967);
var seq8967__$1 = cljs.core.next.call(null,seq8967);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8968,seq8967__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___9012 = arguments.length;
var i__7653__auto___9013 = (0);
while(true){
if((i__7653__auto___9013 < len__7652__auto___9012)){
args__7659__auto__.push((arguments[i__7653__auto___9013]));

var G__9014 = (i__7653__auto___9013 + (1));
i__7653__auto___9013 = G__9014;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8996){
var vec__8997 = p__8996;
var f = cljs.core.nth.call(null,vec__8997,(0),null);
var sources = cljs.core.nth.call(null,vec__8997,(1),null);
javelin.core.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__9000_9015 = cljs.core.seq.call(null,this$.sources);
var chunk__9001_9016 = null;
var count__9002_9017 = (0);
var i__9003_9018 = (0);
while(true){
if((i__9003_9018 < count__9002_9017)){
var source_9019 = cljs.core._nth.call(null,chunk__9001_9016,i__9003_9018);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_9019))){
source_9019.sinks = cljs.core.conj.call(null,source_9019.sinks,this$);

if((source_9019.rank > this$.rank)){
var seq__9004_9020 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__9000_9015,chunk__9001_9016,count__9002_9017,i__9003_9018,source_9019,vec__8997,f,sources){
return (function (p1__8992_SHARP_){
return p1__8992_SHARP_.sinks;
});})(seq__9000_9015,chunk__9001_9016,count__9002_9017,i__9003_9018,source_9019,vec__8997,f,sources))
,source_9019));
var chunk__9005_9021 = null;
var count__9006_9022 = (0);
var i__9007_9023 = (0);
while(true){
if((i__9007_9023 < count__9006_9022)){
var dep_9024 = cljs.core._nth.call(null,chunk__9005_9021,i__9007_9023);
dep_9024.rank = javelin.core.next_rank.call(null);

var G__9025 = seq__9004_9020;
var G__9026 = chunk__9005_9021;
var G__9027 = count__9006_9022;
var G__9028 = (i__9007_9023 + (1));
seq__9004_9020 = G__9025;
chunk__9005_9021 = G__9026;
count__9006_9022 = G__9027;
i__9007_9023 = G__9028;
continue;
} else {
var temp__4657__auto___9029 = cljs.core.seq.call(null,seq__9004_9020);
if(temp__4657__auto___9029){
var seq__9004_9030__$1 = temp__4657__auto___9029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9004_9030__$1)){
var c__7388__auto___9031 = cljs.core.chunk_first.call(null,seq__9004_9030__$1);
var G__9032 = cljs.core.chunk_rest.call(null,seq__9004_9030__$1);
var G__9033 = c__7388__auto___9031;
var G__9034 = cljs.core.count.call(null,c__7388__auto___9031);
var G__9035 = (0);
seq__9004_9020 = G__9032;
chunk__9005_9021 = G__9033;
count__9006_9022 = G__9034;
i__9007_9023 = G__9035;
continue;
} else {
var dep_9036 = cljs.core.first.call(null,seq__9004_9030__$1);
dep_9036.rank = javelin.core.next_rank.call(null);

var G__9037 = cljs.core.next.call(null,seq__9004_9030__$1);
var G__9038 = null;
var G__9039 = (0);
var G__9040 = (0);
seq__9004_9020 = G__9037;
chunk__9005_9021 = G__9038;
count__9006_9022 = G__9039;
i__9007_9023 = G__9040;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__9041 = seq__9000_9015;
var G__9042 = chunk__9001_9016;
var G__9043 = count__9002_9017;
var G__9044 = (i__9003_9018 + (1));
seq__9000_9015 = G__9041;
chunk__9001_9016 = G__9042;
count__9002_9017 = G__9043;
i__9003_9018 = G__9044;
continue;
} else {
var temp__4657__auto___9045 = cljs.core.seq.call(null,seq__9000_9015);
if(temp__4657__auto___9045){
var seq__9000_9046__$1 = temp__4657__auto___9045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9000_9046__$1)){
var c__7388__auto___9047 = cljs.core.chunk_first.call(null,seq__9000_9046__$1);
var G__9048 = cljs.core.chunk_rest.call(null,seq__9000_9046__$1);
var G__9049 = c__7388__auto___9047;
var G__9050 = cljs.core.count.call(null,c__7388__auto___9047);
var G__9051 = (0);
seq__9000_9015 = G__9048;
chunk__9001_9016 = G__9049;
count__9002_9017 = G__9050;
i__9003_9018 = G__9051;
continue;
} else {
var source_9052 = cljs.core.first.call(null,seq__9000_9046__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_9052))){
source_9052.sinks = cljs.core.conj.call(null,source_9052.sinks,this$);

if((source_9052.rank > this$.rank)){
var seq__9008_9053 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__9000_9015,chunk__9001_9016,count__9002_9017,i__9003_9018,source_9052,seq__9000_9046__$1,temp__4657__auto___9045,vec__8997,f,sources){
return (function (p1__8992_SHARP_){
return p1__8992_SHARP_.sinks;
});})(seq__9000_9015,chunk__9001_9016,count__9002_9017,i__9003_9018,source_9052,seq__9000_9046__$1,temp__4657__auto___9045,vec__8997,f,sources))
,source_9052));
var chunk__9009_9054 = null;
var count__9010_9055 = (0);
var i__9011_9056 = (0);
while(true){
if((i__9011_9056 < count__9010_9055)){
var dep_9057 = cljs.core._nth.call(null,chunk__9009_9054,i__9011_9056);
dep_9057.rank = javelin.core.next_rank.call(null);

var G__9058 = seq__9008_9053;
var G__9059 = chunk__9009_9054;
var G__9060 = count__9010_9055;
var G__9061 = (i__9011_9056 + (1));
seq__9008_9053 = G__9058;
chunk__9009_9054 = G__9059;
count__9010_9055 = G__9060;
i__9011_9056 = G__9061;
continue;
} else {
var temp__4657__auto___9062__$1 = cljs.core.seq.call(null,seq__9008_9053);
if(temp__4657__auto___9062__$1){
var seq__9008_9063__$1 = temp__4657__auto___9062__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9008_9063__$1)){
var c__7388__auto___9064 = cljs.core.chunk_first.call(null,seq__9008_9063__$1);
var G__9065 = cljs.core.chunk_rest.call(null,seq__9008_9063__$1);
var G__9066 = c__7388__auto___9064;
var G__9067 = cljs.core.count.call(null,c__7388__auto___9064);
var G__9068 = (0);
seq__9008_9053 = G__9065;
chunk__9009_9054 = G__9066;
count__9010_9055 = G__9067;
i__9011_9056 = G__9068;
continue;
} else {
var dep_9069 = cljs.core.first.call(null,seq__9008_9063__$1);
dep_9069.rank = javelin.core.next_rank.call(null);

var G__9070 = cljs.core.next.call(null,seq__9008_9063__$1);
var G__9071 = null;
var G__9072 = (0);
var G__9073 = (0);
seq__9008_9053 = G__9070;
chunk__9009_9054 = G__9071;
count__9010_9055 = G__9072;
i__9011_9056 = G__9073;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__9074 = cljs.core.next.call(null,seq__9000_9046__$1);
var G__9075 = null;
var G__9076 = (0);
var G__9077 = (0);
seq__9000_9015 = G__9074;
chunk__9001_9016 = G__9075;
count__9002_9017 = G__9076;
i__9003_9018 = G__9077;
continue;
}
} else {
}
}
break;
}

var compute_9078 = ((function (vec__8997,f,sources){
return (function (p1__8993_SHARP_){
return cljs.core.apply.call(null,javelin.core.deref_STAR_.call(null,cljs.core.peek.call(null,p1__8993_SHARP_)),cljs.core.map.call(null,javelin.core.deref_STAR_,cljs.core.pop.call(null,p1__8993_SHARP_)));
});})(vec__8997,f,sources))
;
this$.thunk = ((function (compute_9078,vec__8997,f,sources){
return (function (){
return this$.state = compute_9078.call(null,this$.sources);
});})(compute_9078,vec__8997,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_.call(null,this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq8994){
var G__8995 = cljs.core.first.call(null,seq8994);
var seq8994__$1 = cljs.core.next.call(null,seq8994);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8995,seq8994__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.call(null,w,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(javelin.core.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

javelin.core.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__9079 = cljs.core.seq.call(null,self__.watches);
var chunk__9080 = null;
var count__9081 = (0);
var i__9082 = (0);
while(true){
if((i__9082 < count__9081)){
var vec__9083 = cljs.core._nth.call(null,chunk__9080,i__9082);
var key = cljs.core.nth.call(null,vec__9083,(0),null);
var f = cljs.core.nth.call(null,vec__9083,(1),null);
f.call(null,key,this$__$1,o,n);

var G__9089 = seq__9079;
var G__9090 = chunk__9080;
var G__9091 = count__9081;
var G__9092 = (i__9082 + (1));
seq__9079 = G__9089;
chunk__9080 = G__9090;
count__9081 = G__9091;
i__9082 = G__9092;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9079);
if(temp__4657__auto__){
var seq__9079__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9079__$1)){
var c__7388__auto__ = cljs.core.chunk_first.call(null,seq__9079__$1);
var G__9093 = cljs.core.chunk_rest.call(null,seq__9079__$1);
var G__9094 = c__7388__auto__;
var G__9095 = cljs.core.count.call(null,c__7388__auto__);
var G__9096 = (0);
seq__9079 = G__9093;
chunk__9080 = G__9094;
count__9081 = G__9095;
i__9082 = G__9096;
continue;
} else {
var vec__9086 = cljs.core.first.call(null,seq__9079__$1);
var key = cljs.core.nth.call(null,vec__9086,(0),null);
var f = cljs.core.nth.call(null,vec__9086,(1),null);
f.call(null,key,this$__$1,o,n);

var G__9097 = cljs.core.next.call(null,seq__9079__$1);
var G__9098 = null;
var G__9099 = (0);
var G__9100 = (0);
seq__9079 = G__9097;
chunk__9080 = G__9098;
count__9081 = G__9099;
i__9082 = G__9100;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"thunk","thunk",74255732,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update","update",-1608859373,null)], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__6565__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__6565__auto__)){
return c.thunk;
} else {
return and__6565__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__6565__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__6565__auto__)){
return c.update;
} else {
return and__6565__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__6565__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__6565__auto__)){
return cljs.core.not.call(null,javelin.core.formula_QMARK_.call(null,c));
} else {
return and__6565__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_.call(null,c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__9101__delegate = function (sources){
return javelin.core.set_formula_BANG_.call(null,javelin.core.cell.call(null,new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)),f,sources);
};
var G__9101 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__9102__i = 0, G__9102__a = new Array(arguments.length -  0);
while (G__9102__i < G__9102__a.length) {G__9102__a[G__9102__i] = arguments[G__9102__i + 0]; ++G__9102__i;}
  sources = new cljs.core.IndexedSeq(G__9102__a,0);
} 
return G__9101__delegate.call(this,sources);};
G__9101.cljs$lang$maxFixedArity = 0;
G__9101.cljs$lang$applyTo = (function (arglist__9103){
var sources = cljs.core.seq(arglist__9103);
return G__9101__delegate(sources);
});
G__9101.cljs$core$IFn$_invoke$arity$variadic = G__9101__delegate;
return G__9101;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args9104 = [];
var len__7652__auto___9112 = arguments.length;
var i__7653__auto___9113 = (0);
while(true){
if((i__7653__auto___9113 < len__7652__auto___9112)){
args9104.push((arguments[i__7653__auto___9113]));

var G__9114 = (i__7653__auto___9113 + (1));
i__7653__auto___9113 = G__9114;
continue;
} else {
}
break;
}

var G__9108 = args9104.length;
switch (G__9108) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args9104.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7671__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__9109){
var map__9110 = p__9109;
var map__9110__$1 = ((((!((map__9110 == null)))?((((map__9110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9110):map__9110);
var meta = cljs.core.get.call(null,map__9110__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq9105){
var G__9106 = cljs.core.first.call(null,seq9105);
var seq9105__$1 = cljs.core.next.call(null,seq9105);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__9106,seq9105__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__9116_SHARP_){
var _STAR_tx_STAR_9119 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__9116_SHARP_.call(null);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_9119;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_);
var _STAR_tx_STAR_9120 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_9120;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return thunk.call(null);
} else {
return bind.call(null,((function (bind,prop){
return (function (){
thunk.call(null);

return prop.call(null);
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___9127 = arguments.length;
var i__7653__auto___9128 = (0);
while(true){
if((i__7653__auto___9128 < len__7652__auto___9127)){
args__7659__auto__.push((arguments[i__7653__auto___9128]));

var G__9129 = (i__7653__auto___9128 + (1));
i__7653__auto___9128 = G__9129;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)));
var tag_neq = ((function (olds){
return (function (p1__9121_SHARP_,p2__9122_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__9121_SHARP_,p2__9122_SHARP_),p2__9122_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__9124_SHARP_,p2__9123_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__9124_SHARP_,p2__9123_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9130__delegate = function (rest__9125_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__9125_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__9125_SHARP_);

return news;
};
var G__9130 = function (var_args){
var rest__9125_SHARP_ = null;
if (arguments.length > 0) {
var G__9131__i = 0, G__9131__a = new Array(arguments.length -  0);
while (G__9131__i < G__9131__a.length) {G__9131__a[G__9131__i] = arguments[G__9131__i + 0]; ++G__9131__i;}
  rest__9125_SHARP_ = new cljs.core.IndexedSeq(G__9131__a,0);
} 
return G__9130__delegate.call(this,rest__9125_SHARP_);};
G__9130.cljs$lang$maxFixedArity = 0;
G__9130.cljs$lang$applyTo = (function (arglist__9132){
var rest__9125_SHARP_ = cljs.core.seq(arglist__9132);
return G__9130__delegate(rest__9125_SHARP_);
});
G__9130.cljs$core$IFn$_invoke$arity$variadic = G__9130__delegate;
return G__9130;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq9126){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9126));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__9133_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__9133_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.call(null,(0));
var cur_count = javelin.core.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__9134_SHARP_){
return javelin.core.formula.call(null,javelin.core.safe_nth).call(null,items_seq,p1__9134_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__9139_9143 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__9140_9144 = null;
var count__9141_9145 = (0);
var i__9142_9146 = (0);
while(true){
if((i__9142_9146 < count__9141_9145)){
var i_9147 = cljs.core._nth.call(null,chunk__9140_9144,i__9142_9146);
f__$1.call(null,ith_item__$1.call(null,i_9147));

var G__9148 = seq__9139_9143;
var G__9149 = chunk__9140_9144;
var G__9150 = count__9141_9145;
var G__9151 = (i__9142_9146 + (1));
seq__9139_9143 = G__9148;
chunk__9140_9144 = G__9149;
count__9141_9145 = G__9150;
i__9142_9146 = G__9151;
continue;
} else {
var temp__4657__auto___9152 = cljs.core.seq.call(null,seq__9139_9143);
if(temp__4657__auto___9152){
var seq__9139_9153__$1 = temp__4657__auto___9152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9139_9153__$1)){
var c__7388__auto___9154 = cljs.core.chunk_first.call(null,seq__9139_9153__$1);
var G__9155 = cljs.core.chunk_rest.call(null,seq__9139_9153__$1);
var G__9156 = c__7388__auto___9154;
var G__9157 = cljs.core.count.call(null,c__7388__auto___9154);
var G__9158 = (0);
seq__9139_9143 = G__9155;
chunk__9140_9144 = G__9156;
count__9141_9145 = G__9157;
i__9142_9146 = G__9158;
continue;
} else {
var i_9159 = cljs.core.first.call(null,seq__9139_9153__$1);
f__$1.call(null,ith_item__$1.call(null,i_9159));

var G__9160 = cljs.core.next.call(null,seq__9139_9153__$1);
var G__9161 = null;
var G__9162 = (0);
var G__9163 = (0);
seq__9139_9143 = G__9160;
chunk__9140_9144 = G__9161;
count__9141_9145 = G__9162;
i__9142_9146 = G__9163;
continue;
}
} else {
}
}
break;
}

return reset_pool_size_BANG_.call(null,cur_count__$1);
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.call(null,cljs.core.reset_BANG_,pool_size));
});

//# sourceMappingURL=core.js.map