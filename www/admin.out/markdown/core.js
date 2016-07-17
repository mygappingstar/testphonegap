// Compiled by ClojureScript 1.9.93 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__8352){
var map__8363 = p__8352;
var map__8363__$1 = ((((!((map__8363 == null)))?((((map__8363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8363):map__8363);
var replacement_transformers = cljs.core.get.call(null,map__8363__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__8363__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__8363,map__8363__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_8365 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__8366 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_8365,map__8363,map__8363__$1,replacement_transformers,custom_transformers){
return (function (p__8369,transformer){
var vec__8370 = p__8369;
var text = cljs.core.nth.call(null,vec__8370,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__8370,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_8365,map__8363,map__8363__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__6577__auto__ = replacement_transformers;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__8366,(0),null);
var new_state = cljs.core.nth.call(null,vec__8366,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_8365;
}});
;})(map__8363,map__8363__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__7659__auto__ = [];
var len__7652__auto___8375 = arguments.length;
var i__7653__auto___8376 = (0);
while(true){
if((i__7653__auto___8376 < len__7652__auto___8375)){
args__7659__auto__.push((arguments[i__7653__auto___8376]));

var G__8377 = (i__7653__auto___8376 + (1));
i__7653__auto___8376 = G__8377;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq8373){
var G__8374 = cljs.core.first.call(null,seq8373);
var seq8373__$1 = cljs.core.next.call(null,seq8373);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__8374,seq8373__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__8382_8386 = cljs.core.seq.call(null,lines);
var chunk__8383_8387 = null;
var count__8384_8388 = (0);
var i__8385_8389 = (0);
while(true){
if((i__8385_8389 < count__8384_8388)){
var line_8390 = cljs.core._nth.call(null,chunk__8383_8387,i__8385_8389);
markdown.links.parse_reference_link.call(null,line_8390,references);

var G__8391 = seq__8382_8386;
var G__8392 = chunk__8383_8387;
var G__8393 = count__8384_8388;
var G__8394 = (i__8385_8389 + (1));
seq__8382_8386 = G__8391;
chunk__8383_8387 = G__8392;
count__8384_8388 = G__8393;
i__8385_8389 = G__8394;
continue;
} else {
var temp__4657__auto___8395 = cljs.core.seq.call(null,seq__8382_8386);
if(temp__4657__auto___8395){
var seq__8382_8396__$1 = temp__4657__auto___8395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8382_8396__$1)){
var c__7388__auto___8397 = cljs.core.chunk_first.call(null,seq__8382_8396__$1);
var G__8398 = cljs.core.chunk_rest.call(null,seq__8382_8396__$1);
var G__8399 = c__7388__auto___8397;
var G__8400 = cljs.core.count.call(null,c__7388__auto___8397);
var G__8401 = (0);
seq__8382_8386 = G__8398;
chunk__8383_8387 = G__8399;
count__8384_8388 = G__8400;
i__8385_8389 = G__8401;
continue;
} else {
var line_8402 = cljs.core.first.call(null,seq__8382_8396__$1);
markdown.links.parse_reference_link.call(null,line_8402,references);

var G__8403 = cljs.core.next.call(null,seq__8382_8396__$1);
var G__8404 = null;
var G__8405 = (0);
var G__8406 = (0);
seq__8382_8386 = G__8403;
chunk__8383_8387 = G__8404;
count__8384_8388 = G__8405;
i__8385_8389 = G__8406;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__8411_8415 = cljs.core.seq.call(null,lines);
var chunk__8412_8416 = null;
var count__8413_8417 = (0);
var i__8414_8418 = (0);
while(true){
if((i__8414_8418 < count__8413_8417)){
var line_8419 = cljs.core._nth.call(null,chunk__8412_8416,i__8414_8418);
markdown.links.parse_footnote_link.call(null,line_8419,footnotes);

var G__8420 = seq__8411_8415;
var G__8421 = chunk__8412_8416;
var G__8422 = count__8413_8417;
var G__8423 = (i__8414_8418 + (1));
seq__8411_8415 = G__8420;
chunk__8412_8416 = G__8421;
count__8413_8417 = G__8422;
i__8414_8418 = G__8423;
continue;
} else {
var temp__4657__auto___8424 = cljs.core.seq.call(null,seq__8411_8415);
if(temp__4657__auto___8424){
var seq__8411_8425__$1 = temp__4657__auto___8424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8411_8425__$1)){
var c__7388__auto___8426 = cljs.core.chunk_first.call(null,seq__8411_8425__$1);
var G__8427 = cljs.core.chunk_rest.call(null,seq__8411_8425__$1);
var G__8428 = c__7388__auto___8426;
var G__8429 = cljs.core.count.call(null,c__7388__auto___8426);
var G__8430 = (0);
seq__8411_8415 = G__8427;
chunk__8412_8416 = G__8428;
count__8413_8417 = G__8429;
i__8414_8418 = G__8430;
continue;
} else {
var line_8431 = cljs.core.first.call(null,seq__8411_8425__$1);
markdown.links.parse_footnote_link.call(null,line_8431,footnotes);

var G__8432 = cljs.core.next.call(null,seq__8411_8425__$1);
var G__8433 = null;
var G__8434 = (0);
var G__8435 = (0);
seq__8411_8415 = G__8432;
chunk__8412_8416 = G__8433;
count__8413_8417 = G__8434;
i__8414_8418 = G__8435;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__8440 = cljs.core.split_with.call(null,(function (p1__8436_SHARP_){
return cljs.core.not_empty.call(null,p1__8436_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__8440,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__8440,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_8458 = markdown.common._STAR_substring_STAR_;
var formatter8459 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_8458,formatter8459){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_8458,formatter8459))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__8460 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__8460,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__8460,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__8466_8473 = lines__$1;
var vec__8467_8474 = G__8466_8473;
var seq__8468_8475 = cljs.core.seq.call(null,vec__8467_8474);
var first__8469_8476 = cljs.core.first.call(null,seq__8468_8475);
var seq__8468_8477__$1 = cljs.core.next.call(null,seq__8468_8475);
var line_8478 = first__8469_8476;
var more_8479 = seq__8468_8477__$1;
var state_8480 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__8466_8481__$1 = G__8466_8473;
var state_8482__$1 = state_8480;
while(true){
var vec__8470_8483 = G__8466_8481__$1;
var seq__8471_8484 = cljs.core.seq.call(null,vec__8470_8483);
var first__8472_8485 = cljs.core.first.call(null,seq__8471_8484);
var seq__8471_8486__$1 = cljs.core.next.call(null,seq__8471_8484);
var line_8487__$1 = first__8472_8485;
var more_8488__$1 = seq__8471_8486__$1;
var state_8489__$2 = state_8482__$1;
var state_8490__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_8489__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_8489__$2),cljs.core.first.call(null,more_8488__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_8489__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_8489__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_8488__$1))){
var G__8491 = more_8488__$1;
var G__8492 = cljs.core.assoc.call(null,transformer.call(null,html,line_8487__$1,cljs.core.first.call(null,more_8488__$1),state_8490__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_8487__$1));
G__8466_8481__$1 = G__8491;
state_8482__$1 = G__8492;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_8490__$3))),line_8487__$1,"",cljs.core.assoc.call(null,state_8490__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter8459;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_8458;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__7659__auto__ = [];
var len__7652__auto___8495 = arguments.length;
var i__7653__auto___8496 = (0);
while(true){
if((i__7653__auto___8496 < len__7652__auto___8495)){
args__7659__auto__.push((arguments[i__7653__auto___8496]));

var G__8497 = (i__7653__auto___8496 + (1));
i__7653__auto___8496 = G__8497;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq8493){
var G__8494 = cljs.core.first.call(null,seq8493);
var seq8493__$1 = cljs.core.next.call(null,seq8493);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__8494,seq8493__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__7659__auto__ = [];
var len__7652__auto___8500 = arguments.length;
var i__7653__auto___8501 = (0);
while(true){
if((i__7653__auto___8501 < len__7652__auto___8500)){
args__7659__auto__.push((arguments[i__7653__auto___8501]));

var G__8502 = (i__7653__auto___8501 + (1));
i__7653__auto___8501 = G__8502;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq8498){
var G__8499 = cljs.core.first.call(null,seq8498);
var seq8498__$1 = cljs.core.next.call(null,seq8498);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__8499,seq8498__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__7659__auto__ = [];
var len__7652__auto___8504 = arguments.length;
var i__7653__auto___8505 = (0);
while(true){
if((i__7653__auto___8505 < len__7652__auto___8504)){
args__7659__auto__.push((arguments[i__7653__auto___8505]));

var G__8506 = (i__7653__auto___8505 + (1));
i__7653__auto___8505 = G__8506;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq8503){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8503));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__7659__auto__ = [];
var len__7652__auto___8508 = arguments.length;
var i__7653__auto___8509 = (0);
while(true){
if((i__7653__auto___8509 < len__7652__auto___8508)){
args__7659__auto__.push((arguments[i__7653__auto___8509]));

var G__8510 = (i__7653__auto___8509 + (1));
i__7653__auto___8509 = G__8510;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq8507){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8507));
});


//# sourceMappingURL=core.js.map