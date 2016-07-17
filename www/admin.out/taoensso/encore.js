// Compiled by ClojureScript 1.9.93 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
/**
 * Used for lib-consumer version assertions
 */
taoensso.encore.encore_version = 1.24;
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
if((taoensso.encore.encore_version < min_version)){
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"Insufficient com.taoensso/encore version: %s < %s. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).",taoensso.encore.encore_version,min_version),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),min_version,new cljs.core.Keyword(null,"this-version","this-version",355666086),taoensso.encore.encore_version], null));
} else {
return null;
}
});
/**
 * Handles optional docstrings & attr maps for a macro def's name.
 *   Stolen from `clojure.tools.macro`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(name,macro_args){
var vec__22964 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__22964,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__22964,(1),null);
var vec__22967 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__22967,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__22967,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4657__auto__ = (function (){var or__6577__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var data_map = temp__4657__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.nnil_QMARK_ = (function taoensso$encore$nnil_QMARK_(x){
return !((x == null));
});
taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});
taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function taoensso$encore$nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.udt_QMARK_ = taoensso.encore.nneg_int_QMARK_;
taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(2),x);
});
taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(3),x);
});
taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_.call(null,x)));
});
taoensso.encore.nneg_num_QMARK_ = (function taoensso$encore$nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,(0),x);
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNan(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(var_args){
var args22972 = [];
var len__7652__auto___22978 = arguments.length;
var i__7653__auto___22979 = (0);
while(true){
if((i__7653__auto___22979 < len__7652__auto___22978)){
args22972.push((arguments[i__7653__auto___22979]));

var G__22980 = (i__7653__auto___22979 + (1));
i__7653__auto___22979 = G__22980;
continue;
} else {
}
break;
}

var G__22977 = args22972.length;
switch (G__22977) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args22972.slice((2)),(0),null));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7671__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__6565__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__6565__auto__)){
return cljs.core._EQ_.call(null,x,y);
} else {
return and__6565__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__6565__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__6565__auto__)){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__6565__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq22973){
var G__22974 = cljs.core.first.call(null,seq22973);
var seq22973__$1 = cljs.core.next.call(null,seq22973);
var G__22975 = cljs.core.first.call(null,seq22973__$1);
var seq22973__$2 = cljs.core.next.call(null,seq22973__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__22974,G__22975,seq22973__$2);
});

taoensso.encore.nnil_EQ_.cljs$lang$maxFixedArity = (2);

taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(coll,_QMARK_x){
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,_QMARK_x))){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return cljs.core.every_QMARK_.call(null,(function (p1__22982_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__22982_SHARP_));
}),ks);
});
taoensso.encore.assertion_error = (function taoensso$encore$assertion_error(msg){
return (new Error(msg));
});
/**
 * Implementation detail.
 */
taoensso.encore.hthrow = (function taoensso$encore$hthrow(var_args){
var args__7659__auto__ = [];
var len__7652__auto___22993 = arguments.length;
var i__7653__auto___22994 = (0);
while(true){
if((i__7653__auto___22994 < len__7652__auto___22993)){
args__7659__auto__.push((arguments[i__7653__auto___22994]));

var G__22995 = (i__7653__auto___22994 + (1));
i__7653__auto___22994 = G__22995;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((5) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((5)),(0),null)):null);
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7660__auto__);
});

taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic = (function (hard_QMARK_,ns_str,_QMARK_line,form,val,p__22989){
var vec__22990 = p__22989;
var _QMARK_err = cljs.core.nth.call(null,vec__22990,(0),null);
var pattern = "Condition failed in `%s:%s` [pred-form, val]: [%s, %s]";
var line_str = (function (){var or__6577__auto__ = _QMARK_line;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return "?";
}
})();
var form_str = cljs.core.pr_str.call(null,form);
var val_str = cljs.core.pr_str.call(null,val);
var _QMARK_err_str = (function (){var temp__4657__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__4657__auto__)){
var e = temp__4657__auto__;
return cljs.core.pr_str.call(null,_QMARK_err);
} else {
return null;
}
})();
var msg = (function (){var m = taoensso.encore.format.call(null,pattern,ns_str,line_str,form_str,val_str);
if(cljs.core.not.call(null,_QMARK_err_str)){
return m;
} else {
return [cljs.core.str(m),cljs.core.str("\nPredicate error: "),cljs.core.str(_QMARK_err_str)].join('');
}
})();
throw ((cljs.core.not.call(null,hard_QMARK_))?taoensso.encore.assertion_error.call(null,msg):cljs.core.ex_info.call(null,msg,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),ns_str,new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"?err","?err",549653299),_QMARK_err], null)));
});

taoensso.encore.hthrow.cljs$lang$maxFixedArity = (5);

taoensso.encore.hthrow.cljs$lang$applyTo = (function (seq22983){
var G__22984 = cljs.core.first.call(null,seq22983);
var seq22983__$1 = cljs.core.next.call(null,seq22983);
var G__22985 = cljs.core.first.call(null,seq22983__$1);
var seq22983__$2 = cljs.core.next.call(null,seq22983__$1);
var G__22986 = cljs.core.first.call(null,seq22983__$2);
var seq22983__$3 = cljs.core.next.call(null,seq22983__$2);
var G__22987 = cljs.core.first.call(null,seq22983__$3);
var seq22983__$4 = cljs.core.next.call(null,seq22983__$3);
var G__22988 = cljs.core.first.call(null,seq22983__$4);
var seq22983__$5 = cljs.core.next.call(null,seq22983__$4);
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(G__22984,G__22985,G__22986,G__22987,G__22988,seq22983__$5);
});

taoensso.encore.non_throwing = (function taoensso$encore$non_throwing(pred){
return (function (x){
var vec__23000 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred.call(null,x)], null);
}catch (e23003){if((e23003 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23003;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23003;

}
}})();
var _QMARK_r = cljs.core.nth.call(null,vec__23000,(0),null);
var _ = cljs.core.nth.call(null,vec__23000,(1),null);
return _QMARK_r;
});
});
/**
 * Implementation detail.
 */
taoensso.encore.hpred = (function taoensso$encore$hpred(pred_form){
if(!(cljs.core.vector_QMARK_.call(null,pred_form))){
return pred_form;
} else {
var vec__23011 = pred_form;
var seq__23012 = cljs.core.seq.call(null,vec__23011);
var first__23013 = cljs.core.first.call(null,seq__23012);
var seq__23012__$1 = cljs.core.next.call(null,seq__23012);
var type = first__23013;
var first__23013__$1 = cljs.core.first.call(null,seq__23012__$1);
var seq__23012__$2 = cljs.core.next.call(null,seq__23012__$1);
var p1 = first__23013__$1;
var first__23013__$2 = cljs.core.first.call(null,seq__23012__$2);
var seq__23012__$3 = cljs.core.next.call(null,seq__23012__$2);
var p2 = first__23013__$2;
var more = seq__23012__$3;
var G__23014 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23014) {
case "el":
return ((function (G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more))

break;
case "not=":
return ((function (G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more){
return (function (x){
return cljs.core.not_EQ_.call(null,p1,x);
});
;})(G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more))

break;
case "ks-nnil?":
return ((function (G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more){
return (function (x){
return taoensso.encore.ks_nnil_QMARK_.call(null,p1,x);
});
;})(G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more))

break;
case "ks<=":
return ((function (G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more){
return (function (x){
return taoensso.encore.ks_LT__EQ_.call(null,p1,x);
});
;})(G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more))

break;
case "or":
return ((function (G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more){
return (function (x){
var or__6577__auto__ = (cljs.core.truth_(p1)?taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p1)).call(null,x):null);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
var or__6577__auto____$1 = (cljs.core.truth_(p2)?taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p2)).call(null,x):null);
if(cljs.core.truth_(or__6577__auto____$1)){
return or__6577__auto____$1;
} else {
return cljs.core.some.call(null,((function (or__6577__auto____$1,or__6577__auto__,G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more){
return (function (p1__23005_SHARP_){
return taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p1__23005_SHARP_)).call(null,x);
});})(or__6577__auto____$1,or__6577__auto__,G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more))
,more);
}
}
});
;})(G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more))

break;
case "not":
return ((function (G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more){
return (function (x){
var and__6565__auto__ = ((cljs.core.not.call(null,p1))?true:cljs.core.not.call(null,taoensso$encore$hpred.call(null,p1).call(null,x)));
if(and__6565__auto__){
var and__6565__auto____$1 = ((cljs.core.not.call(null,p2))?true:cljs.core.not.call(null,taoensso$encore$hpred.call(null,p2).call(null,x)));
if(and__6565__auto____$1){
return cljs.core.every_QMARK_.call(null,((function (and__6565__auto____$1,and__6565__auto__,G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more){
return (function (p1__23004_SHARP_){
return cljs.core.not.call(null,taoensso$encore$hpred.call(null,p1__23004_SHARP_).call(null,x));
});})(and__6565__auto____$1,and__6565__auto__,G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more))
,more);
} else {
return and__6565__auto____$1;
}
} else {
return and__6565__auto__;
}
});
;})(G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more))

break;
case "ks=":
return ((function (G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more){
return (function (x){
return taoensso.encore.ks_EQ_.call(null,p1,x);
});
;})(G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more))

break;
case "and":
return ((function (G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more){
return (function (x){
var and__6565__auto__ = ((cljs.core.not.call(null,p1))?true:taoensso$encore$hpred.call(null,p1).call(null,x));
if(cljs.core.truth_(and__6565__auto__)){
var and__6565__auto____$1 = ((cljs.core.not.call(null,p2))?true:taoensso$encore$hpred.call(null,p2).call(null,x));
if(cljs.core.truth_(and__6565__auto____$1)){
return cljs.core.every_QMARK_.call(null,((function (and__6565__auto____$1,and__6565__auto__,G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more){
return (function (p1__23006_SHARP_){
return taoensso$encore$hpred.call(null,p1__23006_SHARP_).call(null,x);
});})(and__6565__auto____$1,and__6565__auto__,G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more))
,more);
} else {
return and__6565__auto____$1;
}
} else {
return and__6565__auto__;
}
});
;})(G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more))

break;
case "ks>=":
return ((function (G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more){
return (function (x){
return taoensso.encore.ks_GT__EQ_.call(null,p1,x);
});
;})(G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more))

break;
case "not-in":
return ((function (G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more))

break;
case "not-el":
return ((function (G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more))

break;
case "=":
return ((function (G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more){
return (function (x){
return cljs.core._EQ_.call(null,p1,x);
});
;})(G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more))

break;
case "in":
return ((function (G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__23014,vec__23011,seq__23012,first__23013,seq__23012__$1,type,first__23013__$1,seq__23012__$2,p1,first__23013__$2,seq__23012__$3,p2,more))

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
}
});
/**
 * Like `name` but fully qualified: includes namespace in string when present.
 */
taoensso.encore.fq_name = (function taoensso$encore$fq_name(x){
if(typeof x === 'string'){
return x;
} else {
var n = cljs.core.name.call(null,x);
var temp__4655__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var ns = temp__4655__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.fq_name.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23022 = arguments.length;
var i__7653__auto___23023 = (0);
while(true){
if((i__7653__auto___23023 < len__7652__auto___23022)){
args__7659__auto__.push((arguments[i__7653__auto___23023]));

var G__23024 = (i__7653__auto___23023 + (1));
i__7653__auto___23023 = G__23024;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__23018){
var vec__23019 = p__23018;
var no_slash_QMARK_ = cljs.core.nth.call(null,vec__23019,(0),null);
var parts = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.call(null,taoensso.encore.explode_keyword,cljs.core.filterv.call(null,cljs.core.identity,ks)));
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq23016){
var G__23017 = cljs.core.first.call(null,seq23016);
var seq23016__$1 = cljs.core.next.call(null,seq23016);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__23017,seq23016__$1);
});

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23032 = arguments.length;
var i__7653__auto___23033 = (0);
while(true){
if((i__7653__auto___23033 < len__7652__auto___23032)){
args__7659__auto__.push((arguments[i__7653__auto___23033]));

var G__23034 = (i__7653__auto___23033 + (1));
i__7653__auto___23033 = G__23034;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__23027){
var vec__23028 = p__23027;
var type = cljs.core.nth.call(null,vec__23028,(0),null);
var nplaces = cljs.core.nth.call(null,vec__23028,(1),null);
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__23031 = ((((function (){var or__6577__auto__ = type;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})() instanceof cljs.core.Keyword))?(function (){var or__6577__auto__ = type;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})().fqn:null);
switch (G__23031) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.not.call(null,modifier)){
return cljs.core.long$.call(null,rounded);
} else {
return (rounded / modifier);
}
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq23025){
var G__23026 = cljs.core.first.call(null,seq23025);
var seq23025__$1 = cljs.core.next.call(null,seq23025);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__23026,seq23025__$1);
});

taoensso.encore.round_STAR_ = taoensso.encore.round;
/**
 * Optimized common case.
 */
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});
/**
 * Optimized common case.
 */
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23044 = arguments.length;
var i__7653__auto___23045 = (0);
while(true){
if((i__7653__auto___23045 < len__7652__auto___23044)){
args__7659__auto__.push((arguments[i__7653__auto___23045]));

var G__23046 = (i__7653__auto___23045 + (1));
i__7653__auto___23045 = G__23046;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__23038){
var vec__23039 = p__23038;
var map__23042 = cljs.core.nth.call(null,vec__23039,(0),null);
var map__23042__$1 = ((((!((map__23042 == null)))?((((map__23042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23042):map__23042);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__23042__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__23042__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__23042__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__6908__auto__ = min_SINGLEQUOTE_;
var y__6909__auto__ = time;
return ((x__6908__auto__ > y__6909__auto__) ? x__6908__auto__ : y__6909__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__6915__auto__ = max_SINGLEQUOTE_;
var y__6916__auto__ = time__$1;
return ((x__6915__auto__ < y__6916__auto__) ? x__6915__auto__ : y__6916__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq23036){
var G__23037 = cljs.core.first.call(null,seq23036);
var seq23036__$1 = cljs.core.next.call(null,seq23036);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__23037,seq23036__$1);
});

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
/**
 * Useful for testing.
 */
taoensso.encore.now_udt_mock_fn = (function taoensso$encore$now_udt_mock_fn(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23052 = arguments.length;
var i__7653__auto___23053 = (0);
while(true){
if((i__7653__auto___23053 < len__7652__auto___23052)){
args__7659__auto__.push((arguments[i__7653__auto___23053]));

var G__23054 = (i__7653__auto___23053 + (1));
i__7653__auto___23053 = G__23054;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic = (function (p__23048){
var vec__23049 = p__23048;
var mock_udts = cljs.core.nth.call(null,vec__23049,(0),null);
var mock_udts__$1 = (function (){var or__6577__auto__ = mock_udts;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return cljs.core.range.call(null);
}
})();
var idx = cljs.core.atom.call(null,(-1));
return ((function (mock_udts__$1,idx,vec__23049,mock_udts){
return (function (){
return cljs.core.nth.call(null,mock_udts__$1,cljs.core.swap_BANG_.call(null,idx,cljs.core.inc));
});
;})(mock_udts__$1,idx,vec__23049,mock_udts))
});

taoensso.encore.now_udt_mock_fn.cljs$lang$maxFixedArity = (0);

taoensso.encore.now_udt_mock_fn.cljs$lang$applyTo = (function (seq23047){
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23047));
});

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (secs * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,ms,(1000));
});
/**
 * Returns number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23068 = arguments.length;
var i__7653__auto___23069 = (0);
while(true){
if((i__7653__auto___23069 < len__7652__auto___23068)){
args__7659__auto__.push((arguments[i__7653__auto___23069]));

var G__23070 = (i__7653__auto___23069 + (1));
i__7653__auto___23069 = G__23070;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__23056){
var map__23057 = p__23056;
var map__23057__$1 = ((((!((map__23057 == null)))?((((map__23057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23057):map__23057);
var opts = map__23057__$1;
var years = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__23057,map__23057__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (hcond_in__23059){
var vec__23060 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hcond_in__23059], null);
}catch (e23066){if((e23066 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23066;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23066;

}
}})();
var x__22120__auto__ = cljs.core.nth.call(null,vec__23060,(0),null);
var _QMARK_x_err__22121__auto__ = cljs.core.nth.call(null,vec__23060,(1),null);
var have_x_QMARK___22122__auto__ = (_QMARK_x_err__22121__auto__ == null);
var vec__23063 = ((have_x_QMARK___22122__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null)).call(null,x__22120__auto__)], null);
}catch (e23067){if((e23067 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23067;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23067;

}
}})():null);
var pass_QMARK___22123__auto__ = cljs.core.nth.call(null,vec__23063,(0),null);
var _QMARK_pred_err__22124__auto__ = cljs.core.nth.call(null,vec__23063,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto__)){
return x__22120__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hcond-in__23059","hcond-in__23059",744870221,null)),x__7411__auto__);
})(),((have_x_QMARK___22122__auto__)?x__22120__auto__:_QMARK_x_err__22121__auto__),_QMARK_pred_err__22124__auto__);
}
});})(map__23057,map__23057__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error("Assert failed: (have #{:msecs :secs :months :days :mins :hours :years :ms :weeks} :in (keys opts))"));
}

return taoensso.encore.round.call(null,(((((((((cljs.core.truth_(years)?(((((years * (1000)) * (60)) * (60)) * (24)) * (365)):(0)) + (cljs.core.truth_(months)?cljs.core.long$.call(null,(((((months * (1000)) * (60)) * (60)) * (24)) * 29.53)):(0))) + (cljs.core.truth_(weeks)?(((((weeks * (1000)) * (60)) * (60)) * (24)) * (7)):(0))) + (cljs.core.truth_(days)?((((days * (1000)) * (60)) * (60)) * (24)):(0))) + (cljs.core.truth_(hours)?(((hours * (1000)) * (60)) * (60)):(0))) + (cljs.core.truth_(mins)?((mins * (1000)) * (60)):(0))) + (cljs.core.truth_(secs)?(secs * (1000)):(0))) + (cljs.core.truth_(msecs)?msecs:(0))) + (cljs.core.truth_(ms)?ms:(0))));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq23055){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23055));
});

taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__6915__auto__ = signed_idx;
var y__6916__auto__ = max_idx;
return ((x__6915__auto__ < y__6916__auto__) ? x__6915__auto__ : y__6916__auto__);
} else {
var x__6908__auto__ = (0);
var y__6909__auto__ = (signed_idx + max_idx);
return ((x__6908__auto__ > y__6909__auto__) ? x__6908__auto__ : y__6909__auto__);
}
});
/**
 * Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
 *   input (str, vec, etc.) with support for:
 *  * Clamping of indexes beyond limits.
 *  * Max-length -> end-index.
 *  * -ive indexes (as +ive indexes but work from back of input):
 *    (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
 *      h    e    l    l    o   ; 5 count
 *    (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes
 */
taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23089 = arguments.length;
var i__7653__auto___23090 = (0);
while(true){
if((i__7653__auto___23090 < len__7652__auto___23089)){
args__7659__auto__.push((arguments[i__7653__auto___23090]));

var G__23091 = (i__7653__auto___23090 + (1));
i__7653__auto___23090 = G__23091;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((2) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7660__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__23078){
var map__23079 = p__23078;
var map__23079__$1 = ((((!((map__23079 == null)))?((((map__23079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23079):map__23079);
var max_len = cljs.core.get.call(null,map__23079__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__23079__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
if((function (){
var vec__23081_23092 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_len], null);
}catch (e23087){if((e23087 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23087;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23087;

}
}})();
var x__22120__auto___23093 = cljs.core.nth.call(null,vec__23081_23092,(0),null);
var _QMARK_x_err__22121__auto___23094 = cljs.core.nth.call(null,vec__23081_23092,(1),null);
var have_x_QMARK___22122__auto___23095 = (_QMARK_x_err__22121__auto___23094 == null);
var vec__23084_23096 = ((have_x_QMARK___22122__auto___23095)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,x__22120__auto___23093)], null);
}catch (e23088){if((e23088 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23088;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23088;

}
}})():null);
var pass_QMARK___22123__auto___23097 = cljs.core.nth.call(null,vec__23084_23096,(0),null);
var _QMARK_pred_err__22124__auto___23098 = cljs.core.nth.call(null,vec__23084_23096,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto___23097)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"max-len","max-len",1621685511,null)),x__7411__auto__);
})(),((have_x_QMARK___22122__auto___23095)?x__22120__auto___23093:_QMARK_x_err__22121__auto___23094),_QMARK_pred_err__22124__auto___23098);
}

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? [:or nil? nneg-int?] max-len)"));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = (cljs.core.truth_(max_len)?(function (){var n1__22182__auto__ = (start_idx_STAR_ + max_len);
var n2__22183__auto__ = xlen;
if((n1__22182__auto__ > n2__22183__auto__)){
return n2__22183__auto__;
} else {
return n1__22182__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen
));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq23075){
var G__23076 = cljs.core.first.call(null,seq23075);
var seq23075__$1 = cljs.core.next.call(null,seq23075);
var G__23077 = cljs.core.first.call(null,seq23075__$1);
var seq23075__$2 = cljs.core.next.call(null,seq23075__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__23076,G__23077,seq23075__$2);
});

/**
 * Like `subvec` but uses `sub-indexes`.
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23117 = arguments.length;
var i__7653__auto___23118 = (0);
while(true){
if((i__7653__auto___23118 < len__7652__auto___23117)){
args__7659__auto__.push((arguments[i__7653__auto___23118]));

var G__23119 = (i__7653__auto___23118 + (1));
i__7653__auto___23118 = G__23119;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((2) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7660__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__23102){
var vec__23103 = p__23102;
var _QMARK_max_len = cljs.core.nth.call(null,vec__23103,(0),null);
if((function (){
var vec__23106_23120 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}catch (e23112){if((e23112 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23112;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23112;

}
}})();
var x__22120__auto___23121 = cljs.core.nth.call(null,vec__23106_23120,(0),null);
var _QMARK_x_err__22121__auto___23122 = cljs.core.nth.call(null,vec__23106_23120,(1),null);
var have_x_QMARK___22122__auto___23123 = (_QMARK_x_err__22121__auto___23122 == null);
var vec__23109_23124 = ((have_x_QMARK___22122__auto___23123)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.vector_QMARK_).call(null,x__22120__auto___23121)], null);
}catch (e23113){if((e23113 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23113;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23113;

}
}})():null);
var pass_QMARK___22123__auto___23125 = cljs.core.nth.call(null,vec__23109_23124,(0),null);
var _QMARK_pred_err__22124__auto___23126 = cljs.core.nth.call(null,vec__23109_23124,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto___23125)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v","v",1661996586,null)),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null)),((have_x_QMARK___22122__auto___23123)?x__22120__auto___23121:_QMARK_x_err__22121__auto___23122),_QMARK_pred_err__22124__auto___23126);
}

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? vector? v)"));
}

var vec__23114 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__23114,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__23114,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq23099){
var G__23100 = cljs.core.first.call(null,seq23099);
var seq23099__$1 = cljs.core.next.call(null,seq23099);
var G__23101 = cljs.core.first.call(null,seq23099__$1);
var seq23099__$2 = cljs.core.next.call(null,seq23099__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23100,G__23101,seq23099__$2);
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7199__auto__,k__7200__auto__){
var self__ = this;
var this__7199__auto____$1 = this;
return cljs.core._lookup.call(null,this__7199__auto____$1,k__7200__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7201__auto__,k23128,else__7202__auto__){
var self__ = this;
var this__7201__auto____$1 = this;
var G__23130 = (((k23128 instanceof cljs.core.Keyword))?k23128.fqn:null);
switch (G__23130) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23128,else__7202__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7213__auto__,writer__7214__auto__,opts__7215__auto__){
var self__ = this;
var this__7213__auto____$1 = this;
var pr_pair__7216__auto__ = ((function (this__7213__auto____$1){
return (function (keyval__7217__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7214__auto__,cljs.core.pr_writer,""," ","",opts__7215__auto__,keyval__7217__auto__);
});})(this__7213__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7214__auto__,pr_pair__7216__auto__,"#taoensso.encore.Swapped{",", ","}",opts__7215__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23127){
var self__ = this;
var G__23127__$1 = this;
return (new cljs.core.RecordIter((0),G__23127__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7197__auto__){
var self__ = this;
var this__7197__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7193__auto__){
var self__ = this;
var this__7193__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7203__auto__){
var self__ = this;
var this__7203__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7194__auto__){
var self__ = this;
var this__7194__auto____$1 = this;
var h__7012__auto__ = self__.__hash;
if(!((h__7012__auto__ == null))){
return h__7012__auto__;
} else {
var h__7012__auto____$1 = cljs.core.hash_imap.call(null,this__7194__auto____$1);
self__.__hash = h__7012__auto____$1;

return h__7012__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7195__auto__,other__7196__auto__){
var self__ = this;
var this__7195__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6565__auto__ = other__7196__auto__;
if(cljs.core.truth_(and__6565__auto__)){
var and__6565__auto____$1 = (this__7195__auto____$1.constructor === other__7196__auto__.constructor);
if(and__6565__auto____$1){
return cljs.core.equiv_map.call(null,this__7195__auto____$1,other__7196__auto__);
} else {
return and__6565__auto____$1;
}
} else {
return and__6565__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7208__auto__,k__7209__auto__){
var self__ = this;
var this__7208__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__7209__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7208__auto____$1),self__.__meta),k__7209__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7209__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7206__auto__,k__7207__auto__,G__23127){
var self__ = this;
var this__7206__auto____$1 = this;
var pred__23131 = cljs.core.keyword_identical_QMARK_;
var expr__23132 = k__7207__auto__;
if(cljs.core.truth_(pred__23131.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__23132))){
return (new taoensso.encore.Swapped(G__23127,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23131.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__23132))){
return (new taoensso.encore.Swapped(self__.new_val,G__23127,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7207__auto__,G__23127),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7211__auto__){
var self__ = this;
var this__7211__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7198__auto__,G__23127){
var self__ = this;
var this__7198__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__23127,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7204__auto__,entry__7205__auto__){
var self__ = this;
var this__7204__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7205__auto__)){
return cljs.core._assoc.call(null,this__7204__auto____$1,cljs.core._nth.call(null,entry__7205__auto__,(0)),cljs.core._nth.call(null,entry__7205__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7204__auto____$1,entry__7205__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__7233__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__7233__auto__,writer__7234__auto__){
return cljs.core._write.call(null,writer__7234__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__23129){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__23129),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__23129),null,cljs.core.dissoc.call(null,G__23129,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped_STAR_ = (function taoensso$encore$swapped_STAR_(x){
if(cljs.core.truth_(taoensso.encore.swapped_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
/**
 * [<new-val> <return-val>]
 */
taoensso.encore.swapped_STAR__in = (function taoensso$encore$swapped_STAR__in(m,ks,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return taoensso.encore.swapped_STAR_.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__23138 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__23138,(0),null);
var return_val = cljs.core.nth.call(null,vec__23138,(1),null);
var new_val = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
});
/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops.
 */
taoensso.encore.replace_in_STAR_ = (function taoensso$encore$replace_in_STAR_(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (accum,_QMARK_op){
if(cljs.core.not.call(null,_QMARK_op)){
return accum;
} else {
var vec__23145 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__23145,(0),null);
var ks = cljs.core.nth.call(null,vec__23145,(1),null);
var valf = cljs.core.nth.call(null,vec__23145,(2),null);
var G__23148 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__23148) {
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,accum,ks,valf);
}

break;
case "swap":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,accum);
} else {
return cljs.core.nth.call(null,taoensso.encore.swapped_STAR__in.call(null,accum,ks,valf),(0));
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
 * Experimental. For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23152 = arguments.length;
var i__7653__auto___23153 = (0);
while(true){
if((i__7653__auto___23153 < len__7652__auto___23152)){
args__7659__auto__.push((arguments[i__7653__auto___23153]));

var G__23154 = (i__7653__auto___23153 + (1));
i__7653__auto___23153 = G__23154;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq23150){
var G__23151 = cljs.core.first.call(null,seq23150);
var seq23150__$1 = cljs.core.next.call(null,seq23150);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__23151,seq23150__$1);
});

/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args23155 = [];
var len__7652__auto___23176 = arguments.length;
var i__7653__auto___23177 = (0);
while(true){
if((i__7653__auto___23177 < len__7652__auto___23176)){
args23155.push((arguments[i__7653__auto___23177]));

var G__23178 = (i__7653__auto___23177 + (1));
i__7653__auto___23177 = G__23178;
continue;
} else {
}
break;
}

var G__23161 = args23155.length;
switch (G__23161) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args23155.slice((3)),(0),null));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7671__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__23162 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__23162,(0),null);
var return_val = cljs.core.nth.call(null,vec__23162,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
} else {
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__23165 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__23165,(0),null);
var return_val = cljs.core.nth.call(null,vec__23165,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if((function (){
var vec__23168_23180 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,more)], null);
}catch (e23174){if((e23174 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23174;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23174;

}
}})();
var x__22120__auto___23181 = cljs.core.nth.call(null,vec__23168_23180,(0),null);
var _QMARK_x_err__22121__auto___23182 = cljs.core.nth.call(null,vec__23168_23180,(1),null);
var have_x_QMARK___22122__auto___23183 = (_QMARK_x_err__22121__auto___23182 == null);
var vec__23171_23184 = ((have_x_QMARK___22122__auto___23183)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__22120__auto___23181)], null);
}catch (e23175){if((e23175 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23175;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23175;

}
}})():null);
var pass_QMARK___22123__auto___23185 = cljs.core.nth.call(null,vec__23171_23184,(0),null);
var _QMARK_pred_err__22124__auto___23186 = cljs.core.nth.call(null,vec__23171_23184,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto___23185)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,(function (){var x__7411__auto__ = cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto__);
})(),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___22122__auto___23183)?x__22120__auto___23181:_QMARK_x_err__22121__auto___23182),_QMARK_pred_err__22124__auto___23186);
}

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,pairs);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val], null);
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq23156){
var G__23157 = cljs.core.first.call(null,seq23156);
var seq23156__$1 = cljs.core.next.call(null,seq23156);
var G__23158 = cljs.core.first.call(null,seq23156__$1);
var seq23156__$2 = cljs.core.next.call(null,seq23156__$1);
var G__23159 = cljs.core.first.call(null,seq23156__$2);
var seq23156__$3 = cljs.core.next.call(null,seq23156__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23157,G__23158,G__23159,seq23156__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Is to `reset!` as `swap-in!` is to `swap!`.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args23187 = [];
var len__7652__auto___23202 = arguments.length;
var i__7653__auto___23203 = (0);
while(true){
if((i__7653__auto___23203 < len__7652__auto___23202)){
args23187.push((arguments[i__7653__auto___23203]));

var G__23204 = (i__7653__auto___23203 + (1));
i__7653__auto___23203 = G__23204;
continue;
} else {
}
break;
}

var G__23193 = args23187.length;
switch (G__23193) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args23187.slice((3)),(0),null));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7671__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if((function (){
var vec__23194_23206 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,more)], null);
}catch (e23200){if((e23200 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23200;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23200;

}
}})();
var x__22120__auto___23207 = cljs.core.nth.call(null,vec__23194_23206,(0),null);
var _QMARK_x_err__22121__auto___23208 = cljs.core.nth.call(null,vec__23194_23206,(1),null);
var have_x_QMARK___22122__auto___23209 = (_QMARK_x_err__22121__auto___23208 == null);
var vec__23197_23210 = ((have_x_QMARK___22122__auto___23209)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__22120__auto___23207)], null);
}catch (e23201){if((e23201 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23201;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23201;

}
}})():null);
var pass_QMARK___22123__auto___23211 = cljs.core.nth.call(null,vec__23197_23210,(0),null);
var _QMARK_pred_err__22124__auto___23212 = cljs.core.nth.call(null,vec__23197_23210,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto___23211)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,(function (){var x__7411__auto__ = cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto__);
})(),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___22122__auto___23209)?x__22120__auto___23207:_QMARK_x_err__22121__auto___23208),_QMARK_pred_err__22124__auto___23212);
}

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,pairs);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val__$1))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val__$1], null);
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq23188){
var G__23189 = cljs.core.first.call(null,seq23188);
var seq23188__$1 = cljs.core.next.call(null,seq23188);
var G__23190 = cljs.core.first.call(null,seq23188__$1);
var seq23188__$2 = cljs.core.next.call(null,seq23188__$1);
var G__23191 = cljs.core.first.call(null,seq23188__$2);
var seq23188__$3 = cljs.core.next.call(null,seq23188__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23189,G__23190,G__23191,seq23188__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23216 = arguments.length;
var i__7653__auto___23217 = (0);
while(true){
if((i__7653__auto___23217 < len__7652__auto___23216)){
args__7659__auto__.push((arguments[i__7653__auto___23217]));

var G__23218 = (i__7653__auto___23217 + (1));
i__7653__auto___23217 = G__23218;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((2) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((2)),(0),null)):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7660__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.apply.call(null,cljs.core.dissoc,m,dissoc_ks);
} else {
return cljs.core.apply.call(null,cljs.core.update_in,m,ks,cljs.core.dissoc,dissoc_ks);
}
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq23213){
var G__23214 = cljs.core.first.call(null,seq23213);
var seq23213__$1 = cljs.core.next.call(null,seq23213);
var G__23215 = cljs.core.first.call(null,seq23213__$1);
var seq23213__$2 = cljs.core.next.call(null,seq23213__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__23214,G__23215,seq23213__$2);
});

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23245 = arguments.length;
var i__7653__auto___23246 = (0);
while(true){
if((i__7653__auto___23246 < len__7652__auto___23245)){
args__7659__auto__.push((arguments[i__7653__auto___23246]));

var G__23247 = (i__7653__auto___23246 + (1));
i__7653__auto___23246 = G__23247;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if((function (){
var vec__23221_23248 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,kvs)], null);
}catch (e23227){if((e23227 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23227;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23227;

}
}})();
var x__22120__auto___23249 = cljs.core.nth.call(null,vec__23221_23248,(0),null);
var _QMARK_x_err__22121__auto___23250 = cljs.core.nth.call(null,vec__23221_23248,(1),null);
var have_x_QMARK___22122__auto___23251 = (_QMARK_x_err__22121__auto___23250 == null);
var vec__23224_23252 = ((have_x_QMARK___22122__auto___23251)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__22120__auto___23249)], null);
}catch (e23228){if((e23228 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23228;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23228;

}
}})():null);
var pass_QMARK___22123__auto___23253 = cljs.core.nth.call(null,vec__23224_23252,(0),null);
var _QMARK_pred_err__22124__auto___23254 = cljs.core.nth.call(null,vec__23224_23252,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto___23253)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,(function (){var x__7411__auto__ = cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto__);
})(),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___22122__auto___23251)?x__22120__auto___23249:_QMARK_x_err__22121__auto___23250),_QMARK_pred_err__22124__auto___23254);
}

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__6577__auto__ = m;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__7357__auto__ = (function taoensso$encore$iter__23229(s__23230){
return (new cljs.core.LazySeq(null,(function (){
var s__23230__$1 = s__23230;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23230__$1);
if(temp__4657__auto__){
var s__23230__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23230__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__23230__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__23232 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__23231 = (0);
while(true){
if((i__23231 < size__7356__auto__)){
var vec__23239 = cljs.core._nth.call(null,c__7355__auto__,i__23231);
var k = cljs.core.nth.call(null,vec__23239,(0),null);
var v = cljs.core.nth.call(null,vec__23239,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__23232,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23255 = (i__23231 + (1));
i__23231 = G__23255;
continue;
} else {
var G__23256 = (i__23231 + (1));
i__23231 = G__23256;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23232),taoensso$encore$iter__23229.call(null,cljs.core.chunk_rest.call(null,s__23230__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23232),null);
}
} else {
var vec__23242 = cljs.core.first.call(null,s__23230__$2);
var k = cljs.core.nth.call(null,vec__23242,(0),null);
var v = cljs.core.nth.call(null,vec__23242,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__23229.call(null,cljs.core.rest.call(null,s__23230__$2)));
} else {
var G__23257 = cljs.core.rest.call(null,s__23230__$2);
s__23230__$1 = G__23257;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7357__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq23219){
var G__23220 = cljs.core.first.call(null,seq23219);
var seq23219__$1 = cljs.core.next.call(null,seq23219);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__23220,seq23219__$1);
});

/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23284 = arguments.length;
var i__7653__auto___23285 = (0);
while(true){
if((i__7653__auto___23285 < len__7652__auto___23284)){
args__7659__auto__.push((arguments[i__7653__auto___23285]));

var G__23286 = (i__7653__auto___23285 + (1));
i__7653__auto___23285 = G__23286;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if((function (){
var vec__23260_23287 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,kvs)], null);
}catch (e23266){if((e23266 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23266;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23266;

}
}})();
var x__22120__auto___23288 = cljs.core.nth.call(null,vec__23260_23287,(0),null);
var _QMARK_x_err__22121__auto___23289 = cljs.core.nth.call(null,vec__23260_23287,(1),null);
var have_x_QMARK___22122__auto___23290 = (_QMARK_x_err__22121__auto___23289 == null);
var vec__23263_23291 = ((have_x_QMARK___22122__auto___23290)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__22120__auto___23288)], null);
}catch (e23267){if((e23267 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23267;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23267;

}
}})():null);
var pass_QMARK___22123__auto___23292 = cljs.core.nth.call(null,vec__23263_23291,(0),null);
var _QMARK_pred_err__22124__auto___23293 = cljs.core.nth.call(null,vec__23263_23291,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto___23292)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,(function (){var x__7411__auto__ = cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto__);
})(),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___22122__auto___23290)?x__22120__auto___23288:_QMARK_x_err__22121__auto___23289),_QMARK_pred_err__22124__auto___23293);
}

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__6577__auto__ = m;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__7357__auto__ = (function taoensso$encore$iter__23268(s__23269){
return (new cljs.core.LazySeq(null,(function (){
var s__23269__$1 = s__23269;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23269__$1);
if(temp__4657__auto__){
var s__23269__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23269__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__23269__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__23271 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__23270 = (0);
while(true){
if((i__23270 < size__7356__auto__)){
var vec__23278 = cljs.core._nth.call(null,c__7355__auto__,i__23270);
var k = cljs.core.nth.call(null,vec__23278,(0),null);
var v = cljs.core.nth.call(null,vec__23278,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__23271,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23294 = (i__23270 + (1));
i__23270 = G__23294;
continue;
} else {
var G__23295 = (i__23270 + (1));
i__23270 = G__23295;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23271),taoensso$encore$iter__23268.call(null,cljs.core.chunk_rest.call(null,s__23269__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23271),null);
}
} else {
var vec__23281 = cljs.core.first.call(null,s__23269__$2);
var k = cljs.core.nth.call(null,vec__23281,(0),null);
var v = cljs.core.nth.call(null,vec__23281,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__23268.call(null,cljs.core.rest.call(null,s__23269__$2)));
} else {
var G__23296 = cljs.core.rest.call(null,s__23269__$2);
s__23269__$1 = G__23296;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7357__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq23258){
var G__23259 = cljs.core.first.call(null,seq23258);
var seq23258__$1 = cljs.core.next.call(null,seq23258);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__23259,seq23258__$1);
});

taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args23297 = [];
var len__7652__auto___23300 = arguments.length;
var i__7653__auto___23301 = (0);
while(true){
if((i__7653__auto___23301 < len__7652__auto___23300)){
args23297.push((arguments[i__7653__auto___23301]));

var G__23302 = (i__7653__auto___23301 + (1));
i__7653__auto___23301 = G__23302;
continue;
} else {
}
break;
}

var G__23299 = args23297.length;
switch (G__23299) {
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23297.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23305 = arguments.length;
var i__7653__auto___23306 = (0);
while(true){
if((i__7653__auto___23306 < len__7652__auto___23305)){
args__7659__auto__.push((arguments[i__7653__auto___23306]));

var G__23307 = (i__7653__auto___23306 + (1));
i__7653__auto___23306 = G__23307;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq23304){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23304));
});

/**
 * (seq     {:a :A}) => ([:a :A])
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but assumes last arg is a map whose elements should be applied
 *   to `f` as an unpaired seq:
 *  (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
 *    where fn will receive args as: `(1 :y 2 :z 3)`.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23310 = arguments.length;
var i__7653__auto___23311 = (0);
while(true){
if((i__7653__auto___23311 < len__7652__auto___23310)){
args__7659__auto__.push((arguments[i__7653__auto___23311]));

var G__23312 = (i__7653__auto___23311 + (1));
i__7653__auto___23311 = G__23312;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq23308){
var G__23309 = cljs.core.first.call(null,seq23308);
var seq23308__$1 = cljs.core.next.call(null,seq23308);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__23309,seq23308__$1);
});

/**
 * Workaround for Clojure versions [1.4, 1.5) that blow up on `reduce-kv`s
 *   against a nil coll, Ref. http://dev.clojure.org/jira/browse/CLJ-1098.
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__6577__auto__ = x;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:(function (k,_){
return cljs.core.keyword.call(null,k);
}));
var vf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,vf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?vf:((function (kf__$1){
return (function (_,v){
return cljs.core.keyword.call(null,v);
});})(kf__$1))
);
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (kf__$1,vf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,(cljs.core.truth_(kf__$1)?kf__$1.call(null,k,v):k),(cljs.core.truth_(vf__$1)?vf__$1.call(null,k,v):v));
});})(kf__$1,vf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
return taoensso.encore.map_kvs.call(null,(function (k,_){
return f.call(null,k);
}),null,m);
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
return taoensso.encore.map_kvs.call(null,null,(function (_,v){
return f.call(null,v);
}),m);
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(predk,predv,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__6565__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__6565__auto__)){
return predv.call(null,v);
} else {
return and__6565__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
 * Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
 *   pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
 *   way that preservers :or semantics.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
/**
 * Cross between `hash-map` & `map-kvs`.
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23361 = arguments.length;
var i__7653__auto___23362 = (0);
while(true){
if((i__7653__auto___23362 < len__7652__auto___23361)){
args__7659__auto__.push((arguments[i__7653__auto___23362]));

var G__23363 = (i__7653__auto___23362 + (1));
i__7653__auto___23362 = G__23363;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__23315){
var vec__23316 = p__23315;
var kf = cljs.core.nth.call(null,vec__23316,(0),null);
var vf = cljs.core.nth.call(null,vec__23316,(1),null);
if((function (){
var vec__23319_23364 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kvs], null);
}catch (e23325){if((e23325 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23325;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23325;

}
}})();
var x__22120__auto___23365 = cljs.core.nth.call(null,vec__23319_23364,(0),null);
var _QMARK_x_err__22121__auto___23366 = cljs.core.nth.call(null,vec__23319_23364,(1),null);
var have_x_QMARK___22122__auto___23367 = (_QMARK_x_err__22121__auto___23366 == null);
var vec__23322_23368 = ((have_x_QMARK___22122__auto___23367)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.sequential_QMARK_], null)).call(null,x__22120__auto___23365)], null);
}catch (e23326){if((e23326 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23326;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23326;

}
}})():null);
var pass_QMARK___22123__auto___23369 = cljs.core.nth.call(null,vec__23322_23368,(0),null);
var _QMARK_pred_err__22124__auto___23370 = cljs.core.nth.call(null,vec__23322_23368,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto___23369)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)),x__7411__auto__);
})(),((have_x_QMARK___22122__auto___23367)?x__22120__auto___23365:_QMARK_x_err__22121__auto___23366),_QMARK_pred_err__22124__auto___23370);
}

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? [:or nil? sequential?] kvs)"));
}

if((function (){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var vec__23327 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kf], null);
}catch (e23333){if((e23333 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23333;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23333;

}
}})();
var x__22120__auto__ = cljs.core.nth.call(null,vec__23327,(0),null);
var _QMARK_x_err__22121__auto__ = cljs.core.nth.call(null,vec__23327,(1),null);
var have_x_QMARK___22122__auto__ = (_QMARK_x_err__22121__auto__ == null);
var vec__23330 = ((have_x_QMARK___22122__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null)).call(null,x__22120__auto__)], null);
}catch (e23334){if((e23334 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23334;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23334;

}
}})():null);
var pass_QMARK___22123__auto__ = cljs.core.nth.call(null,vec__23330,(0),null);
var _QMARK_pred_err__22124__auto__ = cljs.core.nth.call(null,vec__23330,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto__)){
return x__22120__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"kf","kf",-1046348180,null)),x__7411__auto__);
})(),((have_x_QMARK___22122__auto__)?x__22120__auto__:_QMARK_x_err__22121__auto__),_QMARK_pred_err__22124__auto__);
}
})(),(function (){var vec__23335 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vf], null);
}catch (e23341){if((e23341 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23341;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23341;

}
}})();
var x__22120__auto__ = cljs.core.nth.call(null,vec__23335,(0),null);
var _QMARK_x_err__22121__auto__ = cljs.core.nth.call(null,vec__23335,(1),null);
var have_x_QMARK___22122__auto__ = (_QMARK_x_err__22121__auto__ == null);
var vec__23338 = ((have_x_QMARK___22122__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null)).call(null,x__22120__auto__)], null);
}catch (e23342){if((e23342 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23342;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23342;

}
}})():null);
var pass_QMARK___22123__auto__ = cljs.core.nth.call(null,vec__23338,(0),null);
var _QMARK_pred_err__22124__auto__ = cljs.core.nth.call(null,vec__23338,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto__)){
return x__22120__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vf","vf",1319108258,null)),x__7411__auto__);
})(),((have_x_QMARK___22122__auto__)?x__22120__auto__:_QMARK_x_err__22121__auto__),_QMARK_pred_err__22124__auto__);
}
})()], null);

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? [:or nil? ifn?] kf vf)"));
}

var _PERCENT_ = ((cljs.core.empty_QMARK_.call(null,kvs))?cljs.core.PersistentArrayMap.EMPTY:(function (){var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:((function (vec__23316,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vec__23316,kf,vf))
);
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__23346 = kvs;
var vec__23347 = G__23346;
var k = cljs.core.nth.call(null,vec__23347,(0),null);
var v = cljs.core.nth.call(null,vec__23347,(1),null);
var s = vec__23347;
var m__$1 = m;
var G__23346__$1 = G__23346;
while(true){
var m__$2 = m__$1;
var vec__23350 = G__23346__$1;
var k__$1 = cljs.core.nth.call(null,vec__23350,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__23350,(1),null);
var s__$1 = vec__23350;
var k__$2 = ((cljs.core.not.call(null,kf__$1))?k__$1:kf__$1.call(null,k__$1,v__$1));
var v__$2 = ((cljs.core.not.call(null,vf))?v__$1:vf.call(null,k__$2,v__$1));
var new_m = cljs.core.assoc_BANG_.call(null,m__$2,k__$2,v__$2);
var temp__4655__auto__ = cljs.core.nnext.call(null,s__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
var G__23371 = new_m;
var G__23372 = n;
m__$1 = G__23371;
G__23346__$1 = G__23372;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,new_m);
}
break;
}
})());
if((function (){
var vec__23353_23373 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_PERCENT_], null);
}catch (e23359){if((e23359 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23359;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23359;

}
}})();
var x__22120__auto___23374 = cljs.core.nth.call(null,vec__23353_23373,(0),null);
var _QMARK_x_err__22121__auto___23375 = cljs.core.nth.call(null,vec__23353_23373,(1),null);
var have_x_QMARK___22122__auto___23376 = (_QMARK_x_err__22121__auto___23375 == null);
var vec__23356_23377 = ((have_x_QMARK___22122__auto___23376)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null)).call(null,x__22120__auto___23374)], null);
}catch (e23360){if((e23360 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23360;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23360;

}
}})():null);
var pass_QMARK___22123__auto___23378 = cljs.core.nth.call(null,vec__23356_23377,(0),null);
var _QMARK_pred_err__22124__auto___23379 = cljs.core.nth.call(null,vec__23356_23377,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto___23378)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),x__7411__auto__);
})(),((have_x_QMARK___22122__auto___23376)?x__22120__auto___23374:_QMARK_x_err__22121__auto___23375),_QMARK_pred_err__22124__auto___23379);
}

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? [:or nil? map?] %)"));
}

return _PERCENT_;
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq23313){
var G__23314 = cljs.core.first.call(null,seq23313);
var seq23313__$1 = cljs.core.next.call(null,seq23313);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__23314,seq23313__$1);
});

/**
 * Faster `zipmap` using transients.
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(!((ks__$1) && (vs__$1))){
return cljs.core.persistent_BANG_.call(null,m);
} else {
var G__23380 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__23381 = cljs.core.next.call(null,ks__$1);
var G__23382 = cljs.core.next.call(null,vs__$1);
m = G__23380;
ks__$1 = G__23381;
vs__$1 = G__23382;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args23383 = [];
var len__7652__auto___23389 = arguments.length;
var i__7653__auto___23390 = (0);
while(true){
if((i__7653__auto___23390 < len__7652__auto___23389)){
args23383.push((arguments[i__7653__auto___23390]));

var G__23391 = (i__7653__auto___23390 + (1));
i__7653__auto___23390 = G__23391;
continue;
} else {
}
break;
}

var G__23388 = args23383.length;
switch (G__23388) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args23383.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7671__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq23384){
var G__23385 = cljs.core.first.call(null,seq23384);
var seq23384__$1 = cljs.core.next.call(null,seq23384);
var G__23386 = cljs.core.first.call(null,seq23384__$1);
var seq23384__$2 = cljs.core.next.call(null,seq23384__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__23385,G__23386,seq23384__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args23393 = [];
var len__7652__auto___23399 = arguments.length;
var i__7653__auto___23400 = (0);
while(true){
if((i__7653__auto___23400 < len__7652__auto___23399)){
args23393.push((arguments[i__7653__auto___23400]));

var G__23401 = (i__7653__auto___23400 + (1));
i__7653__auto___23400 = G__23401;
continue;
} else {
}
break;
}

var G__23398 = args23393.length;
switch (G__23398) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args23393.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7671__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq23394){
var G__23395 = cljs.core.first.call(null,seq23394);
var seq23394__$1 = cljs.core.next.call(null,seq23394);
var G__23396 = cljs.core.first.call(null,seq23394__$1);
var seq23394__$2 = cljs.core.next.call(null,seq23394__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__23395,G__23396,seq23394__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.subvec_STAR_.call(null,coll,(0),n);
} else {
return cljs.core.vec.call(null,cljs.core.take.call(null,n,coll));
}
});
/**
 * Prefer `set` when order doesn't matter (much faster).
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args23403 = [];
var len__7652__auto___23414 = arguments.length;
var i__7653__auto___23415 = (0);
while(true){
if((i__7653__auto___23415 < len__7652__auto___23414)){
args23403.push((arguments[i__7653__auto___23415]));

var G__23416 = (i__7653__auto___23415 + (1));
i__7653__auto___23415 = G__23416;
continue;
} else {
}
break;
}

var G__23405 = args23403.length;
switch (G__23405) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23403.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__23406,in$){
var vec__23407 = p__23406;
var v = cljs.core.nth.call(null,vec__23407,(0),null);
var seen = cljs.core.nth.call(null,vec__23407,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,seen,in$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in$)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__23410,in$){
var vec__23411 = p__23410;
var v = cljs.core.nth.call(null,vec__23411,(0),null);
var seen = cljs.core.nth.call(null,vec__23411,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;

/**
 * Like `sort-by` for distinct. Based on clojure.core/distinct.
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__23430,seen__$1){
while(true){
var vec__23431 = p__23430;
var v = cljs.core.nth.call(null,vec__23431,(0),null);
var xs__$1 = vec__23431;
var temp__4657__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4657__auto__){
var s = temp__4657__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__23434 = cljs.core.rest.call(null,s);
var G__23435 = seen__$1;
p__23430 = G__23434;
seen__$1 = G__23435;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});

/**
 * distinctv` transducer.
 */
taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args23440 = [];
var len__7652__auto___23443 = arguments.length;
var i__7653__auto___23444 = (0);
while(true){
if((i__7653__auto___23444 < len__7652__auto___23443)){
args23440.push((arguments[i__7653__auto___23444]));

var G__23445 = (i__7653__auto___23444 + (1));
i__7653__auto___23444 = G__23445;
continue;
} else {
}
break;
}

var G__23442 = args23440.length;
switch (G__23442) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23440.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (rf){
var seen_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (seen_){
return (function() {
var G__23447 = null;
var G__23447__0 = (function (){
return rf.call(null);
});
var G__23447__1 = (function (acc){
return rf.call(null,acc);
});
var G__23447__2 = (function (acc,input){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),input)){
return acc;
} else {
cljs.core.swap_BANG_.call(null,seen_,cljs.core.conj,input);

return rf.call(null,acc,input);
}
});
G__23447 = function(acc,input){
switch(arguments.length){
case 0:
return G__23447__0.call(this);
case 1:
return G__23447__1.call(this,acc);
case 2:
return G__23447__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23447.cljs$core$IFn$_invoke$arity$0 = G__23447__0;
G__23447.cljs$core$IFn$_invoke$arity$1 = G__23447__1;
G__23447.cljs$core$IFn$_invoke$arity$2 = G__23447__2;
return G__23447;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (seen_){
return (function() {
var G__23448 = null;
var G__23448__0 = (function (){
return rf.call(null);
});
var G__23448__1 = (function (acc){
return rf.call(null,acc);
});
var G__23448__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core.swap_BANG_.call(null,seen_,cljs.core.conj,k);

return rf.call(null,acc,input);
}
});
G__23448 = function(acc,input){
switch(arguments.length){
case 0:
return G__23448__0.call(this);
case 1:
return G__23448__1.call(this,acc);
case 2:
return G__23448__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23448.cljs$core$IFn$_invoke$arity$0 = G__23448__0;
G__23448.cljs$core$IFn$_invoke$arity$1 = G__23448__1;
G__23448.cljs$core$IFn$_invoke$arity$2 = G__23448__2;
return G__23448;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
return cljs.core.sequence.call(null,taoensso.encore.xdistinct.call(null,keyfn),coll);
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 2;

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23451 = arguments.length;
var i__7653__auto___23452 = (0);
while(true){
if((i__7653__auto___23452 < len__7652__auto___23451)){
args__7659__auto__.push((arguments[i__7653__auto___23452]));

var G__23453 = (i__7653__auto___23452 + (1));
i__7653__auto___23452 = G__23453;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.key.call(null,e);
var rv = cljs.core.val.call(null,e);
if(!(cljs.core.contains_QMARK_.call(null,m,k))){
return cljs.core.assoc.call(null,m,k,rv);
} else {
var lv = cljs.core.get.call(null,m,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,m,k,taoensso.encore.nested_merge_with.call(null,f,lv,rv));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,lv,rv));
}
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__6577__auto__ = m1;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq23449){
var G__23450 = cljs.core.first.call(null,seq23449);
var seq23449__$1 = cljs.core.next.call(null,seq23449);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__23450,seq23449__$1);
});

taoensso.encore.nested_merge = cljs.core.partial.call(null,taoensso.encore.nested_merge_with,(function (x,y){
if((cljs.core.map_QMARK_.call(null,x)) && ((y == null))){
return x;
} else {
return y;
}
}));
/**
 * Returns the 'greatest' element in coll in O(n) time.
 */
taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23462 = arguments.length;
var i__7653__auto___23463 = (0);
while(true){
if((i__7653__auto___23463 < len__7652__auto___23462)){
args__7659__auto__.push((arguments[i__7653__auto___23463]));

var G__23464 = (i__7653__auto___23463 + (1));
i__7653__auto___23463 = G__23464;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__23458){
var vec__23459 = p__23458;
var _QMARK_comparator = cljs.core.nth.call(null,vec__23459,(0),null);
var comparator = (function (){var or__6577__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__23459,_QMARK_comparator){
return (function (p1__23454_SHARP_,p2__23455_SHARP_){
if((comparator.call(null,p1__23454_SHARP_,p2__23455_SHARP_) > (0))){
return p2__23455_SHARP_;
} else {
return p1__23454_SHARP_;
}
});})(comparator,vec__23459,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq23456){
var G__23457 = cljs.core.first.call(null,seq23456);
var seq23456__$1 = cljs.core.next.call(null,seq23456);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__23457,seq23456__$1);
});

/**
 * Returns the 'least' element in coll in O(n) time.
 */
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23473 = arguments.length;
var i__7653__auto___23474 = (0);
while(true){
if((i__7653__auto___23474 < len__7652__auto___23473)){
args__7659__auto__.push((arguments[i__7653__auto___23474]));

var G__23475 = (i__7653__auto___23474 + (1));
i__7653__auto___23474 = G__23475;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__23469){
var vec__23470 = p__23469;
var _QMARK_comparator = cljs.core.nth.call(null,vec__23470,(0),null);
var comparator = (function (){var or__6577__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__23470,_QMARK_comparator){
return (function (p1__23465_SHARP_,p2__23466_SHARP_){
if((comparator.call(null,p1__23465_SHARP_,p2__23466_SHARP_) < (0))){
return p2__23466_SHARP_;
} else {
return p1__23465_SHARP_;
}
});})(comparator,vec__23470,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq23467){
var G__23468 = cljs.core.first.call(null,seq23467);
var seq23467__$1 = cljs.core.next.call(null,seq23467);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__23468,seq23467__$1);
});

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((coll instanceof clojure.lang.IEditableCollection)){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx >= n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__23476 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__23477 = (idx + (1));
v = G__23476;
idx = G__23477;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx >= n)){
return v;
} else {
var G__23478 = cljs.core.conj.call(null,v,f.call(null));
var G__23479 = (idx + (1));
v = G__23478;
idx = G__23479;
continue;
}
break;
}
}
});
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});
taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});
/**
 * Like `clojure.core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE.
 *  * Formats nil as "nil" rather than "null".
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23482 = arguments.length;
var i__7653__auto___23483 = (0);
while(true){
if((i__7653__auto___23483 < len__7652__auto___23482)){
args__7659__auto__.push((arguments[i__7653__auto___23483]));

var G__23484 = (i__7653__auto___23483 + (1));
i__7653__auto___23483 = G__23484;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var fmt__$1 = (function (){var or__6577__auto__ = fmt;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq23480){
var G__23481 = cljs.core.first.call(null,seq23480);
var seq23480__$1 = cljs.core.next.call(null,seq23480);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__23481,seq23480__$1);
});

/**
 * Gives a consistent, flexible, cross-platform substring API built on
 *   `sub-indexes`.
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23503 = arguments.length;
var i__7653__auto___23504 = (0);
while(true){
if((i__7653__auto___23504 < len__7652__auto___23503)){
args__7659__auto__.push((arguments[i__7653__auto___23504]));

var G__23505 = (i__7653__auto___23504 + (1));
i__7653__auto___23504 = G__23505;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((2) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7660__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__23488){
var vec__23489 = p__23488;
var _QMARK_max_len = cljs.core.nth.call(null,vec__23489,(0),null);
if((function (){
var vec__23492_23506 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
}catch (e23498){if((e23498 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23498;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23498;

}
}})();
var x__22120__auto___23507 = cljs.core.nth.call(null,vec__23492_23506,(0),null);
var _QMARK_x_err__22121__auto___23508 = cljs.core.nth.call(null,vec__23492_23506,(1),null);
var have_x_QMARK___22122__auto___23509 = (_QMARK_x_err__22121__auto___23508 == null);
var vec__23495_23510 = ((have_x_QMARK___22122__auto___23509)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.string_QMARK_).call(null,x__22120__auto___23507)], null);
}catch (e23499){if((e23499 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23499;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23499;

}
}})():null);
var pass_QMARK___22123__auto___23511 = cljs.core.nth.call(null,vec__23495_23510,(0),null);
var _QMARK_pred_err__22124__auto___23512 = cljs.core.nth.call(null,vec__23495_23510,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto___23511)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s","s",-948495851,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___22122__auto___23509)?x__22120__auto___23507:_QMARK_x_err__22121__auto___23508),_QMARK_pred_err__22124__auto___23512);
}

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? string? s)"));
}

var vec__23500 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__23500,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__23500,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq23485){
var G__23486 = cljs.core.first.call(null,seq23485);
var seq23485__$1 = cljs.core.next.call(null,seq23485);
var G__23487 = cljs.core.first.call(null,seq23485__$1);
var seq23485__$2 = cljs.core.next.call(null,seq23485__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__23486,G__23487,seq23485__$2);
});

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
/**
 * Like `clojure.string/join` but ensures no double separators.
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23515 = arguments.length;
var i__7653__auto___23516 = (0);
while(true){
if((i__7653__auto___23516 < len__7652__auto___23515)){
args__7659__auto__.push((arguments[i__7653__auto___23516]));

var G__23517 = (i__7653__auto___23516 + (1));
i__7653__auto___23516 = G__23517;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (separator,coll){
return cljs.core.reduce.call(null,(function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator))){
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq23513){
var G__23514 = cljs.core.first.call(null,seq23513);
var seq23513__$1 = cljs.core.next.call(null,seq23513);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__23514,seq23513__$1);
});

/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 *   interposition.
 */
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23519 = arguments.length;
var i__7653__auto___23520 = (0);
while(true){
if((i__7653__auto___23520 < len__7652__auto___23519)){
args__7659__auto__.push((arguments[i__7653__auto___23520]));

var G__23521 = (i__7653__auto___23520 + (1));
i__7653__auto___23520 = G__23521;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq23518){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23518));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args23522 = [];
var len__7652__auto___23525 = arguments.length;
var i__7653__auto___23526 = (0);
while(true){
if((i__7653__auto___23526 < len__7652__auto___23525)){
args23522.push((arguments[i__7653__auto___23526]));

var G__23527 = (i__7653__auto___23526 + (1));
i__7653__auto___23526 = G__23527;
continue;
} else {
}
break;
}

var G__23524 = args23522.length;
switch (G__23524) {
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23522.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var fs = (function (n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
})));
});
var g = ((function (fs){
return (function (){
return ((8) | ((3) & cljs.core.rand_int.call(null,(15)))).toString((16));
});})(fs))
;
var sb = (new goog.string.StringBuffer()).append(fs.call(null,(8)),"-",fs.call(null,(4)),"-4",fs.call(null,(3)),"-",g.call(null),fs.call(null,(3)),"-",fs.call(null,(12)));
return sb.toString();
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.substr.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
 * Swaps associative value at key and returns the new value.
 *   Specialized, fast `swap-in!` for use mostly by memoization utils.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(atom_,k,f){
while(true){
var old_m = cljs.core.deref.call(null,atom_);
var new_v = f.call(null,cljs.core.get.call(null,old_m,k));
var new_m = cljs.core.assoc.call(null,old_m,k,new_v);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,atom_,old_m,new_m))){
return new_v;
} else {
continue;
}
break;
}
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 *   and immediately applies memoized f to given arguments.
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23533 = arguments.length;
var i__7653__auto___23534 = (0);
while(true){
if((i__7653__auto___23534 < len__7652__auto___23533)){
args__7659__auto__.push((arguments[i__7653__auto___23534]));

var G__23535 = (i__7653__auto___23534 + (1));
i__7653__auto___23534 = G__23535;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((2) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7660__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.not.call(null,cache)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (p1__23529_SHARP_){
if(cljs.core.truth_(p1__23529_SHARP_)){
return p1__23529_SHARP_;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq23530){
var G__23531 = cljs.core.first.call(null,seq23530);
var seq23530__$1 = cljs.core.next.call(null,seq23530);
var G__23532 = cljs.core.first.call(null,seq23530__$1);
var seq23530__$2 = cljs.core.next.call(null,seq23530__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__23531,G__23532,seq23530__$2);
});

/**
 * Like `clojure.core/memoize` but:
 *  * Uses delays to prevent race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` option.
 *  * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 *  * Supports cache size limit & gc with `cache-size` option.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args23538 = [];
var len__7652__auto___23615 = arguments.length;
var i__7653__auto___23616 = (0);
while(true){
if((i__7653__auto___23616 < len__7652__auto___23615)){
args23538.push((arguments[i__7653__auto___23616]));

var G__23617 = (i__7653__auto___23616 + (1));
i__7653__auto___23616 = G__23617;
continue;
} else {
}
break;
}

var G__23540 = args23538.length;
switch (G__23540) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23538.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__23619__delegate = function (p__23541){
var vec__23542 = p__23541;
var seq__23543 = cljs.core.seq.call(null,vec__23542);
var first__23544 = cljs.core.first.call(null,seq__23543);
var seq__23543__$1 = cljs.core.next.call(null,seq__23543);
var arg1 = first__23544;
var argn = seq__23543__$1;
var args = vec__23542;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,vec__23542,seq__23543,first__23544,seq__23543__$1,arg1,argn,args,cache){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__6565__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__6565__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__6565__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (fresh_QMARK_,args__$1,vec__23542,seq__23543,first__23544,seq__23543__$1,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,vec__23542,seq__23543,first__23544,seq__23543__$1,arg1,argn,args,cache))
,null));
}
});})(fresh_QMARK_,args__$1,vec__23542,seq__23543,first__23544,seq__23543__$1,arg1,argn,args,cache))
));
}
};
var G__23619 = function (var_args){
var p__23541 = null;
if (arguments.length > 0) {
var G__23620__i = 0, G__23620__a = new Array(arguments.length -  0);
while (G__23620__i < G__23620__a.length) {G__23620__a[G__23620__i] = arguments[G__23620__i + 0]; ++G__23620__i;}
  p__23541 = new cljs.core.IndexedSeq(G__23620__a,0);
} 
return G__23619__delegate.call(this,p__23541);};
G__23619.cljs$lang$maxFixedArity = 0;
G__23619.cljs$lang$applyTo = (function (arglist__23621){
var p__23541 = cljs.core.seq(arglist__23621);
return G__23619__delegate(p__23541);
});
G__23619.cljs$core$IFn$_invoke$arity$variadic = G__23619__delegate;
return G__23619;
})()
;
;})(cache))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var vec__23545_23622 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttl_ms], null);
}catch (e23551){if((e23551 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23551;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23551;

}
}})();
var x__22120__auto___23623 = cljs.core.nth.call(null,vec__23545_23622,(0),null);
var _QMARK_x_err__22121__auto___23624 = cljs.core.nth.call(null,vec__23545_23622,(1),null);
var have_x_QMARK___22122__auto___23625 = (_QMARK_x_err__22121__auto___23624 == null);
var vec__23548_23626 = ((have_x_QMARK___22122__auto___23625)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null)).call(null,x__22120__auto___23623)], null);
}catch (e23552){if((e23552 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23552;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23552;

}
}})():null);
var pass_QMARK___22123__auto___23627 = cljs.core.nth.call(null,vec__23548_23626,(0),null);
var _QMARK_pred_err__22124__auto___23628 = cljs.core.nth.call(null,vec__23548_23626,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto___23627)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null)),x__7411__auto__);
})(),((have_x_QMARK___22122__auto___23625)?x__22120__auto___23623:_QMARK_x_err__22121__auto___23624),_QMARK_pred_err__22124__auto___23628);
}


var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__23629__delegate = function (p__23553){
var vec__23554 = p__23553;
var seq__23555 = cljs.core.seq.call(null,vec__23554);
var first__23556 = cljs.core.first.call(null,seq__23555);
var seq__23555__$1 = cljs.core.next.call(null,seq__23555);
var arg1 = first__23556;
var argn = seq__23555__$1;
var args = vec__23554;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.gc_now_QMARK_.call(null))){
var instant_23630 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,cache,((function (instant_23630,vec__23554,seq__23555,first__23556,seq__23555__$1,arg1,argn,args,cache){
return (function (m){
return cljs.core.reduce_kv.call(null,((function (instant_23630,vec__23554,seq__23555,first__23556,seq__23555__$1,arg1,argn,args,cache){
return (function (m_STAR_,k,p__23557){
var vec__23558 = p__23557;
var dv = cljs.core.nth.call(null,vec__23558,(0),null);
var udt = cljs.core.nth.call(null,vec__23558,(1),null);
var cv = vec__23558;
if(((instant_23630 - udt) > ttl_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,k,cv);
}
});})(instant_23630,vec__23554,seq__23555,first__23556,seq__23555__$1,arg1,argn,args,cache))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m));
});})(instant_23630,vec__23554,seq__23555,first__23556,seq__23555__$1,arg1,argn,args,cache))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__23561 = taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__23554,seq__23555,first__23556,seq__23555__$1,arg1,argn,args,cache){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__6565__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__6565__auto__)){
var and__6565__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__6565__auto____$1){
var vec__23567 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__23567,(0),null);
var udt = cljs.core.nth.call(null,vec__23567,(1),null);
return ((instant - udt) < ttl_ms);
} else {
return and__6565__auto____$1;
}
} else {
return and__6565__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__23554,seq__23555,first__23556,seq__23555__$1,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__23554,seq__23555,first__23556,seq__23555__$1,arg1,argn,args,cache))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__23554,seq__23555,first__23556,seq__23555__$1,arg1,argn,args,cache))
);
var dv = cljs.core.nth.call(null,vec__23561,(0),null);
return cljs.core.deref.call(null,dv);
}
};
var G__23629 = function (var_args){
var p__23553 = null;
if (arguments.length > 0) {
var G__23631__i = 0, G__23631__a = new Array(arguments.length -  0);
while (G__23631__i < G__23631__a.length) {G__23631__a[G__23631__i] = arguments[G__23631__i + 0]; ++G__23631__i;}
  p__23553 = new cljs.core.IndexedSeq(G__23631__a,0);
} 
return G__23629__delegate.call(this,p__23553);};
G__23629.cljs$lang$maxFixedArity = 0;
G__23629.cljs$lang$applyTo = (function (arglist__23632){
var p__23553 = cljs.core.seq(arglist__23632);
return G__23629__delegate(p__23553);
});
G__23629.cljs$core$IFn$_invoke$arity$variadic = G__23629__delegate;
return G__23629;
})()
;
;})(cache))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var vec__23570_23633 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttl_ms], null);
}catch (e23576){if((e23576 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23576;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23576;

}
}})();
var x__22120__auto___23634 = cljs.core.nth.call(null,vec__23570_23633,(0),null);
var _QMARK_x_err__22121__auto___23635 = cljs.core.nth.call(null,vec__23570_23633,(1),null);
var have_x_QMARK___22122__auto___23636 = (_QMARK_x_err__22121__auto___23635 == null);
var vec__23573_23637 = ((have_x_QMARK___22122__auto___23636)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null)).call(null,x__22120__auto___23634)], null);
}catch (e23577){if((e23577 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23577;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23577;

}
}})():null);
var pass_QMARK___22123__auto___23638 = cljs.core.nth.call(null,vec__23573_23637,(0),null);
var _QMARK_pred_err__22124__auto___23639 = cljs.core.nth.call(null,vec__23573_23637,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto___23638)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null)),x__7411__auto__);
})(),((have_x_QMARK___22122__auto___23636)?x__22120__auto___23634:_QMARK_x_err__22121__auto___23635),_QMARK_pred_err__22124__auto___23639);
}


var vec__23578_23640 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cache_size], null);
}catch (e23584){if((e23584 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23584;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23584;

}
}})();
var x__22120__auto___23641 = cljs.core.nth.call(null,vec__23578_23640,(0),null);
var _QMARK_x_err__22121__auto___23642 = cljs.core.nth.call(null,vec__23578_23640,(1),null);
var have_x_QMARK___22122__auto___23643 = (_QMARK_x_err__22121__auto___23642 == null);
var vec__23581_23644 = ((have_x_QMARK___22122__auto___23643)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.pos_int_QMARK_).call(null,x__22120__auto___23641)], null);
}catch (e23585){if((e23585 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23585;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23585;

}
}})():null);
var pass_QMARK___22123__auto___23645 = cljs.core.nth.call(null,vec__23581_23644,(0),null);
var _QMARK_pred_err__22124__auto___23646 = cljs.core.nth.call(null,vec__23581_23644,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto___23645)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cache-size","cache-size",1049002054,null)),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)),((have_x_QMARK___22122__auto___23643)?x__22120__auto___23641:_QMARK_x_err__22121__auto___23642),_QMARK_pred_err__22124__auto___23646);
}


var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
return ((function (state){
return (function() { 
var G__23647__delegate = function (p__23586){
var vec__23587 = p__23586;
var seq__23588 = cljs.core.seq.call(null,vec__23587);
var first__23589 = cljs.core.first.call(null,seq__23588);
var seq__23588__$1 = cljs.core.next.call(null,seq__23588);
var arg1 = first__23589;
var argn = seq__23588__$1;
var args = vec__23587;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,argn);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.gc_now_QMARK_.call(null))){
var instant_23648 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_23648,vec__23587,seq__23588,first__23589,seq__23588__$1,arg1,argn,args,state){
return (function (m){
var m_STAR_ = cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976));
var m_STAR___$1 = ((cljs.core.not.call(null,ttl_ms))?m_STAR_:cljs.core.reduce_kv.call(null,((function (m_STAR_,instant_23648,vec__23587,seq__23588,first__23589,seq__23588__$1,arg1,argn,args,state){
return (function (m_STAR___$1,k,p__23590){
var vec__23591 = p__23590;
var dv = cljs.core.nth.call(null,vec__23591,(0),null);
var udt = cljs.core.nth.call(null,vec__23591,(1),null);
var _ = cljs.core.nth.call(null,vec__23591,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__23591,(3),null);
var cv = vec__23591;
if(((instant_23648 - udt) > ttl_ms)){
return m_STAR___$1;
} else {
return cljs.core.assoc.call(null,m_STAR___$1,k,cv);
}
});})(m_STAR_,instant_23648,vec__23587,seq__23588,first__23589,seq__23588__$1,arg1,argn,args,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m_STAR_)));
var n_to_prune = (cljs.core.count.call(null,m_STAR___$1) - cache_size);
var m_STAR___$2 = ((!((n_to_prune > (0))))?m_STAR___$1:cljs.core.apply.call(null,cljs.core.dissoc,m_STAR___$1,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_23648,vec__23587,seq__23588,first__23589,seq__23588__$1,arg1,argn,args,state){
return (function (p1__23537_SHARP_){
return cljs.core.nth.call(null,p1__23537_SHARP_,(1));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_23648,vec__23587,seq__23588,first__23589,seq__23588__$1,arg1,argn,args,state))
,cljs.core.take.call(null,n_to_prune,cljs.core.sort_by.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_23648,vec__23587,seq__23588,first__23589,seq__23588__$1,arg1,argn,args,state){
return (function (p1__23536_SHARP_){
return cljs.core.nth.call(null,p1__23536_SHARP_,(0));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_23648,vec__23587,seq__23588,first__23589,seq__23588__$1,arg1,argn,args,state))
,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_23648,vec__23587,seq__23588,first__23589,seq__23588__$1,arg1,argn,args,state){
return (function (k){
var vec__23594 = m_STAR___$1.call(null,k);
var _ = cljs.core.nth.call(null,vec__23594,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23594,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__23594,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__23594,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tick_lru + tick_lfu),k], null);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_23648,vec__23587,seq__23588,first__23589,seq__23588__$1,arg1,argn,args,state))
,cljs.core.keys.call(null,m_STAR___$1)))))));
return cljs.core.assoc.call(null,m_STAR___$2,new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(m));
});})(instant_23648,vec__23587,seq__23588,first__23589,seq__23588__$1,arg1,argn,args,state))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var _QMARK_instant = (cljs.core.truth_(ttl_ms)?taoensso.encore.now_udt.call(null):null);
var tick_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var vec__23597 = taoensso.encore.swap_val_BANG_.call(null,state,args__$1,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23587,seq__23588,first__23589,seq__23588__$1,arg1,argn,args,state){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__6565__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__6565__auto__)){
var and__6565__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__6565__auto____$1){
var or__6577__auto__ = (_QMARK_instant == null);
if(or__6577__auto__){
return or__6577__auto__;
} else {
var vec__23609 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__23609,(0),null);
var udt = cljs.core.nth.call(null,vec__23609,(1),null);
return ((_QMARK_instant - udt) < ttl_ms);
}
} else {
return and__6565__auto____$1;
}
} else {
return and__6565__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23587,seq__23588,first__23589,seq__23588__$1,arg1,argn,args,state){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23587,seq__23588,first__23589,seq__23588__$1,arg1,argn,args,state))
,null)),_QMARK_instant,tick_SINGLEQUOTE_,(1)], null);
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23587,seq__23588,first__23589,seq__23588__$1,arg1,argn,args,state))
);
var dv = cljs.core.nth.call(null,vec__23597,(0),null);
cljs.core.swap_BANG_.call(null,state,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23597,dv,vec__23587,seq__23588,first__23589,seq__23588__$1,arg1,argn,args,state){
return (function (m){
var temp__4657__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__23612 = temp__4657__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__23612,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__23612,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__23612,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__23612,(3),null);
var cv = vec__23612;
return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick_SINGLEQUOTE_ + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick_SINGLEQUOTE_,(tick_lfu + (1))], null)], true, false));
} else {
return null;
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23597,dv,vec__23587,seq__23588,first__23589,seq__23588__$1,arg1,argn,args,state))
);

return cljs.core.deref.call(null,dv);
}
};
var G__23647 = function (var_args){
var p__23586 = null;
if (arguments.length > 0) {
var G__23649__i = 0, G__23649__a = new Array(arguments.length -  0);
while (G__23649__i < G__23649__a.length) {G__23649__a[G__23649__i] = arguments[G__23649__i + 0]; ++G__23649__i;}
  p__23586 = new cljs.core.IndexedSeq(G__23649__a,0);
} 
return G__23647__delegate.call(this,p__23586);};
G__23647.cljs$lang$maxFixedArity = 0;
G__23647.cljs$lang$applyTo = (function (arglist__23650){
var p__23586 = cljs.core.seq(arglist__23650);
return G__23647__delegate(p__23586);
});
G__23647.cljs$core$IFn$_invoke$arity$variadic = G__23647__delegate;
return G__23647;
})()
;
;})(state))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * A particularly cheap+simple single-val memoize. Useful for Reactjs render op
 *   caching on mobile devices, etc.
 */
taoensso.encore.memoize_1 = (function taoensso$encore$memoize_1(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__23651__delegate = function (args){
var temp__4655__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(temp__4655__auto__)){
var dv_ = temp__4655__auto__;
return cljs.core.deref.call(null,dv_);
} else {
var cache = cljs.core.swap_BANG_.call(null,cache_,((function (temp__4655__auto__,cache_){
return (function (cache){
var temp__4655__auto____$1 = cljs.core.get.call(null,cache,args);
if(cljs.core.truth_(temp__4655__auto____$1)){
var dv_ = temp__4655__auto____$1;
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (temp__4655__auto____$1,temp__4655__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(temp__4655__auto____$1,temp__4655__auto__,cache_))
,null))], true, false);
}
});})(temp__4655__auto__,cache_))
);
var dv_ = cljs.core.get.call(null,cache,args);
return cljs.core.deref.call(null,dv_);
}
};
var G__23651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23652__i = 0, G__23652__a = new Array(arguments.length -  0);
while (G__23652__i < G__23652__a.length) {G__23652__a[G__23652__i] = arguments[G__23652__i + 0]; ++G__23652__i;}
  args = new cljs.core.IndexedSeq(G__23652__a,0);
} 
return G__23651__delegate.call(this,args);};
G__23651.cljs$lang$maxFixedArity = 0;
G__23651.cljs$lang$applyTo = (function (arglist__23653){
var args = cljs.core.seq(arglist__23653);
return G__23651__delegate(args);
});
G__23651.cljs$core$IFn$_invoke$arity$variadic = G__23651__delegate;
return G__23651;
})()
;
;})(cache_))
});
/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return cljs.core.constantly.call(null,null);
} else {
var vspecs = cljs.core.vec.call(null,specs);
var vstates_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var max_win_ms = cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.mapv.call(null,((function (vspecs,vstates_){
return (function (p__23741){
var vec__23742 = p__23741;
var _ = cljs.core.nth.call(null,vec__23742,(0),null);
var win_ms = cljs.core.nth.call(null,vec__23742,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__23742,(2),null);
var spec = vec__23742;
return win_ms;
});})(vspecs,vstates_))
,vspecs));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__23745){
var vec__23746 = p__23745;
var _ = cljs.core.nth.call(null,vec__23746,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23746,(1),null);
var id = cljs.core.nth.call(null,vec__23746,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error("Assert failed: (or (zero? nid-specs) (= nid-specs nspecs))"))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__23749){
var vec__23789 = p__23749;
var req_id = cljs.core.nth.call(null,vec__23789,(0),null);
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__6565__auto__ = req_id;
if(cljs.core.truth_(and__6565__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__6565__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (instant,vec__23789,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
var m__$1 = taoensso.encore.clj1098.call(null,m);
return cljs.core.reduce_kv.call(null,((function (m__$1,instant,vec__23789,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (m__$1,instant,vec__23789,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__23796){
var vec__23797 = p__23796;
var ___$1 = cljs.core.nth.call(null,vec__23797,(0),null);
var udt = cljs.core.nth.call(null,vec__23797,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__23797,(2),null);
var x__6908__auto__ = acc;
var y__6909__auto__ = udt;
return ((x__6908__auto__ > y__6909__auto__) ? x__6908__auto__ : y__6909__auto__);
});})(m__$1,instant,vec__23789,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(m__$1,instant,vec__23789,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m__$1,m__$1);
});})(instant,vec__23789,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (instant,vec__23789,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not.call(null,_QMARK_vstate)){
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
} else {
var vec__23800 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__23803 = in_vspecs;
var seq__23804 = cljs.core.seq.call(null,vec__23803);
var first__23805 = cljs.core.first.call(null,seq__23804);
var seq__23804__$1 = cljs.core.next.call(null,seq__23804);
var vec__23806 = first__23805;
var ncalls_limit = cljs.core.nth.call(null,vec__23806,(0),null);
var win_ms = cljs.core.nth.call(null,vec__23806,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__23806,(2),null);
var next_in_vspecs = seq__23804__$1;
var vec__23809 = in_vstate;
var seq__23810 = cljs.core.seq.call(null,vec__23809);
var first__23811 = cljs.core.first.call(null,seq__23810);
var seq__23810__$1 = cljs.core.next.call(null,seq__23810);
var vec__23812 = first__23811;
var ncalls = cljs.core.nth.call(null,vec__23812,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__23812,(1),null);
var next_in_vstate = seq__23810__$1;
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__6577__auto__ = (_QMARK_worst_limit_offence == null);
if(or__6577__auto__){
return or__6577__auto__;
} else {
var vec__23818 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__23818,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23818,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})());
if(cljs.core.not.call(null,next_in_vspecs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
} else {
var G__23828 = next_in_vspecs;
var G__23829 = next_in_vstate;
var G__23830 = new_out_vstate;
var G__23831 = new__QMARK_worst_limit_offence;
in_vspecs = G__23828;
in_vstate = G__23829;
out_vstate = G__23830;
_QMARK_worst_limit_offence = G__23831;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__23800,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__23800,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = ((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__23800,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__23789,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__23821){
var vec__23822 = p__23821;
var ncalls = cljs.core.nth.call(null,vec__23822,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__23822,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__23800,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__23789,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets));
var result = (function (){var temp__4657__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4657__auto__)){
var wlo = temp__4657__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__23825 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__23825,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23825,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
}
});})(instant,vec__23789,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__23749 = null;
if (arguments.length > 0) {
var G__23832__i = 0, G__23832__a = new Array(arguments.length -  0);
while (G__23832__i < G__23832__a.length) {G__23832__a[G__23832__i] = arguments[G__23832__i + 0]; ++G__23832__i;}
  p__23749 = new cljs.core.IndexedSeq(G__23832__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__23749);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__23833){
var p__23749 = cljs.core.seq(arglist__23833);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__23749);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__23834__delegate = function (args){
var temp__4655__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var backoff = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__23834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23835__i = 0, G__23835__a = new Array(arguments.length -  0);
while (G__23835__i < G__23835__a.length) {G__23835__a[G__23835__i] = arguments[G__23835__i + 0]; ++G__23835__i;}
  args = new cljs.core.IndexedSeq(G__23835__a,0);
} 
return G__23834__delegate.call(this,args);};
G__23834.cljs$lang$maxFixedArity = 0;
G__23834.cljs$lang$applyTo = (function (arglist__23836){
var args = cljs.core.seq(arglist__23836);
return G__23834__delegate(args);
});
G__23834.cljs$core$IFn$_invoke$arity$variadic = G__23834__delegate;
return G__23834;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4655__auto__ = (function (){var and__6565__auto__ = typeof window !== 'undefined';
if(and__6565__auto__){
return (window["performance"]);
} else {
return and__6565__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var perf = temp__4655__auto__;
var temp__4655__auto____$1 = (function (){var or__6577__auto__ = (perf["now"]);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
var or__6577__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__6577__auto____$1)){
return or__6577__auto____$1;
} else {
var or__6577__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__6577__auto____$2)){
return or__6577__auto____$2;
} else {
var or__6577__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__6577__auto____$3)){
return or__6577__auto____$3;
} else {
return (perf["webkitNow"]);
}
}
}
}
})();
if(cljs.core.truth_(temp__4655__auto____$1)){
var f = temp__4655__auto____$1;
return ((function (f,temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__4655__auto____$1,perf,temp__4655__auto__))
} else {
return ((function (temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4655__auto____$1,perf,temp__4655__auto__))
}
} else {
return ((function (temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4655__auto__))
}
})();
taoensso.encore.qb_min_times = (function taoensso$encore$qb_min_times(times){
return cljs.core.apply.call(null,cljs.core.min,times);
});
taoensso.encore.have_console_QMARK_ = typeof console !== 'undefined';

taoensso.encore.console_log = (function (){var temp__4655__auto__ = (function (){var and__6565__auto__ = taoensso.encore.have_console_QMARK_;
if(cljs.core.truth_(and__6565__auto__)){
return console.log;
} else {
return and__6565__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return ((function (f,temp__4655__auto__){
return (function (xs){
f.apply(console,cljs.core.into_array.call(null,xs));

return null;
});
;})(f,temp__4655__auto__))
} else {
return ((function (temp__4655__auto__){
return (function (xs){
return null;
});
;})(temp__4655__auto__))
}
})();

taoensso.encore.console_warn = (function (){var temp__4655__auto__ = (function (){var and__6565__auto__ = taoensso.encore.have_console_QMARK_;
if(cljs.core.truth_(and__6565__auto__)){
return console.warn;
} else {
return and__6565__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return ((function (f,temp__4655__auto__){
return (function (xs){
f.apply(console,cljs.core.into_array.call(null,xs));

return null;
});
;})(f,temp__4655__auto__))
} else {
return taoensso.encore.console_log;
}
})();

taoensso.encore.console_error = (function (){var temp__4655__auto__ = (function (){var and__6565__auto__ = taoensso.encore.have_console_QMARK_;
if(cljs.core.truth_(and__6565__auto__)){
return console.error;
} else {
return and__6565__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return ((function (f,temp__4655__auto__){
return (function (xs){
f.apply(console,cljs.core.into_array.call(null,xs));

return null;
});
;})(f,temp__4655__auto__))
} else {
return taoensso.encore.console_log;
}
})();

if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * Log only logging calls >= <this-level>. Change val with `set!`/`binding`.
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

if(typeof taoensso.encore._STAR_log_fn_STAR_ !== 'undefined'){
} else {
/**
 * Experimental. Logger (fn [{:keys [level ?fmt xs msg_]}])->nil with:
 *    :level ; e/o #{:trace :debug :info :warn :error :fatal :report}
 *    :?fmt  ; Pattern for message formatting (when formatting)
 *    :xs    ; Raw logging call arguments (excl. pattern for message formatting)
 *    :msg_  ; Delay-wrapped formatted message string
 *  Change val with `set!`/`binding`.
 */
taoensso.encore._STAR_log_fn_STAR_ = cljs.core.with_meta((function taoensso$encore$_STAR_log_fn_STAR_(p__23837){
var map__23841 = p__23837;
var map__23841__$1 = ((((!((map__23841 == null)))?((((map__23841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23841):map__23841);
var level = cljs.core.get.call(null,map__23841__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_fmt = cljs.core.get.call(null,map__23841__$1,new cljs.core.Keyword(null,"?fmt","?fmt",-1448350268));
var xs = cljs.core.get.call(null,map__23841__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
var msg_ = cljs.core.get.call(null,map__23841__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var G__23843_23881 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__23843_23881) {
case "warn":
taoensso.encore.console_warn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("WARN: "),cljs.core.str(cljs.core.deref.call(null,msg_))].join('')], null));

break;
case "error":
taoensso.encore.console_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("ERROR: "),cljs.core.str(cljs.core.deref.call(null,msg_))].join('')], null));

break;
case "fatal":
taoensso.encore.console_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("FATAL: "),cljs.core.str(cljs.core.deref.call(null,msg_))].join('')], null));

break;
default:
taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,msg_)], null));

}

return null;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),true], null));
}

taoensso.encore.log_level_sufficient_QMARK_ = (function (){var ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);
var scored_levels = cljs.core.zipmap.call(null,ordered_levels,cljs.core.next.call(null,cljs.core.range.call(null)));
var valid_level_QMARK_ = cljs.core.set.call(null,ordered_levels);
return ((function (ordered_levels,scored_levels,valid_level_QMARK_){
return (function (level){
var current_level = taoensso.encore._STAR_log_level_STAR_;
return (scored_levels.call(null,(function (){var vec__23844 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null);
}catch (e23850){if((e23850 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23850;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23850;

}
}})();
var x__22120__auto__ = cljs.core.nth.call(null,vec__23844,(0),null);
var _QMARK_x_err__22121__auto__ = cljs.core.nth.call(null,vec__23844,(1),null);
var have_x_QMARK___22122__auto__ = (_QMARK_x_err__22121__auto__ == null);
var vec__23847 = ((have_x_QMARK___22122__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,valid_level_QMARK_).call(null,x__22120__auto__)], null);
}catch (e23851){if((e23851 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23851;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23851;

}
}})():null);
var pass_QMARK___22123__auto__ = cljs.core.nth.call(null,vec__23847,(0),null);
var _QMARK_pred_err__22124__auto__ = cljs.core.nth.call(null,vec__23847,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto__)){
return x__22120__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1777,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"level","level",-1363938217,null)),new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null)),((have_x_QMARK___22122__auto__)?x__22120__auto__:_QMARK_x_err__22121__auto__),_QMARK_pred_err__22124__auto__);
}
})()) >= scored_levels.call(null,(function (){var vec__23852 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_level], null);
}catch (e23858){if((e23858 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23858;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23858;

}
}})();
var x__22120__auto__ = cljs.core.nth.call(null,vec__23852,(0),null);
var _QMARK_x_err__22121__auto__ = cljs.core.nth.call(null,vec__23852,(1),null);
var have_x_QMARK___22122__auto__ = (_QMARK_x_err__22121__auto__ == null);
var vec__23855 = ((have_x_QMARK___22122__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,valid_level_QMARK_).call(null,x__22120__auto__)], null);
}catch (e23859){if((e23859 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23859;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23859;

}
}})():null);
var pass_QMARK___22123__auto__ = cljs.core.nth.call(null,vec__23855,(0),null);
var _QMARK_pred_err__22124__auto__ = cljs.core.nth.call(null,vec__23855,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto__)){
return x__22120__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1778,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"current-level","current-level",1628605637,null)),new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null)),((have_x_QMARK___22122__auto__)?x__22120__auto__:_QMARK_x_err__22121__auto__),_QMARK_pred_err__22124__auto__);
}
})()));
});
;})(ordered_levels,scored_levels,valid_level_QMARK_))
})();


taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23883 = arguments.length;
var i__7653__auto___23884 = (0);
while(true){
if((i__7653__auto___23884 < len__7652__auto___23883)){
args__7659__auto__.push((arguments[i__7653__auto___23884]));

var G__23885 = (i__7653__auto___23884 + (1));
i__7653__auto___23884 = G__23885;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq23860){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23860));
});


taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23886 = arguments.length;
var i__7653__auto___23887 = (0);
while(true){
if((i__7653__auto___23887 < len__7652__auto___23886)){
args__7659__auto__.push((arguments[i__7653__auto___23887]));

var G__23888 = (i__7653__auto___23887 + (1));
i__7653__auto___23887 = G__23888;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
taoensso.encore._STAR_log_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),xs,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
return taoensso.encore.spaced_str.call(null,xs);
}),null))], null));

return null;
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq23861){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23861));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23889 = arguments.length;
var i__7653__auto___23890 = (0);
while(true){
if((i__7653__auto___23890 < len__7652__auto___23889)){
args__7659__auto__.push((arguments[i__7653__auto___23890]));

var G__23891 = (i__7653__auto___23890 + (1));
i__7653__auto___23890 = G__23891;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
taoensso.encore._STAR_log_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"?fmt","?fmt",-1448350268),fmt,new cljs.core.Keyword(null,"xs","xs",649443341),xs,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
return cljs.core.apply.call(null,taoensso.encore.format,fmt,xs);
}),null))], null));

return null;
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq23862){
var G__23863 = cljs.core.first.call(null,seq23862);
var seq23862__$1 = cljs.core.next.call(null,seq23862);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__23863,seq23862__$1);
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23892 = arguments.length;
var i__7653__auto___23893 = (0);
while(true){
if((i__7653__auto___23893 < len__7652__auto___23892)){
args__7659__auto__.push((arguments[i__7653__auto___23893]));

var G__23894 = (i__7653__auto___23893 + (1));
i__7653__auto___23893 = G__23894;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq23864){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23864));
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23895 = arguments.length;
var i__7653__auto___23896 = (0);
while(true){
if((i__7653__auto___23896 < len__7652__auto___23895)){
args__7659__auto__.push((arguments[i__7653__auto___23896]));

var G__23897 = (i__7653__auto___23896 + (1));
i__7653__auto___23896 = G__23897;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(cljs.core.apply.call(null,taoensso.encore.format,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq23865){
var G__23866 = cljs.core.first.call(null,seq23865);
var seq23865__$1 = cljs.core.next.call(null,seq23865);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__23866,seq23865__$1);
});


var logf_STAR__23898 = (function (level,fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_level_sufficient_QMARK_.call(null,level))){
taoensso.encore._STAR_log_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"?fmt","?fmt",-1448350268),fmt,new cljs.core.Keyword(null,"xs","xs",649443341),xs,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
return cljs.core.apply.call(null,taoensso.encore.format,fmt,xs);
}),null))], null));

return null;
} else {
return null;
}
});
taoensso.encore.tracef = ((function (logf_STAR__23898){
return (function taoensso$encore$tracef(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23899 = arguments.length;
var i__7653__auto___23900 = (0);
while(true){
if((i__7653__auto___23900 < len__7652__auto___23899)){
args__7659__auto__.push((arguments[i__7653__auto___23900]));

var G__23901 = (i__7653__auto___23900 + (1));
i__7653__auto___23900 = G__23901;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});})(logf_STAR__23898))
;

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__23898){
return (function (fmt,xs){
return logf_STAR__23898.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),fmt,xs);
});})(logf_STAR__23898))
;

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = ((function (logf_STAR__23898){
return (function (seq23867){
var G__23868 = cljs.core.first.call(null,seq23867);
var seq23867__$1 = cljs.core.next.call(null,seq23867);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__23868,seq23867__$1);
});})(logf_STAR__23898))
;


taoensso.encore.debugf = ((function (logf_STAR__23898){
return (function taoensso$encore$debugf(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23902 = arguments.length;
var i__7653__auto___23903 = (0);
while(true){
if((i__7653__auto___23903 < len__7652__auto___23902)){
args__7659__auto__.push((arguments[i__7653__auto___23903]));

var G__23904 = (i__7653__auto___23903 + (1));
i__7653__auto___23903 = G__23904;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});})(logf_STAR__23898))
;

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__23898){
return (function (fmt,xs){
return logf_STAR__23898.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),fmt,xs);
});})(logf_STAR__23898))
;

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = ((function (logf_STAR__23898){
return (function (seq23869){
var G__23870 = cljs.core.first.call(null,seq23869);
var seq23869__$1 = cljs.core.next.call(null,seq23869);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__23870,seq23869__$1);
});})(logf_STAR__23898))
;


taoensso.encore.infof = ((function (logf_STAR__23898){
return (function taoensso$encore$infof(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23905 = arguments.length;
var i__7653__auto___23906 = (0);
while(true){
if((i__7653__auto___23906 < len__7652__auto___23905)){
args__7659__auto__.push((arguments[i__7653__auto___23906]));

var G__23907 = (i__7653__auto___23906 + (1));
i__7653__auto___23906 = G__23907;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});})(logf_STAR__23898))
;

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__23898){
return (function (fmt,xs){
return logf_STAR__23898.call(null,new cljs.core.Keyword(null,"info","info",-317069002),fmt,xs);
});})(logf_STAR__23898))
;

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = ((function (logf_STAR__23898){
return (function (seq23871){
var G__23872 = cljs.core.first.call(null,seq23871);
var seq23871__$1 = cljs.core.next.call(null,seq23871);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__23872,seq23871__$1);
});})(logf_STAR__23898))
;


taoensso.encore.warnf = ((function (logf_STAR__23898){
return (function taoensso$encore$warnf(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23908 = arguments.length;
var i__7653__auto___23909 = (0);
while(true){
if((i__7653__auto___23909 < len__7652__auto___23908)){
args__7659__auto__.push((arguments[i__7653__auto___23909]));

var G__23910 = (i__7653__auto___23909 + (1));
i__7653__auto___23909 = G__23910;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});})(logf_STAR__23898))
;

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__23898){
return (function (fmt,xs){
return logf_STAR__23898.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),fmt,xs);
});})(logf_STAR__23898))
;

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = ((function (logf_STAR__23898){
return (function (seq23873){
var G__23874 = cljs.core.first.call(null,seq23873);
var seq23873__$1 = cljs.core.next.call(null,seq23873);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__23874,seq23873__$1);
});})(logf_STAR__23898))
;


taoensso.encore.errorf = ((function (logf_STAR__23898){
return (function taoensso$encore$errorf(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23911 = arguments.length;
var i__7653__auto___23912 = (0);
while(true){
if((i__7653__auto___23912 < len__7652__auto___23911)){
args__7659__auto__.push((arguments[i__7653__auto___23912]));

var G__23913 = (i__7653__auto___23912 + (1));
i__7653__auto___23912 = G__23913;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});})(logf_STAR__23898))
;

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__23898){
return (function (fmt,xs){
return logf_STAR__23898.call(null,new cljs.core.Keyword(null,"error","error",-978969032),fmt,xs);
});})(logf_STAR__23898))
;

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = ((function (logf_STAR__23898){
return (function (seq23875){
var G__23876 = cljs.core.first.call(null,seq23875);
var seq23875__$1 = cljs.core.next.call(null,seq23875);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__23876,seq23875__$1);
});})(logf_STAR__23898))
;


taoensso.encore.fatalf = ((function (logf_STAR__23898){
return (function taoensso$encore$fatalf(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23914 = arguments.length;
var i__7653__auto___23915 = (0);
while(true){
if((i__7653__auto___23915 < len__7652__auto___23914)){
args__7659__auto__.push((arguments[i__7653__auto___23915]));

var G__23916 = (i__7653__auto___23915 + (1));
i__7653__auto___23915 = G__23916;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});})(logf_STAR__23898))
;

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__23898){
return (function (fmt,xs){
return logf_STAR__23898.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888),fmt,xs);
});})(logf_STAR__23898))
;

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = ((function (logf_STAR__23898){
return (function (seq23877){
var G__23878 = cljs.core.first.call(null,seq23877);
var seq23877__$1 = cljs.core.next.call(null,seq23877);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__23878,seq23877__$1);
});})(logf_STAR__23898))
;


taoensso.encore.reportf = ((function (logf_STAR__23898){
return (function taoensso$encore$reportf(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23917 = arguments.length;
var i__7653__auto___23918 = (0);
while(true){
if((i__7653__auto___23918 < len__7652__auto___23917)){
args__7659__auto__.push((arguments[i__7653__auto___23918]));

var G__23919 = (i__7653__auto___23918 + (1));
i__7653__auto___23918 = G__23919;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});})(logf_STAR__23898))
;

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__23898){
return (function (fmt,xs){
return logf_STAR__23898.call(null,new cljs.core.Keyword(null,"report","report",1394055010),fmt,xs);
});})(logf_STAR__23898))
;

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = ((function (logf_STAR__23898){
return (function (seq23879){
var G__23880 = cljs.core.first.call(null,seq23879);
var seq23879__$1 = cljs.core.next.call(null,seq23879);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__23880,seq23879__$1);
});})(logf_STAR__23898))
;

/**
 * Returns browser window's current location. Forgeable.
 */
taoensso.encore.get_window_location = (function taoensso$encore$get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);
return loc;
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if((function (){
var vec__23929_23938 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [params], null);
}catch (e23935){if((e23935 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23935;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23935;

}
}})();
var x__22120__auto___23939 = cljs.core.nth.call(null,vec__23929_23938,(0),null);
var _QMARK_x_err__22121__auto___23940 = cljs.core.nth.call(null,vec__23929_23938,(1),null);
var have_x_QMARK___22122__auto___23941 = (_QMARK_x_err__22121__auto___23940 == null);
var vec__23932_23942 = ((have_x_QMARK___22122__auto___23941)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null)).call(null,x__22120__auto___23939)], null);
}catch (e23936){if((e23936 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23936;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23936;

}
}})():null);
var pass_QMARK___22123__auto___23943 = cljs.core.nth.call(null,vec__23932_23942,(0),null);
var _QMARK_pred_err__22124__auto___23944 = cljs.core.nth.call(null,vec__23932_23942,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto___23943)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"params","params",-1943919534,null)),x__7411__auto__);
})(),((have_x_QMARK___22122__auto___23941)?x__22120__auto___23939:_QMARK_x_err__22121__auto___23940),_QMARK_pred_err__22124__auto___23944);
}

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? [:or nil? map?] params)"));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
})());
var G__23937 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__23937) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000}
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__23948,callback){
var map__23976 = p__23948;
var map__23976__$1 = ((((!((map__23976 == null)))?((((map__23976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23976):map__23976);
var opts = map__23976__$1;
var method = cljs.core.get.call(null,map__23976__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__23976__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__23976__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__23976__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__23976__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var progress_fn = cljs.core.get.call(null,map__23976__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
if((function (){
var vec__23978_24003 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeout_ms], null);
}catch (e23984){if((e23984 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23984;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23984;

}
}})();
var x__22120__auto___24004 = cljs.core.nth.call(null,vec__23978_24003,(0),null);
var _QMARK_x_err__22121__auto___24005 = cljs.core.nth.call(null,vec__23978_24003,(1),null);
var have_x_QMARK___22122__auto___24006 = (_QMARK_x_err__22121__auto___24005 == null);
var vec__23981_24007 = ((have_x_QMARK___22122__auto___24006)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,x__22120__auto___24004)], null);
}catch (e23985){if((e23985 instanceof java.lang.Throwable)){
var t__22004__auto__ = e23985;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e23985;

}
}})():null);
var pass_QMARK___22123__auto___24008 = cljs.core.nth.call(null,vec__23981_24007,(0),null);
var _QMARK_pred_err__22124__auto___24009 = cljs.core.nth.call(null,vec__23981_24007,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto___24008)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null)),x__7411__auto__);
})(),((have_x_QMARK___22122__auto___24006)?x__22120__auto___24004:_QMARK_x_err__22121__auto___24005),_QMARK_pred_err__22124__auto___24009);
}

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? [:or nil? nneg-int?] timeout-ms)"));
}

var temp__4655__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var xhr = temp__4655__auto__;
try{var timeout_ms__$1 = (function (){var or__6577__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__23990 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__23990) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__23987 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__23987,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__23987,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__23991_24011 = xhr;
goog.events.listenOnce(G__23991_24011,goog.net.EventType.READY,((function (G__23991_24011,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__23987,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__23976,map__23976__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__23991_24011,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__23987,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__23976,map__23976__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn))
);

goog.events.listenOnce(G__23991_24011,goog.net.EventType.COMPLETE,((function (G__23991_24011,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__23987,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__23976,map__23976__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__23997 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__23991_24011,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__23987,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__23976,map__23976__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn){
return (function (p1__23947_SHARP_,p2__23946_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__23946_SHARP_,p1__23947_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__23991_24011,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__23987,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__23976,map__23976__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn))
;
var expr__23998 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__23997.call(null,"/edn",expr__23998))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__23997.call(null,"/json",expr__23998))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__23997.call(null,"/xml",expr__23998))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__23997.call(null,"/html",expr__23998))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__24001 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__24001) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return cljs.reader.read_string.call(null,xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e24000){var e = e24000;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__6577__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__23991_24011,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__23987,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__23976,map__23976__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn))
);


var temp__4657__auto___24013 = progress_fn;
if(cljs.core.truth_(temp__4657__auto___24013)){
var pf_24014 = temp__4657__auto___24013;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_24014,temp__4657__auto___24013,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__23987,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__23976,map__23976__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__6565__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__6565__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__6565__auto__;
}
})())?(loaded / total):null);
return pf_24014.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_24014,temp__4657__auto___24013,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__23987,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__23976,map__23976__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn))
);
} else {
}

var G__24002_24015 = xhr;
G__24002_24015.setTimeoutInterval((function (){var or__6577__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (0);
}
})());

G__24002_24015.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);


return xhr;
}catch (e23986){if((e23986 instanceof Error)){
var e = e23986;
taoensso.encore.errorf.call(null,"`ajax-lite` error: %s",e);

cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e23986;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1.
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1.
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__7659__auto__ = [];
var len__7652__auto___24022 = arguments.length;
var i__7653__auto___24023 = (0);
while(true){
if((i__7653__auto___24023 < len__7652__auto___24022)){
args__7659__auto__.push((arguments[i__7653__auto___24023]));

var G__24024 = (i__7653__auto___24023 + (1));
i__7653__auto___24023 = G__24024;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__24018){
var vec__24019 = p__24018;
var encoding = cljs.core.nth.call(null,vec__24019,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq24016){
var G__24017 = cljs.core.first.call(null,seq24016);
var seq24016__$1 = cljs.core.next.call(null,seq24016);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__24017,seq24016__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,v))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return null;
} else {
return join.call(null,(function (){var iter__7357__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__24041(s__24042){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__24042__$1 = s__24042;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24042__$1);
if(temp__4657__auto__){
var s__24042__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24042__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__24042__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__24044 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__24043 = (0);
while(true){
if((i__24043 < size__7356__auto__)){
var vec__24051 = cljs.core._nth.call(null,c__7355__auto__,i__24043);
var k = cljs.core.nth.call(null,vec__24051,(0),null);
var v = cljs.core.nth.call(null,vec__24051,(1),null);
cljs.core.chunk_append.call(null,b__24044,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__6577__auto__ = cljs.core.seq.call(null,v);
if(or__6577__auto__){
return or__6577__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__24057 = (i__24043 + (1));
i__24043 = G__24057;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24044),taoensso$encore$format_query_string_$_iter__24041.call(null,cljs.core.chunk_rest.call(null,s__24042__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24044),null);
}
} else {
var vec__24054 = cljs.core.first.call(null,s__24042__$2);
var k = cljs.core.nth.call(null,vec__24054,(0),null);
var v = cljs.core.nth.call(null,vec__24054,(1),null);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__6577__auto__ = cljs.core.seq.call(null,v);
if(or__6577__auto__){
return or__6577__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__24041.call(null,cljs.core.rest.call(null,s__24042__$2)));
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__7357__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var cur = temp__4655__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__7659__auto__ = [];
var len__7652__auto___24075 = arguments.length;
var i__7653__auto___24076 = (0);
while(true){
if((i__7653__auto___24076 < len__7652__auto___24075)){
args__7659__auto__.push((arguments[i__7653__auto___24076]));

var G__24077 = (i__7653__auto___24076 + (1));
i__7653__auto___24076 = G__24077;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__24060){
var vec__24061 = p__24060;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__24061,(0),null);
var encoding = cljs.core.nth.call(null,vec__24061,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__24061,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4655__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__24064 = temp__4655__auto__;
var k = cljs.core.nth.call(null,vec__24064,(0),null);
var v = cljs.core.nth.call(null,vec__24064,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__24061,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.not.call(null,keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map.call(null,m);
}
}
})());
if((function (){
var vec__24067_24078 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_PERCENT_], null);
}catch (e24073){if((e24073 instanceof java.lang.Throwable)){
var t__22004__auto__ = e24073;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e24073;

}
}})();
var x__22120__auto___24079 = cljs.core.nth.call(null,vec__24067_24078,(0),null);
var _QMARK_x_err__22121__auto___24080 = cljs.core.nth.call(null,vec__24067_24078,(1),null);
var have_x_QMARK___22122__auto___24081 = (_QMARK_x_err__22121__auto___24080 == null);
var vec__24070_24082 = ((have_x_QMARK___22122__auto___24081)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.map_QMARK_).call(null,x__22120__auto___24079)], null);
}catch (e24074){if((e24074 instanceof java.lang.Throwable)){
var t__22004__auto__ = e24074;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e24074;

}
}})():null);
var pass_QMARK___22123__auto___24083 = cljs.core.nth.call(null,vec__24070_24082,(0),null);
var _QMARK_pred_err__22124__auto___24084 = cljs.core.nth.call(null,vec__24070_24082,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto___24083)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),((have_x_QMARK___22122__auto___24081)?x__22120__auto___24079:_QMARK_x_err__22121__auto___24080),_QMARK_pred_err__22124__auto___24084);
}

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? map? %)"));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq24058){
var G__24059 = cljs.core.first.call(null,seq24058);
var seq24058__$1 = cljs.core.next.call(null,seq24058);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__24059,seq24058__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__24088 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__24088,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__24088,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.keywordize_map.call(null,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.keywordize_map.call(null,m));
return [cljs.core.str(url__$1),cljs.core.str((function (){var temp__4657__auto__ = taoensso.encore.format_query_string.call(null,qmap);
if(cljs.core.truth_(temp__4657__auto__)){
var qstr = temp__4657__auto__;
return [cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return null;
}
})())].join('');
});
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___24097 = arguments.length;
var i__7653__auto___24098 = (0);
while(true){
if((i__7653__auto___24098 < len__7652__auto___24097)){
args__7659__auto__.push((arguments[i__7653__auto___24098]));

var G__24099 = (i__7653__auto___24098 + (1));
i__7653__auto___24098 = G__24099;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__24093){
var vec__24094 = p__24093;
var nattempt = cljs.core.nth.call(null,vec__24094,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__6577__auto__ = nattempt;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq24091){
var G__24092 = cljs.core.first.call(null,seq24091);
var seq24091__$1 = cljs.core.next.call(null,seq24091);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24092,seq24091__$1);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});
taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});
taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;
taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;
taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
if(cljs.core.truth_(x)){
var vec__24108 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_bool.call(null,x)], null);
}catch (e24114){if((e24114 instanceof java.lang.Throwable)){
var t__22004__auto__ = e24114;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e24114;

}
}})();
var x__22120__auto__ = cljs.core.nth.call(null,vec__24108,(0),null);
var _QMARK_x_err__22121__auto__ = cljs.core.nth.call(null,vec__24108,(1),null);
var have_x_QMARK___22122__auto__ = (_QMARK_x_err__22121__auto__ == null);
var vec__24111 = ((have_x_QMARK___22122__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__22120__auto__)], null);
}catch (e24115){if((e24115 instanceof java.lang.Throwable)){
var t__22004__auto__ = e24115;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e24115;

}
}})():null);
var pass_QMARK___22123__auto__ = cljs.core.nth.call(null,vec__24111,(0),null);
var _QMARK_pred_err__22124__auto__ = cljs.core.nth.call(null,vec__24111,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto__)){
return x__22120__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",2137,cljs.core._conj.call(null,(function (){var x__7411__auto__ = cljs.core.list(new cljs.core.Symbol(null,"as-?bool","as-?bool",1645711161,null),new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto__);
})(),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___22122__auto__)?x__22120__auto__:_QMARK_x_err__22121__auto__),_QMARK_pred_err__22124__auto__);
}
} else {
return null;
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
if(cljs.core.truth_(x)){
var vec__24124 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_int.call(null,x)], null);
}catch (e24130){if((e24130 instanceof java.lang.Throwable)){
var t__22004__auto__ = e24130;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e24130;

}
}})();
var x__22120__auto__ = cljs.core.nth.call(null,vec__24124,(0),null);
var _QMARK_x_err__22121__auto__ = cljs.core.nth.call(null,vec__24124,(1),null);
var have_x_QMARK___22122__auto__ = (_QMARK_x_err__22121__auto__ == null);
var vec__24127 = ((have_x_QMARK___22122__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__22120__auto__)], null);
}catch (e24131){if((e24131 instanceof java.lang.Throwable)){
var t__22004__auto__ = e24131;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e24131;

}
}})():null);
var pass_QMARK___22123__auto__ = cljs.core.nth.call(null,vec__24127,(0),null);
var _QMARK_pred_err__22124__auto__ = cljs.core.nth.call(null,vec__24127,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto__)){
return x__22120__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",2138,cljs.core._conj.call(null,(function (){var x__7411__auto__ = cljs.core.list(new cljs.core.Symbol(null,"as-?int","as-?int",2107097360,null),new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto__);
})(),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___22122__auto__)?x__22120__auto__:_QMARK_x_err__22121__auto__),_QMARK_pred_err__22124__auto__);
}
} else {
return null;
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
if(cljs.core.truth_(x)){
var vec__24140 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_float.call(null,x)], null);
}catch (e24146){if((e24146 instanceof java.lang.Throwable)){
var t__22004__auto__ = e24146;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e24146;

}
}})();
var x__22120__auto__ = cljs.core.nth.call(null,vec__24140,(0),null);
var _QMARK_x_err__22121__auto__ = cljs.core.nth.call(null,vec__24140,(1),null);
var have_x_QMARK___22122__auto__ = (_QMARK_x_err__22121__auto__ == null);
var vec__24143 = ((have_x_QMARK___22122__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__22120__auto__)], null);
}catch (e24147){if((e24147 instanceof java.lang.Throwable)){
var t__22004__auto__ = e24147;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__22004__auto__], null);
} else {
throw e24147;

}
}})():null);
var pass_QMARK___22123__auto__ = cljs.core.nth.call(null,vec__24143,(0),null);
var _QMARK_pred_err__22124__auto__ = cljs.core.nth.call(null,vec__24143,(1),null);
if(cljs.core.truth_(pass_QMARK___22123__auto__)){
return x__22120__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",2139,cljs.core._conj.call(null,(function (){var x__7411__auto__ = cljs.core.list(new cljs.core.Symbol(null,"as-?float","as-?float",2124831706,null),new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto__);
})(),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___22122__auto__)?x__22120__auto__:_QMARK_x_err__22121__auto__),_QMARK_pred_err__22124__auto__);
}
} else {
return null;
}
});
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});
taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__24148__delegate = function (args){
var temp__4655__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var backoff_ms = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__24148 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24149__i = 0, G__24149__a = new Array(arguments.length -  0);
while (G__24149__i < G__24149__a.length) {G__24149__a[G__24149__i] = arguments[G__24149__i + 0]; ++G__24149__i;}
  args = new cljs.core.IndexedSeq(G__24149__a,0);
} 
return G__24148__delegate.call(this,args);};
G__24148.cljs$lang$maxFixedArity = 0;
G__24148.cljs$lang$applyTo = (function (arglist__24150){
var args = cljs.core.seq(arglist__24150);
return G__24148__delegate(args);
});
G__24148.cljs$core$IFn$_invoke$arity$variadic = G__24148__delegate;
return G__24148;
})()
;
;})(rl))
});

//# sourceMappingURL=encore.js.map