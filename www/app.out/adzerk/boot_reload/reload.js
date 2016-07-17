// Compiled by ClojureScript 1.9.93 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__8013_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8013_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__8018 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8019 = null;
var count__8020 = (0);
var i__8021 = (0);
while(true){
if((i__8021 < count__8020)){
var s = cljs.core._nth.call(null,chunk__8019,i__8021);
var temp__4657__auto___8022 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___8022)){
var sheet_8023 = temp__4657__auto___8022;
var temp__4657__auto___8024__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_8023.href,changed);
if(cljs.core.truth_(temp__4657__auto___8024__$1)){
var href_uri_8025 = temp__4657__auto___8024__$1;
sheet_8023.ownerNode.href = href_uri_8025.makeUnique().toString();
} else {
}
} else {
}

var G__8026 = seq__8018;
var G__8027 = chunk__8019;
var G__8028 = count__8020;
var G__8029 = (i__8021 + (1));
seq__8018 = G__8026;
chunk__8019 = G__8027;
count__8020 = G__8028;
i__8021 = G__8029;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8018);
if(temp__4657__auto__){
var seq__8018__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8018__$1)){
var c__7388__auto__ = cljs.core.chunk_first.call(null,seq__8018__$1);
var G__8030 = cljs.core.chunk_rest.call(null,seq__8018__$1);
var G__8031 = c__7388__auto__;
var G__8032 = cljs.core.count.call(null,c__7388__auto__);
var G__8033 = (0);
seq__8018 = G__8030;
chunk__8019 = G__8031;
count__8020 = G__8032;
i__8021 = G__8033;
continue;
} else {
var s = cljs.core.first.call(null,seq__8018__$1);
var temp__4657__auto___8034__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___8034__$1)){
var sheet_8035 = temp__4657__auto___8034__$1;
var temp__4657__auto___8036__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_8035.href,changed);
if(cljs.core.truth_(temp__4657__auto___8036__$2)){
var href_uri_8037 = temp__4657__auto___8036__$2;
sheet_8035.ownerNode.href = href_uri_8037.makeUnique().toString();
} else {
}
} else {
}

var G__8038 = cljs.core.next.call(null,seq__8018__$1);
var G__8039 = null;
var G__8040 = (0);
var G__8041 = (0);
seq__8018 = G__8038;
chunk__8019 = G__8039;
count__8020 = G__8040;
i__8021 = G__8041;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__8046 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8047 = null;
var count__8048 = (0);
var i__8049 = (0);
while(true){
if((i__8049 < count__8048)){
var s = cljs.core._nth.call(null,chunk__8047,i__8049);
var temp__4657__auto___8050 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___8050)){
var image_8051 = temp__4657__auto___8050;
var temp__4657__auto___8052__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_8051.src,changed);
if(cljs.core.truth_(temp__4657__auto___8052__$1)){
var href_uri_8053 = temp__4657__auto___8052__$1;
image_8051.src = href_uri_8053.makeUnique().toString();
} else {
}
} else {
}

var G__8054 = seq__8046;
var G__8055 = chunk__8047;
var G__8056 = count__8048;
var G__8057 = (i__8049 + (1));
seq__8046 = G__8054;
chunk__8047 = G__8055;
count__8048 = G__8056;
i__8049 = G__8057;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8046);
if(temp__4657__auto__){
var seq__8046__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8046__$1)){
var c__7388__auto__ = cljs.core.chunk_first.call(null,seq__8046__$1);
var G__8058 = cljs.core.chunk_rest.call(null,seq__8046__$1);
var G__8059 = c__7388__auto__;
var G__8060 = cljs.core.count.call(null,c__7388__auto__);
var G__8061 = (0);
seq__8046 = G__8058;
chunk__8047 = G__8059;
count__8048 = G__8060;
i__8049 = G__8061;
continue;
} else {
var s = cljs.core.first.call(null,seq__8046__$1);
var temp__4657__auto___8062__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___8062__$1)){
var image_8063 = temp__4657__auto___8062__$1;
var temp__4657__auto___8064__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_8063.src,changed);
if(cljs.core.truth_(temp__4657__auto___8064__$2)){
var href_uri_8065 = temp__4657__auto___8064__$2;
image_8063.src = href_uri_8065.makeUnique().toString();
} else {
}
} else {
}

var G__8066 = cljs.core.next.call(null,seq__8046__$1);
var G__8067 = null;
var G__8068 = (0);
var G__8069 = (0);
seq__8046 = G__8066;
chunk__8047 = G__8067;
count__8048 = G__8068;
i__8049 = G__8069;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8072){
var map__8075 = p__8072;
var map__8075__$1 = ((((!((map__8075 == null)))?((((map__8075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8075):map__8075);
var on_jsload = cljs.core.get.call(null,map__8075__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8075,map__8075__$1,on_jsload){
return (function (p1__8070_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8070_SHARP_,".js");
});})(map__8075,map__8075__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8075,map__8075__$1,on_jsload){
return (function (p1__8071_SHARP_){
return goog.Uri.parse(p1__8071_SHARP_).makeUnique();
});})(js_files,map__8075,map__8075__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8075,map__8075__$1,on_jsload){
return (function() { 
var G__8077__delegate = function (_){
return on_jsload.call(null);
};
var G__8077 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8078__i = 0, G__8078__a = new Array(arguments.length -  0);
while (G__8078__i < G__8078__a.length) {G__8078__a[G__8078__i] = arguments[G__8078__i + 0]; ++G__8078__i;}
  _ = new cljs.core.IndexedSeq(G__8078__a,0);
} 
return G__8077__delegate.call(this,_);};
G__8077.cljs$lang$maxFixedArity = 0;
G__8077.cljs$lang$applyTo = (function (arglist__8079){
var _ = cljs.core.seq(arglist__8079);
return G__8077__delegate(_);
});
G__8077.cljs$core$IFn$_invoke$arity$variadic = G__8077__delegate;
return G__8077;
})()
;})(js_files,map__8075,map__8075__$1,on_jsload))
,((function (js_files,map__8075,map__8075__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8075,map__8075__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__8084_8088 = cljs.core.seq.call(null,things_to_log);
var chunk__8085_8089 = null;
var count__8086_8090 = (0);
var i__8087_8091 = (0);
while(true){
if((i__8087_8091 < count__8086_8090)){
var t_8092 = cljs.core._nth.call(null,chunk__8085_8089,i__8087_8091);
console.log(t_8092);

var G__8093 = seq__8084_8088;
var G__8094 = chunk__8085_8089;
var G__8095 = count__8086_8090;
var G__8096 = (i__8087_8091 + (1));
seq__8084_8088 = G__8093;
chunk__8085_8089 = G__8094;
count__8086_8090 = G__8095;
i__8087_8091 = G__8096;
continue;
} else {
var temp__4657__auto___8097 = cljs.core.seq.call(null,seq__8084_8088);
if(temp__4657__auto___8097){
var seq__8084_8098__$1 = temp__4657__auto___8097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8084_8098__$1)){
var c__7388__auto___8099 = cljs.core.chunk_first.call(null,seq__8084_8098__$1);
var G__8100 = cljs.core.chunk_rest.call(null,seq__8084_8098__$1);
var G__8101 = c__7388__auto___8099;
var G__8102 = cljs.core.count.call(null,c__7388__auto___8099);
var G__8103 = (0);
seq__8084_8088 = G__8100;
chunk__8085_8089 = G__8101;
count__8086_8090 = G__8102;
i__8087_8091 = G__8103;
continue;
} else {
var t_8104 = cljs.core.first.call(null,seq__8084_8098__$1);
console.log(t_8104);

var G__8105 = cljs.core.next.call(null,seq__8084_8098__$1);
var G__8106 = null;
var G__8107 = (0);
var G__8108 = (0);
seq__8084_8088 = G__8105;
chunk__8085_8089 = G__8106;
count__8086_8090 = G__8107;
i__8087_8091 = G__8108;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__8109_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__8109_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__8111 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__8111);

adzerk.boot_reload.reload.reload_css.call(null,G__8111);

adzerk.boot_reload.reload.reload_img.call(null,G__8111);

return G__8111;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map