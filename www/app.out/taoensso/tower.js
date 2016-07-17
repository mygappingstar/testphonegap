// Compiled by ClojureScript 1.9.93 {}
goog.provide('taoensso.tower');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('taoensso.encore');
/**
 * "en_gb-var1" -> :en-gb-var1, etc.
 */
taoensso.tower.kw_locale = cljs.core.memoize.call(null,(function() { 
var G__25660__delegate = function (_QMARK_loc,p__25656){
var vec__25657 = p__25656;
var lang_only_QMARK_ = cljs.core.nth.call(null,vec__25657,(0),null);
var loc_name = cljs.core.name.call(null,(function (){var or__6577__auto__ = _QMARK_loc;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return new cljs.core.Keyword(null,"nil","nil",99600501);
}
})());
var loc_name__$1 = clojure.string.replace.call(null,loc_name,"_","-");
var loc_name__$2 = ((cljs.core.not.call(null,lang_only_QMARK_))?loc_name__$1:cljs.core.first.call(null,clojure.string.split.call(null,loc_name__$1,/-/)));
return cljs.core.keyword.call(null,loc_name__$2);
};
var G__25660 = function (_QMARK_loc,var_args){
var p__25656 = null;
if (arguments.length > 1) {
var G__25661__i = 0, G__25661__a = new Array(arguments.length -  1);
while (G__25661__i < G__25661__a.length) {G__25661__a[G__25661__i] = arguments[G__25661__i + 1]; ++G__25661__i;}
  p__25656 = new cljs.core.IndexedSeq(G__25661__a,0);
} 
return G__25660__delegate.call(this,_QMARK_loc,p__25656);};
G__25660.cljs$lang$maxFixedArity = 1;
G__25660.cljs$lang$applyTo = (function (arglist__25662){
var _QMARK_loc = cljs.core.first(arglist__25662);
var p__25656 = cljs.core.rest(arglist__25662);
return G__25660__delegate(_QMARK_loc,p__25656);
});
G__25660.cljs$core$IFn$_invoke$arity$variadic = G__25660__delegate;
return G__25660;
})()
);
/**
 * Alpha - subject to change.
 */
taoensso.tower.fmt_str = (function taoensso$tower$fmt_str(var_args){
var args__7659__auto__ = [];
var len__7652__auto___25668 = arguments.length;
var i__7653__auto___25669 = (0);
while(true){
if((i__7653__auto___25669 < len__7652__auto___25668)){
args__7659__auto__.push((arguments[i__7653__auto___25669]));

var G__25670 = (i__7653__auto___25669 + (1));
i__7653__auto___25669 = G__25670;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((2) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((2)),(0),null)):null);
return taoensso.tower.fmt_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7660__auto__);
});

taoensso.tower.fmt_str.cljs$core$IFn$_invoke$arity$variadic = (function (_loc,fmt,args){
return cljs.core.apply.call(null,taoensso.encore.format,(function (){var or__6577__auto__ = fmt;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return "";
}
})(),args);
});

taoensso.tower.fmt_str.cljs$lang$maxFixedArity = (2);

taoensso.tower.fmt_str.cljs$lang$applyTo = (function (seq25665){
var G__25666 = cljs.core.first.call(null,seq25665);
var seq25665__$1 = cljs.core.next.call(null,seq25665);
var G__25667 = cljs.core.first.call(null,seq25665__$1);
var seq25665__$2 = cljs.core.next.call(null,seq25665__$1);
return taoensso.tower.fmt_str.cljs$core$IFn$_invoke$arity$variadic(G__25666,G__25667,seq25665__$2);
});

taoensso.tower._STAR_tscope_STAR_ = null;
/**
 * Merges scope keywords: (scope :a.b :c/d :e) => :a.b.c.d/e
 */
taoensso.tower.scoped = cljs.core.memoize.call(null,(function() { 
var G__25672__delegate = function (ks){
return taoensso.encore.merge_keywords.call(null,ks);
};
var G__25672 = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__25673__i = 0, G__25673__a = new Array(arguments.length -  0);
while (G__25673__i < G__25673__a.length) {G__25673__a[G__25673__i] = arguments[G__25673__i + 0]; ++G__25673__i;}
  ks = new cljs.core.IndexedSeq(G__25673__a,0);
} 
return G__25672__delegate.call(this,ks);};
G__25672.cljs$lang$maxFixedArity = 0;
G__25672.cljs$lang$applyTo = (function (arglist__25674){
var ks = cljs.core.seq(arglist__25674);
return G__25672__delegate(ks);
});
G__25672.cljs$core$IFn$_invoke$arity$variadic = G__25672__delegate;
return G__25672;
})()
);
taoensso.tower.tscoped = taoensso.tower.scoped;
/**
 * Returns intelligent, descending-preference vector of locale keys to search
 *   for given locale or vector of descending-preference locales.
 */
taoensso.tower.loc_tree = (function (){var loc_tree_STAR_ = cljs.core.memoize.call(null,(function (loc){
var loc_parts = clojure.string.split.call(null,cljs.core.name.call(null,taoensso.tower.kw_locale.call(null,loc)),/-/);
return cljs.core.mapv.call(null,((function (loc_parts){
return (function (p1__25675_SHARP_){
return cljs.core.keyword.call(null,clojure.string.join.call(null,"-",p1__25675_SHARP_));
});})(loc_parts))
,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,cljs.core.butlast,loc_parts)));
}));
return ((function (loc_tree_STAR_){
return (function (loc_or_locs){
if(!(cljs.core.vector_QMARK_.call(null,loc_or_locs))){
return loc_tree_STAR_.call(null,loc_or_locs);
} else {
var lang_first_idxs = cljs.core.zipmap.call(null,taoensso.encore.distinctv.call(null,cljs.core.mapv.call(null,cljs.core.comp.call(null,cljs.core.peek,loc_tree_STAR_),loc_or_locs)),cljs.core.range.call(null));
var loc_score = ((function (lang_first_idxs,loc_tree_STAR_){
return (function (loc){
var tree = loc_tree_STAR_.call(null,loc);
var lang = cljs.core.peek.call(null,tree);
var nparts = cljs.core.count.call(null,tree);
return (((10) * cljs.core.get.call(null,lang_first_idxs,lang)) - nparts);
});})(lang_first_idxs,loc_tree_STAR_))
;
var locs = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.call(null,loc_tree_STAR_,loc_or_locs));
var sorted_locs = cljs.core.sort_by.call(null,loc_score,taoensso.encore.distinctv.call(null,locs));
return cljs.core.vec.call(null,sorted_locs);
}
});
;})(loc_tree_STAR_))
})();
/**
 * Implementation detail. Based on `encore/format`.
 */
taoensso.tower.default_tfmt_str = (function taoensso$tower$default_tfmt_str(var_args){
var args__7659__auto__ = [];
var len__7652__auto___25679 = arguments.length;
var i__7653__auto___25680 = (0);
while(true){
if((i__7653__auto___25680 < len__7652__auto___25679)){
args__7659__auto__.push((arguments[i__7653__auto___25680]));

var G__25681 = (i__7653__auto___25680 + (1));
i__7653__auto___25680 = G__25681;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((2) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((2)),(0),null)):null);
return taoensso.tower.default_tfmt_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7660__auto__);
});

taoensso.tower.default_tfmt_str.cljs$core$IFn$_invoke$arity$variadic = (function (_loc,fmt,args){
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

taoensso.tower.default_tfmt_str.cljs$lang$maxFixedArity = (2);

taoensso.tower.default_tfmt_str.cljs$lang$applyTo = (function (seq25676){
var G__25677 = cljs.core.first.call(null,seq25676);
var seq25676__$1 = cljs.core.next.call(null,seq25676);
var G__25678 = cljs.core.first.call(null,seq25676__$1);
var seq25676__$2 = cljs.core.next.call(null,seq25676__$1);
return taoensso.tower.default_tfmt_str.cljs$core$IFn$_invoke$arity$variadic(G__25677,G__25678,seq25676__$2);
});

taoensso.tower.nstr = (function taoensso$tower$nstr(x){
if((x == null)){
return "nil";
} else {
return [cljs.core.str(x)].join('');
}
});
taoensso.tower.find1 = (function taoensso$tower$find1(var_args){
var args25684 = [];
var len__7652__auto___25693 = arguments.length;
var i__7653__auto___25694 = (0);
while(true){
if((i__7653__auto___25694 < len__7652__auto___25693)){
args25684.push((arguments[i__7653__auto___25694]));

var G__25695 = (i__7653__auto___25694 + (1));
i__7653__auto___25694 = G__25695;
continue;
} else {
}
break;
}

var G__25686 = args25684.length;
switch (G__25686) {
case 4:
return taoensso.tower.find1.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.tower.find1.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25684.length)].join('')));

}
});

taoensso.tower.find1.cljs$core$IFn$_invoke$arity$4 = (function (dict,scope,k,ltree){
var vec__25687 = ltree;
var l1 = cljs.core.nth.call(null,vec__25687,(0),null);
var ls = vec__25687;
var scoped_k = taoensso.tower.scoped.call(null,scope,k);
if(cljs.core.next.call(null,ls)){
return cljs.core.some.call(null,((function (vec__25687,l1,ls,scoped_k){
return (function (p1__25682_SHARP_){
return cljs.core.get_in.call(null,dict,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scoped_k,p1__25682_SHARP_], null));
});})(vec__25687,l1,ls,scoped_k))
,ls);
} else {
return cljs.core.get_in.call(null,dict,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scoped_k,l1], null));
}
});

taoensso.tower.find1.cljs$core$IFn$_invoke$arity$3 = (function (dict,k,ltree){
var vec__25690 = ltree;
var l1 = cljs.core.nth.call(null,vec__25690,(0),null);
var ls = vec__25690;
if(cljs.core.next.call(null,ls)){
return cljs.core.some.call(null,((function (vec__25690,l1,ls){
return (function (p1__25683_SHARP_){
return cljs.core.get_in.call(null,dict,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p1__25683_SHARP_], null));
});})(vec__25690,l1,ls))
,ls);
} else {
return cljs.core.get_in.call(null,dict,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,l1], null));
}
});

taoensso.tower.find1.cljs$lang$maxFixedArity = 4;

taoensso.tower.make_t_uncached = (function taoensso$tower$make_t_uncached(tconfig){
if(cljs.core.map_QMARK_.call(null,tconfig)){
} else {
throw (new Error("Assert failed: (map? tconfig)"));
}

var map__25710 = tconfig;
var map__25710__$1 = ((((!((map__25710 == null)))?((((map__25710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25710):map__25710);
var compiled_dictionary = cljs.core.get.call(null,map__25710__$1,new cljs.core.Keyword(null,"compiled-dictionary","compiled-dictionary",-739477055));
var dev_mode_QMARK_ = cljs.core.get.call(null,map__25710__$1,new cljs.core.Keyword(null,"dev-mode?","dev-mode?",-392099091));
var fallback_locale = cljs.core.get.call(null,map__25710__$1,new cljs.core.Keyword(null,"fallback-locale","fallback-locale",-1300697761),new cljs.core.Keyword(null,"en","en",88457073));
var scope_fn = cljs.core.get.call(null,map__25710__$1,new cljs.core.Keyword(null,"scope-fn","scope-fn",-1139485860),((function (map__25710,map__25710__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale){
return (function (){
return taoensso.tower._STAR_tscope_STAR_;
});})(map__25710,map__25710__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale))
);
var fmt_fn = cljs.core.get.call(null,map__25710__$1,new cljs.core.Keyword(null,"fmt-fn","fmt-fn",1822593570),taoensso.tower.default_tfmt_str);
var log_missing_translation_fn = cljs.core.get.call(null,map__25710__$1,new cljs.core.Keyword(null,"log-missing-translation-fn","log-missing-translation-fn",-1222017068),((function (map__25710,map__25710__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn){
return (function (p__25712){
var map__25713 = p__25712;
var map__25713__$1 = ((((!((map__25713 == null)))?((((map__25713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25713):map__25713);
var args = map__25713__$1;
var dev_mode_QMARK___$1 = cljs.core.get.call(null,map__25713__$1,new cljs.core.Keyword(null,"dev-mode?","dev-mode?",-392099091));
var pattern = "Missing-translation: %s";
if(cljs.core.truth_(dev_mode_QMARK___$1)){
return taoensso.encore.debugf.call(null,pattern,args);
} else {
return taoensso.encore.warnf.call(null,pattern,args);
}
});})(map__25710,map__25710__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn))
);
var cache_locales_QMARK_ = cljs.core.get.call(null,map__25710__$1,new cljs.core.Keyword(null,"cache-locales?","cache-locales?",-2101196885),true);
var _ = (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"compiled-dictionary","compiled-dictionary",-739477055).cljs$core$IFn$_invoke$arity$1(tconfig))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Missing tconfig key: :compiled-dictionary"),cljs.core.str("\n"),cljs.core.str("(:compiled-dictionary tconfig)")].join('')));
}

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865).cljs$core$IFn$_invoke$arity$1(tconfig))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Invalid tconfig key: :dictionary"),cljs.core.str("\n"),cljs.core.str("(not (:dictionary tconfig))")].join('')));
}
})()
;
var loc_tree_STAR_ = (cljs.core.truth_(cache_locales_QMARK_)?cljs.core.memoize.call(null,taoensso.tower.loc_tree):taoensso.tower.loc_tree);
var get_dict = ((function (map__25710,map__25710__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn,log_missing_translation_fn,cache_locales_QMARK_,_,loc_tree_STAR_){
return (function (){
return compiled_dictionary;
});})(map__25710,map__25710__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn,log_missing_translation_fn,cache_locales_QMARK_,_,loc_tree_STAR_))
;
return ((function (map__25710,map__25710__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn,log_missing_translation_fn,cache_locales_QMARK_,_,loc_tree_STAR_,get_dict){
return (function() { 
var taoensso$tower$make_t_uncached_$_new_t__delegate = function (l_or_ls,k_or_ks,fmt_args){
var dict = get_dict.call(null);
var ks = ((cljs.core.vector_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null));
var ls = ((cljs.core.vector_QMARK_.call(null,l_or_ls))?l_or_ls:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_or_ls], null));
var vec__25718 = ls;
var l1 = cljs.core.nth.call(null,vec__25718,(0),null);
var scope = scope_fn.call(null);
var ks_QMARK_ = cljs.core.vector_QMARK_.call(null,k_or_ks);
var tr = (function (){var or__6577__auto__ = (function (){var ltree = loc_tree_STAR_.call(null,ls);
if(ks_QMARK_){
return cljs.core.some.call(null,((function (ltree,dict,ks,ls,vec__25718,l1,scope,ks_QMARK_,map__25710,map__25710__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn,log_missing_translation_fn,cache_locales_QMARK_,_,loc_tree_STAR_,get_dict){
return (function (p1__25697_SHARP_){
return taoensso.tower.find1.call(null,dict,scope,p1__25697_SHARP_,ltree);
});})(ltree,dict,ks,ls,vec__25718,l1,scope,ks_QMARK_,map__25710,map__25710__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn,log_missing_translation_fn,cache_locales_QMARK_,_,loc_tree_STAR_,get_dict))
,cljs.core.take_while.call(null,cljs.core.keyword_QMARK_,ks));
} else {
return taoensso.tower.find1.call(null,dict,scope,k_or_ks,ltree);
}
})();
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
var last_k = cljs.core.peek.call(null,ks);
if(!((last_k instanceof cljs.core.Keyword))){
if((last_k == null)){
return new cljs.core.Keyword("taoensso.tower","nil","taoensso.tower/nil",-738257546);
} else {
return last_k;
}
} else {
var temp__4657__auto___25721 = log_missing_translation_fn;
if(cljs.core.truth_(temp__4657__auto___25721)){
var log_f_25722 = temp__4657__auto___25721;
log_f_25722.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"locales","locales",1785635955),ls,new cljs.core.Keyword(null,"scope","scope",-439358418),scope,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"dev-mode?","dev-mode?",-392099091),dev_mode_QMARK_], null));
} else {
}

var or__6577__auto____$1 = (function (){var ltree = loc_tree_STAR_.call(null,fallback_locale);
if(ks_QMARK_){
return cljs.core.some.call(null,((function (ltree,last_k,or__6577__auto__,dict,ks,ls,vec__25718,l1,scope,ks_QMARK_,map__25710,map__25710__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn,log_missing_translation_fn,cache_locales_QMARK_,_,loc_tree_STAR_,get_dict){
return (function (p1__25698_SHARP_){
return taoensso.tower.find1.call(null,dict,scope,p1__25698_SHARP_,ltree);
});})(ltree,last_k,or__6577__auto__,dict,ks,ls,vec__25718,l1,scope,ks_QMARK_,map__25710,map__25710__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn,log_missing_translation_fn,cache_locales_QMARK_,_,loc_tree_STAR_,get_dict))
,ks);
} else {
return taoensso.tower.find1.call(null,dict,scope,k_or_ks,ltree);
}
})();
if(cljs.core.truth_(or__6577__auto____$1)){
return or__6577__auto____$1;
} else {
var ltree = loc_tree_STAR_.call(null,cljs.core.conj.call(null,ls,fallback_locale));
var temp__4657__auto__ = taoensso.tower.find1.call(null,dict,new cljs.core.Keyword(null,"missing","missing",362507769),ltree);
if(cljs.core.truth_(temp__4657__auto__)){
var pattern = temp__4657__auto__;
return fmt_fn.call(null,l1,pattern,taoensso.tower.nstr.call(null,ls),taoensso.tower.nstr.call(null,scope),taoensso.tower.nstr.call(null,ks));
} else {
return null;
}
}
}
}
})();
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,tr,new cljs.core.Keyword("taoensso.tower","nil","taoensso.tower/nil",-738257546)))){
return null;
} else {
var tr__$1 = (function (){var or__6577__auto__ = tr;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return "";
}
})();
if((fmt_args == null)){
return tr__$1;
} else {
return cljs.core.apply.call(null,fmt_fn,l1,tr__$1,fmt_args);
}
}
};
var taoensso$tower$make_t_uncached_$_new_t = function (l_or_ls,k_or_ks,var_args){
var fmt_args = null;
if (arguments.length > 2) {
var G__25723__i = 0, G__25723__a = new Array(arguments.length -  2);
while (G__25723__i < G__25723__a.length) {G__25723__a[G__25723__i] = arguments[G__25723__i + 2]; ++G__25723__i;}
  fmt_args = new cljs.core.IndexedSeq(G__25723__a,0);
} 
return taoensso$tower$make_t_uncached_$_new_t__delegate.call(this,l_or_ls,k_or_ks,fmt_args);};
taoensso$tower$make_t_uncached_$_new_t.cljs$lang$maxFixedArity = 2;
taoensso$tower$make_t_uncached_$_new_t.cljs$lang$applyTo = (function (arglist__25724){
var l_or_ls = cljs.core.first(arglist__25724);
arglist__25724 = cljs.core.next(arglist__25724);
var k_or_ks = cljs.core.first(arglist__25724);
var fmt_args = cljs.core.rest(arglist__25724);
return taoensso$tower$make_t_uncached_$_new_t__delegate(l_or_ls,k_or_ks,fmt_args);
});
taoensso$tower$make_t_uncached_$_new_t.cljs$core$IFn$_invoke$arity$variadic = taoensso$tower$make_t_uncached_$_new_t__delegate;
return taoensso$tower$make_t_uncached_$_new_t;
})()
;
;})(map__25710,map__25710__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn,log_missing_translation_fn,cache_locales_QMARK_,_,loc_tree_STAR_,get_dict))
});
taoensso.tower.make_t_cached = cljs.core.memoize.call(null,taoensso.tower.make_t_uncached);
taoensso.tower.make_t = taoensso.tower.make_t_uncached;

//# sourceMappingURL=tower.js.map