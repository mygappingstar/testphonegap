// Compiled by ClojureScript 1.9.93 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__10992_SHARP_,p2__10991_SHARP_){
return p2__10991_SHARP_.call(null,p1__10992_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__10994_SHARP_,p2__10993_SHARP_){
return p2__10993_SHARP_.call(null,old_state,p1__10994_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__6577__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__10995_SHARP_){
return p1__10995_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__11000 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__11000,(0),null);
var next_state = cljs.core.nth.call(null,vec__11000,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__10996_SHARP_){
return p1__10996_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return {":rum/state": cljs.core.volatile_BANG_.call(null,state)};
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((cljs.core.some_QMARK_.call(null,key_fn))?((function (class$,key_fn){
return (function() { 
var G__11003__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)};
return React.createElement(class$,props);
};
var G__11003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11004__i = 0, G__11004__a = new Array(arguments.length -  0);
while (G__11004__i < G__11004__a.length) {G__11004__a[G__11004__i] = arguments[G__11004__i + 0]; ++G__11004__i;}
  args = new cljs.core.IndexedSeq(G__11004__a,0);
} 
return G__11003__delegate.call(this,args);};
G__11003.cljs$lang$maxFixedArity = 0;
G__11003.cljs$lang$applyTo = (function (arglist__11005){
var args = cljs.core.seq(arglist__11005);
return G__11003__delegate(args);
});
G__11003.cljs$core$IFn$_invoke$arity$variadic = G__11003__delegate;
return G__11003;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__11006__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)};
return React.createElement(class$,props);
};
var G__11006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11007__i = 0, G__11007__a = new Array(arguments.length -  0);
while (G__11007__i < G__11007__a.length) {G__11007__a[G__11007__i] = arguments[G__11007__i + 0]; ++G__11007__i;}
  args = new cljs.core.IndexedSeq(G__11007__a,0);
} 
return G__11006__delegate.call(this,args);};
G__11006.cljs$lang$maxFixedArity = 0;
G__11006.cljs$lang$applyTo = (function (arglist__11008){
var args = cljs.core.seq(arglist__11008);
return G__11006__delegate(args);
});
G__11006.cljs$core$IFn$_invoke$arity$variadic = G__11006__delegate;
return G__11006;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__11009__delegate = function (args){
return React.createElement(class$,{":rum/args": args});
};
var G__11009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11010__i = 0, G__11010__a = new Array(arguments.length -  0);
while (G__11010__i < G__11010__a.length) {G__11010__a[G__11010__i] = arguments[G__11010__i + 0]; ++G__11010__i;}
  args = new cljs.core.IndexedSeq(G__11010__a,0);
} 
return G__11009__delegate.call(this,args);};
G__11009.cljs$lang$maxFixedArity = 0;
G__11009.cljs$lang$applyTo = (function (arglist__11011){
var args = cljs.core.seq(arglist__11011);
return G__11009__delegate(args);
});
G__11009.cljs$core$IFn$_invoke$arity$variadic = G__11009__delegate;
return G__11009;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__6577__auto__ = (function (){var and__6565__auto__ = typeof window !== 'undefined';
if(and__6565__auto__){
var or__6577__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
var or__6577__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__6577__auto____$1)){
return or__6577__auto____$1;
} else {
var or__6577__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__6577__auto____$2)){
return or__6577__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__6565__auto__;
}
})();
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return ((function (or__6577__auto__){
return (function (p1__11012_SHARP_){
return setTimeout(p1__11012_SHARP_,(16));
});
;})(or__6577__auto__))
}
})();
rum.core.batch = (function (){var or__6577__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
var or__6577__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__6577__auto____$1)){
return or__6577__auto____$1;
} else {
return ((function (or__6577__auto____$1,or__6577__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__6577__auto____$1,or__6577__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__11019 = cljs.core.seq.call(null,queue);
var chunk__11021 = null;
var count__11022 = (0);
var i__11023 = (0);
while(true){
if((i__11023 < count__11022)){
var comp = cljs.core._nth.call(null,chunk__11021,i__11023);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__11025 = seq__11019;
var G__11026 = chunk__11021;
var G__11027 = count__11022;
var G__11028 = (i__11023 + (1));
seq__11019 = G__11025;
chunk__11021 = G__11026;
count__11022 = G__11027;
i__11023 = G__11028;
continue;
} else {
var G__11029 = seq__11019;
var G__11030 = chunk__11021;
var G__11031 = count__11022;
var G__11032 = (i__11023 + (1));
seq__11019 = G__11029;
chunk__11021 = G__11030;
count__11022 = G__11031;
i__11023 = G__11032;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11019);
if(temp__4657__auto__){
var seq__11019__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11019__$1)){
var c__7388__auto__ = cljs.core.chunk_first.call(null,seq__11019__$1);
var G__11033 = cljs.core.chunk_rest.call(null,seq__11019__$1);
var G__11034 = c__7388__auto__;
var G__11035 = cljs.core.count.call(null,c__7388__auto__);
var G__11036 = (0);
seq__11019 = G__11033;
chunk__11021 = G__11034;
count__11022 = G__11035;
i__11023 = G__11036;
continue;
} else {
var comp = cljs.core.first.call(null,seq__11019__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__11037 = cljs.core.next.call(null,seq__11019__$1);
var G__11038 = null;
var G__11039 = (0);
var G__11040 = (0);
seq__11019 = G__11037;
chunk__11021 = G__11038;
count__11022 = G__11039;
i__11023 = G__11040;
continue;
} else {
var G__11041 = cljs.core.next.call(null,seq__11019__$1);
var G__11042 = null;
var G__11043 = (0);
var G__11044 = (0);
seq__11019 = G__11041;
chunk__11021 = G__11042;
count__11022 = G__11043;
i__11023 = G__11044;
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
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,{"key": key},null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,{"ref": ref},null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args11045 = [];
var len__7652__auto___11048 = arguments.length;
var i__7653__auto___11049 = (0);
while(true){
if((i__7653__auto___11049 < len__7652__auto___11048)){
args11045.push((arguments[i__7653__auto___11049]));

var G__11050 = (i__7653__auto___11049 + (1));
i__7653__auto___11049 = G__11050;
continue;
} else {
}
break;
}

var G__11047 = args11045.length;
switch (G__11047) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11045.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_11052 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__11053 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__11053,(0),null);
var next_state = cljs.core.nth.call(null,vec__11053,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__11056_11068 = cljs.core.seq.call(null,old_reactions);
var chunk__11057_11069 = null;
var count__11058_11070 = (0);
var i__11059_11071 = (0);
while(true){
if((i__11059_11071 < count__11058_11070)){
var ref_11072 = cljs.core._nth.call(null,chunk__11057_11069,i__11059_11071);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_11072)){
} else {
cljs.core.remove_watch.call(null,ref_11072,key);
}

var G__11073 = seq__11056_11068;
var G__11074 = chunk__11057_11069;
var G__11075 = count__11058_11070;
var G__11076 = (i__11059_11071 + (1));
seq__11056_11068 = G__11073;
chunk__11057_11069 = G__11074;
count__11058_11070 = G__11075;
i__11059_11071 = G__11076;
continue;
} else {
var temp__4657__auto___11077 = cljs.core.seq.call(null,seq__11056_11068);
if(temp__4657__auto___11077){
var seq__11056_11078__$1 = temp__4657__auto___11077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11056_11078__$1)){
var c__7388__auto___11079 = cljs.core.chunk_first.call(null,seq__11056_11078__$1);
var G__11080 = cljs.core.chunk_rest.call(null,seq__11056_11078__$1);
var G__11081 = c__7388__auto___11079;
var G__11082 = cljs.core.count.call(null,c__7388__auto___11079);
var G__11083 = (0);
seq__11056_11068 = G__11080;
chunk__11057_11069 = G__11081;
count__11058_11070 = G__11082;
i__11059_11071 = G__11083;
continue;
} else {
var ref_11084 = cljs.core.first.call(null,seq__11056_11078__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_11084)){
} else {
cljs.core.remove_watch.call(null,ref_11084,key);
}

var G__11085 = cljs.core.next.call(null,seq__11056_11078__$1);
var G__11086 = null;
var G__11087 = (0);
var G__11088 = (0);
seq__11056_11068 = G__11085;
chunk__11057_11069 = G__11086;
count__11058_11070 = G__11087;
i__11059_11071 = G__11088;
continue;
}
} else {
}
}
break;
}

var seq__11060_11089 = cljs.core.seq.call(null,new_reactions);
var chunk__11061_11090 = null;
var count__11062_11091 = (0);
var i__11063_11092 = (0);
while(true){
if((i__11063_11092 < count__11062_11091)){
var ref_11093 = cljs.core._nth.call(null,chunk__11061_11090,i__11063_11092);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_11093)){
} else {
cljs.core.add_watch.call(null,ref_11093,key,((function (seq__11060_11089,chunk__11061_11090,count__11062_11091,i__11063_11092,ref_11093,comp,old_reactions,vec__11053,dom,next_state,new_reactions,key,_STAR_reactions_STAR_11052){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__11060_11089,chunk__11061_11090,count__11062_11091,i__11063_11092,ref_11093,comp,old_reactions,vec__11053,dom,next_state,new_reactions,key,_STAR_reactions_STAR_11052))
);
}

var G__11094 = seq__11060_11089;
var G__11095 = chunk__11061_11090;
var G__11096 = count__11062_11091;
var G__11097 = (i__11063_11092 + (1));
seq__11060_11089 = G__11094;
chunk__11061_11090 = G__11095;
count__11062_11091 = G__11096;
i__11063_11092 = G__11097;
continue;
} else {
var temp__4657__auto___11098 = cljs.core.seq.call(null,seq__11060_11089);
if(temp__4657__auto___11098){
var seq__11060_11099__$1 = temp__4657__auto___11098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11060_11099__$1)){
var c__7388__auto___11100 = cljs.core.chunk_first.call(null,seq__11060_11099__$1);
var G__11101 = cljs.core.chunk_rest.call(null,seq__11060_11099__$1);
var G__11102 = c__7388__auto___11100;
var G__11103 = cljs.core.count.call(null,c__7388__auto___11100);
var G__11104 = (0);
seq__11060_11089 = G__11101;
chunk__11061_11090 = G__11102;
count__11062_11091 = G__11103;
i__11063_11092 = G__11104;
continue;
} else {
var ref_11105 = cljs.core.first.call(null,seq__11060_11099__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_11105)){
} else {
cljs.core.add_watch.call(null,ref_11105,key,((function (seq__11060_11089,chunk__11061_11090,count__11062_11091,i__11063_11092,ref_11105,seq__11060_11099__$1,temp__4657__auto___11098,comp,old_reactions,vec__11053,dom,next_state,new_reactions,key,_STAR_reactions_STAR_11052){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__11060_11089,chunk__11061_11090,count__11062_11091,i__11063_11092,ref_11105,seq__11060_11099__$1,temp__4657__auto___11098,comp,old_reactions,vec__11053,dom,next_state,new_reactions,key,_STAR_reactions_STAR_11052))
);
}

var G__11106 = cljs.core.next.call(null,seq__11060_11099__$1);
var G__11107 = null;
var G__11108 = (0);
var G__11109 = (0);
seq__11060_11089 = G__11106;
chunk__11061_11090 = G__11107;
count__11062_11091 = G__11108;
i__11063_11092 = G__11109;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_11052;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_11110 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__11064_11111 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__11065_11112 = null;
var count__11066_11113 = (0);
var i__11067_11114 = (0);
while(true){
if((i__11067_11114 < count__11066_11113)){
var ref_11115 = cljs.core._nth.call(null,chunk__11065_11112,i__11067_11114);
cljs.core.remove_watch.call(null,ref_11115,key_11110);

var G__11116 = seq__11064_11111;
var G__11117 = chunk__11065_11112;
var G__11118 = count__11066_11113;
var G__11119 = (i__11067_11114 + (1));
seq__11064_11111 = G__11116;
chunk__11065_11112 = G__11117;
count__11066_11113 = G__11118;
i__11067_11114 = G__11119;
continue;
} else {
var temp__4657__auto___11120 = cljs.core.seq.call(null,seq__11064_11111);
if(temp__4657__auto___11120){
var seq__11064_11121__$1 = temp__4657__auto___11120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11064_11121__$1)){
var c__7388__auto___11122 = cljs.core.chunk_first.call(null,seq__11064_11121__$1);
var G__11123 = cljs.core.chunk_rest.call(null,seq__11064_11121__$1);
var G__11124 = c__7388__auto___11122;
var G__11125 = cljs.core.count.call(null,c__7388__auto___11122);
var G__11126 = (0);
seq__11064_11111 = G__11123;
chunk__11065_11112 = G__11124;
count__11066_11113 = G__11125;
i__11067_11114 = G__11126;
continue;
} else {
var ref_11127 = cljs.core.first.call(null,seq__11064_11121__$1);
cljs.core.remove_watch.call(null,ref_11127,key_11110);

var G__11128 = cljs.core.next.call(null,seq__11064_11121__$1);
var G__11129 = null;
var G__11130 = (0);
var G__11131 = (0);
seq__11064_11111 = G__11128;
chunk__11065_11112 = G__11129;
count__11066_11113 = G__11130;
i__11067_11114 = G__11131;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__7659__auto__ = [];
var len__7652__auto___11138 = arguments.length;
var i__7653__auto___11139 = (0);
while(true){
if((i__7653__auto___11139 < len__7652__auto___11138)){
args__7659__auto__.push((arguments[i__7653__auto___11139]));

var G__11140 = (i__7653__auto___11139 + (1));
i__7653__auto___11139 = G__11140;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((2) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7660__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__11135){
var map__11136 = p__11135;
var map__11136__$1 = ((((!((map__11136 == null)))?((((map__11136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11136):map__11136);
var options = map__11136__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq11132){
var G__11133 = cljs.core.first.call(null,seq11132);
var seq11132__$1 = cljs.core.next.call(null,seq11132);
var G__11134 = cljs.core.first.call(null,seq11132__$1);
var seq11132__$2 = cljs.core.next.call(null,seq11132__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__11133,G__11134,seq11132__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__7659__auto__ = [];
var len__7652__auto___11144 = arguments.length;
var i__7653__auto___11145 = (0);
while(true){
if((i__7653__auto___11145 < len__7652__auto___11144)){
args__7659__auto__.push((arguments[i__7653__auto___11145]));

var G__11146 = (i__7653__auto___11145 + (1));
i__7653__auto___11145 = G__11146;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((2) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7660__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq11141){
var G__11142 = cljs.core.first.call(null,seq11141);
var seq11141__$1 = cljs.core.next.call(null,seq11141);
var G__11143 = cljs.core.first.call(null,seq11141__$1);
var seq11141__$2 = cljs.core.next.call(null,seq11141__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__11142,G__11143,seq11141__$2);
});


//# sourceMappingURL=core.js.map