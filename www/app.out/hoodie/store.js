// Compiled by ClojureScript 1.9.93 {}
goog.provide('hoodie.store');
goog.require('cljs.core');
goog.require('app.transit');

/**
 * Low level methods to interact with native HoodieStore object.
 * @interface
 */
hoodie.store.HoodieStoreNative = function(){};

/**
 * Returns a set of data types of atom stores
 */
hoodie.store.data_types = (function hoodie$store$data_types(this$){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreNative$data_types$arity$1 == null)))){
return this$.hoodie$store$HoodieStoreNative$data_types$arity$1(this$);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.data_types[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$);
} else {
var m__7241__auto____$1 = (hoodie.store.data_types["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreNative.data-types",this$);
}
}
}
});

/**
 * Returns atom store for a given data-type
 */
hoodie.store.atom_store = (function hoodie$store$atom_store(this$,data_type){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreNative$atom_store$arity$2 == null)))){
return this$.hoodie$store$HoodieStoreNative$atom_store$arity$2(this$,data_type);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.atom_store[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,data_type);
} else {
var m__7241__auto____$1 = (hoodie.store.atom_store["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,data_type);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreNative.atom-store",this$);
}
}
}
});

/**
 * Event listener to receive new object (in transit format) and add it to HoodieStore.
 */
hoodie.store.add_to_atom = (function hoodie$store$add_to_atom(this$,data_type,new_obj){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreNative$add_to_atom$arity$3 == null)))){
return this$.hoodie$store$HoodieStoreNative$add_to_atom$arity$3(this$,data_type,new_obj);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.add_to_atom[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,data_type,new_obj);
} else {
var m__7241__auto____$1 = (hoodie.store.add_to_atom["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,data_type,new_obj);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreNative.add-to-atom",this$);
}
}
}
});

/**
 * Event listener to track newly deleted object and remove it from HoodieStore.
 */
hoodie.store.remove_from_atom = (function hoodie$store$remove_from_atom(this$,data_type,dead_obj){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreNative$remove_from_atom$arity$3 == null)))){
return this$.hoodie$store$HoodieStoreNative$remove_from_atom$arity$3(this$,data_type,dead_obj);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.remove_from_atom[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,data_type,dead_obj);
} else {
var m__7241__auto____$1 = (hoodie.store.remove_from_atom["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,data_type,dead_obj);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreNative.remove-from-atom",this$);
}
}
}
});

/**
 * Connect a HoodieStore instance to server for updates
 */
hoodie.store.connect = (function hoodie$store$connect(this$){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreNative$connect$arity$1 == null)))){
return this$.hoodie$store$HoodieStoreNative$connect$arity$1(this$);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.connect[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$);
} else {
var m__7241__auto____$1 = (hoodie.store.connect["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreNative.connect",this$);
}
}
}
});

/**
 * Async style find an item with a given id. Will convert back to
 *  Clojure datastructure before applying callback.
 */
hoodie.store.find = (function hoodie$store$find(this$,data_type,id,cb){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreNative$find$arity$4 == null)))){
return this$.hoodie$store$HoodieStoreNative$find$arity$4(this$,data_type,id,cb);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.find[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,data_type,id,cb);
} else {
var m__7241__auto____$1 = (hoodie.store.find["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,data_type,id,cb);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreNative.find",this$);
}
}
}
});

/**
 * Find all items in a store. Returns a promise.
 */
hoodie.store.find_all = (function hoodie$store$find_all(this$,data_type){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreNative$find_all$arity$2 == null)))){
return this$.hoodie$store$HoodieStoreNative$find_all$arity$2(this$,data_type);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.find_all[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,data_type);
} else {
var m__7241__auto____$1 = (hoodie.store.find_all["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,data_type);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreNative.find-all",this$);
}
}
}
});

/**
 * Callback for find-all. Used in init.
 */
hoodie.store.on_find_all = (function hoodie$store$on_find_all(this$,data_type){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreNative$on_find_all$arity$2 == null)))){
return this$.hoodie$store$HoodieStoreNative$on_find_all$arity$2(this$,data_type);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.on_find_all[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,data_type);
} else {
var m__7241__auto____$1 = (hoodie.store.on_find_all["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,data_type);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreNative.on-find-all",this$);
}
}
}
});

/**
 * This function get called when a HoodieStore is created to
 *  triggers event listeners that synchronize HoodieStore atom with
 *  native Hoodie store object.
 */
hoodie.store.init = (function hoodie$store$init(this$){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreNative$init$arity$1 == null)))){
return this$.hoodie$store$HoodieStoreNative$init$arity$1(this$);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.init[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$);
} else {
var m__7241__auto____$1 = (hoodie.store.init["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreNative.init",this$);
}
}
}
});


/**
 * Set of methods to interact with a HoodieStore using Clojure(script)
 *   datastructure.
 * @interface
 */
hoodie.store.HoodieStoreData = function(){};

/**
 * Adds an item to Hoodie store. Item's type should be Clojure datastructure especially a hash map.
 */
hoodie.store.add_BANG_ = (function hoodie$store$add_BANG_(this$,data_type,item){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreData$add_BANG_$arity$3 == null)))){
return this$.hoodie$store$HoodieStoreData$add_BANG_$arity$3(this$,data_type,item);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.add_BANG_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,data_type,item);
} else {
var m__7241__auto____$1 = (hoodie.store.add_BANG_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,data_type,item);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreData.add!",this$);
}
}
}
});

/**
 * Removes an item with given id from Hoodie store.
 */
hoodie.store.remove_BANG_ = (function hoodie$store$remove_BANG_(this$,data_type,id){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreData$remove_BANG_$arity$3 == null)))){
return this$.hoodie$store$HoodieStoreData$remove_BANG_$arity$3(this$,data_type,id);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.remove_BANG_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,data_type,id);
} else {
var m__7241__auto____$1 = (hoodie.store.remove_BANG_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,data_type,id);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreData.remove!",this$);
}
}
}
});

/**
 * Removes items living in Hoodie store.
 */
hoodie.store.remove_all_BANG_ = (function hoodie$store$remove_all_BANG_(this$,data_type){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreData$remove_all_BANG_$arity$2 == null)))){
return this$.hoodie$store$HoodieStoreData$remove_all_BANG_$arity$2(this$,data_type);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.remove_all_BANG_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,data_type);
} else {
var m__7241__auto____$1 = (hoodie.store.remove_all_BANG_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,data_type);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreData.remove-all!",this$);
}
}
}
});

/**
 * Updates an item with given id in Hoodie store. Accept either a
 *  pure updater function or a Clojure data structure.
 */
hoodie.store.update_BANG_ = (function hoodie$store$update_BANG_(this$,data_type,id,fn_BAR_data){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreData$update_BANG_$arity$4 == null)))){
return this$.hoodie$store$HoodieStoreData$update_BANG_$arity$4(this$,data_type,id,fn_BAR_data);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.update_BANG_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,data_type,id,fn_BAR_data);
} else {
var m__7241__auto____$1 = (hoodie.store.update_BANG_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,data_type,id,fn_BAR_data);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreData.update!",this$);
}
}
}
});

/**
 * Publish an item with given id from HoodieStore to GlobalStore of
 *  the given type.
 */
hoodie.store.publish_BANG_ = (function hoodie$store$publish_BANG_(this$,data_type,id){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreData$publish_BANG_$arity$3 == null)))){
return this$.hoodie$store$HoodieStoreData$publish_BANG_$arity$3(this$,data_type,id);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.publish_BANG_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,data_type,id);
} else {
var m__7241__auto____$1 = (hoodie.store.publish_BANG_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,data_type,id);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreData.publish!",this$);
}
}
}
});

/**
 * Unpublish an item with given id in HoodieStore from GlobalStore
 *  of the given type.
 */
hoodie.store.unpublish_BANG_ = (function hoodie$store$unpublish_BANG_(this$,data_type,id){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreData$unpublish_BANG_$arity$3 == null)))){
return this$.hoodie$store$HoodieStoreData$unpublish_BANG_$arity$3(this$,data_type,id);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.unpublish_BANG_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,data_type,id);
} else {
var m__7241__auto____$1 = (hoodie.store.unpublish_BANG_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,data_type,id);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreData.unpublish!",this$);
}
}
}
});

/**
 * Publish all items from HoodieStore to GlobalStore of the given
 *  type.
 */
hoodie.store.publish_all_BANG_ = (function hoodie$store$publish_all_BANG_(this$,data_type){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreData$publish_all_BANG_$arity$2 == null)))){
return this$.hoodie$store$HoodieStoreData$publish_all_BANG_$arity$2(this$,data_type);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.publish_all_BANG_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,data_type);
} else {
var m__7241__auto____$1 = (hoodie.store.publish_all_BANG_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,data_type);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreData.publish-all!",this$);
}
}
}
});

/**
 * Unpublish all items in HoodieStore from GlobalStore of the given
 *  type.
 */
hoodie.store.unpublish_all_BANG_ = (function hoodie$store$unpublish_all_BANG_(this$,data_type){
if((!((this$ == null))) && (!((this$.hoodie$store$HoodieStoreData$unpublish_all_BANG_$arity$2 == null)))){
return this$.hoodie$store$HoodieStoreData$unpublish_all_BANG_$arity$2(this$,data_type);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoodie.store.unpublish_all_BANG_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,data_type);
} else {
var m__7241__auto____$1 = (hoodie.store.unpublish_all_BANG_["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,data_type);
} else {
throw cljs.core.missing_protocol.call(null,"HoodieStoreData.unpublish-all!",this$);
}
}
}
});

(hoodie.store.HoodieStoreNative["object"] = true);

(hoodie.store.data_types["object"] = (function (this$){
return cljs.core.set.call(null,cljs.core.keys.call(null,this$.atom_stores));
}));

(hoodie.store.atom_store["object"] = (function (this$,data_type){
return cljs.core.get.call(null,this$.atom_stores,data_type);
}));

(hoodie.store.add_to_atom["object"] = (function (this$,data_type,new_obj){
return cljs.core.swap_BANG_.call(null,hoodie.store.atom_store.call(null,this$,data_type),cljs.core.assoc,new_obj.id,app.transit.untransit.call(null,new_obj));
}));

(hoodie.store.remove_from_atom["object"] = (function (this$,data_type,dead_obj){
return cljs.core.swap_BANG_.call(null,hoodie.store.atom_store.call(null,this$,data_type),cljs.core.dissoc,dead_obj.id,dead_obj);
}));

(hoodie.store.find["object"] = (function (this$,data_type,id,cb){
return this$.native_store.find(data_type,id).done((function (obj){
return cb.call(null,app.transit.untransit.call(null,obj));
}));
}));

(hoodie.store.find_all["object"] = (function (this$,data_type){
return this$.native_store.findAll(data_type);
}));

(hoodie.store.on_find_all["object"] = (function (this$,data_type){
return (function (all){
cljs.core.reset_BANG_.call(null,hoodie.store.atom_store.call(null,this$,data_type),app.transit.transit_all.call(null,all));

this$.native_store.on([cljs.core.str(data_type),cljs.core.str(":change")].join(''),(function (change_type,data){
if(cljs.core._EQ_.call(null,"remove",change_type)){
return hoodie.store.remove_from_atom.call(null,this$,data_type,data);
} else {
return hoodie.store.add_to_atom.call(null,this$,data_type,data);
}
}));

return hoodie.store.connect.call(null,this$);
});
}));

(hoodie.store.init["object"] = (function (this$){
var seq__9649 = cljs.core.seq.call(null,hoodie.store.data_types.call(null,this$));
var chunk__9650 = null;
var count__9651 = (0);
var i__9652 = (0);
while(true){
if((i__9652 < count__9651)){
var data_type = cljs.core._nth.call(null,chunk__9650,i__9652);
hoodie.store.find_all.call(null,this$,data_type).done(hoodie.store.on_find_all.call(null,this$,data_type));

var G__9653 = seq__9649;
var G__9654 = chunk__9650;
var G__9655 = count__9651;
var G__9656 = (i__9652 + (1));
seq__9649 = G__9653;
chunk__9650 = G__9654;
count__9651 = G__9655;
i__9652 = G__9656;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9649);
if(temp__4657__auto__){
var seq__9649__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9649__$1)){
var c__7388__auto__ = cljs.core.chunk_first.call(null,seq__9649__$1);
var G__9657 = cljs.core.chunk_rest.call(null,seq__9649__$1);
var G__9658 = c__7388__auto__;
var G__9659 = cljs.core.count.call(null,c__7388__auto__);
var G__9660 = (0);
seq__9649 = G__9657;
chunk__9650 = G__9658;
count__9651 = G__9659;
i__9652 = G__9660;
continue;
} else {
var data_type = cljs.core.first.call(null,seq__9649__$1);
hoodie.store.find_all.call(null,this$,data_type).done(hoodie.store.on_find_all.call(null,this$,data_type));

var G__9661 = cljs.core.next.call(null,seq__9649__$1);
var G__9662 = null;
var G__9663 = (0);
var G__9664 = (0);
seq__9649 = G__9661;
chunk__9650 = G__9662;
count__9651 = G__9663;
i__9652 = G__9664;
continue;
}
} else {
return null;
}
}
break;
}
}));

(hoodie.store.HoodieStoreData["object"] = true);

(hoodie.store.add_BANG_["object"] = (function (this$,data_type,data){
return this$.native_store.add(data_type,app.transit.transit.call(null,data));
}));

(hoodie.store.remove_BANG_["object"] = (function (this$,data_type,id){
return this$.native_store.remove(data_type,id);
}));

(hoodie.store.remove_all_BANG_["object"] = (function (this$,data_type){
return this$.native_store.removeAll(data_type);
}));

(hoodie.store.update_BANG_["object"] = (function (this$,data_type,id,fn_BAR_data){
return hoodie.store.find.call(null,this$,data_type,id,(function hoodie$store$cb(old_data){
var new_data = ((cljs.core.fn_QMARK_.call(null,fn_BAR_data))?fn_BAR_data.call(null,old_data):cljs.core.merge.call(null,old_data,fn_BAR_data));
return this$.native_store.update(data_type,id,app.transit.transit.call(null,new_data));
}));
}));

(hoodie.store.publish_BANG_["object"] = (function (this$,data_type,id){
return this$.native_store.find(data_type,id).publish();
}));

(hoodie.store.unpublish_BANG_["object"] = (function (this$,data_type,id){
return this$.native_store.find(data_type,id).unpublish();
}));

(hoodie.store.publish_all_BANG_["object"] = (function (this$,data_type){
return this$.native_store.findAll(data_type).publish();
}));

(hoodie.store.unpublish_all_BANG_["object"] = (function (this$,data_type){
return this$.native_store.findAll(data_type).unpublish();
}));

/**
* @constructor
*/
hoodie.store.UserStore = (function (app,native_store,atom_stores){
this.app = app;
this.native_store = native_store;
this.atom_stores = atom_stores;
})

hoodie.store.UserStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"native-store","native-store",1033217720,null),new cljs.core.Symbol(null,"atom-stores","atom-stores",1969103488,null)], null);
});

hoodie.store.UserStore.cljs$lang$type = true;

hoodie.store.UserStore.cljs$lang$ctorStr = "hoodie.store/UserStore";

hoodie.store.UserStore.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"hoodie.store/UserStore");
});

hoodie.store.__GT_UserStore = (function hoodie$store$__GT_UserStore(app__$1,native_store,atom_stores){
return (new hoodie.store.UserStore(app__$1,native_store,atom_stores));
});


/**
* @constructor
*/
hoodie.store.GlobalStore = (function (app,native_store,atom_stores){
this.app = app;
this.native_store = native_store;
this.atom_stores = atom_stores;
})

hoodie.store.GlobalStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"native-store","native-store",1033217720,null),new cljs.core.Symbol(null,"atom-stores","atom-stores",1969103488,null)], null);
});

hoodie.store.GlobalStore.cljs$lang$type = true;

hoodie.store.GlobalStore.cljs$lang$ctorStr = "hoodie.store/GlobalStore";

hoodie.store.GlobalStore.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"hoodie.store/GlobalStore");
});

hoodie.store.__GT_GlobalStore = (function hoodie$store$__GT_GlobalStore(app__$1,native_store,atom_stores){
return (new hoodie.store.GlobalStore(app__$1,native_store,atom_stores));
});


/**
* @constructor
*/
hoodie.store.DbStore = (function (app,native_store,atom_stores){
this.app = app;
this.native_store = native_store;
this.atom_stores = atom_stores;
})

hoodie.store.DbStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"native-store","native-store",1033217720,null),new cljs.core.Symbol(null,"atom-stores","atom-stores",1969103488,null)], null);
});

hoodie.store.DbStore.cljs$lang$type = true;

hoodie.store.DbStore.cljs$lang$ctorStr = "hoodie.store/DbStore";

hoodie.store.DbStore.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"hoodie.store/DbStore");
});

hoodie.store.__GT_DbStore = (function hoodie$store$__GT_DbStore(app__$1,native_store,atom_stores){
return (new hoodie.store.DbStore(app__$1,native_store,atom_stores));
});

hoodie.store.UserStore.prototype.hoodie$store$HoodieStoreNative$ = true;

hoodie.store.UserStore.prototype.hoodie$store$HoodieStoreNative$connect$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});
hoodie.store.DbStore.prototype.hoodie$store$HoodieStoreNative$ = true;

hoodie.store.DbStore.prototype.hoodie$store$HoodieStoreNative$connect$arity$1 = (function (this$){
var this$__$1 = this;
var native_store = this$__$1.native_store;
var reconnect = ((function (native_store,this$__$1){
return (function (){
console.log("reconnecting before too late");

return native_store.disconnect().done(((function (native_store,this$__$1){
return (function (_){
console.log("yolo");

return native_store.connect();
});})(native_store,this$__$1))
).fail(((function (native_store,this$__$1){
return (function (e){
return console.log("fuck");
});})(native_store,this$__$1))
);
});})(native_store,this$__$1))
;
return native_store.connect().done(((function (native_store,reconnect,this$__$1){
return (function (){
console.log("ds connected");

return setInterval(reconnect,(10000));
});})(native_store,reconnect,this$__$1))
).fail(((function (native_store,reconnect,this$__$1){
return (function (){
console.log("not connected");

return setInterval(reconnect,(10000));
});})(native_store,reconnect,this$__$1))
);
});
hoodie.store.GlobalStore.prototype.hoodie$store$HoodieStoreNative$ = true;

hoodie.store.GlobalStore.prototype.hoodie$store$HoodieStoreNative$connect$arity$1 = (function (this$){
var this$__$1 = this;
var native_store = this$__$1.native_store;
return native_store.disconnect().done(((function (native_store,this$__$1){
return (function (_){
console.log("yolo");

return native_store.connect();
});})(native_store,this$__$1))
).fail(((function (native_store,this$__$1){
return (function (e){
return console.log("fuck");
});})(native_store,this$__$1))
);
});
hoodie.store.create_user_store = (function hoodie$store$create_user_store(app__$1,map_of_atoms){
var user_store = (new hoodie.store.UserStore(app__$1,app__$1.store,map_of_atoms));
hoodie.store.init.call(null,user_store);

return user_store;
});
hoodie.store.create_global_store = (function hoodie$store$create_global_store(app__$1,map_of_atoms){
var global_store = (new hoodie.store.GlobalStore(app__$1,app__$1.global,map_of_atoms));
hoodie.store.init.call(null,global_store);

return global_store;
});
hoodie.store.create_db_store = (function hoodie$store$create_db_store(app__$1,db_name,map_of_atoms){
var db_store = (new hoodie.store.DbStore(app__$1,app__$1.open(db_name),map_of_atoms));
hoodie.store.init.call(null,db_store);

return db_store;
});

//# sourceMappingURL=store.js.map