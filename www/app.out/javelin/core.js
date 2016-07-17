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

var G__9204 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__){
return (function (p1__9202_SHARP_,p2__9203_SHARP_){
return cljs.core.assoc.call(null,p1__9202_SHARP_,p2__9203_SHARP_,p2__9203_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__))
,popq,next.sinks));
pri_map = G__9204;
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
}catch (e9206){if((e9206 instanceof Error)){
var _ = e9206;
return null;
} else {
throw e9206;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__9209 = c;
javelin.core.add_sync_BANG_.call(null,G__9209);

return G__9209;
} else {
var G__9210 = c;
javelin.core.propagate_STAR_.call(null,javelin.core.cell__GT_pm.call(null,G__9210));

return G__9210;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___9221 = arguments.length;
var i__7653__auto___9222 = (0);
while(true){
if((i__7653__auto___9222 < len__7652__auto___9221)){
args__7659__auto__.push((arguments[i__7653__auto___9222]));

var G__9223 = (i__7653__auto___9222 + (1));
i__7653__auto___9222 = G__9223;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__9213){
var vec__9214 = p__9213;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__9214,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__9217 = cljs.core.seq.call(null,srcs);
var chunk__9218 = null;
var count__9219 = (0);
var i__9220 = (0);
while(true){
if((i__9220 < count__9219)){
var src = cljs.core._nth.call(null,chunk__9218,i__9220);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__9224 = seq__9217;
var G__9225 = chunk__9218;
var G__9226 = count__9219;
var G__9227 = (i__9220 + (1));
seq__9217 = G__9224;
chunk__9218 = G__9225;
count__9219 = G__9226;
i__9220 = G__9227;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9217);
if(temp__4657__auto__){
var seq__9217__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9217__$1)){
var c__7388__auto__ = cljs.core.chunk_first.call(null,seq__9217__$1);
var G__9228 = cljs.core.chunk_rest.call(null,seq__9217__$1);
var G__9229 = c__7388__auto__;
var G__9230 = cljs.core.count.call(null,c__7388__auto__);
var G__9231 = (0);
seq__9217 = G__9228;
chunk__9218 = G__9229;
count__9219 = G__9230;
i__9220 = G__9231;
continue;
} else {
var src = cljs.core.first.call(null,seq__9217__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__9232 = cljs.core.next.call(null,seq__9217__$1);
var G__9233 = null;
var G__9234 = (0);
var G__9235 = (0);
seq__9217 = G__9232;
chunk__9218 = G__9233;
count__9219 = G__9234;
i__9220 = G__9235;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq9211){
var G__9212 = cljs.core.first.call(null,seq9211);
var seq9211__$1 = cljs.core.next.call(null,seq9211);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9212,seq9211__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___9256 = arguments.length;
var i__7653__auto___9257 = (0);
while(true){
if((i__7653__auto___9257 < len__7652__auto___9256)){
args__7659__auto__.push((arguments[i__7653__auto___9257]));

var G__9258 = (i__7653__auto___9257 + (1));
i__7653__auto___9257 = G__9258;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__9240){
var vec__9241 = p__9240;
var f = cljs.core.nth.call(null,vec__9241,(0),null);
var sources = cljs.core.nth.call(null,vec__9241,(1),null);
javelin.core.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__9244_9259 = cljs.core.seq.call(null,this$.sources);
var chunk__9245_9260 = null;
var count__9246_9261 = (0);
var i__9247_9262 = (0);
while(true){
if((i__9247_9262 < count__9246_9261)){
var source_9263 = cljs.core._nth.call(null,chunk__9245_9260,i__9247_9262);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_9263))){
source_9263.sinks = cljs.core.conj.call(null,source_9263.sinks,this$);

if((source_9263.rank > this$.rank)){
var seq__9248_9264 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__9244_9259,chunk__9245_9260,count__9246_9261,i__9247_9262,source_9263,vec__9241,f,sources){
return (function (p1__9236_SHARP_){
return p1__9236_SHARP_.sinks;
});})(seq__9244_9259,chunk__9245_9260,count__9246_9261,i__9247_9262,source_9263,vec__9241,f,sources))
,source_9263));
var chunk__9249_9265 = null;
var count__9250_9266 = (0);
var i__9251_9267 = (0);
while(true){
if((i__9251_9267 < count__9250_9266)){
var dep_9268 = cljs.core._nth.call(null,chunk__9249_9265,i__9251_9267);
dep_9268.rank = javelin.core.next_rank.call(null);

var G__9269 = seq__9248_9264;
var G__9270 = chunk__9249_9265;
var G__9271 = count__9250_9266;
var G__9272 = (i__9251_9267 + (1));
seq__9248_9264 = G__9269;
chunk__9249_9265 = G__9270;
count__9250_9266 = G__9271;
i__9251_9267 = G__9272;
continue;
} else {
var temp__4657__auto___9273 = cljs.core.seq.call(null,seq__9248_9264);
if(temp__4657__auto___9273){
var seq__9248_9274__$1 = temp__4657__auto___9273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9248_9274__$1)){
var c__7388__auto___9275 = cljs.core.chunk_first.call(null,seq__9248_9274__$1);
var G__9276 = cljs.core.chunk_rest.call(null,seq__9248_9274__$1);
var G__9277 = c__7388__auto___9275;
var G__9278 = cljs.core.count.call(null,c__7388__auto___9275);
var G__9279 = (0);
seq__9248_9264 = G__9276;
chunk__9249_9265 = G__9277;
count__9250_9266 = G__9278;
i__9251_9267 = G__9279;
continue;
} else {
var dep_9280 = cljs.core.first.call(null,seq__9248_9274__$1);
dep_9280.rank = javelin.core.next_rank.call(null);

var G__9281 = cljs.core.next.call(null,seq__9248_9274__$1);
var G__9282 = null;
var G__9283 = (0);
var G__9284 = (0);
seq__9248_9264 = G__9281;
chunk__9249_9265 = G__9282;
count__9250_9266 = G__9283;
i__9251_9267 = G__9284;
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

var G__9285 = seq__9244_9259;
var G__9286 = chunk__9245_9260;
var G__9287 = count__9246_9261;
var G__9288 = (i__9247_9262 + (1));
seq__9244_9259 = G__9285;
chunk__9245_9260 = G__9286;
count__9246_9261 = G__9287;
i__9247_9262 = G__9288;
continue;
} else {
var temp__4657__auto___9289 = cljs.core.seq.call(null,seq__9244_9259);
if(temp__4657__auto___9289){
var seq__9244_9290__$1 = temp__4657__auto___9289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9244_9290__$1)){
var c__7388__auto___9291 = cljs.core.chunk_first.call(null,seq__9244_9290__$1);
var G__9292 = cljs.core.chunk_rest.call(null,seq__9244_9290__$1);
var G__9293 = c__7388__auto___9291;
var G__9294 = cljs.core.count.call(null,c__7388__auto___9291);
var G__9295 = (0);
seq__9244_9259 = G__9292;
chunk__9245_9260 = G__9293;
count__9246_9261 = G__9294;
i__9247_9262 = G__9295;
continue;
} else {
var source_9296 = cljs.core.first.call(null,seq__9244_9290__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_9296))){
source_9296.sinks = cljs.core.conj.call(null,source_9296.sinks,this$);

if((source_9296.rank > this$.rank)){
var seq__9252_9297 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__9244_9259,chunk__9245_9260,count__9246_9261,i__9247_9262,source_9296,seq__9244_9290__$1,temp__4657__auto___9289,vec__9241,f,sources){
return (function (p1__9236_SHARP_){
return p1__9236_SHARP_.sinks;
});})(seq__9244_9259,chunk__9245_9260,count__9246_9261,i__9247_9262,source_9296,seq__9244_9290__$1,temp__4657__auto___9289,vec__9241,f,sources))
,source_9296));
var chunk__9253_9298 = null;
var count__9254_9299 = (0);
var i__9255_9300 = (0);
while(true){
if((i__9255_9300 < count__9254_9299)){
var dep_9301 = cljs.core._nth.call(null,chunk__9253_9298,i__9255_9300);
dep_9301.rank = javelin.core.next_rank.call(null);

var G__9302 = seq__9252_9297;
var G__9303 = chunk__9253_9298;
var G__9304 = count__9254_9299;
var G__9305 = (i__9255_9300 + (1));
seq__9252_9297 = G__9302;
chunk__9253_9298 = G__9303;
count__9254_9299 = G__9304;
i__9255_9300 = G__9305;
continue;
} else {
var temp__4657__auto___9306__$1 = cljs.core.seq.call(null,seq__9252_9297);
if(temp__4657__auto___9306__$1){
var seq__9252_9307__$1 = temp__4657__auto___9306__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9252_9307__$1)){
var c__7388__auto___9308 = cljs.core.chunk_first.call(null,seq__9252_9307__$1);
var G__9309 = cljs.core.chunk_rest.call(null,seq__9252_9307__$1);
var G__9310 = c__7388__auto___9308;
var G__9311 = cljs.core.count.call(null,c__7388__auto___9308);
var G__9312 = (0);
seq__9252_9297 = G__9309;
chunk__9253_9298 = G__9310;
count__9254_9299 = G__9311;
i__9255_9300 = G__9312;
continue;
} else {
var dep_9313 = cljs.core.first.call(null,seq__9252_9307__$1);
dep_9313.rank = javelin.core.next_rank.call(null);

var G__9314 = cljs.core.next.call(null,seq__9252_9307__$1);
var G__9315 = null;
var G__9316 = (0);
var G__9317 = (0);
seq__9252_9297 = G__9314;
chunk__9253_9298 = G__9315;
count__9254_9299 = G__9316;
i__9255_9300 = G__9317;
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

var G__9318 = cljs.core.next.call(null,seq__9244_9290__$1);
var G__9319 = null;
var G__9320 = (0);
var G__9321 = (0);
seq__9244_9259 = G__9318;
chunk__9245_9260 = G__9319;
count__9246_9261 = G__9320;
i__9247_9262 = G__9321;
continue;
}
} else {
}
}
break;
}

var compute_9322 = ((function (vec__9241,f,sources){
return (function (p1__9237_SHARP_){
return cljs.core.apply.call(null,javelin.core.deref_STAR_.call(null,cljs.core.peek.call(null,p1__9237_SHARP_)),cljs.core.map.call(null,javelin.core.deref_STAR_,cljs.core.pop.call(null,p1__9237_SHARP_)));
});})(vec__9241,f,sources))
;
this$.thunk = ((function (compute_9322,vec__9241,f,sources){
return (function (){
return this$.state = compute_9322.call(null,this$.sources);
});})(compute_9322,vec__9241,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_.call(null,this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq9238){
var G__9239 = cljs.core.first.call(null,seq9238);
var seq9238__$1 = cljs.core.next.call(null,seq9238);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9239,seq9238__$1);
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
var seq__9323 = cljs.core.seq.call(null,self__.watches);
var chunk__9324 = null;
var count__9325 = (0);
var i__9326 = (0);
while(true){
if((i__9326 < count__9325)){
var vec__9327 = cljs.core._nth.call(null,chunk__9324,i__9326);
var key = cljs.core.nth.call(null,vec__9327,(0),null);
var f = cljs.core.nth.call(null,vec__9327,(1),null);
f.call(null,key,this$__$1,o,n);

var G__9333 = seq__9323;
var G__9334 = chunk__9324;
var G__9335 = count__9325;
var G__9336 = (i__9326 + (1));
seq__9323 = G__9333;
chunk__9324 = G__9334;
count__9325 = G__9335;
i__9326 = G__9336;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9323);
if(temp__4657__auto__){
var seq__9323__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9323__$1)){
var c__7388__auto__ = cljs.core.chunk_first.call(null,seq__9323__$1);
var G__9337 = cljs.core.chunk_rest.call(null,seq__9323__$1);
var G__9338 = c__7388__auto__;
var G__9339 = cljs.core.count.call(null,c__7388__auto__);
var G__9340 = (0);
seq__9323 = G__9337;
chunk__9324 = G__9338;
count__9325 = G__9339;
i__9326 = G__9340;
continue;
} else {
var vec__9330 = cljs.core.first.call(null,seq__9323__$1);
var key = cljs.core.nth.call(null,vec__9330,(0),null);
var f = cljs.core.nth.call(null,vec__9330,(1),null);
f.call(null,key,this$__$1,o,n);

var G__9341 = cljs.core.next.call(null,seq__9323__$1);
var G__9342 = null;
var G__9343 = (0);
var G__9344 = (0);
seq__9323 = G__9341;
chunk__9324 = G__9342;
count__9325 = G__9343;
i__9326 = G__9344;
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
var G__9345__delegate = function (sources){
return javelin.core.set_formula_BANG_.call(null,javelin.core.cell.call(null,new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)),f,sources);
};
var G__9345 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__9346__i = 0, G__9346__a = new Array(arguments.length -  0);
while (G__9346__i < G__9346__a.length) {G__9346__a[G__9346__i] = arguments[G__9346__i + 0]; ++G__9346__i;}
  sources = new cljs.core.IndexedSeq(G__9346__a,0);
} 
return G__9345__delegate.call(this,sources);};
G__9345.cljs$lang$maxFixedArity = 0;
G__9345.cljs$lang$applyTo = (function (arglist__9347){
var sources = cljs.core.seq(arglist__9347);
return G__9345__delegate(sources);
});
G__9345.cljs$core$IFn$_invoke$arity$variadic = G__9345__delegate;
return G__9345;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args9348 = [];
var len__7652__auto___9356 = arguments.length;
var i__7653__auto___9357 = (0);
while(true){
if((i__7653__auto___9357 < len__7652__auto___9356)){
args9348.push((arguments[i__7653__auto___9357]));

var G__9358 = (i__7653__auto___9357 + (1));
i__7653__auto___9357 = G__9358;
continue;
} else {
}
break;
}

var G__9352 = args9348.length;
switch (G__9352) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args9348.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7671__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__9353){
var map__9354 = p__9353;
var map__9354__$1 = ((((!((map__9354 == null)))?((((map__9354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9354):map__9354);
var meta = cljs.core.get.call(null,map__9354__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq9349){
var G__9350 = cljs.core.first.call(null,seq9349);
var seq9349__$1 = cljs.core.next.call(null,seq9349);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__9350,seq9349__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__9360_SHARP_){
var _STAR_tx_STAR_9363 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__9360_SHARP_.call(null);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_9363;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_);
var _STAR_tx_STAR_9364 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_9364;
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
var len__7652__auto___9371 = arguments.length;
var i__7653__auto___9372 = (0);
while(true){
if((i__7653__auto___9372 < len__7652__auto___9371)){
args__7659__auto__.push((arguments[i__7653__auto___9372]));

var G__9373 = (i__7653__auto___9372 + (1));
i__7653__auto___9372 = G__9373;
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
return (function (p1__9365_SHARP_,p2__9366_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__9365_SHARP_,p2__9366_SHARP_),p2__9366_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__9368_SHARP_,p2__9367_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__9368_SHARP_,p2__9367_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9374__delegate = function (rest__9369_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__9369_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__9369_SHARP_);

return news;
};
var G__9374 = function (var_args){
var rest__9369_SHARP_ = null;
if (arguments.length > 0) {
var G__9375__i = 0, G__9375__a = new Array(arguments.length -  0);
while (G__9375__i < G__9375__a.length) {G__9375__a[G__9375__i] = arguments[G__9375__i + 0]; ++G__9375__i;}
  rest__9369_SHARP_ = new cljs.core.IndexedSeq(G__9375__a,0);
} 
return G__9374__delegate.call(this,rest__9369_SHARP_);};
G__9374.cljs$lang$maxFixedArity = 0;
G__9374.cljs$lang$applyTo = (function (arglist__9376){
var rest__9369_SHARP_ = cljs.core.seq(arglist__9376);
return G__9374__delegate(rest__9369_SHARP_);
});
G__9374.cljs$core$IFn$_invoke$arity$variadic = G__9374__delegate;
return G__9374;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq9370){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9370));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__9377_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__9377_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.call(null,(0));
var cur_count = javelin.core.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__9378_SHARP_){
return javelin.core.formula.call(null,javelin.core.safe_nth).call(null,items_seq,p1__9378_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__9383_9387 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__9384_9388 = null;
var count__9385_9389 = (0);
var i__9386_9390 = (0);
while(true){
if((i__9386_9390 < count__9385_9389)){
var i_9391 = cljs.core._nth.call(null,chunk__9384_9388,i__9386_9390);
f__$1.call(null,ith_item__$1.call(null,i_9391));

var G__9392 = seq__9383_9387;
var G__9393 = chunk__9384_9388;
var G__9394 = count__9385_9389;
var G__9395 = (i__9386_9390 + (1));
seq__9383_9387 = G__9392;
chunk__9384_9388 = G__9393;
count__9385_9389 = G__9394;
i__9386_9390 = G__9395;
continue;
} else {
var temp__4657__auto___9396 = cljs.core.seq.call(null,seq__9383_9387);
if(temp__4657__auto___9396){
var seq__9383_9397__$1 = temp__4657__auto___9396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9383_9397__$1)){
var c__7388__auto___9398 = cljs.core.chunk_first.call(null,seq__9383_9397__$1);
var G__9399 = cljs.core.chunk_rest.call(null,seq__9383_9397__$1);
var G__9400 = c__7388__auto___9398;
var G__9401 = cljs.core.count.call(null,c__7388__auto___9398);
var G__9402 = (0);
seq__9383_9387 = G__9399;
chunk__9384_9388 = G__9400;
count__9385_9389 = G__9401;
i__9386_9390 = G__9402;
continue;
} else {
var i_9403 = cljs.core.first.call(null,seq__9383_9397__$1);
f__$1.call(null,ith_item__$1.call(null,i_9403));

var G__9404 = cljs.core.next.call(null,seq__9383_9397__$1);
var G__9405 = null;
var G__9406 = (0);
var G__9407 = (0);
seq__9383_9387 = G__9404;
chunk__9384_9388 = G__9405;
count__9385_9389 = G__9406;
i__9386_9390 = G__9407;
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