// Compiled by ClojureScript 1.9.93 {}
goog.provide('adzerk.boot_cljs_repl');
goog.require('cljs.core');
goog.require('weasel.repl');
var repl_conn_28309 = null;
if(cljs.core.truth_((function (){var and__6565__auto__ = repl_conn_28309;
if(cljs.core.truth_(and__6565__auto__)){
return cljs.core.not.call(null,weasel.repl.alive_QMARK_.call(null));
} else {
return and__6565__auto__;
}
})())){
weasel.repl.connect.call(null,null);
} else {
}

//# sourceMappingURL=boot_cljs_repl.js.map