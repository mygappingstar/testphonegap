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
var args12342 = [];
var len__7652__auto___12348 = arguments.length;
var i__7653__auto___12349 = (0);
while(true){
if((i__7653__auto___12349 < len__7652__auto___12348)){
args12342.push((arguments[i__7653__auto___12349]));

var G__12350 = (i__7653__auto___12349 + (1));
i__7653__auto___12349 = G__12350;
continue;
} else {
}
break;
}

var G__12344 = args12342.length;
switch (G__12344) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12342.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async12345 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12345 = (function (f,blockable,meta12346){
this.f = f;
this.blockable = blockable;
this.meta12346 = meta12346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12347,meta12346__$1){
var self__ = this;
var _12347__$1 = this;
return (new cljs.core.async.t_cljs$core$async12345(self__.f,self__.blockable,meta12346__$1));
});

cljs.core.async.t_cljs$core$async12345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12347){
var self__ = this;
var _12347__$1 = this;
return self__.meta12346;
});

cljs.core.async.t_cljs$core$async12345.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12345.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12345.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12345.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12346","meta12346",2080463293,null)], null);
});

cljs.core.async.t_cljs$core$async12345.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12345";

cljs.core.async.t_cljs$core$async12345.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async12345");
});

cljs.core.async.__GT_t_cljs$core$async12345 = (function cljs$core$async$__GT_t_cljs$core$async12345(f__$1,blockable__$1,meta12346){
return (new cljs.core.async.t_cljs$core$async12345(f__$1,blockable__$1,meta12346));
});

}

return (new cljs.core.async.t_cljs$core$async12345(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args12354 = [];
var len__7652__auto___12357 = arguments.length;
var i__7653__auto___12358 = (0);
while(true){
if((i__7653__auto___12358 < len__7652__auto___12357)){
args12354.push((arguments[i__7653__auto___12358]));

var G__12359 = (i__7653__auto___12358 + (1));
i__7653__auto___12358 = G__12359;
continue;
} else {
}
break;
}

var G__12356 = args12354.length;
switch (G__12356) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12354.length)].join('')));

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
var args12361 = [];
var len__7652__auto___12364 = arguments.length;
var i__7653__auto___12365 = (0);
while(true){
if((i__7653__auto___12365 < len__7652__auto___12364)){
args12361.push((arguments[i__7653__auto___12365]));

var G__12366 = (i__7653__auto___12365 + (1));
i__7653__auto___12365 = G__12366;
continue;
} else {
}
break;
}

var G__12363 = args12361.length;
switch (G__12363) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12361.length)].join('')));

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
var args12368 = [];
var len__7652__auto___12371 = arguments.length;
var i__7653__auto___12372 = (0);
while(true){
if((i__7653__auto___12372 < len__7652__auto___12371)){
args12368.push((arguments[i__7653__auto___12372]));

var G__12373 = (i__7653__auto___12372 + (1));
i__7653__auto___12372 = G__12373;
continue;
} else {
}
break;
}

var G__12370 = args12368.length;
switch (G__12370) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12368.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12375 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12375);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12375,ret){
return (function (){
return fn1.call(null,val_12375);
});})(val_12375,ret))
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
var args12376 = [];
var len__7652__auto___12379 = arguments.length;
var i__7653__auto___12380 = (0);
while(true){
if((i__7653__auto___12380 < len__7652__auto___12379)){
args12376.push((arguments[i__7653__auto___12380]));

var G__12381 = (i__7653__auto___12380 + (1));
i__7653__auto___12380 = G__12381;
continue;
} else {
}
break;
}

var G__12378 = args12376.length;
switch (G__12378) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12376.length)].join('')));

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
var n__7492__auto___12383 = n;
var x_12384 = (0);
while(true){
if((x_12384 < n__7492__auto___12383)){
(a[x_12384] = (0));

var G__12385 = (x_12384 + (1));
x_12384 = G__12385;
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

var G__12386 = (i + (1));
i = G__12386;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12390 = (function (alt_flag,flag,meta12391){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12391 = meta12391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12392,meta12391__$1){
var self__ = this;
var _12392__$1 = this;
return (new cljs.core.async.t_cljs$core$async12390(self__.alt_flag,self__.flag,meta12391__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12392){
var self__ = this;
var _12392__$1 = this;
return self__.meta12391;
});})(flag))
;

cljs.core.async.t_cljs$core$async12390.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12390.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12390.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12391","meta12391",817827959,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12390";

cljs.core.async.t_cljs$core$async12390.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async12390");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12390 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12390(alt_flag__$1,flag__$1,meta12391){
return (new cljs.core.async.t_cljs$core$async12390(alt_flag__$1,flag__$1,meta12391));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12390(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12396 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12396 = (function (alt_handler,flag,cb,meta12397){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12397 = meta12397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12398,meta12397__$1){
var self__ = this;
var _12398__$1 = this;
return (new cljs.core.async.t_cljs$core$async12396(self__.alt_handler,self__.flag,self__.cb,meta12397__$1));
});

cljs.core.async.t_cljs$core$async12396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12398){
var self__ = this;
var _12398__$1 = this;
return self__.meta12397;
});

cljs.core.async.t_cljs$core$async12396.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12396.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12397","meta12397",1545456180,null)], null);
});

cljs.core.async.t_cljs$core$async12396.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12396";

cljs.core.async.t_cljs$core$async12396.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async12396");
});

cljs.core.async.__GT_t_cljs$core$async12396 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12396(alt_handler__$1,flag__$1,cb__$1,meta12397){
return (new cljs.core.async.t_cljs$core$async12396(alt_handler__$1,flag__$1,cb__$1,meta12397));
});

}

return (new cljs.core.async.t_cljs$core$async12396(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12399_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12399_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12400_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12400_SHARP_,port], null));
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
var G__12401 = (i + (1));
i = G__12401;
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
var len__7652__auto___12407 = arguments.length;
var i__7653__auto___12408 = (0);
while(true){
if((i__7653__auto___12408 < len__7652__auto___12407)){
args__7659__auto__.push((arguments[i__7653__auto___12408]));

var G__12409 = (i__7653__auto___12408 + (1));
i__7653__auto___12408 = G__12409;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12404){
var map__12405 = p__12404;
var map__12405__$1 = ((((!((map__12405 == null)))?((((map__12405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12405):map__12405);
var opts = map__12405__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12402){
var G__12403 = cljs.core.first.call(null,seq12402);
var seq12402__$1 = cljs.core.next.call(null,seq12402);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12403,seq12402__$1);
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
var args12410 = [];
var len__7652__auto___12460 = arguments.length;
var i__7653__auto___12461 = (0);
while(true){
if((i__7653__auto___12461 < len__7652__auto___12460)){
args12410.push((arguments[i__7653__auto___12461]));

var G__12462 = (i__7653__auto___12461 + (1));
i__7653__auto___12461 = G__12462;
continue;
} else {
}
break;
}

var G__12412 = args12410.length;
switch (G__12412) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12410.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12297__auto___12464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto___12464){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto___12464){
return (function (state_12436){
var state_val_12437 = (state_12436[(1)]);
if((state_val_12437 === (7))){
var inst_12432 = (state_12436[(2)]);
var state_12436__$1 = state_12436;
var statearr_12438_12465 = state_12436__$1;
(statearr_12438_12465[(2)] = inst_12432);

(statearr_12438_12465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12437 === (1))){
var state_12436__$1 = state_12436;
var statearr_12439_12466 = state_12436__$1;
(statearr_12439_12466[(2)] = null);

(statearr_12439_12466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12437 === (4))){
var inst_12415 = (state_12436[(7)]);
var inst_12415__$1 = (state_12436[(2)]);
var inst_12416 = (inst_12415__$1 == null);
var state_12436__$1 = (function (){var statearr_12440 = state_12436;
(statearr_12440[(7)] = inst_12415__$1);

return statearr_12440;
})();
if(cljs.core.truth_(inst_12416)){
var statearr_12441_12467 = state_12436__$1;
(statearr_12441_12467[(1)] = (5));

} else {
var statearr_12442_12468 = state_12436__$1;
(statearr_12442_12468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12437 === (13))){
var state_12436__$1 = state_12436;
var statearr_12443_12469 = state_12436__$1;
(statearr_12443_12469[(2)] = null);

(statearr_12443_12469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12437 === (6))){
var inst_12415 = (state_12436[(7)]);
var state_12436__$1 = state_12436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12436__$1,(11),to,inst_12415);
} else {
if((state_val_12437 === (3))){
var inst_12434 = (state_12436[(2)]);
var state_12436__$1 = state_12436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12436__$1,inst_12434);
} else {
if((state_val_12437 === (12))){
var state_12436__$1 = state_12436;
var statearr_12444_12470 = state_12436__$1;
(statearr_12444_12470[(2)] = null);

(statearr_12444_12470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12437 === (2))){
var state_12436__$1 = state_12436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12436__$1,(4),from);
} else {
if((state_val_12437 === (11))){
var inst_12425 = (state_12436[(2)]);
var state_12436__$1 = state_12436;
if(cljs.core.truth_(inst_12425)){
var statearr_12445_12471 = state_12436__$1;
(statearr_12445_12471[(1)] = (12));

} else {
var statearr_12446_12472 = state_12436__$1;
(statearr_12446_12472[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12437 === (9))){
var state_12436__$1 = state_12436;
var statearr_12447_12473 = state_12436__$1;
(statearr_12447_12473[(2)] = null);

(statearr_12447_12473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12437 === (5))){
var state_12436__$1 = state_12436;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12448_12474 = state_12436__$1;
(statearr_12448_12474[(1)] = (8));

} else {
var statearr_12449_12475 = state_12436__$1;
(statearr_12449_12475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12437 === (14))){
var inst_12430 = (state_12436[(2)]);
var state_12436__$1 = state_12436;
var statearr_12450_12476 = state_12436__$1;
(statearr_12450_12476[(2)] = inst_12430);

(statearr_12450_12476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12437 === (10))){
var inst_12422 = (state_12436[(2)]);
var state_12436__$1 = state_12436;
var statearr_12451_12477 = state_12436__$1;
(statearr_12451_12477[(2)] = inst_12422);

(statearr_12451_12477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12437 === (8))){
var inst_12419 = cljs.core.async.close_BANG_.call(null,to);
var state_12436__$1 = state_12436;
var statearr_12452_12478 = state_12436__$1;
(statearr_12452_12478[(2)] = inst_12419);

(statearr_12452_12478[(1)] = (10));


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
});})(c__12297__auto___12464))
;
return ((function (switch__12185__auto__,c__12297__auto___12464){
return (function() {
var cljs$core$async$state_machine__12186__auto__ = null;
var cljs$core$async$state_machine__12186__auto____0 = (function (){
var statearr_12456 = [null,null,null,null,null,null,null,null];
(statearr_12456[(0)] = cljs$core$async$state_machine__12186__auto__);

(statearr_12456[(1)] = (1));

return statearr_12456;
});
var cljs$core$async$state_machine__12186__auto____1 = (function (state_12436){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_12436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e12457){if((e12457 instanceof Object)){
var ex__12189__auto__ = e12457;
var statearr_12458_12479 = state_12436;
(statearr_12458_12479[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12480 = state_12436;
state_12436 = G__12480;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$state_machine__12186__auto__ = function(state_12436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12186__auto____1.call(this,state_12436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12186__auto____0;
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12186__auto____1;
return cljs$core$async$state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto___12464))
})();
var state__12299__auto__ = (function (){var statearr_12459 = f__12298__auto__.call(null);
(statearr_12459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto___12464);

return statearr_12459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto___12464))
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
return (function (p__12668){
var vec__12669 = p__12668;
var v = cljs.core.nth.call(null,vec__12669,(0),null);
var p = cljs.core.nth.call(null,vec__12669,(1),null);
var job = vec__12669;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12297__auto___12855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto___12855,res,vec__12669,v,p,job,jobs,results){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto___12855,res,vec__12669,v,p,job,jobs,results){
return (function (state_12676){
var state_val_12677 = (state_12676[(1)]);
if((state_val_12677 === (1))){
var state_12676__$1 = state_12676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12676__$1,(2),res,v);
} else {
if((state_val_12677 === (2))){
var inst_12673 = (state_12676[(2)]);
var inst_12674 = cljs.core.async.close_BANG_.call(null,res);
var state_12676__$1 = (function (){var statearr_12678 = state_12676;
(statearr_12678[(7)] = inst_12673);

return statearr_12678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12676__$1,inst_12674);
} else {
return null;
}
}
});})(c__12297__auto___12855,res,vec__12669,v,p,job,jobs,results))
;
return ((function (switch__12185__auto__,c__12297__auto___12855,res,vec__12669,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____0 = (function (){
var statearr_12682 = [null,null,null,null,null,null,null,null];
(statearr_12682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__);

(statearr_12682[(1)] = (1));

return statearr_12682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____1 = (function (state_12676){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_12676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e12683){if((e12683 instanceof Object)){
var ex__12189__auto__ = e12683;
var statearr_12684_12856 = state_12676;
(statearr_12684_12856[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12857 = state_12676;
state_12676 = G__12857;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__ = function(state_12676){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____1.call(this,state_12676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto___12855,res,vec__12669,v,p,job,jobs,results))
})();
var state__12299__auto__ = (function (){var statearr_12685 = f__12298__auto__.call(null);
(statearr_12685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto___12855);

return statearr_12685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto___12855,res,vec__12669,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12686){
var vec__12687 = p__12686;
var v = cljs.core.nth.call(null,vec__12687,(0),null);
var p = cljs.core.nth.call(null,vec__12687,(1),null);
var job = vec__12687;
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
var n__7492__auto___12858 = n;
var __12859 = (0);
while(true){
if((__12859 < n__7492__auto___12858)){
var G__12690_12860 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12690_12860) {
case "compute":
var c__12297__auto___12862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12859,c__12297__auto___12862,G__12690_12860,n__7492__auto___12858,jobs,results,process,async){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (__12859,c__12297__auto___12862,G__12690_12860,n__7492__auto___12858,jobs,results,process,async){
return (function (state_12703){
var state_val_12704 = (state_12703[(1)]);
if((state_val_12704 === (1))){
var state_12703__$1 = state_12703;
var statearr_12705_12863 = state_12703__$1;
(statearr_12705_12863[(2)] = null);

(statearr_12705_12863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12704 === (2))){
var state_12703__$1 = state_12703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12703__$1,(4),jobs);
} else {
if((state_val_12704 === (3))){
var inst_12701 = (state_12703[(2)]);
var state_12703__$1 = state_12703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12703__$1,inst_12701);
} else {
if((state_val_12704 === (4))){
var inst_12693 = (state_12703[(2)]);
var inst_12694 = process.call(null,inst_12693);
var state_12703__$1 = state_12703;
if(cljs.core.truth_(inst_12694)){
var statearr_12706_12864 = state_12703__$1;
(statearr_12706_12864[(1)] = (5));

} else {
var statearr_12707_12865 = state_12703__$1;
(statearr_12707_12865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12704 === (5))){
var state_12703__$1 = state_12703;
var statearr_12708_12866 = state_12703__$1;
(statearr_12708_12866[(2)] = null);

(statearr_12708_12866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12704 === (6))){
var state_12703__$1 = state_12703;
var statearr_12709_12867 = state_12703__$1;
(statearr_12709_12867[(2)] = null);

(statearr_12709_12867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12704 === (7))){
var inst_12699 = (state_12703[(2)]);
var state_12703__$1 = state_12703;
var statearr_12710_12868 = state_12703__$1;
(statearr_12710_12868[(2)] = inst_12699);

(statearr_12710_12868[(1)] = (3));


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
});})(__12859,c__12297__auto___12862,G__12690_12860,n__7492__auto___12858,jobs,results,process,async))
;
return ((function (__12859,switch__12185__auto__,c__12297__auto___12862,G__12690_12860,n__7492__auto___12858,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____0 = (function (){
var statearr_12714 = [null,null,null,null,null,null,null];
(statearr_12714[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__);

(statearr_12714[(1)] = (1));

return statearr_12714;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____1 = (function (state_12703){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_12703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e12715){if((e12715 instanceof Object)){
var ex__12189__auto__ = e12715;
var statearr_12716_12869 = state_12703;
(statearr_12716_12869[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12870 = state_12703;
state_12703 = G__12870;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__ = function(state_12703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____1.call(this,state_12703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__;
})()
;})(__12859,switch__12185__auto__,c__12297__auto___12862,G__12690_12860,n__7492__auto___12858,jobs,results,process,async))
})();
var state__12299__auto__ = (function (){var statearr_12717 = f__12298__auto__.call(null);
(statearr_12717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto___12862);

return statearr_12717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(__12859,c__12297__auto___12862,G__12690_12860,n__7492__auto___12858,jobs,results,process,async))
);


break;
case "async":
var c__12297__auto___12871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12859,c__12297__auto___12871,G__12690_12860,n__7492__auto___12858,jobs,results,process,async){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (__12859,c__12297__auto___12871,G__12690_12860,n__7492__auto___12858,jobs,results,process,async){
return (function (state_12730){
var state_val_12731 = (state_12730[(1)]);
if((state_val_12731 === (1))){
var state_12730__$1 = state_12730;
var statearr_12732_12872 = state_12730__$1;
(statearr_12732_12872[(2)] = null);

(statearr_12732_12872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12731 === (2))){
var state_12730__$1 = state_12730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12730__$1,(4),jobs);
} else {
if((state_val_12731 === (3))){
var inst_12728 = (state_12730[(2)]);
var state_12730__$1 = state_12730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12730__$1,inst_12728);
} else {
if((state_val_12731 === (4))){
var inst_12720 = (state_12730[(2)]);
var inst_12721 = async.call(null,inst_12720);
var state_12730__$1 = state_12730;
if(cljs.core.truth_(inst_12721)){
var statearr_12733_12873 = state_12730__$1;
(statearr_12733_12873[(1)] = (5));

} else {
var statearr_12734_12874 = state_12730__$1;
(statearr_12734_12874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12731 === (5))){
var state_12730__$1 = state_12730;
var statearr_12735_12875 = state_12730__$1;
(statearr_12735_12875[(2)] = null);

(statearr_12735_12875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12731 === (6))){
var state_12730__$1 = state_12730;
var statearr_12736_12876 = state_12730__$1;
(statearr_12736_12876[(2)] = null);

(statearr_12736_12876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12731 === (7))){
var inst_12726 = (state_12730[(2)]);
var state_12730__$1 = state_12730;
var statearr_12737_12877 = state_12730__$1;
(statearr_12737_12877[(2)] = inst_12726);

(statearr_12737_12877[(1)] = (3));


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
});})(__12859,c__12297__auto___12871,G__12690_12860,n__7492__auto___12858,jobs,results,process,async))
;
return ((function (__12859,switch__12185__auto__,c__12297__auto___12871,G__12690_12860,n__7492__auto___12858,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____0 = (function (){
var statearr_12741 = [null,null,null,null,null,null,null];
(statearr_12741[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__);

(statearr_12741[(1)] = (1));

return statearr_12741;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____1 = (function (state_12730){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_12730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e12742){if((e12742 instanceof Object)){
var ex__12189__auto__ = e12742;
var statearr_12743_12878 = state_12730;
(statearr_12743_12878[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12879 = state_12730;
state_12730 = G__12879;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__ = function(state_12730){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____1.call(this,state_12730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__;
})()
;})(__12859,switch__12185__auto__,c__12297__auto___12871,G__12690_12860,n__7492__auto___12858,jobs,results,process,async))
})();
var state__12299__auto__ = (function (){var statearr_12744 = f__12298__auto__.call(null);
(statearr_12744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto___12871);

return statearr_12744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(__12859,c__12297__auto___12871,G__12690_12860,n__7492__auto___12858,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12880 = (__12859 + (1));
__12859 = G__12880;
continue;
} else {
}
break;
}

var c__12297__auto___12881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto___12881,jobs,results,process,async){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto___12881,jobs,results,process,async){
return (function (state_12766){
var state_val_12767 = (state_12766[(1)]);
if((state_val_12767 === (1))){
var state_12766__$1 = state_12766;
var statearr_12768_12882 = state_12766__$1;
(statearr_12768_12882[(2)] = null);

(statearr_12768_12882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12767 === (2))){
var state_12766__$1 = state_12766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12766__$1,(4),from);
} else {
if((state_val_12767 === (3))){
var inst_12764 = (state_12766[(2)]);
var state_12766__$1 = state_12766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12766__$1,inst_12764);
} else {
if((state_val_12767 === (4))){
var inst_12747 = (state_12766[(7)]);
var inst_12747__$1 = (state_12766[(2)]);
var inst_12748 = (inst_12747__$1 == null);
var state_12766__$1 = (function (){var statearr_12769 = state_12766;
(statearr_12769[(7)] = inst_12747__$1);

return statearr_12769;
})();
if(cljs.core.truth_(inst_12748)){
var statearr_12770_12883 = state_12766__$1;
(statearr_12770_12883[(1)] = (5));

} else {
var statearr_12771_12884 = state_12766__$1;
(statearr_12771_12884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12767 === (5))){
var inst_12750 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12766__$1 = state_12766;
var statearr_12772_12885 = state_12766__$1;
(statearr_12772_12885[(2)] = inst_12750);

(statearr_12772_12885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12767 === (6))){
var inst_12752 = (state_12766[(8)]);
var inst_12747 = (state_12766[(7)]);
var inst_12752__$1 = cljs.core.async.chan.call(null,(1));
var inst_12753 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12754 = [inst_12747,inst_12752__$1];
var inst_12755 = (new cljs.core.PersistentVector(null,2,(5),inst_12753,inst_12754,null));
var state_12766__$1 = (function (){var statearr_12773 = state_12766;
(statearr_12773[(8)] = inst_12752__$1);

return statearr_12773;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12766__$1,(8),jobs,inst_12755);
} else {
if((state_val_12767 === (7))){
var inst_12762 = (state_12766[(2)]);
var state_12766__$1 = state_12766;
var statearr_12774_12886 = state_12766__$1;
(statearr_12774_12886[(2)] = inst_12762);

(statearr_12774_12886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12767 === (8))){
var inst_12752 = (state_12766[(8)]);
var inst_12757 = (state_12766[(2)]);
var state_12766__$1 = (function (){var statearr_12775 = state_12766;
(statearr_12775[(9)] = inst_12757);

return statearr_12775;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12766__$1,(9),results,inst_12752);
} else {
if((state_val_12767 === (9))){
var inst_12759 = (state_12766[(2)]);
var state_12766__$1 = (function (){var statearr_12776 = state_12766;
(statearr_12776[(10)] = inst_12759);

return statearr_12776;
})();
var statearr_12777_12887 = state_12766__$1;
(statearr_12777_12887[(2)] = null);

(statearr_12777_12887[(1)] = (2));


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
});})(c__12297__auto___12881,jobs,results,process,async))
;
return ((function (switch__12185__auto__,c__12297__auto___12881,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____0 = (function (){
var statearr_12781 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12781[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__);

(statearr_12781[(1)] = (1));

return statearr_12781;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____1 = (function (state_12766){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_12766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e12782){if((e12782 instanceof Object)){
var ex__12189__auto__ = e12782;
var statearr_12783_12888 = state_12766;
(statearr_12783_12888[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12889 = state_12766;
state_12766 = G__12889;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__ = function(state_12766){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____1.call(this,state_12766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto___12881,jobs,results,process,async))
})();
var state__12299__auto__ = (function (){var statearr_12784 = f__12298__auto__.call(null);
(statearr_12784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto___12881);

return statearr_12784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto___12881,jobs,results,process,async))
);


var c__12297__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto__,jobs,results,process,async){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto__,jobs,results,process,async){
return (function (state_12822){
var state_val_12823 = (state_12822[(1)]);
if((state_val_12823 === (7))){
var inst_12818 = (state_12822[(2)]);
var state_12822__$1 = state_12822;
var statearr_12824_12890 = state_12822__$1;
(statearr_12824_12890[(2)] = inst_12818);

(statearr_12824_12890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (20))){
var state_12822__$1 = state_12822;
var statearr_12825_12891 = state_12822__$1;
(statearr_12825_12891[(2)] = null);

(statearr_12825_12891[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (1))){
var state_12822__$1 = state_12822;
var statearr_12826_12892 = state_12822__$1;
(statearr_12826_12892[(2)] = null);

(statearr_12826_12892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (4))){
var inst_12787 = (state_12822[(7)]);
var inst_12787__$1 = (state_12822[(2)]);
var inst_12788 = (inst_12787__$1 == null);
var state_12822__$1 = (function (){var statearr_12827 = state_12822;
(statearr_12827[(7)] = inst_12787__$1);

return statearr_12827;
})();
if(cljs.core.truth_(inst_12788)){
var statearr_12828_12893 = state_12822__$1;
(statearr_12828_12893[(1)] = (5));

} else {
var statearr_12829_12894 = state_12822__$1;
(statearr_12829_12894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (15))){
var inst_12800 = (state_12822[(8)]);
var state_12822__$1 = state_12822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12822__$1,(18),to,inst_12800);
} else {
if((state_val_12823 === (21))){
var inst_12813 = (state_12822[(2)]);
var state_12822__$1 = state_12822;
var statearr_12830_12895 = state_12822__$1;
(statearr_12830_12895[(2)] = inst_12813);

(statearr_12830_12895[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (13))){
var inst_12815 = (state_12822[(2)]);
var state_12822__$1 = (function (){var statearr_12831 = state_12822;
(statearr_12831[(9)] = inst_12815);

return statearr_12831;
})();
var statearr_12832_12896 = state_12822__$1;
(statearr_12832_12896[(2)] = null);

(statearr_12832_12896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (6))){
var inst_12787 = (state_12822[(7)]);
var state_12822__$1 = state_12822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12822__$1,(11),inst_12787);
} else {
if((state_val_12823 === (17))){
var inst_12808 = (state_12822[(2)]);
var state_12822__$1 = state_12822;
if(cljs.core.truth_(inst_12808)){
var statearr_12833_12897 = state_12822__$1;
(statearr_12833_12897[(1)] = (19));

} else {
var statearr_12834_12898 = state_12822__$1;
(statearr_12834_12898[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (3))){
var inst_12820 = (state_12822[(2)]);
var state_12822__$1 = state_12822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12822__$1,inst_12820);
} else {
if((state_val_12823 === (12))){
var inst_12797 = (state_12822[(10)]);
var state_12822__$1 = state_12822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12822__$1,(14),inst_12797);
} else {
if((state_val_12823 === (2))){
var state_12822__$1 = state_12822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12822__$1,(4),results);
} else {
if((state_val_12823 === (19))){
var state_12822__$1 = state_12822;
var statearr_12835_12899 = state_12822__$1;
(statearr_12835_12899[(2)] = null);

(statearr_12835_12899[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (11))){
var inst_12797 = (state_12822[(2)]);
var state_12822__$1 = (function (){var statearr_12836 = state_12822;
(statearr_12836[(10)] = inst_12797);

return statearr_12836;
})();
var statearr_12837_12900 = state_12822__$1;
(statearr_12837_12900[(2)] = null);

(statearr_12837_12900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (9))){
var state_12822__$1 = state_12822;
var statearr_12838_12901 = state_12822__$1;
(statearr_12838_12901[(2)] = null);

(statearr_12838_12901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (5))){
var state_12822__$1 = state_12822;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12839_12902 = state_12822__$1;
(statearr_12839_12902[(1)] = (8));

} else {
var statearr_12840_12903 = state_12822__$1;
(statearr_12840_12903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (14))){
var inst_12800 = (state_12822[(8)]);
var inst_12802 = (state_12822[(11)]);
var inst_12800__$1 = (state_12822[(2)]);
var inst_12801 = (inst_12800__$1 == null);
var inst_12802__$1 = cljs.core.not.call(null,inst_12801);
var state_12822__$1 = (function (){var statearr_12841 = state_12822;
(statearr_12841[(8)] = inst_12800__$1);

(statearr_12841[(11)] = inst_12802__$1);

return statearr_12841;
})();
if(inst_12802__$1){
var statearr_12842_12904 = state_12822__$1;
(statearr_12842_12904[(1)] = (15));

} else {
var statearr_12843_12905 = state_12822__$1;
(statearr_12843_12905[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (16))){
var inst_12802 = (state_12822[(11)]);
var state_12822__$1 = state_12822;
var statearr_12844_12906 = state_12822__$1;
(statearr_12844_12906[(2)] = inst_12802);

(statearr_12844_12906[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (10))){
var inst_12794 = (state_12822[(2)]);
var state_12822__$1 = state_12822;
var statearr_12845_12907 = state_12822__$1;
(statearr_12845_12907[(2)] = inst_12794);

(statearr_12845_12907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (18))){
var inst_12805 = (state_12822[(2)]);
var state_12822__$1 = state_12822;
var statearr_12846_12908 = state_12822__$1;
(statearr_12846_12908[(2)] = inst_12805);

(statearr_12846_12908[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (8))){
var inst_12791 = cljs.core.async.close_BANG_.call(null,to);
var state_12822__$1 = state_12822;
var statearr_12847_12909 = state_12822__$1;
(statearr_12847_12909[(2)] = inst_12791);

(statearr_12847_12909[(1)] = (10));


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
});})(c__12297__auto__,jobs,results,process,async))
;
return ((function (switch__12185__auto__,c__12297__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____0 = (function (){
var statearr_12851 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12851[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__);

(statearr_12851[(1)] = (1));

return statearr_12851;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____1 = (function (state_12822){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_12822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e12852){if((e12852 instanceof Object)){
var ex__12189__auto__ = e12852;
var statearr_12853_12910 = state_12822;
(statearr_12853_12910[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12911 = state_12822;
state_12822 = G__12911;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__ = function(state_12822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____1.call(this,state_12822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto__,jobs,results,process,async))
})();
var state__12299__auto__ = (function (){var statearr_12854 = f__12298__auto__.call(null);
(statearr_12854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto__);

return statearr_12854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto__,jobs,results,process,async))
);

return c__12297__auto__;
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
var args12912 = [];
var len__7652__auto___12915 = arguments.length;
var i__7653__auto___12916 = (0);
while(true){
if((i__7653__auto___12916 < len__7652__auto___12915)){
args12912.push((arguments[i__7653__auto___12916]));

var G__12917 = (i__7653__auto___12916 + (1));
i__7653__auto___12916 = G__12917;
continue;
} else {
}
break;
}

var G__12914 = args12912.length;
switch (G__12914) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12912.length)].join('')));

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
var args12919 = [];
var len__7652__auto___12922 = arguments.length;
var i__7653__auto___12923 = (0);
while(true){
if((i__7653__auto___12923 < len__7652__auto___12922)){
args12919.push((arguments[i__7653__auto___12923]));

var G__12924 = (i__7653__auto___12923 + (1));
i__7653__auto___12923 = G__12924;
continue;
} else {
}
break;
}

var G__12921 = args12919.length;
switch (G__12921) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12919.length)].join('')));

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
var args12926 = [];
var len__7652__auto___12979 = arguments.length;
var i__7653__auto___12980 = (0);
while(true){
if((i__7653__auto___12980 < len__7652__auto___12979)){
args12926.push((arguments[i__7653__auto___12980]));

var G__12981 = (i__7653__auto___12980 + (1));
i__7653__auto___12980 = G__12981;
continue;
} else {
}
break;
}

var G__12928 = args12926.length;
switch (G__12928) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12926.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12297__auto___12983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto___12983,tc,fc){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto___12983,tc,fc){
return (function (state_12954){
var state_val_12955 = (state_12954[(1)]);
if((state_val_12955 === (7))){
var inst_12950 = (state_12954[(2)]);
var state_12954__$1 = state_12954;
var statearr_12956_12984 = state_12954__$1;
(statearr_12956_12984[(2)] = inst_12950);

(statearr_12956_12984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12955 === (1))){
var state_12954__$1 = state_12954;
var statearr_12957_12985 = state_12954__$1;
(statearr_12957_12985[(2)] = null);

(statearr_12957_12985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12955 === (4))){
var inst_12931 = (state_12954[(7)]);
var inst_12931__$1 = (state_12954[(2)]);
var inst_12932 = (inst_12931__$1 == null);
var state_12954__$1 = (function (){var statearr_12958 = state_12954;
(statearr_12958[(7)] = inst_12931__$1);

return statearr_12958;
})();
if(cljs.core.truth_(inst_12932)){
var statearr_12959_12986 = state_12954__$1;
(statearr_12959_12986[(1)] = (5));

} else {
var statearr_12960_12987 = state_12954__$1;
(statearr_12960_12987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12955 === (13))){
var state_12954__$1 = state_12954;
var statearr_12961_12988 = state_12954__$1;
(statearr_12961_12988[(2)] = null);

(statearr_12961_12988[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12955 === (6))){
var inst_12931 = (state_12954[(7)]);
var inst_12937 = p.call(null,inst_12931);
var state_12954__$1 = state_12954;
if(cljs.core.truth_(inst_12937)){
var statearr_12962_12989 = state_12954__$1;
(statearr_12962_12989[(1)] = (9));

} else {
var statearr_12963_12990 = state_12954__$1;
(statearr_12963_12990[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12955 === (3))){
var inst_12952 = (state_12954[(2)]);
var state_12954__$1 = state_12954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12954__$1,inst_12952);
} else {
if((state_val_12955 === (12))){
var state_12954__$1 = state_12954;
var statearr_12964_12991 = state_12954__$1;
(statearr_12964_12991[(2)] = null);

(statearr_12964_12991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12955 === (2))){
var state_12954__$1 = state_12954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12954__$1,(4),ch);
} else {
if((state_val_12955 === (11))){
var inst_12931 = (state_12954[(7)]);
var inst_12941 = (state_12954[(2)]);
var state_12954__$1 = state_12954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12954__$1,(8),inst_12941,inst_12931);
} else {
if((state_val_12955 === (9))){
var state_12954__$1 = state_12954;
var statearr_12965_12992 = state_12954__$1;
(statearr_12965_12992[(2)] = tc);

(statearr_12965_12992[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12955 === (5))){
var inst_12934 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12935 = cljs.core.async.close_BANG_.call(null,fc);
var state_12954__$1 = (function (){var statearr_12966 = state_12954;
(statearr_12966[(8)] = inst_12934);

return statearr_12966;
})();
var statearr_12967_12993 = state_12954__$1;
(statearr_12967_12993[(2)] = inst_12935);

(statearr_12967_12993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12955 === (14))){
var inst_12948 = (state_12954[(2)]);
var state_12954__$1 = state_12954;
var statearr_12968_12994 = state_12954__$1;
(statearr_12968_12994[(2)] = inst_12948);

(statearr_12968_12994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12955 === (10))){
var state_12954__$1 = state_12954;
var statearr_12969_12995 = state_12954__$1;
(statearr_12969_12995[(2)] = fc);

(statearr_12969_12995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12955 === (8))){
var inst_12943 = (state_12954[(2)]);
var state_12954__$1 = state_12954;
if(cljs.core.truth_(inst_12943)){
var statearr_12970_12996 = state_12954__$1;
(statearr_12970_12996[(1)] = (12));

} else {
var statearr_12971_12997 = state_12954__$1;
(statearr_12971_12997[(1)] = (13));

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
});})(c__12297__auto___12983,tc,fc))
;
return ((function (switch__12185__auto__,c__12297__auto___12983,tc,fc){
return (function() {
var cljs$core$async$state_machine__12186__auto__ = null;
var cljs$core$async$state_machine__12186__auto____0 = (function (){
var statearr_12975 = [null,null,null,null,null,null,null,null,null];
(statearr_12975[(0)] = cljs$core$async$state_machine__12186__auto__);

(statearr_12975[(1)] = (1));

return statearr_12975;
});
var cljs$core$async$state_machine__12186__auto____1 = (function (state_12954){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_12954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e12976){if((e12976 instanceof Object)){
var ex__12189__auto__ = e12976;
var statearr_12977_12998 = state_12954;
(statearr_12977_12998[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12999 = state_12954;
state_12954 = G__12999;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$state_machine__12186__auto__ = function(state_12954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12186__auto____1.call(this,state_12954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12186__auto____0;
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12186__auto____1;
return cljs$core$async$state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto___12983,tc,fc))
})();
var state__12299__auto__ = (function (){var statearr_12978 = f__12298__auto__.call(null);
(statearr_12978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto___12983);

return statearr_12978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto___12983,tc,fc))
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
var c__12297__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto__){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto__){
return (function (state_13063){
var state_val_13064 = (state_13063[(1)]);
if((state_val_13064 === (7))){
var inst_13059 = (state_13063[(2)]);
var state_13063__$1 = state_13063;
var statearr_13065_13086 = state_13063__$1;
(statearr_13065_13086[(2)] = inst_13059);

(statearr_13065_13086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13064 === (1))){
var inst_13043 = init;
var state_13063__$1 = (function (){var statearr_13066 = state_13063;
(statearr_13066[(7)] = inst_13043);

return statearr_13066;
})();
var statearr_13067_13087 = state_13063__$1;
(statearr_13067_13087[(2)] = null);

(statearr_13067_13087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13064 === (4))){
var inst_13046 = (state_13063[(8)]);
var inst_13046__$1 = (state_13063[(2)]);
var inst_13047 = (inst_13046__$1 == null);
var state_13063__$1 = (function (){var statearr_13068 = state_13063;
(statearr_13068[(8)] = inst_13046__$1);

return statearr_13068;
})();
if(cljs.core.truth_(inst_13047)){
var statearr_13069_13088 = state_13063__$1;
(statearr_13069_13088[(1)] = (5));

} else {
var statearr_13070_13089 = state_13063__$1;
(statearr_13070_13089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13064 === (6))){
var inst_13050 = (state_13063[(9)]);
var inst_13043 = (state_13063[(7)]);
var inst_13046 = (state_13063[(8)]);
var inst_13050__$1 = f.call(null,inst_13043,inst_13046);
var inst_13051 = cljs.core.reduced_QMARK_.call(null,inst_13050__$1);
var state_13063__$1 = (function (){var statearr_13071 = state_13063;
(statearr_13071[(9)] = inst_13050__$1);

return statearr_13071;
})();
if(inst_13051){
var statearr_13072_13090 = state_13063__$1;
(statearr_13072_13090[(1)] = (8));

} else {
var statearr_13073_13091 = state_13063__$1;
(statearr_13073_13091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13064 === (3))){
var inst_13061 = (state_13063[(2)]);
var state_13063__$1 = state_13063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13063__$1,inst_13061);
} else {
if((state_val_13064 === (2))){
var state_13063__$1 = state_13063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13063__$1,(4),ch);
} else {
if((state_val_13064 === (9))){
var inst_13050 = (state_13063[(9)]);
var inst_13043 = inst_13050;
var state_13063__$1 = (function (){var statearr_13074 = state_13063;
(statearr_13074[(7)] = inst_13043);

return statearr_13074;
})();
var statearr_13075_13092 = state_13063__$1;
(statearr_13075_13092[(2)] = null);

(statearr_13075_13092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13064 === (5))){
var inst_13043 = (state_13063[(7)]);
var state_13063__$1 = state_13063;
var statearr_13076_13093 = state_13063__$1;
(statearr_13076_13093[(2)] = inst_13043);

(statearr_13076_13093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13064 === (10))){
var inst_13057 = (state_13063[(2)]);
var state_13063__$1 = state_13063;
var statearr_13077_13094 = state_13063__$1;
(statearr_13077_13094[(2)] = inst_13057);

(statearr_13077_13094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13064 === (8))){
var inst_13050 = (state_13063[(9)]);
var inst_13053 = cljs.core.deref.call(null,inst_13050);
var state_13063__$1 = state_13063;
var statearr_13078_13095 = state_13063__$1;
(statearr_13078_13095[(2)] = inst_13053);

(statearr_13078_13095[(1)] = (10));


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
});})(c__12297__auto__))
;
return ((function (switch__12185__auto__,c__12297__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12186__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12186__auto____0 = (function (){
var statearr_13082 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13082[(0)] = cljs$core$async$reduce_$_state_machine__12186__auto__);

(statearr_13082[(1)] = (1));

return statearr_13082;
});
var cljs$core$async$reduce_$_state_machine__12186__auto____1 = (function (state_13063){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_13063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e13083){if((e13083 instanceof Object)){
var ex__12189__auto__ = e13083;
var statearr_13084_13096 = state_13063;
(statearr_13084_13096[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13097 = state_13063;
state_13063 = G__13097;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12186__auto__ = function(state_13063){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12186__auto____1.call(this,state_13063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12186__auto____0;
cljs$core$async$reduce_$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12186__auto____1;
return cljs$core$async$reduce_$_state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto__))
})();
var state__12299__auto__ = (function (){var statearr_13085 = f__12298__auto__.call(null);
(statearr_13085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto__);

return statearr_13085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto__))
);

return c__12297__auto__;
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
var args13098 = [];
var len__7652__auto___13150 = arguments.length;
var i__7653__auto___13151 = (0);
while(true){
if((i__7653__auto___13151 < len__7652__auto___13150)){
args13098.push((arguments[i__7653__auto___13151]));

var G__13152 = (i__7653__auto___13151 + (1));
i__7653__auto___13151 = G__13152;
continue;
} else {
}
break;
}

var G__13100 = args13098.length;
switch (G__13100) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13098.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12297__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto__){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto__){
return (function (state_13125){
var state_val_13126 = (state_13125[(1)]);
if((state_val_13126 === (7))){
var inst_13107 = (state_13125[(2)]);
var state_13125__$1 = state_13125;
var statearr_13127_13154 = state_13125__$1;
(statearr_13127_13154[(2)] = inst_13107);

(statearr_13127_13154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13126 === (1))){
var inst_13101 = cljs.core.seq.call(null,coll);
var inst_13102 = inst_13101;
var state_13125__$1 = (function (){var statearr_13128 = state_13125;
(statearr_13128[(7)] = inst_13102);

return statearr_13128;
})();
var statearr_13129_13155 = state_13125__$1;
(statearr_13129_13155[(2)] = null);

(statearr_13129_13155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13126 === (4))){
var inst_13102 = (state_13125[(7)]);
var inst_13105 = cljs.core.first.call(null,inst_13102);
var state_13125__$1 = state_13125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13125__$1,(7),ch,inst_13105);
} else {
if((state_val_13126 === (13))){
var inst_13119 = (state_13125[(2)]);
var state_13125__$1 = state_13125;
var statearr_13130_13156 = state_13125__$1;
(statearr_13130_13156[(2)] = inst_13119);

(statearr_13130_13156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13126 === (6))){
var inst_13110 = (state_13125[(2)]);
var state_13125__$1 = state_13125;
if(cljs.core.truth_(inst_13110)){
var statearr_13131_13157 = state_13125__$1;
(statearr_13131_13157[(1)] = (8));

} else {
var statearr_13132_13158 = state_13125__$1;
(statearr_13132_13158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13126 === (3))){
var inst_13123 = (state_13125[(2)]);
var state_13125__$1 = state_13125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13125__$1,inst_13123);
} else {
if((state_val_13126 === (12))){
var state_13125__$1 = state_13125;
var statearr_13133_13159 = state_13125__$1;
(statearr_13133_13159[(2)] = null);

(statearr_13133_13159[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13126 === (2))){
var inst_13102 = (state_13125[(7)]);
var state_13125__$1 = state_13125;
if(cljs.core.truth_(inst_13102)){
var statearr_13134_13160 = state_13125__$1;
(statearr_13134_13160[(1)] = (4));

} else {
var statearr_13135_13161 = state_13125__$1;
(statearr_13135_13161[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13126 === (11))){
var inst_13116 = cljs.core.async.close_BANG_.call(null,ch);
var state_13125__$1 = state_13125;
var statearr_13136_13162 = state_13125__$1;
(statearr_13136_13162[(2)] = inst_13116);

(statearr_13136_13162[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13126 === (9))){
var state_13125__$1 = state_13125;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13137_13163 = state_13125__$1;
(statearr_13137_13163[(1)] = (11));

} else {
var statearr_13138_13164 = state_13125__$1;
(statearr_13138_13164[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13126 === (5))){
var inst_13102 = (state_13125[(7)]);
var state_13125__$1 = state_13125;
var statearr_13139_13165 = state_13125__$1;
(statearr_13139_13165[(2)] = inst_13102);

(statearr_13139_13165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13126 === (10))){
var inst_13121 = (state_13125[(2)]);
var state_13125__$1 = state_13125;
var statearr_13140_13166 = state_13125__$1;
(statearr_13140_13166[(2)] = inst_13121);

(statearr_13140_13166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13126 === (8))){
var inst_13102 = (state_13125[(7)]);
var inst_13112 = cljs.core.next.call(null,inst_13102);
var inst_13102__$1 = inst_13112;
var state_13125__$1 = (function (){var statearr_13141 = state_13125;
(statearr_13141[(7)] = inst_13102__$1);

return statearr_13141;
})();
var statearr_13142_13167 = state_13125__$1;
(statearr_13142_13167[(2)] = null);

(statearr_13142_13167[(1)] = (2));


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
});})(c__12297__auto__))
;
return ((function (switch__12185__auto__,c__12297__auto__){
return (function() {
var cljs$core$async$state_machine__12186__auto__ = null;
var cljs$core$async$state_machine__12186__auto____0 = (function (){
var statearr_13146 = [null,null,null,null,null,null,null,null];
(statearr_13146[(0)] = cljs$core$async$state_machine__12186__auto__);

(statearr_13146[(1)] = (1));

return statearr_13146;
});
var cljs$core$async$state_machine__12186__auto____1 = (function (state_13125){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_13125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e13147){if((e13147 instanceof Object)){
var ex__12189__auto__ = e13147;
var statearr_13148_13168 = state_13125;
(statearr_13148_13168[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13169 = state_13125;
state_13125 = G__13169;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$state_machine__12186__auto__ = function(state_13125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12186__auto____1.call(this,state_13125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12186__auto____0;
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12186__auto____1;
return cljs$core$async$state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto__))
})();
var state__12299__auto__ = (function (){var statearr_13149 = f__12298__auto__.call(null);
(statearr_13149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto__);

return statearr_13149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto__))
);

return c__12297__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async13395 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13395 = (function (mult,ch,cs,meta13396){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13396 = meta13396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13397,meta13396__$1){
var self__ = this;
var _13397__$1 = this;
return (new cljs.core.async.t_cljs$core$async13395(self__.mult,self__.ch,self__.cs,meta13396__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13397){
var self__ = this;
var _13397__$1 = this;
return self__.meta13396;
});})(cs))
;

cljs.core.async.t_cljs$core$async13395.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13395.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async13395.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13395.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13395.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13395.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13396","meta13396",27818995,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13395.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13395";

cljs.core.async.t_cljs$core$async13395.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async13395");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13395 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13395(mult__$1,ch__$1,cs__$1,meta13396){
return (new cljs.core.async.t_cljs$core$async13395(mult__$1,ch__$1,cs__$1,meta13396));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13395(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12297__auto___13620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto___13620,cs,m,dchan,dctr,done){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto___13620,cs,m,dchan,dctr,done){
return (function (state_13532){
var state_val_13533 = (state_13532[(1)]);
if((state_val_13533 === (7))){
var inst_13528 = (state_13532[(2)]);
var state_13532__$1 = state_13532;
var statearr_13534_13621 = state_13532__$1;
(statearr_13534_13621[(2)] = inst_13528);

(statearr_13534_13621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (20))){
var inst_13431 = (state_13532[(7)]);
var inst_13443 = cljs.core.first.call(null,inst_13431);
var inst_13444 = cljs.core.nth.call(null,inst_13443,(0),null);
var inst_13445 = cljs.core.nth.call(null,inst_13443,(1),null);
var state_13532__$1 = (function (){var statearr_13535 = state_13532;
(statearr_13535[(8)] = inst_13444);

return statearr_13535;
})();
if(cljs.core.truth_(inst_13445)){
var statearr_13536_13622 = state_13532__$1;
(statearr_13536_13622[(1)] = (22));

} else {
var statearr_13537_13623 = state_13532__$1;
(statearr_13537_13623[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (27))){
var inst_13400 = (state_13532[(9)]);
var inst_13473 = (state_13532[(10)]);
var inst_13475 = (state_13532[(11)]);
var inst_13480 = (state_13532[(12)]);
var inst_13480__$1 = cljs.core._nth.call(null,inst_13473,inst_13475);
var inst_13481 = cljs.core.async.put_BANG_.call(null,inst_13480__$1,inst_13400,done);
var state_13532__$1 = (function (){var statearr_13538 = state_13532;
(statearr_13538[(12)] = inst_13480__$1);

return statearr_13538;
})();
if(cljs.core.truth_(inst_13481)){
var statearr_13539_13624 = state_13532__$1;
(statearr_13539_13624[(1)] = (30));

} else {
var statearr_13540_13625 = state_13532__$1;
(statearr_13540_13625[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (1))){
var state_13532__$1 = state_13532;
var statearr_13541_13626 = state_13532__$1;
(statearr_13541_13626[(2)] = null);

(statearr_13541_13626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (24))){
var inst_13431 = (state_13532[(7)]);
var inst_13450 = (state_13532[(2)]);
var inst_13451 = cljs.core.next.call(null,inst_13431);
var inst_13409 = inst_13451;
var inst_13410 = null;
var inst_13411 = (0);
var inst_13412 = (0);
var state_13532__$1 = (function (){var statearr_13542 = state_13532;
(statearr_13542[(13)] = inst_13409);

(statearr_13542[(14)] = inst_13411);

(statearr_13542[(15)] = inst_13450);

(statearr_13542[(16)] = inst_13410);

(statearr_13542[(17)] = inst_13412);

return statearr_13542;
})();
var statearr_13543_13627 = state_13532__$1;
(statearr_13543_13627[(2)] = null);

(statearr_13543_13627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (39))){
var state_13532__$1 = state_13532;
var statearr_13547_13628 = state_13532__$1;
(statearr_13547_13628[(2)] = null);

(statearr_13547_13628[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (4))){
var inst_13400 = (state_13532[(9)]);
var inst_13400__$1 = (state_13532[(2)]);
var inst_13401 = (inst_13400__$1 == null);
var state_13532__$1 = (function (){var statearr_13548 = state_13532;
(statearr_13548[(9)] = inst_13400__$1);

return statearr_13548;
})();
if(cljs.core.truth_(inst_13401)){
var statearr_13549_13629 = state_13532__$1;
(statearr_13549_13629[(1)] = (5));

} else {
var statearr_13550_13630 = state_13532__$1;
(statearr_13550_13630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (15))){
var inst_13409 = (state_13532[(13)]);
var inst_13411 = (state_13532[(14)]);
var inst_13410 = (state_13532[(16)]);
var inst_13412 = (state_13532[(17)]);
var inst_13427 = (state_13532[(2)]);
var inst_13428 = (inst_13412 + (1));
var tmp13544 = inst_13409;
var tmp13545 = inst_13411;
var tmp13546 = inst_13410;
var inst_13409__$1 = tmp13544;
var inst_13410__$1 = tmp13546;
var inst_13411__$1 = tmp13545;
var inst_13412__$1 = inst_13428;
var state_13532__$1 = (function (){var statearr_13551 = state_13532;
(statearr_13551[(13)] = inst_13409__$1);

(statearr_13551[(14)] = inst_13411__$1);

(statearr_13551[(16)] = inst_13410__$1);

(statearr_13551[(18)] = inst_13427);

(statearr_13551[(17)] = inst_13412__$1);

return statearr_13551;
})();
var statearr_13552_13631 = state_13532__$1;
(statearr_13552_13631[(2)] = null);

(statearr_13552_13631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (21))){
var inst_13454 = (state_13532[(2)]);
var state_13532__$1 = state_13532;
var statearr_13556_13632 = state_13532__$1;
(statearr_13556_13632[(2)] = inst_13454);

(statearr_13556_13632[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (31))){
var inst_13480 = (state_13532[(12)]);
var inst_13484 = done.call(null,null);
var inst_13485 = cljs.core.async.untap_STAR_.call(null,m,inst_13480);
var state_13532__$1 = (function (){var statearr_13557 = state_13532;
(statearr_13557[(19)] = inst_13484);

return statearr_13557;
})();
var statearr_13558_13633 = state_13532__$1;
(statearr_13558_13633[(2)] = inst_13485);

(statearr_13558_13633[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (32))){
var inst_13474 = (state_13532[(20)]);
var inst_13472 = (state_13532[(21)]);
var inst_13473 = (state_13532[(10)]);
var inst_13475 = (state_13532[(11)]);
var inst_13487 = (state_13532[(2)]);
var inst_13488 = (inst_13475 + (1));
var tmp13553 = inst_13474;
var tmp13554 = inst_13472;
var tmp13555 = inst_13473;
var inst_13472__$1 = tmp13554;
var inst_13473__$1 = tmp13555;
var inst_13474__$1 = tmp13553;
var inst_13475__$1 = inst_13488;
var state_13532__$1 = (function (){var statearr_13559 = state_13532;
(statearr_13559[(20)] = inst_13474__$1);

(statearr_13559[(21)] = inst_13472__$1);

(statearr_13559[(10)] = inst_13473__$1);

(statearr_13559[(11)] = inst_13475__$1);

(statearr_13559[(22)] = inst_13487);

return statearr_13559;
})();
var statearr_13560_13634 = state_13532__$1;
(statearr_13560_13634[(2)] = null);

(statearr_13560_13634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (40))){
var inst_13500 = (state_13532[(23)]);
var inst_13504 = done.call(null,null);
var inst_13505 = cljs.core.async.untap_STAR_.call(null,m,inst_13500);
var state_13532__$1 = (function (){var statearr_13561 = state_13532;
(statearr_13561[(24)] = inst_13504);

return statearr_13561;
})();
var statearr_13562_13635 = state_13532__$1;
(statearr_13562_13635[(2)] = inst_13505);

(statearr_13562_13635[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (33))){
var inst_13491 = (state_13532[(25)]);
var inst_13493 = cljs.core.chunked_seq_QMARK_.call(null,inst_13491);
var state_13532__$1 = state_13532;
if(inst_13493){
var statearr_13563_13636 = state_13532__$1;
(statearr_13563_13636[(1)] = (36));

} else {
var statearr_13564_13637 = state_13532__$1;
(statearr_13564_13637[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (13))){
var inst_13421 = (state_13532[(26)]);
var inst_13424 = cljs.core.async.close_BANG_.call(null,inst_13421);
var state_13532__$1 = state_13532;
var statearr_13565_13638 = state_13532__$1;
(statearr_13565_13638[(2)] = inst_13424);

(statearr_13565_13638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (22))){
var inst_13444 = (state_13532[(8)]);
var inst_13447 = cljs.core.async.close_BANG_.call(null,inst_13444);
var state_13532__$1 = state_13532;
var statearr_13566_13639 = state_13532__$1;
(statearr_13566_13639[(2)] = inst_13447);

(statearr_13566_13639[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (36))){
var inst_13491 = (state_13532[(25)]);
var inst_13495 = cljs.core.chunk_first.call(null,inst_13491);
var inst_13496 = cljs.core.chunk_rest.call(null,inst_13491);
var inst_13497 = cljs.core.count.call(null,inst_13495);
var inst_13472 = inst_13496;
var inst_13473 = inst_13495;
var inst_13474 = inst_13497;
var inst_13475 = (0);
var state_13532__$1 = (function (){var statearr_13567 = state_13532;
(statearr_13567[(20)] = inst_13474);

(statearr_13567[(21)] = inst_13472);

(statearr_13567[(10)] = inst_13473);

(statearr_13567[(11)] = inst_13475);

return statearr_13567;
})();
var statearr_13568_13640 = state_13532__$1;
(statearr_13568_13640[(2)] = null);

(statearr_13568_13640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (41))){
var inst_13491 = (state_13532[(25)]);
var inst_13507 = (state_13532[(2)]);
var inst_13508 = cljs.core.next.call(null,inst_13491);
var inst_13472 = inst_13508;
var inst_13473 = null;
var inst_13474 = (0);
var inst_13475 = (0);
var state_13532__$1 = (function (){var statearr_13569 = state_13532;
(statearr_13569[(27)] = inst_13507);

(statearr_13569[(20)] = inst_13474);

(statearr_13569[(21)] = inst_13472);

(statearr_13569[(10)] = inst_13473);

(statearr_13569[(11)] = inst_13475);

return statearr_13569;
})();
var statearr_13570_13641 = state_13532__$1;
(statearr_13570_13641[(2)] = null);

(statearr_13570_13641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (43))){
var state_13532__$1 = state_13532;
var statearr_13571_13642 = state_13532__$1;
(statearr_13571_13642[(2)] = null);

(statearr_13571_13642[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (29))){
var inst_13516 = (state_13532[(2)]);
var state_13532__$1 = state_13532;
var statearr_13572_13643 = state_13532__$1;
(statearr_13572_13643[(2)] = inst_13516);

(statearr_13572_13643[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (44))){
var inst_13525 = (state_13532[(2)]);
var state_13532__$1 = (function (){var statearr_13573 = state_13532;
(statearr_13573[(28)] = inst_13525);

return statearr_13573;
})();
var statearr_13574_13644 = state_13532__$1;
(statearr_13574_13644[(2)] = null);

(statearr_13574_13644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (6))){
var inst_13464 = (state_13532[(29)]);
var inst_13463 = cljs.core.deref.call(null,cs);
var inst_13464__$1 = cljs.core.keys.call(null,inst_13463);
var inst_13465 = cljs.core.count.call(null,inst_13464__$1);
var inst_13466 = cljs.core.reset_BANG_.call(null,dctr,inst_13465);
var inst_13471 = cljs.core.seq.call(null,inst_13464__$1);
var inst_13472 = inst_13471;
var inst_13473 = null;
var inst_13474 = (0);
var inst_13475 = (0);
var state_13532__$1 = (function (){var statearr_13575 = state_13532;
(statearr_13575[(20)] = inst_13474);

(statearr_13575[(21)] = inst_13472);

(statearr_13575[(10)] = inst_13473);

(statearr_13575[(29)] = inst_13464__$1);

(statearr_13575[(11)] = inst_13475);

(statearr_13575[(30)] = inst_13466);

return statearr_13575;
})();
var statearr_13576_13645 = state_13532__$1;
(statearr_13576_13645[(2)] = null);

(statearr_13576_13645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (28))){
var inst_13472 = (state_13532[(21)]);
var inst_13491 = (state_13532[(25)]);
var inst_13491__$1 = cljs.core.seq.call(null,inst_13472);
var state_13532__$1 = (function (){var statearr_13577 = state_13532;
(statearr_13577[(25)] = inst_13491__$1);

return statearr_13577;
})();
if(inst_13491__$1){
var statearr_13578_13646 = state_13532__$1;
(statearr_13578_13646[(1)] = (33));

} else {
var statearr_13579_13647 = state_13532__$1;
(statearr_13579_13647[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (25))){
var inst_13474 = (state_13532[(20)]);
var inst_13475 = (state_13532[(11)]);
var inst_13477 = (inst_13475 < inst_13474);
var inst_13478 = inst_13477;
var state_13532__$1 = state_13532;
if(cljs.core.truth_(inst_13478)){
var statearr_13580_13648 = state_13532__$1;
(statearr_13580_13648[(1)] = (27));

} else {
var statearr_13581_13649 = state_13532__$1;
(statearr_13581_13649[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (34))){
var state_13532__$1 = state_13532;
var statearr_13582_13650 = state_13532__$1;
(statearr_13582_13650[(2)] = null);

(statearr_13582_13650[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (17))){
var state_13532__$1 = state_13532;
var statearr_13583_13651 = state_13532__$1;
(statearr_13583_13651[(2)] = null);

(statearr_13583_13651[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (3))){
var inst_13530 = (state_13532[(2)]);
var state_13532__$1 = state_13532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13532__$1,inst_13530);
} else {
if((state_val_13533 === (12))){
var inst_13459 = (state_13532[(2)]);
var state_13532__$1 = state_13532;
var statearr_13584_13652 = state_13532__$1;
(statearr_13584_13652[(2)] = inst_13459);

(statearr_13584_13652[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (2))){
var state_13532__$1 = state_13532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13532__$1,(4),ch);
} else {
if((state_val_13533 === (23))){
var state_13532__$1 = state_13532;
var statearr_13585_13653 = state_13532__$1;
(statearr_13585_13653[(2)] = null);

(statearr_13585_13653[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (35))){
var inst_13514 = (state_13532[(2)]);
var state_13532__$1 = state_13532;
var statearr_13586_13654 = state_13532__$1;
(statearr_13586_13654[(2)] = inst_13514);

(statearr_13586_13654[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (19))){
var inst_13431 = (state_13532[(7)]);
var inst_13435 = cljs.core.chunk_first.call(null,inst_13431);
var inst_13436 = cljs.core.chunk_rest.call(null,inst_13431);
var inst_13437 = cljs.core.count.call(null,inst_13435);
var inst_13409 = inst_13436;
var inst_13410 = inst_13435;
var inst_13411 = inst_13437;
var inst_13412 = (0);
var state_13532__$1 = (function (){var statearr_13587 = state_13532;
(statearr_13587[(13)] = inst_13409);

(statearr_13587[(14)] = inst_13411);

(statearr_13587[(16)] = inst_13410);

(statearr_13587[(17)] = inst_13412);

return statearr_13587;
})();
var statearr_13588_13655 = state_13532__$1;
(statearr_13588_13655[(2)] = null);

(statearr_13588_13655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (11))){
var inst_13409 = (state_13532[(13)]);
var inst_13431 = (state_13532[(7)]);
var inst_13431__$1 = cljs.core.seq.call(null,inst_13409);
var state_13532__$1 = (function (){var statearr_13589 = state_13532;
(statearr_13589[(7)] = inst_13431__$1);

return statearr_13589;
})();
if(inst_13431__$1){
var statearr_13590_13656 = state_13532__$1;
(statearr_13590_13656[(1)] = (16));

} else {
var statearr_13591_13657 = state_13532__$1;
(statearr_13591_13657[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (9))){
var inst_13461 = (state_13532[(2)]);
var state_13532__$1 = state_13532;
var statearr_13592_13658 = state_13532__$1;
(statearr_13592_13658[(2)] = inst_13461);

(statearr_13592_13658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (5))){
var inst_13407 = cljs.core.deref.call(null,cs);
var inst_13408 = cljs.core.seq.call(null,inst_13407);
var inst_13409 = inst_13408;
var inst_13410 = null;
var inst_13411 = (0);
var inst_13412 = (0);
var state_13532__$1 = (function (){var statearr_13593 = state_13532;
(statearr_13593[(13)] = inst_13409);

(statearr_13593[(14)] = inst_13411);

(statearr_13593[(16)] = inst_13410);

(statearr_13593[(17)] = inst_13412);

return statearr_13593;
})();
var statearr_13594_13659 = state_13532__$1;
(statearr_13594_13659[(2)] = null);

(statearr_13594_13659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (14))){
var state_13532__$1 = state_13532;
var statearr_13595_13660 = state_13532__$1;
(statearr_13595_13660[(2)] = null);

(statearr_13595_13660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (45))){
var inst_13522 = (state_13532[(2)]);
var state_13532__$1 = state_13532;
var statearr_13596_13661 = state_13532__$1;
(statearr_13596_13661[(2)] = inst_13522);

(statearr_13596_13661[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (26))){
var inst_13464 = (state_13532[(29)]);
var inst_13518 = (state_13532[(2)]);
var inst_13519 = cljs.core.seq.call(null,inst_13464);
var state_13532__$1 = (function (){var statearr_13597 = state_13532;
(statearr_13597[(31)] = inst_13518);

return statearr_13597;
})();
if(inst_13519){
var statearr_13598_13662 = state_13532__$1;
(statearr_13598_13662[(1)] = (42));

} else {
var statearr_13599_13663 = state_13532__$1;
(statearr_13599_13663[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (16))){
var inst_13431 = (state_13532[(7)]);
var inst_13433 = cljs.core.chunked_seq_QMARK_.call(null,inst_13431);
var state_13532__$1 = state_13532;
if(inst_13433){
var statearr_13600_13664 = state_13532__$1;
(statearr_13600_13664[(1)] = (19));

} else {
var statearr_13601_13665 = state_13532__$1;
(statearr_13601_13665[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (38))){
var inst_13511 = (state_13532[(2)]);
var state_13532__$1 = state_13532;
var statearr_13602_13666 = state_13532__$1;
(statearr_13602_13666[(2)] = inst_13511);

(statearr_13602_13666[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (30))){
var state_13532__$1 = state_13532;
var statearr_13603_13667 = state_13532__$1;
(statearr_13603_13667[(2)] = null);

(statearr_13603_13667[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (10))){
var inst_13410 = (state_13532[(16)]);
var inst_13412 = (state_13532[(17)]);
var inst_13420 = cljs.core._nth.call(null,inst_13410,inst_13412);
var inst_13421 = cljs.core.nth.call(null,inst_13420,(0),null);
var inst_13422 = cljs.core.nth.call(null,inst_13420,(1),null);
var state_13532__$1 = (function (){var statearr_13604 = state_13532;
(statearr_13604[(26)] = inst_13421);

return statearr_13604;
})();
if(cljs.core.truth_(inst_13422)){
var statearr_13605_13668 = state_13532__$1;
(statearr_13605_13668[(1)] = (13));

} else {
var statearr_13606_13669 = state_13532__$1;
(statearr_13606_13669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (18))){
var inst_13457 = (state_13532[(2)]);
var state_13532__$1 = state_13532;
var statearr_13607_13670 = state_13532__$1;
(statearr_13607_13670[(2)] = inst_13457);

(statearr_13607_13670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (42))){
var state_13532__$1 = state_13532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13532__$1,(45),dchan);
} else {
if((state_val_13533 === (37))){
var inst_13400 = (state_13532[(9)]);
var inst_13500 = (state_13532[(23)]);
var inst_13491 = (state_13532[(25)]);
var inst_13500__$1 = cljs.core.first.call(null,inst_13491);
var inst_13501 = cljs.core.async.put_BANG_.call(null,inst_13500__$1,inst_13400,done);
var state_13532__$1 = (function (){var statearr_13608 = state_13532;
(statearr_13608[(23)] = inst_13500__$1);

return statearr_13608;
})();
if(cljs.core.truth_(inst_13501)){
var statearr_13609_13671 = state_13532__$1;
(statearr_13609_13671[(1)] = (39));

} else {
var statearr_13610_13672 = state_13532__$1;
(statearr_13610_13672[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (8))){
var inst_13411 = (state_13532[(14)]);
var inst_13412 = (state_13532[(17)]);
var inst_13414 = (inst_13412 < inst_13411);
var inst_13415 = inst_13414;
var state_13532__$1 = state_13532;
if(cljs.core.truth_(inst_13415)){
var statearr_13611_13673 = state_13532__$1;
(statearr_13611_13673[(1)] = (10));

} else {
var statearr_13612_13674 = state_13532__$1;
(statearr_13612_13674[(1)] = (11));

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
});})(c__12297__auto___13620,cs,m,dchan,dctr,done))
;
return ((function (switch__12185__auto__,c__12297__auto___13620,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12186__auto__ = null;
var cljs$core$async$mult_$_state_machine__12186__auto____0 = (function (){
var statearr_13616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13616[(0)] = cljs$core$async$mult_$_state_machine__12186__auto__);

(statearr_13616[(1)] = (1));

return statearr_13616;
});
var cljs$core$async$mult_$_state_machine__12186__auto____1 = (function (state_13532){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_13532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e13617){if((e13617 instanceof Object)){
var ex__12189__auto__ = e13617;
var statearr_13618_13675 = state_13532;
(statearr_13618_13675[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13676 = state_13532;
state_13532 = G__13676;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12186__auto__ = function(state_13532){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12186__auto____1.call(this,state_13532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12186__auto____0;
cljs$core$async$mult_$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12186__auto____1;
return cljs$core$async$mult_$_state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto___13620,cs,m,dchan,dctr,done))
})();
var state__12299__auto__ = (function (){var statearr_13619 = f__12298__auto__.call(null);
(statearr_13619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto___13620);

return statearr_13619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto___13620,cs,m,dchan,dctr,done))
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
var args13677 = [];
var len__7652__auto___13680 = arguments.length;
var i__7653__auto___13681 = (0);
while(true){
if((i__7653__auto___13681 < len__7652__auto___13680)){
args13677.push((arguments[i__7653__auto___13681]));

var G__13682 = (i__7653__auto___13681 + (1));
i__7653__auto___13681 = G__13682;
continue;
} else {
}
break;
}

var G__13679 = args13677.length;
switch (G__13679) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13677.length)].join('')));

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
var len__7652__auto___13694 = arguments.length;
var i__7653__auto___13695 = (0);
while(true){
if((i__7653__auto___13695 < len__7652__auto___13694)){
args__7659__auto__.push((arguments[i__7653__auto___13695]));

var G__13696 = (i__7653__auto___13695 + (1));
i__7653__auto___13695 = G__13696;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((3) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7660__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13688){
var map__13689 = p__13688;
var map__13689__$1 = ((((!((map__13689 == null)))?((((map__13689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13689):map__13689);
var opts = map__13689__$1;
var statearr_13691_13697 = state;
(statearr_13691_13697[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__13689,map__13689__$1,opts){
return (function (val){
var statearr_13692_13698 = state;
(statearr_13692_13698[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13689,map__13689__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_13693_13699 = state;
(statearr_13693_13699[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13684){
var G__13685 = cljs.core.first.call(null,seq13684);
var seq13684__$1 = cljs.core.next.call(null,seq13684);
var G__13686 = cljs.core.first.call(null,seq13684__$1);
var seq13684__$2 = cljs.core.next.call(null,seq13684__$1);
var G__13687 = cljs.core.first.call(null,seq13684__$2);
var seq13684__$3 = cljs.core.next.call(null,seq13684__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13685,G__13686,G__13687,seq13684__$3);
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
if(typeof cljs.core.async.t_cljs$core$async13865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13865 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13866){
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
this.meta13866 = meta13866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13867,meta13866__$1){
var self__ = this;
var _13867__$1 = this;
return (new cljs.core.async.t_cljs$core$async13865(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13866__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13867){
var self__ = this;
var _13867__$1 = this;
return self__.meta13866;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async13865.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13866","meta13866",-211046527,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13865";

cljs.core.async.t_cljs$core$async13865.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async13865");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13865 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13865(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13866){
return (new cljs.core.async.t_cljs$core$async13865(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13866));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13865(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12297__auto___14030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto___14030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto___14030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13967){
var state_val_13968 = (state_13967[(1)]);
if((state_val_13968 === (7))){
var inst_13883 = (state_13967[(2)]);
var state_13967__$1 = state_13967;
var statearr_13969_14031 = state_13967__$1;
(statearr_13969_14031[(2)] = inst_13883);

(statearr_13969_14031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (20))){
var inst_13895 = (state_13967[(7)]);
var state_13967__$1 = state_13967;
var statearr_13970_14032 = state_13967__$1;
(statearr_13970_14032[(2)] = inst_13895);

(statearr_13970_14032[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (27))){
var state_13967__$1 = state_13967;
var statearr_13971_14033 = state_13967__$1;
(statearr_13971_14033[(2)] = null);

(statearr_13971_14033[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (1))){
var inst_13871 = (state_13967[(8)]);
var inst_13871__$1 = calc_state.call(null);
var inst_13873 = (inst_13871__$1 == null);
var inst_13874 = cljs.core.not.call(null,inst_13873);
var state_13967__$1 = (function (){var statearr_13972 = state_13967;
(statearr_13972[(8)] = inst_13871__$1);

return statearr_13972;
})();
if(inst_13874){
var statearr_13973_14034 = state_13967__$1;
(statearr_13973_14034[(1)] = (2));

} else {
var statearr_13974_14035 = state_13967__$1;
(statearr_13974_14035[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (24))){
var inst_13941 = (state_13967[(9)]);
var inst_13918 = (state_13967[(10)]);
var inst_13927 = (state_13967[(11)]);
var inst_13941__$1 = inst_13918.call(null,inst_13927);
var state_13967__$1 = (function (){var statearr_13975 = state_13967;
(statearr_13975[(9)] = inst_13941__$1);

return statearr_13975;
})();
if(cljs.core.truth_(inst_13941__$1)){
var statearr_13976_14036 = state_13967__$1;
(statearr_13976_14036[(1)] = (29));

} else {
var statearr_13977_14037 = state_13967__$1;
(statearr_13977_14037[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (4))){
var inst_13886 = (state_13967[(2)]);
var state_13967__$1 = state_13967;
if(cljs.core.truth_(inst_13886)){
var statearr_13978_14038 = state_13967__$1;
(statearr_13978_14038[(1)] = (8));

} else {
var statearr_13979_14039 = state_13967__$1;
(statearr_13979_14039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (15))){
var inst_13912 = (state_13967[(2)]);
var state_13967__$1 = state_13967;
if(cljs.core.truth_(inst_13912)){
var statearr_13980_14040 = state_13967__$1;
(statearr_13980_14040[(1)] = (19));

} else {
var statearr_13981_14041 = state_13967__$1;
(statearr_13981_14041[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (21))){
var inst_13917 = (state_13967[(12)]);
var inst_13917__$1 = (state_13967[(2)]);
var inst_13918 = cljs.core.get.call(null,inst_13917__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13919 = cljs.core.get.call(null,inst_13917__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13920 = cljs.core.get.call(null,inst_13917__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13967__$1 = (function (){var statearr_13982 = state_13967;
(statearr_13982[(12)] = inst_13917__$1);

(statearr_13982[(13)] = inst_13919);

(statearr_13982[(10)] = inst_13918);

return statearr_13982;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13967__$1,(22),inst_13920);
} else {
if((state_val_13968 === (31))){
var inst_13949 = (state_13967[(2)]);
var state_13967__$1 = state_13967;
if(cljs.core.truth_(inst_13949)){
var statearr_13983_14042 = state_13967__$1;
(statearr_13983_14042[(1)] = (32));

} else {
var statearr_13984_14043 = state_13967__$1;
(statearr_13984_14043[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (32))){
var inst_13926 = (state_13967[(14)]);
var state_13967__$1 = state_13967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13967__$1,(35),out,inst_13926);
} else {
if((state_val_13968 === (33))){
var inst_13917 = (state_13967[(12)]);
var inst_13895 = inst_13917;
var state_13967__$1 = (function (){var statearr_13985 = state_13967;
(statearr_13985[(7)] = inst_13895);

return statearr_13985;
})();
var statearr_13986_14044 = state_13967__$1;
(statearr_13986_14044[(2)] = null);

(statearr_13986_14044[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (13))){
var inst_13895 = (state_13967[(7)]);
var inst_13902 = inst_13895.cljs$lang$protocol_mask$partition0$;
var inst_13903 = (inst_13902 & (64));
var inst_13904 = inst_13895.cljs$core$ISeq$;
var inst_13905 = (inst_13903) || (inst_13904);
var state_13967__$1 = state_13967;
if(cljs.core.truth_(inst_13905)){
var statearr_13987_14045 = state_13967__$1;
(statearr_13987_14045[(1)] = (16));

} else {
var statearr_13988_14046 = state_13967__$1;
(statearr_13988_14046[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (22))){
var inst_13926 = (state_13967[(14)]);
var inst_13927 = (state_13967[(11)]);
var inst_13925 = (state_13967[(2)]);
var inst_13926__$1 = cljs.core.nth.call(null,inst_13925,(0),null);
var inst_13927__$1 = cljs.core.nth.call(null,inst_13925,(1),null);
var inst_13928 = (inst_13926__$1 == null);
var inst_13929 = cljs.core._EQ_.call(null,inst_13927__$1,change);
var inst_13930 = (inst_13928) || (inst_13929);
var state_13967__$1 = (function (){var statearr_13989 = state_13967;
(statearr_13989[(14)] = inst_13926__$1);

(statearr_13989[(11)] = inst_13927__$1);

return statearr_13989;
})();
if(cljs.core.truth_(inst_13930)){
var statearr_13990_14047 = state_13967__$1;
(statearr_13990_14047[(1)] = (23));

} else {
var statearr_13991_14048 = state_13967__$1;
(statearr_13991_14048[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (36))){
var inst_13917 = (state_13967[(12)]);
var inst_13895 = inst_13917;
var state_13967__$1 = (function (){var statearr_13992 = state_13967;
(statearr_13992[(7)] = inst_13895);

return statearr_13992;
})();
var statearr_13993_14049 = state_13967__$1;
(statearr_13993_14049[(2)] = null);

(statearr_13993_14049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (29))){
var inst_13941 = (state_13967[(9)]);
var state_13967__$1 = state_13967;
var statearr_13994_14050 = state_13967__$1;
(statearr_13994_14050[(2)] = inst_13941);

(statearr_13994_14050[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (6))){
var state_13967__$1 = state_13967;
var statearr_13995_14051 = state_13967__$1;
(statearr_13995_14051[(2)] = false);

(statearr_13995_14051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (28))){
var inst_13937 = (state_13967[(2)]);
var inst_13938 = calc_state.call(null);
var inst_13895 = inst_13938;
var state_13967__$1 = (function (){var statearr_13996 = state_13967;
(statearr_13996[(15)] = inst_13937);

(statearr_13996[(7)] = inst_13895);

return statearr_13996;
})();
var statearr_13997_14052 = state_13967__$1;
(statearr_13997_14052[(2)] = null);

(statearr_13997_14052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (25))){
var inst_13963 = (state_13967[(2)]);
var state_13967__$1 = state_13967;
var statearr_13998_14053 = state_13967__$1;
(statearr_13998_14053[(2)] = inst_13963);

(statearr_13998_14053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (34))){
var inst_13961 = (state_13967[(2)]);
var state_13967__$1 = state_13967;
var statearr_13999_14054 = state_13967__$1;
(statearr_13999_14054[(2)] = inst_13961);

(statearr_13999_14054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (17))){
var state_13967__$1 = state_13967;
var statearr_14000_14055 = state_13967__$1;
(statearr_14000_14055[(2)] = false);

(statearr_14000_14055[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (3))){
var state_13967__$1 = state_13967;
var statearr_14001_14056 = state_13967__$1;
(statearr_14001_14056[(2)] = false);

(statearr_14001_14056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (12))){
var inst_13965 = (state_13967[(2)]);
var state_13967__$1 = state_13967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13967__$1,inst_13965);
} else {
if((state_val_13968 === (2))){
var inst_13871 = (state_13967[(8)]);
var inst_13876 = inst_13871.cljs$lang$protocol_mask$partition0$;
var inst_13877 = (inst_13876 & (64));
var inst_13878 = inst_13871.cljs$core$ISeq$;
var inst_13879 = (inst_13877) || (inst_13878);
var state_13967__$1 = state_13967;
if(cljs.core.truth_(inst_13879)){
var statearr_14002_14057 = state_13967__$1;
(statearr_14002_14057[(1)] = (5));

} else {
var statearr_14003_14058 = state_13967__$1;
(statearr_14003_14058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (23))){
var inst_13926 = (state_13967[(14)]);
var inst_13932 = (inst_13926 == null);
var state_13967__$1 = state_13967;
if(cljs.core.truth_(inst_13932)){
var statearr_14004_14059 = state_13967__$1;
(statearr_14004_14059[(1)] = (26));

} else {
var statearr_14005_14060 = state_13967__$1;
(statearr_14005_14060[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (35))){
var inst_13952 = (state_13967[(2)]);
var state_13967__$1 = state_13967;
if(cljs.core.truth_(inst_13952)){
var statearr_14006_14061 = state_13967__$1;
(statearr_14006_14061[(1)] = (36));

} else {
var statearr_14007_14062 = state_13967__$1;
(statearr_14007_14062[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (19))){
var inst_13895 = (state_13967[(7)]);
var inst_13914 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13895);
var state_13967__$1 = state_13967;
var statearr_14008_14063 = state_13967__$1;
(statearr_14008_14063[(2)] = inst_13914);

(statearr_14008_14063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (11))){
var inst_13895 = (state_13967[(7)]);
var inst_13899 = (inst_13895 == null);
var inst_13900 = cljs.core.not.call(null,inst_13899);
var state_13967__$1 = state_13967;
if(inst_13900){
var statearr_14009_14064 = state_13967__$1;
(statearr_14009_14064[(1)] = (13));

} else {
var statearr_14010_14065 = state_13967__$1;
(statearr_14010_14065[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (9))){
var inst_13871 = (state_13967[(8)]);
var state_13967__$1 = state_13967;
var statearr_14011_14066 = state_13967__$1;
(statearr_14011_14066[(2)] = inst_13871);

(statearr_14011_14066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (5))){
var state_13967__$1 = state_13967;
var statearr_14012_14067 = state_13967__$1;
(statearr_14012_14067[(2)] = true);

(statearr_14012_14067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (14))){
var state_13967__$1 = state_13967;
var statearr_14013_14068 = state_13967__$1;
(statearr_14013_14068[(2)] = false);

(statearr_14013_14068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (26))){
var inst_13927 = (state_13967[(11)]);
var inst_13934 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13927);
var state_13967__$1 = state_13967;
var statearr_14014_14069 = state_13967__$1;
(statearr_14014_14069[(2)] = inst_13934);

(statearr_14014_14069[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (16))){
var state_13967__$1 = state_13967;
var statearr_14015_14070 = state_13967__$1;
(statearr_14015_14070[(2)] = true);

(statearr_14015_14070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (38))){
var inst_13957 = (state_13967[(2)]);
var state_13967__$1 = state_13967;
var statearr_14016_14071 = state_13967__$1;
(statearr_14016_14071[(2)] = inst_13957);

(statearr_14016_14071[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (30))){
var inst_13919 = (state_13967[(13)]);
var inst_13918 = (state_13967[(10)]);
var inst_13927 = (state_13967[(11)]);
var inst_13944 = cljs.core.empty_QMARK_.call(null,inst_13918);
var inst_13945 = inst_13919.call(null,inst_13927);
var inst_13946 = cljs.core.not.call(null,inst_13945);
var inst_13947 = (inst_13944) && (inst_13946);
var state_13967__$1 = state_13967;
var statearr_14017_14072 = state_13967__$1;
(statearr_14017_14072[(2)] = inst_13947);

(statearr_14017_14072[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (10))){
var inst_13871 = (state_13967[(8)]);
var inst_13891 = (state_13967[(2)]);
var inst_13892 = cljs.core.get.call(null,inst_13891,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13893 = cljs.core.get.call(null,inst_13891,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13894 = cljs.core.get.call(null,inst_13891,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13895 = inst_13871;
var state_13967__$1 = (function (){var statearr_14018 = state_13967;
(statearr_14018[(16)] = inst_13892);

(statearr_14018[(17)] = inst_13893);

(statearr_14018[(7)] = inst_13895);

(statearr_14018[(18)] = inst_13894);

return statearr_14018;
})();
var statearr_14019_14073 = state_13967__$1;
(statearr_14019_14073[(2)] = null);

(statearr_14019_14073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (18))){
var inst_13909 = (state_13967[(2)]);
var state_13967__$1 = state_13967;
var statearr_14020_14074 = state_13967__$1;
(statearr_14020_14074[(2)] = inst_13909);

(statearr_14020_14074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (37))){
var state_13967__$1 = state_13967;
var statearr_14021_14075 = state_13967__$1;
(statearr_14021_14075[(2)] = null);

(statearr_14021_14075[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (8))){
var inst_13871 = (state_13967[(8)]);
var inst_13888 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13871);
var state_13967__$1 = state_13967;
var statearr_14022_14076 = state_13967__$1;
(statearr_14022_14076[(2)] = inst_13888);

(statearr_14022_14076[(1)] = (10));


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
});})(c__12297__auto___14030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12185__auto__,c__12297__auto___14030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12186__auto__ = null;
var cljs$core$async$mix_$_state_machine__12186__auto____0 = (function (){
var statearr_14026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14026[(0)] = cljs$core$async$mix_$_state_machine__12186__auto__);

(statearr_14026[(1)] = (1));

return statearr_14026;
});
var cljs$core$async$mix_$_state_machine__12186__auto____1 = (function (state_13967){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_13967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e14027){if((e14027 instanceof Object)){
var ex__12189__auto__ = e14027;
var statearr_14028_14077 = state_13967;
(statearr_14028_14077[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14078 = state_13967;
state_13967 = G__14078;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12186__auto__ = function(state_13967){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12186__auto____1.call(this,state_13967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12186__auto____0;
cljs$core$async$mix_$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12186__auto____1;
return cljs$core$async$mix_$_state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto___14030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12299__auto__ = (function (){var statearr_14029 = f__12298__auto__.call(null);
(statearr_14029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto___14030);

return statearr_14029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto___14030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args14079 = [];
var len__7652__auto___14082 = arguments.length;
var i__7653__auto___14083 = (0);
while(true){
if((i__7653__auto___14083 < len__7652__auto___14082)){
args14079.push((arguments[i__7653__auto___14083]));

var G__14084 = (i__7653__auto___14083 + (1));
i__7653__auto___14083 = G__14084;
continue;
} else {
}
break;
}

var G__14081 = args14079.length;
switch (G__14081) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14079.length)].join('')));

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
var args14087 = [];
var len__7652__auto___14212 = arguments.length;
var i__7653__auto___14213 = (0);
while(true){
if((i__7653__auto___14213 < len__7652__auto___14212)){
args14087.push((arguments[i__7653__auto___14213]));

var G__14214 = (i__7653__auto___14213 + (1));
i__7653__auto___14213 = G__14214;
continue;
} else {
}
break;
}

var G__14089 = args14087.length;
switch (G__14089) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14087.length)].join('')));

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
return (function (p1__14086_SHARP_){
if(cljs.core.truth_(p1__14086_SHARP_.call(null,topic))){
return p1__14086_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14086_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6577__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14090 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14091){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14091 = meta14091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14092,meta14091__$1){
var self__ = this;
var _14092__$1 = this;
return (new cljs.core.async.t_cljs$core$async14090(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14091__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14090.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14092){
var self__ = this;
var _14092__$1 = this;
return self__.meta14091;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14090.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14090.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14090.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14090.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14090.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async14090.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14090.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14090.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14091","meta14091",2006922943,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14090.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14090";

cljs.core.async.t_cljs$core$async14090.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async14090");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14090 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14090(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14091){
return (new cljs.core.async.t_cljs$core$async14090(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14091));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14090(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12297__auto___14216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto___14216,mults,ensure_mult,p){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto___14216,mults,ensure_mult,p){
return (function (state_14164){
var state_val_14165 = (state_14164[(1)]);
if((state_val_14165 === (7))){
var inst_14160 = (state_14164[(2)]);
var state_14164__$1 = state_14164;
var statearr_14166_14217 = state_14164__$1;
(statearr_14166_14217[(2)] = inst_14160);

(statearr_14166_14217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (20))){
var state_14164__$1 = state_14164;
var statearr_14167_14218 = state_14164__$1;
(statearr_14167_14218[(2)] = null);

(statearr_14167_14218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (1))){
var state_14164__$1 = state_14164;
var statearr_14168_14219 = state_14164__$1;
(statearr_14168_14219[(2)] = null);

(statearr_14168_14219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (24))){
var inst_14143 = (state_14164[(7)]);
var inst_14152 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14143);
var state_14164__$1 = state_14164;
var statearr_14169_14220 = state_14164__$1;
(statearr_14169_14220[(2)] = inst_14152);

(statearr_14169_14220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (4))){
var inst_14095 = (state_14164[(8)]);
var inst_14095__$1 = (state_14164[(2)]);
var inst_14096 = (inst_14095__$1 == null);
var state_14164__$1 = (function (){var statearr_14170 = state_14164;
(statearr_14170[(8)] = inst_14095__$1);

return statearr_14170;
})();
if(cljs.core.truth_(inst_14096)){
var statearr_14171_14221 = state_14164__$1;
(statearr_14171_14221[(1)] = (5));

} else {
var statearr_14172_14222 = state_14164__$1;
(statearr_14172_14222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (15))){
var inst_14137 = (state_14164[(2)]);
var state_14164__$1 = state_14164;
var statearr_14173_14223 = state_14164__$1;
(statearr_14173_14223[(2)] = inst_14137);

(statearr_14173_14223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (21))){
var inst_14157 = (state_14164[(2)]);
var state_14164__$1 = (function (){var statearr_14174 = state_14164;
(statearr_14174[(9)] = inst_14157);

return statearr_14174;
})();
var statearr_14175_14224 = state_14164__$1;
(statearr_14175_14224[(2)] = null);

(statearr_14175_14224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (13))){
var inst_14119 = (state_14164[(10)]);
var inst_14121 = cljs.core.chunked_seq_QMARK_.call(null,inst_14119);
var state_14164__$1 = state_14164;
if(inst_14121){
var statearr_14176_14225 = state_14164__$1;
(statearr_14176_14225[(1)] = (16));

} else {
var statearr_14177_14226 = state_14164__$1;
(statearr_14177_14226[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (22))){
var inst_14149 = (state_14164[(2)]);
var state_14164__$1 = state_14164;
if(cljs.core.truth_(inst_14149)){
var statearr_14178_14227 = state_14164__$1;
(statearr_14178_14227[(1)] = (23));

} else {
var statearr_14179_14228 = state_14164__$1;
(statearr_14179_14228[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (6))){
var inst_14143 = (state_14164[(7)]);
var inst_14095 = (state_14164[(8)]);
var inst_14145 = (state_14164[(11)]);
var inst_14143__$1 = topic_fn.call(null,inst_14095);
var inst_14144 = cljs.core.deref.call(null,mults);
var inst_14145__$1 = cljs.core.get.call(null,inst_14144,inst_14143__$1);
var state_14164__$1 = (function (){var statearr_14180 = state_14164;
(statearr_14180[(7)] = inst_14143__$1);

(statearr_14180[(11)] = inst_14145__$1);

return statearr_14180;
})();
if(cljs.core.truth_(inst_14145__$1)){
var statearr_14181_14229 = state_14164__$1;
(statearr_14181_14229[(1)] = (19));

} else {
var statearr_14182_14230 = state_14164__$1;
(statearr_14182_14230[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (25))){
var inst_14154 = (state_14164[(2)]);
var state_14164__$1 = state_14164;
var statearr_14183_14231 = state_14164__$1;
(statearr_14183_14231[(2)] = inst_14154);

(statearr_14183_14231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (17))){
var inst_14119 = (state_14164[(10)]);
var inst_14128 = cljs.core.first.call(null,inst_14119);
var inst_14129 = cljs.core.async.muxch_STAR_.call(null,inst_14128);
var inst_14130 = cljs.core.async.close_BANG_.call(null,inst_14129);
var inst_14131 = cljs.core.next.call(null,inst_14119);
var inst_14105 = inst_14131;
var inst_14106 = null;
var inst_14107 = (0);
var inst_14108 = (0);
var state_14164__$1 = (function (){var statearr_14184 = state_14164;
(statearr_14184[(12)] = inst_14107);

(statearr_14184[(13)] = inst_14105);

(statearr_14184[(14)] = inst_14106);

(statearr_14184[(15)] = inst_14130);

(statearr_14184[(16)] = inst_14108);

return statearr_14184;
})();
var statearr_14185_14232 = state_14164__$1;
(statearr_14185_14232[(2)] = null);

(statearr_14185_14232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (3))){
var inst_14162 = (state_14164[(2)]);
var state_14164__$1 = state_14164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14164__$1,inst_14162);
} else {
if((state_val_14165 === (12))){
var inst_14139 = (state_14164[(2)]);
var state_14164__$1 = state_14164;
var statearr_14186_14233 = state_14164__$1;
(statearr_14186_14233[(2)] = inst_14139);

(statearr_14186_14233[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (2))){
var state_14164__$1 = state_14164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14164__$1,(4),ch);
} else {
if((state_val_14165 === (23))){
var state_14164__$1 = state_14164;
var statearr_14187_14234 = state_14164__$1;
(statearr_14187_14234[(2)] = null);

(statearr_14187_14234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (19))){
var inst_14095 = (state_14164[(8)]);
var inst_14145 = (state_14164[(11)]);
var inst_14147 = cljs.core.async.muxch_STAR_.call(null,inst_14145);
var state_14164__$1 = state_14164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14164__$1,(22),inst_14147,inst_14095);
} else {
if((state_val_14165 === (11))){
var inst_14119 = (state_14164[(10)]);
var inst_14105 = (state_14164[(13)]);
var inst_14119__$1 = cljs.core.seq.call(null,inst_14105);
var state_14164__$1 = (function (){var statearr_14188 = state_14164;
(statearr_14188[(10)] = inst_14119__$1);

return statearr_14188;
})();
if(inst_14119__$1){
var statearr_14189_14235 = state_14164__$1;
(statearr_14189_14235[(1)] = (13));

} else {
var statearr_14190_14236 = state_14164__$1;
(statearr_14190_14236[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (9))){
var inst_14141 = (state_14164[(2)]);
var state_14164__$1 = state_14164;
var statearr_14191_14237 = state_14164__$1;
(statearr_14191_14237[(2)] = inst_14141);

(statearr_14191_14237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (5))){
var inst_14102 = cljs.core.deref.call(null,mults);
var inst_14103 = cljs.core.vals.call(null,inst_14102);
var inst_14104 = cljs.core.seq.call(null,inst_14103);
var inst_14105 = inst_14104;
var inst_14106 = null;
var inst_14107 = (0);
var inst_14108 = (0);
var state_14164__$1 = (function (){var statearr_14192 = state_14164;
(statearr_14192[(12)] = inst_14107);

(statearr_14192[(13)] = inst_14105);

(statearr_14192[(14)] = inst_14106);

(statearr_14192[(16)] = inst_14108);

return statearr_14192;
})();
var statearr_14193_14238 = state_14164__$1;
(statearr_14193_14238[(2)] = null);

(statearr_14193_14238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (14))){
var state_14164__$1 = state_14164;
var statearr_14197_14239 = state_14164__$1;
(statearr_14197_14239[(2)] = null);

(statearr_14197_14239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (16))){
var inst_14119 = (state_14164[(10)]);
var inst_14123 = cljs.core.chunk_first.call(null,inst_14119);
var inst_14124 = cljs.core.chunk_rest.call(null,inst_14119);
var inst_14125 = cljs.core.count.call(null,inst_14123);
var inst_14105 = inst_14124;
var inst_14106 = inst_14123;
var inst_14107 = inst_14125;
var inst_14108 = (0);
var state_14164__$1 = (function (){var statearr_14198 = state_14164;
(statearr_14198[(12)] = inst_14107);

(statearr_14198[(13)] = inst_14105);

(statearr_14198[(14)] = inst_14106);

(statearr_14198[(16)] = inst_14108);

return statearr_14198;
})();
var statearr_14199_14240 = state_14164__$1;
(statearr_14199_14240[(2)] = null);

(statearr_14199_14240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (10))){
var inst_14107 = (state_14164[(12)]);
var inst_14105 = (state_14164[(13)]);
var inst_14106 = (state_14164[(14)]);
var inst_14108 = (state_14164[(16)]);
var inst_14113 = cljs.core._nth.call(null,inst_14106,inst_14108);
var inst_14114 = cljs.core.async.muxch_STAR_.call(null,inst_14113);
var inst_14115 = cljs.core.async.close_BANG_.call(null,inst_14114);
var inst_14116 = (inst_14108 + (1));
var tmp14194 = inst_14107;
var tmp14195 = inst_14105;
var tmp14196 = inst_14106;
var inst_14105__$1 = tmp14195;
var inst_14106__$1 = tmp14196;
var inst_14107__$1 = tmp14194;
var inst_14108__$1 = inst_14116;
var state_14164__$1 = (function (){var statearr_14200 = state_14164;
(statearr_14200[(12)] = inst_14107__$1);

(statearr_14200[(13)] = inst_14105__$1);

(statearr_14200[(14)] = inst_14106__$1);

(statearr_14200[(17)] = inst_14115);

(statearr_14200[(16)] = inst_14108__$1);

return statearr_14200;
})();
var statearr_14201_14241 = state_14164__$1;
(statearr_14201_14241[(2)] = null);

(statearr_14201_14241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (18))){
var inst_14134 = (state_14164[(2)]);
var state_14164__$1 = state_14164;
var statearr_14202_14242 = state_14164__$1;
(statearr_14202_14242[(2)] = inst_14134);

(statearr_14202_14242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14165 === (8))){
var inst_14107 = (state_14164[(12)]);
var inst_14108 = (state_14164[(16)]);
var inst_14110 = (inst_14108 < inst_14107);
var inst_14111 = inst_14110;
var state_14164__$1 = state_14164;
if(cljs.core.truth_(inst_14111)){
var statearr_14203_14243 = state_14164__$1;
(statearr_14203_14243[(1)] = (10));

} else {
var statearr_14204_14244 = state_14164__$1;
(statearr_14204_14244[(1)] = (11));

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
});})(c__12297__auto___14216,mults,ensure_mult,p))
;
return ((function (switch__12185__auto__,c__12297__auto___14216,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12186__auto__ = null;
var cljs$core$async$state_machine__12186__auto____0 = (function (){
var statearr_14208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14208[(0)] = cljs$core$async$state_machine__12186__auto__);

(statearr_14208[(1)] = (1));

return statearr_14208;
});
var cljs$core$async$state_machine__12186__auto____1 = (function (state_14164){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_14164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e14209){if((e14209 instanceof Object)){
var ex__12189__auto__ = e14209;
var statearr_14210_14245 = state_14164;
(statearr_14210_14245[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14246 = state_14164;
state_14164 = G__14246;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$state_machine__12186__auto__ = function(state_14164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12186__auto____1.call(this,state_14164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12186__auto____0;
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12186__auto____1;
return cljs$core$async$state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto___14216,mults,ensure_mult,p))
})();
var state__12299__auto__ = (function (){var statearr_14211 = f__12298__auto__.call(null);
(statearr_14211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto___14216);

return statearr_14211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto___14216,mults,ensure_mult,p))
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
var args14247 = [];
var len__7652__auto___14250 = arguments.length;
var i__7653__auto___14251 = (0);
while(true){
if((i__7653__auto___14251 < len__7652__auto___14250)){
args14247.push((arguments[i__7653__auto___14251]));

var G__14252 = (i__7653__auto___14251 + (1));
i__7653__auto___14251 = G__14252;
continue;
} else {
}
break;
}

var G__14249 = args14247.length;
switch (G__14249) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14247.length)].join('')));

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
var args14254 = [];
var len__7652__auto___14257 = arguments.length;
var i__7653__auto___14258 = (0);
while(true){
if((i__7653__auto___14258 < len__7652__auto___14257)){
args14254.push((arguments[i__7653__auto___14258]));

var G__14259 = (i__7653__auto___14258 + (1));
i__7653__auto___14258 = G__14259;
continue;
} else {
}
break;
}

var G__14256 = args14254.length;
switch (G__14256) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14254.length)].join('')));

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
var args14261 = [];
var len__7652__auto___14332 = arguments.length;
var i__7653__auto___14333 = (0);
while(true){
if((i__7653__auto___14333 < len__7652__auto___14332)){
args14261.push((arguments[i__7653__auto___14333]));

var G__14334 = (i__7653__auto___14333 + (1));
i__7653__auto___14333 = G__14334;
continue;
} else {
}
break;
}

var G__14263 = args14261.length;
switch (G__14263) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14261.length)].join('')));

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
var c__12297__auto___14336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto___14336,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto___14336,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14302){
var state_val_14303 = (state_14302[(1)]);
if((state_val_14303 === (7))){
var state_14302__$1 = state_14302;
var statearr_14304_14337 = state_14302__$1;
(statearr_14304_14337[(2)] = null);

(statearr_14304_14337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14303 === (1))){
var state_14302__$1 = state_14302;
var statearr_14305_14338 = state_14302__$1;
(statearr_14305_14338[(2)] = null);

(statearr_14305_14338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14303 === (4))){
var inst_14266 = (state_14302[(7)]);
var inst_14268 = (inst_14266 < cnt);
var state_14302__$1 = state_14302;
if(cljs.core.truth_(inst_14268)){
var statearr_14306_14339 = state_14302__$1;
(statearr_14306_14339[(1)] = (6));

} else {
var statearr_14307_14340 = state_14302__$1;
(statearr_14307_14340[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14303 === (15))){
var inst_14298 = (state_14302[(2)]);
var state_14302__$1 = state_14302;
var statearr_14308_14341 = state_14302__$1;
(statearr_14308_14341[(2)] = inst_14298);

(statearr_14308_14341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14303 === (13))){
var inst_14291 = cljs.core.async.close_BANG_.call(null,out);
var state_14302__$1 = state_14302;
var statearr_14309_14342 = state_14302__$1;
(statearr_14309_14342[(2)] = inst_14291);

(statearr_14309_14342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14303 === (6))){
var state_14302__$1 = state_14302;
var statearr_14310_14343 = state_14302__$1;
(statearr_14310_14343[(2)] = null);

(statearr_14310_14343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14303 === (3))){
var inst_14300 = (state_14302[(2)]);
var state_14302__$1 = state_14302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14302__$1,inst_14300);
} else {
if((state_val_14303 === (12))){
var inst_14288 = (state_14302[(8)]);
var inst_14288__$1 = (state_14302[(2)]);
var inst_14289 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14288__$1);
var state_14302__$1 = (function (){var statearr_14311 = state_14302;
(statearr_14311[(8)] = inst_14288__$1);

return statearr_14311;
})();
if(cljs.core.truth_(inst_14289)){
var statearr_14312_14344 = state_14302__$1;
(statearr_14312_14344[(1)] = (13));

} else {
var statearr_14313_14345 = state_14302__$1;
(statearr_14313_14345[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14303 === (2))){
var inst_14265 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14266 = (0);
var state_14302__$1 = (function (){var statearr_14314 = state_14302;
(statearr_14314[(7)] = inst_14266);

(statearr_14314[(9)] = inst_14265);

return statearr_14314;
})();
var statearr_14315_14346 = state_14302__$1;
(statearr_14315_14346[(2)] = null);

(statearr_14315_14346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14303 === (11))){
var inst_14266 = (state_14302[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14302,(10),Object,null,(9));
var inst_14275 = chs__$1.call(null,inst_14266);
var inst_14276 = done.call(null,inst_14266);
var inst_14277 = cljs.core.async.take_BANG_.call(null,inst_14275,inst_14276);
var state_14302__$1 = state_14302;
var statearr_14316_14347 = state_14302__$1;
(statearr_14316_14347[(2)] = inst_14277);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14302__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14303 === (9))){
var inst_14266 = (state_14302[(7)]);
var inst_14279 = (state_14302[(2)]);
var inst_14280 = (inst_14266 + (1));
var inst_14266__$1 = inst_14280;
var state_14302__$1 = (function (){var statearr_14317 = state_14302;
(statearr_14317[(7)] = inst_14266__$1);

(statearr_14317[(10)] = inst_14279);

return statearr_14317;
})();
var statearr_14318_14348 = state_14302__$1;
(statearr_14318_14348[(2)] = null);

(statearr_14318_14348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14303 === (5))){
var inst_14286 = (state_14302[(2)]);
var state_14302__$1 = (function (){var statearr_14319 = state_14302;
(statearr_14319[(11)] = inst_14286);

return statearr_14319;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14302__$1,(12),dchan);
} else {
if((state_val_14303 === (14))){
var inst_14288 = (state_14302[(8)]);
var inst_14293 = cljs.core.apply.call(null,f,inst_14288);
var state_14302__$1 = state_14302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14302__$1,(16),out,inst_14293);
} else {
if((state_val_14303 === (16))){
var inst_14295 = (state_14302[(2)]);
var state_14302__$1 = (function (){var statearr_14320 = state_14302;
(statearr_14320[(12)] = inst_14295);

return statearr_14320;
})();
var statearr_14321_14349 = state_14302__$1;
(statearr_14321_14349[(2)] = null);

(statearr_14321_14349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14303 === (10))){
var inst_14270 = (state_14302[(2)]);
var inst_14271 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14302__$1 = (function (){var statearr_14322 = state_14302;
(statearr_14322[(13)] = inst_14270);

return statearr_14322;
})();
var statearr_14323_14350 = state_14302__$1;
(statearr_14323_14350[(2)] = inst_14271);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14302__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14303 === (8))){
var inst_14284 = (state_14302[(2)]);
var state_14302__$1 = state_14302;
var statearr_14324_14351 = state_14302__$1;
(statearr_14324_14351[(2)] = inst_14284);

(statearr_14324_14351[(1)] = (5));


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
});})(c__12297__auto___14336,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12185__auto__,c__12297__auto___14336,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12186__auto__ = null;
var cljs$core$async$state_machine__12186__auto____0 = (function (){
var statearr_14328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14328[(0)] = cljs$core$async$state_machine__12186__auto__);

(statearr_14328[(1)] = (1));

return statearr_14328;
});
var cljs$core$async$state_machine__12186__auto____1 = (function (state_14302){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_14302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e14329){if((e14329 instanceof Object)){
var ex__12189__auto__ = e14329;
var statearr_14330_14352 = state_14302;
(statearr_14330_14352[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14353 = state_14302;
state_14302 = G__14353;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$state_machine__12186__auto__ = function(state_14302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12186__auto____1.call(this,state_14302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12186__auto____0;
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12186__auto____1;
return cljs$core$async$state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto___14336,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12299__auto__ = (function (){var statearr_14331 = f__12298__auto__.call(null);
(statearr_14331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto___14336);

return statearr_14331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto___14336,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args14355 = [];
var len__7652__auto___14413 = arguments.length;
var i__7653__auto___14414 = (0);
while(true){
if((i__7653__auto___14414 < len__7652__auto___14413)){
args14355.push((arguments[i__7653__auto___14414]));

var G__14415 = (i__7653__auto___14414 + (1));
i__7653__auto___14414 = G__14415;
continue;
} else {
}
break;
}

var G__14357 = args14355.length;
switch (G__14357) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14355.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12297__auto___14417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto___14417,out){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto___14417,out){
return (function (state_14389){
var state_val_14390 = (state_14389[(1)]);
if((state_val_14390 === (7))){
var inst_14368 = (state_14389[(7)]);
var inst_14369 = (state_14389[(8)]);
var inst_14368__$1 = (state_14389[(2)]);
var inst_14369__$1 = cljs.core.nth.call(null,inst_14368__$1,(0),null);
var inst_14370 = cljs.core.nth.call(null,inst_14368__$1,(1),null);
var inst_14371 = (inst_14369__$1 == null);
var state_14389__$1 = (function (){var statearr_14391 = state_14389;
(statearr_14391[(7)] = inst_14368__$1);

(statearr_14391[(9)] = inst_14370);

(statearr_14391[(8)] = inst_14369__$1);

return statearr_14391;
})();
if(cljs.core.truth_(inst_14371)){
var statearr_14392_14418 = state_14389__$1;
(statearr_14392_14418[(1)] = (8));

} else {
var statearr_14393_14419 = state_14389__$1;
(statearr_14393_14419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14390 === (1))){
var inst_14358 = cljs.core.vec.call(null,chs);
var inst_14359 = inst_14358;
var state_14389__$1 = (function (){var statearr_14394 = state_14389;
(statearr_14394[(10)] = inst_14359);

return statearr_14394;
})();
var statearr_14395_14420 = state_14389__$1;
(statearr_14395_14420[(2)] = null);

(statearr_14395_14420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14390 === (4))){
var inst_14359 = (state_14389[(10)]);
var state_14389__$1 = state_14389;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14389__$1,(7),inst_14359);
} else {
if((state_val_14390 === (6))){
var inst_14385 = (state_14389[(2)]);
var state_14389__$1 = state_14389;
var statearr_14396_14421 = state_14389__$1;
(statearr_14396_14421[(2)] = inst_14385);

(statearr_14396_14421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14390 === (3))){
var inst_14387 = (state_14389[(2)]);
var state_14389__$1 = state_14389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14389__$1,inst_14387);
} else {
if((state_val_14390 === (2))){
var inst_14359 = (state_14389[(10)]);
var inst_14361 = cljs.core.count.call(null,inst_14359);
var inst_14362 = (inst_14361 > (0));
var state_14389__$1 = state_14389;
if(cljs.core.truth_(inst_14362)){
var statearr_14398_14422 = state_14389__$1;
(statearr_14398_14422[(1)] = (4));

} else {
var statearr_14399_14423 = state_14389__$1;
(statearr_14399_14423[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14390 === (11))){
var inst_14359 = (state_14389[(10)]);
var inst_14378 = (state_14389[(2)]);
var tmp14397 = inst_14359;
var inst_14359__$1 = tmp14397;
var state_14389__$1 = (function (){var statearr_14400 = state_14389;
(statearr_14400[(10)] = inst_14359__$1);

(statearr_14400[(11)] = inst_14378);

return statearr_14400;
})();
var statearr_14401_14424 = state_14389__$1;
(statearr_14401_14424[(2)] = null);

(statearr_14401_14424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14390 === (9))){
var inst_14369 = (state_14389[(8)]);
var state_14389__$1 = state_14389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14389__$1,(11),out,inst_14369);
} else {
if((state_val_14390 === (5))){
var inst_14383 = cljs.core.async.close_BANG_.call(null,out);
var state_14389__$1 = state_14389;
var statearr_14402_14425 = state_14389__$1;
(statearr_14402_14425[(2)] = inst_14383);

(statearr_14402_14425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14390 === (10))){
var inst_14381 = (state_14389[(2)]);
var state_14389__$1 = state_14389;
var statearr_14403_14426 = state_14389__$1;
(statearr_14403_14426[(2)] = inst_14381);

(statearr_14403_14426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14390 === (8))){
var inst_14368 = (state_14389[(7)]);
var inst_14370 = (state_14389[(9)]);
var inst_14359 = (state_14389[(10)]);
var inst_14369 = (state_14389[(8)]);
var inst_14373 = (function (){var cs = inst_14359;
var vec__14364 = inst_14368;
var v = inst_14369;
var c = inst_14370;
return ((function (cs,vec__14364,v,c,inst_14368,inst_14370,inst_14359,inst_14369,state_val_14390,c__12297__auto___14417,out){
return (function (p1__14354_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14354_SHARP_);
});
;})(cs,vec__14364,v,c,inst_14368,inst_14370,inst_14359,inst_14369,state_val_14390,c__12297__auto___14417,out))
})();
var inst_14374 = cljs.core.filterv.call(null,inst_14373,inst_14359);
var inst_14359__$1 = inst_14374;
var state_14389__$1 = (function (){var statearr_14404 = state_14389;
(statearr_14404[(10)] = inst_14359__$1);

return statearr_14404;
})();
var statearr_14405_14427 = state_14389__$1;
(statearr_14405_14427[(2)] = null);

(statearr_14405_14427[(1)] = (2));


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
});})(c__12297__auto___14417,out))
;
return ((function (switch__12185__auto__,c__12297__auto___14417,out){
return (function() {
var cljs$core$async$state_machine__12186__auto__ = null;
var cljs$core$async$state_machine__12186__auto____0 = (function (){
var statearr_14409 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14409[(0)] = cljs$core$async$state_machine__12186__auto__);

(statearr_14409[(1)] = (1));

return statearr_14409;
});
var cljs$core$async$state_machine__12186__auto____1 = (function (state_14389){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_14389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e14410){if((e14410 instanceof Object)){
var ex__12189__auto__ = e14410;
var statearr_14411_14428 = state_14389;
(statearr_14411_14428[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14429 = state_14389;
state_14389 = G__14429;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$state_machine__12186__auto__ = function(state_14389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12186__auto____1.call(this,state_14389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12186__auto____0;
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12186__auto____1;
return cljs$core$async$state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto___14417,out))
})();
var state__12299__auto__ = (function (){var statearr_14412 = f__12298__auto__.call(null);
(statearr_14412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto___14417);

return statearr_14412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto___14417,out))
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
var args14430 = [];
var len__7652__auto___14479 = arguments.length;
var i__7653__auto___14480 = (0);
while(true){
if((i__7653__auto___14480 < len__7652__auto___14479)){
args14430.push((arguments[i__7653__auto___14480]));

var G__14481 = (i__7653__auto___14480 + (1));
i__7653__auto___14480 = G__14481;
continue;
} else {
}
break;
}

var G__14432 = args14430.length;
switch (G__14432) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14430.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12297__auto___14483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto___14483,out){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto___14483,out){
return (function (state_14456){
var state_val_14457 = (state_14456[(1)]);
if((state_val_14457 === (7))){
var inst_14438 = (state_14456[(7)]);
var inst_14438__$1 = (state_14456[(2)]);
var inst_14439 = (inst_14438__$1 == null);
var inst_14440 = cljs.core.not.call(null,inst_14439);
var state_14456__$1 = (function (){var statearr_14458 = state_14456;
(statearr_14458[(7)] = inst_14438__$1);

return statearr_14458;
})();
if(inst_14440){
var statearr_14459_14484 = state_14456__$1;
(statearr_14459_14484[(1)] = (8));

} else {
var statearr_14460_14485 = state_14456__$1;
(statearr_14460_14485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (1))){
var inst_14433 = (0);
var state_14456__$1 = (function (){var statearr_14461 = state_14456;
(statearr_14461[(8)] = inst_14433);

return statearr_14461;
})();
var statearr_14462_14486 = state_14456__$1;
(statearr_14462_14486[(2)] = null);

(statearr_14462_14486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (4))){
var state_14456__$1 = state_14456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14456__$1,(7),ch);
} else {
if((state_val_14457 === (6))){
var inst_14451 = (state_14456[(2)]);
var state_14456__$1 = state_14456;
var statearr_14463_14487 = state_14456__$1;
(statearr_14463_14487[(2)] = inst_14451);

(statearr_14463_14487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (3))){
var inst_14453 = (state_14456[(2)]);
var inst_14454 = cljs.core.async.close_BANG_.call(null,out);
var state_14456__$1 = (function (){var statearr_14464 = state_14456;
(statearr_14464[(9)] = inst_14453);

return statearr_14464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14456__$1,inst_14454);
} else {
if((state_val_14457 === (2))){
var inst_14433 = (state_14456[(8)]);
var inst_14435 = (inst_14433 < n);
var state_14456__$1 = state_14456;
if(cljs.core.truth_(inst_14435)){
var statearr_14465_14488 = state_14456__$1;
(statearr_14465_14488[(1)] = (4));

} else {
var statearr_14466_14489 = state_14456__$1;
(statearr_14466_14489[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (11))){
var inst_14433 = (state_14456[(8)]);
var inst_14443 = (state_14456[(2)]);
var inst_14444 = (inst_14433 + (1));
var inst_14433__$1 = inst_14444;
var state_14456__$1 = (function (){var statearr_14467 = state_14456;
(statearr_14467[(8)] = inst_14433__$1);

(statearr_14467[(10)] = inst_14443);

return statearr_14467;
})();
var statearr_14468_14490 = state_14456__$1;
(statearr_14468_14490[(2)] = null);

(statearr_14468_14490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (9))){
var state_14456__$1 = state_14456;
var statearr_14469_14491 = state_14456__$1;
(statearr_14469_14491[(2)] = null);

(statearr_14469_14491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (5))){
var state_14456__$1 = state_14456;
var statearr_14470_14492 = state_14456__$1;
(statearr_14470_14492[(2)] = null);

(statearr_14470_14492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (10))){
var inst_14448 = (state_14456[(2)]);
var state_14456__$1 = state_14456;
var statearr_14471_14493 = state_14456__$1;
(statearr_14471_14493[(2)] = inst_14448);

(statearr_14471_14493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14457 === (8))){
var inst_14438 = (state_14456[(7)]);
var state_14456__$1 = state_14456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14456__$1,(11),out,inst_14438);
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
});})(c__12297__auto___14483,out))
;
return ((function (switch__12185__auto__,c__12297__auto___14483,out){
return (function() {
var cljs$core$async$state_machine__12186__auto__ = null;
var cljs$core$async$state_machine__12186__auto____0 = (function (){
var statearr_14475 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14475[(0)] = cljs$core$async$state_machine__12186__auto__);

(statearr_14475[(1)] = (1));

return statearr_14475;
});
var cljs$core$async$state_machine__12186__auto____1 = (function (state_14456){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_14456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e14476){if((e14476 instanceof Object)){
var ex__12189__auto__ = e14476;
var statearr_14477_14494 = state_14456;
(statearr_14477_14494[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14495 = state_14456;
state_14456 = G__14495;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$state_machine__12186__auto__ = function(state_14456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12186__auto____1.call(this,state_14456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12186__auto____0;
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12186__auto____1;
return cljs$core$async$state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto___14483,out))
})();
var state__12299__auto__ = (function (){var statearr_14478 = f__12298__auto__.call(null);
(statearr_14478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto___14483);

return statearr_14478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto___14483,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14503 = (function (map_LT_,f,ch,meta14504){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14504 = meta14504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14505,meta14504__$1){
var self__ = this;
var _14505__$1 = this;
return (new cljs.core.async.t_cljs$core$async14503(self__.map_LT_,self__.f,self__.ch,meta14504__$1));
});

cljs.core.async.t_cljs$core$async14503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14505){
var self__ = this;
var _14505__$1 = this;
return self__.meta14504;
});

cljs.core.async.t_cljs$core$async14503.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14503.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14503.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14503.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14503.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14506 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14506 = (function (map_LT_,f,ch,meta14504,_,fn1,meta14507){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14504 = meta14504;
this._ = _;
this.fn1 = fn1;
this.meta14507 = meta14507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14508,meta14507__$1){
var self__ = this;
var _14508__$1 = this;
return (new cljs.core.async.t_cljs$core$async14506(self__.map_LT_,self__.f,self__.ch,self__.meta14504,self__._,self__.fn1,meta14507__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14508){
var self__ = this;
var _14508__$1 = this;
return self__.meta14507;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14496_SHARP_){
return f1.call(null,(((p1__14496_SHARP_ == null))?null:self__.f.call(null,p1__14496_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14506.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14504","meta14504",2001686167,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14503","cljs.core.async/t_cljs$core$async14503",-1170297863,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14507","meta14507",-708852072,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14506.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14506";

cljs.core.async.t_cljs$core$async14506.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async14506");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14506 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14506(map_LT___$1,f__$1,ch__$1,meta14504__$1,___$2,fn1__$1,meta14507){
return (new cljs.core.async.t_cljs$core$async14506(map_LT___$1,f__$1,ch__$1,meta14504__$1,___$2,fn1__$1,meta14507));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14506(self__.map_LT_,self__.f,self__.ch,self__.meta14504,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async14503.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14503.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14504","meta14504",2001686167,null)], null);
});

cljs.core.async.t_cljs$core$async14503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14503";

cljs.core.async.t_cljs$core$async14503.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async14503");
});

cljs.core.async.__GT_t_cljs$core$async14503 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14503(map_LT___$1,f__$1,ch__$1,meta14504){
return (new cljs.core.async.t_cljs$core$async14503(map_LT___$1,f__$1,ch__$1,meta14504));
});

}

return (new cljs.core.async.t_cljs$core$async14503(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14512 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14512 = (function (map_GT_,f,ch,meta14513){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14513 = meta14513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14514,meta14513__$1){
var self__ = this;
var _14514__$1 = this;
return (new cljs.core.async.t_cljs$core$async14512(self__.map_GT_,self__.f,self__.ch,meta14513__$1));
});

cljs.core.async.t_cljs$core$async14512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14514){
var self__ = this;
var _14514__$1 = this;
return self__.meta14513;
});

cljs.core.async.t_cljs$core$async14512.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14512.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14512.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14512.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14512.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14512.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14513","meta14513",-446486442,null)], null);
});

cljs.core.async.t_cljs$core$async14512.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14512";

cljs.core.async.t_cljs$core$async14512.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async14512");
});

cljs.core.async.__GT_t_cljs$core$async14512 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14512(map_GT___$1,f__$1,ch__$1,meta14513){
return (new cljs.core.async.t_cljs$core$async14512(map_GT___$1,f__$1,ch__$1,meta14513));
});

}

return (new cljs.core.async.t_cljs$core$async14512(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14518 = (function (filter_GT_,p,ch,meta14519){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14519 = meta14519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14520,meta14519__$1){
var self__ = this;
var _14520__$1 = this;
return (new cljs.core.async.t_cljs$core$async14518(self__.filter_GT_,self__.p,self__.ch,meta14519__$1));
});

cljs.core.async.t_cljs$core$async14518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14520){
var self__ = this;
var _14520__$1 = this;
return self__.meta14519;
});

cljs.core.async.t_cljs$core$async14518.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14518.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14518.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14518.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14518.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14518.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14518.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14519","meta14519",-316517557,null)], null);
});

cljs.core.async.t_cljs$core$async14518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14518";

cljs.core.async.t_cljs$core$async14518.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"cljs.core.async/t_cljs$core$async14518");
});

cljs.core.async.__GT_t_cljs$core$async14518 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14518(filter_GT___$1,p__$1,ch__$1,meta14519){
return (new cljs.core.async.t_cljs$core$async14518(filter_GT___$1,p__$1,ch__$1,meta14519));
});

}

return (new cljs.core.async.t_cljs$core$async14518(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args14521 = [];
var len__7652__auto___14565 = arguments.length;
var i__7653__auto___14566 = (0);
while(true){
if((i__7653__auto___14566 < len__7652__auto___14565)){
args14521.push((arguments[i__7653__auto___14566]));

var G__14567 = (i__7653__auto___14566 + (1));
i__7653__auto___14566 = G__14567;
continue;
} else {
}
break;
}

var G__14523 = args14521.length;
switch (G__14523) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14521.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12297__auto___14569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto___14569,out){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto___14569,out){
return (function (state_14544){
var state_val_14545 = (state_14544[(1)]);
if((state_val_14545 === (7))){
var inst_14540 = (state_14544[(2)]);
var state_14544__$1 = state_14544;
var statearr_14546_14570 = state_14544__$1;
(statearr_14546_14570[(2)] = inst_14540);

(statearr_14546_14570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14545 === (1))){
var state_14544__$1 = state_14544;
var statearr_14547_14571 = state_14544__$1;
(statearr_14547_14571[(2)] = null);

(statearr_14547_14571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14545 === (4))){
var inst_14526 = (state_14544[(7)]);
var inst_14526__$1 = (state_14544[(2)]);
var inst_14527 = (inst_14526__$1 == null);
var state_14544__$1 = (function (){var statearr_14548 = state_14544;
(statearr_14548[(7)] = inst_14526__$1);

return statearr_14548;
})();
if(cljs.core.truth_(inst_14527)){
var statearr_14549_14572 = state_14544__$1;
(statearr_14549_14572[(1)] = (5));

} else {
var statearr_14550_14573 = state_14544__$1;
(statearr_14550_14573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14545 === (6))){
var inst_14526 = (state_14544[(7)]);
var inst_14531 = p.call(null,inst_14526);
var state_14544__$1 = state_14544;
if(cljs.core.truth_(inst_14531)){
var statearr_14551_14574 = state_14544__$1;
(statearr_14551_14574[(1)] = (8));

} else {
var statearr_14552_14575 = state_14544__$1;
(statearr_14552_14575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14545 === (3))){
var inst_14542 = (state_14544[(2)]);
var state_14544__$1 = state_14544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14544__$1,inst_14542);
} else {
if((state_val_14545 === (2))){
var state_14544__$1 = state_14544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14544__$1,(4),ch);
} else {
if((state_val_14545 === (11))){
var inst_14534 = (state_14544[(2)]);
var state_14544__$1 = state_14544;
var statearr_14553_14576 = state_14544__$1;
(statearr_14553_14576[(2)] = inst_14534);

(statearr_14553_14576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14545 === (9))){
var state_14544__$1 = state_14544;
var statearr_14554_14577 = state_14544__$1;
(statearr_14554_14577[(2)] = null);

(statearr_14554_14577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14545 === (5))){
var inst_14529 = cljs.core.async.close_BANG_.call(null,out);
var state_14544__$1 = state_14544;
var statearr_14555_14578 = state_14544__$1;
(statearr_14555_14578[(2)] = inst_14529);

(statearr_14555_14578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14545 === (10))){
var inst_14537 = (state_14544[(2)]);
var state_14544__$1 = (function (){var statearr_14556 = state_14544;
(statearr_14556[(8)] = inst_14537);

return statearr_14556;
})();
var statearr_14557_14579 = state_14544__$1;
(statearr_14557_14579[(2)] = null);

(statearr_14557_14579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14545 === (8))){
var inst_14526 = (state_14544[(7)]);
var state_14544__$1 = state_14544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14544__$1,(11),out,inst_14526);
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
});})(c__12297__auto___14569,out))
;
return ((function (switch__12185__auto__,c__12297__auto___14569,out){
return (function() {
var cljs$core$async$state_machine__12186__auto__ = null;
var cljs$core$async$state_machine__12186__auto____0 = (function (){
var statearr_14561 = [null,null,null,null,null,null,null,null,null];
(statearr_14561[(0)] = cljs$core$async$state_machine__12186__auto__);

(statearr_14561[(1)] = (1));

return statearr_14561;
});
var cljs$core$async$state_machine__12186__auto____1 = (function (state_14544){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_14544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e14562){if((e14562 instanceof Object)){
var ex__12189__auto__ = e14562;
var statearr_14563_14580 = state_14544;
(statearr_14563_14580[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14581 = state_14544;
state_14544 = G__14581;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$state_machine__12186__auto__ = function(state_14544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12186__auto____1.call(this,state_14544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12186__auto____0;
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12186__auto____1;
return cljs$core$async$state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto___14569,out))
})();
var state__12299__auto__ = (function (){var statearr_14564 = f__12298__auto__.call(null);
(statearr_14564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto___14569);

return statearr_14564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto___14569,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14582 = [];
var len__7652__auto___14585 = arguments.length;
var i__7653__auto___14586 = (0);
while(true){
if((i__7653__auto___14586 < len__7652__auto___14585)){
args14582.push((arguments[i__7653__auto___14586]));

var G__14587 = (i__7653__auto___14586 + (1));
i__7653__auto___14586 = G__14587;
continue;
} else {
}
break;
}

var G__14584 = args14582.length;
switch (G__14584) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14582.length)].join('')));

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
var c__12297__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto__){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto__){
return (function (state_14754){
var state_val_14755 = (state_14754[(1)]);
if((state_val_14755 === (7))){
var inst_14750 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
var statearr_14756_14797 = state_14754__$1;
(statearr_14756_14797[(2)] = inst_14750);

(statearr_14756_14797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (20))){
var inst_14720 = (state_14754[(7)]);
var inst_14731 = (state_14754[(2)]);
var inst_14732 = cljs.core.next.call(null,inst_14720);
var inst_14706 = inst_14732;
var inst_14707 = null;
var inst_14708 = (0);
var inst_14709 = (0);
var state_14754__$1 = (function (){var statearr_14757 = state_14754;
(statearr_14757[(8)] = inst_14707);

(statearr_14757[(9)] = inst_14706);

(statearr_14757[(10)] = inst_14709);

(statearr_14757[(11)] = inst_14731);

(statearr_14757[(12)] = inst_14708);

return statearr_14757;
})();
var statearr_14758_14798 = state_14754__$1;
(statearr_14758_14798[(2)] = null);

(statearr_14758_14798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (1))){
var state_14754__$1 = state_14754;
var statearr_14759_14799 = state_14754__$1;
(statearr_14759_14799[(2)] = null);

(statearr_14759_14799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (4))){
var inst_14695 = (state_14754[(13)]);
var inst_14695__$1 = (state_14754[(2)]);
var inst_14696 = (inst_14695__$1 == null);
var state_14754__$1 = (function (){var statearr_14760 = state_14754;
(statearr_14760[(13)] = inst_14695__$1);

return statearr_14760;
})();
if(cljs.core.truth_(inst_14696)){
var statearr_14761_14800 = state_14754__$1;
(statearr_14761_14800[(1)] = (5));

} else {
var statearr_14762_14801 = state_14754__$1;
(statearr_14762_14801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (15))){
var state_14754__$1 = state_14754;
var statearr_14766_14802 = state_14754__$1;
(statearr_14766_14802[(2)] = null);

(statearr_14766_14802[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (21))){
var state_14754__$1 = state_14754;
var statearr_14767_14803 = state_14754__$1;
(statearr_14767_14803[(2)] = null);

(statearr_14767_14803[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (13))){
var inst_14707 = (state_14754[(8)]);
var inst_14706 = (state_14754[(9)]);
var inst_14709 = (state_14754[(10)]);
var inst_14708 = (state_14754[(12)]);
var inst_14716 = (state_14754[(2)]);
var inst_14717 = (inst_14709 + (1));
var tmp14763 = inst_14707;
var tmp14764 = inst_14706;
var tmp14765 = inst_14708;
var inst_14706__$1 = tmp14764;
var inst_14707__$1 = tmp14763;
var inst_14708__$1 = tmp14765;
var inst_14709__$1 = inst_14717;
var state_14754__$1 = (function (){var statearr_14768 = state_14754;
(statearr_14768[(8)] = inst_14707__$1);

(statearr_14768[(9)] = inst_14706__$1);

(statearr_14768[(10)] = inst_14709__$1);

(statearr_14768[(12)] = inst_14708__$1);

(statearr_14768[(14)] = inst_14716);

return statearr_14768;
})();
var statearr_14769_14804 = state_14754__$1;
(statearr_14769_14804[(2)] = null);

(statearr_14769_14804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (22))){
var state_14754__$1 = state_14754;
var statearr_14770_14805 = state_14754__$1;
(statearr_14770_14805[(2)] = null);

(statearr_14770_14805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (6))){
var inst_14695 = (state_14754[(13)]);
var inst_14704 = f.call(null,inst_14695);
var inst_14705 = cljs.core.seq.call(null,inst_14704);
var inst_14706 = inst_14705;
var inst_14707 = null;
var inst_14708 = (0);
var inst_14709 = (0);
var state_14754__$1 = (function (){var statearr_14771 = state_14754;
(statearr_14771[(8)] = inst_14707);

(statearr_14771[(9)] = inst_14706);

(statearr_14771[(10)] = inst_14709);

(statearr_14771[(12)] = inst_14708);

return statearr_14771;
})();
var statearr_14772_14806 = state_14754__$1;
(statearr_14772_14806[(2)] = null);

(statearr_14772_14806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (17))){
var inst_14720 = (state_14754[(7)]);
var inst_14724 = cljs.core.chunk_first.call(null,inst_14720);
var inst_14725 = cljs.core.chunk_rest.call(null,inst_14720);
var inst_14726 = cljs.core.count.call(null,inst_14724);
var inst_14706 = inst_14725;
var inst_14707 = inst_14724;
var inst_14708 = inst_14726;
var inst_14709 = (0);
var state_14754__$1 = (function (){var statearr_14773 = state_14754;
(statearr_14773[(8)] = inst_14707);

(statearr_14773[(9)] = inst_14706);

(statearr_14773[(10)] = inst_14709);

(statearr_14773[(12)] = inst_14708);

return statearr_14773;
})();
var statearr_14774_14807 = state_14754__$1;
(statearr_14774_14807[(2)] = null);

(statearr_14774_14807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (3))){
var inst_14752 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14754__$1,inst_14752);
} else {
if((state_val_14755 === (12))){
var inst_14740 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
var statearr_14775_14808 = state_14754__$1;
(statearr_14775_14808[(2)] = inst_14740);

(statearr_14775_14808[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (2))){
var state_14754__$1 = state_14754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14754__$1,(4),in$);
} else {
if((state_val_14755 === (23))){
var inst_14748 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
var statearr_14776_14809 = state_14754__$1;
(statearr_14776_14809[(2)] = inst_14748);

(statearr_14776_14809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (19))){
var inst_14735 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
var statearr_14777_14810 = state_14754__$1;
(statearr_14777_14810[(2)] = inst_14735);

(statearr_14777_14810[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (11))){
var inst_14706 = (state_14754[(9)]);
var inst_14720 = (state_14754[(7)]);
var inst_14720__$1 = cljs.core.seq.call(null,inst_14706);
var state_14754__$1 = (function (){var statearr_14778 = state_14754;
(statearr_14778[(7)] = inst_14720__$1);

return statearr_14778;
})();
if(inst_14720__$1){
var statearr_14779_14811 = state_14754__$1;
(statearr_14779_14811[(1)] = (14));

} else {
var statearr_14780_14812 = state_14754__$1;
(statearr_14780_14812[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (9))){
var inst_14742 = (state_14754[(2)]);
var inst_14743 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14754__$1 = (function (){var statearr_14781 = state_14754;
(statearr_14781[(15)] = inst_14742);

return statearr_14781;
})();
if(cljs.core.truth_(inst_14743)){
var statearr_14782_14813 = state_14754__$1;
(statearr_14782_14813[(1)] = (21));

} else {
var statearr_14783_14814 = state_14754__$1;
(statearr_14783_14814[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (5))){
var inst_14698 = cljs.core.async.close_BANG_.call(null,out);
var state_14754__$1 = state_14754;
var statearr_14784_14815 = state_14754__$1;
(statearr_14784_14815[(2)] = inst_14698);

(statearr_14784_14815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (14))){
var inst_14720 = (state_14754[(7)]);
var inst_14722 = cljs.core.chunked_seq_QMARK_.call(null,inst_14720);
var state_14754__$1 = state_14754;
if(inst_14722){
var statearr_14785_14816 = state_14754__$1;
(statearr_14785_14816[(1)] = (17));

} else {
var statearr_14786_14817 = state_14754__$1;
(statearr_14786_14817[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (16))){
var inst_14738 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
var statearr_14787_14818 = state_14754__$1;
(statearr_14787_14818[(2)] = inst_14738);

(statearr_14787_14818[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (10))){
var inst_14707 = (state_14754[(8)]);
var inst_14709 = (state_14754[(10)]);
var inst_14714 = cljs.core._nth.call(null,inst_14707,inst_14709);
var state_14754__$1 = state_14754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14754__$1,(13),out,inst_14714);
} else {
if((state_val_14755 === (18))){
var inst_14720 = (state_14754[(7)]);
var inst_14729 = cljs.core.first.call(null,inst_14720);
var state_14754__$1 = state_14754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14754__$1,(20),out,inst_14729);
} else {
if((state_val_14755 === (8))){
var inst_14709 = (state_14754[(10)]);
var inst_14708 = (state_14754[(12)]);
var inst_14711 = (inst_14709 < inst_14708);
var inst_14712 = inst_14711;
var state_14754__$1 = state_14754;
if(cljs.core.truth_(inst_14712)){
var statearr_14788_14819 = state_14754__$1;
(statearr_14788_14819[(1)] = (10));

} else {
var statearr_14789_14820 = state_14754__$1;
(statearr_14789_14820[(1)] = (11));

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
});})(c__12297__auto__))
;
return ((function (switch__12185__auto__,c__12297__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12186__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12186__auto____0 = (function (){
var statearr_14793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14793[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12186__auto__);

(statearr_14793[(1)] = (1));

return statearr_14793;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12186__auto____1 = (function (state_14754){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_14754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e14794){if((e14794 instanceof Object)){
var ex__12189__auto__ = e14794;
var statearr_14795_14821 = state_14754;
(statearr_14795_14821[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14822 = state_14754;
state_14754 = G__14822;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12186__auto__ = function(state_14754){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12186__auto____1.call(this,state_14754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12186__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12186__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto__))
})();
var state__12299__auto__ = (function (){var statearr_14796 = f__12298__auto__.call(null);
(statearr_14796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto__);

return statearr_14796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto__))
);

return c__12297__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args14823 = [];
var len__7652__auto___14826 = arguments.length;
var i__7653__auto___14827 = (0);
while(true){
if((i__7653__auto___14827 < len__7652__auto___14826)){
args14823.push((arguments[i__7653__auto___14827]));

var G__14828 = (i__7653__auto___14827 + (1));
i__7653__auto___14827 = G__14828;
continue;
} else {
}
break;
}

var G__14825 = args14823.length;
switch (G__14825) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14823.length)].join('')));

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
var args14830 = [];
var len__7652__auto___14833 = arguments.length;
var i__7653__auto___14834 = (0);
while(true){
if((i__7653__auto___14834 < len__7652__auto___14833)){
args14830.push((arguments[i__7653__auto___14834]));

var G__14835 = (i__7653__auto___14834 + (1));
i__7653__auto___14834 = G__14835;
continue;
} else {
}
break;
}

var G__14832 = args14830.length;
switch (G__14832) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14830.length)].join('')));

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
var args14837 = [];
var len__7652__auto___14888 = arguments.length;
var i__7653__auto___14889 = (0);
while(true){
if((i__7653__auto___14889 < len__7652__auto___14888)){
args14837.push((arguments[i__7653__auto___14889]));

var G__14890 = (i__7653__auto___14889 + (1));
i__7653__auto___14889 = G__14890;
continue;
} else {
}
break;
}

var G__14839 = args14837.length;
switch (G__14839) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14837.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12297__auto___14892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto___14892,out){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto___14892,out){
return (function (state_14863){
var state_val_14864 = (state_14863[(1)]);
if((state_val_14864 === (7))){
var inst_14858 = (state_14863[(2)]);
var state_14863__$1 = state_14863;
var statearr_14865_14893 = state_14863__$1;
(statearr_14865_14893[(2)] = inst_14858);

(statearr_14865_14893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14864 === (1))){
var inst_14840 = null;
var state_14863__$1 = (function (){var statearr_14866 = state_14863;
(statearr_14866[(7)] = inst_14840);

return statearr_14866;
})();
var statearr_14867_14894 = state_14863__$1;
(statearr_14867_14894[(2)] = null);

(statearr_14867_14894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14864 === (4))){
var inst_14843 = (state_14863[(8)]);
var inst_14843__$1 = (state_14863[(2)]);
var inst_14844 = (inst_14843__$1 == null);
var inst_14845 = cljs.core.not.call(null,inst_14844);
var state_14863__$1 = (function (){var statearr_14868 = state_14863;
(statearr_14868[(8)] = inst_14843__$1);

return statearr_14868;
})();
if(inst_14845){
var statearr_14869_14895 = state_14863__$1;
(statearr_14869_14895[(1)] = (5));

} else {
var statearr_14870_14896 = state_14863__$1;
(statearr_14870_14896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14864 === (6))){
var state_14863__$1 = state_14863;
var statearr_14871_14897 = state_14863__$1;
(statearr_14871_14897[(2)] = null);

(statearr_14871_14897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14864 === (3))){
var inst_14860 = (state_14863[(2)]);
var inst_14861 = cljs.core.async.close_BANG_.call(null,out);
var state_14863__$1 = (function (){var statearr_14872 = state_14863;
(statearr_14872[(9)] = inst_14860);

return statearr_14872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14863__$1,inst_14861);
} else {
if((state_val_14864 === (2))){
var state_14863__$1 = state_14863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14863__$1,(4),ch);
} else {
if((state_val_14864 === (11))){
var inst_14843 = (state_14863[(8)]);
var inst_14852 = (state_14863[(2)]);
var inst_14840 = inst_14843;
var state_14863__$1 = (function (){var statearr_14873 = state_14863;
(statearr_14873[(7)] = inst_14840);

(statearr_14873[(10)] = inst_14852);

return statearr_14873;
})();
var statearr_14874_14898 = state_14863__$1;
(statearr_14874_14898[(2)] = null);

(statearr_14874_14898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14864 === (9))){
var inst_14843 = (state_14863[(8)]);
var state_14863__$1 = state_14863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14863__$1,(11),out,inst_14843);
} else {
if((state_val_14864 === (5))){
var inst_14840 = (state_14863[(7)]);
var inst_14843 = (state_14863[(8)]);
var inst_14847 = cljs.core._EQ_.call(null,inst_14843,inst_14840);
var state_14863__$1 = state_14863;
if(inst_14847){
var statearr_14876_14899 = state_14863__$1;
(statearr_14876_14899[(1)] = (8));

} else {
var statearr_14877_14900 = state_14863__$1;
(statearr_14877_14900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14864 === (10))){
var inst_14855 = (state_14863[(2)]);
var state_14863__$1 = state_14863;
var statearr_14878_14901 = state_14863__$1;
(statearr_14878_14901[(2)] = inst_14855);

(statearr_14878_14901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14864 === (8))){
var inst_14840 = (state_14863[(7)]);
var tmp14875 = inst_14840;
var inst_14840__$1 = tmp14875;
var state_14863__$1 = (function (){var statearr_14879 = state_14863;
(statearr_14879[(7)] = inst_14840__$1);

return statearr_14879;
})();
var statearr_14880_14902 = state_14863__$1;
(statearr_14880_14902[(2)] = null);

(statearr_14880_14902[(1)] = (2));


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
});})(c__12297__auto___14892,out))
;
return ((function (switch__12185__auto__,c__12297__auto___14892,out){
return (function() {
var cljs$core$async$state_machine__12186__auto__ = null;
var cljs$core$async$state_machine__12186__auto____0 = (function (){
var statearr_14884 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14884[(0)] = cljs$core$async$state_machine__12186__auto__);

(statearr_14884[(1)] = (1));

return statearr_14884;
});
var cljs$core$async$state_machine__12186__auto____1 = (function (state_14863){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_14863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e14885){if((e14885 instanceof Object)){
var ex__12189__auto__ = e14885;
var statearr_14886_14903 = state_14863;
(statearr_14886_14903[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14904 = state_14863;
state_14863 = G__14904;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$state_machine__12186__auto__ = function(state_14863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12186__auto____1.call(this,state_14863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12186__auto____0;
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12186__auto____1;
return cljs$core$async$state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto___14892,out))
})();
var state__12299__auto__ = (function (){var statearr_14887 = f__12298__auto__.call(null);
(statearr_14887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto___14892);

return statearr_14887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto___14892,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args14905 = [];
var len__7652__auto___14975 = arguments.length;
var i__7653__auto___14976 = (0);
while(true){
if((i__7653__auto___14976 < len__7652__auto___14975)){
args14905.push((arguments[i__7653__auto___14976]));

var G__14977 = (i__7653__auto___14976 + (1));
i__7653__auto___14976 = G__14977;
continue;
} else {
}
break;
}

var G__14907 = args14905.length;
switch (G__14907) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14905.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12297__auto___14979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto___14979,out){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto___14979,out){
return (function (state_14945){
var state_val_14946 = (state_14945[(1)]);
if((state_val_14946 === (7))){
var inst_14941 = (state_14945[(2)]);
var state_14945__$1 = state_14945;
var statearr_14947_14980 = state_14945__$1;
(statearr_14947_14980[(2)] = inst_14941);

(statearr_14947_14980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (1))){
var inst_14908 = (new Array(n));
var inst_14909 = inst_14908;
var inst_14910 = (0);
var state_14945__$1 = (function (){var statearr_14948 = state_14945;
(statearr_14948[(7)] = inst_14910);

(statearr_14948[(8)] = inst_14909);

return statearr_14948;
})();
var statearr_14949_14981 = state_14945__$1;
(statearr_14949_14981[(2)] = null);

(statearr_14949_14981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (4))){
var inst_14913 = (state_14945[(9)]);
var inst_14913__$1 = (state_14945[(2)]);
var inst_14914 = (inst_14913__$1 == null);
var inst_14915 = cljs.core.not.call(null,inst_14914);
var state_14945__$1 = (function (){var statearr_14950 = state_14945;
(statearr_14950[(9)] = inst_14913__$1);

return statearr_14950;
})();
if(inst_14915){
var statearr_14951_14982 = state_14945__$1;
(statearr_14951_14982[(1)] = (5));

} else {
var statearr_14952_14983 = state_14945__$1;
(statearr_14952_14983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (15))){
var inst_14935 = (state_14945[(2)]);
var state_14945__$1 = state_14945;
var statearr_14953_14984 = state_14945__$1;
(statearr_14953_14984[(2)] = inst_14935);

(statearr_14953_14984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (13))){
var state_14945__$1 = state_14945;
var statearr_14954_14985 = state_14945__$1;
(statearr_14954_14985[(2)] = null);

(statearr_14954_14985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (6))){
var inst_14910 = (state_14945[(7)]);
var inst_14931 = (inst_14910 > (0));
var state_14945__$1 = state_14945;
if(cljs.core.truth_(inst_14931)){
var statearr_14955_14986 = state_14945__$1;
(statearr_14955_14986[(1)] = (12));

} else {
var statearr_14956_14987 = state_14945__$1;
(statearr_14956_14987[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (3))){
var inst_14943 = (state_14945[(2)]);
var state_14945__$1 = state_14945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14945__$1,inst_14943);
} else {
if((state_val_14946 === (12))){
var inst_14909 = (state_14945[(8)]);
var inst_14933 = cljs.core.vec.call(null,inst_14909);
var state_14945__$1 = state_14945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14945__$1,(15),out,inst_14933);
} else {
if((state_val_14946 === (2))){
var state_14945__$1 = state_14945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14945__$1,(4),ch);
} else {
if((state_val_14946 === (11))){
var inst_14925 = (state_14945[(2)]);
var inst_14926 = (new Array(n));
var inst_14909 = inst_14926;
var inst_14910 = (0);
var state_14945__$1 = (function (){var statearr_14957 = state_14945;
(statearr_14957[(10)] = inst_14925);

(statearr_14957[(7)] = inst_14910);

(statearr_14957[(8)] = inst_14909);

return statearr_14957;
})();
var statearr_14958_14988 = state_14945__$1;
(statearr_14958_14988[(2)] = null);

(statearr_14958_14988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (9))){
var inst_14909 = (state_14945[(8)]);
var inst_14923 = cljs.core.vec.call(null,inst_14909);
var state_14945__$1 = state_14945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14945__$1,(11),out,inst_14923);
} else {
if((state_val_14946 === (5))){
var inst_14913 = (state_14945[(9)]);
var inst_14918 = (state_14945[(11)]);
var inst_14910 = (state_14945[(7)]);
var inst_14909 = (state_14945[(8)]);
var inst_14917 = (inst_14909[inst_14910] = inst_14913);
var inst_14918__$1 = (inst_14910 + (1));
var inst_14919 = (inst_14918__$1 < n);
var state_14945__$1 = (function (){var statearr_14959 = state_14945;
(statearr_14959[(12)] = inst_14917);

(statearr_14959[(11)] = inst_14918__$1);

return statearr_14959;
})();
if(cljs.core.truth_(inst_14919)){
var statearr_14960_14989 = state_14945__$1;
(statearr_14960_14989[(1)] = (8));

} else {
var statearr_14961_14990 = state_14945__$1;
(statearr_14961_14990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (14))){
var inst_14938 = (state_14945[(2)]);
var inst_14939 = cljs.core.async.close_BANG_.call(null,out);
var state_14945__$1 = (function (){var statearr_14963 = state_14945;
(statearr_14963[(13)] = inst_14938);

return statearr_14963;
})();
var statearr_14964_14991 = state_14945__$1;
(statearr_14964_14991[(2)] = inst_14939);

(statearr_14964_14991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (10))){
var inst_14929 = (state_14945[(2)]);
var state_14945__$1 = state_14945;
var statearr_14965_14992 = state_14945__$1;
(statearr_14965_14992[(2)] = inst_14929);

(statearr_14965_14992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (8))){
var inst_14918 = (state_14945[(11)]);
var inst_14909 = (state_14945[(8)]);
var tmp14962 = inst_14909;
var inst_14909__$1 = tmp14962;
var inst_14910 = inst_14918;
var state_14945__$1 = (function (){var statearr_14966 = state_14945;
(statearr_14966[(7)] = inst_14910);

(statearr_14966[(8)] = inst_14909__$1);

return statearr_14966;
})();
var statearr_14967_14993 = state_14945__$1;
(statearr_14967_14993[(2)] = null);

(statearr_14967_14993[(1)] = (2));


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
});})(c__12297__auto___14979,out))
;
return ((function (switch__12185__auto__,c__12297__auto___14979,out){
return (function() {
var cljs$core$async$state_machine__12186__auto__ = null;
var cljs$core$async$state_machine__12186__auto____0 = (function (){
var statearr_14971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14971[(0)] = cljs$core$async$state_machine__12186__auto__);

(statearr_14971[(1)] = (1));

return statearr_14971;
});
var cljs$core$async$state_machine__12186__auto____1 = (function (state_14945){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_14945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e14972){if((e14972 instanceof Object)){
var ex__12189__auto__ = e14972;
var statearr_14973_14994 = state_14945;
(statearr_14973_14994[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14995 = state_14945;
state_14945 = G__14995;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$state_machine__12186__auto__ = function(state_14945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12186__auto____1.call(this,state_14945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12186__auto____0;
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12186__auto____1;
return cljs$core$async$state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto___14979,out))
})();
var state__12299__auto__ = (function (){var statearr_14974 = f__12298__auto__.call(null);
(statearr_14974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto___14979);

return statearr_14974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto___14979,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args14996 = [];
var len__7652__auto___15070 = arguments.length;
var i__7653__auto___15071 = (0);
while(true){
if((i__7653__auto___15071 < len__7652__auto___15070)){
args14996.push((arguments[i__7653__auto___15071]));

var G__15072 = (i__7653__auto___15071 + (1));
i__7653__auto___15071 = G__15072;
continue;
} else {
}
break;
}

var G__14998 = args14996.length;
switch (G__14998) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14996.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12297__auto___15074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12297__auto___15074,out){
return (function (){
var f__12298__auto__ = (function (){var switch__12185__auto__ = ((function (c__12297__auto___15074,out){
return (function (state_15040){
var state_val_15041 = (state_15040[(1)]);
if((state_val_15041 === (7))){
var inst_15036 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
var statearr_15042_15075 = state_15040__$1;
(statearr_15042_15075[(2)] = inst_15036);

(statearr_15042_15075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (1))){
var inst_14999 = [];
var inst_15000 = inst_14999;
var inst_15001 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15040__$1 = (function (){var statearr_15043 = state_15040;
(statearr_15043[(7)] = inst_15000);

(statearr_15043[(8)] = inst_15001);

return statearr_15043;
})();
var statearr_15044_15076 = state_15040__$1;
(statearr_15044_15076[(2)] = null);

(statearr_15044_15076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (4))){
var inst_15004 = (state_15040[(9)]);
var inst_15004__$1 = (state_15040[(2)]);
var inst_15005 = (inst_15004__$1 == null);
var inst_15006 = cljs.core.not.call(null,inst_15005);
var state_15040__$1 = (function (){var statearr_15045 = state_15040;
(statearr_15045[(9)] = inst_15004__$1);

return statearr_15045;
})();
if(inst_15006){
var statearr_15046_15077 = state_15040__$1;
(statearr_15046_15077[(1)] = (5));

} else {
var statearr_15047_15078 = state_15040__$1;
(statearr_15047_15078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (15))){
var inst_15030 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
var statearr_15048_15079 = state_15040__$1;
(statearr_15048_15079[(2)] = inst_15030);

(statearr_15048_15079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (13))){
var state_15040__$1 = state_15040;
var statearr_15049_15080 = state_15040__$1;
(statearr_15049_15080[(2)] = null);

(statearr_15049_15080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (6))){
var inst_15000 = (state_15040[(7)]);
var inst_15025 = inst_15000.length;
var inst_15026 = (inst_15025 > (0));
var state_15040__$1 = state_15040;
if(cljs.core.truth_(inst_15026)){
var statearr_15050_15081 = state_15040__$1;
(statearr_15050_15081[(1)] = (12));

} else {
var statearr_15051_15082 = state_15040__$1;
(statearr_15051_15082[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (3))){
var inst_15038 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15040__$1,inst_15038);
} else {
if((state_val_15041 === (12))){
var inst_15000 = (state_15040[(7)]);
var inst_15028 = cljs.core.vec.call(null,inst_15000);
var state_15040__$1 = state_15040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15040__$1,(15),out,inst_15028);
} else {
if((state_val_15041 === (2))){
var state_15040__$1 = state_15040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15040__$1,(4),ch);
} else {
if((state_val_15041 === (11))){
var inst_15004 = (state_15040[(9)]);
var inst_15008 = (state_15040[(10)]);
var inst_15018 = (state_15040[(2)]);
var inst_15019 = [];
var inst_15020 = inst_15019.push(inst_15004);
var inst_15000 = inst_15019;
var inst_15001 = inst_15008;
var state_15040__$1 = (function (){var statearr_15052 = state_15040;
(statearr_15052[(11)] = inst_15020);

(statearr_15052[(7)] = inst_15000);

(statearr_15052[(12)] = inst_15018);

(statearr_15052[(8)] = inst_15001);

return statearr_15052;
})();
var statearr_15053_15083 = state_15040__$1;
(statearr_15053_15083[(2)] = null);

(statearr_15053_15083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (9))){
var inst_15000 = (state_15040[(7)]);
var inst_15016 = cljs.core.vec.call(null,inst_15000);
var state_15040__$1 = state_15040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15040__$1,(11),out,inst_15016);
} else {
if((state_val_15041 === (5))){
var inst_15004 = (state_15040[(9)]);
var inst_15001 = (state_15040[(8)]);
var inst_15008 = (state_15040[(10)]);
var inst_15008__$1 = f.call(null,inst_15004);
var inst_15009 = cljs.core._EQ_.call(null,inst_15008__$1,inst_15001);
var inst_15010 = cljs.core.keyword_identical_QMARK_.call(null,inst_15001,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15011 = (inst_15009) || (inst_15010);
var state_15040__$1 = (function (){var statearr_15054 = state_15040;
(statearr_15054[(10)] = inst_15008__$1);

return statearr_15054;
})();
if(cljs.core.truth_(inst_15011)){
var statearr_15055_15084 = state_15040__$1;
(statearr_15055_15084[(1)] = (8));

} else {
var statearr_15056_15085 = state_15040__$1;
(statearr_15056_15085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (14))){
var inst_15033 = (state_15040[(2)]);
var inst_15034 = cljs.core.async.close_BANG_.call(null,out);
var state_15040__$1 = (function (){var statearr_15058 = state_15040;
(statearr_15058[(13)] = inst_15033);

return statearr_15058;
})();
var statearr_15059_15086 = state_15040__$1;
(statearr_15059_15086[(2)] = inst_15034);

(statearr_15059_15086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (10))){
var inst_15023 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
var statearr_15060_15087 = state_15040__$1;
(statearr_15060_15087[(2)] = inst_15023);

(statearr_15060_15087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (8))){
var inst_15004 = (state_15040[(9)]);
var inst_15000 = (state_15040[(7)]);
var inst_15008 = (state_15040[(10)]);
var inst_15013 = inst_15000.push(inst_15004);
var tmp15057 = inst_15000;
var inst_15000__$1 = tmp15057;
var inst_15001 = inst_15008;
var state_15040__$1 = (function (){var statearr_15061 = state_15040;
(statearr_15061[(14)] = inst_15013);

(statearr_15061[(7)] = inst_15000__$1);

(statearr_15061[(8)] = inst_15001);

return statearr_15061;
})();
var statearr_15062_15088 = state_15040__$1;
(statearr_15062_15088[(2)] = null);

(statearr_15062_15088[(1)] = (2));


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
});})(c__12297__auto___15074,out))
;
return ((function (switch__12185__auto__,c__12297__auto___15074,out){
return (function() {
var cljs$core$async$state_machine__12186__auto__ = null;
var cljs$core$async$state_machine__12186__auto____0 = (function (){
var statearr_15066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15066[(0)] = cljs$core$async$state_machine__12186__auto__);

(statearr_15066[(1)] = (1));

return statearr_15066;
});
var cljs$core$async$state_machine__12186__auto____1 = (function (state_15040){
while(true){
var ret_value__12187__auto__ = (function (){try{while(true){
var result__12188__auto__ = switch__12185__auto__.call(null,state_15040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12188__auto__;
}
break;
}
}catch (e15067){if((e15067 instanceof Object)){
var ex__12189__auto__ = e15067;
var statearr_15068_15089 = state_15040;
(statearr_15068_15089[(5)] = ex__12189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15090 = state_15040;
state_15040 = G__15090;
continue;
} else {
return ret_value__12187__auto__;
}
break;
}
});
cljs$core$async$state_machine__12186__auto__ = function(state_15040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12186__auto____1.call(this,state_15040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12186__auto____0;
cljs$core$async$state_machine__12186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12186__auto____1;
return cljs$core$async$state_machine__12186__auto__;
})()
;})(switch__12185__auto__,c__12297__auto___15074,out))
})();
var state__12299__auto__ = (function (){var statearr_15069 = f__12298__auto__.call(null);
(statearr_15069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12297__auto___15074);

return statearr_15069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12299__auto__);
});})(c__12297__auto___15074,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map