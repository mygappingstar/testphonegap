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
var vec__22805 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__22805,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__22805,(1),null);
var vec__22808 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__22808,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__22808,(1),null);
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
var args22813 = [];
var len__7652__auto___22819 = arguments.length;
var i__7653__auto___22820 = (0);
while(true){
if((i__7653__auto___22820 < len__7652__auto___22819)){
args22813.push((arguments[i__7653__auto___22820]));

var G__22821 = (i__7653__auto___22820 + (1));
i__7653__auto___22820 = G__22821;
continue;
} else {
}
break;
}

var G__22818 = args22813.length;
switch (G__22818) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args22813.slice((2)),(0),null));
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

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq22814){
var G__22815 = cljs.core.first.call(null,seq22814);
var seq22814__$1 = cljs.core.next.call(null,seq22814);
var G__22816 = cljs.core.first.call(null,seq22814__$1);
var seq22814__$2 = cljs.core.next.call(null,seq22814__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__22815,G__22816,seq22814__$2);
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
return cljs.core.every_QMARK_.call(null,(function (p1__22823_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__22823_SHARP_));
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
var len__7652__auto___22834 = arguments.length;
var i__7653__auto___22835 = (0);
while(true){
if((i__7653__auto___22835 < len__7652__auto___22834)){
args__7659__auto__.push((arguments[i__7653__auto___22835]));

var G__22836 = (i__7653__auto___22835 + (1));
i__7653__auto___22835 = G__22836;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((5) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((5)),(0),null)):null);
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7660__auto__);
});

taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic = (function (hard_QMARK_,ns_str,_QMARK_line,form,val,p__22830){
var vec__22831 = p__22830;
var _QMARK_err = cljs.core.nth.call(null,vec__22831,(0),null);
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

taoensso.encore.hthrow.cljs$lang$applyTo = (function (seq22824){
var G__22825 = cljs.core.first.call(null,seq22824);
var seq22824__$1 = cljs.core.next.call(null,seq22824);
var G__22826 = cljs.core.first.call(null,seq22824__$1);
var seq22824__$2 = cljs.core.next.call(null,seq22824__$1);
var G__22827 = cljs.core.first.call(null,seq22824__$2);
var seq22824__$3 = cljs.core.next.call(null,seq22824__$2);
var G__22828 = cljs.core.first.call(null,seq22824__$3);
var seq22824__$4 = cljs.core.next.call(null,seq22824__$3);
var G__22829 = cljs.core.first.call(null,seq22824__$4);
var seq22824__$5 = cljs.core.next.call(null,seq22824__$4);
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(G__22825,G__22826,G__22827,G__22828,G__22829,seq22824__$5);
});

taoensso.encore.non_throwing = (function taoensso$encore$non_throwing(pred){
return (function (x){
var vec__22841 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred.call(null,x)], null);
}catch (e22844){if((e22844 instanceof java.lang.Throwable)){
var t__21845__auto__ = e22844;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e22844;

}
}})();
var _QMARK_r = cljs.core.nth.call(null,vec__22841,(0),null);
var _ = cljs.core.nth.call(null,vec__22841,(1),null);
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
var vec__22852 = pred_form;
var seq__22853 = cljs.core.seq.call(null,vec__22852);
var first__22854 = cljs.core.first.call(null,seq__22853);
var seq__22853__$1 = cljs.core.next.call(null,seq__22853);
var type = first__22854;
var first__22854__$1 = cljs.core.first.call(null,seq__22853__$1);
var seq__22853__$2 = cljs.core.next.call(null,seq__22853__$1);
var p1 = first__22854__$1;
var first__22854__$2 = cljs.core.first.call(null,seq__22853__$2);
var seq__22853__$3 = cljs.core.next.call(null,seq__22853__$2);
var p2 = first__22854__$2;
var more = seq__22853__$3;
var G__22855 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22855) {
case "el":
return ((function (G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more))

break;
case "not=":
return ((function (G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more){
return (function (x){
return cljs.core.not_EQ_.call(null,p1,x);
});
;})(G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more))

break;
case "ks-nnil?":
return ((function (G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more){
return (function (x){
return taoensso.encore.ks_nnil_QMARK_.call(null,p1,x);
});
;})(G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more))

break;
case "ks<=":
return ((function (G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more){
return (function (x){
return taoensso.encore.ks_LT__EQ_.call(null,p1,x);
});
;})(G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more))

break;
case "or":
return ((function (G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more){
return (function (x){
var or__6577__auto__ = (cljs.core.truth_(p1)?taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p1)).call(null,x):null);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
var or__6577__auto____$1 = (cljs.core.truth_(p2)?taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p2)).call(null,x):null);
if(cljs.core.truth_(or__6577__auto____$1)){
return or__6577__auto____$1;
} else {
return cljs.core.some.call(null,((function (or__6577__auto____$1,or__6577__auto__,G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more){
return (function (p1__22846_SHARP_){
return taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p1__22846_SHARP_)).call(null,x);
});})(or__6577__auto____$1,or__6577__auto__,G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more))
,more);
}
}
});
;})(G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more))

break;
case "not":
return ((function (G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more){
return (function (x){
var and__6565__auto__ = ((cljs.core.not.call(null,p1))?true:cljs.core.not.call(null,taoensso$encore$hpred.call(null,p1).call(null,x)));
if(and__6565__auto__){
var and__6565__auto____$1 = ((cljs.core.not.call(null,p2))?true:cljs.core.not.call(null,taoensso$encore$hpred.call(null,p2).call(null,x)));
if(and__6565__auto____$1){
return cljs.core.every_QMARK_.call(null,((function (and__6565__auto____$1,and__6565__auto__,G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more){
return (function (p1__22845_SHARP_){
return cljs.core.not.call(null,taoensso$encore$hpred.call(null,p1__22845_SHARP_).call(null,x));
});})(and__6565__auto____$1,and__6565__auto__,G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more))
,more);
} else {
return and__6565__auto____$1;
}
} else {
return and__6565__auto__;
}
});
;})(G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more))

break;
case "ks=":
return ((function (G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more){
return (function (x){
return taoensso.encore.ks_EQ_.call(null,p1,x);
});
;})(G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more))

break;
case "and":
return ((function (G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more){
return (function (x){
var and__6565__auto__ = ((cljs.core.not.call(null,p1))?true:taoensso$encore$hpred.call(null,p1).call(null,x));
if(cljs.core.truth_(and__6565__auto__)){
var and__6565__auto____$1 = ((cljs.core.not.call(null,p2))?true:taoensso$encore$hpred.call(null,p2).call(null,x));
if(cljs.core.truth_(and__6565__auto____$1)){
return cljs.core.every_QMARK_.call(null,((function (and__6565__auto____$1,and__6565__auto__,G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more){
return (function (p1__22847_SHARP_){
return taoensso$encore$hpred.call(null,p1__22847_SHARP_).call(null,x);
});})(and__6565__auto____$1,and__6565__auto__,G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more))
,more);
} else {
return and__6565__auto____$1;
}
} else {
return and__6565__auto__;
}
});
;})(G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more))

break;
case "ks>=":
return ((function (G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more){
return (function (x){
return taoensso.encore.ks_GT__EQ_.call(null,p1,x);
});
;})(G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more))

break;
case "not-in":
return ((function (G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more))

break;
case "not-el":
return ((function (G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more))

break;
case "=":
return ((function (G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more){
return (function (x){
return cljs.core._EQ_.call(null,p1,x);
});
;})(G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more))

break;
case "in":
return ((function (G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__22855,vec__22852,seq__22853,first__22854,seq__22853__$1,type,first__22854__$1,seq__22853__$2,p1,first__22854__$2,seq__22853__$3,p2,more))

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
var len__7652__auto___22863 = arguments.length;
var i__7653__auto___22864 = (0);
while(true){
if((i__7653__auto___22864 < len__7652__auto___22863)){
args__7659__auto__.push((arguments[i__7653__auto___22864]));

var G__22865 = (i__7653__auto___22864 + (1));
i__7653__auto___22864 = G__22865;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__22859){
var vec__22860 = p__22859;
var no_slash_QMARK_ = cljs.core.nth.call(null,vec__22860,(0),null);
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

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq22857){
var G__22858 = cljs.core.first.call(null,seq22857);
var seq22857__$1 = cljs.core.next.call(null,seq22857);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__22858,seq22857__$1);
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
var len__7652__auto___22873 = arguments.length;
var i__7653__auto___22874 = (0);
while(true){
if((i__7653__auto___22874 < len__7652__auto___22873)){
args__7659__auto__.push((arguments[i__7653__auto___22874]));

var G__22875 = (i__7653__auto___22874 + (1));
i__7653__auto___22874 = G__22875;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__22868){
var vec__22869 = p__22868;
var type = cljs.core.nth.call(null,vec__22869,(0),null);
var nplaces = cljs.core.nth.call(null,vec__22869,(1),null);
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__22872 = ((((function (){var or__6577__auto__ = type;
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
switch (G__22872) {
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

taoensso.encore.round.cljs$lang$applyTo = (function (seq22866){
var G__22867 = cljs.core.first.call(null,seq22866);
var seq22866__$1 = cljs.core.next.call(null,seq22866);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__22867,seq22866__$1);
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
var len__7652__auto___22885 = arguments.length;
var i__7653__auto___22886 = (0);
while(true){
if((i__7653__auto___22886 < len__7652__auto___22885)){
args__7659__auto__.push((arguments[i__7653__auto___22886]));

var G__22887 = (i__7653__auto___22886 + (1));
i__7653__auto___22886 = G__22887;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__22879){
var vec__22880 = p__22879;
var map__22883 = cljs.core.nth.call(null,vec__22880,(0),null);
var map__22883__$1 = ((((!((map__22883 == null)))?((((map__22883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22883):map__22883);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__22883__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__22883__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__22883__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
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

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq22877){
var G__22878 = cljs.core.first.call(null,seq22877);
var seq22877__$1 = cljs.core.next.call(null,seq22877);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__22878,seq22877__$1);
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
var len__7652__auto___22893 = arguments.length;
var i__7653__auto___22894 = (0);
while(true){
if((i__7653__auto___22894 < len__7652__auto___22893)){
args__7659__auto__.push((arguments[i__7653__auto___22894]));

var G__22895 = (i__7653__auto___22894 + (1));
i__7653__auto___22894 = G__22895;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic = (function (p__22889){
var vec__22890 = p__22889;
var mock_udts = cljs.core.nth.call(null,vec__22890,(0),null);
var mock_udts__$1 = (function (){var or__6577__auto__ = mock_udts;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return cljs.core.range.call(null);
}
})();
var idx = cljs.core.atom.call(null,(-1));
return ((function (mock_udts__$1,idx,vec__22890,mock_udts){
return (function (){
return cljs.core.nth.call(null,mock_udts__$1,cljs.core.swap_BANG_.call(null,idx,cljs.core.inc));
});
;})(mock_udts__$1,idx,vec__22890,mock_udts))
});

taoensso.encore.now_udt_mock_fn.cljs$lang$maxFixedArity = (0);

taoensso.encore.now_udt_mock_fn.cljs$lang$applyTo = (function (seq22888){
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22888));
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
var len__7652__auto___22909 = arguments.length;
var i__7653__auto___22910 = (0);
while(true){
if((i__7653__auto___22910 < len__7652__auto___22909)){
args__7659__auto__.push((arguments[i__7653__auto___22910]));

var G__22911 = (i__7653__auto___22910 + (1));
i__7653__auto___22910 = G__22911;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__22897){
var map__22898 = p__22897;
var map__22898__$1 = ((((!((map__22898 == null)))?((((map__22898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22898):map__22898);
var opts = map__22898__$1;
var years = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__22898,map__22898__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (hcond_in__22900){
var vec__22901 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hcond_in__22900], null);
}catch (e22907){if((e22907 instanceof java.lang.Throwable)){
var t__21845__auto__ = e22907;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e22907;

}
}})();
var x__21961__auto__ = cljs.core.nth.call(null,vec__22901,(0),null);
var _QMARK_x_err__21962__auto__ = cljs.core.nth.call(null,vec__22901,(1),null);
var have_x_QMARK___21963__auto__ = (_QMARK_x_err__21962__auto__ == null);
var vec__22904 = ((have_x_QMARK___21963__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null)).call(null,x__21961__auto__)], null);
}catch (e22908){if((e22908 instanceof java.lang.Throwable)){
var t__21845__auto__ = e22908;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e22908;

}
}})():null);
var pass_QMARK___21964__auto__ = cljs.core.nth.call(null,vec__22904,(0),null);
var _QMARK_pred_err__21965__auto__ = cljs.core.nth.call(null,vec__22904,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto__)){
return x__21961__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hcond-in__22900","hcond-in__22900",-1474590550,null)),x__7411__auto__);
})(),((have_x_QMARK___21963__auto__)?x__21961__auto__:_QMARK_x_err__21962__auto__),_QMARK_pred_err__21965__auto__);
}
});})(map__22898,map__22898__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error("Assert failed: (have #{:msecs :secs :months :days :mins :hours :years :ms :weeks} :in (keys opts))"));
}

return taoensso.encore.round.call(null,(((((((((cljs.core.truth_(years)?(((((years * (1000)) * (60)) * (60)) * (24)) * (365)):(0)) + (cljs.core.truth_(months)?cljs.core.long$.call(null,(((((months * (1000)) * (60)) * (60)) * (24)) * 29.53)):(0))) + (cljs.core.truth_(weeks)?(((((weeks * (1000)) * (60)) * (60)) * (24)) * (7)):(0))) + (cljs.core.truth_(days)?((((days * (1000)) * (60)) * (60)) * (24)):(0))) + (cljs.core.truth_(hours)?(((hours * (1000)) * (60)) * (60)):(0))) + (cljs.core.truth_(mins)?((mins * (1000)) * (60)):(0))) + (cljs.core.truth_(secs)?(secs * (1000)):(0))) + (cljs.core.truth_(msecs)?msecs:(0))) + (cljs.core.truth_(ms)?ms:(0))));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq22896){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22896));
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
var len__7652__auto___22930 = arguments.length;
var i__7653__auto___22931 = (0);
while(true){
if((i__7653__auto___22931 < len__7652__auto___22930)){
args__7659__auto__.push((arguments[i__7653__auto___22931]));

var G__22932 = (i__7653__auto___22931 + (1));
i__7653__auto___22931 = G__22932;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((2) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7660__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__22919){
var map__22920 = p__22919;
var map__22920__$1 = ((((!((map__22920 == null)))?((((map__22920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22920):map__22920);
var max_len = cljs.core.get.call(null,map__22920__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__22920__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
if((function (){
var vec__22922_22933 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_len], null);
}catch (e22928){if((e22928 instanceof java.lang.Throwable)){
var t__21845__auto__ = e22928;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e22928;

}
}})();
var x__21961__auto___22934 = cljs.core.nth.call(null,vec__22922_22933,(0),null);
var _QMARK_x_err__21962__auto___22935 = cljs.core.nth.call(null,vec__22922_22933,(1),null);
var have_x_QMARK___21963__auto___22936 = (_QMARK_x_err__21962__auto___22935 == null);
var vec__22925_22937 = ((have_x_QMARK___21963__auto___22936)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,x__21961__auto___22934)], null);
}catch (e22929){if((e22929 instanceof java.lang.Throwable)){
var t__21845__auto__ = e22929;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e22929;

}
}})():null);
var pass_QMARK___21964__auto___22938 = cljs.core.nth.call(null,vec__22925_22937,(0),null);
var _QMARK_pred_err__21965__auto___22939 = cljs.core.nth.call(null,vec__22925_22937,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto___22938)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"max-len","max-len",1621685511,null)),x__7411__auto__);
})(),((have_x_QMARK___21963__auto___22936)?x__21961__auto___22934:_QMARK_x_err__21962__auto___22935),_QMARK_pred_err__21965__auto___22939);
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
var end_idx_STAR_ = (cljs.core.truth_(max_len)?(function (){var n1__22023__auto__ = (start_idx_STAR_ + max_len);
var n2__22024__auto__ = xlen;
if((n1__22023__auto__ > n2__22024__auto__)){
return n2__22024__auto__;
} else {
return n1__22023__auto__;
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

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq22916){
var G__22917 = cljs.core.first.call(null,seq22916);
var seq22916__$1 = cljs.core.next.call(null,seq22916);
var G__22918 = cljs.core.first.call(null,seq22916__$1);
var seq22916__$2 = cljs.core.next.call(null,seq22916__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__22917,G__22918,seq22916__$2);
});

/**
 * Like `subvec` but uses `sub-indexes`.
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___22958 = arguments.length;
var i__7653__auto___22959 = (0);
while(true){
if((i__7653__auto___22959 < len__7652__auto___22958)){
args__7659__auto__.push((arguments[i__7653__auto___22959]));

var G__22960 = (i__7653__auto___22959 + (1));
i__7653__auto___22959 = G__22960;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((2) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7660__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__22943){
var vec__22944 = p__22943;
var _QMARK_max_len = cljs.core.nth.call(null,vec__22944,(0),null);
if((function (){
var vec__22947_22961 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}catch (e22953){if((e22953 instanceof java.lang.Throwable)){
var t__21845__auto__ = e22953;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e22953;

}
}})();
var x__21961__auto___22962 = cljs.core.nth.call(null,vec__22947_22961,(0),null);
var _QMARK_x_err__21962__auto___22963 = cljs.core.nth.call(null,vec__22947_22961,(1),null);
var have_x_QMARK___21963__auto___22964 = (_QMARK_x_err__21962__auto___22963 == null);
var vec__22950_22965 = ((have_x_QMARK___21963__auto___22964)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.vector_QMARK_).call(null,x__21961__auto___22962)], null);
}catch (e22954){if((e22954 instanceof java.lang.Throwable)){
var t__21845__auto__ = e22954;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e22954;

}
}})():null);
var pass_QMARK___21964__auto___22966 = cljs.core.nth.call(null,vec__22950_22965,(0),null);
var _QMARK_pred_err__21965__auto___22967 = cljs.core.nth.call(null,vec__22950_22965,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto___22966)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v","v",1661996586,null)),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null)),((have_x_QMARK___21963__auto___22964)?x__21961__auto___22962:_QMARK_x_err__21962__auto___22963),_QMARK_pred_err__21965__auto___22967);
}

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? vector? v)"));
}

var vec__22955 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__22955,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__22955,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq22940){
var G__22941 = cljs.core.first.call(null,seq22940);
var seq22940__$1 = cljs.core.next.call(null,seq22940);
var G__22942 = cljs.core.first.call(null,seq22940__$1);
var seq22940__$2 = cljs.core.next.call(null,seq22940__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__22941,G__22942,seq22940__$2);
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

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7201__auto__,k22969,else__7202__auto__){
var self__ = this;
var this__7201__auto____$1 = this;
var G__22971 = (((k22969 instanceof cljs.core.Keyword))?k22969.fqn:null);
switch (G__22971) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22969,else__7202__auto__);

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

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22968){
var self__ = this;
var G__22968__$1 = this;
return (new cljs.core.RecordIter((0),G__22968__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7206__auto__,k__7207__auto__,G__22968){
var self__ = this;
var this__7206__auto____$1 = this;
var pred__22972 = cljs.core.keyword_identical_QMARK_;
var expr__22973 = k__7207__auto__;
if(cljs.core.truth_(pred__22972.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__22973))){
return (new taoensso.encore.Swapped(G__22968,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22972.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__22973))){
return (new taoensso.encore.Swapped(self__.new_val,G__22968,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7207__auto__,G__22968),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7211__auto__){
var self__ = this;
var this__7211__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7198__auto__,G__22968){
var self__ = this;
var this__7198__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__22968,self__.__extmap,self__.__hash));
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

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__22970){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__22970),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__22970),null,cljs.core.dissoc.call(null,G__22970,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
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
var vec__22979 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__22979,(0),null);
var return_val = cljs.core.nth.call(null,vec__22979,(1),null);
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
var vec__22986 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__22986,(0),null);
var ks = cljs.core.nth.call(null,vec__22986,(1),null);
var valf = cljs.core.nth.call(null,vec__22986,(2),null);
var G__22989 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__22989) {
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

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq22991){
var G__22992 = cljs.core.first.call(null,seq22991);
var seq22991__$1 = cljs.core.next.call(null,seq22991);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__22992,seq22991__$1);
});

/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args22996 = [];
var len__7652__auto___23017 = arguments.length;
var i__7653__auto___23018 = (0);
while(true){
if((i__7653__auto___23018 < len__7652__auto___23017)){
args22996.push((arguments[i__7653__auto___23018]));

var G__23019 = (i__7653__auto___23018 + (1));
i__7653__auto___23018 = G__23019;
continue;
} else {
}
break;
}

var G__23002 = args22996.length;
switch (G__23002) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args22996.slice((3)),(0),null));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7671__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__23003 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__23003,(0),null);
var return_val = cljs.core.nth.call(null,vec__23003,(1),null);
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
var vec__23006 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__23006,(0),null);
var return_val = cljs.core.nth.call(null,vec__23006,(1),null);
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
var vec__23009_23021 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,more)], null);
}catch (e23015){if((e23015 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23015;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23015;

}
}})();
var x__21961__auto___23022 = cljs.core.nth.call(null,vec__23009_23021,(0),null);
var _QMARK_x_err__21962__auto___23023 = cljs.core.nth.call(null,vec__23009_23021,(1),null);
var have_x_QMARK___21963__auto___23024 = (_QMARK_x_err__21962__auto___23023 == null);
var vec__23012_23025 = ((have_x_QMARK___21963__auto___23024)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__21961__auto___23022)], null);
}catch (e23016){if((e23016 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23016;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23016;

}
}})():null);
var pass_QMARK___21964__auto___23026 = cljs.core.nth.call(null,vec__23012_23025,(0),null);
var _QMARK_pred_err__21965__auto___23027 = cljs.core.nth.call(null,vec__23012_23025,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto___23026)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,(function (){var x__7411__auto__ = cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto__);
})(),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___21963__auto___23024)?x__21961__auto___23022:_QMARK_x_err__21962__auto___23023),_QMARK_pred_err__21965__auto___23027);
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

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq22997){
var G__22998 = cljs.core.first.call(null,seq22997);
var seq22997__$1 = cljs.core.next.call(null,seq22997);
var G__22999 = cljs.core.first.call(null,seq22997__$1);
var seq22997__$2 = cljs.core.next.call(null,seq22997__$1);
var G__23000 = cljs.core.first.call(null,seq22997__$2);
var seq22997__$3 = cljs.core.next.call(null,seq22997__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22998,G__22999,G__23000,seq22997__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Is to `reset!` as `swap-in!` is to `swap!`.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args23028 = [];
var len__7652__auto___23043 = arguments.length;
var i__7653__auto___23044 = (0);
while(true){
if((i__7653__auto___23044 < len__7652__auto___23043)){
args23028.push((arguments[i__7653__auto___23044]));

var G__23045 = (i__7653__auto___23044 + (1));
i__7653__auto___23044 = G__23045;
continue;
} else {
}
break;
}

var G__23034 = args23028.length;
switch (G__23034) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args23028.slice((3)),(0),null));
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
var vec__23035_23047 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,more)], null);
}catch (e23041){if((e23041 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23041;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23041;

}
}})();
var x__21961__auto___23048 = cljs.core.nth.call(null,vec__23035_23047,(0),null);
var _QMARK_x_err__21962__auto___23049 = cljs.core.nth.call(null,vec__23035_23047,(1),null);
var have_x_QMARK___21963__auto___23050 = (_QMARK_x_err__21962__auto___23049 == null);
var vec__23038_23051 = ((have_x_QMARK___21963__auto___23050)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__21961__auto___23048)], null);
}catch (e23042){if((e23042 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23042;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23042;

}
}})():null);
var pass_QMARK___21964__auto___23052 = cljs.core.nth.call(null,vec__23038_23051,(0),null);
var _QMARK_pred_err__21965__auto___23053 = cljs.core.nth.call(null,vec__23038_23051,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto___23052)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,(function (){var x__7411__auto__ = cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto__);
})(),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___21963__auto___23050)?x__21961__auto___23048:_QMARK_x_err__21962__auto___23049),_QMARK_pred_err__21965__auto___23053);
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

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq23029){
var G__23030 = cljs.core.first.call(null,seq23029);
var seq23029__$1 = cljs.core.next.call(null,seq23029);
var G__23031 = cljs.core.first.call(null,seq23029__$1);
var seq23029__$2 = cljs.core.next.call(null,seq23029__$1);
var G__23032 = cljs.core.first.call(null,seq23029__$2);
var seq23029__$3 = cljs.core.next.call(null,seq23029__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23030,G__23031,G__23032,seq23029__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23057 = arguments.length;
var i__7653__auto___23058 = (0);
while(true){
if((i__7653__auto___23058 < len__7652__auto___23057)){
args__7659__auto__.push((arguments[i__7653__auto___23058]));

var G__23059 = (i__7653__auto___23058 + (1));
i__7653__auto___23058 = G__23059;
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

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq23054){
var G__23055 = cljs.core.first.call(null,seq23054);
var seq23054__$1 = cljs.core.next.call(null,seq23054);
var G__23056 = cljs.core.first.call(null,seq23054__$1);
var seq23054__$2 = cljs.core.next.call(null,seq23054__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__23055,G__23056,seq23054__$2);
});

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23086 = arguments.length;
var i__7653__auto___23087 = (0);
while(true){
if((i__7653__auto___23087 < len__7652__auto___23086)){
args__7659__auto__.push((arguments[i__7653__auto___23087]));

var G__23088 = (i__7653__auto___23087 + (1));
i__7653__auto___23087 = G__23088;
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
var vec__23062_23089 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,kvs)], null);
}catch (e23068){if((e23068 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23068;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23068;

}
}})();
var x__21961__auto___23090 = cljs.core.nth.call(null,vec__23062_23089,(0),null);
var _QMARK_x_err__21962__auto___23091 = cljs.core.nth.call(null,vec__23062_23089,(1),null);
var have_x_QMARK___21963__auto___23092 = (_QMARK_x_err__21962__auto___23091 == null);
var vec__23065_23093 = ((have_x_QMARK___21963__auto___23092)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__21961__auto___23090)], null);
}catch (e23069){if((e23069 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23069;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23069;

}
}})():null);
var pass_QMARK___21964__auto___23094 = cljs.core.nth.call(null,vec__23065_23093,(0),null);
var _QMARK_pred_err__21965__auto___23095 = cljs.core.nth.call(null,vec__23065_23093,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto___23094)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,(function (){var x__7411__auto__ = cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto__);
})(),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___21963__auto___23092)?x__21961__auto___23090:_QMARK_x_err__21962__auto___23091),_QMARK_pred_err__21965__auto___23095);
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
})(),(function (){var iter__7357__auto__ = (function taoensso$encore$iter__23070(s__23071){
return (new cljs.core.LazySeq(null,(function (){
var s__23071__$1 = s__23071;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23071__$1);
if(temp__4657__auto__){
var s__23071__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23071__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__23071__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__23073 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__23072 = (0);
while(true){
if((i__23072 < size__7356__auto__)){
var vec__23080 = cljs.core._nth.call(null,c__7355__auto__,i__23072);
var k = cljs.core.nth.call(null,vec__23080,(0),null);
var v = cljs.core.nth.call(null,vec__23080,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__23073,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23096 = (i__23072 + (1));
i__23072 = G__23096;
continue;
} else {
var G__23097 = (i__23072 + (1));
i__23072 = G__23097;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23073),taoensso$encore$iter__23070.call(null,cljs.core.chunk_rest.call(null,s__23071__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23073),null);
}
} else {
var vec__23083 = cljs.core.first.call(null,s__23071__$2);
var k = cljs.core.nth.call(null,vec__23083,(0),null);
var v = cljs.core.nth.call(null,vec__23083,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__23070.call(null,cljs.core.rest.call(null,s__23071__$2)));
} else {
var G__23098 = cljs.core.rest.call(null,s__23071__$2);
s__23071__$1 = G__23098;
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

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq23060){
var G__23061 = cljs.core.first.call(null,seq23060);
var seq23060__$1 = cljs.core.next.call(null,seq23060);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__23061,seq23060__$1);
});

/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23125 = arguments.length;
var i__7653__auto___23126 = (0);
while(true){
if((i__7653__auto___23126 < len__7652__auto___23125)){
args__7659__auto__.push((arguments[i__7653__auto___23126]));

var G__23127 = (i__7653__auto___23126 + (1));
i__7653__auto___23126 = G__23127;
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
var vec__23101_23128 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,kvs)], null);
}catch (e23107){if((e23107 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23107;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23107;

}
}})();
var x__21961__auto___23129 = cljs.core.nth.call(null,vec__23101_23128,(0),null);
var _QMARK_x_err__21962__auto___23130 = cljs.core.nth.call(null,vec__23101_23128,(1),null);
var have_x_QMARK___21963__auto___23131 = (_QMARK_x_err__21962__auto___23130 == null);
var vec__23104_23132 = ((have_x_QMARK___21963__auto___23131)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__21961__auto___23129)], null);
}catch (e23108){if((e23108 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23108;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23108;

}
}})():null);
var pass_QMARK___21964__auto___23133 = cljs.core.nth.call(null,vec__23104_23132,(0),null);
var _QMARK_pred_err__21965__auto___23134 = cljs.core.nth.call(null,vec__23104_23132,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto___23133)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,(function (){var x__7411__auto__ = cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto__);
})(),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___21963__auto___23131)?x__21961__auto___23129:_QMARK_x_err__21962__auto___23130),_QMARK_pred_err__21965__auto___23134);
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
})(),(function (){var iter__7357__auto__ = (function taoensso$encore$iter__23109(s__23110){
return (new cljs.core.LazySeq(null,(function (){
var s__23110__$1 = s__23110;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23110__$1);
if(temp__4657__auto__){
var s__23110__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23110__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__23110__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__23112 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__23111 = (0);
while(true){
if((i__23111 < size__7356__auto__)){
var vec__23119 = cljs.core._nth.call(null,c__7355__auto__,i__23111);
var k = cljs.core.nth.call(null,vec__23119,(0),null);
var v = cljs.core.nth.call(null,vec__23119,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__23112,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23135 = (i__23111 + (1));
i__23111 = G__23135;
continue;
} else {
var G__23136 = (i__23111 + (1));
i__23111 = G__23136;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23112),taoensso$encore$iter__23109.call(null,cljs.core.chunk_rest.call(null,s__23110__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23112),null);
}
} else {
var vec__23122 = cljs.core.first.call(null,s__23110__$2);
var k = cljs.core.nth.call(null,vec__23122,(0),null);
var v = cljs.core.nth.call(null,vec__23122,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__23109.call(null,cljs.core.rest.call(null,s__23110__$2)));
} else {
var G__23137 = cljs.core.rest.call(null,s__23110__$2);
s__23110__$1 = G__23137;
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

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq23099){
var G__23100 = cljs.core.first.call(null,seq23099);
var seq23099__$1 = cljs.core.next.call(null,seq23099);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__23100,seq23099__$1);
});

taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args23138 = [];
var len__7652__auto___23141 = arguments.length;
var i__7653__auto___23142 = (0);
while(true){
if((i__7653__auto___23142 < len__7652__auto___23141)){
args23138.push((arguments[i__7653__auto___23142]));

var G__23143 = (i__7653__auto___23142 + (1));
i__7653__auto___23142 = G__23143;
continue;
} else {
}
break;
}

var G__23140 = args23138.length;
switch (G__23140) {
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23138.length)].join('')));

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
var len__7652__auto___23146 = arguments.length;
var i__7653__auto___23147 = (0);
while(true){
if((i__7653__auto___23147 < len__7652__auto___23146)){
args__7659__auto__.push((arguments[i__7653__auto___23147]));

var G__23148 = (i__7653__auto___23147 + (1));
i__7653__auto___23147 = G__23148;
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

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq23145){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23145));
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
var len__7652__auto___23151 = arguments.length;
var i__7653__auto___23152 = (0);
while(true){
if((i__7653__auto___23152 < len__7652__auto___23151)){
args__7659__auto__.push((arguments[i__7653__auto___23152]));

var G__23153 = (i__7653__auto___23152 + (1));
i__7653__auto___23152 = G__23153;
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

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq23149){
var G__23150 = cljs.core.first.call(null,seq23149);
var seq23149__$1 = cljs.core.next.call(null,seq23149);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__23150,seq23149__$1);
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
var len__7652__auto___23202 = arguments.length;
var i__7653__auto___23203 = (0);
while(true){
if((i__7653__auto___23203 < len__7652__auto___23202)){
args__7659__auto__.push((arguments[i__7653__auto___23203]));

var G__23204 = (i__7653__auto___23203 + (1));
i__7653__auto___23203 = G__23204;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__23156){
var vec__23157 = p__23156;
var kf = cljs.core.nth.call(null,vec__23157,(0),null);
var vf = cljs.core.nth.call(null,vec__23157,(1),null);
if((function (){
var vec__23160_23205 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kvs], null);
}catch (e23166){if((e23166 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23166;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23166;

}
}})();
var x__21961__auto___23206 = cljs.core.nth.call(null,vec__23160_23205,(0),null);
var _QMARK_x_err__21962__auto___23207 = cljs.core.nth.call(null,vec__23160_23205,(1),null);
var have_x_QMARK___21963__auto___23208 = (_QMARK_x_err__21962__auto___23207 == null);
var vec__23163_23209 = ((have_x_QMARK___21963__auto___23208)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.sequential_QMARK_], null)).call(null,x__21961__auto___23206)], null);
}catch (e23167){if((e23167 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23167;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23167;

}
}})():null);
var pass_QMARK___21964__auto___23210 = cljs.core.nth.call(null,vec__23163_23209,(0),null);
var _QMARK_pred_err__21965__auto___23211 = cljs.core.nth.call(null,vec__23163_23209,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto___23210)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)),x__7411__auto__);
})(),((have_x_QMARK___21963__auto___23208)?x__21961__auto___23206:_QMARK_x_err__21962__auto___23207),_QMARK_pred_err__21965__auto___23211);
}

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? [:or nil? sequential?] kvs)"));
}

if((function (){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var vec__23168 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kf], null);
}catch (e23174){if((e23174 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23174;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23174;

}
}})();
var x__21961__auto__ = cljs.core.nth.call(null,vec__23168,(0),null);
var _QMARK_x_err__21962__auto__ = cljs.core.nth.call(null,vec__23168,(1),null);
var have_x_QMARK___21963__auto__ = (_QMARK_x_err__21962__auto__ == null);
var vec__23171 = ((have_x_QMARK___21963__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null)).call(null,x__21961__auto__)], null);
}catch (e23175){if((e23175 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23175;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23175;

}
}})():null);
var pass_QMARK___21964__auto__ = cljs.core.nth.call(null,vec__23171,(0),null);
var _QMARK_pred_err__21965__auto__ = cljs.core.nth.call(null,vec__23171,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto__)){
return x__21961__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"kf","kf",-1046348180,null)),x__7411__auto__);
})(),((have_x_QMARK___21963__auto__)?x__21961__auto__:_QMARK_x_err__21962__auto__),_QMARK_pred_err__21965__auto__);
}
})(),(function (){var vec__23176 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vf], null);
}catch (e23182){if((e23182 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23182;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23182;

}
}})();
var x__21961__auto__ = cljs.core.nth.call(null,vec__23176,(0),null);
var _QMARK_x_err__21962__auto__ = cljs.core.nth.call(null,vec__23176,(1),null);
var have_x_QMARK___21963__auto__ = (_QMARK_x_err__21962__auto__ == null);
var vec__23179 = ((have_x_QMARK___21963__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null)).call(null,x__21961__auto__)], null);
}catch (e23183){if((e23183 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23183;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23183;

}
}})():null);
var pass_QMARK___21964__auto__ = cljs.core.nth.call(null,vec__23179,(0),null);
var _QMARK_pred_err__21965__auto__ = cljs.core.nth.call(null,vec__23179,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto__)){
return x__21961__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vf","vf",1319108258,null)),x__7411__auto__);
})(),((have_x_QMARK___21963__auto__)?x__21961__auto__:_QMARK_x_err__21962__auto__),_QMARK_pred_err__21965__auto__);
}
})()], null);

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? [:or nil? ifn?] kf vf)"));
}

var _PERCENT_ = ((cljs.core.empty_QMARK_.call(null,kvs))?cljs.core.PersistentArrayMap.EMPTY:(function (){var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:((function (vec__23157,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vec__23157,kf,vf))
);
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__23187 = kvs;
var vec__23188 = G__23187;
var k = cljs.core.nth.call(null,vec__23188,(0),null);
var v = cljs.core.nth.call(null,vec__23188,(1),null);
var s = vec__23188;
var m__$1 = m;
var G__23187__$1 = G__23187;
while(true){
var m__$2 = m__$1;
var vec__23191 = G__23187__$1;
var k__$1 = cljs.core.nth.call(null,vec__23191,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__23191,(1),null);
var s__$1 = vec__23191;
var k__$2 = ((cljs.core.not.call(null,kf__$1))?k__$1:kf__$1.call(null,k__$1,v__$1));
var v__$2 = ((cljs.core.not.call(null,vf))?v__$1:vf.call(null,k__$2,v__$1));
var new_m = cljs.core.assoc_BANG_.call(null,m__$2,k__$2,v__$2);
var temp__4655__auto__ = cljs.core.nnext.call(null,s__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
var G__23212 = new_m;
var G__23213 = n;
m__$1 = G__23212;
G__23187__$1 = G__23213;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,new_m);
}
break;
}
})());
if((function (){
var vec__23194_23214 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_PERCENT_], null);
}catch (e23200){if((e23200 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23200;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23200;

}
}})();
var x__21961__auto___23215 = cljs.core.nth.call(null,vec__23194_23214,(0),null);
var _QMARK_x_err__21962__auto___23216 = cljs.core.nth.call(null,vec__23194_23214,(1),null);
var have_x_QMARK___21963__auto___23217 = (_QMARK_x_err__21962__auto___23216 == null);
var vec__23197_23218 = ((have_x_QMARK___21963__auto___23217)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null)).call(null,x__21961__auto___23215)], null);
}catch (e23201){if((e23201 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23201;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23201;

}
}})():null);
var pass_QMARK___21964__auto___23219 = cljs.core.nth.call(null,vec__23197_23218,(0),null);
var _QMARK_pred_err__21965__auto___23220 = cljs.core.nth.call(null,vec__23197_23218,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto___23219)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),x__7411__auto__);
})(),((have_x_QMARK___21963__auto___23217)?x__21961__auto___23215:_QMARK_x_err__21962__auto___23216),_QMARK_pred_err__21965__auto___23220);
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

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq23154){
var G__23155 = cljs.core.first.call(null,seq23154);
var seq23154__$1 = cljs.core.next.call(null,seq23154);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__23155,seq23154__$1);
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
var G__23221 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__23222 = cljs.core.next.call(null,ks__$1);
var G__23223 = cljs.core.next.call(null,vs__$1);
m = G__23221;
ks__$1 = G__23222;
vs__$1 = G__23223;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args23224 = [];
var len__7652__auto___23230 = arguments.length;
var i__7653__auto___23231 = (0);
while(true){
if((i__7653__auto___23231 < len__7652__auto___23230)){
args23224.push((arguments[i__7653__auto___23231]));

var G__23232 = (i__7653__auto___23231 + (1));
i__7653__auto___23231 = G__23232;
continue;
} else {
}
break;
}

var G__23229 = args23224.length;
switch (G__23229) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args23224.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7671__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq23225){
var G__23226 = cljs.core.first.call(null,seq23225);
var seq23225__$1 = cljs.core.next.call(null,seq23225);
var G__23227 = cljs.core.first.call(null,seq23225__$1);
var seq23225__$2 = cljs.core.next.call(null,seq23225__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__23226,G__23227,seq23225__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args23234 = [];
var len__7652__auto___23240 = arguments.length;
var i__7653__auto___23241 = (0);
while(true){
if((i__7653__auto___23241 < len__7652__auto___23240)){
args23234.push((arguments[i__7653__auto___23241]));

var G__23242 = (i__7653__auto___23241 + (1));
i__7653__auto___23241 = G__23242;
continue;
} else {
}
break;
}

var G__23239 = args23234.length;
switch (G__23239) {
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
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args23234.slice((2)),(0),null));
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

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq23235){
var G__23236 = cljs.core.first.call(null,seq23235);
var seq23235__$1 = cljs.core.next.call(null,seq23235);
var G__23237 = cljs.core.first.call(null,seq23235__$1);
var seq23235__$2 = cljs.core.next.call(null,seq23235__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__23236,G__23237,seq23235__$2);
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
var args23244 = [];
var len__7652__auto___23255 = arguments.length;
var i__7653__auto___23256 = (0);
while(true){
if((i__7653__auto___23256 < len__7652__auto___23255)){
args23244.push((arguments[i__7653__auto___23256]));

var G__23257 = (i__7653__auto___23256 + (1));
i__7653__auto___23256 = G__23257;
continue;
} else {
}
break;
}

var G__23246 = args23244.length;
switch (G__23246) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23244.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__23247,in$){
var vec__23248 = p__23247;
var v = cljs.core.nth.call(null,vec__23248,(0),null);
var seen = cljs.core.nth.call(null,vec__23248,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,seen,in$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in$)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__23251,in$){
var vec__23252 = p__23251;
var v = cljs.core.nth.call(null,vec__23252,(0),null);
var seen = cljs.core.nth.call(null,vec__23252,(1),null);
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
return (function (p__23271,seen__$1){
while(true){
var vec__23272 = p__23271;
var v = cljs.core.nth.call(null,vec__23272,(0),null);
var xs__$1 = vec__23272;
var temp__4657__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4657__auto__){
var s = temp__4657__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__23275 = cljs.core.rest.call(null,s);
var G__23276 = seen__$1;
p__23271 = G__23275;
seen__$1 = G__23276;
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
var args23281 = [];
var len__7652__auto___23284 = arguments.length;
var i__7653__auto___23285 = (0);
while(true){
if((i__7653__auto___23285 < len__7652__auto___23284)){
args23281.push((arguments[i__7653__auto___23285]));

var G__23286 = (i__7653__auto___23285 + (1));
i__7653__auto___23285 = G__23286;
continue;
} else {
}
break;
}

var G__23283 = args23281.length;
switch (G__23283) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23281.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (rf){
var seen_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (seen_){
return (function() {
var G__23288 = null;
var G__23288__0 = (function (){
return rf.call(null);
});
var G__23288__1 = (function (acc){
return rf.call(null,acc);
});
var G__23288__2 = (function (acc,input){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),input)){
return acc;
} else {
cljs.core.swap_BANG_.call(null,seen_,cljs.core.conj,input);

return rf.call(null,acc,input);
}
});
G__23288 = function(acc,input){
switch(arguments.length){
case 0:
return G__23288__0.call(this);
case 1:
return G__23288__1.call(this,acc);
case 2:
return G__23288__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23288.cljs$core$IFn$_invoke$arity$0 = G__23288__0;
G__23288.cljs$core$IFn$_invoke$arity$1 = G__23288__1;
G__23288.cljs$core$IFn$_invoke$arity$2 = G__23288__2;
return G__23288;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (seen_){
return (function() {
var G__23289 = null;
var G__23289__0 = (function (){
return rf.call(null);
});
var G__23289__1 = (function (acc){
return rf.call(null,acc);
});
var G__23289__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core.swap_BANG_.call(null,seen_,cljs.core.conj,k);

return rf.call(null,acc,input);
}
});
G__23289 = function(acc,input){
switch(arguments.length){
case 0:
return G__23289__0.call(this);
case 1:
return G__23289__1.call(this,acc);
case 2:
return G__23289__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23289.cljs$core$IFn$_invoke$arity$0 = G__23289__0;
G__23289.cljs$core$IFn$_invoke$arity$1 = G__23289__1;
G__23289.cljs$core$IFn$_invoke$arity$2 = G__23289__2;
return G__23289;
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
var len__7652__auto___23292 = arguments.length;
var i__7653__auto___23293 = (0);
while(true){
if((i__7653__auto___23293 < len__7652__auto___23292)){
args__7659__auto__.push((arguments[i__7653__auto___23293]));

var G__23294 = (i__7653__auto___23293 + (1));
i__7653__auto___23293 = G__23294;
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

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq23290){
var G__23291 = cljs.core.first.call(null,seq23290);
var seq23290__$1 = cljs.core.next.call(null,seq23290);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__23291,seq23290__$1);
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
var len__7652__auto___23303 = arguments.length;
var i__7653__auto___23304 = (0);
while(true){
if((i__7653__auto___23304 < len__7652__auto___23303)){
args__7659__auto__.push((arguments[i__7653__auto___23304]));

var G__23305 = (i__7653__auto___23304 + (1));
i__7653__auto___23304 = G__23305;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__23299){
var vec__23300 = p__23299;
var _QMARK_comparator = cljs.core.nth.call(null,vec__23300,(0),null);
var comparator = (function (){var or__6577__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__23300,_QMARK_comparator){
return (function (p1__23295_SHARP_,p2__23296_SHARP_){
if((comparator.call(null,p1__23295_SHARP_,p2__23296_SHARP_) > (0))){
return p2__23296_SHARP_;
} else {
return p1__23295_SHARP_;
}
});})(comparator,vec__23300,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq23297){
var G__23298 = cljs.core.first.call(null,seq23297);
var seq23297__$1 = cljs.core.next.call(null,seq23297);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__23298,seq23297__$1);
});

/**
 * Returns the 'least' element in coll in O(n) time.
 */
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23314 = arguments.length;
var i__7653__auto___23315 = (0);
while(true){
if((i__7653__auto___23315 < len__7652__auto___23314)){
args__7659__auto__.push((arguments[i__7653__auto___23315]));

var G__23316 = (i__7653__auto___23315 + (1));
i__7653__auto___23315 = G__23316;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__23310){
var vec__23311 = p__23310;
var _QMARK_comparator = cljs.core.nth.call(null,vec__23311,(0),null);
var comparator = (function (){var or__6577__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__23311,_QMARK_comparator){
return (function (p1__23306_SHARP_,p2__23307_SHARP_){
if((comparator.call(null,p1__23306_SHARP_,p2__23307_SHARP_) < (0))){
return p2__23307_SHARP_;
} else {
return p1__23306_SHARP_;
}
});})(comparator,vec__23311,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq23308){
var G__23309 = cljs.core.first.call(null,seq23308);
var seq23308__$1 = cljs.core.next.call(null,seq23308);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__23309,seq23308__$1);
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
var G__23317 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__23318 = (idx + (1));
v = G__23317;
idx = G__23318;
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
var G__23319 = cljs.core.conj.call(null,v,f.call(null));
var G__23320 = (idx + (1));
v = G__23319;
idx = G__23320;
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
var len__7652__auto___23323 = arguments.length;
var i__7653__auto___23324 = (0);
while(true){
if((i__7653__auto___23324 < len__7652__auto___23323)){
args__7659__auto__.push((arguments[i__7653__auto___23324]));

var G__23325 = (i__7653__auto___23324 + (1));
i__7653__auto___23324 = G__23325;
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

taoensso.encore.format.cljs$lang$applyTo = (function (seq23321){
var G__23322 = cljs.core.first.call(null,seq23321);
var seq23321__$1 = cljs.core.next.call(null,seq23321);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__23322,seq23321__$1);
});

/**
 * Gives a consistent, flexible, cross-platform substring API built on
 *   `sub-indexes`.
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23344 = arguments.length;
var i__7653__auto___23345 = (0);
while(true){
if((i__7653__auto___23345 < len__7652__auto___23344)){
args__7659__auto__.push((arguments[i__7653__auto___23345]));

var G__23346 = (i__7653__auto___23345 + (1));
i__7653__auto___23345 = G__23346;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((2) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7660__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__23329){
var vec__23330 = p__23329;
var _QMARK_max_len = cljs.core.nth.call(null,vec__23330,(0),null);
if((function (){
var vec__23333_23347 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
}catch (e23339){if((e23339 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23339;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23339;

}
}})();
var x__21961__auto___23348 = cljs.core.nth.call(null,vec__23333_23347,(0),null);
var _QMARK_x_err__21962__auto___23349 = cljs.core.nth.call(null,vec__23333_23347,(1),null);
var have_x_QMARK___21963__auto___23350 = (_QMARK_x_err__21962__auto___23349 == null);
var vec__23336_23351 = ((have_x_QMARK___21963__auto___23350)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.string_QMARK_).call(null,x__21961__auto___23348)], null);
}catch (e23340){if((e23340 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23340;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23340;

}
}})():null);
var pass_QMARK___21964__auto___23352 = cljs.core.nth.call(null,vec__23336_23351,(0),null);
var _QMARK_pred_err__21965__auto___23353 = cljs.core.nth.call(null,vec__23336_23351,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto___23352)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s","s",-948495851,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___21963__auto___23350)?x__21961__auto___23348:_QMARK_x_err__21962__auto___23349),_QMARK_pred_err__21965__auto___23353);
}

return true;
})()
){
} else {
throw (new Error("Assert failed: (have? string? s)"));
}

var vec__23341 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__23341,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__23341,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq23326){
var G__23327 = cljs.core.first.call(null,seq23326);
var seq23326__$1 = cljs.core.next.call(null,seq23326);
var G__23328 = cljs.core.first.call(null,seq23326__$1);
var seq23326__$2 = cljs.core.next.call(null,seq23326__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__23327,G__23328,seq23326__$2);
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
var len__7652__auto___23356 = arguments.length;
var i__7653__auto___23357 = (0);
while(true){
if((i__7653__auto___23357 < len__7652__auto___23356)){
args__7659__auto__.push((arguments[i__7653__auto___23357]));

var G__23358 = (i__7653__auto___23357 + (1));
i__7653__auto___23357 = G__23358;
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

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq23354){
var G__23355 = cljs.core.first.call(null,seq23354);
var seq23354__$1 = cljs.core.next.call(null,seq23354);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__23355,seq23354__$1);
});

/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 *   interposition.
 */
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23360 = arguments.length;
var i__7653__auto___23361 = (0);
while(true){
if((i__7653__auto___23361 < len__7652__auto___23360)){
args__7659__auto__.push((arguments[i__7653__auto___23361]));

var G__23362 = (i__7653__auto___23361 + (1));
i__7653__auto___23361 = G__23362;
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

taoensso.encore.path.cljs$lang$applyTo = (function (seq23359){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23359));
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
var args23363 = [];
var len__7652__auto___23366 = arguments.length;
var i__7653__auto___23367 = (0);
while(true){
if((i__7653__auto___23367 < len__7652__auto___23366)){
args23363.push((arguments[i__7653__auto___23367]));

var G__23368 = (i__7653__auto___23367 + (1));
i__7653__auto___23367 = G__23368;
continue;
} else {
}
break;
}

var G__23365 = args23363.length;
switch (G__23365) {
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23363.length)].join('')));

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
var len__7652__auto___23374 = arguments.length;
var i__7653__auto___23375 = (0);
while(true){
if((i__7653__auto___23375 < len__7652__auto___23374)){
args__7659__auto__.push((arguments[i__7653__auto___23375]));

var G__23376 = (i__7653__auto___23375 + (1));
i__7653__auto___23375 = G__23376;
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
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (p1__23370_SHARP_){
if(cljs.core.truth_(p1__23370_SHARP_)){
return p1__23370_SHARP_;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq23371){
var G__23372 = cljs.core.first.call(null,seq23371);
var seq23371__$1 = cljs.core.next.call(null,seq23371);
var G__23373 = cljs.core.first.call(null,seq23371__$1);
var seq23371__$2 = cljs.core.next.call(null,seq23371__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__23372,G__23373,seq23371__$2);
});

/**
 * Like `clojure.core/memoize` but:
 *  * Uses delays to prevent race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` option.
 *  * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 *  * Supports cache size limit & gc with `cache-size` option.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args23379 = [];
var len__7652__auto___23456 = arguments.length;
var i__7653__auto___23457 = (0);
while(true){
if((i__7653__auto___23457 < len__7652__auto___23456)){
args23379.push((arguments[i__7653__auto___23457]));

var G__23458 = (i__7653__auto___23457 + (1));
i__7653__auto___23457 = G__23458;
continue;
} else {
}
break;
}

var G__23381 = args23379.length;
switch (G__23381) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23379.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__23460__delegate = function (p__23382){
var vec__23383 = p__23382;
var seq__23384 = cljs.core.seq.call(null,vec__23383);
var first__23385 = cljs.core.first.call(null,seq__23384);
var seq__23384__$1 = cljs.core.next.call(null,seq__23384);
var arg1 = first__23385;
var argn = seq__23384__$1;
var args = vec__23383;
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
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,vec__23383,seq__23384,first__23385,seq__23384__$1,arg1,argn,args,cache){
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
return (new cljs.core.Delay(((function (fresh_QMARK_,args__$1,vec__23383,seq__23384,first__23385,seq__23384__$1,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,vec__23383,seq__23384,first__23385,seq__23384__$1,arg1,argn,args,cache))
,null));
}
});})(fresh_QMARK_,args__$1,vec__23383,seq__23384,first__23385,seq__23384__$1,arg1,argn,args,cache))
));
}
};
var G__23460 = function (var_args){
var p__23382 = null;
if (arguments.length > 0) {
var G__23461__i = 0, G__23461__a = new Array(arguments.length -  0);
while (G__23461__i < G__23461__a.length) {G__23461__a[G__23461__i] = arguments[G__23461__i + 0]; ++G__23461__i;}
  p__23382 = new cljs.core.IndexedSeq(G__23461__a,0);
} 
return G__23460__delegate.call(this,p__23382);};
G__23460.cljs$lang$maxFixedArity = 0;
G__23460.cljs$lang$applyTo = (function (arglist__23462){
var p__23382 = cljs.core.seq(arglist__23462);
return G__23460__delegate(p__23382);
});
G__23460.cljs$core$IFn$_invoke$arity$variadic = G__23460__delegate;
return G__23460;
})()
;
;})(cache))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var vec__23386_23463 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttl_ms], null);
}catch (e23392){if((e23392 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23392;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23392;

}
}})();
var x__21961__auto___23464 = cljs.core.nth.call(null,vec__23386_23463,(0),null);
var _QMARK_x_err__21962__auto___23465 = cljs.core.nth.call(null,vec__23386_23463,(1),null);
var have_x_QMARK___21963__auto___23466 = (_QMARK_x_err__21962__auto___23465 == null);
var vec__23389_23467 = ((have_x_QMARK___21963__auto___23466)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null)).call(null,x__21961__auto___23464)], null);
}catch (e23393){if((e23393 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23393;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23393;

}
}})():null);
var pass_QMARK___21964__auto___23468 = cljs.core.nth.call(null,vec__23389_23467,(0),null);
var _QMARK_pred_err__21965__auto___23469 = cljs.core.nth.call(null,vec__23389_23467,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto___23468)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null)),x__7411__auto__);
})(),((have_x_QMARK___21963__auto___23466)?x__21961__auto___23464:_QMARK_x_err__21962__auto___23465),_QMARK_pred_err__21965__auto___23469);
}


var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__23470__delegate = function (p__23394){
var vec__23395 = p__23394;
var seq__23396 = cljs.core.seq.call(null,vec__23395);
var first__23397 = cljs.core.first.call(null,seq__23396);
var seq__23396__$1 = cljs.core.next.call(null,seq__23396);
var arg1 = first__23397;
var argn = seq__23396__$1;
var args = vec__23395;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.gc_now_QMARK_.call(null))){
var instant_23471 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,cache,((function (instant_23471,vec__23395,seq__23396,first__23397,seq__23396__$1,arg1,argn,args,cache){
return (function (m){
return cljs.core.reduce_kv.call(null,((function (instant_23471,vec__23395,seq__23396,first__23397,seq__23396__$1,arg1,argn,args,cache){
return (function (m_STAR_,k,p__23398){
var vec__23399 = p__23398;
var dv = cljs.core.nth.call(null,vec__23399,(0),null);
var udt = cljs.core.nth.call(null,vec__23399,(1),null);
var cv = vec__23399;
if(((instant_23471 - udt) > ttl_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,k,cv);
}
});})(instant_23471,vec__23395,seq__23396,first__23397,seq__23396__$1,arg1,argn,args,cache))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m));
});})(instant_23471,vec__23395,seq__23396,first__23397,seq__23396__$1,arg1,argn,args,cache))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__23402 = taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__23395,seq__23396,first__23397,seq__23396__$1,arg1,argn,args,cache){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__6565__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__6565__auto__)){
var and__6565__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__6565__auto____$1){
var vec__23408 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__23408,(0),null);
var udt = cljs.core.nth.call(null,vec__23408,(1),null);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__23395,seq__23396,first__23397,seq__23396__$1,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__23395,seq__23396,first__23397,seq__23396__$1,arg1,argn,args,cache))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__23395,seq__23396,first__23397,seq__23396__$1,arg1,argn,args,cache))
);
var dv = cljs.core.nth.call(null,vec__23402,(0),null);
return cljs.core.deref.call(null,dv);
}
};
var G__23470 = function (var_args){
var p__23394 = null;
if (arguments.length > 0) {
var G__23472__i = 0, G__23472__a = new Array(arguments.length -  0);
while (G__23472__i < G__23472__a.length) {G__23472__a[G__23472__i] = arguments[G__23472__i + 0]; ++G__23472__i;}
  p__23394 = new cljs.core.IndexedSeq(G__23472__a,0);
} 
return G__23470__delegate.call(this,p__23394);};
G__23470.cljs$lang$maxFixedArity = 0;
G__23470.cljs$lang$applyTo = (function (arglist__23473){
var p__23394 = cljs.core.seq(arglist__23473);
return G__23470__delegate(p__23394);
});
G__23470.cljs$core$IFn$_invoke$arity$variadic = G__23470__delegate;
return G__23470;
})()
;
;})(cache))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var vec__23411_23474 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttl_ms], null);
}catch (e23417){if((e23417 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23417;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23417;

}
}})();
var x__21961__auto___23475 = cljs.core.nth.call(null,vec__23411_23474,(0),null);
var _QMARK_x_err__21962__auto___23476 = cljs.core.nth.call(null,vec__23411_23474,(1),null);
var have_x_QMARK___21963__auto___23477 = (_QMARK_x_err__21962__auto___23476 == null);
var vec__23414_23478 = ((have_x_QMARK___21963__auto___23477)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null)).call(null,x__21961__auto___23475)], null);
}catch (e23418){if((e23418 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23418;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23418;

}
}})():null);
var pass_QMARK___21964__auto___23479 = cljs.core.nth.call(null,vec__23414_23478,(0),null);
var _QMARK_pred_err__21965__auto___23480 = cljs.core.nth.call(null,vec__23414_23478,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto___23479)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null)),x__7411__auto__);
})(),((have_x_QMARK___21963__auto___23477)?x__21961__auto___23475:_QMARK_x_err__21962__auto___23476),_QMARK_pred_err__21965__auto___23480);
}


var vec__23419_23481 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cache_size], null);
}catch (e23425){if((e23425 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23425;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23425;

}
}})();
var x__21961__auto___23482 = cljs.core.nth.call(null,vec__23419_23481,(0),null);
var _QMARK_x_err__21962__auto___23483 = cljs.core.nth.call(null,vec__23419_23481,(1),null);
var have_x_QMARK___21963__auto___23484 = (_QMARK_x_err__21962__auto___23483 == null);
var vec__23422_23485 = ((have_x_QMARK___21963__auto___23484)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.pos_int_QMARK_).call(null,x__21961__auto___23482)], null);
}catch (e23426){if((e23426 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23426;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23426;

}
}})():null);
var pass_QMARK___21964__auto___23486 = cljs.core.nth.call(null,vec__23422_23485,(0),null);
var _QMARK_pred_err__21965__auto___23487 = cljs.core.nth.call(null,vec__23422_23485,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto___23486)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cache-size","cache-size",1049002054,null)),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)),((have_x_QMARK___21963__auto___23484)?x__21961__auto___23482:_QMARK_x_err__21962__auto___23483),_QMARK_pred_err__21965__auto___23487);
}


var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
return ((function (state){
return (function() { 
var G__23488__delegate = function (p__23427){
var vec__23428 = p__23427;
var seq__23429 = cljs.core.seq.call(null,vec__23428);
var first__23430 = cljs.core.first.call(null,seq__23429);
var seq__23429__$1 = cljs.core.next.call(null,seq__23429);
var arg1 = first__23430;
var argn = seq__23429__$1;
var args = vec__23428;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,argn);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.gc_now_QMARK_.call(null))){
var instant_23489 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_23489,vec__23428,seq__23429,first__23430,seq__23429__$1,arg1,argn,args,state){
return (function (m){
var m_STAR_ = cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976));
var m_STAR___$1 = ((cljs.core.not.call(null,ttl_ms))?m_STAR_:cljs.core.reduce_kv.call(null,((function (m_STAR_,instant_23489,vec__23428,seq__23429,first__23430,seq__23429__$1,arg1,argn,args,state){
return (function (m_STAR___$1,k,p__23431){
var vec__23432 = p__23431;
var dv = cljs.core.nth.call(null,vec__23432,(0),null);
var udt = cljs.core.nth.call(null,vec__23432,(1),null);
var _ = cljs.core.nth.call(null,vec__23432,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__23432,(3),null);
var cv = vec__23432;
if(((instant_23489 - udt) > ttl_ms)){
return m_STAR___$1;
} else {
return cljs.core.assoc.call(null,m_STAR___$1,k,cv);
}
});})(m_STAR_,instant_23489,vec__23428,seq__23429,first__23430,seq__23429__$1,arg1,argn,args,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m_STAR_)));
var n_to_prune = (cljs.core.count.call(null,m_STAR___$1) - cache_size);
var m_STAR___$2 = ((!((n_to_prune > (0))))?m_STAR___$1:cljs.core.apply.call(null,cljs.core.dissoc,m_STAR___$1,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_23489,vec__23428,seq__23429,first__23430,seq__23429__$1,arg1,argn,args,state){
return (function (p1__23378_SHARP_){
return cljs.core.nth.call(null,p1__23378_SHARP_,(1));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_23489,vec__23428,seq__23429,first__23430,seq__23429__$1,arg1,argn,args,state))
,cljs.core.take.call(null,n_to_prune,cljs.core.sort_by.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_23489,vec__23428,seq__23429,first__23430,seq__23429__$1,arg1,argn,args,state){
return (function (p1__23377_SHARP_){
return cljs.core.nth.call(null,p1__23377_SHARP_,(0));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_23489,vec__23428,seq__23429,first__23430,seq__23429__$1,arg1,argn,args,state))
,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_23489,vec__23428,seq__23429,first__23430,seq__23429__$1,arg1,argn,args,state){
return (function (k){
var vec__23435 = m_STAR___$1.call(null,k);
var _ = cljs.core.nth.call(null,vec__23435,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23435,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__23435,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__23435,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tick_lru + tick_lfu),k], null);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_23489,vec__23428,seq__23429,first__23430,seq__23429__$1,arg1,argn,args,state))
,cljs.core.keys.call(null,m_STAR___$1)))))));
return cljs.core.assoc.call(null,m_STAR___$2,new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(m));
});})(instant_23489,vec__23428,seq__23429,first__23430,seq__23429__$1,arg1,argn,args,state))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var _QMARK_instant = (cljs.core.truth_(ttl_ms)?taoensso.encore.now_udt.call(null):null);
var tick_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var vec__23438 = taoensso.encore.swap_val_BANG_.call(null,state,args__$1,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23428,seq__23429,first__23430,seq__23429__$1,arg1,argn,args,state){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__6565__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__6565__auto__)){
var and__6565__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__6565__auto____$1){
var or__6577__auto__ = (_QMARK_instant == null);
if(or__6577__auto__){
return or__6577__auto__;
} else {
var vec__23450 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__23450,(0),null);
var udt = cljs.core.nth.call(null,vec__23450,(1),null);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23428,seq__23429,first__23430,seq__23429__$1,arg1,argn,args,state){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23428,seq__23429,first__23430,seq__23429__$1,arg1,argn,args,state))
,null)),_QMARK_instant,tick_SINGLEQUOTE_,(1)], null);
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23428,seq__23429,first__23430,seq__23429__$1,arg1,argn,args,state))
);
var dv = cljs.core.nth.call(null,vec__23438,(0),null);
cljs.core.swap_BANG_.call(null,state,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23438,dv,vec__23428,seq__23429,first__23430,seq__23429__$1,arg1,argn,args,state){
return (function (m){
var temp__4657__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__23453 = temp__4657__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__23453,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__23453,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__23453,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__23453,(3),null);
var cv = vec__23453;
return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick_SINGLEQUOTE_ + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick_SINGLEQUOTE_,(tick_lfu + (1))], null)], true, false));
} else {
return null;
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23438,dv,vec__23428,seq__23429,first__23430,seq__23429__$1,arg1,argn,args,state))
);

return cljs.core.deref.call(null,dv);
}
};
var G__23488 = function (var_args){
var p__23427 = null;
if (arguments.length > 0) {
var G__23490__i = 0, G__23490__a = new Array(arguments.length -  0);
while (G__23490__i < G__23490__a.length) {G__23490__a[G__23490__i] = arguments[G__23490__i + 0]; ++G__23490__i;}
  p__23427 = new cljs.core.IndexedSeq(G__23490__a,0);
} 
return G__23488__delegate.call(this,p__23427);};
G__23488.cljs$lang$maxFixedArity = 0;
G__23488.cljs$lang$applyTo = (function (arglist__23491){
var p__23427 = cljs.core.seq(arglist__23491);
return G__23488__delegate(p__23427);
});
G__23488.cljs$core$IFn$_invoke$arity$variadic = G__23488__delegate;
return G__23488;
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
var G__23492__delegate = function (args){
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
var G__23492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23493__i = 0, G__23493__a = new Array(arguments.length -  0);
while (G__23493__i < G__23493__a.length) {G__23493__a[G__23493__i] = arguments[G__23493__i + 0]; ++G__23493__i;}
  args = new cljs.core.IndexedSeq(G__23493__a,0);
} 
return G__23492__delegate.call(this,args);};
G__23492.cljs$lang$maxFixedArity = 0;
G__23492.cljs$lang$applyTo = (function (arglist__23494){
var args = cljs.core.seq(arglist__23494);
return G__23492__delegate(args);
});
G__23492.cljs$core$IFn$_invoke$arity$variadic = G__23492__delegate;
return G__23492;
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
return (function (p__23582){
var vec__23583 = p__23582;
var _ = cljs.core.nth.call(null,vec__23583,(0),null);
var win_ms = cljs.core.nth.call(null,vec__23583,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__23583,(2),null);
var spec = vec__23583;
return win_ms;
});})(vspecs,vstates_))
,vspecs));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__23586){
var vec__23587 = p__23586;
var _ = cljs.core.nth.call(null,vec__23587,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23587,(1),null);
var id = cljs.core.nth.call(null,vec__23587,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error("Assert failed: (or (zero? nid-specs) (= nid-specs nspecs))"))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__23590){
var vec__23630 = p__23590;
var req_id = cljs.core.nth.call(null,vec__23630,(0),null);
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__6565__auto__ = req_id;
if(cljs.core.truth_(and__6565__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__6565__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (instant,vec__23630,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
var m__$1 = taoensso.encore.clj1098.call(null,m);
return cljs.core.reduce_kv.call(null,((function (m__$1,instant,vec__23630,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (m__$1,instant,vec__23630,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__23637){
var vec__23638 = p__23637;
var ___$1 = cljs.core.nth.call(null,vec__23638,(0),null);
var udt = cljs.core.nth.call(null,vec__23638,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__23638,(2),null);
var x__6908__auto__ = acc;
var y__6909__auto__ = udt;
return ((x__6908__auto__ > y__6909__auto__) ? x__6908__auto__ : y__6909__auto__);
});})(m__$1,instant,vec__23630,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(m__$1,instant,vec__23630,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m__$1,m__$1);
});})(instant,vec__23630,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (instant,vec__23630,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not.call(null,_QMARK_vstate)){
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
} else {
var vec__23641 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__23644 = in_vspecs;
var seq__23645 = cljs.core.seq.call(null,vec__23644);
var first__23646 = cljs.core.first.call(null,seq__23645);
var seq__23645__$1 = cljs.core.next.call(null,seq__23645);
var vec__23647 = first__23646;
var ncalls_limit = cljs.core.nth.call(null,vec__23647,(0),null);
var win_ms = cljs.core.nth.call(null,vec__23647,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__23647,(2),null);
var next_in_vspecs = seq__23645__$1;
var vec__23650 = in_vstate;
var seq__23651 = cljs.core.seq.call(null,vec__23650);
var first__23652 = cljs.core.first.call(null,seq__23651);
var seq__23651__$1 = cljs.core.next.call(null,seq__23651);
var vec__23653 = first__23652;
var ncalls = cljs.core.nth.call(null,vec__23653,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__23653,(1),null);
var next_in_vstate = seq__23651__$1;
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__6577__auto__ = (_QMARK_worst_limit_offence == null);
if(or__6577__auto__){
return or__6577__auto__;
} else {
var vec__23659 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__23659,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23659,(1),null);
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
var G__23669 = next_in_vspecs;
var G__23670 = next_in_vstate;
var G__23671 = new_out_vstate;
var G__23672 = new__QMARK_worst_limit_offence;
in_vspecs = G__23669;
in_vstate = G__23670;
out_vstate = G__23671;
_QMARK_worst_limit_offence = G__23672;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__23641,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__23641,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = ((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__23641,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__23630,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__23662){
var vec__23663 = p__23662;
var ncalls = cljs.core.nth.call(null,vec__23663,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__23663,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__23641,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__23630,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets));
var result = (function (){var temp__4657__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4657__auto__)){
var wlo = temp__4657__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__23666 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__23666,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23666,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
}
});})(instant,vec__23630,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__23590 = null;
if (arguments.length > 0) {
var G__23673__i = 0, G__23673__a = new Array(arguments.length -  0);
while (G__23673__i < G__23673__a.length) {G__23673__a[G__23673__i] = arguments[G__23673__i + 0]; ++G__23673__i;}
  p__23590 = new cljs.core.IndexedSeq(G__23673__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__23590);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__23674){
var p__23590 = cljs.core.seq(arglist__23674);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__23590);
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
var G__23675__delegate = function (args){
var temp__4655__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var backoff = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__23675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23676__i = 0, G__23676__a = new Array(arguments.length -  0);
while (G__23676__i < G__23676__a.length) {G__23676__a[G__23676__i] = arguments[G__23676__i + 0]; ++G__23676__i;}
  args = new cljs.core.IndexedSeq(G__23676__a,0);
} 
return G__23675__delegate.call(this,args);};
G__23675.cljs$lang$maxFixedArity = 0;
G__23675.cljs$lang$applyTo = (function (arglist__23677){
var args = cljs.core.seq(arglist__23677);
return G__23675__delegate(args);
});
G__23675.cljs$core$IFn$_invoke$arity$variadic = G__23675__delegate;
return G__23675;
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
taoensso.encore._STAR_log_fn_STAR_ = cljs.core.with_meta((function taoensso$encore$_STAR_log_fn_STAR_(p__23678){
var map__23682 = p__23678;
var map__23682__$1 = ((((!((map__23682 == null)))?((((map__23682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23682):map__23682);
var level = cljs.core.get.call(null,map__23682__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_fmt = cljs.core.get.call(null,map__23682__$1,new cljs.core.Keyword(null,"?fmt","?fmt",-1448350268));
var xs = cljs.core.get.call(null,map__23682__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
var msg_ = cljs.core.get.call(null,map__23682__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var G__23684_23722 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__23684_23722) {
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
return (scored_levels.call(null,(function (){var vec__23685 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null);
}catch (e23691){if((e23691 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23691;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23691;

}
}})();
var x__21961__auto__ = cljs.core.nth.call(null,vec__23685,(0),null);
var _QMARK_x_err__21962__auto__ = cljs.core.nth.call(null,vec__23685,(1),null);
var have_x_QMARK___21963__auto__ = (_QMARK_x_err__21962__auto__ == null);
var vec__23688 = ((have_x_QMARK___21963__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,valid_level_QMARK_).call(null,x__21961__auto__)], null);
}catch (e23692){if((e23692 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23692;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23692;

}
}})():null);
var pass_QMARK___21964__auto__ = cljs.core.nth.call(null,vec__23688,(0),null);
var _QMARK_pred_err__21965__auto__ = cljs.core.nth.call(null,vec__23688,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto__)){
return x__21961__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1777,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"level","level",-1363938217,null)),new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null)),((have_x_QMARK___21963__auto__)?x__21961__auto__:_QMARK_x_err__21962__auto__),_QMARK_pred_err__21965__auto__);
}
})()) >= scored_levels.call(null,(function (){var vec__23693 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_level], null);
}catch (e23699){if((e23699 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23699;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23699;

}
}})();
var x__21961__auto__ = cljs.core.nth.call(null,vec__23693,(0),null);
var _QMARK_x_err__21962__auto__ = cljs.core.nth.call(null,vec__23693,(1),null);
var have_x_QMARK___21963__auto__ = (_QMARK_x_err__21962__auto__ == null);
var vec__23696 = ((have_x_QMARK___21963__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,valid_level_QMARK_).call(null,x__21961__auto__)], null);
}catch (e23700){if((e23700 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23700;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23700;

}
}})():null);
var pass_QMARK___21964__auto__ = cljs.core.nth.call(null,vec__23696,(0),null);
var _QMARK_pred_err__21965__auto__ = cljs.core.nth.call(null,vec__23696,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto__)){
return x__21961__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1778,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"current-level","current-level",1628605637,null)),new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null)),((have_x_QMARK___21963__auto__)?x__21961__auto__:_QMARK_x_err__21962__auto__),_QMARK_pred_err__21965__auto__);
}
})()));
});
;})(ordered_levels,scored_levels,valid_level_QMARK_))
})();


taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23724 = arguments.length;
var i__7653__auto___23725 = (0);
while(true){
if((i__7653__auto___23725 < len__7652__auto___23724)){
args__7659__auto__.push((arguments[i__7653__auto___23725]));

var G__23726 = (i__7653__auto___23725 + (1));
i__7653__auto___23725 = G__23726;
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

taoensso.encore.log.cljs$lang$applyTo = (function (seq23701){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23701));
});


taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23727 = arguments.length;
var i__7653__auto___23728 = (0);
while(true){
if((i__7653__auto___23728 < len__7652__auto___23727)){
args__7659__auto__.push((arguments[i__7653__auto___23728]));

var G__23729 = (i__7653__auto___23728 + (1));
i__7653__auto___23728 = G__23729;
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

taoensso.encore.logp.cljs$lang$applyTo = (function (seq23702){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23702));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23730 = arguments.length;
var i__7653__auto___23731 = (0);
while(true){
if((i__7653__auto___23731 < len__7652__auto___23730)){
args__7659__auto__.push((arguments[i__7653__auto___23731]));

var G__23732 = (i__7653__auto___23731 + (1));
i__7653__auto___23731 = G__23732;
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

taoensso.encore.logf.cljs$lang$applyTo = (function (seq23703){
var G__23704 = cljs.core.first.call(null,seq23703);
var seq23703__$1 = cljs.core.next.call(null,seq23703);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__23704,seq23703__$1);
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23733 = arguments.length;
var i__7653__auto___23734 = (0);
while(true){
if((i__7653__auto___23734 < len__7652__auto___23733)){
args__7659__auto__.push((arguments[i__7653__auto___23734]));

var G__23735 = (i__7653__auto___23734 + (1));
i__7653__auto___23734 = G__23735;
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

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq23705){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23705));
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23736 = arguments.length;
var i__7653__auto___23737 = (0);
while(true){
if((i__7653__auto___23737 < len__7652__auto___23736)){
args__7659__auto__.push((arguments[i__7653__auto___23737]));

var G__23738 = (i__7653__auto___23737 + (1));
i__7653__auto___23737 = G__23738;
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

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq23706){
var G__23707 = cljs.core.first.call(null,seq23706);
var seq23706__$1 = cljs.core.next.call(null,seq23706);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__23707,seq23706__$1);
});


var logf_STAR__23739 = (function (level,fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_level_sufficient_QMARK_.call(null,level))){
taoensso.encore._STAR_log_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"?fmt","?fmt",-1448350268),fmt,new cljs.core.Keyword(null,"xs","xs",649443341),xs,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
return cljs.core.apply.call(null,taoensso.encore.format,fmt,xs);
}),null))], null));

return null;
} else {
return null;
}
});
taoensso.encore.tracef = ((function (logf_STAR__23739){
return (function taoensso$encore$tracef(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23740 = arguments.length;
var i__7653__auto___23741 = (0);
while(true){
if((i__7653__auto___23741 < len__7652__auto___23740)){
args__7659__auto__.push((arguments[i__7653__auto___23741]));

var G__23742 = (i__7653__auto___23741 + (1));
i__7653__auto___23741 = G__23742;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});})(logf_STAR__23739))
;

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__23739){
return (function (fmt,xs){
return logf_STAR__23739.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),fmt,xs);
});})(logf_STAR__23739))
;

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = ((function (logf_STAR__23739){
return (function (seq23708){
var G__23709 = cljs.core.first.call(null,seq23708);
var seq23708__$1 = cljs.core.next.call(null,seq23708);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__23709,seq23708__$1);
});})(logf_STAR__23739))
;


taoensso.encore.debugf = ((function (logf_STAR__23739){
return (function taoensso$encore$debugf(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23743 = arguments.length;
var i__7653__auto___23744 = (0);
while(true){
if((i__7653__auto___23744 < len__7652__auto___23743)){
args__7659__auto__.push((arguments[i__7653__auto___23744]));

var G__23745 = (i__7653__auto___23744 + (1));
i__7653__auto___23744 = G__23745;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});})(logf_STAR__23739))
;

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__23739){
return (function (fmt,xs){
return logf_STAR__23739.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),fmt,xs);
});})(logf_STAR__23739))
;

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = ((function (logf_STAR__23739){
return (function (seq23710){
var G__23711 = cljs.core.first.call(null,seq23710);
var seq23710__$1 = cljs.core.next.call(null,seq23710);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__23711,seq23710__$1);
});})(logf_STAR__23739))
;


taoensso.encore.infof = ((function (logf_STAR__23739){
return (function taoensso$encore$infof(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23746 = arguments.length;
var i__7653__auto___23747 = (0);
while(true){
if((i__7653__auto___23747 < len__7652__auto___23746)){
args__7659__auto__.push((arguments[i__7653__auto___23747]));

var G__23748 = (i__7653__auto___23747 + (1));
i__7653__auto___23747 = G__23748;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});})(logf_STAR__23739))
;

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__23739){
return (function (fmt,xs){
return logf_STAR__23739.call(null,new cljs.core.Keyword(null,"info","info",-317069002),fmt,xs);
});})(logf_STAR__23739))
;

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = ((function (logf_STAR__23739){
return (function (seq23712){
var G__23713 = cljs.core.first.call(null,seq23712);
var seq23712__$1 = cljs.core.next.call(null,seq23712);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__23713,seq23712__$1);
});})(logf_STAR__23739))
;


taoensso.encore.warnf = ((function (logf_STAR__23739){
return (function taoensso$encore$warnf(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23749 = arguments.length;
var i__7653__auto___23750 = (0);
while(true){
if((i__7653__auto___23750 < len__7652__auto___23749)){
args__7659__auto__.push((arguments[i__7653__auto___23750]));

var G__23751 = (i__7653__auto___23750 + (1));
i__7653__auto___23750 = G__23751;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});})(logf_STAR__23739))
;

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__23739){
return (function (fmt,xs){
return logf_STAR__23739.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),fmt,xs);
});})(logf_STAR__23739))
;

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = ((function (logf_STAR__23739){
return (function (seq23714){
var G__23715 = cljs.core.first.call(null,seq23714);
var seq23714__$1 = cljs.core.next.call(null,seq23714);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__23715,seq23714__$1);
});})(logf_STAR__23739))
;


taoensso.encore.errorf = ((function (logf_STAR__23739){
return (function taoensso$encore$errorf(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23752 = arguments.length;
var i__7653__auto___23753 = (0);
while(true){
if((i__7653__auto___23753 < len__7652__auto___23752)){
args__7659__auto__.push((arguments[i__7653__auto___23753]));

var G__23754 = (i__7653__auto___23753 + (1));
i__7653__auto___23753 = G__23754;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});})(logf_STAR__23739))
;

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__23739){
return (function (fmt,xs){
return logf_STAR__23739.call(null,new cljs.core.Keyword(null,"error","error",-978969032),fmt,xs);
});})(logf_STAR__23739))
;

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = ((function (logf_STAR__23739){
return (function (seq23716){
var G__23717 = cljs.core.first.call(null,seq23716);
var seq23716__$1 = cljs.core.next.call(null,seq23716);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__23717,seq23716__$1);
});})(logf_STAR__23739))
;


taoensso.encore.fatalf = ((function (logf_STAR__23739){
return (function taoensso$encore$fatalf(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23755 = arguments.length;
var i__7653__auto___23756 = (0);
while(true){
if((i__7653__auto___23756 < len__7652__auto___23755)){
args__7659__auto__.push((arguments[i__7653__auto___23756]));

var G__23757 = (i__7653__auto___23756 + (1));
i__7653__auto___23756 = G__23757;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});})(logf_STAR__23739))
;

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__23739){
return (function (fmt,xs){
return logf_STAR__23739.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888),fmt,xs);
});})(logf_STAR__23739))
;

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = ((function (logf_STAR__23739){
return (function (seq23718){
var G__23719 = cljs.core.first.call(null,seq23718);
var seq23718__$1 = cljs.core.next.call(null,seq23718);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__23719,seq23718__$1);
});})(logf_STAR__23739))
;


taoensso.encore.reportf = ((function (logf_STAR__23739){
return (function taoensso$encore$reportf(var_args){
var args__7659__auto__ = [];
var len__7652__auto___23758 = arguments.length;
var i__7653__auto___23759 = (0);
while(true){
if((i__7653__auto___23759 < len__7652__auto___23758)){
args__7659__auto__.push((arguments[i__7653__auto___23759]));

var G__23760 = (i__7653__auto___23759 + (1));
i__7653__auto___23759 = G__23760;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});})(logf_STAR__23739))
;

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__23739){
return (function (fmt,xs){
return logf_STAR__23739.call(null,new cljs.core.Keyword(null,"report","report",1394055010),fmt,xs);
});})(logf_STAR__23739))
;

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = ((function (logf_STAR__23739){
return (function (seq23720){
var G__23721 = cljs.core.first.call(null,seq23720);
var seq23720__$1 = cljs.core.next.call(null,seq23720);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__23721,seq23720__$1);
});})(logf_STAR__23739))
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
var vec__23770_23779 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [params], null);
}catch (e23776){if((e23776 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23776;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23776;

}
}})();
var x__21961__auto___23780 = cljs.core.nth.call(null,vec__23770_23779,(0),null);
var _QMARK_x_err__21962__auto___23781 = cljs.core.nth.call(null,vec__23770_23779,(1),null);
var have_x_QMARK___21963__auto___23782 = (_QMARK_x_err__21962__auto___23781 == null);
var vec__23773_23783 = ((have_x_QMARK___21963__auto___23782)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null)).call(null,x__21961__auto___23780)], null);
}catch (e23777){if((e23777 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23777;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23777;

}
}})():null);
var pass_QMARK___21964__auto___23784 = cljs.core.nth.call(null,vec__23773_23783,(0),null);
var _QMARK_pred_err__21965__auto___23785 = cljs.core.nth.call(null,vec__23773_23783,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto___23784)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"params","params",-1943919534,null)),x__7411__auto__);
})(),((have_x_QMARK___21963__auto___23782)?x__21961__auto___23780:_QMARK_x_err__21962__auto___23781),_QMARK_pred_err__21965__auto___23785);
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
var G__23778 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__23778) {
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
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__23789,callback){
var map__23817 = p__23789;
var map__23817__$1 = ((((!((map__23817 == null)))?((((map__23817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23817):map__23817);
var opts = map__23817__$1;
var method = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var progress_fn = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
if((function (){
var vec__23819_23844 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeout_ms], null);
}catch (e23825){if((e23825 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23825;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23825;

}
}})();
var x__21961__auto___23845 = cljs.core.nth.call(null,vec__23819_23844,(0),null);
var _QMARK_x_err__21962__auto___23846 = cljs.core.nth.call(null,vec__23819_23844,(1),null);
var have_x_QMARK___21963__auto___23847 = (_QMARK_x_err__21962__auto___23846 == null);
var vec__23822_23848 = ((have_x_QMARK___21963__auto___23847)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,x__21961__auto___23845)], null);
}catch (e23826){if((e23826 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23826;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23826;

}
}})():null);
var pass_QMARK___21964__auto___23849 = cljs.core.nth.call(null,vec__23822_23848,(0),null);
var _QMARK_pred_err__21965__auto___23850 = cljs.core.nth.call(null,vec__23822_23848,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto___23849)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,(function (){var x__7411__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null)),x__7411__auto__);
})(),((have_x_QMARK___21963__auto___23847)?x__21961__auto___23845:_QMARK_x_err__21962__auto___23846),_QMARK_pred_err__21965__auto___23850);
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
var method_STAR_ = (function (){var G__23831 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__23831) {
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
var vec__23828 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__23828,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__23828,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__23832_23852 = xhr;
goog.events.listenOnce(G__23832_23852,goog.net.EventType.READY,((function (G__23832_23852,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__23828,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__23817,map__23817__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__23832_23852,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__23828,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__23817,map__23817__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn))
);

goog.events.listenOnce(G__23832_23852,goog.net.EventType.COMPLETE,((function (G__23832_23852,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__23828,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__23817,map__23817__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__23838 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__23832_23852,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__23828,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__23817,map__23817__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn){
return (function (p1__23788_SHARP_,p2__23787_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__23787_SHARP_,p1__23788_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__23832_23852,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__23828,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__23817,map__23817__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn))
;
var expr__23839 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__23838.call(null,"/edn",expr__23839))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__23838.call(null,"/json",expr__23839))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__23838.call(null,"/xml",expr__23839))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__23838.call(null,"/html",expr__23839))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__23842 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__23842) {
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
}catch (e23841){var e = e23841;
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
});})(G__23832_23852,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__23828,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__23817,map__23817__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn))
);


var temp__4657__auto___23854 = progress_fn;
if(cljs.core.truth_(temp__4657__auto___23854)){
var pf_23855 = temp__4657__auto___23854;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_23855,temp__4657__auto___23854,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__23828,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__23817,map__23817__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn){
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
return pf_23855.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_23855,temp__4657__auto___23854,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__23828,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__23817,map__23817__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn))
);
} else {
}

var G__23843_23856 = xhr;
G__23843_23856.setTimeoutInterval((function (){var or__6577__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (0);
}
})());

G__23843_23856.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);


return xhr;
}catch (e23827){if((e23827 instanceof Error)){
var e = e23827;
taoensso.encore.errorf.call(null,"`ajax-lite` error: %s",e);

cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e23827;

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
var len__7652__auto___23863 = arguments.length;
var i__7653__auto___23864 = (0);
while(true){
if((i__7653__auto___23864 < len__7652__auto___23863)){
args__7659__auto__.push((arguments[i__7653__auto___23864]));

var G__23865 = (i__7653__auto___23864 + (1));
i__7653__auto___23864 = G__23865;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__23859){
var vec__23860 = p__23859;
var encoding = cljs.core.nth.call(null,vec__23860,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq23857){
var G__23858 = cljs.core.first.call(null,seq23857);
var seq23857__$1 = cljs.core.next.call(null,seq23857);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__23858,seq23857__$1);
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
return (function taoensso$encore$format_query_string_$_iter__23882(s__23883){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__23883__$1 = s__23883;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23883__$1);
if(temp__4657__auto__){
var s__23883__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23883__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__23883__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__23885 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__23884 = (0);
while(true){
if((i__23884 < size__7356__auto__)){
var vec__23892 = cljs.core._nth.call(null,c__7355__auto__,i__23884);
var k = cljs.core.nth.call(null,vec__23892,(0),null);
var v = cljs.core.nth.call(null,vec__23892,(1),null);
cljs.core.chunk_append.call(null,b__23885,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__6577__auto__ = cljs.core.seq.call(null,v);
if(or__6577__auto__){
return or__6577__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__23898 = (i__23884 + (1));
i__23884 = G__23898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23885),taoensso$encore$format_query_string_$_iter__23882.call(null,cljs.core.chunk_rest.call(null,s__23883__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23885),null);
}
} else {
var vec__23895 = cljs.core.first.call(null,s__23883__$2);
var k = cljs.core.nth.call(null,vec__23895,(0),null);
var v = cljs.core.nth.call(null,vec__23895,(1),null);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__6577__auto__ = cljs.core.seq.call(null,v);
if(or__6577__auto__){
return or__6577__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__23882.call(null,cljs.core.rest.call(null,s__23883__$2)));
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
var len__7652__auto___23916 = arguments.length;
var i__7653__auto___23917 = (0);
while(true){
if((i__7653__auto___23917 < len__7652__auto___23916)){
args__7659__auto__.push((arguments[i__7653__auto___23917]));

var G__23918 = (i__7653__auto___23917 + (1));
i__7653__auto___23917 = G__23918;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__23901){
var vec__23902 = p__23901;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__23902,(0),null);
var encoding = cljs.core.nth.call(null,vec__23902,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__23902,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4655__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__23905 = temp__4655__auto__;
var k = cljs.core.nth.call(null,vec__23905,(0),null);
var v = cljs.core.nth.call(null,vec__23905,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__23902,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.not.call(null,keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map.call(null,m);
}
}
})());
if((function (){
var vec__23908_23919 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_PERCENT_], null);
}catch (e23914){if((e23914 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23914;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23914;

}
}})();
var x__21961__auto___23920 = cljs.core.nth.call(null,vec__23908_23919,(0),null);
var _QMARK_x_err__21962__auto___23921 = cljs.core.nth.call(null,vec__23908_23919,(1),null);
var have_x_QMARK___21963__auto___23922 = (_QMARK_x_err__21962__auto___23921 == null);
var vec__23911_23923 = ((have_x_QMARK___21963__auto___23922)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.map_QMARK_).call(null,x__21961__auto___23920)], null);
}catch (e23915){if((e23915 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23915;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23915;

}
}})():null);
var pass_QMARK___21964__auto___23924 = cljs.core.nth.call(null,vec__23911_23923,(0),null);
var _QMARK_pred_err__21965__auto___23925 = cljs.core.nth.call(null,vec__23911_23923,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto___23924)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),((have_x_QMARK___21963__auto___23922)?x__21961__auto___23920:_QMARK_x_err__21962__auto___23921),_QMARK_pred_err__21965__auto___23925);
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

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq23899){
var G__23900 = cljs.core.first.call(null,seq23899);
var seq23899__$1 = cljs.core.next.call(null,seq23899);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__23900,seq23899__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__23929 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__23929,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__23929,(1),null);
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
var len__7652__auto___23938 = arguments.length;
var i__7653__auto___23939 = (0);
while(true){
if((i__7653__auto___23939 < len__7652__auto___23938)){
args__7659__auto__.push((arguments[i__7653__auto___23939]));

var G__23940 = (i__7653__auto___23939 + (1));
i__7653__auto___23939 = G__23940;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__23934){
var vec__23935 = p__23934;
var nattempt = cljs.core.nth.call(null,vec__23935,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__6577__auto__ = nattempt;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq23932){
var G__23933 = cljs.core.first.call(null,seq23932);
var seq23932__$1 = cljs.core.next.call(null,seq23932);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23933,seq23932__$1);
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
var vec__23949 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_bool.call(null,x)], null);
}catch (e23955){if((e23955 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23955;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23955;

}
}})();
var x__21961__auto__ = cljs.core.nth.call(null,vec__23949,(0),null);
var _QMARK_x_err__21962__auto__ = cljs.core.nth.call(null,vec__23949,(1),null);
var have_x_QMARK___21963__auto__ = (_QMARK_x_err__21962__auto__ == null);
var vec__23952 = ((have_x_QMARK___21963__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__21961__auto__)], null);
}catch (e23956){if((e23956 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23956;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23956;

}
}})():null);
var pass_QMARK___21964__auto__ = cljs.core.nth.call(null,vec__23952,(0),null);
var _QMARK_pred_err__21965__auto__ = cljs.core.nth.call(null,vec__23952,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto__)){
return x__21961__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",2137,cljs.core._conj.call(null,(function (){var x__7411__auto__ = cljs.core.list(new cljs.core.Symbol(null,"as-?bool","as-?bool",1645711161,null),new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto__);
})(),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___21963__auto__)?x__21961__auto__:_QMARK_x_err__21962__auto__),_QMARK_pred_err__21965__auto__);
}
} else {
return null;
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
if(cljs.core.truth_(x)){
var vec__23965 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_int.call(null,x)], null);
}catch (e23971){if((e23971 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23971;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23971;

}
}})();
var x__21961__auto__ = cljs.core.nth.call(null,vec__23965,(0),null);
var _QMARK_x_err__21962__auto__ = cljs.core.nth.call(null,vec__23965,(1),null);
var have_x_QMARK___21963__auto__ = (_QMARK_x_err__21962__auto__ == null);
var vec__23968 = ((have_x_QMARK___21963__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__21961__auto__)], null);
}catch (e23972){if((e23972 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23972;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23972;

}
}})():null);
var pass_QMARK___21964__auto__ = cljs.core.nth.call(null,vec__23968,(0),null);
var _QMARK_pred_err__21965__auto__ = cljs.core.nth.call(null,vec__23968,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto__)){
return x__21961__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",2138,cljs.core._conj.call(null,(function (){var x__7411__auto__ = cljs.core.list(new cljs.core.Symbol(null,"as-?int","as-?int",2107097360,null),new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto__);
})(),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___21963__auto__)?x__21961__auto__:_QMARK_x_err__21962__auto__),_QMARK_pred_err__21965__auto__);
}
} else {
return null;
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
if(cljs.core.truth_(x)){
var vec__23981 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_float.call(null,x)], null);
}catch (e23987){if((e23987 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23987;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23987;

}
}})();
var x__21961__auto__ = cljs.core.nth.call(null,vec__23981,(0),null);
var _QMARK_x_err__21962__auto__ = cljs.core.nth.call(null,vec__23981,(1),null);
var have_x_QMARK___21963__auto__ = (_QMARK_x_err__21962__auto__ == null);
var vec__23984 = ((have_x_QMARK___21963__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__21961__auto__)], null);
}catch (e23988){if((e23988 instanceof java.lang.Throwable)){
var t__21845__auto__ = e23988;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__21845__auto__], null);
} else {
throw e23988;

}
}})():null);
var pass_QMARK___21964__auto__ = cljs.core.nth.call(null,vec__23984,(0),null);
var _QMARK_pred_err__21965__auto__ = cljs.core.nth.call(null,vec__23984,(1),null);
if(cljs.core.truth_(pass_QMARK___21964__auto__)){
return x__21961__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",2139,cljs.core._conj.call(null,(function (){var x__7411__auto__ = cljs.core.list(new cljs.core.Symbol(null,"as-?float","as-?float",2124831706,null),new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto__);
})(),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___21963__auto__)?x__21961__auto__:_QMARK_x_err__21962__auto__),_QMARK_pred_err__21965__auto__);
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
var G__23989__delegate = function (args){
var temp__4655__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var backoff_ms = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__23989 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23990__i = 0, G__23990__a = new Array(arguments.length -  0);
while (G__23990__i < G__23990__a.length) {G__23990__a[G__23990__i] = arguments[G__23990__i + 0]; ++G__23990__i;}
  args = new cljs.core.IndexedSeq(G__23990__a,0);
} 
return G__23989__delegate.call(this,args);};
G__23989.cljs$lang$maxFixedArity = 0;
G__23989.cljs$lang$applyTo = (function (arglist__23991){
var args = cljs.core.seq(arglist__23991);
return G__23989__delegate(args);
});
G__23989.cljs$core$IFn$_invoke$arity$variadic = G__23989__delegate;
return G__23989;
})()
;
;})(rl))
});

//# sourceMappingURL=encore.js.map