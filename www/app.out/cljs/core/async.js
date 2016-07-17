// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args12542 = [];
var len__7652__auto___12548 = arguments.length;
var i__7653__auto___12549 = (0);
while(true){
if((i__7653__auto___12549 < len__7652__auto___12548)){
args12542.push((arguments[i__7653__auto___12549]));

var G__12550 = (i__7653__auto___12549 + (1));
i__7653__auto___12549 = G__12550;
continue;
} else {
}
break;
}

var G__12544 = args12542.length;
switch (G__12544) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12542.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async12545 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12545 = (function (f,blockable,meta12546){
this.f = f;
this.blockable = blockable;
this.meta12546 = meta12546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12547,meta12546__$1){
var self__ = this;
var _12547__$1 = this;
return (new cljs.core.async.t_cljs$core$async12545(self__.f,self__.blockable,meta12546__$1));
});

cljs.core.async.t_cljs$core$async12545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12547){
var self__ = this;
var _12547__$1 = this;
return self__.meta12546;
});

cljs.core.async.t_cljs$core$async12545.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12545.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12546","meta12546",725765956,null)], null);
});

cljs.core.async.t_cljs$core$async12545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12545";

cljs.core.async.t_cljs$core$async12545.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async12545");
});

cljs.core.async.__GT_t_cljs$core$async12545 = (function cljs$core$async$__GT_t_cljs$core$async12545(f__$1,blockable__$1,meta12546){
return (new cljs.core.async.t_cljs$core$async12545(f__$1,blockable__$1,meta12546));
});

}

return (new cljs.core.async.t_cljs$core$async12545(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args12554 = [];
var len__7652__auto___12557 = arguments.length;
var i__7653__auto___12558 = (0);
while(true){
if((i__7653__auto___12558 < len__7652__auto___12557)){
args12554.push((arguments[i__7653__auto___12558]));

var G__12559 = (i__7653__auto___12558 + (1));
i__7653__auto___12558 = G__12559;
continue;
} else {
}
break;
}

var G__12556 = args12554.length;
switch (G__12556) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12554.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args12561 = [];
var len__7652__auto___12564 = arguments.length;
var i__7653__auto___12565 = (0);
while(true){
if((i__7653__auto___12565 < len__7652__auto___12564)){
args12561.push((arguments[i__7653__auto___12565]));

var G__12566 = (i__7653__auto___12565 + (1));
i__7653__auto___12565 = G__12566;
continue;
} else {
}
break;
}

var G__12563 = args12561.length;
switch (G__12563) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12561.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args12568 = [];
var len__7652__auto___12571 = arguments.length;
var i__7653__auto___12572 = (0);
while(true){
if((i__7653__auto___12572 < len__7652__auto___12571)){
args12568.push((arguments[i__7653__auto___12572]));

var G__12573 = (i__7653__auto___12572 + (1));
i__7653__auto___12572 = G__12573;
continue;
} else {
}
break;
}

var G__12570 = args12568.length;
switch (G__12570) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12568.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12575 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12575);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12575,ret){
return (function (){
return fn1.call(null,val_12575);
});})(val_12575,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args12576 = [];
var len__7652__auto___12579 = arguments.length;
var i__7653__auto___12580 = (0);
while(true){
if((i__7653__auto___12580 < len__7652__auto___12579)){
args12576.push((arguments[i__7653__auto___12580]));

var G__12581 = (i__7653__auto___12580 + (1));
i__7653__auto___12580 = G__12581;
continue;
} else {
}
break;
}

var G__12578 = args12576.length;
switch (G__12578) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12576.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7492__auto___12583 = n;
var x_12584 = (0);
while(true){
if((x_12584 < n__7492__auto___12583)){
(a[x_12584] = (0));

var G__12585 = (x_12584 + (1));
x_12584 = G__12585;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__12586 = (i + (1));
i = G__12586;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12590 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12590 = (function (alt_flag,flag,meta12591){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12591 = meta12591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12592,meta12591__$1){
var self__ = this;
var _12592__$1 = this;
return (new cljs.core.async.t_cljs$core$async12590(self__.alt_flag,self__.flag,meta12591__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12592){
var self__ = this;
var _12592__$1 = this;
return self__.meta12591;
});})(flag))
;

cljs.core.async.t_cljs$core$async12590.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12590.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12590.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12591","meta12591",-704441833,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12590.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12590";

cljs.core.async.t_cljs$core$async12590.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async12590");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12590 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12590(alt_flag__$1,flag__$1,meta12591){
return (new cljs.core.async.t_cljs$core$async12590(alt_flag__$1,flag__$1,meta12591));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12590(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12596 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12596 = (function (alt_handler,flag,cb,meta12597){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12597 = meta12597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12598,meta12597__$1){
var self__ = this;
var _12598__$1 = this;
return (new cljs.core.async.t_cljs$core$async12596(self__.alt_handler,self__.flag,self__.cb,meta12597__$1));
});

cljs.core.async.t_cljs$core$async12596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12598){
var self__ = this;
var _12598__$1 = this;
return self__.meta12597;
});

cljs.core.async.t_cljs$core$async12596.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12596.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12596.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12596.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12597","meta12597",722004719,null)], null);
});

cljs.core.async.t_cljs$core$async12596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12596";

cljs.core.async.t_cljs$core$async12596.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async12596");
});

cljs.core.async.__GT_t_cljs$core$async12596 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12596(alt_handler__$1,flag__$1,cb__$1,meta12597){
return (new cljs.core.async.t_cljs$core$async12596(alt_handler__$1,flag__$1,cb__$1,meta12597));
});

}

return (new cljs.core.async.t_cljs$core$async12596(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12599_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12599_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12600_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12600_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6577__auto__ = wport;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12601 = (i + (1));
i = G__12601;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6577__auto__ = ret;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6565__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6565__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6565__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___12607 = arguments.length;
var i__7653__auto___12608 = (0);
while(true){
if((i__7653__auto___12608 < len__7652__auto___12607)){
args__7659__auto__.push((arguments[i__7653__auto___12608]));

var G__12609 = (i__7653__auto___12608 + (1));
i__7653__auto___12608 = G__12609;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12604){
var map__12605 = p__12604;
var map__12605__$1 = ((((!((map__12605 == null)))?((((map__12605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12605):map__12605);
var opts = map__12605__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12602){
var G__12603 = cljs.core.first.call(null,seq12602);
var seq12602__$1 = cljs.core.next.call(null,seq12602);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12603,seq12602__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args12610 = [];
var len__7652__auto___12660 = arguments.length;
var i__7653__auto___12661 = (0);
while(true){
if((i__7653__auto___12661 < len__7652__auto___12660)){
args12610.push((arguments[i__7653__auto___12661]));

var G__12662 = (i__7653__auto___12661 + (1));
i__7653__auto___12661 = G__12662;
continue;
} else {
}
break;
}

var G__12612 = args12610.length;
switch (G__12612) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12610.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12497__auto___12664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto___12664){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto___12664){
return (function (state_12636){
var state_val_12637 = (state_12636[(1)]);
if((state_val_12637 === (7))){
var inst_12632 = (state_12636[(2)]);
var state_12636__$1 = state_12636;
var statearr_12638_12665 = state_12636__$1;
(statearr_12638_12665[(2)] = inst_12632);

(statearr_12638_12665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12637 === (1))){
var state_12636__$1 = state_12636;
var statearr_12639_12666 = state_12636__$1;
(statearr_12639_12666[(2)] = null);

(statearr_12639_12666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12637 === (4))){
var inst_12615 = (state_12636[(7)]);
var inst_12615__$1 = (state_12636[(2)]);
var inst_12616 = (inst_12615__$1 == null);
var state_12636__$1 = (function (){var statearr_12640 = state_12636;
(statearr_12640[(7)] = inst_12615__$1);

return statearr_12640;
})();
if(cljs.core.truth_(inst_12616)){
var statearr_12641_12667 = state_12636__$1;
(statearr_12641_12667[(1)] = (5));

} else {
var statearr_12642_12668 = state_12636__$1;
(statearr_12642_12668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12637 === (13))){
var state_12636__$1 = state_12636;
var statearr_12643_12669 = state_12636__$1;
(statearr_12643_12669[(2)] = null);

(statearr_12643_12669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12637 === (6))){
var inst_12615 = (state_12636[(7)]);
var state_12636__$1 = state_12636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12636__$1,(11),to,inst_12615);
} else {
if((state_val_12637 === (3))){
var inst_12634 = (state_12636[(2)]);
var state_12636__$1 = state_12636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12636__$1,inst_12634);
} else {
if((state_val_12637 === (12))){
var state_12636__$1 = state_12636;
var statearr_12644_12670 = state_12636__$1;
(statearr_12644_12670[(2)] = null);

(statearr_12644_12670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12637 === (2))){
var state_12636__$1 = state_12636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12636__$1,(4),from);
} else {
if((state_val_12637 === (11))){
var inst_12625 = (state_12636[(2)]);
var state_12636__$1 = state_12636;
if(cljs.core.truth_(inst_12625)){
var statearr_12645_12671 = state_12636__$1;
(statearr_12645_12671[(1)] = (12));

} else {
var statearr_12646_12672 = state_12636__$1;
(statearr_12646_12672[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12637 === (9))){
var state_12636__$1 = state_12636;
var statearr_12647_12673 = state_12636__$1;
(statearr_12647_12673[(2)] = null);

(statearr_12647_12673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12637 === (5))){
var state_12636__$1 = state_12636;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12648_12674 = state_12636__$1;
(statearr_12648_12674[(1)] = (8));

} else {
var statearr_12649_12675 = state_12636__$1;
(statearr_12649_12675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12637 === (14))){
var inst_12630 = (state_12636[(2)]);
var state_12636__$1 = state_12636;
var statearr_12650_12676 = state_12636__$1;
(statearr_12650_12676[(2)] = inst_12630);

(statearr_12650_12676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12637 === (10))){
var inst_12622 = (state_12636[(2)]);
var state_12636__$1 = state_12636;
var statearr_12651_12677 = state_12636__$1;
(statearr_12651_12677[(2)] = inst_12622);

(statearr_12651_12677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12637 === (8))){
var inst_12619 = cljs.core.async.close_BANG_.call(null,to);
var state_12636__$1 = state_12636;
var statearr_12652_12678 = state_12636__$1;
(statearr_12652_12678[(2)] = inst_12619);

(statearr_12652_12678[(1)] = (10));


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
});})(c__12497__auto___12664))
;
return ((function (switch__12385__auto__,c__12497__auto___12664){
return (function() {
var cljs$core$async$state_machine__12386__auto__ = null;
var cljs$core$async$state_machine__12386__auto____0 = (function (){
var statearr_12656 = [null,null,null,null,null,null,null,null];
(statearr_12656[(0)] = cljs$core$async$state_machine__12386__auto__);

(statearr_12656[(1)] = (1));

return statearr_12656;
});
var cljs$core$async$state_machine__12386__auto____1 = (function (state_12636){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_12636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e12657){if((e12657 instanceof Object)){
var ex__12389__auto__ = e12657;
var statearr_12658_12679 = state_12636;
(statearr_12658_12679[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12680 = state_12636;
state_12636 = G__12680;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$state_machine__12386__auto__ = function(state_12636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12386__auto____1.call(this,state_12636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12386__auto____0;
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12386__auto____1;
return cljs$core$async$state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto___12664))
})();
var state__12499__auto__ = (function (){var statearr_12659 = f__12498__auto__.call(null);
(statearr_12659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___12664);

return statearr_12659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto___12664))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__12868){
var vec__12869 = p__12868;
var v = cljs.core.nth.call(null,vec__12869,(0),null);
var p = cljs.core.nth.call(null,vec__12869,(1),null);
var job = vec__12869;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12497__auto___13055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto___13055,res,vec__12869,v,p,job,jobs,results){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto___13055,res,vec__12869,v,p,job,jobs,results){
return (function (state_12876){
var state_val_12877 = (state_12876[(1)]);
if((state_val_12877 === (1))){
var state_12876__$1 = state_12876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12876__$1,(2),res,v);
} else {
if((state_val_12877 === (2))){
var inst_12873 = (state_12876[(2)]);
var inst_12874 = cljs.core.async.close_BANG_.call(null,res);
var state_12876__$1 = (function (){var statearr_12878 = state_12876;
(statearr_12878[(7)] = inst_12873);

return statearr_12878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12876__$1,inst_12874);
} else {
return null;
}
}
});})(c__12497__auto___13055,res,vec__12869,v,p,job,jobs,results))
;
return ((function (switch__12385__auto__,c__12497__auto___13055,res,vec__12869,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____0 = (function (){
var statearr_12882 = [null,null,null,null,null,null,null,null];
(statearr_12882[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__);

(statearr_12882[(1)] = (1));

return statearr_12882;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____1 = (function (state_12876){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_12876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e12883){if((e12883 instanceof Object)){
var ex__12389__auto__ = e12883;
var statearr_12884_13056 = state_12876;
(statearr_12884_13056[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13057 = state_12876;
state_12876 = G__13057;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__ = function(state_12876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____1.call(this,state_12876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto___13055,res,vec__12869,v,p,job,jobs,results))
})();
var state__12499__auto__ = (function (){var statearr_12885 = f__12498__auto__.call(null);
(statearr_12885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___13055);

return statearr_12885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto___13055,res,vec__12869,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12886){
var vec__12887 = p__12886;
var v = cljs.core.nth.call(null,vec__12887,(0),null);
var p = cljs.core.nth.call(null,vec__12887,(1),null);
var job = vec__12887;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7492__auto___13058 = n;
var __13059 = (0);
while(true){
if((__13059 < n__7492__auto___13058)){
var G__12890_13060 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12890_13060) {
case "compute":
var c__12497__auto___13062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13059,c__12497__auto___13062,G__12890_13060,n__7492__auto___13058,jobs,results,process,async){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (__13059,c__12497__auto___13062,G__12890_13060,n__7492__auto___13058,jobs,results,process,async){
return (function (state_12903){
var state_val_12904 = (state_12903[(1)]);
if((state_val_12904 === (1))){
var state_12903__$1 = state_12903;
var statearr_12905_13063 = state_12903__$1;
(statearr_12905_13063[(2)] = null);

(statearr_12905_13063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12904 === (2))){
var state_12903__$1 = state_12903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12903__$1,(4),jobs);
} else {
if((state_val_12904 === (3))){
var inst_12901 = (state_12903[(2)]);
var state_12903__$1 = state_12903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12903__$1,inst_12901);
} else {
if((state_val_12904 === (4))){
var inst_12893 = (state_12903[(2)]);
var inst_12894 = process.call(null,inst_12893);
var state_12903__$1 = state_12903;
if(cljs.core.truth_(inst_12894)){
var statearr_12906_13064 = state_12903__$1;
(statearr_12906_13064[(1)] = (5));

} else {
var statearr_12907_13065 = state_12903__$1;
(statearr_12907_13065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12904 === (5))){
var state_12903__$1 = state_12903;
var statearr_12908_13066 = state_12903__$1;
(statearr_12908_13066[(2)] = null);

(statearr_12908_13066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12904 === (6))){
var state_12903__$1 = state_12903;
var statearr_12909_13067 = state_12903__$1;
(statearr_12909_13067[(2)] = null);

(statearr_12909_13067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12904 === (7))){
var inst_12899 = (state_12903[(2)]);
var state_12903__$1 = state_12903;
var statearr_12910_13068 = state_12903__$1;
(statearr_12910_13068[(2)] = inst_12899);

(statearr_12910_13068[(1)] = (3));


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
});})(__13059,c__12497__auto___13062,G__12890_13060,n__7492__auto___13058,jobs,results,process,async))
;
return ((function (__13059,switch__12385__auto__,c__12497__auto___13062,G__12890_13060,n__7492__auto___13058,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____0 = (function (){
var statearr_12914 = [null,null,null,null,null,null,null];
(statearr_12914[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__);

(statearr_12914[(1)] = (1));

return statearr_12914;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____1 = (function (state_12903){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_12903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e12915){if((e12915 instanceof Object)){
var ex__12389__auto__ = e12915;
var statearr_12916_13069 = state_12903;
(statearr_12916_13069[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13070 = state_12903;
state_12903 = G__13070;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__ = function(state_12903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____1.call(this,state_12903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__;
})()
;})(__13059,switch__12385__auto__,c__12497__auto___13062,G__12890_13060,n__7492__auto___13058,jobs,results,process,async))
})();
var state__12499__auto__ = (function (){var statearr_12917 = f__12498__auto__.call(null);
(statearr_12917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___13062);

return statearr_12917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(__13059,c__12497__auto___13062,G__12890_13060,n__7492__auto___13058,jobs,results,process,async))
);


break;
case "async":
var c__12497__auto___13071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13059,c__12497__auto___13071,G__12890_13060,n__7492__auto___13058,jobs,results,process,async){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (__13059,c__12497__auto___13071,G__12890_13060,n__7492__auto___13058,jobs,results,process,async){
return (function (state_12930){
var state_val_12931 = (state_12930[(1)]);
if((state_val_12931 === (1))){
var state_12930__$1 = state_12930;
var statearr_12932_13072 = state_12930__$1;
(statearr_12932_13072[(2)] = null);

(statearr_12932_13072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (2))){
var state_12930__$1 = state_12930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12930__$1,(4),jobs);
} else {
if((state_val_12931 === (3))){
var inst_12928 = (state_12930[(2)]);
var state_12930__$1 = state_12930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12930__$1,inst_12928);
} else {
if((state_val_12931 === (4))){
var inst_12920 = (state_12930[(2)]);
var inst_12921 = async.call(null,inst_12920);
var state_12930__$1 = state_12930;
if(cljs.core.truth_(inst_12921)){
var statearr_12933_13073 = state_12930__$1;
(statearr_12933_13073[(1)] = (5));

} else {
var statearr_12934_13074 = state_12930__$1;
(statearr_12934_13074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (5))){
var state_12930__$1 = state_12930;
var statearr_12935_13075 = state_12930__$1;
(statearr_12935_13075[(2)] = null);

(statearr_12935_13075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (6))){
var state_12930__$1 = state_12930;
var statearr_12936_13076 = state_12930__$1;
(statearr_12936_13076[(2)] = null);

(statearr_12936_13076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (7))){
var inst_12926 = (state_12930[(2)]);
var state_12930__$1 = state_12930;
var statearr_12937_13077 = state_12930__$1;
(statearr_12937_13077[(2)] = inst_12926);

(statearr_12937_13077[(1)] = (3));


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
});})(__13059,c__12497__auto___13071,G__12890_13060,n__7492__auto___13058,jobs,results,process,async))
;
return ((function (__13059,switch__12385__auto__,c__12497__auto___13071,G__12890_13060,n__7492__auto___13058,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____0 = (function (){
var statearr_12941 = [null,null,null,null,null,null,null];
(statearr_12941[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__);

(statearr_12941[(1)] = (1));

return statearr_12941;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____1 = (function (state_12930){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_12930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e12942){if((e12942 instanceof Object)){
var ex__12389__auto__ = e12942;
var statearr_12943_13078 = state_12930;
(statearr_12943_13078[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13079 = state_12930;
state_12930 = G__13079;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__ = function(state_12930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____1.call(this,state_12930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__;
})()
;})(__13059,switch__12385__auto__,c__12497__auto___13071,G__12890_13060,n__7492__auto___13058,jobs,results,process,async))
})();
var state__12499__auto__ = (function (){var statearr_12944 = f__12498__auto__.call(null);
(statearr_12944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___13071);

return statearr_12944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(__13059,c__12497__auto___13071,G__12890_13060,n__7492__auto___13058,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13080 = (__13059 + (1));
__13059 = G__13080;
continue;
} else {
}
break;
}

var c__12497__auto___13081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto___13081,jobs,results,process,async){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto___13081,jobs,results,process,async){
return (function (state_12966){
var state_val_12967 = (state_12966[(1)]);
if((state_val_12967 === (1))){
var state_12966__$1 = state_12966;
var statearr_12968_13082 = state_12966__$1;
(statearr_12968_13082[(2)] = null);

(statearr_12968_13082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (2))){
var state_12966__$1 = state_12966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12966__$1,(4),from);
} else {
if((state_val_12967 === (3))){
var inst_12964 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12966__$1,inst_12964);
} else {
if((state_val_12967 === (4))){
var inst_12947 = (state_12966[(7)]);
var inst_12947__$1 = (state_12966[(2)]);
var inst_12948 = (inst_12947__$1 == null);
var state_12966__$1 = (function (){var statearr_12969 = state_12966;
(statearr_12969[(7)] = inst_12947__$1);

return statearr_12969;
})();
if(cljs.core.truth_(inst_12948)){
var statearr_12970_13083 = state_12966__$1;
(statearr_12970_13083[(1)] = (5));

} else {
var statearr_12971_13084 = state_12966__$1;
(statearr_12971_13084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (5))){
var inst_12950 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12966__$1 = state_12966;
var statearr_12972_13085 = state_12966__$1;
(statearr_12972_13085[(2)] = inst_12950);

(statearr_12972_13085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (6))){
var inst_12952 = (state_12966[(8)]);
var inst_12947 = (state_12966[(7)]);
var inst_12952__$1 = cljs.core.async.chan.call(null,(1));
var inst_12953 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12954 = [inst_12947,inst_12952__$1];
var inst_12955 = (new cljs.core.PersistentVector(null,2,(5),inst_12953,inst_12954,null));
var state_12966__$1 = (function (){var statearr_12973 = state_12966;
(statearr_12973[(8)] = inst_12952__$1);

return statearr_12973;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12966__$1,(8),jobs,inst_12955);
} else {
if((state_val_12967 === (7))){
var inst_12962 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
var statearr_12974_13086 = state_12966__$1;
(statearr_12974_13086[(2)] = inst_12962);

(statearr_12974_13086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (8))){
var inst_12952 = (state_12966[(8)]);
var inst_12957 = (state_12966[(2)]);
var state_12966__$1 = (function (){var statearr_12975 = state_12966;
(statearr_12975[(9)] = inst_12957);

return statearr_12975;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12966__$1,(9),results,inst_12952);
} else {
if((state_val_12967 === (9))){
var inst_12959 = (state_12966[(2)]);
var state_12966__$1 = (function (){var statearr_12976 = state_12966;
(statearr_12976[(10)] = inst_12959);

return statearr_12976;
})();
var statearr_12977_13087 = state_12966__$1;
(statearr_12977_13087[(2)] = null);

(statearr_12977_13087[(1)] = (2));


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
});})(c__12497__auto___13081,jobs,results,process,async))
;
return ((function (switch__12385__auto__,c__12497__auto___13081,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____0 = (function (){
var statearr_12981 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12981[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__);

(statearr_12981[(1)] = (1));

return statearr_12981;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____1 = (function (state_12966){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_12966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e12982){if((e12982 instanceof Object)){
var ex__12389__auto__ = e12982;
var statearr_12983_13088 = state_12966;
(statearr_12983_13088[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13089 = state_12966;
state_12966 = G__13089;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__ = function(state_12966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____1.call(this,state_12966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto___13081,jobs,results,process,async))
})();
var state__12499__auto__ = (function (){var statearr_12984 = f__12498__auto__.call(null);
(statearr_12984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___13081);

return statearr_12984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto___13081,jobs,results,process,async))
);


var c__12497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto__,jobs,results,process,async){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto__,jobs,results,process,async){
return (function (state_13022){
var state_val_13023 = (state_13022[(1)]);
if((state_val_13023 === (7))){
var inst_13018 = (state_13022[(2)]);
var state_13022__$1 = state_13022;
var statearr_13024_13090 = state_13022__$1;
(statearr_13024_13090[(2)] = inst_13018);

(statearr_13024_13090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (20))){
var state_13022__$1 = state_13022;
var statearr_13025_13091 = state_13022__$1;
(statearr_13025_13091[(2)] = null);

(statearr_13025_13091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (1))){
var state_13022__$1 = state_13022;
var statearr_13026_13092 = state_13022__$1;
(statearr_13026_13092[(2)] = null);

(statearr_13026_13092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (4))){
var inst_12987 = (state_13022[(7)]);
var inst_12987__$1 = (state_13022[(2)]);
var inst_12988 = (inst_12987__$1 == null);
var state_13022__$1 = (function (){var statearr_13027 = state_13022;
(statearr_13027[(7)] = inst_12987__$1);

return statearr_13027;
})();
if(cljs.core.truth_(inst_12988)){
var statearr_13028_13093 = state_13022__$1;
(statearr_13028_13093[(1)] = (5));

} else {
var statearr_13029_13094 = state_13022__$1;
(statearr_13029_13094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (15))){
var inst_13000 = (state_13022[(8)]);
var state_13022__$1 = state_13022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13022__$1,(18),to,inst_13000);
} else {
if((state_val_13023 === (21))){
var inst_13013 = (state_13022[(2)]);
var state_13022__$1 = state_13022;
var statearr_13030_13095 = state_13022__$1;
(statearr_13030_13095[(2)] = inst_13013);

(statearr_13030_13095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (13))){
var inst_13015 = (state_13022[(2)]);
var state_13022__$1 = (function (){var statearr_13031 = state_13022;
(statearr_13031[(9)] = inst_13015);

return statearr_13031;
})();
var statearr_13032_13096 = state_13022__$1;
(statearr_13032_13096[(2)] = null);

(statearr_13032_13096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (6))){
var inst_12987 = (state_13022[(7)]);
var state_13022__$1 = state_13022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13022__$1,(11),inst_12987);
} else {
if((state_val_13023 === (17))){
var inst_13008 = (state_13022[(2)]);
var state_13022__$1 = state_13022;
if(cljs.core.truth_(inst_13008)){
var statearr_13033_13097 = state_13022__$1;
(statearr_13033_13097[(1)] = (19));

} else {
var statearr_13034_13098 = state_13022__$1;
(statearr_13034_13098[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (3))){
var inst_13020 = (state_13022[(2)]);
var state_13022__$1 = state_13022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13022__$1,inst_13020);
} else {
if((state_val_13023 === (12))){
var inst_12997 = (state_13022[(10)]);
var state_13022__$1 = state_13022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13022__$1,(14),inst_12997);
} else {
if((state_val_13023 === (2))){
var state_13022__$1 = state_13022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13022__$1,(4),results);
} else {
if((state_val_13023 === (19))){
var state_13022__$1 = state_13022;
var statearr_13035_13099 = state_13022__$1;
(statearr_13035_13099[(2)] = null);

(statearr_13035_13099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (11))){
var inst_12997 = (state_13022[(2)]);
var state_13022__$1 = (function (){var statearr_13036 = state_13022;
(statearr_13036[(10)] = inst_12997);

return statearr_13036;
})();
var statearr_13037_13100 = state_13022__$1;
(statearr_13037_13100[(2)] = null);

(statearr_13037_13100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (9))){
var state_13022__$1 = state_13022;
var statearr_13038_13101 = state_13022__$1;
(statearr_13038_13101[(2)] = null);

(statearr_13038_13101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (5))){
var state_13022__$1 = state_13022;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13039_13102 = state_13022__$1;
(statearr_13039_13102[(1)] = (8));

} else {
var statearr_13040_13103 = state_13022__$1;
(statearr_13040_13103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (14))){
var inst_13000 = (state_13022[(8)]);
var inst_13002 = (state_13022[(11)]);
var inst_13000__$1 = (state_13022[(2)]);
var inst_13001 = (inst_13000__$1 == null);
var inst_13002__$1 = cljs.core.not.call(null,inst_13001);
var state_13022__$1 = (function (){var statearr_13041 = state_13022;
(statearr_13041[(8)] = inst_13000__$1);

(statearr_13041[(11)] = inst_13002__$1);

return statearr_13041;
})();
if(inst_13002__$1){
var statearr_13042_13104 = state_13022__$1;
(statearr_13042_13104[(1)] = (15));

} else {
var statearr_13043_13105 = state_13022__$1;
(statearr_13043_13105[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (16))){
var inst_13002 = (state_13022[(11)]);
var state_13022__$1 = state_13022;
var statearr_13044_13106 = state_13022__$1;
(statearr_13044_13106[(2)] = inst_13002);

(statearr_13044_13106[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (10))){
var inst_12994 = (state_13022[(2)]);
var state_13022__$1 = state_13022;
var statearr_13045_13107 = state_13022__$1;
(statearr_13045_13107[(2)] = inst_12994);

(statearr_13045_13107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (18))){
var inst_13005 = (state_13022[(2)]);
var state_13022__$1 = state_13022;
var statearr_13046_13108 = state_13022__$1;
(statearr_13046_13108[(2)] = inst_13005);

(statearr_13046_13108[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (8))){
var inst_12991 = cljs.core.async.close_BANG_.call(null,to);
var state_13022__$1 = state_13022;
var statearr_13047_13109 = state_13022__$1;
(statearr_13047_13109[(2)] = inst_12991);

(statearr_13047_13109[(1)] = (10));


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
});})(c__12497__auto__,jobs,results,process,async))
;
return ((function (switch__12385__auto__,c__12497__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____0 = (function (){
var statearr_13051 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__);

(statearr_13051[(1)] = (1));

return statearr_13051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____1 = (function (state_13022){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_13022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e13052){if((e13052 instanceof Object)){
var ex__12389__auto__ = e13052;
var statearr_13053_13110 = state_13022;
(statearr_13053_13110[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13111 = state_13022;
state_13022 = G__13111;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__ = function(state_13022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____1.call(this,state_13022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto__,jobs,results,process,async))
})();
var state__12499__auto__ = (function (){var statearr_13054 = f__12498__auto__.call(null);
(statearr_13054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto__);

return statearr_13054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto__,jobs,results,process,async))
);

return c__12497__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args13112 = [];
var len__7652__auto___13115 = arguments.length;
var i__7653__auto___13116 = (0);
while(true){
if((i__7653__auto___13116 < len__7652__auto___13115)){
args13112.push((arguments[i__7653__auto___13116]));

var G__13117 = (i__7653__auto___13116 + (1));
i__7653__auto___13116 = G__13117;
continue;
} else {
}
break;
}

var G__13114 = args13112.length;
switch (G__13114) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13112.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args13119 = [];
var len__7652__auto___13122 = arguments.length;
var i__7653__auto___13123 = (0);
while(true){
if((i__7653__auto___13123 < len__7652__auto___13122)){
args13119.push((arguments[i__7653__auto___13123]));

var G__13124 = (i__7653__auto___13123 + (1));
i__7653__auto___13123 = G__13124;
continue;
} else {
}
break;
}

var G__13121 = args13119.length;
switch (G__13121) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13119.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args13126 = [];
var len__7652__auto___13179 = arguments.length;
var i__7653__auto___13180 = (0);
while(true){
if((i__7653__auto___13180 < len__7652__auto___13179)){
args13126.push((arguments[i__7653__auto___13180]));

var G__13181 = (i__7653__auto___13180 + (1));
i__7653__auto___13180 = G__13181;
continue;
} else {
}
break;
}

var G__13128 = args13126.length;
switch (G__13128) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13126.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12497__auto___13183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto___13183,tc,fc){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto___13183,tc,fc){
return (function (state_13154){
var state_val_13155 = (state_13154[(1)]);
if((state_val_13155 === (7))){
var inst_13150 = (state_13154[(2)]);
var state_13154__$1 = state_13154;
var statearr_13156_13184 = state_13154__$1;
(statearr_13156_13184[(2)] = inst_13150);

(statearr_13156_13184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13155 === (1))){
var state_13154__$1 = state_13154;
var statearr_13157_13185 = state_13154__$1;
(statearr_13157_13185[(2)] = null);

(statearr_13157_13185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13155 === (4))){
var inst_13131 = (state_13154[(7)]);
var inst_13131__$1 = (state_13154[(2)]);
var inst_13132 = (inst_13131__$1 == null);
var state_13154__$1 = (function (){var statearr_13158 = state_13154;
(statearr_13158[(7)] = inst_13131__$1);

return statearr_13158;
})();
if(cljs.core.truth_(inst_13132)){
var statearr_13159_13186 = state_13154__$1;
(statearr_13159_13186[(1)] = (5));

} else {
var statearr_13160_13187 = state_13154__$1;
(statearr_13160_13187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13155 === (13))){
var state_13154__$1 = state_13154;
var statearr_13161_13188 = state_13154__$1;
(statearr_13161_13188[(2)] = null);

(statearr_13161_13188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13155 === (6))){
var inst_13131 = (state_13154[(7)]);
var inst_13137 = p.call(null,inst_13131);
var state_13154__$1 = state_13154;
if(cljs.core.truth_(inst_13137)){
var statearr_13162_13189 = state_13154__$1;
(statearr_13162_13189[(1)] = (9));

} else {
var statearr_13163_13190 = state_13154__$1;
(statearr_13163_13190[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13155 === (3))){
var inst_13152 = (state_13154[(2)]);
var state_13154__$1 = state_13154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13154__$1,inst_13152);
} else {
if((state_val_13155 === (12))){
var state_13154__$1 = state_13154;
var statearr_13164_13191 = state_13154__$1;
(statearr_13164_13191[(2)] = null);

(statearr_13164_13191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13155 === (2))){
var state_13154__$1 = state_13154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13154__$1,(4),ch);
} else {
if((state_val_13155 === (11))){
var inst_13131 = (state_13154[(7)]);
var inst_13141 = (state_13154[(2)]);
var state_13154__$1 = state_13154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13154__$1,(8),inst_13141,inst_13131);
} else {
if((state_val_13155 === (9))){
var state_13154__$1 = state_13154;
var statearr_13165_13192 = state_13154__$1;
(statearr_13165_13192[(2)] = tc);

(statearr_13165_13192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13155 === (5))){
var inst_13134 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13135 = cljs.core.async.close_BANG_.call(null,fc);
var state_13154__$1 = (function (){var statearr_13166 = state_13154;
(statearr_13166[(8)] = inst_13134);

return statearr_13166;
})();
var statearr_13167_13193 = state_13154__$1;
(statearr_13167_13193[(2)] = inst_13135);

(statearr_13167_13193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13155 === (14))){
var inst_13148 = (state_13154[(2)]);
var state_13154__$1 = state_13154;
var statearr_13168_13194 = state_13154__$1;
(statearr_13168_13194[(2)] = inst_13148);

(statearr_13168_13194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13155 === (10))){
var state_13154__$1 = state_13154;
var statearr_13169_13195 = state_13154__$1;
(statearr_13169_13195[(2)] = fc);

(statearr_13169_13195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13155 === (8))){
var inst_13143 = (state_13154[(2)]);
var state_13154__$1 = state_13154;
if(cljs.core.truth_(inst_13143)){
var statearr_13170_13196 = state_13154__$1;
(statearr_13170_13196[(1)] = (12));

} else {
var statearr_13171_13197 = state_13154__$1;
(statearr_13171_13197[(1)] = (13));

}

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
});})(c__12497__auto___13183,tc,fc))
;
return ((function (switch__12385__auto__,c__12497__auto___13183,tc,fc){
return (function() {
var cljs$core$async$state_machine__12386__auto__ = null;
var cljs$core$async$state_machine__12386__auto____0 = (function (){
var statearr_13175 = [null,null,null,null,null,null,null,null,null];
(statearr_13175[(0)] = cljs$core$async$state_machine__12386__auto__);

(statearr_13175[(1)] = (1));

return statearr_13175;
});
var cljs$core$async$state_machine__12386__auto____1 = (function (state_13154){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_13154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e13176){if((e13176 instanceof Object)){
var ex__12389__auto__ = e13176;
var statearr_13177_13198 = state_13154;
(statearr_13177_13198[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13199 = state_13154;
state_13154 = G__13199;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$state_machine__12386__auto__ = function(state_13154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12386__auto____1.call(this,state_13154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12386__auto____0;
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12386__auto____1;
return cljs$core$async$state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto___13183,tc,fc))
})();
var state__12499__auto__ = (function (){var statearr_13178 = f__12498__auto__.call(null);
(statearr_13178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___13183);

return statearr_13178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto___13183,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto__){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto__){
return (function (state_13263){
var state_val_13264 = (state_13263[(1)]);
if((state_val_13264 === (7))){
var inst_13259 = (state_13263[(2)]);
var state_13263__$1 = state_13263;
var statearr_13265_13286 = state_13263__$1;
(statearr_13265_13286[(2)] = inst_13259);

(statearr_13265_13286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (1))){
var inst_13243 = init;
var state_13263__$1 = (function (){var statearr_13266 = state_13263;
(statearr_13266[(7)] = inst_13243);

return statearr_13266;
})();
var statearr_13267_13287 = state_13263__$1;
(statearr_13267_13287[(2)] = null);

(statearr_13267_13287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (4))){
var inst_13246 = (state_13263[(8)]);
var inst_13246__$1 = (state_13263[(2)]);
var inst_13247 = (inst_13246__$1 == null);
var state_13263__$1 = (function (){var statearr_13268 = state_13263;
(statearr_13268[(8)] = inst_13246__$1);

return statearr_13268;
})();
if(cljs.core.truth_(inst_13247)){
var statearr_13269_13288 = state_13263__$1;
(statearr_13269_13288[(1)] = (5));

} else {
var statearr_13270_13289 = state_13263__$1;
(statearr_13270_13289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (6))){
var inst_13246 = (state_13263[(8)]);
var inst_13250 = (state_13263[(9)]);
var inst_13243 = (state_13263[(7)]);
var inst_13250__$1 = f.call(null,inst_13243,inst_13246);
var inst_13251 = cljs.core.reduced_QMARK_.call(null,inst_13250__$1);
var state_13263__$1 = (function (){var statearr_13271 = state_13263;
(statearr_13271[(9)] = inst_13250__$1);

return statearr_13271;
})();
if(inst_13251){
var statearr_13272_13290 = state_13263__$1;
(statearr_13272_13290[(1)] = (8));

} else {
var statearr_13273_13291 = state_13263__$1;
(statearr_13273_13291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (3))){
var inst_13261 = (state_13263[(2)]);
var state_13263__$1 = state_13263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13263__$1,inst_13261);
} else {
if((state_val_13264 === (2))){
var state_13263__$1 = state_13263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13263__$1,(4),ch);
} else {
if((state_val_13264 === (9))){
var inst_13250 = (state_13263[(9)]);
var inst_13243 = inst_13250;
var state_13263__$1 = (function (){var statearr_13274 = state_13263;
(statearr_13274[(7)] = inst_13243);

return statearr_13274;
})();
var statearr_13275_13292 = state_13263__$1;
(statearr_13275_13292[(2)] = null);

(statearr_13275_13292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (5))){
var inst_13243 = (state_13263[(7)]);
var state_13263__$1 = state_13263;
var statearr_13276_13293 = state_13263__$1;
(statearr_13276_13293[(2)] = inst_13243);

(statearr_13276_13293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (10))){
var inst_13257 = (state_13263[(2)]);
var state_13263__$1 = state_13263;
var statearr_13277_13294 = state_13263__$1;
(statearr_13277_13294[(2)] = inst_13257);

(statearr_13277_13294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13264 === (8))){
var inst_13250 = (state_13263[(9)]);
var inst_13253 = cljs.core.deref.call(null,inst_13250);
var state_13263__$1 = state_13263;
var statearr_13278_13295 = state_13263__$1;
(statearr_13278_13295[(2)] = inst_13253);

(statearr_13278_13295[(1)] = (10));


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
});})(c__12497__auto__))
;
return ((function (switch__12385__auto__,c__12497__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12386__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12386__auto____0 = (function (){
var statearr_13282 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13282[(0)] = cljs$core$async$reduce_$_state_machine__12386__auto__);

(statearr_13282[(1)] = (1));

return statearr_13282;
});
var cljs$core$async$reduce_$_state_machine__12386__auto____1 = (function (state_13263){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_13263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e13283){if((e13283 instanceof Object)){
var ex__12389__auto__ = e13283;
var statearr_13284_13296 = state_13263;
(statearr_13284_13296[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13297 = state_13263;
state_13263 = G__13297;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12386__auto__ = function(state_13263){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12386__auto____1.call(this,state_13263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12386__auto____0;
cljs$core$async$reduce_$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12386__auto____1;
return cljs$core$async$reduce_$_state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto__))
})();
var state__12499__auto__ = (function (){var statearr_13285 = f__12498__auto__.call(null);
(statearr_13285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto__);

return statearr_13285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto__))
);

return c__12497__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args13298 = [];
var len__7652__auto___13350 = arguments.length;
var i__7653__auto___13351 = (0);
while(true){
if((i__7653__auto___13351 < len__7652__auto___13350)){
args13298.push((arguments[i__7653__auto___13351]));

var G__13352 = (i__7653__auto___13351 + (1));
i__7653__auto___13351 = G__13352;
continue;
} else {
}
break;
}

var G__13300 = args13298.length;
switch (G__13300) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13298.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto__){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto__){
return (function (state_13325){
var state_val_13326 = (state_13325[(1)]);
if((state_val_13326 === (7))){
var inst_13307 = (state_13325[(2)]);
var state_13325__$1 = state_13325;
var statearr_13327_13354 = state_13325__$1;
(statearr_13327_13354[(2)] = inst_13307);

(statearr_13327_13354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13326 === (1))){
var inst_13301 = cljs.core.seq.call(null,coll);
var inst_13302 = inst_13301;
var state_13325__$1 = (function (){var statearr_13328 = state_13325;
(statearr_13328[(7)] = inst_13302);

return statearr_13328;
})();
var statearr_13329_13355 = state_13325__$1;
(statearr_13329_13355[(2)] = null);

(statearr_13329_13355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13326 === (4))){
var inst_13302 = (state_13325[(7)]);
var inst_13305 = cljs.core.first.call(null,inst_13302);
var state_13325__$1 = state_13325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13325__$1,(7),ch,inst_13305);
} else {
if((state_val_13326 === (13))){
var inst_13319 = (state_13325[(2)]);
var state_13325__$1 = state_13325;
var statearr_13330_13356 = state_13325__$1;
(statearr_13330_13356[(2)] = inst_13319);

(statearr_13330_13356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13326 === (6))){
var inst_13310 = (state_13325[(2)]);
var state_13325__$1 = state_13325;
if(cljs.core.truth_(inst_13310)){
var statearr_13331_13357 = state_13325__$1;
(statearr_13331_13357[(1)] = (8));

} else {
var statearr_13332_13358 = state_13325__$1;
(statearr_13332_13358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13326 === (3))){
var inst_13323 = (state_13325[(2)]);
var state_13325__$1 = state_13325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13325__$1,inst_13323);
} else {
if((state_val_13326 === (12))){
var state_13325__$1 = state_13325;
var statearr_13333_13359 = state_13325__$1;
(statearr_13333_13359[(2)] = null);

(statearr_13333_13359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13326 === (2))){
var inst_13302 = (state_13325[(7)]);
var state_13325__$1 = state_13325;
if(cljs.core.truth_(inst_13302)){
var statearr_13334_13360 = state_13325__$1;
(statearr_13334_13360[(1)] = (4));

} else {
var statearr_13335_13361 = state_13325__$1;
(statearr_13335_13361[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13326 === (11))){
var inst_13316 = cljs.core.async.close_BANG_.call(null,ch);
var state_13325__$1 = state_13325;
var statearr_13336_13362 = state_13325__$1;
(statearr_13336_13362[(2)] = inst_13316);

(statearr_13336_13362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13326 === (9))){
var state_13325__$1 = state_13325;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13337_13363 = state_13325__$1;
(statearr_13337_13363[(1)] = (11));

} else {
var statearr_13338_13364 = state_13325__$1;
(statearr_13338_13364[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13326 === (5))){
var inst_13302 = (state_13325[(7)]);
var state_13325__$1 = state_13325;
var statearr_13339_13365 = state_13325__$1;
(statearr_13339_13365[(2)] = inst_13302);

(statearr_13339_13365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13326 === (10))){
var inst_13321 = (state_13325[(2)]);
var state_13325__$1 = state_13325;
var statearr_13340_13366 = state_13325__$1;
(statearr_13340_13366[(2)] = inst_13321);

(statearr_13340_13366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13326 === (8))){
var inst_13302 = (state_13325[(7)]);
var inst_13312 = cljs.core.next.call(null,inst_13302);
var inst_13302__$1 = inst_13312;
var state_13325__$1 = (function (){var statearr_13341 = state_13325;
(statearr_13341[(7)] = inst_13302__$1);

return statearr_13341;
})();
var statearr_13342_13367 = state_13325__$1;
(statearr_13342_13367[(2)] = null);

(statearr_13342_13367[(1)] = (2));


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
});})(c__12497__auto__))
;
return ((function (switch__12385__auto__,c__12497__auto__){
return (function() {
var cljs$core$async$state_machine__12386__auto__ = null;
var cljs$core$async$state_machine__12386__auto____0 = (function (){
var statearr_13346 = [null,null,null,null,null,null,null,null];
(statearr_13346[(0)] = cljs$core$async$state_machine__12386__auto__);

(statearr_13346[(1)] = (1));

return statearr_13346;
});
var cljs$core$async$state_machine__12386__auto____1 = (function (state_13325){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_13325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e13347){if((e13347 instanceof Object)){
var ex__12389__auto__ = e13347;
var statearr_13348_13368 = state_13325;
(statearr_13348_13368[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13369 = state_13325;
state_13325 = G__13369;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$state_machine__12386__auto__ = function(state_13325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12386__auto____1.call(this,state_13325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12386__auto____0;
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12386__auto____1;
return cljs$core$async$state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto__))
})();
var state__12499__auto__ = (function (){var statearr_13349 = f__12498__auto__.call(null);
(statearr_13349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto__);

return statearr_13349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto__))
);

return c__12497__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7240__auto__ = (((_ == null))?null:_);
var m__7241__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,_);
} else {
var m__7241__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7240__auto__ = (((m == null))?null:m);
var m__7241__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7241__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7240__auto__ = (((m == null))?null:m);
var m__7241__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,m,ch);
} else {
var m__7241__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7240__auto__ = (((m == null))?null:m);
var m__7241__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,m);
} else {
var m__7241__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13595 = (function (mult,ch,cs,meta13596){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13596 = meta13596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13597,meta13596__$1){
var self__ = this;
var _13597__$1 = this;
return (new cljs.core.async.t_cljs$core$async13595(self__.mult,self__.ch,self__.cs,meta13596__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13597){
var self__ = this;
var _13597__$1 = this;
return self__.meta13596;
});})(cs))
;

cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13595.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13595.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13596","meta13596",-1667620001,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13595";

cljs.core.async.t_cljs$core$async13595.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async13595");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13595 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13595(mult__$1,ch__$1,cs__$1,meta13596){
return (new cljs.core.async.t_cljs$core$async13595(mult__$1,ch__$1,cs__$1,meta13596));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13595(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__12497__auto___13820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto___13820,cs,m,dchan,dctr,done){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto___13820,cs,m,dchan,dctr,done){
return (function (state_13732){
var state_val_13733 = (state_13732[(1)]);
if((state_val_13733 === (7))){
var inst_13728 = (state_13732[(2)]);
var state_13732__$1 = state_13732;
var statearr_13734_13821 = state_13732__$1;
(statearr_13734_13821[(2)] = inst_13728);

(statearr_13734_13821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (20))){
var inst_13631 = (state_13732[(7)]);
var inst_13643 = cljs.core.first.call(null,inst_13631);
var inst_13644 = cljs.core.nth.call(null,inst_13643,(0),null);
var inst_13645 = cljs.core.nth.call(null,inst_13643,(1),null);
var state_13732__$1 = (function (){var statearr_13735 = state_13732;
(statearr_13735[(8)] = inst_13644);

return statearr_13735;
})();
if(cljs.core.truth_(inst_13645)){
var statearr_13736_13822 = state_13732__$1;
(statearr_13736_13822[(1)] = (22));

} else {
var statearr_13737_13823 = state_13732__$1;
(statearr_13737_13823[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (27))){
var inst_13600 = (state_13732[(9)]);
var inst_13680 = (state_13732[(10)]);
var inst_13673 = (state_13732[(11)]);
var inst_13675 = (state_13732[(12)]);
var inst_13680__$1 = cljs.core._nth.call(null,inst_13673,inst_13675);
var inst_13681 = cljs.core.async.put_BANG_.call(null,inst_13680__$1,inst_13600,done);
var state_13732__$1 = (function (){var statearr_13738 = state_13732;
(statearr_13738[(10)] = inst_13680__$1);

return statearr_13738;
})();
if(cljs.core.truth_(inst_13681)){
var statearr_13739_13824 = state_13732__$1;
(statearr_13739_13824[(1)] = (30));

} else {
var statearr_13740_13825 = state_13732__$1;
(statearr_13740_13825[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (1))){
var state_13732__$1 = state_13732;
var statearr_13741_13826 = state_13732__$1;
(statearr_13741_13826[(2)] = null);

(statearr_13741_13826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (24))){
var inst_13631 = (state_13732[(7)]);
var inst_13650 = (state_13732[(2)]);
var inst_13651 = cljs.core.next.call(null,inst_13631);
var inst_13609 = inst_13651;
var inst_13610 = null;
var inst_13611 = (0);
var inst_13612 = (0);
var state_13732__$1 = (function (){var statearr_13742 = state_13732;
(statearr_13742[(13)] = inst_13610);

(statearr_13742[(14)] = inst_13609);

(statearr_13742[(15)] = inst_13611);

(statearr_13742[(16)] = inst_13650);

(statearr_13742[(17)] = inst_13612);

return statearr_13742;
})();
var statearr_13743_13827 = state_13732__$1;
(statearr_13743_13827[(2)] = null);

(statearr_13743_13827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (39))){
var state_13732__$1 = state_13732;
var statearr_13747_13828 = state_13732__$1;
(statearr_13747_13828[(2)] = null);

(statearr_13747_13828[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (4))){
var inst_13600 = (state_13732[(9)]);
var inst_13600__$1 = (state_13732[(2)]);
var inst_13601 = (inst_13600__$1 == null);
var state_13732__$1 = (function (){var statearr_13748 = state_13732;
(statearr_13748[(9)] = inst_13600__$1);

return statearr_13748;
})();
if(cljs.core.truth_(inst_13601)){
var statearr_13749_13829 = state_13732__$1;
(statearr_13749_13829[(1)] = (5));

} else {
var statearr_13750_13830 = state_13732__$1;
(statearr_13750_13830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (15))){
var inst_13610 = (state_13732[(13)]);
var inst_13609 = (state_13732[(14)]);
var inst_13611 = (state_13732[(15)]);
var inst_13612 = (state_13732[(17)]);
var inst_13627 = (state_13732[(2)]);
var inst_13628 = (inst_13612 + (1));
var tmp13744 = inst_13610;
var tmp13745 = inst_13609;
var tmp13746 = inst_13611;
var inst_13609__$1 = tmp13745;
var inst_13610__$1 = tmp13744;
var inst_13611__$1 = tmp13746;
var inst_13612__$1 = inst_13628;
var state_13732__$1 = (function (){var statearr_13751 = state_13732;
(statearr_13751[(13)] = inst_13610__$1);

(statearr_13751[(14)] = inst_13609__$1);

(statearr_13751[(15)] = inst_13611__$1);

(statearr_13751[(18)] = inst_13627);

(statearr_13751[(17)] = inst_13612__$1);

return statearr_13751;
})();
var statearr_13752_13831 = state_13732__$1;
(statearr_13752_13831[(2)] = null);

(statearr_13752_13831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (21))){
var inst_13654 = (state_13732[(2)]);
var state_13732__$1 = state_13732;
var statearr_13756_13832 = state_13732__$1;
(statearr_13756_13832[(2)] = inst_13654);

(statearr_13756_13832[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (31))){
var inst_13680 = (state_13732[(10)]);
var inst_13684 = done.call(null,null);
var inst_13685 = cljs.core.async.untap_STAR_.call(null,m,inst_13680);
var state_13732__$1 = (function (){var statearr_13757 = state_13732;
(statearr_13757[(19)] = inst_13684);

return statearr_13757;
})();
var statearr_13758_13833 = state_13732__$1;
(statearr_13758_13833[(2)] = inst_13685);

(statearr_13758_13833[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (32))){
var inst_13674 = (state_13732[(20)]);
var inst_13672 = (state_13732[(21)]);
var inst_13673 = (state_13732[(11)]);
var inst_13675 = (state_13732[(12)]);
var inst_13687 = (state_13732[(2)]);
var inst_13688 = (inst_13675 + (1));
var tmp13753 = inst_13674;
var tmp13754 = inst_13672;
var tmp13755 = inst_13673;
var inst_13672__$1 = tmp13754;
var inst_13673__$1 = tmp13755;
var inst_13674__$1 = tmp13753;
var inst_13675__$1 = inst_13688;
var state_13732__$1 = (function (){var statearr_13759 = state_13732;
(statearr_13759[(20)] = inst_13674__$1);

(statearr_13759[(21)] = inst_13672__$1);

(statearr_13759[(22)] = inst_13687);

(statearr_13759[(11)] = inst_13673__$1);

(statearr_13759[(12)] = inst_13675__$1);

return statearr_13759;
})();
var statearr_13760_13834 = state_13732__$1;
(statearr_13760_13834[(2)] = null);

(statearr_13760_13834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (40))){
var inst_13700 = (state_13732[(23)]);
var inst_13704 = done.call(null,null);
var inst_13705 = cljs.core.async.untap_STAR_.call(null,m,inst_13700);
var state_13732__$1 = (function (){var statearr_13761 = state_13732;
(statearr_13761[(24)] = inst_13704);

return statearr_13761;
})();
var statearr_13762_13835 = state_13732__$1;
(statearr_13762_13835[(2)] = inst_13705);

(statearr_13762_13835[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (33))){
var inst_13691 = (state_13732[(25)]);
var inst_13693 = cljs.core.chunked_seq_QMARK_.call(null,inst_13691);
var state_13732__$1 = state_13732;
if(inst_13693){
var statearr_13763_13836 = state_13732__$1;
(statearr_13763_13836[(1)] = (36));

} else {
var statearr_13764_13837 = state_13732__$1;
(statearr_13764_13837[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (13))){
var inst_13621 = (state_13732[(26)]);
var inst_13624 = cljs.core.async.close_BANG_.call(null,inst_13621);
var state_13732__$1 = state_13732;
var statearr_13765_13838 = state_13732__$1;
(statearr_13765_13838[(2)] = inst_13624);

(statearr_13765_13838[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (22))){
var inst_13644 = (state_13732[(8)]);
var inst_13647 = cljs.core.async.close_BANG_.call(null,inst_13644);
var state_13732__$1 = state_13732;
var statearr_13766_13839 = state_13732__$1;
(statearr_13766_13839[(2)] = inst_13647);

(statearr_13766_13839[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (36))){
var inst_13691 = (state_13732[(25)]);
var inst_13695 = cljs.core.chunk_first.call(null,inst_13691);
var inst_13696 = cljs.core.chunk_rest.call(null,inst_13691);
var inst_13697 = cljs.core.count.call(null,inst_13695);
var inst_13672 = inst_13696;
var inst_13673 = inst_13695;
var inst_13674 = inst_13697;
var inst_13675 = (0);
var state_13732__$1 = (function (){var statearr_13767 = state_13732;
(statearr_13767[(20)] = inst_13674);

(statearr_13767[(21)] = inst_13672);

(statearr_13767[(11)] = inst_13673);

(statearr_13767[(12)] = inst_13675);

return statearr_13767;
})();
var statearr_13768_13840 = state_13732__$1;
(statearr_13768_13840[(2)] = null);

(statearr_13768_13840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (41))){
var inst_13691 = (state_13732[(25)]);
var inst_13707 = (state_13732[(2)]);
var inst_13708 = cljs.core.next.call(null,inst_13691);
var inst_13672 = inst_13708;
var inst_13673 = null;
var inst_13674 = (0);
var inst_13675 = (0);
var state_13732__$1 = (function (){var statearr_13769 = state_13732;
(statearr_13769[(20)] = inst_13674);

(statearr_13769[(21)] = inst_13672);

(statearr_13769[(27)] = inst_13707);

(statearr_13769[(11)] = inst_13673);

(statearr_13769[(12)] = inst_13675);

return statearr_13769;
})();
var statearr_13770_13841 = state_13732__$1;
(statearr_13770_13841[(2)] = null);

(statearr_13770_13841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (43))){
var state_13732__$1 = state_13732;
var statearr_13771_13842 = state_13732__$1;
(statearr_13771_13842[(2)] = null);

(statearr_13771_13842[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (29))){
var inst_13716 = (state_13732[(2)]);
var state_13732__$1 = state_13732;
var statearr_13772_13843 = state_13732__$1;
(statearr_13772_13843[(2)] = inst_13716);

(statearr_13772_13843[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (44))){
var inst_13725 = (state_13732[(2)]);
var state_13732__$1 = (function (){var statearr_13773 = state_13732;
(statearr_13773[(28)] = inst_13725);

return statearr_13773;
})();
var statearr_13774_13844 = state_13732__$1;
(statearr_13774_13844[(2)] = null);

(statearr_13774_13844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (6))){
var inst_13664 = (state_13732[(29)]);
var inst_13663 = cljs.core.deref.call(null,cs);
var inst_13664__$1 = cljs.core.keys.call(null,inst_13663);
var inst_13665 = cljs.core.count.call(null,inst_13664__$1);
var inst_13666 = cljs.core.reset_BANG_.call(null,dctr,inst_13665);
var inst_13671 = cljs.core.seq.call(null,inst_13664__$1);
var inst_13672 = inst_13671;
var inst_13673 = null;
var inst_13674 = (0);
var inst_13675 = (0);
var state_13732__$1 = (function (){var statearr_13775 = state_13732;
(statearr_13775[(20)] = inst_13674);

(statearr_13775[(21)] = inst_13672);

(statearr_13775[(29)] = inst_13664__$1);

(statearr_13775[(30)] = inst_13666);

(statearr_13775[(11)] = inst_13673);

(statearr_13775[(12)] = inst_13675);

return statearr_13775;
})();
var statearr_13776_13845 = state_13732__$1;
(statearr_13776_13845[(2)] = null);

(statearr_13776_13845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (28))){
var inst_13672 = (state_13732[(21)]);
var inst_13691 = (state_13732[(25)]);
var inst_13691__$1 = cljs.core.seq.call(null,inst_13672);
var state_13732__$1 = (function (){var statearr_13777 = state_13732;
(statearr_13777[(25)] = inst_13691__$1);

return statearr_13777;
})();
if(inst_13691__$1){
var statearr_13778_13846 = state_13732__$1;
(statearr_13778_13846[(1)] = (33));

} else {
var statearr_13779_13847 = state_13732__$1;
(statearr_13779_13847[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (25))){
var inst_13674 = (state_13732[(20)]);
var inst_13675 = (state_13732[(12)]);
var inst_13677 = (inst_13675 < inst_13674);
var inst_13678 = inst_13677;
var state_13732__$1 = state_13732;
if(cljs.core.truth_(inst_13678)){
var statearr_13780_13848 = state_13732__$1;
(statearr_13780_13848[(1)] = (27));

} else {
var statearr_13781_13849 = state_13732__$1;
(statearr_13781_13849[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (34))){
var state_13732__$1 = state_13732;
var statearr_13782_13850 = state_13732__$1;
(statearr_13782_13850[(2)] = null);

(statearr_13782_13850[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (17))){
var state_13732__$1 = state_13732;
var statearr_13783_13851 = state_13732__$1;
(statearr_13783_13851[(2)] = null);

(statearr_13783_13851[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (3))){
var inst_13730 = (state_13732[(2)]);
var state_13732__$1 = state_13732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13732__$1,inst_13730);
} else {
if((state_val_13733 === (12))){
var inst_13659 = (state_13732[(2)]);
var state_13732__$1 = state_13732;
var statearr_13784_13852 = state_13732__$1;
(statearr_13784_13852[(2)] = inst_13659);

(statearr_13784_13852[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (2))){
var state_13732__$1 = state_13732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13732__$1,(4),ch);
} else {
if((state_val_13733 === (23))){
var state_13732__$1 = state_13732;
var statearr_13785_13853 = state_13732__$1;
(statearr_13785_13853[(2)] = null);

(statearr_13785_13853[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (35))){
var inst_13714 = (state_13732[(2)]);
var state_13732__$1 = state_13732;
var statearr_13786_13854 = state_13732__$1;
(statearr_13786_13854[(2)] = inst_13714);

(statearr_13786_13854[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (19))){
var inst_13631 = (state_13732[(7)]);
var inst_13635 = cljs.core.chunk_first.call(null,inst_13631);
var inst_13636 = cljs.core.chunk_rest.call(null,inst_13631);
var inst_13637 = cljs.core.count.call(null,inst_13635);
var inst_13609 = inst_13636;
var inst_13610 = inst_13635;
var inst_13611 = inst_13637;
var inst_13612 = (0);
var state_13732__$1 = (function (){var statearr_13787 = state_13732;
(statearr_13787[(13)] = inst_13610);

(statearr_13787[(14)] = inst_13609);

(statearr_13787[(15)] = inst_13611);

(statearr_13787[(17)] = inst_13612);

return statearr_13787;
})();
var statearr_13788_13855 = state_13732__$1;
(statearr_13788_13855[(2)] = null);

(statearr_13788_13855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (11))){
var inst_13609 = (state_13732[(14)]);
var inst_13631 = (state_13732[(7)]);
var inst_13631__$1 = cljs.core.seq.call(null,inst_13609);
var state_13732__$1 = (function (){var statearr_13789 = state_13732;
(statearr_13789[(7)] = inst_13631__$1);

return statearr_13789;
})();
if(inst_13631__$1){
var statearr_13790_13856 = state_13732__$1;
(statearr_13790_13856[(1)] = (16));

} else {
var statearr_13791_13857 = state_13732__$1;
(statearr_13791_13857[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (9))){
var inst_13661 = (state_13732[(2)]);
var state_13732__$1 = state_13732;
var statearr_13792_13858 = state_13732__$1;
(statearr_13792_13858[(2)] = inst_13661);

(statearr_13792_13858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (5))){
var inst_13607 = cljs.core.deref.call(null,cs);
var inst_13608 = cljs.core.seq.call(null,inst_13607);
var inst_13609 = inst_13608;
var inst_13610 = null;
var inst_13611 = (0);
var inst_13612 = (0);
var state_13732__$1 = (function (){var statearr_13793 = state_13732;
(statearr_13793[(13)] = inst_13610);

(statearr_13793[(14)] = inst_13609);

(statearr_13793[(15)] = inst_13611);

(statearr_13793[(17)] = inst_13612);

return statearr_13793;
})();
var statearr_13794_13859 = state_13732__$1;
(statearr_13794_13859[(2)] = null);

(statearr_13794_13859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (14))){
var state_13732__$1 = state_13732;
var statearr_13795_13860 = state_13732__$1;
(statearr_13795_13860[(2)] = null);

(statearr_13795_13860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (45))){
var inst_13722 = (state_13732[(2)]);
var state_13732__$1 = state_13732;
var statearr_13796_13861 = state_13732__$1;
(statearr_13796_13861[(2)] = inst_13722);

(statearr_13796_13861[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (26))){
var inst_13664 = (state_13732[(29)]);
var inst_13718 = (state_13732[(2)]);
var inst_13719 = cljs.core.seq.call(null,inst_13664);
var state_13732__$1 = (function (){var statearr_13797 = state_13732;
(statearr_13797[(31)] = inst_13718);

return statearr_13797;
})();
if(inst_13719){
var statearr_13798_13862 = state_13732__$1;
(statearr_13798_13862[(1)] = (42));

} else {
var statearr_13799_13863 = state_13732__$1;
(statearr_13799_13863[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (16))){
var inst_13631 = (state_13732[(7)]);
var inst_13633 = cljs.core.chunked_seq_QMARK_.call(null,inst_13631);
var state_13732__$1 = state_13732;
if(inst_13633){
var statearr_13800_13864 = state_13732__$1;
(statearr_13800_13864[(1)] = (19));

} else {
var statearr_13801_13865 = state_13732__$1;
(statearr_13801_13865[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (38))){
var inst_13711 = (state_13732[(2)]);
var state_13732__$1 = state_13732;
var statearr_13802_13866 = state_13732__$1;
(statearr_13802_13866[(2)] = inst_13711);

(statearr_13802_13866[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (30))){
var state_13732__$1 = state_13732;
var statearr_13803_13867 = state_13732__$1;
(statearr_13803_13867[(2)] = null);

(statearr_13803_13867[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (10))){
var inst_13610 = (state_13732[(13)]);
var inst_13612 = (state_13732[(17)]);
var inst_13620 = cljs.core._nth.call(null,inst_13610,inst_13612);
var inst_13621 = cljs.core.nth.call(null,inst_13620,(0),null);
var inst_13622 = cljs.core.nth.call(null,inst_13620,(1),null);
var state_13732__$1 = (function (){var statearr_13804 = state_13732;
(statearr_13804[(26)] = inst_13621);

return statearr_13804;
})();
if(cljs.core.truth_(inst_13622)){
var statearr_13805_13868 = state_13732__$1;
(statearr_13805_13868[(1)] = (13));

} else {
var statearr_13806_13869 = state_13732__$1;
(statearr_13806_13869[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (18))){
var inst_13657 = (state_13732[(2)]);
var state_13732__$1 = state_13732;
var statearr_13807_13870 = state_13732__$1;
(statearr_13807_13870[(2)] = inst_13657);

(statearr_13807_13870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (42))){
var state_13732__$1 = state_13732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13732__$1,(45),dchan);
} else {
if((state_val_13733 === (37))){
var inst_13700 = (state_13732[(23)]);
var inst_13691 = (state_13732[(25)]);
var inst_13600 = (state_13732[(9)]);
var inst_13700__$1 = cljs.core.first.call(null,inst_13691);
var inst_13701 = cljs.core.async.put_BANG_.call(null,inst_13700__$1,inst_13600,done);
var state_13732__$1 = (function (){var statearr_13808 = state_13732;
(statearr_13808[(23)] = inst_13700__$1);

return statearr_13808;
})();
if(cljs.core.truth_(inst_13701)){
var statearr_13809_13871 = state_13732__$1;
(statearr_13809_13871[(1)] = (39));

} else {
var statearr_13810_13872 = state_13732__$1;
(statearr_13810_13872[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13733 === (8))){
var inst_13611 = (state_13732[(15)]);
var inst_13612 = (state_13732[(17)]);
var inst_13614 = (inst_13612 < inst_13611);
var inst_13615 = inst_13614;
var state_13732__$1 = state_13732;
if(cljs.core.truth_(inst_13615)){
var statearr_13811_13873 = state_13732__$1;
(statearr_13811_13873[(1)] = (10));

} else {
var statearr_13812_13874 = state_13732__$1;
(statearr_13812_13874[(1)] = (11));

}

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
});})(c__12497__auto___13820,cs,m,dchan,dctr,done))
;
return ((function (switch__12385__auto__,c__12497__auto___13820,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12386__auto__ = null;
var cljs$core$async$mult_$_state_machine__12386__auto____0 = (function (){
var statearr_13816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13816[(0)] = cljs$core$async$mult_$_state_machine__12386__auto__);

(statearr_13816[(1)] = (1));

return statearr_13816;
});
var cljs$core$async$mult_$_state_machine__12386__auto____1 = (function (state_13732){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_13732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e13817){if((e13817 instanceof Object)){
var ex__12389__auto__ = e13817;
var statearr_13818_13875 = state_13732;
(statearr_13818_13875[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13876 = state_13732;
state_13732 = G__13876;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12386__auto__ = function(state_13732){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12386__auto____1.call(this,state_13732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12386__auto____0;
cljs$core$async$mult_$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12386__auto____1;
return cljs$core$async$mult_$_state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto___13820,cs,m,dchan,dctr,done))
})();
var state__12499__auto__ = (function (){var statearr_13819 = f__12498__auto__.call(null);
(statearr_13819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___13820);

return statearr_13819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto___13820,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args13877 = [];
var len__7652__auto___13880 = arguments.length;
var i__7653__auto___13881 = (0);
while(true){
if((i__7653__auto___13881 < len__7652__auto___13880)){
args13877.push((arguments[i__7653__auto___13881]));

var G__13882 = (i__7653__auto___13881 + (1));
i__7653__auto___13881 = G__13882;
continue;
} else {
}
break;
}

var G__13879 = args13877.length;
switch (G__13879) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13877.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7240__auto__ = (((m == null))?null:m);
var m__7241__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,m,ch);
} else {
var m__7241__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7240__auto__ = (((m == null))?null:m);
var m__7241__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,m,ch);
} else {
var m__7241__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7240__auto__ = (((m == null))?null:m);
var m__7241__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,m);
} else {
var m__7241__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7240__auto__ = (((m == null))?null:m);
var m__7241__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,m,state_map);
} else {
var m__7241__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7240__auto__ = (((m == null))?null:m);
var m__7241__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,m,mode);
} else {
var m__7241__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___13894 = arguments.length;
var i__7653__auto___13895 = (0);
while(true){
if((i__7653__auto___13895 < len__7652__auto___13894)){
args__7659__auto__.push((arguments[i__7653__auto___13895]));

var G__13896 = (i__7653__auto___13895 + (1));
i__7653__auto___13895 = G__13896;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((3) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7660__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13888){
var map__13889 = p__13888;
var map__13889__$1 = ((((!((map__13889 == null)))?((((map__13889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13889):map__13889);
var opts = map__13889__$1;
var statearr_13891_13897 = state;
(statearr_13891_13897[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__13889,map__13889__$1,opts){
return (function (val){
var statearr_13892_13898 = state;
(statearr_13892_13898[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13889,map__13889__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_13893_13899 = state;
(statearr_13893_13899[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13884){
var G__13885 = cljs.core.first.call(null,seq13884);
var seq13884__$1 = cljs.core.next.call(null,seq13884);
var G__13886 = cljs.core.first.call(null,seq13884__$1);
var seq13884__$2 = cljs.core.next.call(null,seq13884__$1);
var G__13887 = cljs.core.first.call(null,seq13884__$2);
var seq13884__$3 = cljs.core.next.call(null,seq13884__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13885,G__13886,G__13887,seq13884__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14065 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14066){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14066 = meta14066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14067,meta14066__$1){
var self__ = this;
var _14067__$1 = this;
return (new cljs.core.async.t_cljs$core$async14065(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14066__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14067){
var self__ = this;
var _14067__$1 = this;
return self__.meta14066;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14065.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14065.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14065.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14065.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14065.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14065.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14065.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14065.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14066","meta14066",1669642240,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14065";

cljs.core.async.t_cljs$core$async14065.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async14065");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14065 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14065(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14066){
return (new cljs.core.async.t_cljs$core$async14065(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14066));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14065(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12497__auto___14230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto___14230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto___14230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14167){
var state_val_14168 = (state_14167[(1)]);
if((state_val_14168 === (7))){
var inst_14083 = (state_14167[(2)]);
var state_14167__$1 = state_14167;
var statearr_14169_14231 = state_14167__$1;
(statearr_14169_14231[(2)] = inst_14083);

(statearr_14169_14231[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (20))){
var inst_14095 = (state_14167[(7)]);
var state_14167__$1 = state_14167;
var statearr_14170_14232 = state_14167__$1;
(statearr_14170_14232[(2)] = inst_14095);

(statearr_14170_14232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (27))){
var state_14167__$1 = state_14167;
var statearr_14171_14233 = state_14167__$1;
(statearr_14171_14233[(2)] = null);

(statearr_14171_14233[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (1))){
var inst_14071 = (state_14167[(8)]);
var inst_14071__$1 = calc_state.call(null);
var inst_14073 = (inst_14071__$1 == null);
var inst_14074 = cljs.core.not.call(null,inst_14073);
var state_14167__$1 = (function (){var statearr_14172 = state_14167;
(statearr_14172[(8)] = inst_14071__$1);

return statearr_14172;
})();
if(inst_14074){
var statearr_14173_14234 = state_14167__$1;
(statearr_14173_14234[(1)] = (2));

} else {
var statearr_14174_14235 = state_14167__$1;
(statearr_14174_14235[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (24))){
var inst_14141 = (state_14167[(9)]);
var inst_14127 = (state_14167[(10)]);
var inst_14118 = (state_14167[(11)]);
var inst_14141__$1 = inst_14118.call(null,inst_14127);
var state_14167__$1 = (function (){var statearr_14175 = state_14167;
(statearr_14175[(9)] = inst_14141__$1);

return statearr_14175;
})();
if(cljs.core.truth_(inst_14141__$1)){
var statearr_14176_14236 = state_14167__$1;
(statearr_14176_14236[(1)] = (29));

} else {
var statearr_14177_14237 = state_14167__$1;
(statearr_14177_14237[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (4))){
var inst_14086 = (state_14167[(2)]);
var state_14167__$1 = state_14167;
if(cljs.core.truth_(inst_14086)){
var statearr_14178_14238 = state_14167__$1;
(statearr_14178_14238[(1)] = (8));

} else {
var statearr_14179_14239 = state_14167__$1;
(statearr_14179_14239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (15))){
var inst_14112 = (state_14167[(2)]);
var state_14167__$1 = state_14167;
if(cljs.core.truth_(inst_14112)){
var statearr_14180_14240 = state_14167__$1;
(statearr_14180_14240[(1)] = (19));

} else {
var statearr_14181_14241 = state_14167__$1;
(statearr_14181_14241[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (21))){
var inst_14117 = (state_14167[(12)]);
var inst_14117__$1 = (state_14167[(2)]);
var inst_14118 = cljs.core.get.call(null,inst_14117__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14119 = cljs.core.get.call(null,inst_14117__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14120 = cljs.core.get.call(null,inst_14117__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14167__$1 = (function (){var statearr_14182 = state_14167;
(statearr_14182[(13)] = inst_14119);

(statearr_14182[(12)] = inst_14117__$1);

(statearr_14182[(11)] = inst_14118);

return statearr_14182;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14167__$1,(22),inst_14120);
} else {
if((state_val_14168 === (31))){
var inst_14149 = (state_14167[(2)]);
var state_14167__$1 = state_14167;
if(cljs.core.truth_(inst_14149)){
var statearr_14183_14242 = state_14167__$1;
(statearr_14183_14242[(1)] = (32));

} else {
var statearr_14184_14243 = state_14167__$1;
(statearr_14184_14243[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (32))){
var inst_14126 = (state_14167[(14)]);
var state_14167__$1 = state_14167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14167__$1,(35),out,inst_14126);
} else {
if((state_val_14168 === (33))){
var inst_14117 = (state_14167[(12)]);
var inst_14095 = inst_14117;
var state_14167__$1 = (function (){var statearr_14185 = state_14167;
(statearr_14185[(7)] = inst_14095);

return statearr_14185;
})();
var statearr_14186_14244 = state_14167__$1;
(statearr_14186_14244[(2)] = null);

(statearr_14186_14244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (13))){
var inst_14095 = (state_14167[(7)]);
var inst_14102 = inst_14095.cljs$lang$protocol_mask$partition0$;
var inst_14103 = (inst_14102 & (64));
var inst_14104 = inst_14095.cljs$core$ISeq$;
var inst_14105 = (inst_14103) || (inst_14104);
var state_14167__$1 = state_14167;
if(cljs.core.truth_(inst_14105)){
var statearr_14187_14245 = state_14167__$1;
(statearr_14187_14245[(1)] = (16));

} else {
var statearr_14188_14246 = state_14167__$1;
(statearr_14188_14246[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (22))){
var inst_14126 = (state_14167[(14)]);
var inst_14127 = (state_14167[(10)]);
var inst_14125 = (state_14167[(2)]);
var inst_14126__$1 = cljs.core.nth.call(null,inst_14125,(0),null);
var inst_14127__$1 = cljs.core.nth.call(null,inst_14125,(1),null);
var inst_14128 = (inst_14126__$1 == null);
var inst_14129 = cljs.core._EQ_.call(null,inst_14127__$1,change);
var inst_14130 = (inst_14128) || (inst_14129);
var state_14167__$1 = (function (){var statearr_14189 = state_14167;
(statearr_14189[(14)] = inst_14126__$1);

(statearr_14189[(10)] = inst_14127__$1);

return statearr_14189;
})();
if(cljs.core.truth_(inst_14130)){
var statearr_14190_14247 = state_14167__$1;
(statearr_14190_14247[(1)] = (23));

} else {
var statearr_14191_14248 = state_14167__$1;
(statearr_14191_14248[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (36))){
var inst_14117 = (state_14167[(12)]);
var inst_14095 = inst_14117;
var state_14167__$1 = (function (){var statearr_14192 = state_14167;
(statearr_14192[(7)] = inst_14095);

return statearr_14192;
})();
var statearr_14193_14249 = state_14167__$1;
(statearr_14193_14249[(2)] = null);

(statearr_14193_14249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (29))){
var inst_14141 = (state_14167[(9)]);
var state_14167__$1 = state_14167;
var statearr_14194_14250 = state_14167__$1;
(statearr_14194_14250[(2)] = inst_14141);

(statearr_14194_14250[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (6))){
var state_14167__$1 = state_14167;
var statearr_14195_14251 = state_14167__$1;
(statearr_14195_14251[(2)] = false);

(statearr_14195_14251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (28))){
var inst_14137 = (state_14167[(2)]);
var inst_14138 = calc_state.call(null);
var inst_14095 = inst_14138;
var state_14167__$1 = (function (){var statearr_14196 = state_14167;
(statearr_14196[(15)] = inst_14137);

(statearr_14196[(7)] = inst_14095);

return statearr_14196;
})();
var statearr_14197_14252 = state_14167__$1;
(statearr_14197_14252[(2)] = null);

(statearr_14197_14252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (25))){
var inst_14163 = (state_14167[(2)]);
var state_14167__$1 = state_14167;
var statearr_14198_14253 = state_14167__$1;
(statearr_14198_14253[(2)] = inst_14163);

(statearr_14198_14253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (34))){
var inst_14161 = (state_14167[(2)]);
var state_14167__$1 = state_14167;
var statearr_14199_14254 = state_14167__$1;
(statearr_14199_14254[(2)] = inst_14161);

(statearr_14199_14254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (17))){
var state_14167__$1 = state_14167;
var statearr_14200_14255 = state_14167__$1;
(statearr_14200_14255[(2)] = false);

(statearr_14200_14255[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (3))){
var state_14167__$1 = state_14167;
var statearr_14201_14256 = state_14167__$1;
(statearr_14201_14256[(2)] = false);

(statearr_14201_14256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (12))){
var inst_14165 = (state_14167[(2)]);
var state_14167__$1 = state_14167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14167__$1,inst_14165);
} else {
if((state_val_14168 === (2))){
var inst_14071 = (state_14167[(8)]);
var inst_14076 = inst_14071.cljs$lang$protocol_mask$partition0$;
var inst_14077 = (inst_14076 & (64));
var inst_14078 = inst_14071.cljs$core$ISeq$;
var inst_14079 = (inst_14077) || (inst_14078);
var state_14167__$1 = state_14167;
if(cljs.core.truth_(inst_14079)){
var statearr_14202_14257 = state_14167__$1;
(statearr_14202_14257[(1)] = (5));

} else {
var statearr_14203_14258 = state_14167__$1;
(statearr_14203_14258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (23))){
var inst_14126 = (state_14167[(14)]);
var inst_14132 = (inst_14126 == null);
var state_14167__$1 = state_14167;
if(cljs.core.truth_(inst_14132)){
var statearr_14204_14259 = state_14167__$1;
(statearr_14204_14259[(1)] = (26));

} else {
var statearr_14205_14260 = state_14167__$1;
(statearr_14205_14260[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (35))){
var inst_14152 = (state_14167[(2)]);
var state_14167__$1 = state_14167;
if(cljs.core.truth_(inst_14152)){
var statearr_14206_14261 = state_14167__$1;
(statearr_14206_14261[(1)] = (36));

} else {
var statearr_14207_14262 = state_14167__$1;
(statearr_14207_14262[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (19))){
var inst_14095 = (state_14167[(7)]);
var inst_14114 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14095);
var state_14167__$1 = state_14167;
var statearr_14208_14263 = state_14167__$1;
(statearr_14208_14263[(2)] = inst_14114);

(statearr_14208_14263[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (11))){
var inst_14095 = (state_14167[(7)]);
var inst_14099 = (inst_14095 == null);
var inst_14100 = cljs.core.not.call(null,inst_14099);
var state_14167__$1 = state_14167;
if(inst_14100){
var statearr_14209_14264 = state_14167__$1;
(statearr_14209_14264[(1)] = (13));

} else {
var statearr_14210_14265 = state_14167__$1;
(statearr_14210_14265[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (9))){
var inst_14071 = (state_14167[(8)]);
var state_14167__$1 = state_14167;
var statearr_14211_14266 = state_14167__$1;
(statearr_14211_14266[(2)] = inst_14071);

(statearr_14211_14266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (5))){
var state_14167__$1 = state_14167;
var statearr_14212_14267 = state_14167__$1;
(statearr_14212_14267[(2)] = true);

(statearr_14212_14267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (14))){
var state_14167__$1 = state_14167;
var statearr_14213_14268 = state_14167__$1;
(statearr_14213_14268[(2)] = false);

(statearr_14213_14268[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (26))){
var inst_14127 = (state_14167[(10)]);
var inst_14134 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14127);
var state_14167__$1 = state_14167;
var statearr_14214_14269 = state_14167__$1;
(statearr_14214_14269[(2)] = inst_14134);

(statearr_14214_14269[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (16))){
var state_14167__$1 = state_14167;
var statearr_14215_14270 = state_14167__$1;
(statearr_14215_14270[(2)] = true);

(statearr_14215_14270[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (38))){
var inst_14157 = (state_14167[(2)]);
var state_14167__$1 = state_14167;
var statearr_14216_14271 = state_14167__$1;
(statearr_14216_14271[(2)] = inst_14157);

(statearr_14216_14271[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (30))){
var inst_14119 = (state_14167[(13)]);
var inst_14127 = (state_14167[(10)]);
var inst_14118 = (state_14167[(11)]);
var inst_14144 = cljs.core.empty_QMARK_.call(null,inst_14118);
var inst_14145 = inst_14119.call(null,inst_14127);
var inst_14146 = cljs.core.not.call(null,inst_14145);
var inst_14147 = (inst_14144) && (inst_14146);
var state_14167__$1 = state_14167;
var statearr_14217_14272 = state_14167__$1;
(statearr_14217_14272[(2)] = inst_14147);

(statearr_14217_14272[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (10))){
var inst_14071 = (state_14167[(8)]);
var inst_14091 = (state_14167[(2)]);
var inst_14092 = cljs.core.get.call(null,inst_14091,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14093 = cljs.core.get.call(null,inst_14091,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14094 = cljs.core.get.call(null,inst_14091,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14095 = inst_14071;
var state_14167__$1 = (function (){var statearr_14218 = state_14167;
(statearr_14218[(16)] = inst_14093);

(statearr_14218[(7)] = inst_14095);

(statearr_14218[(17)] = inst_14092);

(statearr_14218[(18)] = inst_14094);

return statearr_14218;
})();
var statearr_14219_14273 = state_14167__$1;
(statearr_14219_14273[(2)] = null);

(statearr_14219_14273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (18))){
var inst_14109 = (state_14167[(2)]);
var state_14167__$1 = state_14167;
var statearr_14220_14274 = state_14167__$1;
(statearr_14220_14274[(2)] = inst_14109);

(statearr_14220_14274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (37))){
var state_14167__$1 = state_14167;
var statearr_14221_14275 = state_14167__$1;
(statearr_14221_14275[(2)] = null);

(statearr_14221_14275[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14168 === (8))){
var inst_14071 = (state_14167[(8)]);
var inst_14088 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14071);
var state_14167__$1 = state_14167;
var statearr_14222_14276 = state_14167__$1;
(statearr_14222_14276[(2)] = inst_14088);

(statearr_14222_14276[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__12497__auto___14230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12385__auto__,c__12497__auto___14230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12386__auto__ = null;
var cljs$core$async$mix_$_state_machine__12386__auto____0 = (function (){
var statearr_14226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14226[(0)] = cljs$core$async$mix_$_state_machine__12386__auto__);

(statearr_14226[(1)] = (1));

return statearr_14226;
});
var cljs$core$async$mix_$_state_machine__12386__auto____1 = (function (state_14167){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_14167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e14227){if((e14227 instanceof Object)){
var ex__12389__auto__ = e14227;
var statearr_14228_14277 = state_14167;
(statearr_14228_14277[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14278 = state_14167;
state_14167 = G__14278;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12386__auto__ = function(state_14167){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12386__auto____1.call(this,state_14167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12386__auto____0;
cljs$core$async$mix_$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12386__auto____1;
return cljs$core$async$mix_$_state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto___14230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12499__auto__ = (function (){var statearr_14229 = f__12498__auto__.call(null);
(statearr_14229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___14230);

return statearr_14229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto___14230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7240__auto__ = (((p == null))?null:p);
var m__7241__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7241__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7240__auto__ = (((p == null))?null:p);
var m__7241__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,p,v,ch);
} else {
var m__7241__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args14279 = [];
var len__7652__auto___14282 = arguments.length;
var i__7653__auto___14283 = (0);
while(true){
if((i__7653__auto___14283 < len__7652__auto___14282)){
args14279.push((arguments[i__7653__auto___14283]));

var G__14284 = (i__7653__auto___14283 + (1));
i__7653__auto___14283 = G__14284;
continue;
} else {
}
break;
}

var G__14281 = args14279.length;
switch (G__14281) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14279.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7240__auto__ = (((p == null))?null:p);
var m__7241__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,p);
} else {
var m__7241__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7240__auto__ = (((p == null))?null:p);
var m__7241__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,p,v);
} else {
var m__7241__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args14287 = [];
var len__7652__auto___14412 = arguments.length;
var i__7653__auto___14413 = (0);
while(true){
if((i__7653__auto___14413 < len__7652__auto___14412)){
args14287.push((arguments[i__7653__auto___14413]));

var G__14414 = (i__7653__auto___14413 + (1));
i__7653__auto___14413 = G__14414;
continue;
} else {
}
break;
}

var G__14289 = args14287.length;
switch (G__14289) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14287.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6577__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6577__auto__,mults){
return (function (p1__14286_SHARP_){
if(cljs.core.truth_(p1__14286_SHARP_.call(null,topic))){
return p1__14286_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14286_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6577__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14290 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14291){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14291 = meta14291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14292,meta14291__$1){
var self__ = this;
var _14292__$1 = this;
return (new cljs.core.async.t_cljs$core$async14290(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14291__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14292){
var self__ = this;
var _14292__$1 = this;
return self__.meta14291;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14290.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14290.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14290.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14290.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14290.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14290.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14290.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14290.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14291","meta14291",-1501350284,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14290.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14290";

cljs.core.async.t_cljs$core$async14290.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async14290");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14290 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14290(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14291){
return (new cljs.core.async.t_cljs$core$async14290(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14291));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14290(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12497__auto___14416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto___14416,mults,ensure_mult,p){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto___14416,mults,ensure_mult,p){
return (function (state_14364){
var state_val_14365 = (state_14364[(1)]);
if((state_val_14365 === (7))){
var inst_14360 = (state_14364[(2)]);
var state_14364__$1 = state_14364;
var statearr_14366_14417 = state_14364__$1;
(statearr_14366_14417[(2)] = inst_14360);

(statearr_14366_14417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (20))){
var state_14364__$1 = state_14364;
var statearr_14367_14418 = state_14364__$1;
(statearr_14367_14418[(2)] = null);

(statearr_14367_14418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (1))){
var state_14364__$1 = state_14364;
var statearr_14368_14419 = state_14364__$1;
(statearr_14368_14419[(2)] = null);

(statearr_14368_14419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (24))){
var inst_14343 = (state_14364[(7)]);
var inst_14352 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14343);
var state_14364__$1 = state_14364;
var statearr_14369_14420 = state_14364__$1;
(statearr_14369_14420[(2)] = inst_14352);

(statearr_14369_14420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (4))){
var inst_14295 = (state_14364[(8)]);
var inst_14295__$1 = (state_14364[(2)]);
var inst_14296 = (inst_14295__$1 == null);
var state_14364__$1 = (function (){var statearr_14370 = state_14364;
(statearr_14370[(8)] = inst_14295__$1);

return statearr_14370;
})();
if(cljs.core.truth_(inst_14296)){
var statearr_14371_14421 = state_14364__$1;
(statearr_14371_14421[(1)] = (5));

} else {
var statearr_14372_14422 = state_14364__$1;
(statearr_14372_14422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (15))){
var inst_14337 = (state_14364[(2)]);
var state_14364__$1 = state_14364;
var statearr_14373_14423 = state_14364__$1;
(statearr_14373_14423[(2)] = inst_14337);

(statearr_14373_14423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (21))){
var inst_14357 = (state_14364[(2)]);
var state_14364__$1 = (function (){var statearr_14374 = state_14364;
(statearr_14374[(9)] = inst_14357);

return statearr_14374;
})();
var statearr_14375_14424 = state_14364__$1;
(statearr_14375_14424[(2)] = null);

(statearr_14375_14424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (13))){
var inst_14319 = (state_14364[(10)]);
var inst_14321 = cljs.core.chunked_seq_QMARK_.call(null,inst_14319);
var state_14364__$1 = state_14364;
if(inst_14321){
var statearr_14376_14425 = state_14364__$1;
(statearr_14376_14425[(1)] = (16));

} else {
var statearr_14377_14426 = state_14364__$1;
(statearr_14377_14426[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (22))){
var inst_14349 = (state_14364[(2)]);
var state_14364__$1 = state_14364;
if(cljs.core.truth_(inst_14349)){
var statearr_14378_14427 = state_14364__$1;
(statearr_14378_14427[(1)] = (23));

} else {
var statearr_14379_14428 = state_14364__$1;
(statearr_14379_14428[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (6))){
var inst_14343 = (state_14364[(7)]);
var inst_14345 = (state_14364[(11)]);
var inst_14295 = (state_14364[(8)]);
var inst_14343__$1 = topic_fn.call(null,inst_14295);
var inst_14344 = cljs.core.deref.call(null,mults);
var inst_14345__$1 = cljs.core.get.call(null,inst_14344,inst_14343__$1);
var state_14364__$1 = (function (){var statearr_14380 = state_14364;
(statearr_14380[(7)] = inst_14343__$1);

(statearr_14380[(11)] = inst_14345__$1);

return statearr_14380;
})();
if(cljs.core.truth_(inst_14345__$1)){
var statearr_14381_14429 = state_14364__$1;
(statearr_14381_14429[(1)] = (19));

} else {
var statearr_14382_14430 = state_14364__$1;
(statearr_14382_14430[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (25))){
var inst_14354 = (state_14364[(2)]);
var state_14364__$1 = state_14364;
var statearr_14383_14431 = state_14364__$1;
(statearr_14383_14431[(2)] = inst_14354);

(statearr_14383_14431[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (17))){
var inst_14319 = (state_14364[(10)]);
var inst_14328 = cljs.core.first.call(null,inst_14319);
var inst_14329 = cljs.core.async.muxch_STAR_.call(null,inst_14328);
var inst_14330 = cljs.core.async.close_BANG_.call(null,inst_14329);
var inst_14331 = cljs.core.next.call(null,inst_14319);
var inst_14305 = inst_14331;
var inst_14306 = null;
var inst_14307 = (0);
var inst_14308 = (0);
var state_14364__$1 = (function (){var statearr_14384 = state_14364;
(statearr_14384[(12)] = inst_14330);

(statearr_14384[(13)] = inst_14307);

(statearr_14384[(14)] = inst_14306);

(statearr_14384[(15)] = inst_14305);

(statearr_14384[(16)] = inst_14308);

return statearr_14384;
})();
var statearr_14385_14432 = state_14364__$1;
(statearr_14385_14432[(2)] = null);

(statearr_14385_14432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (3))){
var inst_14362 = (state_14364[(2)]);
var state_14364__$1 = state_14364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14364__$1,inst_14362);
} else {
if((state_val_14365 === (12))){
var inst_14339 = (state_14364[(2)]);
var state_14364__$1 = state_14364;
var statearr_14386_14433 = state_14364__$1;
(statearr_14386_14433[(2)] = inst_14339);

(statearr_14386_14433[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (2))){
var state_14364__$1 = state_14364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14364__$1,(4),ch);
} else {
if((state_val_14365 === (23))){
var state_14364__$1 = state_14364;
var statearr_14387_14434 = state_14364__$1;
(statearr_14387_14434[(2)] = null);

(statearr_14387_14434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (19))){
var inst_14345 = (state_14364[(11)]);
var inst_14295 = (state_14364[(8)]);
var inst_14347 = cljs.core.async.muxch_STAR_.call(null,inst_14345);
var state_14364__$1 = state_14364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14364__$1,(22),inst_14347,inst_14295);
} else {
if((state_val_14365 === (11))){
var inst_14319 = (state_14364[(10)]);
var inst_14305 = (state_14364[(15)]);
var inst_14319__$1 = cljs.core.seq.call(null,inst_14305);
var state_14364__$1 = (function (){var statearr_14388 = state_14364;
(statearr_14388[(10)] = inst_14319__$1);

return statearr_14388;
})();
if(inst_14319__$1){
var statearr_14389_14435 = state_14364__$1;
(statearr_14389_14435[(1)] = (13));

} else {
var statearr_14390_14436 = state_14364__$1;
(statearr_14390_14436[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (9))){
var inst_14341 = (state_14364[(2)]);
var state_14364__$1 = state_14364;
var statearr_14391_14437 = state_14364__$1;
(statearr_14391_14437[(2)] = inst_14341);

(statearr_14391_14437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (5))){
var inst_14302 = cljs.core.deref.call(null,mults);
var inst_14303 = cljs.core.vals.call(null,inst_14302);
var inst_14304 = cljs.core.seq.call(null,inst_14303);
var inst_14305 = inst_14304;
var inst_14306 = null;
var inst_14307 = (0);
var inst_14308 = (0);
var state_14364__$1 = (function (){var statearr_14392 = state_14364;
(statearr_14392[(13)] = inst_14307);

(statearr_14392[(14)] = inst_14306);

(statearr_14392[(15)] = inst_14305);

(statearr_14392[(16)] = inst_14308);

return statearr_14392;
})();
var statearr_14393_14438 = state_14364__$1;
(statearr_14393_14438[(2)] = null);

(statearr_14393_14438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (14))){
var state_14364__$1 = state_14364;
var statearr_14397_14439 = state_14364__$1;
(statearr_14397_14439[(2)] = null);

(statearr_14397_14439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (16))){
var inst_14319 = (state_14364[(10)]);
var inst_14323 = cljs.core.chunk_first.call(null,inst_14319);
var inst_14324 = cljs.core.chunk_rest.call(null,inst_14319);
var inst_14325 = cljs.core.count.call(null,inst_14323);
var inst_14305 = inst_14324;
var inst_14306 = inst_14323;
var inst_14307 = inst_14325;
var inst_14308 = (0);
var state_14364__$1 = (function (){var statearr_14398 = state_14364;
(statearr_14398[(13)] = inst_14307);

(statearr_14398[(14)] = inst_14306);

(statearr_14398[(15)] = inst_14305);

(statearr_14398[(16)] = inst_14308);

return statearr_14398;
})();
var statearr_14399_14440 = state_14364__$1;
(statearr_14399_14440[(2)] = null);

(statearr_14399_14440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (10))){
var inst_14307 = (state_14364[(13)]);
var inst_14306 = (state_14364[(14)]);
var inst_14305 = (state_14364[(15)]);
var inst_14308 = (state_14364[(16)]);
var inst_14313 = cljs.core._nth.call(null,inst_14306,inst_14308);
var inst_14314 = cljs.core.async.muxch_STAR_.call(null,inst_14313);
var inst_14315 = cljs.core.async.close_BANG_.call(null,inst_14314);
var inst_14316 = (inst_14308 + (1));
var tmp14394 = inst_14307;
var tmp14395 = inst_14306;
var tmp14396 = inst_14305;
var inst_14305__$1 = tmp14396;
var inst_14306__$1 = tmp14395;
var inst_14307__$1 = tmp14394;
var inst_14308__$1 = inst_14316;
var state_14364__$1 = (function (){var statearr_14400 = state_14364;
(statearr_14400[(13)] = inst_14307__$1);

(statearr_14400[(14)] = inst_14306__$1);

(statearr_14400[(17)] = inst_14315);

(statearr_14400[(15)] = inst_14305__$1);

(statearr_14400[(16)] = inst_14308__$1);

return statearr_14400;
})();
var statearr_14401_14441 = state_14364__$1;
(statearr_14401_14441[(2)] = null);

(statearr_14401_14441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (18))){
var inst_14334 = (state_14364[(2)]);
var state_14364__$1 = state_14364;
var statearr_14402_14442 = state_14364__$1;
(statearr_14402_14442[(2)] = inst_14334);

(statearr_14402_14442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14365 === (8))){
var inst_14307 = (state_14364[(13)]);
var inst_14308 = (state_14364[(16)]);
var inst_14310 = (inst_14308 < inst_14307);
var inst_14311 = inst_14310;
var state_14364__$1 = state_14364;
if(cljs.core.truth_(inst_14311)){
var statearr_14403_14443 = state_14364__$1;
(statearr_14403_14443[(1)] = (10));

} else {
var statearr_14404_14444 = state_14364__$1;
(statearr_14404_14444[(1)] = (11));

}

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
});})(c__12497__auto___14416,mults,ensure_mult,p))
;
return ((function (switch__12385__auto__,c__12497__auto___14416,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12386__auto__ = null;
var cljs$core$async$state_machine__12386__auto____0 = (function (){
var statearr_14408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14408[(0)] = cljs$core$async$state_machine__12386__auto__);

(statearr_14408[(1)] = (1));

return statearr_14408;
});
var cljs$core$async$state_machine__12386__auto____1 = (function (state_14364){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_14364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e14409){if((e14409 instanceof Object)){
var ex__12389__auto__ = e14409;
var statearr_14410_14445 = state_14364;
(statearr_14410_14445[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14446 = state_14364;
state_14364 = G__14446;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$state_machine__12386__auto__ = function(state_14364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12386__auto____1.call(this,state_14364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12386__auto____0;
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12386__auto____1;
return cljs$core$async$state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto___14416,mults,ensure_mult,p))
})();
var state__12499__auto__ = (function (){var statearr_14411 = f__12498__auto__.call(null);
(statearr_14411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___14416);

return statearr_14411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto___14416,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args14447 = [];
var len__7652__auto___14450 = arguments.length;
var i__7653__auto___14451 = (0);
while(true){
if((i__7653__auto___14451 < len__7652__auto___14450)){
args14447.push((arguments[i__7653__auto___14451]));

var G__14452 = (i__7653__auto___14451 + (1));
i__7653__auto___14451 = G__14452;
continue;
} else {
}
break;
}

var G__14449 = args14447.length;
switch (G__14449) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14447.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args14454 = [];
var len__7652__auto___14457 = arguments.length;
var i__7653__auto___14458 = (0);
while(true){
if((i__7653__auto___14458 < len__7652__auto___14457)){
args14454.push((arguments[i__7653__auto___14458]));

var G__14459 = (i__7653__auto___14458 + (1));
i__7653__auto___14458 = G__14459;
continue;
} else {
}
break;
}

var G__14456 = args14454.length;
switch (G__14456) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14454.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args14461 = [];
var len__7652__auto___14532 = arguments.length;
var i__7653__auto___14533 = (0);
while(true){
if((i__7653__auto___14533 < len__7652__auto___14532)){
args14461.push((arguments[i__7653__auto___14533]));

var G__14534 = (i__7653__auto___14533 + (1));
i__7653__auto___14533 = G__14534;
continue;
} else {
}
break;
}

var G__14463 = args14461.length;
switch (G__14463) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14461.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__12497__auto___14536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto___14536,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto___14536,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14502){
var state_val_14503 = (state_14502[(1)]);
if((state_val_14503 === (7))){
var state_14502__$1 = state_14502;
var statearr_14504_14537 = state_14502__$1;
(statearr_14504_14537[(2)] = null);

(statearr_14504_14537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (1))){
var state_14502__$1 = state_14502;
var statearr_14505_14538 = state_14502__$1;
(statearr_14505_14538[(2)] = null);

(statearr_14505_14538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (4))){
var inst_14466 = (state_14502[(7)]);
var inst_14468 = (inst_14466 < cnt);
var state_14502__$1 = state_14502;
if(cljs.core.truth_(inst_14468)){
var statearr_14506_14539 = state_14502__$1;
(statearr_14506_14539[(1)] = (6));

} else {
var statearr_14507_14540 = state_14502__$1;
(statearr_14507_14540[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (15))){
var inst_14498 = (state_14502[(2)]);
var state_14502__$1 = state_14502;
var statearr_14508_14541 = state_14502__$1;
(statearr_14508_14541[(2)] = inst_14498);

(statearr_14508_14541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (13))){
var inst_14491 = cljs.core.async.close_BANG_.call(null,out);
var state_14502__$1 = state_14502;
var statearr_14509_14542 = state_14502__$1;
(statearr_14509_14542[(2)] = inst_14491);

(statearr_14509_14542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (6))){
var state_14502__$1 = state_14502;
var statearr_14510_14543 = state_14502__$1;
(statearr_14510_14543[(2)] = null);

(statearr_14510_14543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (3))){
var inst_14500 = (state_14502[(2)]);
var state_14502__$1 = state_14502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14502__$1,inst_14500);
} else {
if((state_val_14503 === (12))){
var inst_14488 = (state_14502[(8)]);
var inst_14488__$1 = (state_14502[(2)]);
var inst_14489 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14488__$1);
var state_14502__$1 = (function (){var statearr_14511 = state_14502;
(statearr_14511[(8)] = inst_14488__$1);

return statearr_14511;
})();
if(cljs.core.truth_(inst_14489)){
var statearr_14512_14544 = state_14502__$1;
(statearr_14512_14544[(1)] = (13));

} else {
var statearr_14513_14545 = state_14502__$1;
(statearr_14513_14545[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (2))){
var inst_14465 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14466 = (0);
var state_14502__$1 = (function (){var statearr_14514 = state_14502;
(statearr_14514[(7)] = inst_14466);

(statearr_14514[(9)] = inst_14465);

return statearr_14514;
})();
var statearr_14515_14546 = state_14502__$1;
(statearr_14515_14546[(2)] = null);

(statearr_14515_14546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (11))){
var inst_14466 = (state_14502[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14502,(10),Object,null,(9));
var inst_14475 = chs__$1.call(null,inst_14466);
var inst_14476 = done.call(null,inst_14466);
var inst_14477 = cljs.core.async.take_BANG_.call(null,inst_14475,inst_14476);
var state_14502__$1 = state_14502;
var statearr_14516_14547 = state_14502__$1;
(statearr_14516_14547[(2)] = inst_14477);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14502__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (9))){
var inst_14466 = (state_14502[(7)]);
var inst_14479 = (state_14502[(2)]);
var inst_14480 = (inst_14466 + (1));
var inst_14466__$1 = inst_14480;
var state_14502__$1 = (function (){var statearr_14517 = state_14502;
(statearr_14517[(7)] = inst_14466__$1);

(statearr_14517[(10)] = inst_14479);

return statearr_14517;
})();
var statearr_14518_14548 = state_14502__$1;
(statearr_14518_14548[(2)] = null);

(statearr_14518_14548[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (5))){
var inst_14486 = (state_14502[(2)]);
var state_14502__$1 = (function (){var statearr_14519 = state_14502;
(statearr_14519[(11)] = inst_14486);

return statearr_14519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14502__$1,(12),dchan);
} else {
if((state_val_14503 === (14))){
var inst_14488 = (state_14502[(8)]);
var inst_14493 = cljs.core.apply.call(null,f,inst_14488);
var state_14502__$1 = state_14502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14502__$1,(16),out,inst_14493);
} else {
if((state_val_14503 === (16))){
var inst_14495 = (state_14502[(2)]);
var state_14502__$1 = (function (){var statearr_14520 = state_14502;
(statearr_14520[(12)] = inst_14495);

return statearr_14520;
})();
var statearr_14521_14549 = state_14502__$1;
(statearr_14521_14549[(2)] = null);

(statearr_14521_14549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (10))){
var inst_14470 = (state_14502[(2)]);
var inst_14471 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14502__$1 = (function (){var statearr_14522 = state_14502;
(statearr_14522[(13)] = inst_14470);

return statearr_14522;
})();
var statearr_14523_14550 = state_14502__$1;
(statearr_14523_14550[(2)] = inst_14471);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14502__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (8))){
var inst_14484 = (state_14502[(2)]);
var state_14502__$1 = state_14502;
var statearr_14524_14551 = state_14502__$1;
(statearr_14524_14551[(2)] = inst_14484);

(statearr_14524_14551[(1)] = (5));


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
});})(c__12497__auto___14536,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12385__auto__,c__12497__auto___14536,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12386__auto__ = null;
var cljs$core$async$state_machine__12386__auto____0 = (function (){
var statearr_14528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14528[(0)] = cljs$core$async$state_machine__12386__auto__);

(statearr_14528[(1)] = (1));

return statearr_14528;
});
var cljs$core$async$state_machine__12386__auto____1 = (function (state_14502){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_14502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e14529){if((e14529 instanceof Object)){
var ex__12389__auto__ = e14529;
var statearr_14530_14552 = state_14502;
(statearr_14530_14552[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14553 = state_14502;
state_14502 = G__14553;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$state_machine__12386__auto__ = function(state_14502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12386__auto____1.call(this,state_14502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12386__auto____0;
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12386__auto____1;
return cljs$core$async$state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto___14536,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12499__auto__ = (function (){var statearr_14531 = f__12498__auto__.call(null);
(statearr_14531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___14536);

return statearr_14531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto___14536,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args14555 = [];
var len__7652__auto___14613 = arguments.length;
var i__7653__auto___14614 = (0);
while(true){
if((i__7653__auto___14614 < len__7652__auto___14613)){
args14555.push((arguments[i__7653__auto___14614]));

var G__14615 = (i__7653__auto___14614 + (1));
i__7653__auto___14614 = G__14615;
continue;
} else {
}
break;
}

var G__14557 = args14555.length;
switch (G__14557) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14555.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12497__auto___14617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto___14617,out){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto___14617,out){
return (function (state_14589){
var state_val_14590 = (state_14589[(1)]);
if((state_val_14590 === (7))){
var inst_14568 = (state_14589[(7)]);
var inst_14569 = (state_14589[(8)]);
var inst_14568__$1 = (state_14589[(2)]);
var inst_14569__$1 = cljs.core.nth.call(null,inst_14568__$1,(0),null);
var inst_14570 = cljs.core.nth.call(null,inst_14568__$1,(1),null);
var inst_14571 = (inst_14569__$1 == null);
var state_14589__$1 = (function (){var statearr_14591 = state_14589;
(statearr_14591[(7)] = inst_14568__$1);

(statearr_14591[(8)] = inst_14569__$1);

(statearr_14591[(9)] = inst_14570);

return statearr_14591;
})();
if(cljs.core.truth_(inst_14571)){
var statearr_14592_14618 = state_14589__$1;
(statearr_14592_14618[(1)] = (8));

} else {
var statearr_14593_14619 = state_14589__$1;
(statearr_14593_14619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (1))){
var inst_14558 = cljs.core.vec.call(null,chs);
var inst_14559 = inst_14558;
var state_14589__$1 = (function (){var statearr_14594 = state_14589;
(statearr_14594[(10)] = inst_14559);

return statearr_14594;
})();
var statearr_14595_14620 = state_14589__$1;
(statearr_14595_14620[(2)] = null);

(statearr_14595_14620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (4))){
var inst_14559 = (state_14589[(10)]);
var state_14589__$1 = state_14589;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14589__$1,(7),inst_14559);
} else {
if((state_val_14590 === (6))){
var inst_14585 = (state_14589[(2)]);
var state_14589__$1 = state_14589;
var statearr_14596_14621 = state_14589__$1;
(statearr_14596_14621[(2)] = inst_14585);

(statearr_14596_14621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (3))){
var inst_14587 = (state_14589[(2)]);
var state_14589__$1 = state_14589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14589__$1,inst_14587);
} else {
if((state_val_14590 === (2))){
var inst_14559 = (state_14589[(10)]);
var inst_14561 = cljs.core.count.call(null,inst_14559);
var inst_14562 = (inst_14561 > (0));
var state_14589__$1 = state_14589;
if(cljs.core.truth_(inst_14562)){
var statearr_14598_14622 = state_14589__$1;
(statearr_14598_14622[(1)] = (4));

} else {
var statearr_14599_14623 = state_14589__$1;
(statearr_14599_14623[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (11))){
var inst_14559 = (state_14589[(10)]);
var inst_14578 = (state_14589[(2)]);
var tmp14597 = inst_14559;
var inst_14559__$1 = tmp14597;
var state_14589__$1 = (function (){var statearr_14600 = state_14589;
(statearr_14600[(10)] = inst_14559__$1);

(statearr_14600[(11)] = inst_14578);

return statearr_14600;
})();
var statearr_14601_14624 = state_14589__$1;
(statearr_14601_14624[(2)] = null);

(statearr_14601_14624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (9))){
var inst_14569 = (state_14589[(8)]);
var state_14589__$1 = state_14589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14589__$1,(11),out,inst_14569);
} else {
if((state_val_14590 === (5))){
var inst_14583 = cljs.core.async.close_BANG_.call(null,out);
var state_14589__$1 = state_14589;
var statearr_14602_14625 = state_14589__$1;
(statearr_14602_14625[(2)] = inst_14583);

(statearr_14602_14625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (10))){
var inst_14581 = (state_14589[(2)]);
var state_14589__$1 = state_14589;
var statearr_14603_14626 = state_14589__$1;
(statearr_14603_14626[(2)] = inst_14581);

(statearr_14603_14626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (8))){
var inst_14568 = (state_14589[(7)]);
var inst_14559 = (state_14589[(10)]);
var inst_14569 = (state_14589[(8)]);
var inst_14570 = (state_14589[(9)]);
var inst_14573 = (function (){var cs = inst_14559;
var vec__14564 = inst_14568;
var v = inst_14569;
var c = inst_14570;
return ((function (cs,vec__14564,v,c,inst_14568,inst_14559,inst_14569,inst_14570,state_val_14590,c__12497__auto___14617,out){
return (function (p1__14554_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14554_SHARP_);
});
;})(cs,vec__14564,v,c,inst_14568,inst_14559,inst_14569,inst_14570,state_val_14590,c__12497__auto___14617,out))
})();
var inst_14574 = cljs.core.filterv.call(null,inst_14573,inst_14559);
var inst_14559__$1 = inst_14574;
var state_14589__$1 = (function (){var statearr_14604 = state_14589;
(statearr_14604[(10)] = inst_14559__$1);

return statearr_14604;
})();
var statearr_14605_14627 = state_14589__$1;
(statearr_14605_14627[(2)] = null);

(statearr_14605_14627[(1)] = (2));


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
});})(c__12497__auto___14617,out))
;
return ((function (switch__12385__auto__,c__12497__auto___14617,out){
return (function() {
var cljs$core$async$state_machine__12386__auto__ = null;
var cljs$core$async$state_machine__12386__auto____0 = (function (){
var statearr_14609 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14609[(0)] = cljs$core$async$state_machine__12386__auto__);

(statearr_14609[(1)] = (1));

return statearr_14609;
});
var cljs$core$async$state_machine__12386__auto____1 = (function (state_14589){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_14589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e14610){if((e14610 instanceof Object)){
var ex__12389__auto__ = e14610;
var statearr_14611_14628 = state_14589;
(statearr_14611_14628[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14629 = state_14589;
state_14589 = G__14629;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$state_machine__12386__auto__ = function(state_14589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12386__auto____1.call(this,state_14589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12386__auto____0;
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12386__auto____1;
return cljs$core$async$state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto___14617,out))
})();
var state__12499__auto__ = (function (){var statearr_14612 = f__12498__auto__.call(null);
(statearr_14612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___14617);

return statearr_14612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto___14617,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args14630 = [];
var len__7652__auto___14679 = arguments.length;
var i__7653__auto___14680 = (0);
while(true){
if((i__7653__auto___14680 < len__7652__auto___14679)){
args14630.push((arguments[i__7653__auto___14680]));

var G__14681 = (i__7653__auto___14680 + (1));
i__7653__auto___14680 = G__14681;
continue;
} else {
}
break;
}

var G__14632 = args14630.length;
switch (G__14632) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14630.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12497__auto___14683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto___14683,out){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto___14683,out){
return (function (state_14656){
var state_val_14657 = (state_14656[(1)]);
if((state_val_14657 === (7))){
var inst_14638 = (state_14656[(7)]);
var inst_14638__$1 = (state_14656[(2)]);
var inst_14639 = (inst_14638__$1 == null);
var inst_14640 = cljs.core.not.call(null,inst_14639);
var state_14656__$1 = (function (){var statearr_14658 = state_14656;
(statearr_14658[(7)] = inst_14638__$1);

return statearr_14658;
})();
if(inst_14640){
var statearr_14659_14684 = state_14656__$1;
(statearr_14659_14684[(1)] = (8));

} else {
var statearr_14660_14685 = state_14656__$1;
(statearr_14660_14685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14657 === (1))){
var inst_14633 = (0);
var state_14656__$1 = (function (){var statearr_14661 = state_14656;
(statearr_14661[(8)] = inst_14633);

return statearr_14661;
})();
var statearr_14662_14686 = state_14656__$1;
(statearr_14662_14686[(2)] = null);

(statearr_14662_14686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14657 === (4))){
var state_14656__$1 = state_14656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14656__$1,(7),ch);
} else {
if((state_val_14657 === (6))){
var inst_14651 = (state_14656[(2)]);
var state_14656__$1 = state_14656;
var statearr_14663_14687 = state_14656__$1;
(statearr_14663_14687[(2)] = inst_14651);

(statearr_14663_14687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14657 === (3))){
var inst_14653 = (state_14656[(2)]);
var inst_14654 = cljs.core.async.close_BANG_.call(null,out);
var state_14656__$1 = (function (){var statearr_14664 = state_14656;
(statearr_14664[(9)] = inst_14653);

return statearr_14664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14656__$1,inst_14654);
} else {
if((state_val_14657 === (2))){
var inst_14633 = (state_14656[(8)]);
var inst_14635 = (inst_14633 < n);
var state_14656__$1 = state_14656;
if(cljs.core.truth_(inst_14635)){
var statearr_14665_14688 = state_14656__$1;
(statearr_14665_14688[(1)] = (4));

} else {
var statearr_14666_14689 = state_14656__$1;
(statearr_14666_14689[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14657 === (11))){
var inst_14633 = (state_14656[(8)]);
var inst_14643 = (state_14656[(2)]);
var inst_14644 = (inst_14633 + (1));
var inst_14633__$1 = inst_14644;
var state_14656__$1 = (function (){var statearr_14667 = state_14656;
(statearr_14667[(10)] = inst_14643);

(statearr_14667[(8)] = inst_14633__$1);

return statearr_14667;
})();
var statearr_14668_14690 = state_14656__$1;
(statearr_14668_14690[(2)] = null);

(statearr_14668_14690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14657 === (9))){
var state_14656__$1 = state_14656;
var statearr_14669_14691 = state_14656__$1;
(statearr_14669_14691[(2)] = null);

(statearr_14669_14691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14657 === (5))){
var state_14656__$1 = state_14656;
var statearr_14670_14692 = state_14656__$1;
(statearr_14670_14692[(2)] = null);

(statearr_14670_14692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14657 === (10))){
var inst_14648 = (state_14656[(2)]);
var state_14656__$1 = state_14656;
var statearr_14671_14693 = state_14656__$1;
(statearr_14671_14693[(2)] = inst_14648);

(statearr_14671_14693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14657 === (8))){
var inst_14638 = (state_14656[(7)]);
var state_14656__$1 = state_14656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14656__$1,(11),out,inst_14638);
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
});})(c__12497__auto___14683,out))
;
return ((function (switch__12385__auto__,c__12497__auto___14683,out){
return (function() {
var cljs$core$async$state_machine__12386__auto__ = null;
var cljs$core$async$state_machine__12386__auto____0 = (function (){
var statearr_14675 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14675[(0)] = cljs$core$async$state_machine__12386__auto__);

(statearr_14675[(1)] = (1));

return statearr_14675;
});
var cljs$core$async$state_machine__12386__auto____1 = (function (state_14656){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_14656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e14676){if((e14676 instanceof Object)){
var ex__12389__auto__ = e14676;
var statearr_14677_14694 = state_14656;
(statearr_14677_14694[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14695 = state_14656;
state_14656 = G__14695;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$state_machine__12386__auto__ = function(state_14656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12386__auto____1.call(this,state_14656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12386__auto____0;
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12386__auto____1;
return cljs$core$async$state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto___14683,out))
})();
var state__12499__auto__ = (function (){var statearr_14678 = f__12498__auto__.call(null);
(statearr_14678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___14683);

return statearr_14678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto___14683,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14703 = (function (map_LT_,f,ch,meta14704){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14704 = meta14704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14705,meta14704__$1){
var self__ = this;
var _14705__$1 = this;
return (new cljs.core.async.t_cljs$core$async14703(self__.map_LT_,self__.f,self__.ch,meta14704__$1));
});

cljs.core.async.t_cljs$core$async14703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14705){
var self__ = this;
var _14705__$1 = this;
return self__.meta14704;
});

cljs.core.async.t_cljs$core$async14703.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14703.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14703.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14703.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14703.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14706 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14706 = (function (map_LT_,f,ch,meta14704,_,fn1,meta14707){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14704 = meta14704;
this._ = _;
this.fn1 = fn1;
this.meta14707 = meta14707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14708,meta14707__$1){
var self__ = this;
var _14708__$1 = this;
return (new cljs.core.async.t_cljs$core$async14706(self__.map_LT_,self__.f,self__.ch,self__.meta14704,self__._,self__.fn1,meta14707__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14708){
var self__ = this;
var _14708__$1 = this;
return self__.meta14707;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14696_SHARP_){
return f1.call(null,(((p1__14696_SHARP_ == null))?null:self__.f.call(null,p1__14696_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14706.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14704","meta14704",206646476,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14703","cljs.core.async/t_cljs$core$async14703",-1344804410,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14707","meta14707",592325733,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14706.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14706";

cljs.core.async.t_cljs$core$async14706.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async14706");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14706 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14706(map_LT___$1,f__$1,ch__$1,meta14704__$1,___$2,fn1__$1,meta14707){
return (new cljs.core.async.t_cljs$core$async14706(map_LT___$1,f__$1,ch__$1,meta14704__$1,___$2,fn1__$1,meta14707));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14706(self__.map_LT_,self__.f,self__.ch,self__.meta14704,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6565__auto__ = ret;
if(cljs.core.truth_(and__6565__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6565__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14703.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14703.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14704","meta14704",206646476,null)], null);
});

cljs.core.async.t_cljs$core$async14703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14703";

cljs.core.async.t_cljs$core$async14703.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async14703");
});

cljs.core.async.__GT_t_cljs$core$async14703 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14703(map_LT___$1,f__$1,ch__$1,meta14704){
return (new cljs.core.async.t_cljs$core$async14703(map_LT___$1,f__$1,ch__$1,meta14704));
});

}

return (new cljs.core.async.t_cljs$core$async14703(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14712 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14712 = (function (map_GT_,f,ch,meta14713){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14713 = meta14713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14714,meta14713__$1){
var self__ = this;
var _14714__$1 = this;
return (new cljs.core.async.t_cljs$core$async14712(self__.map_GT_,self__.f,self__.ch,meta14713__$1));
});

cljs.core.async.t_cljs$core$async14712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14714){
var self__ = this;
var _14714__$1 = this;
return self__.meta14713;
});

cljs.core.async.t_cljs$core$async14712.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14712.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14712.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14712.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14712.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14712.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14713","meta14713",1535644533,null)], null);
});

cljs.core.async.t_cljs$core$async14712.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14712";

cljs.core.async.t_cljs$core$async14712.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async14712");
});

cljs.core.async.__GT_t_cljs$core$async14712 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14712(map_GT___$1,f__$1,ch__$1,meta14713){
return (new cljs.core.async.t_cljs$core$async14712(map_GT___$1,f__$1,ch__$1,meta14713));
});

}

return (new cljs.core.async.t_cljs$core$async14712(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14718 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14718 = (function (filter_GT_,p,ch,meta14719){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14719 = meta14719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14720,meta14719__$1){
var self__ = this;
var _14720__$1 = this;
return (new cljs.core.async.t_cljs$core$async14718(self__.filter_GT_,self__.p,self__.ch,meta14719__$1));
});

cljs.core.async.t_cljs$core$async14718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14720){
var self__ = this;
var _14720__$1 = this;
return self__.meta14719;
});

cljs.core.async.t_cljs$core$async14718.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14718.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14718.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14718.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14718.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14718.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14718.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14719","meta14719",-1910337697,null)], null);
});

cljs.core.async.t_cljs$core$async14718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14718";

cljs.core.async.t_cljs$core$async14718.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async14718");
});

cljs.core.async.__GT_t_cljs$core$async14718 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14718(filter_GT___$1,p__$1,ch__$1,meta14719){
return (new cljs.core.async.t_cljs$core$async14718(filter_GT___$1,p__$1,ch__$1,meta14719));
});

}

return (new cljs.core.async.t_cljs$core$async14718(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args14721 = [];
var len__7652__auto___14765 = arguments.length;
var i__7653__auto___14766 = (0);
while(true){
if((i__7653__auto___14766 < len__7652__auto___14765)){
args14721.push((arguments[i__7653__auto___14766]));

var G__14767 = (i__7653__auto___14766 + (1));
i__7653__auto___14766 = G__14767;
continue;
} else {
}
break;
}

var G__14723 = args14721.length;
switch (G__14723) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14721.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12497__auto___14769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto___14769,out){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto___14769,out){
return (function (state_14744){
var state_val_14745 = (state_14744[(1)]);
if((state_val_14745 === (7))){
var inst_14740 = (state_14744[(2)]);
var state_14744__$1 = state_14744;
var statearr_14746_14770 = state_14744__$1;
(statearr_14746_14770[(2)] = inst_14740);

(statearr_14746_14770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14745 === (1))){
var state_14744__$1 = state_14744;
var statearr_14747_14771 = state_14744__$1;
(statearr_14747_14771[(2)] = null);

(statearr_14747_14771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14745 === (4))){
var inst_14726 = (state_14744[(7)]);
var inst_14726__$1 = (state_14744[(2)]);
var inst_14727 = (inst_14726__$1 == null);
var state_14744__$1 = (function (){var statearr_14748 = state_14744;
(statearr_14748[(7)] = inst_14726__$1);

return statearr_14748;
})();
if(cljs.core.truth_(inst_14727)){
var statearr_14749_14772 = state_14744__$1;
(statearr_14749_14772[(1)] = (5));

} else {
var statearr_14750_14773 = state_14744__$1;
(statearr_14750_14773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14745 === (6))){
var inst_14726 = (state_14744[(7)]);
var inst_14731 = p.call(null,inst_14726);
var state_14744__$1 = state_14744;
if(cljs.core.truth_(inst_14731)){
var statearr_14751_14774 = state_14744__$1;
(statearr_14751_14774[(1)] = (8));

} else {
var statearr_14752_14775 = state_14744__$1;
(statearr_14752_14775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14745 === (3))){
var inst_14742 = (state_14744[(2)]);
var state_14744__$1 = state_14744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14744__$1,inst_14742);
} else {
if((state_val_14745 === (2))){
var state_14744__$1 = state_14744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14744__$1,(4),ch);
} else {
if((state_val_14745 === (11))){
var inst_14734 = (state_14744[(2)]);
var state_14744__$1 = state_14744;
var statearr_14753_14776 = state_14744__$1;
(statearr_14753_14776[(2)] = inst_14734);

(statearr_14753_14776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14745 === (9))){
var state_14744__$1 = state_14744;
var statearr_14754_14777 = state_14744__$1;
(statearr_14754_14777[(2)] = null);

(statearr_14754_14777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14745 === (5))){
var inst_14729 = cljs.core.async.close_BANG_.call(null,out);
var state_14744__$1 = state_14744;
var statearr_14755_14778 = state_14744__$1;
(statearr_14755_14778[(2)] = inst_14729);

(statearr_14755_14778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14745 === (10))){
var inst_14737 = (state_14744[(2)]);
var state_14744__$1 = (function (){var statearr_14756 = state_14744;
(statearr_14756[(8)] = inst_14737);

return statearr_14756;
})();
var statearr_14757_14779 = state_14744__$1;
(statearr_14757_14779[(2)] = null);

(statearr_14757_14779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14745 === (8))){
var inst_14726 = (state_14744[(7)]);
var state_14744__$1 = state_14744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14744__$1,(11),out,inst_14726);
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
});})(c__12497__auto___14769,out))
;
return ((function (switch__12385__auto__,c__12497__auto___14769,out){
return (function() {
var cljs$core$async$state_machine__12386__auto__ = null;
var cljs$core$async$state_machine__12386__auto____0 = (function (){
var statearr_14761 = [null,null,null,null,null,null,null,null,null];
(statearr_14761[(0)] = cljs$core$async$state_machine__12386__auto__);

(statearr_14761[(1)] = (1));

return statearr_14761;
});
var cljs$core$async$state_machine__12386__auto____1 = (function (state_14744){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_14744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e14762){if((e14762 instanceof Object)){
var ex__12389__auto__ = e14762;
var statearr_14763_14780 = state_14744;
(statearr_14763_14780[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14781 = state_14744;
state_14744 = G__14781;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$state_machine__12386__auto__ = function(state_14744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12386__auto____1.call(this,state_14744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12386__auto____0;
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12386__auto____1;
return cljs$core$async$state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto___14769,out))
})();
var state__12499__auto__ = (function (){var statearr_14764 = f__12498__auto__.call(null);
(statearr_14764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___14769);

return statearr_14764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto___14769,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14782 = [];
var len__7652__auto___14785 = arguments.length;
var i__7653__auto___14786 = (0);
while(true){
if((i__7653__auto___14786 < len__7652__auto___14785)){
args14782.push((arguments[i__7653__auto___14786]));

var G__14787 = (i__7653__auto___14786 + (1));
i__7653__auto___14786 = G__14787;
continue;
} else {
}
break;
}

var G__14784 = args14782.length;
switch (G__14784) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14782.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto__){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto__){
return (function (state_14954){
var state_val_14955 = (state_14954[(1)]);
if((state_val_14955 === (7))){
var inst_14950 = (state_14954[(2)]);
var state_14954__$1 = state_14954;
var statearr_14956_14997 = state_14954__$1;
(statearr_14956_14997[(2)] = inst_14950);

(statearr_14956_14997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (20))){
var inst_14920 = (state_14954[(7)]);
var inst_14931 = (state_14954[(2)]);
var inst_14932 = cljs.core.next.call(null,inst_14920);
var inst_14906 = inst_14932;
var inst_14907 = null;
var inst_14908 = (0);
var inst_14909 = (0);
var state_14954__$1 = (function (){var statearr_14957 = state_14954;
(statearr_14957[(8)] = inst_14906);

(statearr_14957[(9)] = inst_14907);

(statearr_14957[(10)] = inst_14908);

(statearr_14957[(11)] = inst_14931);

(statearr_14957[(12)] = inst_14909);

return statearr_14957;
})();
var statearr_14958_14998 = state_14954__$1;
(statearr_14958_14998[(2)] = null);

(statearr_14958_14998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (1))){
var state_14954__$1 = state_14954;
var statearr_14959_14999 = state_14954__$1;
(statearr_14959_14999[(2)] = null);

(statearr_14959_14999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (4))){
var inst_14895 = (state_14954[(13)]);
var inst_14895__$1 = (state_14954[(2)]);
var inst_14896 = (inst_14895__$1 == null);
var state_14954__$1 = (function (){var statearr_14960 = state_14954;
(statearr_14960[(13)] = inst_14895__$1);

return statearr_14960;
})();
if(cljs.core.truth_(inst_14896)){
var statearr_14961_15000 = state_14954__$1;
(statearr_14961_15000[(1)] = (5));

} else {
var statearr_14962_15001 = state_14954__$1;
(statearr_14962_15001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (15))){
var state_14954__$1 = state_14954;
var statearr_14966_15002 = state_14954__$1;
(statearr_14966_15002[(2)] = null);

(statearr_14966_15002[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (21))){
var state_14954__$1 = state_14954;
var statearr_14967_15003 = state_14954__$1;
(statearr_14967_15003[(2)] = null);

(statearr_14967_15003[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (13))){
var inst_14906 = (state_14954[(8)]);
var inst_14907 = (state_14954[(9)]);
var inst_14908 = (state_14954[(10)]);
var inst_14909 = (state_14954[(12)]);
var inst_14916 = (state_14954[(2)]);
var inst_14917 = (inst_14909 + (1));
var tmp14963 = inst_14906;
var tmp14964 = inst_14907;
var tmp14965 = inst_14908;
var inst_14906__$1 = tmp14963;
var inst_14907__$1 = tmp14964;
var inst_14908__$1 = tmp14965;
var inst_14909__$1 = inst_14917;
var state_14954__$1 = (function (){var statearr_14968 = state_14954;
(statearr_14968[(8)] = inst_14906__$1);

(statearr_14968[(9)] = inst_14907__$1);

(statearr_14968[(10)] = inst_14908__$1);

(statearr_14968[(12)] = inst_14909__$1);

(statearr_14968[(14)] = inst_14916);

return statearr_14968;
})();
var statearr_14969_15004 = state_14954__$1;
(statearr_14969_15004[(2)] = null);

(statearr_14969_15004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (22))){
var state_14954__$1 = state_14954;
var statearr_14970_15005 = state_14954__$1;
(statearr_14970_15005[(2)] = null);

(statearr_14970_15005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (6))){
var inst_14895 = (state_14954[(13)]);
var inst_14904 = f.call(null,inst_14895);
var inst_14905 = cljs.core.seq.call(null,inst_14904);
var inst_14906 = inst_14905;
var inst_14907 = null;
var inst_14908 = (0);
var inst_14909 = (0);
var state_14954__$1 = (function (){var statearr_14971 = state_14954;
(statearr_14971[(8)] = inst_14906);

(statearr_14971[(9)] = inst_14907);

(statearr_14971[(10)] = inst_14908);

(statearr_14971[(12)] = inst_14909);

return statearr_14971;
})();
var statearr_14972_15006 = state_14954__$1;
(statearr_14972_15006[(2)] = null);

(statearr_14972_15006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (17))){
var inst_14920 = (state_14954[(7)]);
var inst_14924 = cljs.core.chunk_first.call(null,inst_14920);
var inst_14925 = cljs.core.chunk_rest.call(null,inst_14920);
var inst_14926 = cljs.core.count.call(null,inst_14924);
var inst_14906 = inst_14925;
var inst_14907 = inst_14924;
var inst_14908 = inst_14926;
var inst_14909 = (0);
var state_14954__$1 = (function (){var statearr_14973 = state_14954;
(statearr_14973[(8)] = inst_14906);

(statearr_14973[(9)] = inst_14907);

(statearr_14973[(10)] = inst_14908);

(statearr_14973[(12)] = inst_14909);

return statearr_14973;
})();
var statearr_14974_15007 = state_14954__$1;
(statearr_14974_15007[(2)] = null);

(statearr_14974_15007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (3))){
var inst_14952 = (state_14954[(2)]);
var state_14954__$1 = state_14954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14954__$1,inst_14952);
} else {
if((state_val_14955 === (12))){
var inst_14940 = (state_14954[(2)]);
var state_14954__$1 = state_14954;
var statearr_14975_15008 = state_14954__$1;
(statearr_14975_15008[(2)] = inst_14940);

(statearr_14975_15008[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (2))){
var state_14954__$1 = state_14954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14954__$1,(4),in$);
} else {
if((state_val_14955 === (23))){
var inst_14948 = (state_14954[(2)]);
var state_14954__$1 = state_14954;
var statearr_14976_15009 = state_14954__$1;
(statearr_14976_15009[(2)] = inst_14948);

(statearr_14976_15009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (19))){
var inst_14935 = (state_14954[(2)]);
var state_14954__$1 = state_14954;
var statearr_14977_15010 = state_14954__$1;
(statearr_14977_15010[(2)] = inst_14935);

(statearr_14977_15010[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (11))){
var inst_14906 = (state_14954[(8)]);
var inst_14920 = (state_14954[(7)]);
var inst_14920__$1 = cljs.core.seq.call(null,inst_14906);
var state_14954__$1 = (function (){var statearr_14978 = state_14954;
(statearr_14978[(7)] = inst_14920__$1);

return statearr_14978;
})();
if(inst_14920__$1){
var statearr_14979_15011 = state_14954__$1;
(statearr_14979_15011[(1)] = (14));

} else {
var statearr_14980_15012 = state_14954__$1;
(statearr_14980_15012[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (9))){
var inst_14942 = (state_14954[(2)]);
var inst_14943 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14954__$1 = (function (){var statearr_14981 = state_14954;
(statearr_14981[(15)] = inst_14942);

return statearr_14981;
})();
if(cljs.core.truth_(inst_14943)){
var statearr_14982_15013 = state_14954__$1;
(statearr_14982_15013[(1)] = (21));

} else {
var statearr_14983_15014 = state_14954__$1;
(statearr_14983_15014[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (5))){
var inst_14898 = cljs.core.async.close_BANG_.call(null,out);
var state_14954__$1 = state_14954;
var statearr_14984_15015 = state_14954__$1;
(statearr_14984_15015[(2)] = inst_14898);

(statearr_14984_15015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (14))){
var inst_14920 = (state_14954[(7)]);
var inst_14922 = cljs.core.chunked_seq_QMARK_.call(null,inst_14920);
var state_14954__$1 = state_14954;
if(inst_14922){
var statearr_14985_15016 = state_14954__$1;
(statearr_14985_15016[(1)] = (17));

} else {
var statearr_14986_15017 = state_14954__$1;
(statearr_14986_15017[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (16))){
var inst_14938 = (state_14954[(2)]);
var state_14954__$1 = state_14954;
var statearr_14987_15018 = state_14954__$1;
(statearr_14987_15018[(2)] = inst_14938);

(statearr_14987_15018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14955 === (10))){
var inst_14907 = (state_14954[(9)]);
var inst_14909 = (state_14954[(12)]);
var inst_14914 = cljs.core._nth.call(null,inst_14907,inst_14909);
var state_14954__$1 = state_14954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14954__$1,(13),out,inst_14914);
} else {
if((state_val_14955 === (18))){
var inst_14920 = (state_14954[(7)]);
var inst_14929 = cljs.core.first.call(null,inst_14920);
var state_14954__$1 = state_14954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14954__$1,(20),out,inst_14929);
} else {
if((state_val_14955 === (8))){
var inst_14908 = (state_14954[(10)]);
var inst_14909 = (state_14954[(12)]);
var inst_14911 = (inst_14909 < inst_14908);
var inst_14912 = inst_14911;
var state_14954__$1 = state_14954;
if(cljs.core.truth_(inst_14912)){
var statearr_14988_15019 = state_14954__$1;
(statearr_14988_15019[(1)] = (10));

} else {
var statearr_14989_15020 = state_14954__$1;
(statearr_14989_15020[(1)] = (11));

}

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
});})(c__12497__auto__))
;
return ((function (switch__12385__auto__,c__12497__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12386__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12386__auto____0 = (function (){
var statearr_14993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14993[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12386__auto__);

(statearr_14993[(1)] = (1));

return statearr_14993;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12386__auto____1 = (function (state_14954){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_14954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e14994){if((e14994 instanceof Object)){
var ex__12389__auto__ = e14994;
var statearr_14995_15021 = state_14954;
(statearr_14995_15021[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15022 = state_14954;
state_14954 = G__15022;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12386__auto__ = function(state_14954){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12386__auto____1.call(this,state_14954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12386__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12386__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto__))
})();
var state__12499__auto__ = (function (){var statearr_14996 = f__12498__auto__.call(null);
(statearr_14996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto__);

return statearr_14996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto__))
);

return c__12497__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15023 = [];
var len__7652__auto___15026 = arguments.length;
var i__7653__auto___15027 = (0);
while(true){
if((i__7653__auto___15027 < len__7652__auto___15026)){
args15023.push((arguments[i__7653__auto___15027]));

var G__15028 = (i__7653__auto___15027 + (1));
i__7653__auto___15027 = G__15028;
continue;
} else {
}
break;
}

var G__15025 = args15023.length;
switch (G__15025) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15023.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args15030 = [];
var len__7652__auto___15033 = arguments.length;
var i__7653__auto___15034 = (0);
while(true){
if((i__7653__auto___15034 < len__7652__auto___15033)){
args15030.push((arguments[i__7653__auto___15034]));

var G__15035 = (i__7653__auto___15034 + (1));
i__7653__auto___15034 = G__15035;
continue;
} else {
}
break;
}

var G__15032 = args15030.length;
switch (G__15032) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15030.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args15037 = [];
var len__7652__auto___15088 = arguments.length;
var i__7653__auto___15089 = (0);
while(true){
if((i__7653__auto___15089 < len__7652__auto___15088)){
args15037.push((arguments[i__7653__auto___15089]));

var G__15090 = (i__7653__auto___15089 + (1));
i__7653__auto___15089 = G__15090;
continue;
} else {
}
break;
}

var G__15039 = args15037.length;
switch (G__15039) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15037.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12497__auto___15092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto___15092,out){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto___15092,out){
return (function (state_15063){
var state_val_15064 = (state_15063[(1)]);
if((state_val_15064 === (7))){
var inst_15058 = (state_15063[(2)]);
var state_15063__$1 = state_15063;
var statearr_15065_15093 = state_15063__$1;
(statearr_15065_15093[(2)] = inst_15058);

(statearr_15065_15093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15064 === (1))){
var inst_15040 = null;
var state_15063__$1 = (function (){var statearr_15066 = state_15063;
(statearr_15066[(7)] = inst_15040);

return statearr_15066;
})();
var statearr_15067_15094 = state_15063__$1;
(statearr_15067_15094[(2)] = null);

(statearr_15067_15094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15064 === (4))){
var inst_15043 = (state_15063[(8)]);
var inst_15043__$1 = (state_15063[(2)]);
var inst_15044 = (inst_15043__$1 == null);
var inst_15045 = cljs.core.not.call(null,inst_15044);
var state_15063__$1 = (function (){var statearr_15068 = state_15063;
(statearr_15068[(8)] = inst_15043__$1);

return statearr_15068;
})();
if(inst_15045){
var statearr_15069_15095 = state_15063__$1;
(statearr_15069_15095[(1)] = (5));

} else {
var statearr_15070_15096 = state_15063__$1;
(statearr_15070_15096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15064 === (6))){
var state_15063__$1 = state_15063;
var statearr_15071_15097 = state_15063__$1;
(statearr_15071_15097[(2)] = null);

(statearr_15071_15097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15064 === (3))){
var inst_15060 = (state_15063[(2)]);
var inst_15061 = cljs.core.async.close_BANG_.call(null,out);
var state_15063__$1 = (function (){var statearr_15072 = state_15063;
(statearr_15072[(9)] = inst_15060);

return statearr_15072;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15063__$1,inst_15061);
} else {
if((state_val_15064 === (2))){
var state_15063__$1 = state_15063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15063__$1,(4),ch);
} else {
if((state_val_15064 === (11))){
var inst_15043 = (state_15063[(8)]);
var inst_15052 = (state_15063[(2)]);
var inst_15040 = inst_15043;
var state_15063__$1 = (function (){var statearr_15073 = state_15063;
(statearr_15073[(7)] = inst_15040);

(statearr_15073[(10)] = inst_15052);

return statearr_15073;
})();
var statearr_15074_15098 = state_15063__$1;
(statearr_15074_15098[(2)] = null);

(statearr_15074_15098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15064 === (9))){
var inst_15043 = (state_15063[(8)]);
var state_15063__$1 = state_15063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15063__$1,(11),out,inst_15043);
} else {
if((state_val_15064 === (5))){
var inst_15040 = (state_15063[(7)]);
var inst_15043 = (state_15063[(8)]);
var inst_15047 = cljs.core._EQ_.call(null,inst_15043,inst_15040);
var state_15063__$1 = state_15063;
if(inst_15047){
var statearr_15076_15099 = state_15063__$1;
(statearr_15076_15099[(1)] = (8));

} else {
var statearr_15077_15100 = state_15063__$1;
(statearr_15077_15100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15064 === (10))){
var inst_15055 = (state_15063[(2)]);
var state_15063__$1 = state_15063;
var statearr_15078_15101 = state_15063__$1;
(statearr_15078_15101[(2)] = inst_15055);

(statearr_15078_15101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15064 === (8))){
var inst_15040 = (state_15063[(7)]);
var tmp15075 = inst_15040;
var inst_15040__$1 = tmp15075;
var state_15063__$1 = (function (){var statearr_15079 = state_15063;
(statearr_15079[(7)] = inst_15040__$1);

return statearr_15079;
})();
var statearr_15080_15102 = state_15063__$1;
(statearr_15080_15102[(2)] = null);

(statearr_15080_15102[(1)] = (2));


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
});})(c__12497__auto___15092,out))
;
return ((function (switch__12385__auto__,c__12497__auto___15092,out){
return (function() {
var cljs$core$async$state_machine__12386__auto__ = null;
var cljs$core$async$state_machine__12386__auto____0 = (function (){
var statearr_15084 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15084[(0)] = cljs$core$async$state_machine__12386__auto__);

(statearr_15084[(1)] = (1));

return statearr_15084;
});
var cljs$core$async$state_machine__12386__auto____1 = (function (state_15063){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_15063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e15085){if((e15085 instanceof Object)){
var ex__12389__auto__ = e15085;
var statearr_15086_15103 = state_15063;
(statearr_15086_15103[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15104 = state_15063;
state_15063 = G__15104;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$state_machine__12386__auto__ = function(state_15063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12386__auto____1.call(this,state_15063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12386__auto____0;
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12386__auto____1;
return cljs$core$async$state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto___15092,out))
})();
var state__12499__auto__ = (function (){var statearr_15087 = f__12498__auto__.call(null);
(statearr_15087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___15092);

return statearr_15087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto___15092,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15105 = [];
var len__7652__auto___15175 = arguments.length;
var i__7653__auto___15176 = (0);
while(true){
if((i__7653__auto___15176 < len__7652__auto___15175)){
args15105.push((arguments[i__7653__auto___15176]));

var G__15177 = (i__7653__auto___15176 + (1));
i__7653__auto___15176 = G__15177;
continue;
} else {
}
break;
}

var G__15107 = args15105.length;
switch (G__15107) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15105.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12497__auto___15179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto___15179,out){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto___15179,out){
return (function (state_15145){
var state_val_15146 = (state_15145[(1)]);
if((state_val_15146 === (7))){
var inst_15141 = (state_15145[(2)]);
var state_15145__$1 = state_15145;
var statearr_15147_15180 = state_15145__$1;
(statearr_15147_15180[(2)] = inst_15141);

(statearr_15147_15180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (1))){
var inst_15108 = (new Array(n));
var inst_15109 = inst_15108;
var inst_15110 = (0);
var state_15145__$1 = (function (){var statearr_15148 = state_15145;
(statearr_15148[(7)] = inst_15110);

(statearr_15148[(8)] = inst_15109);

return statearr_15148;
})();
var statearr_15149_15181 = state_15145__$1;
(statearr_15149_15181[(2)] = null);

(statearr_15149_15181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (4))){
var inst_15113 = (state_15145[(9)]);
var inst_15113__$1 = (state_15145[(2)]);
var inst_15114 = (inst_15113__$1 == null);
var inst_15115 = cljs.core.not.call(null,inst_15114);
var state_15145__$1 = (function (){var statearr_15150 = state_15145;
(statearr_15150[(9)] = inst_15113__$1);

return statearr_15150;
})();
if(inst_15115){
var statearr_15151_15182 = state_15145__$1;
(statearr_15151_15182[(1)] = (5));

} else {
var statearr_15152_15183 = state_15145__$1;
(statearr_15152_15183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (15))){
var inst_15135 = (state_15145[(2)]);
var state_15145__$1 = state_15145;
var statearr_15153_15184 = state_15145__$1;
(statearr_15153_15184[(2)] = inst_15135);

(statearr_15153_15184[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (13))){
var state_15145__$1 = state_15145;
var statearr_15154_15185 = state_15145__$1;
(statearr_15154_15185[(2)] = null);

(statearr_15154_15185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (6))){
var inst_15110 = (state_15145[(7)]);
var inst_15131 = (inst_15110 > (0));
var state_15145__$1 = state_15145;
if(cljs.core.truth_(inst_15131)){
var statearr_15155_15186 = state_15145__$1;
(statearr_15155_15186[(1)] = (12));

} else {
var statearr_15156_15187 = state_15145__$1;
(statearr_15156_15187[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (3))){
var inst_15143 = (state_15145[(2)]);
var state_15145__$1 = state_15145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15145__$1,inst_15143);
} else {
if((state_val_15146 === (12))){
var inst_15109 = (state_15145[(8)]);
var inst_15133 = cljs.core.vec.call(null,inst_15109);
var state_15145__$1 = state_15145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15145__$1,(15),out,inst_15133);
} else {
if((state_val_15146 === (2))){
var state_15145__$1 = state_15145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15145__$1,(4),ch);
} else {
if((state_val_15146 === (11))){
var inst_15125 = (state_15145[(2)]);
var inst_15126 = (new Array(n));
var inst_15109 = inst_15126;
var inst_15110 = (0);
var state_15145__$1 = (function (){var statearr_15157 = state_15145;
(statearr_15157[(7)] = inst_15110);

(statearr_15157[(8)] = inst_15109);

(statearr_15157[(10)] = inst_15125);

return statearr_15157;
})();
var statearr_15158_15188 = state_15145__$1;
(statearr_15158_15188[(2)] = null);

(statearr_15158_15188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (9))){
var inst_15109 = (state_15145[(8)]);
var inst_15123 = cljs.core.vec.call(null,inst_15109);
var state_15145__$1 = state_15145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15145__$1,(11),out,inst_15123);
} else {
if((state_val_15146 === (5))){
var inst_15110 = (state_15145[(7)]);
var inst_15118 = (state_15145[(11)]);
var inst_15109 = (state_15145[(8)]);
var inst_15113 = (state_15145[(9)]);
var inst_15117 = (inst_15109[inst_15110] = inst_15113);
var inst_15118__$1 = (inst_15110 + (1));
var inst_15119 = (inst_15118__$1 < n);
var state_15145__$1 = (function (){var statearr_15159 = state_15145;
(statearr_15159[(11)] = inst_15118__$1);

(statearr_15159[(12)] = inst_15117);

return statearr_15159;
})();
if(cljs.core.truth_(inst_15119)){
var statearr_15160_15189 = state_15145__$1;
(statearr_15160_15189[(1)] = (8));

} else {
var statearr_15161_15190 = state_15145__$1;
(statearr_15161_15190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (14))){
var inst_15138 = (state_15145[(2)]);
var inst_15139 = cljs.core.async.close_BANG_.call(null,out);
var state_15145__$1 = (function (){var statearr_15163 = state_15145;
(statearr_15163[(13)] = inst_15138);

return statearr_15163;
})();
var statearr_15164_15191 = state_15145__$1;
(statearr_15164_15191[(2)] = inst_15139);

(statearr_15164_15191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (10))){
var inst_15129 = (state_15145[(2)]);
var state_15145__$1 = state_15145;
var statearr_15165_15192 = state_15145__$1;
(statearr_15165_15192[(2)] = inst_15129);

(statearr_15165_15192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (8))){
var inst_15118 = (state_15145[(11)]);
var inst_15109 = (state_15145[(8)]);
var tmp15162 = inst_15109;
var inst_15109__$1 = tmp15162;
var inst_15110 = inst_15118;
var state_15145__$1 = (function (){var statearr_15166 = state_15145;
(statearr_15166[(7)] = inst_15110);

(statearr_15166[(8)] = inst_15109__$1);

return statearr_15166;
})();
var statearr_15167_15193 = state_15145__$1;
(statearr_15167_15193[(2)] = null);

(statearr_15167_15193[(1)] = (2));


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
});})(c__12497__auto___15179,out))
;
return ((function (switch__12385__auto__,c__12497__auto___15179,out){
return (function() {
var cljs$core$async$state_machine__12386__auto__ = null;
var cljs$core$async$state_machine__12386__auto____0 = (function (){
var statearr_15171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15171[(0)] = cljs$core$async$state_machine__12386__auto__);

(statearr_15171[(1)] = (1));

return statearr_15171;
});
var cljs$core$async$state_machine__12386__auto____1 = (function (state_15145){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_15145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e15172){if((e15172 instanceof Object)){
var ex__12389__auto__ = e15172;
var statearr_15173_15194 = state_15145;
(statearr_15173_15194[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15195 = state_15145;
state_15145 = G__15195;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$state_machine__12386__auto__ = function(state_15145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12386__auto____1.call(this,state_15145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12386__auto____0;
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12386__auto____1;
return cljs$core$async$state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto___15179,out))
})();
var state__12499__auto__ = (function (){var statearr_15174 = f__12498__auto__.call(null);
(statearr_15174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___15179);

return statearr_15174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto___15179,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15196 = [];
var len__7652__auto___15270 = arguments.length;
var i__7653__auto___15271 = (0);
while(true){
if((i__7653__auto___15271 < len__7652__auto___15270)){
args15196.push((arguments[i__7653__auto___15271]));

var G__15272 = (i__7653__auto___15271 + (1));
i__7653__auto___15271 = G__15272;
continue;
} else {
}
break;
}

var G__15198 = args15196.length;
switch (G__15198) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15196.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12497__auto___15274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12497__auto___15274,out){
return (function (){
var f__12498__auto__ = (function (){var switch__12385__auto__ = ((function (c__12497__auto___15274,out){
return (function (state_15240){
var state_val_15241 = (state_15240[(1)]);
if((state_val_15241 === (7))){
var inst_15236 = (state_15240[(2)]);
var state_15240__$1 = state_15240;
var statearr_15242_15275 = state_15240__$1;
(statearr_15242_15275[(2)] = inst_15236);

(statearr_15242_15275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (1))){
var inst_15199 = [];
var inst_15200 = inst_15199;
var inst_15201 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15240__$1 = (function (){var statearr_15243 = state_15240;
(statearr_15243[(7)] = inst_15200);

(statearr_15243[(8)] = inst_15201);

return statearr_15243;
})();
var statearr_15244_15276 = state_15240__$1;
(statearr_15244_15276[(2)] = null);

(statearr_15244_15276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (4))){
var inst_15204 = (state_15240[(9)]);
var inst_15204__$1 = (state_15240[(2)]);
var inst_15205 = (inst_15204__$1 == null);
var inst_15206 = cljs.core.not.call(null,inst_15205);
var state_15240__$1 = (function (){var statearr_15245 = state_15240;
(statearr_15245[(9)] = inst_15204__$1);

return statearr_15245;
})();
if(inst_15206){
var statearr_15246_15277 = state_15240__$1;
(statearr_15246_15277[(1)] = (5));

} else {
var statearr_15247_15278 = state_15240__$1;
(statearr_15247_15278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (15))){
var inst_15230 = (state_15240[(2)]);
var state_15240__$1 = state_15240;
var statearr_15248_15279 = state_15240__$1;
(statearr_15248_15279[(2)] = inst_15230);

(statearr_15248_15279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (13))){
var state_15240__$1 = state_15240;
var statearr_15249_15280 = state_15240__$1;
(statearr_15249_15280[(2)] = null);

(statearr_15249_15280[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (6))){
var inst_15200 = (state_15240[(7)]);
var inst_15225 = inst_15200.length;
var inst_15226 = (inst_15225 > (0));
var state_15240__$1 = state_15240;
if(cljs.core.truth_(inst_15226)){
var statearr_15250_15281 = state_15240__$1;
(statearr_15250_15281[(1)] = (12));

} else {
var statearr_15251_15282 = state_15240__$1;
(statearr_15251_15282[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (3))){
var inst_15238 = (state_15240[(2)]);
var state_15240__$1 = state_15240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15240__$1,inst_15238);
} else {
if((state_val_15241 === (12))){
var inst_15200 = (state_15240[(7)]);
var inst_15228 = cljs.core.vec.call(null,inst_15200);
var state_15240__$1 = state_15240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15240__$1,(15),out,inst_15228);
} else {
if((state_val_15241 === (2))){
var state_15240__$1 = state_15240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15240__$1,(4),ch);
} else {
if((state_val_15241 === (11))){
var inst_15208 = (state_15240[(10)]);
var inst_15204 = (state_15240[(9)]);
var inst_15218 = (state_15240[(2)]);
var inst_15219 = [];
var inst_15220 = inst_15219.push(inst_15204);
var inst_15200 = inst_15219;
var inst_15201 = inst_15208;
var state_15240__$1 = (function (){var statearr_15252 = state_15240;
(statearr_15252[(11)] = inst_15220);

(statearr_15252[(12)] = inst_15218);

(statearr_15252[(7)] = inst_15200);

(statearr_15252[(8)] = inst_15201);

return statearr_15252;
})();
var statearr_15253_15283 = state_15240__$1;
(statearr_15253_15283[(2)] = null);

(statearr_15253_15283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (9))){
var inst_15200 = (state_15240[(7)]);
var inst_15216 = cljs.core.vec.call(null,inst_15200);
var state_15240__$1 = state_15240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15240__$1,(11),out,inst_15216);
} else {
if((state_val_15241 === (5))){
var inst_15208 = (state_15240[(10)]);
var inst_15204 = (state_15240[(9)]);
var inst_15201 = (state_15240[(8)]);
var inst_15208__$1 = f.call(null,inst_15204);
var inst_15209 = cljs.core._EQ_.call(null,inst_15208__$1,inst_15201);
var inst_15210 = cljs.core.keyword_identical_QMARK_.call(null,inst_15201,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15211 = (inst_15209) || (inst_15210);
var state_15240__$1 = (function (){var statearr_15254 = state_15240;
(statearr_15254[(10)] = inst_15208__$1);

return statearr_15254;
})();
if(cljs.core.truth_(inst_15211)){
var statearr_15255_15284 = state_15240__$1;
(statearr_15255_15284[(1)] = (8));

} else {
var statearr_15256_15285 = state_15240__$1;
(statearr_15256_15285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (14))){
var inst_15233 = (state_15240[(2)]);
var inst_15234 = cljs.core.async.close_BANG_.call(null,out);
var state_15240__$1 = (function (){var statearr_15258 = state_15240;
(statearr_15258[(13)] = inst_15233);

return statearr_15258;
})();
var statearr_15259_15286 = state_15240__$1;
(statearr_15259_15286[(2)] = inst_15234);

(statearr_15259_15286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (10))){
var inst_15223 = (state_15240[(2)]);
var state_15240__$1 = state_15240;
var statearr_15260_15287 = state_15240__$1;
(statearr_15260_15287[(2)] = inst_15223);

(statearr_15260_15287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (8))){
var inst_15208 = (state_15240[(10)]);
var inst_15200 = (state_15240[(7)]);
var inst_15204 = (state_15240[(9)]);
var inst_15213 = inst_15200.push(inst_15204);
var tmp15257 = inst_15200;
var inst_15200__$1 = tmp15257;
var inst_15201 = inst_15208;
var state_15240__$1 = (function (){var statearr_15261 = state_15240;
(statearr_15261[(14)] = inst_15213);

(statearr_15261[(7)] = inst_15200__$1);

(statearr_15261[(8)] = inst_15201);

return statearr_15261;
})();
var statearr_15262_15288 = state_15240__$1;
(statearr_15262_15288[(2)] = null);

(statearr_15262_15288[(1)] = (2));


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
});})(c__12497__auto___15274,out))
;
return ((function (switch__12385__auto__,c__12497__auto___15274,out){
return (function() {
var cljs$core$async$state_machine__12386__auto__ = null;
var cljs$core$async$state_machine__12386__auto____0 = (function (){
var statearr_15266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15266[(0)] = cljs$core$async$state_machine__12386__auto__);

(statearr_15266[(1)] = (1));

return statearr_15266;
});
var cljs$core$async$state_machine__12386__auto____1 = (function (state_15240){
while(true){
var ret_value__12387__auto__ = (function (){try{while(true){
var result__12388__auto__ = switch__12385__auto__.call(null,state_15240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12388__auto__;
}
break;
}
}catch (e15267){if((e15267 instanceof Object)){
var ex__12389__auto__ = e15267;
var statearr_15268_15289 = state_15240;
(statearr_15268_15289[(5)] = ex__12389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15290 = state_15240;
state_15240 = G__15290;
continue;
} else {
return ret_value__12387__auto__;
}
break;
}
});
cljs$core$async$state_machine__12386__auto__ = function(state_15240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12386__auto____1.call(this,state_15240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12386__auto____0;
cljs$core$async$state_machine__12386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12386__auto____1;
return cljs$core$async$state_machine__12386__auto__;
})()
;})(switch__12385__auto__,c__12497__auto___15274,out))
})();
var state__12499__auto__ = (function (){var statearr_15269 = f__12498__auto__.call(null);
(statearr_15269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12497__auto___15274);

return statearr_15269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12499__auto__);
});})(c__12497__auto___15274,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map