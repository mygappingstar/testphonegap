// Compiled by ClojureScript 1.9.93 {}
goog.provide('app.admin');
goog.require('cljs.core');
goog.require('hoodie.store');
goog.require('markdown.core');
goog.require('app.states');
goog.require('app.pages');
goog.require('javelin.core');
goog.require('goog.events');
goog.require('cljs.core.async');
goog.require('rum.core');
goog.require('cljs_http.client');
goog.require('alandipert.storage_atom');
goog.require('app.media_queries');
goog.require('hoodie.account');
goog.require('app.collections');
goog.require('app.routes');
goog.require('cljs.spec');
goog.require('clojure.string');
goog.require('app.i18n');
if(typeof app.admin.app !== 'undefined'){
} else {
app.admin.app = (new Hoodie());
}
if(typeof app.admin.account_store !== 'undefined'){
} else {
app.admin.account_store = hoodie.account.create_account_store.call(null,app.admin.app,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
}
app.admin.app.account.authenticate().done((function (p1__27233_SHARP_){
var temp__4657__auto__ = app.admin.account_store.app.account.username;
if(cljs.core.truth_(temp__4657__auto__)){
var username = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,app.admin.account_store.atom_store,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),p1__27233_SHARP_);
} else {
return null;
}
})).fail((function (){
console.log("mehhh");

return hoodie.account.sign_out.call(null,app.admin.account_store);
}));
if(typeof app.admin.db_store !== 'undefined'){
} else {
app.admin.db_store = hoodie.store.create_user_store.call(null,app.admin.app,app.collections.atom_stores);
}
if(typeof app.admin.current_mode !== 'undefined'){
} else {
app.admin.current_mode = cljs.core.atom.call(null,"news");
}
if(typeof app.admin.editing_id !== 'undefined'){
} else {
app.admin.editing_id = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof app.admin.editing_field !== 'undefined'){
} else {
app.admin.editing_field = cljs.core.atom.call(null,null);
}
app.admin.main_nav_item = rum.core.build_defc.call(null,(function (item){
return React.createElement("li",{"key": item, "onClick": (function (){
return cljs.core.reset_BANG_.call(null,app.admin.current_mode,item);
}), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,item,rum.core.react.call(null,app.admin.current_mode)))?"is-active":null)], null))},React.createElement("a",{"href": "#"},sablono.interpreter.interpret.call(null,item)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.identity], null),rum.core.reactive], null),"main-nav-item");
app.admin.aside = rum.core.build_defc.call(null,(function (){
return React.createElement("aside",{"className": "menu"},React.createElement("p",{"className": "menu-label"},"General"),React.createElement("ul",{"className": "menu-list"},React.createElement("li",null,React.createElement("a",{"href": "#", "className": "is-active"},"Dashboard"))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"aside");
if(typeof app.admin.field_editor !== 'undefined'){
} else {
app.admin.field_editor = (function (){var method_table__7502__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7503__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7504__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7505__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7506__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"app.admin","field-editor"),app.collections.type_field,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7506__auto__,method_table__7502__auto__,prefer_table__7503__auto__,method_cache__7504__auto__,cached_hierarchy__7505__auto__));
})();
}
app.admin.default_field_editor = rum.core.build_defc.call(null,(function (data_type,k,id,init_item,draft){
return React.createElement("td",null,sablono.interpreter.create_element.call(null,"input",{"type": "text", "placeholder": app.collections.key_name.call(null,data_type,k), "onChange": (function (p1__27236_SHARP_){
return cljs.core.swap_BANG_.call(null,draft,cljs.core.assoc,k,p1__27236_SHARP_.target.value);
}), "value": cljs.core.get.call(null,rum.core.react.call(null,draft),k,""), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input",(cljs.core.truth_(app.collections.validate.call(null,data_type,k,cljs.core.get.call(null,rum.core.react.call(null,draft),k)))?"is-success":"is-danger")], null))}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"default-field-editor");
app.admin.field_editor_modal = rum.core.build_defc.call(null,(function (data_type,k,id,init_item,draft,component){
var current = rum.core.react.call(null,draft);
var invalid_field_QMARK_ = cljs.core.not.call(null,app.collections.validate.call(null,data_type,k,cljs.core.get.call(null,current,k)));
var invalid_QMARK_ = cljs.core.not_every_QMARK_.call(null,((function (current,invalid_field_QMARK_){
return (function (p1__27237_SHARP_){
return app.collections.validate.call(null,data_type,p1__27237_SHARP_,cljs.core.get.call(null,current,p1__27237_SHARP_));
});})(current,invalid_field_QMARK_))
,app.collections.type_keys.call(null,data_type));
return React.createElement("td",null,React.createElement("div",{"className": "modal is-active"},React.createElement("div",{"key": (0), "className": "modal-background"}),React.createElement("div",{"key": (1), "className": "modal-card"},React.createElement("header",{"className": "modal-card-head"},React.createElement("p",{"className": "modal-card-title"},"Editing"),React.createElement("button",{"onClick": ((function (current,invalid_field_QMARK_,invalid_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,app.admin.editing_field,null);
});})(current,invalid_field_QMARK_,invalid_QMARK_))
, "className": "delete"})),(function (){var attrs27240 = component.call(null,data_type,k,id,init_item,draft);
return cljs.core.apply.call(null,React.createElement,"section",((cljs.core.map_QMARK_.call(null,attrs27240))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-card-body"], null)], null),attrs27240)):{"className": "modal-card-body"}),((cljs.core.map_QMARK_.call(null,attrs27240))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27240)], null)));
})(),(function (){var attrs27241 = (cljs.core.truth_(id)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.is-success","a.button.is-success",989835956),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"class","class",-2030961996),((invalid_QMARK_)?"is-disabled":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((invalid_QMARK_)?null:((function (current,invalid_field_QMARK_,invalid_QMARK_){
return (function (){
hoodie.store.update_BANG_.call(null,app.admin.db_store,data_type,id,current);

hoodie.store.publish_all_BANG_.call(null,app.admin.db_store,data_type);

return cljs.core.reset_BANG_.call(null,app.admin.editing_field,null);
});})(current,invalid_field_QMARK_,invalid_QMARK_))
)], null),"Save"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"class","class",-2030961996),((invalid_field_QMARK_)?"is-disabled":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current,invalid_field_QMARK_,invalid_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,app.admin.editing_field,null);
});})(current,invalid_field_QMARK_,invalid_QMARK_))
], null),"Done"], null));
return cljs.core.apply.call(null,React.createElement,"footer",((cljs.core.map_QMARK_.call(null,attrs27241))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-card-foot"], null)], null),attrs27241)):{"className": "modal-card-foot"}),((cljs.core.map_QMARK_.call(null,attrs27241))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("a",{"key": (1), "onClick": ((function (attrs27241,current,invalid_field_QMARK_,invalid_QMARK_){
return (function (){
cljs.core.swap_BANG_.call(null,app.admin.editing_id,cljs.core.dissoc,data_type,null);

cljs.core.reset_BANG_.call(null,draft,init_item);

return cljs.core.reset_BANG_.call(null,app.admin.editing_field,null);
});})(attrs27241,current,invalid_field_QMARK_,invalid_QMARK_))
, "className": "button is-light"},"Cancel")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27241),React.createElement("a",{"key": (1), "onClick": ((function (attrs27241,current,invalid_field_QMARK_,invalid_QMARK_){
return (function (){
cljs.core.swap_BANG_.call(null,app.admin.editing_id,cljs.core.dissoc,data_type,null);

cljs.core.reset_BANG_.call(null,draft,init_item);

return cljs.core.reset_BANG_.call(null,app.admin.editing_field,null);
});})(attrs27241,current,invalid_field_QMARK_,invalid_QMARK_))
, "className": "button is-light"},"Cancel")], null)));
})())));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"field-editor-modal");
app.admin.range_field_editor = rum.core.build_defc.call(null,(function (data_type,k,id,init_item,draft){
return sablono.interpreter.create_element.call(null,"input",{"type": "range", "min": (0), "max": (100), "step": (1), "placeholder": app.collections.key_name.call(null,data_type,k), "onChange": (function (p1__27244_SHARP_){
return cljs.core.swap_BANG_.call(null,draft,cljs.core.assoc,k,p1__27244_SHARP_.target.value);
}), "value": cljs.core.get.call(null,rum.core.react.call(null,draft),k,""), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input",(cljs.core.truth_(app.collections.validate.call(null,data_type,k,cljs.core.get.call(null,rum.core.react.call(null,draft),k)))?"is-success":"is-danger")], null))});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"range-field-editor");
cljs.core._add_method.call(null,app.admin.field_editor,new cljs.core.Keyword("event","month","event/month",-2139713139),(function (data_type,k,id,init_item,draft){
return app.admin.field_editor_modal.call(null,data_type,k,id,init_item,draft,app.admin.range_field_editor);
}));
app.admin.recent_files = cljs.core.atom.call(null);
app.admin.photo_field_editor = rum.core.build_defc.call(null,(function (data_type,k,id,init_item,draft){
var attrs27245 = app.admin.uploader.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27245))?sablono.interpreter.attributes.call(null,attrs27245):null),((cljs.core.map_QMARK_.call(null,attrs27245))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,(function (){var temp__4655__auto__ = cljs.core.get.call(null,rum.core.react.call(null,draft),k);
if(cljs.core.truth_(temp__4655__auto__)){
var current_url = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),app.collections.photo_url.call(null,cljs.core.get.call(null,rum.core.react.call(null,draft),k),new cljs.core.Keyword(null,"small","small",2133478704))], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No photo selected"], null);
}
})()),React.createElement("p",null,"Click on a photo to select"),cljs.core.into_array.call(null,(function (){var iter__7357__auto__ = ((function (attrs27245){
return (function app$admin$iter__27250(s__27251){
return (new cljs.core.LazySeq(null,((function (attrs27245){
return (function (){
var s__27251__$1 = s__27251;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27251__$1);
if(temp__4657__auto__){
var s__27251__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27251__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__27251__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__27253 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__27252 = (0);
while(true){
if((i__27252 < size__7356__auto__)){
var vec__27260 = cljs.core._nth.call(null,c__7355__auto__,i__27252);
var filename = cljs.core.nth.call(null,vec__27260,(0),null);
cljs.core.chunk_append.call(null,b__27253,React.createElement("img",{"key": filename, "onClick": ((function (i__27252,vec__27260,filename,c__7355__auto__,size__7356__auto__,b__27253,s__27251__$2,temp__4657__auto__,attrs27245){
return (function (){
return cljs.core.swap_BANG_.call(null,draft,cljs.core.assoc,k,filename);
});})(i__27252,vec__27260,filename,c__7355__auto__,size__7356__auto__,b__27253,s__27251__$2,temp__4657__auto__,attrs27245))
, "src": app.collections.photo_url.call(null,filename,new cljs.core.Keyword(null,"small","small",2133478704)), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,filename,cljs.core.get.call(null,rum.core.react.call(null,draft),k)))?null:"is-fool")], null))}));

var G__27282 = (i__27252 + (1));
i__27252 = G__27282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27253),app$admin$iter__27250.call(null,cljs.core.chunk_rest.call(null,s__27251__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27253),null);
}
} else {
var vec__27263 = cljs.core.first.call(null,s__27251__$2);
var filename = cljs.core.nth.call(null,vec__27263,(0),null);
return cljs.core.cons.call(null,React.createElement("img",{"key": filename, "onClick": ((function (vec__27263,filename,s__27251__$2,temp__4657__auto__,attrs27245){
return (function (){
return cljs.core.swap_BANG_.call(null,draft,cljs.core.assoc,k,filename);
});})(vec__27263,filename,s__27251__$2,temp__4657__auto__,attrs27245))
, "src": app.collections.photo_url.call(null,filename,new cljs.core.Keyword(null,"small","small",2133478704)), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,filename,cljs.core.get.call(null,rum.core.react.call(null,draft),k)))?null:"is-fool")], null))}),app$admin$iter__27250.call(null,cljs.core.rest.call(null,s__27251__$2)));
}
} else {
return null;
}
break;
}
});})(attrs27245))
,null,null));
});})(attrs27245))
;
return iter__7357__auto__.call(null,rum.core.react.call(null,app.admin.recent_files));
})())], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27245),sablono.interpreter.interpret.call(null,(function (){var temp__4655__auto__ = cljs.core.get.call(null,rum.core.react.call(null,draft),k);
if(cljs.core.truth_(temp__4655__auto__)){
var current_url = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),app.collections.photo_url.call(null,cljs.core.get.call(null,rum.core.react.call(null,draft),k),new cljs.core.Keyword(null,"small","small",2133478704))], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No photo selected"], null);
}
})()),React.createElement("p",null,"Click on a photo to select"),cljs.core.into_array.call(null,(function (){var iter__7357__auto__ = ((function (attrs27245){
return (function app$admin$iter__27266(s__27267){
return (new cljs.core.LazySeq(null,((function (attrs27245){
return (function (){
var s__27267__$1 = s__27267;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27267__$1);
if(temp__4657__auto__){
var s__27267__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27267__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__27267__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__27269 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__27268 = (0);
while(true){
if((i__27268 < size__7356__auto__)){
var vec__27276 = cljs.core._nth.call(null,c__7355__auto__,i__27268);
var filename = cljs.core.nth.call(null,vec__27276,(0),null);
cljs.core.chunk_append.call(null,b__27269,React.createElement("img",{"key": filename, "onClick": ((function (i__27268,vec__27276,filename,c__7355__auto__,size__7356__auto__,b__27269,s__27267__$2,temp__4657__auto__,attrs27245){
return (function (){
return cljs.core.swap_BANG_.call(null,draft,cljs.core.assoc,k,filename);
});})(i__27268,vec__27276,filename,c__7355__auto__,size__7356__auto__,b__27269,s__27267__$2,temp__4657__auto__,attrs27245))
, "src": app.collections.photo_url.call(null,filename,new cljs.core.Keyword(null,"small","small",2133478704)), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,filename,cljs.core.get.call(null,rum.core.react.call(null,draft),k)))?null:"is-fool")], null))}));

var G__27283 = (i__27268 + (1));
i__27268 = G__27283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27269),app$admin$iter__27266.call(null,cljs.core.chunk_rest.call(null,s__27267__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27269),null);
}
} else {
var vec__27279 = cljs.core.first.call(null,s__27267__$2);
var filename = cljs.core.nth.call(null,vec__27279,(0),null);
return cljs.core.cons.call(null,React.createElement("img",{"key": filename, "onClick": ((function (vec__27279,filename,s__27267__$2,temp__4657__auto__,attrs27245){
return (function (){
return cljs.core.swap_BANG_.call(null,draft,cljs.core.assoc,k,filename);
});})(vec__27279,filename,s__27267__$2,temp__4657__auto__,attrs27245))
, "src": app.collections.photo_url.call(null,filename,new cljs.core.Keyword(null,"small","small",2133478704)), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,filename,cljs.core.get.call(null,rum.core.react.call(null,draft),k)))?null:"is-fool")], null))}),app$admin$iter__27266.call(null,cljs.core.rest.call(null,s__27267__$2)));
}
} else {
return null;
}
break;
}
});})(attrs27245))
,null,null));
});})(attrs27245))
;
return iter__7357__auto__.call(null,rum.core.react.call(null,app.admin.recent_files));
})())], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"photo-field-editor");
app.admin.markdown_field_editor = rum.core.build_defc.call(null,(function (data_type,k,id,init_item,draft){
return React.createElement("div",null,React.createElement("p",null,"Preview"),React.createElement("div",{"dangerouslySetInnerHTML": {"__html": markdown.core.md__GT_html.call(null,cljs.core.get.call(null,rum.core.react.call(null,draft),k,""))}}),sablono.interpreter.create_element.call(null,"input",{"type": "text", "placeholder": app.collections.key_name.call(null,data_type,k), "onChange": (function (p1__27284_SHARP_){
return cljs.core.swap_BANG_.call(null,draft,cljs.core.assoc,k,p1__27284_SHARP_.target.value);
}), "value": cljs.core.get.call(null,rum.core.react.call(null,draft),k,""), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input",(cljs.core.truth_(app.collections.validate.call(null,data_type,k,cljs.core.get.call(null,rum.core.react.call(null,draft),k)))?"is-success":"is-danger")], null))}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"markdown-field-editor");
cljs.core._add_method.call(null,app.admin.field_editor,new cljs.core.Keyword("news","content","news/content",12979627),(function (data_type,k,id,init_item,draft){
return app.admin.field_editor_modal.call(null,data_type,k,id,init_item,draft,app.admin.markdown_field_editor);
}));
cljs.core._add_method.call(null,app.admin.field_editor,new cljs.core.Keyword("news","photo","news/photo",-53072664),(function (data_type,k,id,init_item,draft){
return app.admin.field_editor_modal.call(null,data_type,k,id,init_item,draft,app.admin.photo_field_editor);
}));
cljs.core._add_method.call(null,app.admin.field_editor,new cljs.core.Keyword("ads","photo","ads/photo",-52166909),(function (data_type,k,id,init_item,draft){
return app.admin.field_editor_modal.call(null,data_type,k,id,init_item,draft,app.admin.photo_field_editor);
}));
cljs.core._add_method.call(null,app.admin.field_editor,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__27287__delegate = function (args){
return cljs.core.apply.call(null,app.admin.default_field_editor,args);
};
var G__27287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27288__i = 0, G__27288__a = new Array(arguments.length -  0);
while (G__27288__i < G__27288__a.length) {G__27288__a[G__27288__i] = arguments[G__27288__i + 0]; ++G__27288__i;}
  args = new cljs.core.IndexedSeq(G__27288__a,0);
} 
return G__27287__delegate.call(this,args);};
G__27287.cljs$lang$maxFixedArity = 0;
G__27287.cljs$lang$applyTo = (function (arglist__27289){
var args = cljs.core.seq(arglist__27289);
return G__27287__delegate(args);
});
G__27287.cljs$core$IFn$_invoke$arity$variadic = G__27287__delegate;
return G__27287;
})()
);
if(typeof app.admin.field_viewer !== 'undefined'){
} else {
app.admin.field_viewer = (function (){var method_table__7502__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7503__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7504__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7505__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7506__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"app.admin","field-viewer"),app.collections.type_field,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7506__auto__,method_table__7502__auto__,prefer_table__7503__auto__,method_cache__7504__auto__,cached_hierarchy__7505__auto__));
})();
}
app.admin.field_viewer_with_click = rum.core.build_defc.call(null,(function (data_type,k,id,init_item,draft,component){
return React.createElement("td",{"onClick": (function (){
cljs.core.swap_BANG_.call(null,app.admin.editing_id,cljs.core.assoc,data_type,id);

return cljs.core.reset_BANG_.call(null,app.admin.editing_field,k);
})},sablono.interpreter.interpret.call(null,component.call(null,data_type,k,id,init_item,draft)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"field-viewer-with-click");
app.admin.field_viewer_without_click = rum.core.build_defc.call(null,(function (data_type,k,id,init_item,draft,component){
var attrs27290 = (cljs.core.truth_(id)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,app.admin.editing_id,cljs.core.assoc,data_type,id);

return cljs.core.reset_BANG_.call(null,app.admin.editing_field,k);
})], null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs27290))?sablono.interpreter.attributes.call(null,attrs27290):null),((cljs.core.map_QMARK_.call(null,attrs27290))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,component.call(null,data_type,k,id,init_item,draft))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27290),sablono.interpreter.interpret.call(null,component.call(null,data_type,k,id,init_item,draft))], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"field-viewer-without-click");
app.admin.silly_field_viewer = rum.core.build_defc.call(null,(function (data_type,k,id,init_item,draft){
var attrs27291 = cljs.core.get.call(null,rum.core.react.call(null,draft),k,"-");
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs27291))?sablono.interpreter.attributes.call(null,attrs27291):null),((cljs.core.map_QMARK_.call(null,attrs27291))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27291)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"silly-field-viewer");
app.admin.photo_viewer = rum.core.build_defc.call(null,(function (data_type,k,id,init_item,draft){
var base_url = cljs.core.get.call(null,rum.core.react.call(null,draft),k);
return sablono.interpreter.interpret.call(null,((cljs.core.empty_QMARK_.call(null,base_url))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),app.collections.photo_url.call(null,base_url,new cljs.core.Keyword(null,"small","small",2133478704))], null)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"photo-viewer");
cljs.core._add_method.call(null,app.admin.field_viewer,new cljs.core.Keyword("news","photo","news/photo",-53072664),(function (data_type,k,id,init_item,draft){
return app.admin.field_viewer_with_click.call(null,data_type,k,id,init_item,draft,app.admin.photo_viewer);
}));
cljs.core._add_method.call(null,app.admin.field_viewer,new cljs.core.Keyword("ads","photo","ads/photo",-52166909),(function (data_type,k,id,init_item,draft){
return app.admin.field_viewer_with_click.call(null,data_type,k,id,init_item,draft,app.admin.photo_viewer);
}));
cljs.core._add_method.call(null,app.admin.field_viewer,new cljs.core.Keyword("photo","url","photo/url",452375400),(function (data_type,k,id,init_item,draft){
return app.admin.field_viewer_without_click.call(null,data_type,k,id,init_item,draft,app.admin.photo_viewer);
}));
cljs.core._add_method.call(null,app.admin.field_viewer,new cljs.core.Keyword(null,"default","default",-1987822328),(function (data_type,k,id,init_item,draft){
return app.admin.field_viewer_with_click.call(null,data_type,k,id,init_item,draft,app.admin.silly_field_viewer);
}));
app.admin.else_main = rum.core.build_defc.call(null,(function (){
return React.createElement("div",{"className": "columns"},React.createElement("div",{"key": (0), "className": "column is-3"},sablono.interpreter.interpret.call(null,app.admin.aside.call(null))),React.createElement("div",{"key": (1), "className": "column"},React.createElement("div",{"className": "heading"},React.createElement("h1",{"className": "title"},"hi"),React.createElement("h2",{"className": "subtitle"},"yo"))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"else-main");
app.admin.item_row = rum.core.build_defcs.call(null,(function (_state_,data_type,id,init_item){
var draft = new cljs.core.Keyword("app.admin","draft","app.admin/draft",982513748).cljs$core$IFn$_invoke$arity$1(_state_);
var attrs27295 = (function (){var cell_component = ((function (draft){
return (function (n,k){
var being_edited_QMARK_ = (cljs.core._EQ_.call(null,id,cljs.core.get.call(null,rum.core.react.call(null,app.admin.editing_id),data_type))) && (cljs.core._EQ_.call(null,k,rum.core.react.call(null,app.admin.editing_field)));
return rum.core.with_key.call(null,((being_edited_QMARK_)?app.admin.field_editor.call(null,data_type,k,id,init_item,draft):app.admin.field_viewer.call(null,data_type,k,id,init_item,draft)),n);
});})(draft))
;
return cljs.core.map_indexed.call(null,cell_component,app.collections.type_keys.call(null,data_type));
})();
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs27295))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["is-info"], null)], null),attrs27295)):{"className": "is-info"}),((cljs.core.map_QMARK_.call(null,attrs27295))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("td",{"key": "actions"},(function (){var current = rum.core.react.call(null,draft);
var invalid_QMARK_ = cljs.core.not_every_QMARK_.call(null,((function (current,attrs27295,draft){
return (function (p1__27294_SHARP_){
return app.collections.validate.call(null,data_type,p1__27294_SHARP_,cljs.core.get.call(null,current,p1__27294_SHARP_));
});})(current,attrs27295,draft))
,app.collections.type_keys.call(null,data_type));
return sablono.interpreter.interpret.call(null,(function (){var x__7411__auto__ = (cljs.core.truth_(id)?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.is-success.is-outlined","a.button.is-success.is-outlined",-1906348933),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"class","class",-2030961996),((invalid_QMARK_)?"is-disabled":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((invalid_QMARK_)?null:((function (current,invalid_QMARK_,attrs27295,draft){
return (function (){
hoodie.store.add_BANG_.call(null,app.admin.db_store,data_type,current).then(((function (current,invalid_QMARK_,attrs27295,draft){
return (function (){
return hoodie.store.publish_all_BANG_.call(null,app.admin.db_store,data_type);
});})(current,invalid_QMARK_,attrs27295,draft))
);

return cljs.core.reset_BANG_.call(null,draft,cljs.core.PersistentArrayMap.EMPTY);
});})(current,invalid_QMARK_,attrs27295,draft))
)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon","span.icon",-1181275586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-save","i.fa.fa-save",900864482)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Add"], null)], null));
return cljs.core._conj.call(null,(function (){var x__7411__auto____$1 = (cljs.core.truth_(id)?(function (){var x__7411__auto____$1 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.is-danger.is-outlined","a.button.is-danger.is-outlined",-1458375666),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x__7411__auto__,current,invalid_QMARK_,attrs27295,draft){
return (function (){
return hoodie.store.remove_BANG_.call(null,app.admin.db_store,data_type,id).done(((function (x__7411__auto__,current,invalid_QMARK_,attrs27295,draft){
return (function (){
return console.log("d");
});})(x__7411__auto__,current,invalid_QMARK_,attrs27295,draft))
).fail(((function (x__7411__auto__,current,invalid_QMARK_,attrs27295,draft){
return (function (_){
return console.log(_);
});})(x__7411__auto__,current,invalid_QMARK_,attrs27295,draft))
);
});})(x__7411__auto__,current,invalid_QMARK_,attrs27295,draft))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon","span.icon",-1181275586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-remove","i.fa.fa-remove",-725582431)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Delete"], null)], null);
return cljs.core._conj.call(null,(function (){var x__7411__auto____$2 = ((cljs.core.not_EQ_.call(null,current,init_item))?(function (){var x__7411__auto____$2 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.is-info.is-outlined","a.button.is-info.is-outlined",-1569255331),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(2),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x__7411__auto____$1,x__7411__auto__,current,invalid_QMARK_,attrs27295,draft){
return (function (){
cljs.core.reset_BANG_.call(null,draft,init_item);

return cljs.core.swap_BANG_.call(null,app.admin.editing_id,cljs.core.assoc,data_type,null);
});})(x__7411__auto____$1,x__7411__auto__,current,invalid_QMARK_,attrs27295,draft))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon","span.icon",-1181275586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-refresh","i.fa.fa-refresh",898303444)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Reset"], null)], null);
return cljs.core._conj.call(null,(function (){var x__7411__auto____$3 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.is-info.is-outlined","a.button.is-info.is-outlined",-1569255331),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(3),new cljs.core.Keyword(null,"class","class",-2030961996),((invalid_QMARK_)?"is-disabled":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((invalid_QMARK_)?null:((function (x__7411__auto____$2,x__7411__auto____$1,x__7411__auto__,current,invalid_QMARK_,attrs27295,draft){
return (function (){
return hoodie.store.update_BANG_.call(null,app.admin.db_store,data_type,id,current).then(((function (x__7411__auto____$2,x__7411__auto____$1,x__7411__auto__,current,invalid_QMARK_,attrs27295,draft){
return (function (){
return hoodie.store.publish_all_BANG_.call(null,app.admin.db_store,data_type);
});})(x__7411__auto____$2,x__7411__auto____$1,x__7411__auto__,current,invalid_QMARK_,attrs27295,draft))
);
});})(x__7411__auto____$2,x__7411__auto____$1,x__7411__auto__,current,invalid_QMARK_,attrs27295,draft))
)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon","span.icon",-1181275586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-save","i.fa.fa-save",900864482)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Save"], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto____$3);
})(),x__7411__auto____$2);
})():null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto____$2);
})(),x__7411__auto____$1);
})():null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto____$1);
})(),x__7411__auto__);
})());
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27295),React.createElement("td",{"key": "actions"},(function (){var current = rum.core.react.call(null,draft);
var invalid_QMARK_ = cljs.core.not_every_QMARK_.call(null,((function (current,attrs27295,draft){
return (function (p1__27294_SHARP_){
return app.collections.validate.call(null,data_type,p1__27294_SHARP_,cljs.core.get.call(null,current,p1__27294_SHARP_));
});})(current,attrs27295,draft))
,app.collections.type_keys.call(null,data_type));
return sablono.interpreter.interpret.call(null,(function (){var x__7411__auto__ = (cljs.core.truth_(id)?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.is-success.is-outlined","a.button.is-success.is-outlined",-1906348933),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"class","class",-2030961996),((invalid_QMARK_)?"is-disabled":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((invalid_QMARK_)?null:((function (current,invalid_QMARK_,attrs27295,draft){
return (function (){
hoodie.store.add_BANG_.call(null,app.admin.db_store,data_type,current).then(((function (current,invalid_QMARK_,attrs27295,draft){
return (function (){
return hoodie.store.publish_all_BANG_.call(null,app.admin.db_store,data_type);
});})(current,invalid_QMARK_,attrs27295,draft))
);

return cljs.core.reset_BANG_.call(null,draft,cljs.core.PersistentArrayMap.EMPTY);
});})(current,invalid_QMARK_,attrs27295,draft))
)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon","span.icon",-1181275586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-save","i.fa.fa-save",900864482)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Add"], null)], null));
return cljs.core._conj.call(null,(function (){var x__7411__auto____$1 = (cljs.core.truth_(id)?(function (){var x__7411__auto____$1 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.is-danger.is-outlined","a.button.is-danger.is-outlined",-1458375666),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x__7411__auto__,current,invalid_QMARK_,attrs27295,draft){
return (function (){
return hoodie.store.remove_BANG_.call(null,app.admin.db_store,data_type,id).done(((function (x__7411__auto__,current,invalid_QMARK_,attrs27295,draft){
return (function (){
return console.log("d");
});})(x__7411__auto__,current,invalid_QMARK_,attrs27295,draft))
).fail(((function (x__7411__auto__,current,invalid_QMARK_,attrs27295,draft){
return (function (_){
return console.log(_);
});})(x__7411__auto__,current,invalid_QMARK_,attrs27295,draft))
);
});})(x__7411__auto__,current,invalid_QMARK_,attrs27295,draft))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon","span.icon",-1181275586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-remove","i.fa.fa-remove",-725582431)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Delete"], null)], null);
return cljs.core._conj.call(null,(function (){var x__7411__auto____$2 = ((cljs.core.not_EQ_.call(null,current,init_item))?(function (){var x__7411__auto____$2 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.is-info.is-outlined","a.button.is-info.is-outlined",-1569255331),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(2),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x__7411__auto____$1,x__7411__auto__,current,invalid_QMARK_,attrs27295,draft){
return (function (){
cljs.core.reset_BANG_.call(null,draft,init_item);

return cljs.core.swap_BANG_.call(null,app.admin.editing_id,cljs.core.assoc,data_type,null);
});})(x__7411__auto____$1,x__7411__auto__,current,invalid_QMARK_,attrs27295,draft))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon","span.icon",-1181275586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-refresh","i.fa.fa-refresh",898303444)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Reset"], null)], null);
return cljs.core._conj.call(null,(function (){var x__7411__auto____$3 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.is-info.is-outlined","a.button.is-info.is-outlined",-1569255331),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(3),new cljs.core.Keyword(null,"class","class",-2030961996),((invalid_QMARK_)?"is-disabled":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((invalid_QMARK_)?null:((function (x__7411__auto____$2,x__7411__auto____$1,x__7411__auto__,current,invalid_QMARK_,attrs27295,draft){
return (function (){
return hoodie.store.update_BANG_.call(null,app.admin.db_store,data_type,id,current).then(((function (x__7411__auto____$2,x__7411__auto____$1,x__7411__auto__,current,invalid_QMARK_,attrs27295,draft){
return (function (){
return hoodie.store.publish_all_BANG_.call(null,app.admin.db_store,data_type);
});})(x__7411__auto____$2,x__7411__auto____$1,x__7411__auto__,current,invalid_QMARK_,attrs27295,draft))
);
});})(x__7411__auto____$2,x__7411__auto____$1,x__7411__auto__,current,invalid_QMARK_,attrs27295,draft))
)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon","span.icon",-1181275586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-save","i.fa.fa-save",900864482)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Save"], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto____$3);
})(),x__7411__auto____$2);
})():null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto____$2);
})(),x__7411__auto____$1);
})():null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto____$1);
})(),x__7411__auto__);
})());
})())], null)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (_,id,___$1){
return id;
}),new cljs.core.Keyword(null,"init","init",-1875481434),(function (_state_,props){
var init_item = cljs.core.nth.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(_state_),(2));
return cljs.core.assoc.call(null,_state_,new cljs.core.Keyword("app.admin","draft","app.admin/draft",982513748),cljs.core.atom.call(null,init_item));
})], null),rum.core.reactive], null),"item-row");
app.admin.table_head_foot = rum.core.build_defc.call(null,(function (head_or_foot,data_type){
return sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [head_or_foot,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,app.admin.editing_id,cljs.core.assoc,data_type,null);

return cljs.core.reset_BANG_.call(null,app.admin.editing_field,null);
})], null),(function (){var attrs27296 = cljs.core.map_indexed.call(null,(function (n,k){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null),app.collections.key_name.call(null,data_type,k)], null);
}),app.collections.type_keys.call(null,data_type));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs27296))?sablono.interpreter.attributes.call(null,attrs27296):null),((cljs.core.map_QMARK_.call(null,attrs27296))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("th",{"key": "actions"},"Actions")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27296),React.createElement("th",{"key": "actions"},"Actions")], null)));
})()], null));
}),null,"table-head-foot");
app.admin.table_main = rum.core.build_defc.call(null,(function (data_type){
var attrs27301 = app.admin.table_head_foot.call(null,new cljs.core.Keyword(null,"thead","thead",-291875296),data_type);
return cljs.core.apply.call(null,React.createElement,"table",((cljs.core.map_QMARK_.call(null,attrs27301))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["table","is-striped","is-bordered"], null)], null),attrs27301)):{"className": "table is-striped is-bordered"}),((cljs.core.map_QMARK_.call(null,attrs27301))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((((10) <= cljs.core.count.call(null,rum.core.react.call(null,app.collections.atom_stores.call(null,data_type)))))?app.admin.table_head_foot.call(null,new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),data_type):null)),React.createElement("tbody",null,cljs.core.into_array.call(null,(function (){var iter__7357__auto__ = ((function (attrs27301){
return (function app$admin$iter__27302(s__27303){
return (new cljs.core.LazySeq(null,((function (attrs27301){
return (function (){
var s__27303__$1 = s__27303;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27303__$1);
if(temp__4657__auto__){
var s__27303__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27303__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__27303__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__27305 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__27304 = (0);
while(true){
if((i__27304 < size__7356__auto__)){
var vec__27312 = cljs.core._nth.call(null,c__7355__auto__,i__27304);
var id = cljs.core.nth.call(null,vec__27312,(0),null);
var item = cljs.core.nth.call(null,vec__27312,(1),null);
cljs.core.chunk_append.call(null,b__27305,sablono.interpreter.interpret.call(null,app.admin.item_row.call(null,data_type,id,item)));

var G__27334 = (i__27304 + (1));
i__27304 = G__27334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27305),app$admin$iter__27302.call(null,cljs.core.chunk_rest.call(null,s__27303__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27305),null);
}
} else {
var vec__27315 = cljs.core.first.call(null,s__27303__$2);
var id = cljs.core.nth.call(null,vec__27315,(0),null);
var item = cljs.core.nth.call(null,vec__27315,(1),null);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,app.admin.item_row.call(null,data_type,id,item)),app$admin$iter__27302.call(null,cljs.core.rest.call(null,s__27303__$2)));
}
} else {
return null;
}
break;
}
});})(attrs27301))
,null,null));
});})(attrs27301))
;
return iter__7357__auto__.call(null,rum.core.react.call(null,app.collections.atom_stores.call(null,data_type)));
})()),((cljs.core._EQ_.call(null,data_type,"photo"))?sablono.interpreter.interpret.call(null,app.admin.uploader.call(null)):sablono.interpreter.interpret.call(null,app.admin.item_row.call(null,data_type,null,cljs.core.PersistentArrayMap.EMPTY))))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27301),sablono.interpreter.interpret.call(null,((((10) <= cljs.core.count.call(null,rum.core.react.call(null,app.collections.atom_stores.call(null,data_type)))))?app.admin.table_head_foot.call(null,new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),data_type):null)),React.createElement("tbody",null,cljs.core.into_array.call(null,(function (){var iter__7357__auto__ = ((function (attrs27301){
return (function app$admin$iter__27318(s__27319){
return (new cljs.core.LazySeq(null,((function (attrs27301){
return (function (){
var s__27319__$1 = s__27319;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27319__$1);
if(temp__4657__auto__){
var s__27319__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27319__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__27319__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__27321 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__27320 = (0);
while(true){
if((i__27320 < size__7356__auto__)){
var vec__27328 = cljs.core._nth.call(null,c__7355__auto__,i__27320);
var id = cljs.core.nth.call(null,vec__27328,(0),null);
var item = cljs.core.nth.call(null,vec__27328,(1),null);
cljs.core.chunk_append.call(null,b__27321,sablono.interpreter.interpret.call(null,app.admin.item_row.call(null,data_type,id,item)));

var G__27335 = (i__27320 + (1));
i__27320 = G__27335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27321),app$admin$iter__27318.call(null,cljs.core.chunk_rest.call(null,s__27319__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27321),null);
}
} else {
var vec__27331 = cljs.core.first.call(null,s__27319__$2);
var id = cljs.core.nth.call(null,vec__27331,(0),null);
var item = cljs.core.nth.call(null,vec__27331,(1),null);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,app.admin.item_row.call(null,data_type,id,item)),app$admin$iter__27318.call(null,cljs.core.rest.call(null,s__27319__$2)));
}
} else {
return null;
}
break;
}
});})(attrs27301))
,null,null));
});})(attrs27301))
;
return iter__7357__auto__.call(null,rum.core.react.call(null,app.collections.atom_stores.call(null,data_type)));
})()),((cljs.core._EQ_.call(null,data_type,"photo"))?sablono.interpreter.interpret.call(null,app.admin.uploader.call(null)):sablono.interpreter.interpret.call(null,app.admin.item_row.call(null,data_type,null,cljs.core.PersistentArrayMap.EMPTY))))], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"table-main");
app.admin.login_box = rum.core.build_defc.call(null,(function (user_input){
return sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,app.admin.account_store.atom_store))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.section","section.section",-416807119),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input","input.input",-850828147),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username",new cljs.core.Keyword(null,"key","key",-1516042587),"username",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27336_SHARP_){
return cljs.core.swap_BANG_.call(null,user_input,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),p1__27336_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$2(rum.core.react.call(null,user_input),"")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input","input.input",-850828147),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"key","key",-1516042587),"password",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27337_SHARP_){
return cljs.core.swap_BANG_.call(null,user_input,cljs.core.assoc,new cljs.core.Keyword(null,"password","password",417022471),p1__27337_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$2(rum.core.react.call(null,user_input),"")], null)], null),(function (){var map__27338 = rum.core.react.call(null,user_input);
var map__27338__$1 = ((((!((map__27338 == null)))?((((map__27338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27338):map__27338);
var username = cljs.core.get.call(null,map__27338__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var password = cljs.core.get.call(null,map__27338__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.is-info","button.button.is-info",1928556393),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not_every_QMARK_.call(null,cljs.core.not_empty,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [username,password], null)))?"disable":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27338,map__27338__$1,username,password){
return (function (){
return hoodie.account.sign_in.call(null,app.admin.account_store,username,password);
});})(map__27338,map__27338__$1,username,password))
], null),"Sign in"], null);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Logging in..."], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"login-box");
app.admin.uploading_ch = cljs.core.async.chan.call(null,(3));
app.admin.upload_progress_ch = cljs.core.async.chan.call(null);
app.admin.register_file_ch = cljs.core.async.chan.call(null);
app.admin.target_filename = (function app$admin$target_filename(file){
var timestamp = Date.now();
var filename = file.name;
if(cljs.core.truth_(cljs.core.some.call(null,((function (timestamp,filename){
return (function (p1__27340_SHARP_){
return filename.endsWith(p1__27340_SHARP_);
});})(timestamp,filename))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".jpg",".JPG",".jpeg",".JPEG"], null)))){
return [cljs.core.str(timestamp),cljs.core.str(".jpg")].join('');
} else {
if(cljs.core.truth_(cljs.core.some.call(null,((function (timestamp,filename){
return (function (p1__27341_SHARP_){
return filename.endsWith(p1__27341_SHARP_);
});})(timestamp,filename))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".png",".PNG"], null)))){
return [cljs.core.str(timestamp),cljs.core.str(".png")].join('');
} else {
return null;
}
}
});
app.admin.recent_file = rum.core.build_defc.call(null,(function (p__27342){
var vec__27343 = p__27342;
var filename = cljs.core.nth.call(null,vec__27343,(0),null);
var file = cljs.core.nth.call(null,vec__27343,(1),null);
return React.createElement("div",null,(function (){var attrs27346 = filename;
return cljs.core.apply.call(null,React.createElement,"h3",((cljs.core.map_QMARK_.call(null,attrs27346))?sablono.interpreter.attributes.call(null,attrs27346):null),((cljs.core.map_QMARK_.call(null,attrs27346))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27346)], null)));
})(),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"registered","registered",-388600037),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(file)))?React.createElement("img",{"src": app.collections.photo_url.call(null,filename,new cljs.core.Keyword(null,"small","small",2133478704))}):(function (){var attrs27347 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"uploading","uploading",1069939393)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"is-info",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"loaded","loaded",-1246482293).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(file)], null):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uploaded","uploaded",1187197457),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(file)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"is-success",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(file)], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"is-danger",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(file)], null)
));
return cljs.core.apply.call(null,React.createElement,"progress",((cljs.core.map_QMARK_.call(null,attrs27347))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["progress"], null)], null),attrs27347)):{"className": "progress"}),((cljs.core.map_QMARK_.call(null,attrs27347))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27347)], null)));
})()));
}),null,"recent-file");
app.admin.recently_uploaded = rum.core.build_defc.call(null,(function (){
return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"recently-uploaded");
app.admin.clear_recent = (function app$admin$clear_recent(){
var seq__27364 = cljs.core.seq.call(null,cljs.core.deref.call(null,app.admin.recent_files));
var chunk__27366 = null;
var count__27367 = (0);
var i__27368 = (0);
while(true){
if((i__27368 < count__27367)){
var vec__27370 = cljs.core._nth.call(null,chunk__27366,i__27368);
var filename = cljs.core.nth.call(null,vec__27370,(0),null);
var map__27373 = cljs.core.nth.call(null,vec__27370,(1),null);
var map__27373__$1 = ((((!((map__27373 == null)))?((((map__27373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27373):map__27373);
var state = cljs.core.get.call(null,map__27373__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"registered","registered",-388600037),null,new cljs.core.Keyword(null,"failed","failed",-1397425762),null], null), null).call(null,state))){
cljs.core.swap_BANG_.call(null,app.admin.recent_files,cljs.core.dissoc,filename);

var G__27380 = seq__27364;
var G__27381 = chunk__27366;
var G__27382 = count__27367;
var G__27383 = (i__27368 + (1));
seq__27364 = G__27380;
chunk__27366 = G__27381;
count__27367 = G__27382;
i__27368 = G__27383;
continue;
} else {
var G__27384 = seq__27364;
var G__27385 = chunk__27366;
var G__27386 = count__27367;
var G__27387 = (i__27368 + (1));
seq__27364 = G__27384;
chunk__27366 = G__27385;
count__27367 = G__27386;
i__27368 = G__27387;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27364);
if(temp__4657__auto__){
var seq__27364__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27364__$1)){
var c__7388__auto__ = cljs.core.chunk_first.call(null,seq__27364__$1);
var G__27388 = cljs.core.chunk_rest.call(null,seq__27364__$1);
var G__27389 = c__7388__auto__;
var G__27390 = cljs.core.count.call(null,c__7388__auto__);
var G__27391 = (0);
seq__27364 = G__27388;
chunk__27366 = G__27389;
count__27367 = G__27390;
i__27368 = G__27391;
continue;
} else {
var vec__27375 = cljs.core.first.call(null,seq__27364__$1);
var filename = cljs.core.nth.call(null,vec__27375,(0),null);
var map__27378 = cljs.core.nth.call(null,vec__27375,(1),null);
var map__27378__$1 = ((((!((map__27378 == null)))?((((map__27378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27378):map__27378);
var state = cljs.core.get.call(null,map__27378__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"registered","registered",-388600037),null,new cljs.core.Keyword(null,"failed","failed",-1397425762),null], null), null).call(null,state))){
cljs.core.swap_BANG_.call(null,app.admin.recent_files,cljs.core.dissoc,filename);

var G__27392 = cljs.core.next.call(null,seq__27364__$1);
var G__27393 = null;
var G__27394 = (0);
var G__27395 = (0);
seq__27364 = G__27392;
chunk__27366 = G__27393;
count__27367 = G__27394;
i__27368 = G__27395;
continue;
} else {
var G__27396 = cljs.core.next.call(null,seq__27364__$1);
var G__27397 = null;
var G__27398 = (0);
var G__27399 = (0);
seq__27364 = G__27396;
chunk__27366 = G__27397;
count__27367 = G__27398;
i__27368 = G__27399;
continue;
}
}
} else {
return null;
}
}
break;
}
});
app.admin.uploader = rum.core.build_defc.call(null,(function (){
return React.createElement("div",null,sablono.interpreter.create_element.call(null,"input",{"type": "file", "value": "", "key": (0), "onChange": (function (p1__27400_SHARP_){
p1__27400_SHARP_.persist();

var file = (p1__27400_SHARP_.target.files[(0)]);
var temp__4657__auto__ = app.admin.target_filename.call(null,file);
if(cljs.core.truth_(temp__4657__auto__)){
var filename = temp__4657__auto__;
var c__12297__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto__,filename,temp__4657__auto__,file){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto__,filename,temp__4657__auto__,file){
return (function (state_27412){
var state_val_27413 = (state_27412[(1)]);
if((state_val_27413 === (1))){
var inst_27403 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"filename","filename",-1428840783)];
var inst_27404 = file.size;
var inst_27405 = [file,inst_27404,filename];
var inst_27406 = cljs.core.PersistentHashMap.fromArrays(inst_27403,inst_27405);
var state_27412__$1 = state_27412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27412__$1,(2),app.admin.uploading_ch,inst_27406);
} else {
if((state_val_27413 === (2))){
var inst_27408 = (state_27412[(2)]);
var inst_27409 = p1__27400_SHARP_.target;
var inst_27410 = (inst_27409["value"] = null);
var state_27412__$1 = (function (){var statearr_27414 = state_27412;
(statearr_27414[(7)] = inst_27408);

return statearr_27414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27412__$1,inst_27410);
} else {
return null;
}
}
});})(c__12297__auto__,filename,temp__4657__auto__,file))
;
return ((function (switch__12185__auto__,c__12297__auto__,filename,temp__4657__auto__,file){
return (function() {
var app$admin$state_machine__12186__auto__ = null;
var app$admin$state_machine__12186__auto____0 = (function (){
var statearr_27418 = [null,null,null,null,null,null,null,null];
(statearr_27418[(0)] = app$admin$state_machine__12186__auto__);

(statearr_27418[(1)] = (1));

return statearr_27418;
});
var app$admin$state_machine__12186__auto____1 = (function (state_27412){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_27412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e27419){if((e27419 instanceof Object)){
var ex__12189__auto__ = e27419;
var statearr_27420_27422 = state_27412;
(statearr_27420_27422[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27423 = state_27412;
state_27412 = G__27423;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
app$admin$state_machine__12186__auto__ = function(state_27412){
switch(arguments.length){
case 0:
return app$admin$state_machine__12186__auto____0.call(this);
case 1:
return app$admin$state_machine__12186__auto____1.call(this,state_27412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$admin$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = app$admin$state_machine__12186__auto____0;
app$admin$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = app$admin$state_machine__12186__auto____1;
return app$admin$state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto__,filename,temp__4657__auto__,file))
})();
var state__12299__auto__ = (function (){var statearr_27421 = f__12298__auto__.call(null);
(statearr_27421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto__);

return statearr_27421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto__,filename,temp__4657__auto__,file))
);

return c__12297__auto__;
} else {
return null;
}
})}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,(function (p1__27402_SHARP_,p2__27401_SHARP_){
return rum.core.with_key.call(null,app.admin.recent_file.call(null,p2__27401_SHARP_),p1__27402_SHARP_);
}),rum.core.react.call(null,app.admin.recent_files))),React.createElement("button",{"onClick": app.admin.clear_recent, "className": "button"},"Clear recent photos"));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"uploader");
app.admin.uploaded = (function app$admin$uploaded(m){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"uploaded","uploaded",1187197457)),new cljs.core.Keyword(null,"file","file",-1269645878)),new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
});
app.admin.registered = (function app$admin$registered(m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"registered","registered",-388600037));
});
app.admin.upload_failed = (function app$admin$upload_failed(m){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"failed","failed",-1397425762)),new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
});
app.admin.upload_loop = (function app$admin$upload_loop(){
var c__12297__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto__){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto__){
return (function (state_27661){
var state_val_27662 = (state_27661[(1)]);
if((state_val_27662 === (7))){
var state_27661__$1 = state_27661;
var statearr_27663_27711 = state_27661__$1;
(statearr_27663_27711[(2)] = false);

(statearr_27663_27711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (20))){
var inst_27595 = (state_27661[(7)]);
var inst_27614 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27595);
var state_27661__$1 = state_27661;
var statearr_27664_27712 = state_27661__$1;
(statearr_27664_27712[(2)] = inst_27614);

(statearr_27664_27712[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (27))){
var inst_27619 = (state_27661[(8)]);
var state_27661__$1 = state_27661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27661__$1,(30),app.admin.register_file_ch,inst_27619);
} else {
if((state_val_27662 === (1))){
var state_27661__$1 = state_27661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27661__$1,(2),app.admin.uploading_ch);
} else {
if((state_val_27662 === (24))){
var state_27661__$1 = state_27661;
var statearr_27665_27713 = state_27661__$1;
(statearr_27665_27713[(2)] = app.admin.uploaded);

(statearr_27665_27713[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (4))){
var state_27661__$1 = state_27661;
var statearr_27666_27714 = state_27661__$1;
(statearr_27666_27714[(2)] = false);

(statearr_27666_27714[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (15))){
var state_27661__$1 = state_27661;
var statearr_27667_27715 = state_27661__$1;
(statearr_27667_27715[(2)] = false);

(statearr_27667_27715[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (21))){
var inst_27595 = (state_27661[(7)]);
var state_27661__$1 = state_27661;
var statearr_27668_27716 = state_27661__$1;
(statearr_27668_27716[(2)] = inst_27595);

(statearr_27668_27716[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (31))){
var inst_27656 = (state_27661[(2)]);
var inst_27595 = inst_27656;
var state_27661__$1 = (function (){var statearr_27669 = state_27661;
(statearr_27669[(7)] = inst_27595);

return statearr_27669;
})();
var statearr_27670_27717 = state_27661__$1;
(statearr_27670_27717[(2)] = null);

(statearr_27670_27717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (13))){
var inst_27659 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27661__$1,inst_27659);
} else {
if((state_val_27662 === (22))){
var inst_27619 = (state_27661[(8)]);
var inst_27595 = (state_27661[(7)]);
var inst_27592 = (state_27661[(9)]);
var inst_27617 = (state_27661[(2)]);
var inst_27618 = cljs.core.get.call(null,inst_27617,new cljs.core.Keyword(null,"file","file",-1269645878));
var inst_27619__$1 = cljs.core.get.call(null,inst_27617,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var inst_27620 = cljs.core.assoc.call(null,inst_27617,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"uploading","uploading",1069939393));
var inst_27621 = cljs.core.swap_BANG_.call(null,app.admin.recent_files,cljs.core.assoc,inst_27619__$1,inst_27620);
var inst_27622 = [new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707),new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_27623 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27624 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27625 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27626 = [inst_27618,inst_27619__$1];
var inst_27627 = (new cljs.core.PersistentVector(null,2,(5),inst_27625,inst_27626,null));
var inst_27628 = ["upload",inst_27627];
var inst_27629 = (new cljs.core.PersistentVector(null,2,(5),inst_27624,inst_27628,null));
var inst_27630 = [inst_27629];
var inst_27631 = (new cljs.core.PersistentVector(null,1,(5),inst_27623,inst_27630,null));
var inst_27632 = cljs.core.async.chan.call(null);
var inst_27633 = (function (){var G__27569 = inst_27595;
var map__27570 = inst_27592;
var item = inst_27617;
var file = inst_27618;
var filename = inst_27619__$1;
var map__27597 = inst_27617;
var c = inst_27632;
return ((function (G__27569,map__27570,item,file,filename,map__27597,c,inst_27619,inst_27595,inst_27592,inst_27617,inst_27618,inst_27619__$1,inst_27620,inst_27621,inst_27622,inst_27623,inst_27624,inst_27625,inst_27626,inst_27627,inst_27628,inst_27629,inst_27630,inst_27631,inst_27632,state_val_27662,c__12297__auto__){
return (function (p1__27424_SHARP_){
return cljs.core.assoc.call(null,p1__27424_SHARP_,new cljs.core.Keyword(null,"filename","filename",-1428840783),filename);
});
;})(G__27569,map__27570,item,file,filename,map__27597,c,inst_27619,inst_27595,inst_27592,inst_27617,inst_27618,inst_27619__$1,inst_27620,inst_27621,inst_27622,inst_27623,inst_27624,inst_27625,inst_27626,inst_27627,inst_27628,inst_27629,inst_27630,inst_27631,inst_27632,state_val_27662,c__12297__auto__))
})();
var inst_27634 = cljs.core.map.call(null,inst_27633);
var inst_27635 = cljs.core.async.pipeline.call(null,(1),app.admin.upload_progress_ch,inst_27634,inst_27632);
var inst_27636 = [inst_27631,inst_27632];
var inst_27637 = cljs.core.PersistentHashMap.fromArrays(inst_27622,inst_27636);
var inst_27638 = cljs_http.client.post.call(null,"/upload/00135/",inst_27637);
var state_27661__$1 = (function (){var statearr_27671 = state_27661;
(statearr_27671[(10)] = inst_27635);

(statearr_27671[(8)] = inst_27619__$1);

(statearr_27671[(11)] = inst_27621);

return statearr_27671;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27661__$1,(23),inst_27638);
} else {
if((state_val_27662 === (29))){
var inst_27654 = (state_27661[(2)]);
var state_27661__$1 = (function (){var statearr_27672 = state_27661;
(statearr_27672[(12)] = inst_27654);

return statearr_27672;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27661__$1,(31),app.admin.uploading_ch);
} else {
if((state_val_27662 === (6))){
var state_27661__$1 = state_27661;
var statearr_27673_27718 = state_27661__$1;
(statearr_27673_27718[(2)] = true);

(statearr_27673_27718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (28))){
var state_27661__$1 = state_27661;
var statearr_27674_27719 = state_27661__$1;
(statearr_27674_27719[(2)] = null);

(statearr_27674_27719[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (25))){
var state_27661__$1 = state_27661;
var statearr_27675_27720 = state_27661__$1;
(statearr_27675_27720[(2)] = app.admin.upload_failed);

(statearr_27675_27720[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (17))){
var state_27661__$1 = state_27661;
var statearr_27676_27721 = state_27661__$1;
(statearr_27676_27721[(2)] = true);

(statearr_27676_27721[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (3))){
var inst_27572 = (state_27661[(13)]);
var inst_27577 = inst_27572.cljs$lang$protocol_mask$partition0$;
var inst_27578 = (inst_27577 & (64));
var inst_27579 = inst_27572.cljs$core$ISeq$;
var inst_27580 = (inst_27578) || (inst_27579);
var state_27661__$1 = state_27661;
if(cljs.core.truth_(inst_27580)){
var statearr_27677_27722 = state_27661__$1;
(statearr_27677_27722[(1)] = (6));

} else {
var statearr_27678_27723 = state_27661__$1;
(statearr_27678_27723[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (12))){
var inst_27595 = (state_27661[(7)]);
var inst_27599 = (inst_27595 == null);
var inst_27600 = cljs.core.not.call(null,inst_27599);
var state_27661__$1 = state_27661;
if(inst_27600){
var statearr_27679_27724 = state_27661__$1;
(statearr_27679_27724[(1)] = (14));

} else {
var statearr_27680_27725 = state_27661__$1;
(statearr_27680_27725[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (2))){
var inst_27572 = (state_27661[(13)]);
var inst_27572__$1 = (state_27661[(2)]);
var inst_27574 = (inst_27572__$1 == null);
var inst_27575 = cljs.core.not.call(null,inst_27574);
var state_27661__$1 = (function (){var statearr_27681 = state_27661;
(statearr_27681[(13)] = inst_27572__$1);

return statearr_27681;
})();
if(inst_27575){
var statearr_27682_27726 = state_27661__$1;
(statearr_27682_27726[(1)] = (3));

} else {
var statearr_27683_27727 = state_27661__$1;
(statearr_27683_27727[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (23))){
var inst_27641 = (state_27661[(14)]);
var inst_27640 = (state_27661[(2)]);
var inst_27641__$1 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27640);
var inst_27642 = cljs.core._EQ_.call(null,(200),inst_27641__$1);
var state_27661__$1 = (function (){var statearr_27684 = state_27661;
(statearr_27684[(14)] = inst_27641__$1);

return statearr_27684;
})();
if(inst_27642){
var statearr_27685_27728 = state_27661__$1;
(statearr_27685_27728[(1)] = (24));

} else {
var statearr_27686_27729 = state_27661__$1;
(statearr_27686_27729[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (19))){
var inst_27609 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
var statearr_27687_27730 = state_27661__$1;
(statearr_27687_27730[(2)] = inst_27609);

(statearr_27687_27730[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (11))){
var inst_27572 = (state_27661[(13)]);
var inst_27592 = (state_27661[(9)]);
var inst_27592__$1 = (state_27661[(2)]);
var inst_27593 = cljs.core.get.call(null,inst_27592__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var inst_27594 = cljs.core.get.call(null,inst_27592__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var inst_27595 = inst_27572;
var state_27661__$1 = (function (){var statearr_27688 = state_27661;
(statearr_27688[(15)] = inst_27593);

(statearr_27688[(16)] = inst_27594);

(statearr_27688[(7)] = inst_27595);

(statearr_27688[(9)] = inst_27592__$1);

return statearr_27688;
})();
var statearr_27689_27731 = state_27661__$1;
(statearr_27689_27731[(2)] = null);

(statearr_27689_27731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (9))){
var inst_27572 = (state_27661[(13)]);
var inst_27589 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27572);
var state_27661__$1 = state_27661;
var statearr_27690_27732 = state_27661__$1;
(statearr_27690_27732[(2)] = inst_27589);

(statearr_27690_27732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (5))){
var inst_27587 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
if(cljs.core.truth_(inst_27587)){
var statearr_27691_27733 = state_27661__$1;
(statearr_27691_27733[(1)] = (9));

} else {
var statearr_27692_27734 = state_27661__$1;
(statearr_27692_27734[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (14))){
var inst_27595 = (state_27661[(7)]);
var inst_27602 = inst_27595.cljs$lang$protocol_mask$partition0$;
var inst_27603 = (inst_27602 & (64));
var inst_27604 = inst_27595.cljs$core$ISeq$;
var inst_27605 = (inst_27603) || (inst_27604);
var state_27661__$1 = state_27661;
if(cljs.core.truth_(inst_27605)){
var statearr_27693_27735 = state_27661__$1;
(statearr_27693_27735[(1)] = (17));

} else {
var statearr_27694_27736 = state_27661__$1;
(statearr_27694_27736[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (26))){
var inst_27619 = (state_27661[(8)]);
var inst_27641 = (state_27661[(14)]);
var inst_27646 = (state_27661[(2)]);
var inst_27647 = cljs.core.swap_BANG_.call(null,app.admin.recent_files,cljs.core.update,inst_27619,inst_27646);
var inst_27648 = cljs.core._EQ_.call(null,(200),inst_27641);
var state_27661__$1 = (function (){var statearr_27695 = state_27661;
(statearr_27695[(17)] = inst_27647);

return statearr_27695;
})();
if(inst_27648){
var statearr_27696_27737 = state_27661__$1;
(statearr_27696_27737[(1)] = (27));

} else {
var statearr_27697_27738 = state_27661__$1;
(statearr_27697_27738[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (16))){
var inst_27612 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
if(cljs.core.truth_(inst_27612)){
var statearr_27698_27739 = state_27661__$1;
(statearr_27698_27739[(1)] = (20));

} else {
var statearr_27699_27740 = state_27661__$1;
(statearr_27699_27740[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (30))){
var inst_27651 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
var statearr_27700_27741 = state_27661__$1;
(statearr_27700_27741[(2)] = inst_27651);

(statearr_27700_27741[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (10))){
var inst_27572 = (state_27661[(13)]);
var state_27661__$1 = state_27661;
var statearr_27701_27742 = state_27661__$1;
(statearr_27701_27742[(2)] = inst_27572);

(statearr_27701_27742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (18))){
var state_27661__$1 = state_27661;
var statearr_27702_27743 = state_27661__$1;
(statearr_27702_27743[(2)] = false);

(statearr_27702_27743[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (8))){
var inst_27584 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
var statearr_27703_27744 = state_27661__$1;
(statearr_27703_27744[(2)] = inst_27584);

(statearr_27703_27744[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12297__auto__))
;
return ((function (switch__12185__auto__,c__12297__auto__){
return (function() {
var app$admin$upload_loop_$_state_machine__12186__auto__ = null;
var app$admin$upload_loop_$_state_machine__12186__auto____0 = (function (){
var statearr_27707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27707[(0)] = app$admin$upload_loop_$_state_machine__12186__auto__);

(statearr_27707[(1)] = (1));

return statearr_27707;
});
var app$admin$upload_loop_$_state_machine__12186__auto____1 = (function (state_27661){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_27661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e27708){if((e27708 instanceof Object)){
var ex__12189__auto__ = e27708;
var statearr_27709_27745 = state_27661;
(statearr_27709_27745[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27746 = state_27661;
state_27661 = G__27746;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
app$admin$upload_loop_$_state_machine__12186__auto__ = function(state_27661){
switch(arguments.length){
case 0:
return app$admin$upload_loop_$_state_machine__12186__auto____0.call(this);
case 1:
return app$admin$upload_loop_$_state_machine__12186__auto____1.call(this,state_27661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$admin$upload_loop_$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = app$admin$upload_loop_$_state_machine__12186__auto____0;
app$admin$upload_loop_$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = app$admin$upload_loop_$_state_machine__12186__auto____1;
return app$admin$upload_loop_$_state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto__))
})();
var state__12299__auto__ = (function (){var statearr_27710 = f__12298__auto__.call(null);
(statearr_27710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto__);

return statearr_27710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto__))
);

return c__12297__auto__;
});
app.admin.upload_progress_loop = (function app$admin$upload_progress_loop(){
var c__12297__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto__){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto__){
return (function (state_27910){
var state_val_27911 = (state_27910[(1)]);
if((state_val_27911 === (7))){
var state_27910__$1 = state_27910;
var statearr_27912_27949 = state_27910__$1;
(statearr_27912_27949[(2)] = false);

(statearr_27912_27949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (20))){
var inst_27875 = (state_27910[(7)]);
var inst_27894 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27875);
var state_27910__$1 = state_27910;
var statearr_27913_27950 = state_27910__$1;
(statearr_27913_27950[(2)] = inst_27894);

(statearr_27913_27950[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (1))){
var state_27910__$1 = state_27910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27910__$1,(2),app.admin.upload_progress_ch);
} else {
if((state_val_27911 === (4))){
var state_27910__$1 = state_27910;
var statearr_27914_27951 = state_27910__$1;
(statearr_27914_27951[(2)] = false);

(statearr_27914_27951[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (15))){
var state_27910__$1 = state_27910;
var statearr_27915_27952 = state_27910__$1;
(statearr_27915_27952[(2)] = false);

(statearr_27915_27952[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (21))){
var inst_27875 = (state_27910[(7)]);
var state_27910__$1 = state_27910;
var statearr_27916_27953 = state_27910__$1;
(statearr_27916_27953[(2)] = inst_27875);

(statearr_27916_27953[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (13))){
var inst_27908 = (state_27910[(2)]);
var state_27910__$1 = state_27910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27910__$1,inst_27908);
} else {
if((state_val_27911 === (22))){
var inst_27897 = (state_27910[(2)]);
var inst_27898 = cljs.core.get.call(null,inst_27897,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
var inst_27899 = cljs.core.get.call(null,inst_27897,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var inst_27900 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27901 = [inst_27899,new cljs.core.Keyword(null,"loaded","loaded",-1246482293)];
var inst_27902 = (new cljs.core.PersistentVector(null,2,(5),inst_27900,inst_27901,null));
var inst_27903 = cljs.core.swap_BANG_.call(null,app.admin.recent_files,cljs.core.assoc_in,inst_27902,inst_27898);
var state_27910__$1 = (function (){var statearr_27917 = state_27910;
(statearr_27917[(8)] = inst_27903);

return statearr_27917;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27910__$1,(23),app.admin.upload_progress_ch);
} else {
if((state_val_27911 === (6))){
var state_27910__$1 = state_27910;
var statearr_27918_27954 = state_27910__$1;
(statearr_27918_27954[(2)] = true);

(statearr_27918_27954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (17))){
var state_27910__$1 = state_27910;
var statearr_27919_27955 = state_27910__$1;
(statearr_27919_27955[(2)] = true);

(statearr_27919_27955[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (3))){
var inst_27852 = (state_27910[(9)]);
var inst_27857 = inst_27852.cljs$lang$protocol_mask$partition0$;
var inst_27858 = (inst_27857 & (64));
var inst_27859 = inst_27852.cljs$core$ISeq$;
var inst_27860 = (inst_27858) || (inst_27859);
var state_27910__$1 = state_27910;
if(cljs.core.truth_(inst_27860)){
var statearr_27920_27956 = state_27910__$1;
(statearr_27920_27956[(1)] = (6));

} else {
var statearr_27921_27957 = state_27910__$1;
(statearr_27921_27957[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (12))){
var inst_27875 = (state_27910[(7)]);
var inst_27879 = (inst_27875 == null);
var inst_27880 = cljs.core.not.call(null,inst_27879);
var state_27910__$1 = state_27910;
if(inst_27880){
var statearr_27922_27958 = state_27910__$1;
(statearr_27922_27958[(1)] = (14));

} else {
var statearr_27923_27959 = state_27910__$1;
(statearr_27923_27959[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (2))){
var inst_27852 = (state_27910[(9)]);
var inst_27852__$1 = (state_27910[(2)]);
var inst_27854 = (inst_27852__$1 == null);
var inst_27855 = cljs.core.not.call(null,inst_27854);
var state_27910__$1 = (function (){var statearr_27924 = state_27910;
(statearr_27924[(9)] = inst_27852__$1);

return statearr_27924;
})();
if(inst_27855){
var statearr_27925_27960 = state_27910__$1;
(statearr_27925_27960[(1)] = (3));

} else {
var statearr_27926_27961 = state_27910__$1;
(statearr_27926_27961[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (23))){
var inst_27905 = (state_27910[(2)]);
var inst_27875 = inst_27905;
var state_27910__$1 = (function (){var statearr_27927 = state_27910;
(statearr_27927[(7)] = inst_27875);

return statearr_27927;
})();
var statearr_27928_27962 = state_27910__$1;
(statearr_27928_27962[(2)] = null);

(statearr_27928_27962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (19))){
var inst_27889 = (state_27910[(2)]);
var state_27910__$1 = state_27910;
var statearr_27929_27963 = state_27910__$1;
(statearr_27929_27963[(2)] = inst_27889);

(statearr_27929_27963[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (11))){
var inst_27852 = (state_27910[(9)]);
var inst_27872 = (state_27910[(2)]);
var inst_27873 = cljs.core.get.call(null,inst_27872,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
var inst_27874 = cljs.core.get.call(null,inst_27872,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var inst_27875 = inst_27852;
var state_27910__$1 = (function (){var statearr_27930 = state_27910;
(statearr_27930[(10)] = inst_27874);

(statearr_27930[(7)] = inst_27875);

(statearr_27930[(11)] = inst_27873);

return statearr_27930;
})();
var statearr_27931_27964 = state_27910__$1;
(statearr_27931_27964[(2)] = null);

(statearr_27931_27964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (9))){
var inst_27852 = (state_27910[(9)]);
var inst_27869 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27852);
var state_27910__$1 = state_27910;
var statearr_27932_27965 = state_27910__$1;
(statearr_27932_27965[(2)] = inst_27869);

(statearr_27932_27965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (5))){
var inst_27867 = (state_27910[(2)]);
var state_27910__$1 = state_27910;
if(cljs.core.truth_(inst_27867)){
var statearr_27933_27966 = state_27910__$1;
(statearr_27933_27966[(1)] = (9));

} else {
var statearr_27934_27967 = state_27910__$1;
(statearr_27934_27967[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (14))){
var inst_27875 = (state_27910[(7)]);
var inst_27882 = inst_27875.cljs$lang$protocol_mask$partition0$;
var inst_27883 = (inst_27882 & (64));
var inst_27884 = inst_27875.cljs$core$ISeq$;
var inst_27885 = (inst_27883) || (inst_27884);
var state_27910__$1 = state_27910;
if(cljs.core.truth_(inst_27885)){
var statearr_27935_27968 = state_27910__$1;
(statearr_27935_27968[(1)] = (17));

} else {
var statearr_27936_27969 = state_27910__$1;
(statearr_27936_27969[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (16))){
var inst_27892 = (state_27910[(2)]);
var state_27910__$1 = state_27910;
if(cljs.core.truth_(inst_27892)){
var statearr_27937_27970 = state_27910__$1;
(statearr_27937_27970[(1)] = (20));

} else {
var statearr_27938_27971 = state_27910__$1;
(statearr_27938_27971[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (10))){
var inst_27852 = (state_27910[(9)]);
var state_27910__$1 = state_27910;
var statearr_27939_27972 = state_27910__$1;
(statearr_27939_27972[(2)] = inst_27852);

(statearr_27939_27972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (18))){
var state_27910__$1 = state_27910;
var statearr_27940_27973 = state_27910__$1;
(statearr_27940_27973[(2)] = false);

(statearr_27940_27973[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (8))){
var inst_27864 = (state_27910[(2)]);
var state_27910__$1 = state_27910;
var statearr_27941_27974 = state_27910__$1;
(statearr_27941_27974[(2)] = inst_27864);

(statearr_27941_27974[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12297__auto__))
;
return ((function (switch__12185__auto__,c__12297__auto__){
return (function() {
var app$admin$upload_progress_loop_$_state_machine__12186__auto__ = null;
var app$admin$upload_progress_loop_$_state_machine__12186__auto____0 = (function (){
var statearr_27945 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27945[(0)] = app$admin$upload_progress_loop_$_state_machine__12186__auto__);

(statearr_27945[(1)] = (1));

return statearr_27945;
});
var app$admin$upload_progress_loop_$_state_machine__12186__auto____1 = (function (state_27910){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_27910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e27946){if((e27946 instanceof Object)){
var ex__12189__auto__ = e27946;
var statearr_27947_27975 = state_27910;
(statearr_27947_27975[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27976 = state_27910;
state_27910 = G__27976;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
app$admin$upload_progress_loop_$_state_machine__12186__auto__ = function(state_27910){
switch(arguments.length){
case 0:
return app$admin$upload_progress_loop_$_state_machine__12186__auto____0.call(this);
case 1:
return app$admin$upload_progress_loop_$_state_machine__12186__auto____1.call(this,state_27910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$admin$upload_progress_loop_$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = app$admin$upload_progress_loop_$_state_machine__12186__auto____0;
app$admin$upload_progress_loop_$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = app$admin$upload_progress_loop_$_state_machine__12186__auto____1;
return app$admin$upload_progress_loop_$_state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto__))
})();
var state__12299__auto__ = (function (){var statearr_27948 = f__12298__auto__.call(null);
(statearr_27948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto__);

return statearr_27948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto__))
);

return c__12297__auto__;
});
app.admin.upload_loop.call(null);
app.admin.post_upload_loop = (function app$admin$post_upload_loop(){
var c__12297__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto__){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto__){
return (function (state_28027){
var state_val_28028 = (state_28027[(1)]);
if((state_val_28028 === (1))){
var state_28027__$1 = state_28027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28027__$1,(2),app.admin.register_file_ch);
} else {
if((state_val_28028 === (2))){
var inst_28010 = (state_28027[(2)]);
var inst_28011 = inst_28010;
var state_28027__$1 = (function (){var statearr_28029 = state_28027;
(statearr_28029[(7)] = inst_28011);

return statearr_28029;
})();
var statearr_28030_28041 = state_28027__$1;
(statearr_28030_28041[(2)] = null);

(statearr_28030_28041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (3))){
var inst_28011 = (state_28027[(7)]);
var inst_28013 = [new cljs.core.Keyword(null,"url","url",276297046)];
var inst_28014 = [inst_28011];
var inst_28015 = cljs.core.PersistentHashMap.fromArrays(inst_28013,inst_28014);
var inst_28016 = hoodie.store.add_BANG_.call(null,app.admin.db_store,"photo",inst_28015);
var inst_28017 = (function (){var filename = inst_28011;
return ((function (filename,inst_28011,inst_28013,inst_28014,inst_28015,inst_28016,state_val_28028,c__12297__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,app.admin.recent_files,cljs.core.update,filename,app.admin.registered);
});
;})(filename,inst_28011,inst_28013,inst_28014,inst_28015,inst_28016,state_val_28028,c__12297__auto__))
})();
var inst_28018 = inst_28016.done(inst_28017);
var inst_28019 = (function (){var filename = inst_28011;
return ((function (filename,inst_28011,inst_28013,inst_28014,inst_28015,inst_28016,inst_28017,inst_28018,state_val_28028,c__12297__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,app.admin.recent_files,cljs.core.update,filename,app.admin.upload_failed);
});
;})(filename,inst_28011,inst_28013,inst_28014,inst_28015,inst_28016,inst_28017,inst_28018,state_val_28028,c__12297__auto__))
})();
var inst_28020 = inst_28018.fail(inst_28019);
var state_28027__$1 = (function (){var statearr_28031 = state_28027;
(statearr_28031[(8)] = inst_28020);

return statearr_28031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28027__$1,(5),app.admin.register_file_ch);
} else {
if((state_val_28028 === (4))){
var inst_28025 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28027__$1,inst_28025);
} else {
if((state_val_28028 === (5))){
var inst_28022 = (state_28027[(2)]);
var inst_28011 = inst_28022;
var state_28027__$1 = (function (){var statearr_28032 = state_28027;
(statearr_28032[(7)] = inst_28011);

return statearr_28032;
})();
var statearr_28033_28042 = state_28027__$1;
(statearr_28033_28042[(2)] = null);

(statearr_28033_28042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__12297__auto__))
;
return ((function (switch__12185__auto__,c__12297__auto__){
return (function() {
var app$admin$post_upload_loop_$_state_machine__12186__auto__ = null;
var app$admin$post_upload_loop_$_state_machine__12186__auto____0 = (function (){
var statearr_28037 = [null,null,null,null,null,null,null,null,null];
(statearr_28037[(0)] = app$admin$post_upload_loop_$_state_machine__12186__auto__);

(statearr_28037[(1)] = (1));

return statearr_28037;
});
var app$admin$post_upload_loop_$_state_machine__12186__auto____1 = (function (state_28027){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_28027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e28038){if((e28038 instanceof Object)){
var ex__12189__auto__ = e28038;
var statearr_28039_28043 = state_28027;
(statearr_28039_28043[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28044 = state_28027;
state_28027 = G__28044;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
app$admin$post_upload_loop_$_state_machine__12186__auto__ = function(state_28027){
switch(arguments.length){
case 0:
return app$admin$post_upload_loop_$_state_machine__12186__auto____0.call(this);
case 1:
return app$admin$post_upload_loop_$_state_machine__12186__auto____1.call(this,state_28027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$admin$post_upload_loop_$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = app$admin$post_upload_loop_$_state_machine__12186__auto____0;
app$admin$post_upload_loop_$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = app$admin$post_upload_loop_$_state_machine__12186__auto____1;
return app$admin$post_upload_loop_$_state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto__))
})();
var state__12299__auto__ = (function (){var statearr_28040 = f__12298__auto__.call(null);
(statearr_28040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto__);

return statearr_28040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto__))
);

return c__12297__auto__;
});
app.admin.upload_progress_loop.call(null);
app.admin.post_upload_loop.call(null);
app.admin.body = rum.core.build_defc.call(null,(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,app.admin.account_store.atom_store)))){
return React.createElement("div",null,React.createElement("section",{"key": (0), "className": "hero is-info"},React.createElement("div",{"key": (1), "className": "hero-foot"},React.createElement("div",{"className": "container"},React.createElement("nav",{"className": "tabs is-boxed"},(function (){var attrs28047 = cljs.core.map.call(null,app.admin.main_nav_item,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["news","event","market","ads","photo"], null));
return cljs.core.apply.call(null,React.createElement,"ul",((cljs.core.map_QMARK_.call(null,attrs28047))?sablono.interpreter.attributes.call(null,attrs28047):null),((cljs.core.map_QMARK_.call(null,attrs28047))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28047)], null)));
})())))),React.createElement("section",{"key": (1), "className": "section"},(function (){var mode = rum.core.react.call(null,app.admin.current_mode);
return React.createElement("div",{"className": "container"},(function (){var attrs28048 = cljs.core.pr_str.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.react.call(null,app.admin.editing_field)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs28048))?sablono.interpreter.attributes.call(null,attrs28048):null),((cljs.core.map_QMARK_.call(null,attrs28048))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28048)], null)));
})(),sablono.interpreter.interpret.call(null,(function (){var G__28049 = (((mode instanceof cljs.core.Keyword))?mode.fqn:null);
switch (G__28049) {
case "else":
return app.admin.else_main.call(null);

break;
default:
return app.admin.table_main.call(null,mode);

}
})()));
})()),React.createElement("footer",{"className": "footer"},"hi"));
} else {
return sablono.interpreter.interpret.call(null,app.admin.login_box.call(null,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"body");
app.admin.bod = rum.core.build_defc.call(null,(function (){
return React.createElement("div",null,"Recent files",sablono.interpreter.interpret.call(null,cljs.core.pr_str.call(null,rum.core.react.call(null,app.admin.recent_files))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"bod");
app.admin.main = (function app$admin$main(){
return rum.core.mount.call(null,app.admin.body.call(null),document.getElementById("app"));
});

//# sourceMappingURL=admin.js.map