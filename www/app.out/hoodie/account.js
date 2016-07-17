// Compiled by ClojureScript 1.9.93 {}
goog.provide('hoodie.account');
goog.require('cljs.core');

/**
 * @interface
 */
hoodie.account.HoodieAccount = function(){};

hoodie.account.init = (function hoodie$account$init(this$){
if((!((this$ == null))) && (!((this$.hoodie$account$HoodieAccount$init$arity$1 == null)))){
return this$.hoodie$account$HoodieAccount$init$arity$1(this$);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.account.init[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$);
} else {
var m__7241__auto____$1 = (hoodie.account.init["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieAccount.init",this$);
}
}
}
});

hoodie.account.sign_in = (function hoodie$account$sign_in(this$,username,password){
if((!((this$ == null))) && (!((this$.hoodie$account$HoodieAccount$sign_in$arity$3 == null)))){
return this$.hoodie$account$HoodieAccount$sign_in$arity$3(this$,username,password);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.account.sign_in[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,username,password);
} else {
var m__7241__auto____$1 = (hoodie.account.sign_in["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,username,password);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieAccount.sign-in",this$);
}
}
}
});

hoodie.account.sign_up = (function hoodie$account$sign_up(this$,username,password){
if((!((this$ == null))) && (!((this$.hoodie$account$HoodieAccount$sign_up$arity$3 == null)))){
return this$.hoodie$account$HoodieAccount$sign_up$arity$3(this$,username,password);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.account.sign_up[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,username,password);
} else {
var m__7241__auto____$1 = (hoodie.account.sign_up["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,username,password);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieAccount.sign-up",this$);
}
}
}
});

hoodie.account.sign_out = (function hoodie$account$sign_out(this$){
if((!((this$ == null))) && (!((this$.hoodie$account$HoodieAccount$sign_out$arity$1 == null)))){
return this$.hoodie$account$HoodieAccount$sign_out$arity$1(this$);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.account.sign_out[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$);
} else {
var m__7241__auto____$1 = (hoodie.account.sign_out["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieAccount.sign-out",this$);
}
}
}
});


/**
* @constructor
 * @implements {hoodie.account.HoodieAccount}
*/
hoodie.account.Account = (function (app,atom_store){
this.app = app;
this.atom_store = atom_store;
})
hoodie.account.Account.prototype.hoodie$account$HoodieAccount$ = true;

hoodie.account.Account.prototype.hoodie$account$HoodieAccount$init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var acc = this$__$1.app.account;
if(cljs.core.truth_(acc.hasValidSession())){
cljs.core.swap_BANG_.call(null,this$__$1.atom_store,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),acc.username);
} else {
}

var G__15304 = acc;
G__15304.on("signin",((function (G__15304,acc,this$__$1){
return (function (p1__15302_SHARP_){
return cljs.core.swap_BANG_.call(null,this$__$1.atom_store,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),p1__15302_SHARP_);
});})(G__15304,acc,this$__$1))
);

G__15304.on("signup",((function (G__15304,acc,this$__$1){
return (function (p1__15303_SHARP_){
return cljs.core.swap_BANG_.call(null,this$__$1.atom_store,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),p1__15303_SHARP_);
});})(G__15304,acc,this$__$1))
);

G__15304.on("signout",((function (G__15304,acc,this$__$1){
return (function (){
return cljs.core.swap_BANG_.call(null,this$__$1.atom_store,cljs.core.dissoc,new cljs.core.Keyword(null,"username","username",1605666410));
});})(G__15304,acc,this$__$1))
);

return G__15304;
});

hoodie.account.Account.prototype.hoodie$account$HoodieAccount$sign_in$arity$3 = (function (this$,username,password){
var self__ = this;
var this$__$1 = this;
return this$__$1.app.account.signIn(username,password);
});

hoodie.account.Account.prototype.hoodie$account$HoodieAccount$sign_up$arity$3 = (function (this$,username,password){
var self__ = this;
var this$__$1 = this;
return this$__$1.app.account.signUp(username,password);
});

hoodie.account.Account.prototype.hoodie$account$HoodieAccount$sign_out$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.app.account.signOut();
});

hoodie.account.Account.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"atom-store","atom-store",-2049898250,null)], null);
});

hoodie.account.Account.cljs$lang$type = true;

hoodie.account.Account.cljs$lang$ctorStr = "hoodie.account/Account";

hoodie.account.Account.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"hoodie.account/Account");
});

hoodie.account.__GT_Account = (function hoodie$account$__GT_Account(app__$1,atom_store){
return (new hoodie.account.Account(app__$1,atom_store));
});

hoodie.account.create_account_store = (function hoodie$account$create_account_store(app__$1,atom_store){
var store = (new hoodie.account.Account(app__$1,atom_store));
hoodie.account.init.call(null,store);

return store;
});

//# sourceMappingURL=account.js.map