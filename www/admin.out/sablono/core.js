// Compiled by ClojureScript 1.9.93 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__10055__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__10052 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__10053 = cljs.core.seq.call(null,vec__10052);
var first__10054 = cljs.core.first.call(null,seq__10053);
var seq__10053__$1 = cljs.core.next.call(null,seq__10053);
var tag = first__10054;
var body = seq__10053__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__10055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10056__i = 0, G__10056__a = new Array(arguments.length -  0);
while (G__10056__i < G__10056__a.length) {G__10056__a[G__10056__i] = arguments[G__10056__i + 0]; ++G__10056__i;}
  args = new cljs.core.IndexedSeq(G__10056__a,0);
} 
return G__10055__delegate.call(this,args);};
G__10055.cljs$lang$maxFixedArity = 0;
G__10055.cljs$lang$applyTo = (function (arglist__10057){
var args = cljs.core.seq(arglist__10057);
return G__10055__delegate(args);
});
G__10055.cljs$core$IFn$_invoke$arity$variadic = G__10055__delegate;
return G__10055;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7357__auto__ = (function sablono$core$update_arglists_$_iter__10062(s__10063){
return (new cljs.core.LazySeq(null,(function (){
var s__10063__$1 = s__10063;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10063__$1);
if(temp__4657__auto__){
var s__10063__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10063__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__10063__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__10065 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__10064 = (0);
while(true){
if((i__10064 < size__7356__auto__)){
var args = cljs.core._nth.call(null,c__7355__auto__,i__10064);
cljs.core.chunk_append.call(null,b__10065,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__10066 = (i__10064 + (1));
i__10064 = G__10066;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10065),sablono$core$update_arglists_$_iter__10062.call(null,cljs.core.chunk_rest.call(null,s__10063__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10065),null);
}
} else {
var args = cljs.core.first.call(null,s__10063__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__10062.call(null,cljs.core.rest.call(null,s__10063__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7357__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7659__auto__ = [];
var len__7652__auto___10072 = arguments.length;
var i__7653__auto___10073 = (0);
while(true){
if((i__7653__auto___10073 < len__7652__auto___10072)){
args__7659__auto__.push((arguments[i__7653__auto___10073]));

var G__10074 = (i__7653__auto___10073 + (1));
i__7653__auto___10073 = G__10074;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7357__auto__ = (function sablono$core$iter__10068(s__10069){
return (new cljs.core.LazySeq(null,(function (){
var s__10069__$1 = s__10069;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10069__$1);
if(temp__4657__auto__){
var s__10069__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10069__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__10069__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__10071 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__10070 = (0);
while(true){
if((i__10070 < size__7356__auto__)){
var style = cljs.core._nth.call(null,c__7355__auto__,i__10070);
cljs.core.chunk_append.call(null,b__10071,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__10075 = (i__10070 + (1));
i__10070 = G__10075;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10071),sablono$core$iter__10068.call(null,cljs.core.chunk_rest.call(null,s__10069__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10071),null);
}
} else {
var style = cljs.core.first.call(null,s__10069__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__10068.call(null,cljs.core.rest.call(null,s__10069__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7357__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq10067){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10067));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to10076 = (function sablono$core$link_to10076(var_args){
var args__7659__auto__ = [];
var len__7652__auto___10079 = arguments.length;
var i__7653__auto___10080 = (0);
while(true){
if((i__7653__auto___10080 < len__7652__auto___10079)){
args__7659__auto__.push((arguments[i__7653__auto___10080]));

var G__10081 = (i__7653__auto___10080 + (1));
i__7653__auto___10080 = G__10081;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to10076.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

sablono.core.link_to10076.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to10076.cljs$lang$maxFixedArity = (1);

sablono.core.link_to10076.cljs$lang$applyTo = (function (seq10077){
var G__10078 = cljs.core.first.call(null,seq10077);
var seq10077__$1 = cljs.core.next.call(null,seq10077);
return sablono.core.link_to10076.cljs$core$IFn$_invoke$arity$variadic(G__10078,seq10077__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to10076);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to10082 = (function sablono$core$mail_to10082(var_args){
var args__7659__auto__ = [];
var len__7652__auto___10089 = arguments.length;
var i__7653__auto___10090 = (0);
while(true){
if((i__7653__auto___10090 < len__7652__auto___10089)){
args__7659__auto__.push((arguments[i__7653__auto___10090]));

var G__10091 = (i__7653__auto___10090 + (1));
i__7653__auto___10090 = G__10091;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to10082.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

sablono.core.mail_to10082.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__10085){
var vec__10086 = p__10085;
var content = cljs.core.nth.call(null,vec__10086,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6577__auto__ = content;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to10082.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to10082.cljs$lang$applyTo = (function (seq10083){
var G__10084 = cljs.core.first.call(null,seq10083);
var seq10083__$1 = cljs.core.next.call(null,seq10083);
return sablono.core.mail_to10082.cljs$core$IFn$_invoke$arity$variadic(G__10084,seq10083__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to10082);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list10092 = (function sablono$core$unordered_list10092(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__7357__auto__ = (function sablono$core$unordered_list10092_$_iter__10097(s__10098){
return (new cljs.core.LazySeq(null,(function (){
var s__10098__$1 = s__10098;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10098__$1);
if(temp__4657__auto__){
var s__10098__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10098__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__10098__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__10100 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__10099 = (0);
while(true){
if((i__10099 < size__7356__auto__)){
var x = cljs.core._nth.call(null,c__7355__auto__,i__10099);
cljs.core.chunk_append.call(null,b__10100,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10101 = (i__10099 + (1));
i__10099 = G__10101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10100),sablono$core$unordered_list10092_$_iter__10097.call(null,cljs.core.chunk_rest.call(null,s__10098__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10100),null);
}
} else {
var x = cljs.core.first.call(null,s__10098__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list10092_$_iter__10097.call(null,cljs.core.rest.call(null,s__10098__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7357__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list10092);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list10102 = (function sablono$core$ordered_list10102(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__7357__auto__ = (function sablono$core$ordered_list10102_$_iter__10107(s__10108){
return (new cljs.core.LazySeq(null,(function (){
var s__10108__$1 = s__10108;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10108__$1);
if(temp__4657__auto__){
var s__10108__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10108__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__10108__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__10110 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__10109 = (0);
while(true){
if((i__10109 < size__7356__auto__)){
var x = cljs.core._nth.call(null,c__7355__auto__,i__10109);
cljs.core.chunk_append.call(null,b__10110,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10111 = (i__10109 + (1));
i__10109 = G__10111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10110),sablono$core$ordered_list10102_$_iter__10107.call(null,cljs.core.chunk_rest.call(null,s__10108__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10110),null);
}
} else {
var x = cljs.core.first.call(null,s__10108__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list10102_$_iter__10107.call(null,cljs.core.rest.call(null,s__10108__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7357__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list10102);
/**
 * Create an image element.
 */
sablono.core.image10112 = (function sablono$core$image10112(var_args){
var args10113 = [];
var len__7652__auto___10116 = arguments.length;
var i__7653__auto___10117 = (0);
while(true){
if((i__7653__auto___10117 < len__7652__auto___10116)){
args10113.push((arguments[i__7653__auto___10117]));

var G__10118 = (i__7653__auto___10117 + (1));
i__7653__auto___10117 = G__10118;
continue;
} else {
}
break;
}

var G__10115 = args10113.length;
switch (G__10115) {
case 1:
return sablono.core.image10112.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image10112.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10113.length)].join('')));

}
});

sablono.core.image10112.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image10112.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image10112.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image10112);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__10120_SHARP_,p2__10121_SHARP_){
return [cljs.core.str(p1__10120_SHARP_),cljs.core.str("["),cljs.core.str(p2__10121_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__10122_SHARP_,p2__10123_SHARP_){
return [cljs.core.str(p1__10122_SHARP_),cljs.core.str("-"),cljs.core.str(p2__10123_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__6577__auto__ = value;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field10124 = (function sablono$core$color_field10124(var_args){
var args10125 = [];
var len__7652__auto___10192 = arguments.length;
var i__7653__auto___10193 = (0);
while(true){
if((i__7653__auto___10193 < len__7652__auto___10192)){
args10125.push((arguments[i__7653__auto___10193]));

var G__10194 = (i__7653__auto___10193 + (1));
i__7653__auto___10193 = G__10194;
continue;
} else {
}
break;
}

var G__10127 = args10125.length;
switch (G__10127) {
case 1:
return sablono.core.color_field10124.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field10124.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10125.length)].join('')));

}
});

sablono.core.color_field10124.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.color_field10124.call(null,name__10039__auto__,null);
});

sablono.core.color_field10124.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.color_field10124.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field10124);

/**
 * Creates a date input field.
 */
sablono.core.date_field10128 = (function sablono$core$date_field10128(var_args){
var args10129 = [];
var len__7652__auto___10196 = arguments.length;
var i__7653__auto___10197 = (0);
while(true){
if((i__7653__auto___10197 < len__7652__auto___10196)){
args10129.push((arguments[i__7653__auto___10197]));

var G__10198 = (i__7653__auto___10197 + (1));
i__7653__auto___10197 = G__10198;
continue;
} else {
}
break;
}

var G__10131 = args10129.length;
switch (G__10131) {
case 1:
return sablono.core.date_field10128.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field10128.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10129.length)].join('')));

}
});

sablono.core.date_field10128.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.date_field10128.call(null,name__10039__auto__,null);
});

sablono.core.date_field10128.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.date_field10128.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field10128);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field10132 = (function sablono$core$datetime_field10132(var_args){
var args10133 = [];
var len__7652__auto___10200 = arguments.length;
var i__7653__auto___10201 = (0);
while(true){
if((i__7653__auto___10201 < len__7652__auto___10200)){
args10133.push((arguments[i__7653__auto___10201]));

var G__10202 = (i__7653__auto___10201 + (1));
i__7653__auto___10201 = G__10202;
continue;
} else {
}
break;
}

var G__10135 = args10133.length;
switch (G__10135) {
case 1:
return sablono.core.datetime_field10132.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field10132.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10133.length)].join('')));

}
});

sablono.core.datetime_field10132.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.datetime_field10132.call(null,name__10039__auto__,null);
});

sablono.core.datetime_field10132.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.datetime_field10132.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field10132);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field10136 = (function sablono$core$datetime_local_field10136(var_args){
var args10137 = [];
var len__7652__auto___10204 = arguments.length;
var i__7653__auto___10205 = (0);
while(true){
if((i__7653__auto___10205 < len__7652__auto___10204)){
args10137.push((arguments[i__7653__auto___10205]));

var G__10206 = (i__7653__auto___10205 + (1));
i__7653__auto___10205 = G__10206;
continue;
} else {
}
break;
}

var G__10139 = args10137.length;
switch (G__10139) {
case 1:
return sablono.core.datetime_local_field10136.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field10136.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10137.length)].join('')));

}
});

sablono.core.datetime_local_field10136.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.datetime_local_field10136.call(null,name__10039__auto__,null);
});

sablono.core.datetime_local_field10136.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.datetime_local_field10136.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field10136);

/**
 * Creates a email input field.
 */
sablono.core.email_field10140 = (function sablono$core$email_field10140(var_args){
var args10141 = [];
var len__7652__auto___10208 = arguments.length;
var i__7653__auto___10209 = (0);
while(true){
if((i__7653__auto___10209 < len__7652__auto___10208)){
args10141.push((arguments[i__7653__auto___10209]));

var G__10210 = (i__7653__auto___10209 + (1));
i__7653__auto___10209 = G__10210;
continue;
} else {
}
break;
}

var G__10143 = args10141.length;
switch (G__10143) {
case 1:
return sablono.core.email_field10140.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field10140.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10141.length)].join('')));

}
});

sablono.core.email_field10140.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.email_field10140.call(null,name__10039__auto__,null);
});

sablono.core.email_field10140.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.email_field10140.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field10140);

/**
 * Creates a file input field.
 */
sablono.core.file_field10144 = (function sablono$core$file_field10144(var_args){
var args10145 = [];
var len__7652__auto___10212 = arguments.length;
var i__7653__auto___10213 = (0);
while(true){
if((i__7653__auto___10213 < len__7652__auto___10212)){
args10145.push((arguments[i__7653__auto___10213]));

var G__10214 = (i__7653__auto___10213 + (1));
i__7653__auto___10213 = G__10214;
continue;
} else {
}
break;
}

var G__10147 = args10145.length;
switch (G__10147) {
case 1:
return sablono.core.file_field10144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field10144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10145.length)].join('')));

}
});

sablono.core.file_field10144.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.file_field10144.call(null,name__10039__auto__,null);
});

sablono.core.file_field10144.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.file_field10144.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field10144);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field10148 = (function sablono$core$hidden_field10148(var_args){
var args10149 = [];
var len__7652__auto___10216 = arguments.length;
var i__7653__auto___10217 = (0);
while(true){
if((i__7653__auto___10217 < len__7652__auto___10216)){
args10149.push((arguments[i__7653__auto___10217]));

var G__10218 = (i__7653__auto___10217 + (1));
i__7653__auto___10217 = G__10218;
continue;
} else {
}
break;
}

var G__10151 = args10149.length;
switch (G__10151) {
case 1:
return sablono.core.hidden_field10148.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field10148.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10149.length)].join('')));

}
});

sablono.core.hidden_field10148.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.hidden_field10148.call(null,name__10039__auto__,null);
});

sablono.core.hidden_field10148.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.hidden_field10148.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field10148);

/**
 * Creates a month input field.
 */
sablono.core.month_field10152 = (function sablono$core$month_field10152(var_args){
var args10153 = [];
var len__7652__auto___10220 = arguments.length;
var i__7653__auto___10221 = (0);
while(true){
if((i__7653__auto___10221 < len__7652__auto___10220)){
args10153.push((arguments[i__7653__auto___10221]));

var G__10222 = (i__7653__auto___10221 + (1));
i__7653__auto___10221 = G__10222;
continue;
} else {
}
break;
}

var G__10155 = args10153.length;
switch (G__10155) {
case 1:
return sablono.core.month_field10152.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field10152.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10153.length)].join('')));

}
});

sablono.core.month_field10152.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.month_field10152.call(null,name__10039__auto__,null);
});

sablono.core.month_field10152.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.month_field10152.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field10152);

/**
 * Creates a number input field.
 */
sablono.core.number_field10156 = (function sablono$core$number_field10156(var_args){
var args10157 = [];
var len__7652__auto___10224 = arguments.length;
var i__7653__auto___10225 = (0);
while(true){
if((i__7653__auto___10225 < len__7652__auto___10224)){
args10157.push((arguments[i__7653__auto___10225]));

var G__10226 = (i__7653__auto___10225 + (1));
i__7653__auto___10225 = G__10226;
continue;
} else {
}
break;
}

var G__10159 = args10157.length;
switch (G__10159) {
case 1:
return sablono.core.number_field10156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field10156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10157.length)].join('')));

}
});

sablono.core.number_field10156.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.number_field10156.call(null,name__10039__auto__,null);
});

sablono.core.number_field10156.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.number_field10156.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field10156);

/**
 * Creates a password input field.
 */
sablono.core.password_field10160 = (function sablono$core$password_field10160(var_args){
var args10161 = [];
var len__7652__auto___10228 = arguments.length;
var i__7653__auto___10229 = (0);
while(true){
if((i__7653__auto___10229 < len__7652__auto___10228)){
args10161.push((arguments[i__7653__auto___10229]));

var G__10230 = (i__7653__auto___10229 + (1));
i__7653__auto___10229 = G__10230;
continue;
} else {
}
break;
}

var G__10163 = args10161.length;
switch (G__10163) {
case 1:
return sablono.core.password_field10160.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field10160.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10161.length)].join('')));

}
});

sablono.core.password_field10160.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.password_field10160.call(null,name__10039__auto__,null);
});

sablono.core.password_field10160.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.password_field10160.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field10160);

/**
 * Creates a range input field.
 */
sablono.core.range_field10164 = (function sablono$core$range_field10164(var_args){
var args10165 = [];
var len__7652__auto___10232 = arguments.length;
var i__7653__auto___10233 = (0);
while(true){
if((i__7653__auto___10233 < len__7652__auto___10232)){
args10165.push((arguments[i__7653__auto___10233]));

var G__10234 = (i__7653__auto___10233 + (1));
i__7653__auto___10233 = G__10234;
continue;
} else {
}
break;
}

var G__10167 = args10165.length;
switch (G__10167) {
case 1:
return sablono.core.range_field10164.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field10164.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10165.length)].join('')));

}
});

sablono.core.range_field10164.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.range_field10164.call(null,name__10039__auto__,null);
});

sablono.core.range_field10164.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.range_field10164.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field10164);

/**
 * Creates a search input field.
 */
sablono.core.search_field10168 = (function sablono$core$search_field10168(var_args){
var args10169 = [];
var len__7652__auto___10236 = arguments.length;
var i__7653__auto___10237 = (0);
while(true){
if((i__7653__auto___10237 < len__7652__auto___10236)){
args10169.push((arguments[i__7653__auto___10237]));

var G__10238 = (i__7653__auto___10237 + (1));
i__7653__auto___10237 = G__10238;
continue;
} else {
}
break;
}

var G__10171 = args10169.length;
switch (G__10171) {
case 1:
return sablono.core.search_field10168.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field10168.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10169.length)].join('')));

}
});

sablono.core.search_field10168.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.search_field10168.call(null,name__10039__auto__,null);
});

sablono.core.search_field10168.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.search_field10168.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field10168);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field10172 = (function sablono$core$tel_field10172(var_args){
var args10173 = [];
var len__7652__auto___10240 = arguments.length;
var i__7653__auto___10241 = (0);
while(true){
if((i__7653__auto___10241 < len__7652__auto___10240)){
args10173.push((arguments[i__7653__auto___10241]));

var G__10242 = (i__7653__auto___10241 + (1));
i__7653__auto___10241 = G__10242;
continue;
} else {
}
break;
}

var G__10175 = args10173.length;
switch (G__10175) {
case 1:
return sablono.core.tel_field10172.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field10172.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10173.length)].join('')));

}
});

sablono.core.tel_field10172.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.tel_field10172.call(null,name__10039__auto__,null);
});

sablono.core.tel_field10172.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.tel_field10172.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field10172);

/**
 * Creates a text input field.
 */
sablono.core.text_field10176 = (function sablono$core$text_field10176(var_args){
var args10177 = [];
var len__7652__auto___10244 = arguments.length;
var i__7653__auto___10245 = (0);
while(true){
if((i__7653__auto___10245 < len__7652__auto___10244)){
args10177.push((arguments[i__7653__auto___10245]));

var G__10246 = (i__7653__auto___10245 + (1));
i__7653__auto___10245 = G__10246;
continue;
} else {
}
break;
}

var G__10179 = args10177.length;
switch (G__10179) {
case 1:
return sablono.core.text_field10176.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field10176.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10177.length)].join('')));

}
});

sablono.core.text_field10176.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.text_field10176.call(null,name__10039__auto__,null);
});

sablono.core.text_field10176.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.text_field10176.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field10176);

/**
 * Creates a time input field.
 */
sablono.core.time_field10180 = (function sablono$core$time_field10180(var_args){
var args10181 = [];
var len__7652__auto___10248 = arguments.length;
var i__7653__auto___10249 = (0);
while(true){
if((i__7653__auto___10249 < len__7652__auto___10248)){
args10181.push((arguments[i__7653__auto___10249]));

var G__10250 = (i__7653__auto___10249 + (1));
i__7653__auto___10249 = G__10250;
continue;
} else {
}
break;
}

var G__10183 = args10181.length;
switch (G__10183) {
case 1:
return sablono.core.time_field10180.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field10180.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10181.length)].join('')));

}
});

sablono.core.time_field10180.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.time_field10180.call(null,name__10039__auto__,null);
});

sablono.core.time_field10180.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.time_field10180.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field10180);

/**
 * Creates a url input field.
 */
sablono.core.url_field10184 = (function sablono$core$url_field10184(var_args){
var args10185 = [];
var len__7652__auto___10252 = arguments.length;
var i__7653__auto___10253 = (0);
while(true){
if((i__7653__auto___10253 < len__7652__auto___10252)){
args10185.push((arguments[i__7653__auto___10253]));

var G__10254 = (i__7653__auto___10253 + (1));
i__7653__auto___10253 = G__10254;
continue;
} else {
}
break;
}

var G__10187 = args10185.length;
switch (G__10187) {
case 1:
return sablono.core.url_field10184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field10184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10185.length)].join('')));

}
});

sablono.core.url_field10184.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.url_field10184.call(null,name__10039__auto__,null);
});

sablono.core.url_field10184.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.url_field10184.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field10184);

/**
 * Creates a week input field.
 */
sablono.core.week_field10188 = (function sablono$core$week_field10188(var_args){
var args10189 = [];
var len__7652__auto___10256 = arguments.length;
var i__7653__auto___10257 = (0);
while(true){
if((i__7653__auto___10257 < len__7652__auto___10256)){
args10189.push((arguments[i__7653__auto___10257]));

var G__10258 = (i__7653__auto___10257 + (1));
i__7653__auto___10257 = G__10258;
continue;
} else {
}
break;
}

var G__10191 = args10189.length;
switch (G__10191) {
case 1:
return sablono.core.week_field10188.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field10188.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10189.length)].join('')));

}
});

sablono.core.week_field10188.cljs$core$IFn$_invoke$arity$1 = (function (name__10039__auto__){
return sablono.core.week_field10188.call(null,name__10039__auto__,null);
});

sablono.core.week_field10188.cljs$core$IFn$_invoke$arity$2 = (function (name__10039__auto__,value__10040__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10039__auto__,value__10040__auto__);
});

sablono.core.week_field10188.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field10188);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box10260 = (function sablono$core$check_box10260(var_args){
var args10261 = [];
var len__7652__auto___10264 = arguments.length;
var i__7653__auto___10265 = (0);
while(true){
if((i__7653__auto___10265 < len__7652__auto___10264)){
args10261.push((arguments[i__7653__auto___10265]));

var G__10266 = (i__7653__auto___10265 + (1));
i__7653__auto___10265 = G__10266;
continue;
} else {
}
break;
}

var G__10263 = args10261.length;
switch (G__10263) {
case 1:
return sablono.core.check_box10260.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box10260.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box10260.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10261.length)].join('')));

}
});

sablono.core.check_box10260.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box10260.call(null,name,null);
});

sablono.core.check_box10260.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box10260.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box10260.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__6577__auto__ = value;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box10260.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box10260);
/**
 * Creates a radio button.
 */
sablono.core.radio_button10268 = (function sablono$core$radio_button10268(var_args){
var args10269 = [];
var len__7652__auto___10272 = arguments.length;
var i__7653__auto___10273 = (0);
while(true){
if((i__7653__auto___10273 < len__7652__auto___10272)){
args10269.push((arguments[i__7653__auto___10273]));

var G__10274 = (i__7653__auto___10273 + (1));
i__7653__auto___10273 = G__10274;
continue;
} else {
}
break;
}

var G__10271 = args10269.length;
switch (G__10271) {
case 1:
return sablono.core.radio_button10268.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button10268.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button10268.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10269.length)].join('')));

}
});

sablono.core.radio_button10268.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button10268.call(null,group,null);
});

sablono.core.radio_button10268.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button10268.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button10268.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__6577__auto__ = value;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button10268.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button10268);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options10276 = (function sablono$core$select_options10276(coll){
var iter__7357__auto__ = (function sablono$core$select_options10276_$_iter__10293(s__10294){
return (new cljs.core.LazySeq(null,(function (){
var s__10294__$1 = s__10294;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10294__$1);
if(temp__4657__auto__){
var s__10294__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10294__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__10294__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__10296 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__10295 = (0);
while(true){
if((i__10295 < size__7356__auto__)){
var x = cljs.core._nth.call(null,c__7355__auto__,i__10295);
cljs.core.chunk_append.call(null,b__10296,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10303 = x;
var text = cljs.core.nth.call(null,vec__10303,(0),null);
var val = cljs.core.nth.call(null,vec__10303,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10303,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options10276.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__10309 = (i__10295 + (1));
i__10295 = G__10309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10296),sablono$core$select_options10276_$_iter__10293.call(null,cljs.core.chunk_rest.call(null,s__10294__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10296),null);
}
} else {
var x = cljs.core.first.call(null,s__10294__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10306 = x;
var text = cljs.core.nth.call(null,vec__10306,(0),null);
var val = cljs.core.nth.call(null,vec__10306,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10306,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options10276.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options10276_$_iter__10293.call(null,cljs.core.rest.call(null,s__10294__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7357__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options10276);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down10310 = (function sablono$core$drop_down10310(var_args){
var args10311 = [];
var len__7652__auto___10314 = arguments.length;
var i__7653__auto___10315 = (0);
while(true){
if((i__7653__auto___10315 < len__7652__auto___10314)){
args10311.push((arguments[i__7653__auto___10315]));

var G__10316 = (i__7653__auto___10315 + (1));
i__7653__auto___10315 = G__10316;
continue;
} else {
}
break;
}

var G__10313 = args10311.length;
switch (G__10313) {
case 2:
return sablono.core.drop_down10310.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down10310.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10311.length)].join('')));

}
});

sablono.core.drop_down10310.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down10310.call(null,name,options,null);
});

sablono.core.drop_down10310.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down10310.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down10310);
/**
 * Creates a text area element.
 */
sablono.core.text_area10318 = (function sablono$core$text_area10318(var_args){
var args10319 = [];
var len__7652__auto___10322 = arguments.length;
var i__7653__auto___10323 = (0);
while(true){
if((i__7653__auto___10323 < len__7652__auto___10322)){
args10319.push((arguments[i__7653__auto___10323]));

var G__10324 = (i__7653__auto___10323 + (1));
i__7653__auto___10323 = G__10324;
continue;
} else {
}
break;
}

var G__10321 = args10319.length;
switch (G__10321) {
case 1:
return sablono.core.text_area10318.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area10318.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10319.length)].join('')));

}
});

sablono.core.text_area10318.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area10318.call(null,name,null);
});

sablono.core.text_area10318.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__6577__auto__ = value;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area10318.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area10318);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label10326 = (function sablono$core$label10326(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label10326);
/**
 * Creates a submit button.
 */
sablono.core.submit_button10327 = (function sablono$core$submit_button10327(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button10327);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button10328 = (function sablono$core$reset_button10328(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button10328);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to10329 = (function sablono$core$form_to10329(var_args){
var args__7659__auto__ = [];
var len__7652__auto___10336 = arguments.length;
var i__7653__auto___10337 = (0);
while(true){
if((i__7653__auto___10337 < len__7652__auto___10336)){
args__7659__auto__.push((arguments[i__7653__auto___10337]));

var G__10338 = (i__7653__auto___10337 + (1));
i__7653__auto___10337 = G__10338;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to10329.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

sablono.core.form_to10329.cljs$core$IFn$_invoke$arity$variadic = (function (p__10332,body){
var vec__10333 = p__10332;
var method = cljs.core.nth.call(null,vec__10333,(0),null);
var action = cljs.core.nth.call(null,vec__10333,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to10329.cljs$lang$maxFixedArity = (1);

sablono.core.form_to10329.cljs$lang$applyTo = (function (seq10330){
var G__10331 = cljs.core.first.call(null,seq10330);
var seq10330__$1 = cljs.core.next.call(null,seq10330);
return sablono.core.form_to10329.cljs$core$IFn$_invoke$arity$variadic(G__10331,seq10330__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to10329);

//# sourceMappingURL=core.js.map