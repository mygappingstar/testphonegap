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
return (function (p1__10721_SHARP_,p2__10720_SHARP_){
return p2__10720_SHARP_.call(null,p1__10721_SHARP_);
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
return (function (p1__10723_SHARP_,p2__10722_SHARP_){
return p2__10722_SHARP_.call(null,old_state,p1__10723_SHARP_);
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
return (function (p1__10724_SHARP_){
return p1__10724_SHARP_.call(null,old_state,new_state);
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
var vec__10729 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__10729,(0),null);
var next_state = cljs.core.nth.call(null,vec__10729,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__10725_SHARP_){
return p1__10725_SHARP_.call(null,state);
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
var G__10732__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)};
return React.createElement(class$,props);
};
var G__10732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10733__i = 0, G__10733__a = new Array(arguments.length -  0);
while (G__10733__i < G__10733__a.length) {G__10733__a[G__10733__i] = arguments[G__10733__i + 0]; ++G__10733__i;}
  args = new cljs.core.IndexedSeq(G__10733__a,0);
} 
return G__10732__delegate.call(this,args);};
G__10732.cljs$lang$maxFixedArity = 0;
G__10732.cljs$lang$applyTo = (function (arglist__10734){
var args = cljs.core.seq(arglist__10734);
return G__10732__delegate(args);
});
G__10732.cljs$core$IFn$_invoke$arity$variadic = G__10732__delegate;
return G__10732;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__10735__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)};
return React.createElement(class$,props);
};
var G__10735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10736__i = 0, G__10736__a = new Array(arguments.length -  0);
while (G__10736__i < G__10736__a.length) {G__10736__a[G__10736__i] = arguments[G__10736__i + 0]; ++G__10736__i;}
  args = new cljs.core.IndexedSeq(G__10736__a,0);
} 
return G__10735__delegate.call(this,args);};
G__10735.cljs$lang$maxFixedArity = 0;
G__10735.cljs$lang$applyTo = (function (arglist__10737){
var args = cljs.core.seq(arglist__10737);
return G__10735__delegate(args);
});
G__10735.cljs$core$IFn$_invoke$arity$variadic = G__10735__delegate;
return G__10735;
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
var G__10738__delegate = function (args){
return React.createElement(class$,{":rum/args": args});
};
var G__10738 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10739__i = 0, G__10739__a = new Array(arguments.length -  0);
while (G__10739__i < G__10739__a.length) {G__10739__a[G__10739__i] = arguments[G__10739__i + 0]; ++G__10739__i;}
  args = new cljs.core.IndexedSeq(G__10739__a,0);
} 
return G__10738__delegate.call(this,args);};
G__10738.cljs$lang$maxFixedArity = 0;
G__10738.cljs$lang$applyTo = (function (arglist__10740){
var args = cljs.core.seq(arglist__10740);
return G__10738__delegate(args);
});
G__10738.cljs$core$IFn$_invoke$arity$variadic = G__10738__delegate;
return G__10738;
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
return (function (p1__10741_SHARP_){
return setTimeout(p1__10741_SHARP_,(16));
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
var seq__10748 = cljs.core.seq.call(null,queue);
var chunk__10750 = null;
var count__10751 = (0);
var i__10752 = (0);
while(true){
if((i__10752 < count__10751)){
var comp = cljs.core._nth.call(null,chunk__10750,i__10752);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__10754 = seq__10748;
var G__10755 = chunk__10750;
var G__10756 = count__10751;
var G__10757 = (i__10752 + (1));
seq__10748 = G__10754;
chunk__10750 = G__10755;
count__10751 = G__10756;
i__10752 = G__10757;
continue;
} else {
var G__10758 = seq__10748;
var G__10759 = chunk__10750;
var G__10760 = count__10751;
var G__10761 = (i__10752 + (1));
seq__10748 = G__10758;
chunk__10750 = G__10759;
count__10751 = G__10760;
i__10752 = G__10761;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10748);
if(temp__4657__auto__){
var seq__10748__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10748__$1)){
var c__7388__auto__ = cljs.core.chunk_first.call(null,seq__10748__$1);
var G__10762 = cljs.core.chunk_rest.call(null,seq__10748__$1);
var G__10763 = c__7388__auto__;
var G__10764 = cljs.core.count.call(null,c__7388__auto__);
var G__10765 = (0);
seq__10748 = G__10762;
chunk__10750 = G__10763;
count__10751 = G__10764;
i__10752 = G__10765;
continue;
} else {
var comp = cljs.core.first.call(null,seq__10748__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__10766 = cljs.core.next.call(null,seq__10748__$1);
var G__10767 = null;
var G__10768 = (0);
var G__10769 = (0);
seq__10748 = G__10766;
chunk__10750 = G__10767;
count__10751 = G__10768;
i__10752 = G__10769;
continue;
} else {
var G__10770 = cljs.core.next.call(null,seq__10748__$1);
var G__10771 = null;
var G__10772 = (0);
var G__10773 = (0);
seq__10748 = G__10770;
chunk__10750 = G__10771;
count__10751 = G__10772;
i__10752 = G__10773;
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
var args10774 = [];
var len__7652__auto___10777 = arguments.length;
var i__7653__auto___10778 = (0);
while(true){
if((i__7653__auto___10778 < len__7652__auto___10777)){
args10774.push((arguments[i__7653__auto___10778]));

var G__10779 = (i__7653__auto___10778 + (1));
i__7653__auto___10778 = G__10779;
continue;
} else {
}
break;
}

var G__10776 = args10774.length;
switch (G__10776) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10774.length)].join('')));

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
var _STAR_reactions_STAR_10781 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__10782 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__10782,(0),null);
var next_state = cljs.core.nth.call(null,vec__10782,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__10785_10797 = cljs.core.seq.call(null,old_reactions);
var chunk__10786_10798 = null;
var count__10787_10799 = (0);
var i__10788_10800 = (0);
while(true){
if((i__10788_10800 < count__10787_10799)){
var ref_10801 = cljs.core._nth.call(null,chunk__10786_10798,i__10788_10800);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_10801)){
} else {
cljs.core.remove_watch.call(null,ref_10801,key);
}

var G__10802 = seq__10785_10797;
var G__10803 = chunk__10786_10798;
var G__10804 = count__10787_10799;
var G__10805 = (i__10788_10800 + (1));
seq__10785_10797 = G__10802;
chunk__10786_10798 = G__10803;
count__10787_10799 = G__10804;
i__10788_10800 = G__10805;
continue;
} else {
var temp__4657__auto___10806 = cljs.core.seq.call(null,seq__10785_10797);
if(temp__4657__auto___10806){
var seq__10785_10807__$1 = temp__4657__auto___10806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10785_10807__$1)){
var c__7388__auto___10808 = cljs.core.chunk_first.call(null,seq__10785_10807__$1);
var G__10809 = cljs.core.chunk_rest.call(null,seq__10785_10807__$1);
var G__10810 = c__7388__auto___10808;
var G__10811 = cljs.core.count.call(null,c__7388__auto___10808);
var G__10812 = (0);
seq__10785_10797 = G__10809;
chunk__10786_10798 = G__10810;
count__10787_10799 = G__10811;
i__10788_10800 = G__10812;
continue;
} else {
var ref_10813 = cljs.core.first.call(null,seq__10785_10807__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_10813)){
} else {
cljs.core.remove_watch.call(null,ref_10813,key);
}

var G__10814 = cljs.core.next.call(null,seq__10785_10807__$1);
var G__10815 = null;
var G__10816 = (0);
var G__10817 = (0);
seq__10785_10797 = G__10814;
chunk__10786_10798 = G__10815;
count__10787_10799 = G__10816;
i__10788_10800 = G__10817;
continue;
}
} else {
}
}
break;
}

var seq__10789_10818 = cljs.core.seq.call(null,new_reactions);
var chunk__10790_10819 = null;
var count__10791_10820 = (0);
var i__10792_10821 = (0);
while(true){
if((i__10792_10821 < count__10791_10820)){
var ref_10822 = cljs.core._nth.call(null,chunk__10790_10819,i__10792_10821);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_10822)){
} else {
cljs.core.add_watch.call(null,ref_10822,key,((function (seq__10789_10818,chunk__10790_10819,count__10791_10820,i__10792_10821,ref_10822,comp,old_reactions,vec__10782,dom,next_state,new_reactions,key,_STAR_reactions_STAR_10781){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__10789_10818,chunk__10790_10819,count__10791_10820,i__10792_10821,ref_10822,comp,old_reactions,vec__10782,dom,next_state,new_reactions,key,_STAR_reactions_STAR_10781))
);
}

var G__10823 = seq__10789_10818;
var G__10824 = chunk__10790_10819;
var G__10825 = count__10791_10820;
var G__10826 = (i__10792_10821 + (1));
seq__10789_10818 = G__10823;
chunk__10790_10819 = G__10824;
count__10791_10820 = G__10825;
i__10792_10821 = G__10826;
continue;
} else {
var temp__4657__auto___10827 = cljs.core.seq.call(null,seq__10789_10818);
if(temp__4657__auto___10827){
var seq__10789_10828__$1 = temp__4657__auto___10827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10789_10828__$1)){
var c__7388__auto___10829 = cljs.core.chunk_first.call(null,seq__10789_10828__$1);
var G__10830 = cljs.core.chunk_rest.call(null,seq__10789_10828__$1);
var G__10831 = c__7388__auto___10829;
var G__10832 = cljs.core.count.call(null,c__7388__auto___10829);
var G__10833 = (0);
seq__10789_10818 = G__10830;
chunk__10790_10819 = G__10831;
count__10791_10820 = G__10832;
i__10792_10821 = G__10833;
continue;
} else {
var ref_10834 = cljs.core.first.call(null,seq__10789_10828__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_10834)){
} else {
cljs.core.add_watch.call(null,ref_10834,key,((function (seq__10789_10818,chunk__10790_10819,count__10791_10820,i__10792_10821,ref_10834,seq__10789_10828__$1,temp__4657__auto___10827,comp,old_reactions,vec__10782,dom,next_state,new_reactions,key,_STAR_reactions_STAR_10781){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__10789_10818,chunk__10790_10819,count__10791_10820,i__10792_10821,ref_10834,seq__10789_10828__$1,temp__4657__auto___10827,comp,old_reactions,vec__10782,dom,next_state,new_reactions,key,_STAR_reactions_STAR_10781))
);
}

var G__10835 = cljs.core.next.call(null,seq__10789_10828__$1);
var G__10836 = null;
var G__10837 = (0);
var G__10838 = (0);
seq__10789_10818 = G__10835;
chunk__10790_10819 = G__10836;
count__10791_10820 = G__10837;
i__10792_10821 = G__10838;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_10781;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_10839 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__10793_10840 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__10794_10841 = null;
var count__10795_10842 = (0);
var i__10796_10843 = (0);
while(true){
if((i__10796_10843 < count__10795_10842)){
var ref_10844 = cljs.core._nth.call(null,chunk__10794_10841,i__10796_10843);
cljs.core.remove_watch.call(null,ref_10844,key_10839);

var G__10845 = seq__10793_10840;
var G__10846 = chunk__10794_10841;
var G__10847 = count__10795_10842;
var G__10848 = (i__10796_10843 + (1));
seq__10793_10840 = G__10845;
chunk__10794_10841 = G__10846;
count__10795_10842 = G__10847;
i__10796_10843 = G__10848;
continue;
} else {
var temp__4657__auto___10849 = cljs.core.seq.call(null,seq__10793_10840);
if(temp__4657__auto___10849){
var seq__10793_10850__$1 = temp__4657__auto___10849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10793_10850__$1)){
var c__7388__auto___10851 = cljs.core.chunk_first.call(null,seq__10793_10850__$1);
var G__10852 = cljs.core.chunk_rest.call(null,seq__10793_10850__$1);
var G__10853 = c__7388__auto___10851;
var G__10854 = cljs.core.count.call(null,c__7388__auto___10851);
var G__10855 = (0);
seq__10793_10840 = G__10852;
chunk__10794_10841 = G__10853;
count__10795_10842 = G__10854;
i__10796_10843 = G__10855;
continue;
} else {
var ref_10856 = cljs.core.first.call(null,seq__10793_10850__$1);
cljs.core.remove_watch.call(null,ref_10856,key_10839);

var G__10857 = cljs.core.next.call(null,seq__10793_10850__$1);
var G__10858 = null;
var G__10859 = (0);
var G__10860 = (0);
seq__10793_10840 = G__10857;
chunk__10794_10841 = G__10858;
count__10795_10842 = G__10859;
i__10796_10843 = G__10860;
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
var len__7652__auto___10867 = arguments.length;
var i__7653__auto___10868 = (0);
while(true){
if((i__7653__auto___10868 < len__7652__auto___10867)){
args__7659__auto__.push((arguments[i__7653__auto___10868]));

var G__10869 = (i__7653__auto___10868 + (1));
i__7653__auto___10868 = G__10869;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((2) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7660__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__10864){
var map__10865 = p__10864;
var map__10865__$1 = ((((!((map__10865 == null)))?((((map__10865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10865):map__10865);
var options = map__10865__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq10861){
var G__10862 = cljs.core.first.call(null,seq10861);
var seq10861__$1 = cljs.core.next.call(null,seq10861);
var G__10863 = cljs.core.first.call(null,seq10861__$1);
var seq10861__$2 = cljs.core.next.call(null,seq10861__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__10862,G__10863,seq10861__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__7659__auto__ = [];
var len__7652__auto___10873 = arguments.length;
var i__7653__auto___10874 = (0);
while(true){
if((i__7653__auto___10874 < len__7652__auto___10873)){
args__7659__auto__.push((arguments[i__7653__auto___10874]));

var G__10875 = (i__7653__auto___10874 + (1));
i__7653__auto___10874 = G__10875;
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

rum.core.cursor.cljs$lang$applyTo = (function (seq10870){
var G__10871 = cljs.core.first.call(null,seq10870);
var seq10870__$1 = cljs.core.next.call(null,seq10870);
var G__10872 = cljs.core.first.call(null,seq10870__$1);
var seq10870__$2 = cljs.core.next.call(null,seq10870__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__10871,G__10872,seq10870__$2);
});


//# sourceMappingURL=core.js.map