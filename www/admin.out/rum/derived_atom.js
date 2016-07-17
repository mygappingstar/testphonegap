// Compiled by ClojureScript 1.9.93 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 *   
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 *   
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args9400 = [];
var len__7652__auto___9420 = arguments.length;
var i__7653__auto___9421 = (0);
while(true){
if((i__7653__auto___9421 < len__7652__auto___9420)){
args9400.push((arguments[i__7653__auto___9421]));

var G__9422 = (i__7653__auto___9421 + (1));
i__7653__auto___9421 = G__9422;
continue;
} else {
}
break;
}

var G__9402 = args9400.length;
switch (G__9402) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9400.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__9403 = opts;
var map__9403__$1 = ((((!((map__9403 == null)))?((((map__9403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9403):map__9403);
var ref = cljs.core.get.call(null,map__9403__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__9403__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__9405 = cljs.core.count.call(null,refs);
switch (G__9405) {
case (1):
var vec__9406 = refs;
var a = cljs.core.nth.call(null,vec__9406,(0),null);
return ((function (vec__9406,a,G__9405,map__9403,map__9403__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__9406,a,G__9405,map__9403,map__9403__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__9409 = refs;
var a = cljs.core.nth.call(null,vec__9409,(0),null);
var b = cljs.core.nth.call(null,vec__9409,(1),null);
return ((function (vec__9409,a,b,G__9405,map__9403,map__9403__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__9409,a,b,G__9405,map__9403,map__9403__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__9412 = refs;
var a = cljs.core.nth.call(null,vec__9412,(0),null);
var b = cljs.core.nth.call(null,vec__9412,(1),null);
var c = cljs.core.nth.call(null,vec__9412,(2),null);
return ((function (vec__9412,a,b,c,G__9405,map__9403,map__9403__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__9412,a,b,c,G__9405,map__9403,map__9403__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__9405,map__9403,map__9403__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__9405,map__9403,map__9403__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__9415 = ref;
cljs.core.reset_BANG_.call(null,G__9415,recalc.call(null));

return G__9415;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__9403,map__9403__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__9403,map__9403__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__9403,map__9403__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__9403,map__9403__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__9416_9425 = cljs.core.seq.call(null,refs);
var chunk__9417_9426 = null;
var count__9418_9427 = (0);
var i__9419_9428 = (0);
while(true){
if((i__9419_9428 < count__9418_9427)){
var ref_9429__$1 = cljs.core._nth.call(null,chunk__9417_9426,i__9419_9428);
cljs.core.add_watch.call(null,ref_9429__$1,key,watch);

var G__9430 = seq__9416_9425;
var G__9431 = chunk__9417_9426;
var G__9432 = count__9418_9427;
var G__9433 = (i__9419_9428 + (1));
seq__9416_9425 = G__9430;
chunk__9417_9426 = G__9431;
count__9418_9427 = G__9432;
i__9419_9428 = G__9433;
continue;
} else {
var temp__4657__auto___9434 = cljs.core.seq.call(null,seq__9416_9425);
if(temp__4657__auto___9434){
var seq__9416_9435__$1 = temp__4657__auto___9434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9416_9435__$1)){
var c__7388__auto___9436 = cljs.core.chunk_first.call(null,seq__9416_9435__$1);
var G__9437 = cljs.core.chunk_rest.call(null,seq__9416_9435__$1);
var G__9438 = c__7388__auto___9436;
var G__9439 = cljs.core.count.call(null,c__7388__auto___9436);
var G__9440 = (0);
seq__9416_9425 = G__9437;
chunk__9417_9426 = G__9438;
count__9418_9427 = G__9439;
i__9419_9428 = G__9440;
continue;
} else {
var ref_9441__$1 = cljs.core.first.call(null,seq__9416_9435__$1);
cljs.core.add_watch.call(null,ref_9441__$1,key,watch);

var G__9442 = cljs.core.next.call(null,seq__9416_9435__$1);
var G__9443 = null;
var G__9444 = (0);
var G__9445 = (0);
seq__9416_9425 = G__9442;
chunk__9417_9426 = G__9443;
count__9418_9427 = G__9444;
i__9419_9428 = G__9445;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map