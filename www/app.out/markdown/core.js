// Compiled by ClojureScript 1.9.93 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__8596){
var map__8607 = p__8596;
var map__8607__$1 = ((((!((map__8607 == null)))?((((map__8607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8607):map__8607);
var replacement_transformers = cljs.core.get.call(null,map__8607__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__8607__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__8607,map__8607__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_8609 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__8610 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_8609,map__8607,map__8607__$1,replacement_transformers,custom_transformers){
return (function (p__8613,transformer){
var vec__8614 = p__8613;
var text = cljs.core.nth.call(null,vec__8614,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__8614,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_8609,map__8607,map__8607__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__6577__auto__ = replacement_transformers;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__8610,(0),null);
var new_state = cljs.core.nth.call(null,vec__8610,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_8609;
}});
;})(map__8607,map__8607__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__7659__auto__ = [];
var len__7652__auto___8619 = arguments.length;
var i__7653__auto___8620 = (0);
while(true){
if((i__7653__auto___8620 < len__7652__auto___8619)){
args__7659__auto__.push((arguments[i__7653__auto___8620]));

var G__8621 = (i__7653__auto___8620 + (1));
i__7653__auto___8620 = G__8621;
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

markdown.core.format.cljs$lang$applyTo = (function (seq8617){
var G__8618 = cljs.core.first.call(null,seq8617);
var seq8617__$1 = cljs.core.next.call(null,seq8617);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__8618,seq8617__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__8626_8630 = cljs.core.seq.call(null,lines);
var chunk__8627_8631 = null;
var count__8628_8632 = (0);
var i__8629_8633 = (0);
while(true){
if((i__8629_8633 < count__8628_8632)){
var line_8634 = cljs.core._nth.call(null,chunk__8627_8631,i__8629_8633);
markdown.links.parse_reference_link.call(null,line_8634,references);

var G__8635 = seq__8626_8630;
var G__8636 = chunk__8627_8631;
var G__8637 = count__8628_8632;
var G__8638 = (i__8629_8633 + (1));
seq__8626_8630 = G__8635;
chunk__8627_8631 = G__8636;
count__8628_8632 = G__8637;
i__8629_8633 = G__8638;
continue;
} else {
var temp__4657__auto___8639 = cljs.core.seq.call(null,seq__8626_8630);
if(temp__4657__auto___8639){
var seq__8626_8640__$1 = temp__4657__auto___8639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8626_8640__$1)){
var c__7388__auto___8641 = cljs.core.chunk_first.call(null,seq__8626_8640__$1);
var G__8642 = cljs.core.chunk_rest.call(null,seq__8626_8640__$1);
var G__8643 = c__7388__auto___8641;
var G__8644 = cljs.core.count.call(null,c__7388__auto___8641);
var G__8645 = (0);
seq__8626_8630 = G__8642;
chunk__8627_8631 = G__8643;
count__8628_8632 = G__8644;
i__8629_8633 = G__8645;
continue;
} else {
var line_8646 = cljs.core.first.call(null,seq__8626_8640__$1);
markdown.links.parse_reference_link.call(null,line_8646,references);

var G__8647 = cljs.core.next.call(null,seq__8626_8640__$1);
var G__8648 = null;
var G__8649 = (0);
var G__8650 = (0);
seq__8626_8630 = G__8647;
chunk__8627_8631 = G__8648;
count__8628_8632 = G__8649;
i__8629_8633 = G__8650;
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
var seq__8655_8659 = cljs.core.seq.call(null,lines);
var chunk__8656_8660 = null;
var count__8657_8661 = (0);
var i__8658_8662 = (0);
while(true){
if((i__8658_8662 < count__8657_8661)){
var line_8663 = cljs.core._nth.call(null,chunk__8656_8660,i__8658_8662);
markdown.links.parse_footnote_link.call(null,line_8663,footnotes);

var G__8664 = seq__8655_8659;
var G__8665 = chunk__8656_8660;
var G__8666 = count__8657_8661;
var G__8667 = (i__8658_8662 + (1));
seq__8655_8659 = G__8664;
chunk__8656_8660 = G__8665;
count__8657_8661 = G__8666;
i__8658_8662 = G__8667;
continue;
} else {
var temp__4657__auto___8668 = cljs.core.seq.call(null,seq__8655_8659);
if(temp__4657__auto___8668){
var seq__8655_8669__$1 = temp__4657__auto___8668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8655_8669__$1)){
var c__7388__auto___8670 = cljs.core.chunk_first.call(null,seq__8655_8669__$1);
var G__8671 = cljs.core.chunk_rest.call(null,seq__8655_8669__$1);
var G__8672 = c__7388__auto___8670;
var G__8673 = cljs.core.count.call(null,c__7388__auto___8670);
var G__8674 = (0);
seq__8655_8659 = G__8671;
chunk__8656_8660 = G__8672;
count__8657_8661 = G__8673;
i__8658_8662 = G__8674;
continue;
} else {
var line_8675 = cljs.core.first.call(null,seq__8655_8669__$1);
markdown.links.parse_footnote_link.call(null,line_8675,footnotes);

var G__8676 = cljs.core.next.call(null,seq__8655_8669__$1);
var G__8677 = null;
var G__8678 = (0);
var G__8679 = (0);
seq__8655_8659 = G__8676;
chunk__8656_8660 = G__8677;
count__8657_8661 = G__8678;
i__8658_8662 = G__8679;
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
var vec__8684 = cljs.core.split_with.call(null,(function (p1__8680_SHARP_){
return cljs.core.not_empty.call(null,p1__8680_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__8684,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__8684,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_8702 = markdown.common._STAR_substring_STAR_;
var formatter8703 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_8702,formatter8703){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_8702,formatter8703))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__8704 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__8704,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__8704,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__8710_8717 = lines__$1;
var vec__8711_8718 = G__8710_8717;
var seq__8712_8719 = cljs.core.seq.call(null,vec__8711_8718);
var first__8713_8720 = cljs.core.first.call(null,seq__8712_8719);
var seq__8712_8721__$1 = cljs.core.next.call(null,seq__8712_8719);
var line_8722 = first__8713_8720;
var more_8723 = seq__8712_8721__$1;
var state_8724 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__8710_8725__$1 = G__8710_8717;
var state_8726__$1 = state_8724;
while(true){
var vec__8714_8727 = G__8710_8725__$1;
var seq__8715_8728 = cljs.core.seq.call(null,vec__8714_8727);
var first__8716_8729 = cljs.core.first.call(null,seq__8715_8728);
var seq__8715_8730__$1 = cljs.core.next.call(null,seq__8715_8728);
var line_8731__$1 = first__8716_8729;
var more_8732__$1 = seq__8715_8730__$1;
var state_8733__$2 = state_8726__$1;
var state_8734__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_8733__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_8733__$2),cljs.core.first.call(null,more_8732__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_8733__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_8733__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_8732__$1))){
var G__8735 = more_8732__$1;
var G__8736 = cljs.core.assoc.call(null,transformer.call(null,html,line_8731__$1,cljs.core.first.call(null,more_8732__$1),state_8734__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_8731__$1));
G__8710_8725__$1 = G__8735;
state_8726__$1 = G__8736;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_8734__$3))),line_8731__$1,"",cljs.core.assoc.call(null,state_8734__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter8703;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_8702;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__7659__auto__ = [];
var len__7652__auto___8739 = arguments.length;
var i__7653__auto___8740 = (0);
while(true){
if((i__7653__auto___8740 < len__7652__auto___8739)){
args__7659__auto__.push((arguments[i__7653__auto___8740]));

var G__8741 = (i__7653__auto___8740 + (1));
i__7653__auto___8740 = G__8741;
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

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq8737){
var G__8738 = cljs.core.first.call(null,seq8737);
var seq8737__$1 = cljs.core.next.call(null,seq8737);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__8738,seq8737__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__7659__auto__ = [];
var len__7652__auto___8744 = arguments.length;
var i__7653__auto___8745 = (0);
while(true){
if((i__7653__auto___8745 < len__7652__auto___8744)){
args__7659__auto__.push((arguments[i__7653__auto___8745]));

var G__8746 = (i__7653__auto___8745 + (1));
i__7653__auto___8745 = G__8746;
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

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq8742){
var G__8743 = cljs.core.first.call(null,seq8742);
var seq8742__$1 = cljs.core.next.call(null,seq8742);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__8743,seq8742__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__7659__auto__ = [];
var len__7652__auto___8748 = arguments.length;
var i__7653__auto___8749 = (0);
while(true){
if((i__7653__auto___8749 < len__7652__auto___8748)){
args__7659__auto__.push((arguments[i__7653__auto___8749]));

var G__8750 = (i__7653__auto___8749 + (1));
i__7653__auto___8749 = G__8750;
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

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq8747){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8747));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__7659__auto__ = [];
var len__7652__auto___8752 = arguments.length;
var i__7653__auto___8753 = (0);
while(true){
if((i__7653__auto___8753 < len__7652__auto___8752)){
args__7659__auto__.push((arguments[i__7653__auto___8753]));

var G__8754 = (i__7653__auto___8753 + (1));
i__7653__auto___8753 = G__8754;
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

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq8751){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8751));
});


//# sourceMappingURL=core.js.map