// Compiled by ClojureScript 1.9.93 {}
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.reader');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count.call(null,self__.item__GT_priority);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.val.call(null,f)),cljs.core.key.call(null,f)], null);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
var item_set = cljs.core.val.call(null,f);
var item = cljs.core.first.call(null,item_set);
var priority = cljs.core.key.call(null,f);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq.call(null,(function (){var iter__7357__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__8889(s__8890){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__8890__$1 = s__8890;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8890__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__8898 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__8898,(0),null);
var item_set = cljs.core.nth.call(null,vec__8898,(1),null);
var iterys__7353__auto__ = ((function (s__8890__$1,vec__8898,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__8889_$_iter__8891(s__8892){
return (new cljs.core.LazySeq(null,((function (s__8890__$1,vec__8898,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__8892__$1 = s__8892;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__8892__$1);
if(temp__4657__auto____$1){
var s__8892__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8892__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__8892__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__8894 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__8893 = (0);
while(true){
if((i__8893 < size__7356__auto__)){
var item = cljs.core._nth.call(null,c__7355__auto__,i__8893);
cljs.core.chunk_append.call(null,b__8894,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__8925 = (i__8893 + (1));
i__8893 = G__8925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8894),tailrecursion$priority_map$iter__8889_$_iter__8891.call(null,cljs.core.chunk_rest.call(null,s__8892__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8894),null);
}
} else {
var item = cljs.core.first.call(null,s__8892__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__8889_$_iter__8891.call(null,cljs.core.rest.call(null,s__8892__$2)));
}
} else {
return null;
}
break;
}
});})(s__8890__$1,vec__8898,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__8890__$1,vec__8898,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__7354__auto__ = cljs.core.seq.call(null,iterys__7353__auto__.call(null,item_set));
if(fs__7354__auto__){
return cljs.core.concat.call(null,fs__7354__auto__,tailrecursion$priority_map$iter__8889.call(null,cljs.core.rest.call(null,s__8890__$1)));
} else {
var G__8926 = cljs.core.rest.call(null,s__8890__$1);
s__8890__$1 = G__8926;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__7357__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__7012__auto__ = self__.__hash;
if(!((h__7012__auto__ == null))){
return h__7012__auto__;
} else {
var h__7012__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);
self__.__hash = h__7012__auto____$1;

return h__7012__auto____$1;
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv.call(null,self__.item__GT_priority,other);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517));
if(cljs.core._EQ_.call(null,priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var item_set = self__.priority__GT_set_of_items.call(null,priority);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__4655__auto__ = cljs.core.get.call(null,self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__4655__auto__)){
var current_priority = temp__4655__auto__;
if(cljs.core._EQ_.call(null,current_priority,priority)){
return this$__$1;
} else {
var item_set = cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,current_priority),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,current_priority,cljs.core.disj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority),item),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
}
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq.call(null,(function (){var iter__7357__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__8901(s__8902){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__8902__$1 = s__8902;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8902__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__8910 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__8910,(0),null);
var item_set = cljs.core.nth.call(null,vec__8910,(1),null);
var iterys__7353__auto__ = ((function (s__8902__$1,vec__8910,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__8901_$_iter__8903(s__8904){
return (new cljs.core.LazySeq(null,((function (s__8902__$1,vec__8910,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__8904__$1 = s__8904;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__8904__$1);
if(temp__4657__auto____$1){
var s__8904__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8904__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__8904__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__8906 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__8905 = (0);
while(true){
if((i__8905 < size__7356__auto__)){
var item = cljs.core._nth.call(null,c__7355__auto__,i__8905);
cljs.core.chunk_append.call(null,b__8906,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__8927 = (i__8905 + (1));
i__8905 = G__8927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8906),tailrecursion$priority_map$iter__8901_$_iter__8903.call(null,cljs.core.chunk_rest.call(null,s__8904__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8906),null);
}
} else {
var item = cljs.core.first.call(null,s__8904__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__8901_$_iter__8903.call(null,cljs.core.rest.call(null,s__8904__$2)));
}
} else {
return null;
}
break;
}
});})(s__8902__$1,vec__8910,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__8902__$1,vec__8910,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__7354__auto__ = cljs.core.seq.call(null,iterys__7353__auto__.call(null,item_set));
if(fs__7354__auto__){
return cljs.core.concat.call(null,fs__7354__auto__,tailrecursion$priority_map$iter__8901.call(null,cljs.core.rest.call(null,s__8902__$1)));
} else {
var G__8928 = cljs.core.rest.call(null,s__8902__$1);
s__8902__$1 = G__8928;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7357__auto__.call(null,self__.priority__GT_set_of_items);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__8929 = null;
var G__8929__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__8929__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__8929 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__8929__2.call(this,self__,item);
case 3:
return G__8929__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8929.cljs$core$IFn$_invoke$arity$2 = G__8929__2;
G__8929.cljs$core$IFn$_invoke$arity$3 = G__8929__3;
return G__8929;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args8888){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8888)));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.call(null,self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.call(null,self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
return cljs.core.seq.call(null,(function (){var iter__7357__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__8913(s__8914){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__8914__$1 = s__8914;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8914__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__8922 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__8922,(0),null);
var item_set = cljs.core.nth.call(null,vec__8922,(1),null);
var iterys__7353__auto__ = ((function (s__8914__$1,vec__8922,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__8913_$_iter__8915(s__8916){
return (new cljs.core.LazySeq(null,((function (s__8914__$1,vec__8922,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__8916__$1 = s__8916;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__8916__$1);
if(temp__4657__auto____$1){
var s__8916__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8916__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__8916__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__8918 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__8917 = (0);
while(true){
if((i__8917 < size__7356__auto__)){
var item = cljs.core._nth.call(null,c__7355__auto__,i__8917);
cljs.core.chunk_append.call(null,b__8918,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__8930 = (i__8917 + (1));
i__8917 = G__8930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8918),tailrecursion$priority_map$iter__8913_$_iter__8915.call(null,cljs.core.chunk_rest.call(null,s__8916__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8918),null);
}
} else {
var item = cljs.core.first.call(null,s__8916__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__8913_$_iter__8915.call(null,cljs.core.rest.call(null,s__8916__$2)));
}
} else {
return null;
}
break;
}
});})(s__8914__$1,vec__8922,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__8914__$1,vec__8922,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__7354__auto__ = cljs.core.seq.call(null,iterys__7353__auto__.call(null,item_set));
if(fs__7354__auto__){
return cljs.core.concat.call(null,fs__7354__auto__,tailrecursion$priority_map$iter__8913.call(null,cljs.core.rest.call(null,s__8914__$1)));
} else {
var G__8931 = cljs.core.rest.call(null,s__8914__$1);
s__8914__$1 = G__8931;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__7357__auto__.call(null,sets);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return cljs.core.val.call(null,entry);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
});

tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
});
tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_.call(null,elems)){
return cljs.core.into.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
return cljs.reader.reader_error.call(null,null,"Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_.call(null,"tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__7659__auto__ = [];
var len__7652__auto___8933 = arguments.length;
var i__7653__auto___8934 = (0);
while(true){
if((i__7653__auto___8934 < len__7652__auto___8933)){
args__7659__auto__.push((arguments[i__7653__auto___8934]));

var G__8935 = (i__7653__auto___8934 + (1));
i__7653__auto___8934 = G__8935;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__8936 = cljs.core.nnext.call(null,in$);
var G__8937 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__8936;
out = G__8937;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq8932){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8932));
});

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__7659__auto__ = [];
var len__7652__auto___8940 = arguments.length;
var i__7653__auto___8941 = (0);
while(true){
if((i__7653__auto___8941 < len__7652__auto___8940)){
args__7659__auto__.push((arguments[i__7653__auto___8941]));

var G__8942 = (i__7653__auto___8941 + (1));
i__7653__auto___8941 = G__8942;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__8943 = cljs.core.nnext.call(null,in$);
var G__8944 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__8943;
out = G__8944;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq8938){
var G__8939 = cljs.core.first.call(null,seq8938);
var seq8938__$1 = cljs.core.next.call(null,seq8938);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__8939,seq8938__$1);
});


//# sourceMappingURL=priority_map.js.map