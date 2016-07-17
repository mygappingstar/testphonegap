// Compiled by ClojureScript 1.9.93 {}
goog.provide('domkm.silk');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core');
domkm.silk.encode = (function domkm$silk$encode(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent(s),/[!'()]/,escape),/~/,"%7E");
});
domkm.silk.decode = (function domkm$silk$decode(s){
return decodeURIComponent(s);
});
/**
 * Takes a path seqable.
 *   Returns a string of path segments encoded, joined with `/`, and prepended with `/`.
 */
domkm.silk.encode_path = (function domkm$silk$encode_path(path){
if(cljs.core.every_QMARK_.call(null,cljs.core.not_empty,path)){
} else {
throw (new Error("Assert failed: (every? not-empty path)"));
}

return [cljs.core.str("/"),cljs.core.str(clojure.string.join.call(null,"/",cljs.core.map.call(null,domkm.silk.encode,path)))].join('');
});
/**
 * Takes a path string.
 *   Returns a vector of decoded path segments.
 */
domkm.silk.decode_path = (function domkm$silk$decode_path(s){
return cljs.core.mapv.call(null,domkm.silk.decode,cljs.core.remove.call(null,clojure.string.blank_QMARK_,clojure.string.split.call(null,s,/\//)));
});
/**
 * Takes a query map.
 *   Returns a string of query pairs encoded and joined.
 */
domkm.silk.encode_query = (function domkm$silk$encode_query(query){
return clojure.string.join.call(null,"&",(function (){var iter__7357__auto__ = (function domkm$silk$encode_query_$_iter__7771(s__7772){
return (new cljs.core.LazySeq(null,(function (){
var s__7772__$1 = s__7772;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__7772__$1);
if(temp__4657__auto__){
var s__7772__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7772__$2)){
var c__7355__auto__ = cljs.core.chunk_first.call(null,s__7772__$2);
var size__7356__auto__ = cljs.core.count.call(null,c__7355__auto__);
var b__7774 = cljs.core.chunk_buffer.call(null,size__7356__auto__);
if((function (){var i__7773 = (0);
while(true){
if((i__7773 < size__7356__auto__)){
var vec__7781 = cljs.core._nth.call(null,c__7355__auto__,i__7773);
var k = cljs.core.nth.call(null,vec__7781,(0),null);
var v = cljs.core.nth.call(null,vec__7781,(1),null);
cljs.core.chunk_append.call(null,b__7774,[cljs.core.str(domkm.silk.encode.call(null,k)),cljs.core.str("="),cljs.core.str(domkm.silk.encode.call(null,v))].join(''));

var G__7787 = (i__7773 + (1));
i__7773 = G__7787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7774),domkm$silk$encode_query_$_iter__7771.call(null,cljs.core.chunk_rest.call(null,s__7772__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7774),null);
}
} else {
var vec__7784 = cljs.core.first.call(null,s__7772__$2);
var k = cljs.core.nth.call(null,vec__7784,(0),null);
var v = cljs.core.nth.call(null,vec__7784,(1),null);
return cljs.core.cons.call(null,[cljs.core.str(domkm.silk.encode.call(null,k)),cljs.core.str("="),cljs.core.str(domkm.silk.encode.call(null,v))].join(''),domkm$silk$encode_query_$_iter__7771.call(null,cljs.core.rest.call(null,s__7772__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7357__auto__.call(null,cljs.core.sort.call(null,query));
})());
});
/**
 * Takes a query string.
 *   Returns a map of decoded query pairs.
 */
domkm.silk.decode_query = (function domkm$silk$decode_query(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (q,pair){
var vec__7791 = cljs.core.map.call(null,domkm.silk.decode,clojure.string.split.call(null,pair,/=/));
var k = cljs.core.nth.call(null,vec__7791,(0),null);
var v = cljs.core.nth.call(null,vec__7791,(1),null);
return cljs.core.assoc_BANG_.call(null,q,k,v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),clojure.string.split.call(null,s,/[&;]/)));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {domkm.silk.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
domkm.silk.URL = (function (scheme,user,host,port,path,query,fragment,__meta,__extmap,__hash){
this.scheme = scheme;
this.user = user;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.fragment = fragment;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
domkm.silk.URL.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str(domkm.silk.encode_path.call(null,self__.path)),cljs.core.str((function (){var query__$1 = cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.val),self__.query);
if(cljs.core.seq.call(null,query__$1)){
return [cljs.core.str("?"),cljs.core.str(domkm.silk.encode_query.call(null,query__$1))].join('');
} else {
return null;
}
})())].join('');
});

domkm.silk.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7199__auto__,k__7200__auto__){
var self__ = this;
var this__7199__auto____$1 = this;
return cljs.core._lookup.call(null,this__7199__auto____$1,k__7200__auto__,null);
});

domkm.silk.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7201__auto__,k7795,else__7202__auto__){
var self__ = this;
var this__7201__auto____$1 = this;
var G__7797 = (((k7795 instanceof cljs.core.Keyword))?k7795.fqn:null);
switch (G__7797) {
case "scheme":
return self__.scheme;

break;
case "user":
return self__.user;

break;
case "host":
return self__.host;

break;
case "port":
return self__.port;

break;
case "path":
return self__.path;

break;
case "query":
return self__.query;

break;
case "fragment":
return self__.fragment;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7795,else__7202__auto__);

}
});

domkm.silk.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7213__auto__,writer__7214__auto__,opts__7215__auto__){
var self__ = this;
var this__7213__auto____$1 = this;
var pr_pair__7216__auto__ = ((function (this__7213__auto____$1){
return (function (keyval__7217__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7214__auto__,cljs.core.pr_writer,""," ","",opts__7215__auto__,keyval__7217__auto__);
});})(this__7213__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7214__auto__,pr_pair__7216__auto__,"#domkm.silk.URL{",", ","}",opts__7215__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scheme","scheme",90199613),self__.scheme],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user","user",1532431356),self__.user],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fragment","fragment",826775688),self__.fragment],null))], null),self__.__extmap));
});

domkm.silk.URL.prototype.cljs$core$IIterable$ = true;

domkm.silk.URL.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7794){
var self__ = this;
var G__7794__$1 = this;
return (new cljs.core.RecordIter((0),G__7794__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"fragment","fragment",826775688)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

domkm.silk.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7197__auto__){
var self__ = this;
var this__7197__auto____$1 = this;
return self__.__meta;
});

domkm.silk.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7193__auto__){
var self__ = this;
var this__7193__auto____$1 = this;
return (new domkm.silk.URL(self__.scheme,self__.user,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,self__.__hash));
});

domkm.silk.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7203__auto__){
var self__ = this;
var this__7203__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

domkm.silk.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7194__auto__){
var self__ = this;
var this__7194__auto____$1 = this;
var h__7012__auto__ = self__.__hash;
if(!((h__7012__auto__ == null))){
return h__7012__auto__;
} else {
var h__7012__auto____$1 = cljs.core.hash_imap.call(null,this__7194__auto____$1);
self__.__hash = h__7012__auto____$1;

return h__7012__auto____$1;
}
});

domkm.silk.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7195__auto__,other__7196__auto__){
var self__ = this;
var this__7195__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6565__auto__ = other__7196__auto__;
if(cljs.core.truth_(and__6565__auto__)){
var and__6565__auto____$1 = (this__7195__auto____$1.constructor === other__7196__auto__.constructor);
if(and__6565__auto____$1){
return cljs.core.equiv_map.call(null,this__7195__auto____$1,other__7196__auto__);
} else {
return and__6565__auto____$1;
}
} else {
return and__6565__auto__;
}
})())){
return true;
} else {
return false;
}
});

domkm.silk.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7208__auto__,k__7209__auto__){
var self__ = this;
var this__7208__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"fragment","fragment",826775688),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"query","query",-1288509510),null,new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"scheme","scheme",90199613),null], null), null),k__7209__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7208__auto____$1),self__.__meta),k__7209__auto__);
} else {
return (new domkm.silk.URL(self__.scheme,self__.user,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7209__auto__)),null));
}
});

domkm.silk.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7206__auto__,k__7207__auto__,G__7794){
var self__ = this;
var this__7206__auto____$1 = this;
var pred__7798 = cljs.core.keyword_identical_QMARK_;
var expr__7799 = k__7207__auto__;
if(cljs.core.truth_(pred__7798.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613),expr__7799))){
return (new domkm.silk.URL(G__7794,self__.user,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7798.call(null,new cljs.core.Keyword(null,"user","user",1532431356),expr__7799))){
return (new domkm.silk.URL(self__.scheme,G__7794,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7798.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),expr__7799))){
return (new domkm.silk.URL(self__.scheme,self__.user,G__7794,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7798.call(null,new cljs.core.Keyword(null,"port","port",1534937262),expr__7799))){
return (new domkm.silk.URL(self__.scheme,self__.user,self__.host,G__7794,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7798.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__7799))){
return (new domkm.silk.URL(self__.scheme,self__.user,self__.host,self__.port,G__7794,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7798.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),expr__7799))){
return (new domkm.silk.URL(self__.scheme,self__.user,self__.host,self__.port,self__.path,G__7794,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7798.call(null,new cljs.core.Keyword(null,"fragment","fragment",826775688),expr__7799))){
return (new domkm.silk.URL(self__.scheme,self__.user,self__.host,self__.port,self__.path,self__.query,G__7794,self__.__meta,self__.__extmap,null));
} else {
return (new domkm.silk.URL(self__.scheme,self__.user,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7207__auto__,G__7794),null));
}
}
}
}
}
}
}
});

domkm.silk.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7211__auto__){
var self__ = this;
var this__7211__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scheme","scheme",90199613),self__.scheme],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user","user",1532431356),self__.user],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fragment","fragment",826775688),self__.fragment],null))], null),self__.__extmap));
});

domkm.silk.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7198__auto__,G__7794){
var self__ = this;
var this__7198__auto____$1 = this;
return (new domkm.silk.URL(self__.scheme,self__.user,self__.host,self__.port,self__.path,self__.query,self__.fragment,G__7794,self__.__extmap,self__.__hash));
});

domkm.silk.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7204__auto__,entry__7205__auto__){
var self__ = this;
var this__7204__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7205__auto__)){
return cljs.core._assoc.call(null,this__7204__auto____$1,cljs.core._nth.call(null,entry__7205__auto__,(0)),cljs.core._nth.call(null,entry__7205__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7204__auto____$1,entry__7205__auto__);
}
});

domkm.silk.URL.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scheme","scheme",1730731140,null),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"host","host",82046360,null),new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"fragment","fragment",-1827660081,null)], null);
});

domkm.silk.URL.cljs$lang$type = true;

domkm.silk.URL.cljs$lang$ctorPrSeq = (function (this__7233__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"domkm.silk/URL");
});

domkm.silk.URL.cljs$lang$ctorPrWriter = (function (this__7233__auto__,writer__7234__auto__){
return cljs.core._write.call(null,writer__7234__auto__,"domkm.silk/URL");
});

domkm.silk.__GT_URL = (function domkm$silk$__GT_URL(scheme,user,host,port,path,query,fragment){
return (new domkm.silk.URL(scheme,user,host,port,path,query,fragment,null,null,null));
});

domkm.silk.map__GT_URL = (function domkm$silk$map__GT_URL(G__7796){
return (new domkm.silk.URL(new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(G__7796),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(G__7796),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__7796),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__7796),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__7796),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__7796),new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(G__7796),null,cljs.core.dissoc.call(null,G__7796,new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"fragment","fragment",826775688)),null));
});

domkm.silk.url_QMARK_ = (function domkm$silk$url_QMARK_(x){
return (x instanceof domkm.silk.URL);
});
domkm.silk.url = (function domkm$silk$url(x){
if(cljs.core.truth_(domkm.silk.url_QMARK_.call(null,x))){
return x;
} else {
if(typeof x === 'string'){
var vec__7805 = clojure.string.split.call(null,x,/\?/);
var p = cljs.core.nth.call(null,vec__7805,(0),null);
var q = cljs.core.nth.call(null,vec__7805,(1),null);
return domkm$silk$url.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),domkm.silk.decode_path.call(null,[cljs.core.str(p)].join('')),new cljs.core.Keyword(null,"query","query",-1288509510),domkm.silk.decode_query.call(null,[cljs.core.str(q)].join(''))], null));
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return domkm.silk.map__GT_URL.call(null,x);
} else {
return null;
}
}
}
});
domkm.silk.url_pattern = (function domkm$silk$url_pattern(x){
if(cljs.core.map_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
var vec__7815 = x;
var path = cljs.core.nth.call(null,vec__7815,(0),null);
var query = cljs.core.nth.call(null,vec__7815,(1),null);
var etc = cljs.core.nth.call(null,vec__7815,(2),null);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (vec__7815,path,query,etc){
return (function (p__7818){
var vec__7819 = p__7818;
var k = cljs.core.nth.call(null,vec__7819,(0),null);
var v = cljs.core.nth.call(null,vec__7819,(1),null);
return (v == null);
});})(vec__7815,path,query,etc))
,cljs.core.assoc.call(null,etc,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"query","query",-1288509510),query)));
} else {
return null;
}
}
});

/**
 * @interface
 */
domkm.silk.Pattern = function(){};

domkm.silk._match = (function domkm$silk$_match(this$,that){
if((!((this$ == null))) && (!((this$.domkm$silk$Pattern$_match$arity$2 == null)))){
return this$.domkm$silk$Pattern$_match$arity$2(this$,that);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (domkm.silk._match[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,that);
} else {
var m__7241__auto____$1 = (domkm.silk._match["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.-match",this$);
}
}
}
});

domkm.silk._unmatch = (function domkm$silk$_unmatch(this$,params){
if((!((this$ == null))) && (!((this$.domkm$silk$Pattern$_unmatch$arity$2 == null)))){
return this$.domkm$silk$Pattern$_unmatch$arity$2(this$,params);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (domkm.silk._unmatch[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,params);
} else {
var m__7241__auto____$1 = (domkm.silk._unmatch["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.-unmatch",this$);
}
}
}
});

domkm.silk._match_validator = (function domkm$silk$_match_validator(this$){
if((!((this$ == null))) && (!((this$.domkm$silk$Pattern$_match_validator$arity$1 == null)))){
return this$.domkm$silk$Pattern$_match_validator$arity$1(this$);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (domkm.silk._match_validator[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$);
} else {
var m__7241__auto____$1 = (domkm.silk._match_validator["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.-match-validator",this$);
}
}
}
});

domkm.silk._unmatch_validators = (function domkm$silk$_unmatch_validators(this$){
if((!((this$ == null))) && (!((this$.domkm$silk$Pattern$_unmatch_validators$arity$1 == null)))){
return this$.domkm$silk$Pattern$_unmatch_validators$arity$1(this$);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (domkm.silk._unmatch_validators[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$);
} else {
var m__7241__auto____$1 = (domkm.silk._unmatch_validators["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.-unmatch-validators",this$);
}
}
}
});

domkm.silk._create_default = (function domkm$silk$_create_default(this$,v){
if((!((this$ == null))) && (!((this$.domkm$silk$Pattern$_create_default$arity$2 == null)))){
return this$.domkm$silk$Pattern$_create_default$arity$2(this$,v);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (domkm.silk._create_default[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return m__7241__auto__.call(null,this$,v);
} else {
var m__7241__auto____$1 = (domkm.silk._create_default["_"]);
if(!((m__7241__auto____$1 == null))){
return m__7241__auto____$1.call(null,this$,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.-create-default",this$);
}
}
}
});

domkm.silk.pattern_QMARK_ = (function domkm$silk$pattern_QMARK_(x){
if(!((x == null))){
if((false) || (x.domkm$silk$Pattern$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,domkm.silk.Pattern,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,domkm.silk.Pattern,x);
}
});
domkm.silk.optional_value_is_allowed = (function domkm$silk$optional_value_is_allowed(validator){
return (function (x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword("domkm.silk","optional-key-has-no-value","domkm.silk/optional-key-has-no-value",-532938173))){
return true;
} else {
return validator.call(null,x);
}
});
});
domkm.silk.match_validator = (function domkm$silk$match_validator(ptrn){
if(cljs.core.truth_(domkm.silk.pattern_QMARK_.call(null,ptrn))){
} else {
throw (new Error("Assert failed: (pattern? ptrn)"));
}

var _PERCENT_ = domkm.silk.optional_value_is_allowed.call(null,domkm.silk._match_validator.call(null,ptrn));
if(cljs.core.fn_QMARK_.call(null,_PERCENT_)){
} else {
throw (new Error("Assert failed: (fn? %)"));
}

return _PERCENT_;
});
domkm.silk.unmatch_validators = (function domkm$silk$unmatch_validators(ptrn){
if(cljs.core.truth_(domkm.silk.pattern_QMARK_.call(null,ptrn))){
} else {
throw (new Error("Assert failed: (pattern? ptrn)"));
}

var _PERCENT_ = domkm.silk._unmatch_validators.call(null,ptrn);
if(cljs.core.map_QMARK_.call(null,_PERCENT_)){
} else {
throw (new Error("Assert failed: (map? %)"));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.some_QMARK_,cljs.core.keys.call(null,_PERCENT_))){
} else {
throw (new Error("Assert failed: (every? some? (keys %))"));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.fn_QMARK_,cljs.core.vals.call(null,_PERCENT_))){
} else {
throw (new Error("Assert failed: (every? fn? (vals %))"));
}

return _PERCENT_;
});
domkm.silk.match_valid_QMARK_ = (function domkm$silk$match_valid_QMARK_(ptrn,x){
return cljs.core.boolean$.call(null,domkm.silk.match_validator.call(null,ptrn).call(null,x));
});
domkm.silk.unmatch_valid_QMARK_ = (function domkm$silk$unmatch_valid_QMARK_(ptrn,params){
return cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p__7828){
var vec__7829 = p__7828;
var k = cljs.core.nth.call(null,vec__7829,(0),null);
var v = cljs.core.nth.call(null,vec__7829,(1),null);
return v.call(null,cljs.core.get.call(null,params,k));
}),domkm.silk.unmatch_validators.call(null,ptrn)));
});
domkm.silk.match = (function domkm$silk$match(ptrn,x){
if(cljs.core.truth_(domkm.silk.pattern_QMARK_.call(null,ptrn))){
} else {
throw (new Error("Assert failed: (pattern? ptrn)"));
}

var _PERCENT_ = (cljs.core.truth_(domkm.silk.match_valid_QMARK_.call(null,ptrn,x))?domkm.silk._match.call(null,ptrn,x):null);
if(cljs.core.truth_((function (){var or__6577__auto__ = (_PERCENT_ == null);
if(or__6577__auto__){
return or__6577__auto__;
} else {
return domkm.silk.unmatch_valid_QMARK_.call(null,ptrn,_PERCENT_);
}
})())){
} else {
throw (new Error("Assert failed: (or (nil? %) (unmatch-valid? ptrn %))"));
}

return _PERCENT_;
});
domkm.silk.unmatch = (function domkm$silk$unmatch(ptrn,params){
if(cljs.core.truth_(domkm.silk.unmatch_valid_QMARK_.call(null,ptrn,params))){
} else {
throw (new Error("Assert failed: (unmatch-valid? ptrn params)"));
}

var _PERCENT_ = domkm.silk._unmatch.call(null,ptrn,params);
if(cljs.core.truth_(domkm.silk.match_valid_QMARK_.call(null,ptrn,_PERCENT_))){
} else {
throw (new Error("Assert failed: (match-valid? ptrn %)"));
}

return _PERCENT_;
});
domkm.silk.create_default = (function domkm$silk$create_default(var_args){
var args7832 = [];
var len__7652__auto___7835 = arguments.length;
var i__7653__auto___7836 = (0);
while(true){
if((i__7653__auto___7836 < len__7652__auto___7835)){
args7832.push((arguments[i__7653__auto___7836]));

var G__7837 = (i__7653__auto___7836 + (1));
i__7653__auto___7836 = G__7837;
continue;
} else {
}
break;
}

var G__7834 = args7832.length;
switch (G__7834) {
case 1:
return domkm.silk.create_default.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domkm.silk.create_default.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7832.length)].join('')));

}
});

domkm.silk.create_default.cljs$core$IFn$_invoke$arity$1 = (function (ptrn){
return domkm.silk.create_default.call(null,ptrn,null);
});

domkm.silk.create_default.cljs$core$IFn$_invoke$arity$2 = (function (ptrn,v){
return domkm.silk._create_default.call(null,ptrn,v);
});

domkm.silk.create_default.cljs$lang$maxFixedArity = 2;

(domkm.silk.Pattern["string"] = true);

(domkm.silk._match["string"] = (function (this$,that){
if(cljs.core._EQ_.call(null,this$,that)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}));

(domkm.silk._unmatch["string"] = (function (this$,_){
return this$;
}));

(domkm.silk._match_validator["string"] = (function (_){
return cljs.core.string_QMARK_;
}));

(domkm.silk._unmatch_validators["string"] = (function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core.Keyword.prototype.domkm$silk$Pattern$ = true;

cljs.core.Keyword.prototype.domkm$silk$Pattern$_match$arity$2 = (function (this$,that){
var this$__$1 = this;
return cljs.core.PersistentArrayMap.fromArray([this$__$1,that], true, false);
});

cljs.core.Keyword.prototype.domkm$silk$Pattern$_unmatch$arity$2 = (function (this$,params){
var this$__$1 = this;
return cljs.core.get.call(null,params,this$__$1);
});

cljs.core.Keyword.prototype.domkm$silk$Pattern$_match_validator$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.some_QMARK_;
});

cljs.core.Keyword.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.PersistentArrayMap.fromArray([this$__$1,cljs.core.some_QMARK_], true, false);
});

cljs.core.Keyword.prototype.domkm$silk$Pattern$_create_default$arity$2 = (function (this$,v){
var this$__$1 = this;
return cljs.core.PersistentArrayMap.fromArray([this$__$1,v], true, false);
});
domkm.silk.match_coll = (function domkm$silk$match_coll(ks,_PERCENT_1s,_PERCENT_2s){
var ks__$1 = ks;
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__4659__auto__ = cljs.core.first.call(null,ks__$1);
if((temp__4659__auto__ == null)){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
var k = temp__4659__auto__;
var temp__4657__auto__ = domkm.silk.match.call(null,cljs.core.get.call(null,_PERCENT_1s,k),cljs.core.get.call(null,_PERCENT_2s,k));
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
var G__7842 = cljs.core.rest.call(null,ks__$1);
var G__7843 = cljs.core.reduce_kv.call(null,((function (ks__$1,ret,m,temp__4657__auto__,k,temp__4659__auto__){
return (function (p1__7839_SHARP_,p2__7840_SHARP_,p3__7841_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__7839_SHARP_,p2__7840_SHARP_,p3__7841_SHARP_);
});})(ks__$1,ret,m,temp__4657__auto__,k,temp__4659__auto__))
,ret,m);
ks__$1 = G__7842;
ret = G__7843;
continue;
} else {
return null;
}
}
break;
}
});
cljs.core.PersistentVector.prototype.domkm$silk$Pattern$ = true;

cljs.core.PersistentVector.prototype.domkm$silk$Pattern$_match$arity$2 = (function (this$,that){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) === cljs.core.count.call(null,that))){
return domkm.silk.match_coll.call(null,cljs.core.range.call(null,cljs.core.count.call(null,this$__$1)),this$__$1,that);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.domkm$silk$Pattern$_unmatch$arity$2 = (function (this$,params){
var this$__$1 = this;
return cljs.core.mapv.call(null,((function (this$__$1){
return (function (p1__7844_SHARP_){
return domkm.silk.unmatch.call(null,p1__7844_SHARP_,params);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentVector.prototype.domkm$silk$Pattern$_match_validator$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.vector_QMARK_;
});

cljs.core.PersistentVector.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});
domkm.silk.unmatch_map = (function domkm$silk$unmatch_map(ptrn,params){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (acc,k,v){
return cljs.core.assoc_BANG_.call(null,acc,k,domkm.silk.unmatch.call(null,v,params));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),ptrn));
});
cljs.core.PersistentArrayMap.prototype.domkm$silk$Pattern$ = true;

cljs.core.PersistentArrayMap.prototype.domkm$silk$Pattern$_match$arity$2 = (function (this$,that){
var this$__$1 = this;
return domkm.silk.match_coll.call(null,cljs.core.keys.call(null,this$__$1),this$__$1,that);
});

cljs.core.PersistentArrayMap.prototype.domkm$silk$Pattern$_unmatch$arity$2 = (function (this$,that){
var this$__$1 = this;
return domkm.silk.unmatch_map.call(null,this$__$1,that);
});

cljs.core.PersistentArrayMap.prototype.domkm$silk$Pattern$_match_validator$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.map_QMARK_;
});

cljs.core.PersistentArrayMap.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});
cljs.core.PersistentHashMap.prototype.domkm$silk$Pattern$ = true;

cljs.core.PersistentHashMap.prototype.domkm$silk$Pattern$_match$arity$2 = (function (this$,that){
var this$__$1 = this;
return domkm.silk.match_coll.call(null,cljs.core.keys.call(null,this$__$1),this$__$1,that);
});

cljs.core.PersistentHashMap.prototype.domkm$silk$Pattern$_unmatch$arity$2 = (function (this$,that){
var this$__$1 = this;
return domkm.silk.unmatch_map.call(null,this$__$1,that);
});

cljs.core.PersistentHashMap.prototype.domkm$silk$Pattern$_match_validator$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.map_QMARK_;
});

cljs.core.PersistentHashMap.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});
var re_quote_char_map_7847 = cljs.core.reduce.call(null,(function (p1__7845_SHARP_,p2__7846_SHARP_){
return cljs.core.assoc.call(null,p1__7845_SHARP_,p2__7846_SHARP_,[cljs.core.str("\\"),cljs.core.str(p2__7846_SHARP_)].join(''));
}),cljs.core.PersistentArrayMap.EMPTY,"\\.*+|?()[]{}$^");
domkm.silk.re_quote_replacement = ((function (re_quote_char_map_7847){
return (function domkm$silk$re_quote_replacement(s){
return clojure.string.escape.call(null,s,re_quote_char_map_7847);
});})(re_quote_char_map_7847))
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {domkm.silk.Pattern}
*/
domkm.silk.RegexPattern = (function (param_key,regex,deserialize,serialize,validate,__meta,__extmap,__hash){
this.param_key = param_key;
this.regex = regex;
this.deserialize = deserialize;
this.serialize = serialize;
this.validate = validate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
domkm.silk.RegexPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7199__auto__,k__7200__auto__){
var self__ = this;
var this__7199__auto____$1 = this;
return cljs.core._lookup.call(null,this__7199__auto____$1,k__7200__auto__,null);
});

domkm.silk.RegexPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7201__auto__,k7849,else__7202__auto__){
var self__ = this;
var this__7201__auto____$1 = this;
var G__7851 = (((k7849 instanceof cljs.core.Keyword))?k7849.fqn:null);
switch (G__7851) {
case "param-key":
return self__.param_key;

break;
case "regex":
return self__.regex;

break;
case "deserialize":
return self__.deserialize;

break;
case "serialize":
return self__.serialize;

break;
case "validate":
return self__.validate;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7849,else__7202__auto__);

}
});

domkm.silk.RegexPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7213__auto__,writer__7214__auto__,opts__7215__auto__){
var self__ = this;
var this__7213__auto____$1 = this;
var pr_pair__7216__auto__ = ((function (this__7213__auto____$1){
return (function (keyval__7217__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7214__auto__,cljs.core.pr_writer,""," ","",opts__7215__auto__,keyval__7217__auto__);
});})(this__7213__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7214__auto__,pr_pair__7216__auto__,"#domkm.silk.RegexPattern{",", ","}",opts__7215__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"param-key","param-key",1149590958),self__.param_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),self__.deserialize],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"serialize","serialize",-69216574),self__.serialize],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validate","validate",-201300827),self__.validate],null))], null),self__.__extmap));
});

domkm.silk.RegexPattern.prototype.cljs$core$IIterable$ = true;

domkm.silk.RegexPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7848){
var self__ = this;
var G__7848__$1 = this;
return (new cljs.core.RecordIter((0),G__7848__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"param-key","param-key",1149590958),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),new cljs.core.Keyword(null,"serialize","serialize",-69216574),new cljs.core.Keyword(null,"validate","validate",-201300827)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

domkm.silk.RegexPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7197__auto__){
var self__ = this;
var this__7197__auto____$1 = this;
return self__.__meta;
});

domkm.silk.RegexPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7193__auto__){
var self__ = this;
var this__7193__auto____$1 = this;
return (new domkm.silk.RegexPattern(self__.param_key,self__.regex,self__.deserialize,self__.serialize,self__.validate,self__.__meta,self__.__extmap,self__.__hash));
});

domkm.silk.RegexPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7203__auto__){
var self__ = this;
var this__7203__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

domkm.silk.RegexPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7194__auto__){
var self__ = this;
var this__7194__auto____$1 = this;
var h__7012__auto__ = self__.__hash;
if(!((h__7012__auto__ == null))){
return h__7012__auto__;
} else {
var h__7012__auto____$1 = cljs.core.hash_imap.call(null,this__7194__auto____$1);
self__.__hash = h__7012__auto____$1;

return h__7012__auto____$1;
}
});

domkm.silk.RegexPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7195__auto__,other__7196__auto__){
var self__ = this;
var this__7195__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6565__auto__ = other__7196__auto__;
if(cljs.core.truth_(and__6565__auto__)){
var and__6565__auto____$1 = (this__7195__auto____$1.constructor === other__7196__auto__.constructor);
if(and__6565__auto____$1){
return cljs.core.equiv_map.call(null,this__7195__auto____$1,other__7196__auto__);
} else {
return and__6565__auto____$1;
}
} else {
return and__6565__auto__;
}
})())){
return true;
} else {
return false;
}
});

domkm.silk.RegexPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7208__auto__,k__7209__auto__){
var self__ = this;
var this__7208__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"serialize","serialize",-69216574),null,new cljs.core.Keyword(null,"validate","validate",-201300827),null,new cljs.core.Keyword(null,"param-key","param-key",1149590958),null,new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),null,new cljs.core.Keyword(null,"regex","regex",939488856),null], null), null),k__7209__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7208__auto____$1),self__.__meta),k__7209__auto__);
} else {
return (new domkm.silk.RegexPattern(self__.param_key,self__.regex,self__.deserialize,self__.serialize,self__.validate,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7209__auto__)),null));
}
});

domkm.silk.RegexPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7206__auto__,k__7207__auto__,G__7848){
var self__ = this;
var this__7206__auto____$1 = this;
var pred__7852 = cljs.core.keyword_identical_QMARK_;
var expr__7853 = k__7207__auto__;
if(cljs.core.truth_(pred__7852.call(null,new cljs.core.Keyword(null,"param-key","param-key",1149590958),expr__7853))){
return (new domkm.silk.RegexPattern(G__7848,self__.regex,self__.deserialize,self__.serialize,self__.validate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7852.call(null,new cljs.core.Keyword(null,"regex","regex",939488856),expr__7853))){
return (new domkm.silk.RegexPattern(self__.param_key,G__7848,self__.deserialize,self__.serialize,self__.validate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7852.call(null,new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),expr__7853))){
return (new domkm.silk.RegexPattern(self__.param_key,self__.regex,G__7848,self__.serialize,self__.validate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7852.call(null,new cljs.core.Keyword(null,"serialize","serialize",-69216574),expr__7853))){
return (new domkm.silk.RegexPattern(self__.param_key,self__.regex,self__.deserialize,G__7848,self__.validate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7852.call(null,new cljs.core.Keyword(null,"validate","validate",-201300827),expr__7853))){
return (new domkm.silk.RegexPattern(self__.param_key,self__.regex,self__.deserialize,self__.serialize,G__7848,self__.__meta,self__.__extmap,null));
} else {
return (new domkm.silk.RegexPattern(self__.param_key,self__.regex,self__.deserialize,self__.serialize,self__.validate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7207__auto__,G__7848),null));
}
}
}
}
}
});

domkm.silk.RegexPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7211__auto__){
var self__ = this;
var this__7211__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"param-key","param-key",1149590958),self__.param_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),self__.deserialize],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"serialize","serialize",-69216574),self__.serialize],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validate","validate",-201300827),self__.validate],null))], null),self__.__extmap));
});

domkm.silk.RegexPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7198__auto__,G__7848){
var self__ = this;
var this__7198__auto____$1 = this;
return (new domkm.silk.RegexPattern(self__.param_key,self__.regex,self__.deserialize,self__.serialize,self__.validate,G__7848,self__.__extmap,self__.__hash));
});

domkm.silk.RegexPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7204__auto__,entry__7205__auto__){
var self__ = this;
var this__7204__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7205__auto__)){
return cljs.core._assoc.call(null,this__7204__auto____$1,cljs.core._nth.call(null,entry__7205__auto__,(0)),cljs.core._nth.call(null,entry__7205__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7204__auto____$1,entry__7205__auto__);
}
});

domkm.silk.RegexPattern.prototype.domkm$silk$Pattern$ = true;

domkm.silk.RegexPattern.prototype.domkm$silk$Pattern$_match$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var G__7855 = cljs.core.re_matches.call(null,self__.regex,s);
var G__7855__$1 = (((G__7855 == null))?null:self__.deserialize.call(null,G__7855));
if((G__7855__$1 == null)){
return null;
} else {
return cljs.core.PersistentHashMap.fromArrays([self__.param_key],[G__7855__$1]);
}
});

domkm.silk.RegexPattern.prototype.domkm$silk$Pattern$_unmatch$arity$2 = (function (_,params){
var self__ = this;
var ___$1 = this;
var v = cljs.core.get.call(null,params,self__.param_key);
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("domkm.silk","optional-key-has-no-value","domkm.silk/optional-key-has-no-value",-532938173))){
return v;
} else {
return self__.serialize.call(null,v);
}
});

domkm.silk.RegexPattern.prototype.domkm$silk$Pattern$_match_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.string_QMARK_;
});

domkm.silk.RegexPattern.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.fromArray([self__.param_key,domkm.silk.optional_value_is_allowed.call(null,self__.validate)], true, false);
});

domkm.silk.RegexPattern.prototype.domkm$silk$Pattern$_create_default$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return domkm.silk.create_default.call(null,self__.param_key,v);
});

domkm.silk.RegexPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"param-key","param-key",-1504844811,null),new cljs.core.Symbol(null,"regex","regex",-1714946913,null),new cljs.core.Symbol(null,"deserialize","deserialize",-350525411,null),new cljs.core.Symbol(null,"serialize","serialize",1571314953,null),new cljs.core.Symbol(null,"validate","validate",1439230700,null)], null);
});

domkm.silk.RegexPattern.cljs$lang$type = true;

domkm.silk.RegexPattern.cljs$lang$ctorPrSeq = (function (this__7233__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"domkm.silk/RegexPattern");
});

domkm.silk.RegexPattern.cljs$lang$ctorPrWriter = (function (this__7233__auto__,writer__7234__auto__){
return cljs.core._write.call(null,writer__7234__auto__,"domkm.silk/RegexPattern");
});

domkm.silk.__GT_RegexPattern = (function domkm$silk$__GT_RegexPattern(param_key,regex,deserialize,serialize,validate){
return (new domkm.silk.RegexPattern(param_key,regex,deserialize,serialize,validate,null,null,null));
});

domkm.silk.map__GT_RegexPattern = (function domkm$silk$map__GT_RegexPattern(G__7850){
return (new domkm.silk.RegexPattern(new cljs.core.Keyword(null,"param-key","param-key",1149590958).cljs$core$IFn$_invoke$arity$1(G__7850),new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(G__7850),new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938).cljs$core$IFn$_invoke$arity$1(G__7850),new cljs.core.Keyword(null,"serialize","serialize",-69216574).cljs$core$IFn$_invoke$arity$1(G__7850),new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(G__7850),null,cljs.core.dissoc.call(null,G__7850,new cljs.core.Keyword(null,"param-key","param-key",1149590958),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),new cljs.core.Keyword(null,"serialize","serialize",-69216574),new cljs.core.Keyword(null,"validate","validate",-201300827)),null));
});

domkm.silk.regex = (function domkm$silk$regex(var_args){
var args7859 = [];
var len__7652__auto___7865 = arguments.length;
var i__7653__auto___7866 = (0);
while(true){
if((i__7653__auto___7866 < len__7652__auto___7865)){
args7859.push((arguments[i__7653__auto___7866]));

var G__7867 = (i__7653__auto___7866 + (1));
i__7653__auto___7866 = G__7867;
continue;
} else {
}
break;
}

var G__7861 = args7859.length;
switch (G__7861) {
case 2:
return domkm.silk.regex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domkm.silk.regex.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7859.length)].join('')));

}
});

domkm.silk.regex.cljs$core$IFn$_invoke$arity$2 = (function (k,re){
return domkm.silk.regex.call(null,k,re,cljs.core.PersistentArrayMap.EMPTY);
});

domkm.silk.regex.cljs$core$IFn$_invoke$arity$3 = (function (k,re,p__7862){
var map__7863 = p__7862;
var map__7863__$1 = ((((!((map__7863 == null)))?((((map__7863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7863):map__7863);
var deserialize = cljs.core.get.call(null,map__7863__$1,new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),cljs.core.identity);
var serialize = cljs.core.get.call(null,map__7863__$1,new cljs.core.Keyword(null,"serialize","serialize",-69216574),((function (map__7863,map__7863__$1,deserialize){
return (function (p1__7857_SHARP_){
if(cljs.core.vector_QMARK_.call(null,p1__7857_SHARP_)){
return cljs.core.nth.call(null,p1__7857_SHARP_,(0));
} else {
return p1__7857_SHARP_;
}
});})(map__7863,map__7863__$1,deserialize))
);
var validate = cljs.core.get.call(null,map__7863__$1,new cljs.core.Keyword(null,"validate","validate",-201300827),((function (map__7863,map__7863__$1,deserialize,serialize){
return (function (p1__7858_SHARP_){
var temp__4657__auto__ = ((cljs.core.vector_QMARK_.call(null,p1__7858_SHARP_))?cljs.core.first.call(null,p1__7858_SHARP_):p1__7858_SHARP_);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
var and__6565__auto__ = typeof s === 'string';
if(and__6565__auto__){
return cljs.core.re_find.call(null,re,s);
} else {
return and__6565__auto__;
}
} else {
return null;
}
});})(map__7863,map__7863__$1,deserialize,serialize))
);
if(cljs.core.some_QMARK_.call(null,k)){
} else {
throw (new Error("Assert failed: (some? k)"));
}

return domkm.silk.map__GT_RegexPattern.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"param-key","param-key",1149590958),k,new cljs.core.Keyword(null,"regex","regex",939488856),re,new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),deserialize,new cljs.core.Keyword(null,"serialize","serialize",-69216574),serialize,new cljs.core.Keyword(null,"validate","validate",-201300827),validate], null));
});

domkm.silk.regex.cljs$lang$maxFixedArity = 3;

domkm.silk.bool = (function domkm$silk$bool(k){
return domkm.silk.regex.call(null,k,/true|false/,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),(function (p1__7869_SHARP_){
return cljs.core._EQ_.call(null,"true",p1__7869_SHARP_);
}),new cljs.core.Keyword(null,"serialize","serialize",-69216574),cljs.core.str,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__7870_SHARP_){
return (Boolean === cljs.core.type.call(null,p1__7870_SHARP_));
})], null));
});
domkm.silk.int$ = (function domkm$silk$int(k){
return domkm.silk.regex.call(null,k,/\d+/,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),(function (p1__7871_SHARP_){
return parseInt(p1__7871_SHARP_,(10));
}),new cljs.core.Keyword(null,"serialize","serialize",-69216574),cljs.core.str,new cljs.core.Keyword(null,"validate","validate",-201300827),cljs.core.integer_QMARK_], null));
});
domkm.silk.uuid = (function domkm$silk$uuid(k){
return domkm.silk.regex.call(null,k,/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),cljs.core.__GT_UUID,new cljs.core.Keyword(null,"serialize","serialize",-69216574),cljs.core.str,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__7872_SHARP_){
return (p1__7872_SHARP_ instanceof cljs.core.UUID);
})], null));
});
domkm.silk.cat = (function domkm$silk$cat(var_args){
var args__7659__auto__ = [];
var len__7652__auto___7879 = arguments.length;
var i__7653__auto___7880 = (0);
while(true){
if((i__7653__auto___7880 < len__7652__auto___7879)){
args__7659__auto__.push((arguments[i__7653__auto___7880]));

var G__7881 = (i__7653__auto___7880 + (1));
i__7653__auto___7880 = G__7881;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return domkm.silk.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

domkm.silk.cat.cljs$core$IFn$_invoke$arity$variadic = (function (ptrns){
if(cljs.core.every_QMARK_.call(null,(function (p1__7873_SHARP_){
return domkm.silk.match_valid_QMARK_.call(null,p1__7873_SHARP_,"string");
}),ptrns)){
} else {
throw (new Error("Assert failed: (every? (fn* [p1__7873#] (match-valid? p1__7873# \"string\")) ptrns)"));
}

if(cljs.core.truth_((function (){var pkeys = cljs.core.mapcat.call(null,cljs.core.comp.call(null,cljs.core.keys,domkm.silk.unmatch_validators),ptrns);
var or__6577__auto__ = cljs.core.empty_QMARK_.call(null,pkeys);
if(or__6577__auto__){
return or__6577__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,pkeys);
}
})())){
} else {
throw (new Error("Assert failed: (let [pkeys (mapcat (comp keys unmatch-validators) ptrns)] (or (empty? pkeys) (apply distinct? pkeys)))"));
}

var re_str = (function (p1__7874_SHARP_){
return cljs.core._conj.call(null,(function (){var x__7411__auto__ = ((typeof p1__7874_SHARP_ === 'string')?domkm.silk.re_quote_replacement.call(null,p1__7874_SHARP_):(((p1__7874_SHARP_ instanceof domkm.silk.RegexPattern))?(function (){var s = [cljs.core.str(new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(p1__7874_SHARP_))].join('');
return cljs.core.subs.call(null,s,(1),(s.length - (1)));
})():".*"
));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,")"),x__7411__auto__);
})(),"(");
});
var re = cljs.core.re_pattern.call(null,clojure.string.join.call(null,cljs.core.mapcat.call(null,re_str,ptrns)));
var ptrns__$1 = cljs.core.vec.call(null,ptrns);
var validator = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,domkm.silk.unmatch_validators,ptrns__$1));
if(typeof domkm.silk.t_domkm$silk7876 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {domkm.silk.Pattern}
*/
domkm.silk.t_domkm$silk7876 = (function (ptrns,re_str,re,validator,meta7877){
this.ptrns = ptrns;
this.re_str = re_str;
this.re = re;
this.validator = validator;
this.meta7877 = meta7877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domkm.silk.t_domkm$silk7876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (re_str,re,ptrns__$1,validator){
return (function (_7878,meta7877__$1){
var self__ = this;
var _7878__$1 = this;
return (new domkm.silk.t_domkm$silk7876(self__.ptrns,self__.re_str,self__.re,self__.validator,meta7877__$1));
});})(re_str,re,ptrns__$1,validator))
;

domkm.silk.t_domkm$silk7876.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (re_str,re,ptrns__$1,validator){
return (function (_7878){
var self__ = this;
var _7878__$1 = this;
return self__.meta7877;
});})(re_str,re,ptrns__$1,validator))
;

domkm.silk.t_domkm$silk7876.prototype.domkm$silk$Pattern$ = true;

domkm.silk.t_domkm$silk7876.prototype.domkm$silk$Pattern$_match$arity$2 = ((function (re_str,re,ptrns__$1,validator){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var temp__4657__auto__ = cljs.core.re_find.call(null,self__.re,s);
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
return domkm.silk.match.call(null,self__.ptrns,cljs.core.mapv.call(null,cljs.core.not_empty,cljs.core.subvec.call(null,v,(1))));
} else {
return null;
}
});})(re_str,re,ptrns__$1,validator))
;

domkm.silk.t_domkm$silk7876.prototype.domkm$silk$Pattern$_unmatch$arity$2 = ((function (re_str,re,ptrns__$1,validator){
return (function (_,params){
var self__ = this;
var ___$1 = this;
return clojure.string.join.call(null,domkm.silk.unmatch.call(null,self__.ptrns,params));
});})(re_str,re,ptrns__$1,validator))
;

domkm.silk.t_domkm$silk7876.prototype.domkm$silk$Pattern$_match_validator$arity$1 = ((function (re_str,re,ptrns__$1,validator){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.string_QMARK_;
});})(re_str,re,ptrns__$1,validator))
;

domkm.silk.t_domkm$silk7876.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = ((function (re_str,re,ptrns__$1,validator){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.validator;
});})(re_str,re,ptrns__$1,validator))
;

domkm.silk.t_domkm$silk7876.getBasis = ((function (re_str,re,ptrns__$1,validator){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ptrns","ptrns",-1823952707,null),new cljs.core.Symbol(null,"re-str","re-str",1527032991,null),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"meta7877","meta7877",1688396133,null)], null);
});})(re_str,re,ptrns__$1,validator))
;

domkm.silk.t_domkm$silk7876.cljs$lang$type = true;

domkm.silk.t_domkm$silk7876.cljs$lang$ctorStr = "domkm.silk/t_domkm$silk7876";

domkm.silk.t_domkm$silk7876.cljs$lang$ctorPrWriter = ((function (re_str,re,ptrns__$1,validator){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"domkm.silk/t_domkm$silk7876");
});})(re_str,re,ptrns__$1,validator))
;

domkm.silk.__GT_t_domkm$silk7876 = ((function (re_str,re,ptrns__$1,validator){
return (function domkm$silk$__GT_t_domkm$silk7876(ptrns__$2,re_str__$1,re__$1,validator__$1,meta7877){
return (new domkm.silk.t_domkm$silk7876(ptrns__$2,re_str__$1,re__$1,validator__$1,meta7877));
});})(re_str,re,ptrns__$1,validator))
;

}

return (new domkm.silk.t_domkm$silk7876(ptrns__$1,re_str,re,validator,cljs.core.PersistentArrayMap.EMPTY));
});

domkm.silk.cat.cljs$lang$maxFixedArity = (0);

domkm.silk.cat.cljs$lang$applyTo = (function (seq7875){
return domkm.silk.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7875));
});

domkm.silk._QMARK_ = (function domkm$silk$_QMARK_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___7891 = arguments.length;
var i__7653__auto___7892 = (0);
while(true){
if((i__7653__auto___7892 < len__7652__auto___7891)){
args__7659__auto__.push((arguments[i__7653__auto___7892]));

var G__7893 = (i__7653__auto___7892 + (1));
i__7653__auto___7892 = G__7893;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return domkm.silk._QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

domkm.silk._QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (ptrn,p__7884){
var vec__7885 = p__7884;
var default_params = cljs.core.nth.call(null,vec__7885,(0),null);
if(cljs.core.truth_(domkm.silk.pattern_QMARK_.call(null,ptrn))){
} else {
throw (new Error("Assert failed: (pattern? ptrn)"));
}

if(cljs.core.truth_((function (){var or__6577__auto__ = cljs.core.not.call(null,default_params);
if(or__6577__auto__){
return or__6577__auto__;
} else {
return domkm.silk.unmatch.call(null,ptrn,default_params);
}
})())){
} else {
throw (new Error("Assert failed: (or (not default-params) (unmatch ptrn default-params))"));
}

if(typeof domkm.silk.t_domkm$silk7888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {domkm.silk.Pattern}
*/
domkm.silk.t_domkm$silk7888 = (function (ptrn,p__7884,vec__7885,default_params,meta7889){
this.ptrn = ptrn;
this.p__7884 = p__7884;
this.vec__7885 = vec__7885;
this.default_params = default_params;
this.meta7889 = meta7889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domkm.silk.t_domkm$silk7888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__7885,default_params){
return (function (_7890,meta7889__$1){
var self__ = this;
var _7890__$1 = this;
return (new domkm.silk.t_domkm$silk7888(self__.ptrn,self__.p__7884,self__.vec__7885,self__.default_params,meta7889__$1));
});})(vec__7885,default_params))
;

domkm.silk.t_domkm$silk7888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__7885,default_params){
return (function (_7890){
var self__ = this;
var _7890__$1 = this;
return self__.meta7889;
});})(vec__7885,default_params))
;

domkm.silk.t_domkm$silk7888.prototype.domkm$silk$Pattern$ = true;

domkm.silk.t_domkm$silk7888.prototype.domkm$silk$Pattern$_match$arity$2 = ((function (vec__7885,default_params){
return (function (_,that){
var self__ = this;
var ___$1 = this;
if((that == null)){
var or__6577__auto__ = self__.default_params;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return domkm.silk.create_default.call(null,self__.ptrn);
}
} else {
return domkm.silk.match.call(null,self__.ptrn,that);
}
});})(vec__7885,default_params))
;

domkm.silk.t_domkm$silk7888.prototype.domkm$silk$Pattern$_unmatch$arity$2 = ((function (vec__7885,default_params){
return (function (_,params){
var self__ = this;
var ___$1 = this;
var r = domkm.silk.unmatch.call(null,self__.ptrn,cljs.core.merge_with.call(null,((function (___$1,vec__7885,default_params){
return (function (pval,dval){
if((pval == null)){
return dval;
} else {
return pval;
}
});})(___$1,vec__7885,default_params))
,params,(function (){var or__6577__auto__ = self__.default_params;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return domkm.silk.create_default.call(null,self__.ptrn,new cljs.core.Keyword("domkm.silk","optional-key-has-no-value","domkm.silk/optional-key-has-no-value",-532938173));
}
})()));
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword("domkm.silk","optional-key-has-no-value","domkm.silk/optional-key-has-no-value",-532938173),r))){
return r;
} else {
return null;
}
});})(vec__7885,default_params))
;

domkm.silk.t_domkm$silk7888.prototype.domkm$silk$Pattern$_match_validator$arity$1 = ((function (vec__7885,default_params){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.some_fn.call(null,cljs.core.nil_QMARK_,domkm.silk.match_validator.call(null,self__.ptrn));
});})(vec__7885,default_params))
;

domkm.silk.t_domkm$silk7888.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = ((function (vec__7885,default_params){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});})(vec__7885,default_params))
;

domkm.silk.t_domkm$silk7888.getBasis = ((function (vec__7885,default_params){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ptrn","ptrn",1874447722,null),new cljs.core.Symbol(null,"p__7884","p__7884",-857236047,null),new cljs.core.Symbol(null,"vec__7885","vec__7885",-665934122,null),new cljs.core.Symbol(null,"default-params","default-params",715565285,null),new cljs.core.Symbol(null,"meta7889","meta7889",-455572567,null)], null);
});})(vec__7885,default_params))
;

domkm.silk.t_domkm$silk7888.cljs$lang$type = true;

domkm.silk.t_domkm$silk7888.cljs$lang$ctorStr = "domkm.silk/t_domkm$silk7888";

domkm.silk.t_domkm$silk7888.cljs$lang$ctorPrWriter = ((function (vec__7885,default_params){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"domkm.silk/t_domkm$silk7888");
});})(vec__7885,default_params))
;

domkm.silk.__GT_t_domkm$silk7888 = ((function (vec__7885,default_params){
return (function domkm$silk$__GT_t_domkm$silk7888(ptrn__$1,p__7884__$1,vec__7885__$1,default_params__$1,meta7889){
return (new domkm.silk.t_domkm$silk7888(ptrn__$1,p__7884__$1,vec__7885__$1,default_params__$1,meta7889));
});})(vec__7885,default_params))
;

}

return (new domkm.silk.t_domkm$silk7888(ptrn,p__7884,vec__7885,default_params,cljs.core.PersistentArrayMap.EMPTY));
});

domkm.silk._QMARK_.cljs$lang$maxFixedArity = (1);

domkm.silk._QMARK_.cljs$lang$applyTo = (function (seq7882){
var G__7883 = cljs.core.first.call(null,seq7882);
var seq7882__$1 = cljs.core.next.call(null,seq7882);
return domkm.silk._QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__7883,seq7882__$1);
});


/**
* @constructor
 * @implements {cljs.core.IMapEntry}
 * @implements {domkm.silk.Pattern}
*/
domkm.silk.Route = (function (name,pattern){
this.name = name;
this.pattern = pattern;
this.cljs$lang$protocol_mask$partition0$ = 2048;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domkm.silk.Route.prototype.domkm$silk$Pattern$ = true;

domkm.silk.Route.prototype.domkm$silk$Pattern$_match$arity$2 = (function (this$,_url){
var self__ = this;
var this$__$1 = this;
var temp__4657__auto__ = domkm.silk.match.call(null,self__.pattern,domkm.silk.url.call(null,_url));
if(cljs.core.truth_(temp__4657__auto__)){
var params = temp__4657__auto__;
return cljs.core.assoc.call(null,params,new cljs.core.Keyword("domkm.silk","name","domkm.silk/name",607245322),self__.name,new cljs.core.Keyword("domkm.silk","pattern","domkm.silk/pattern",-593943136),self__.pattern);
} else {
return null;
}
});

domkm.silk.Route.prototype.domkm$silk$Pattern$_unmatch$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return domkm.silk.url.call(null,domkm.silk.unmatch.call(null,self__.pattern,cljs.core.dissoc.call(null,params,new cljs.core.Keyword("domkm.silk","name","domkm.silk/name",607245322),new cljs.core.Keyword("domkm.silk","pattern","domkm.silk/pattern",-593943136))));
});

domkm.silk.Route.prototype.domkm$silk$Pattern$_match_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.map_QMARK_;
});

domkm.silk.Route.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

domkm.silk.Route.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

domkm.silk.Route.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.pattern;
});

domkm.silk.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

domkm.silk.Route.cljs$lang$type = true;

domkm.silk.Route.cljs$lang$ctorStr = "domkm.silk/Route";

domkm.silk.Route.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"domkm.silk/Route");
});

domkm.silk.__GT_Route = (function domkm$silk$__GT_Route(name,pattern){
return (new domkm.silk.Route(name,pattern));
});

domkm.silk.route_QMARK_ = (function domkm$silk$route_QMARK_(x){
return (x instanceof domkm.silk.Route);
});
domkm.silk.route = (function domkm$silk$route(x){
if(cljs.core.truth_(domkm.silk.route_QMARK_.call(null,x))){
return x;
} else {
var vec__7897 = x;
var nm = cljs.core.nth.call(null,vec__7897,(0),null);
var ptrn = cljs.core.nth.call(null,vec__7897,(1),null);
return domkm.silk.__GT_Route.call(null,nm,domkm.silk.url_pattern.call(null,ptrn));
}
});

/**
* @constructor
 * @implements {domkm.silk.Pattern}
*/
domkm.silk.Routes = (function (routes_seq,routes_map){
this.routes_seq = routes_seq;
this.routes_map = routes_map;
})
domkm.silk.Routes.prototype.domkm$silk$Pattern$ = true;

domkm.silk.Routes.prototype.domkm$silk$Pattern$_match$arity$2 = (function (this$,_url){
var self__ = this;
var this$__$1 = this;
var u = domkm.silk.url.call(null,_url);
return cljs.core.some.call(null,((function (u,this$__$1){
return (function (route){
var temp__4657__auto__ = domkm.silk.match.call(null,route,u);
if(cljs.core.truth_(temp__4657__auto__)){
var params = temp__4657__auto__;
return cljs.core.assoc.call(null,params,new cljs.core.Keyword("domkm.silk","routes","domkm.silk/routes",626824359),this$__$1,new cljs.core.Keyword("domkm.silk","url","domkm.silk/url",1456306613),u);
} else {
return null;
}
});})(u,this$__$1))
,self__.routes_seq);
});

domkm.silk.Routes.prototype.domkm$silk$Pattern$_unmatch$arity$2 = (function (this$,p__7900){
var self__ = this;
var map__7901 = p__7900;
var map__7901__$1 = ((((!((map__7901 == null)))?((((map__7901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7901):map__7901);
var params = map__7901__$1;
var nm = cljs.core.get.call(null,map__7901__$1,new cljs.core.Keyword("domkm.silk","name","domkm.silk/name",607245322));
var this$__$1 = this;
if((cljs.core.some_QMARK_.call(null,nm)) && (cljs.core.contains_QMARK_.call(null,self__.routes_map,nm))){
} else {
throw (new Error("Assert failed: (and (some? nm) (contains? routes-map nm))"));
}

return domkm.silk.unmatch.call(null,cljs.core.get.call(null,self__.routes_map,nm),cljs.core.dissoc.call(null,params,new cljs.core.Keyword("domkm.silk","routes","domkm.silk/routes",626824359),new cljs.core.Keyword("domkm.silk","url","domkm.silk/url",1456306613)));
});

domkm.silk.Routes.prototype.domkm$silk$Pattern$_match_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.map_QMARK_;
});

domkm.silk.Routes.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

domkm.silk.Routes.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes-seq","routes-seq",-1976293284,null),new cljs.core.Symbol(null,"routes-map","routes-map",964392646,null)], null);
});

domkm.silk.Routes.cljs$lang$type = true;

domkm.silk.Routes.cljs$lang$ctorStr = "domkm.silk/Routes";

domkm.silk.Routes.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write.call(null,writer__7184__auto__,"domkm.silk/Routes");
});

domkm.silk.__GT_Routes = (function domkm$silk$__GT_Routes(routes_seq,routes_map){
return (new domkm.silk.Routes(routes_seq,routes_map));
});

domkm.silk.routes_QMARK_ = (function domkm$silk$routes_QMARK_(x){
return (x instanceof domkm.silk.Routes);
});
domkm.silk.routes = (function domkm$silk$routes(rtes){
if(cljs.core.truth_(domkm.silk.routes_QMARK_.call(null,rtes))){
return rtes;
} else {
var rtes_seq = cljs.core.mapcat.call(null,(function (p1__7903_SHARP_){
if(cljs.core.truth_(domkm.silk.routes_QMARK_.call(null,p1__7903_SHARP_))){
return p1__7903_SHARP_.routes_seq;
} else {
var x__7411__auto__ = domkm.silk.route.call(null,p1__7903_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7411__auto__);
}
}),rtes);
var rtes_map = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (rtes_seq){
return (function (memo,rte){
var rte__$1 = domkm.silk.route.call(null,rte);
var k = cljs.core.key.call(null,rte__$1);
if((k == null)){
return memo;
} else {
return cljs.core.assoc_BANG_.call(null,memo,k,rte__$1);
}
});})(rtes_seq))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),rtes_seq));
return domkm.silk.__GT_Routes.call(null,rtes_seq,rtes_map);
}
});
domkm.silk.arrive = (function domkm$silk$arrive(var_args){
var args7904 = [];
var len__7652__auto___7907 = arguments.length;
var i__7653__auto___7908 = (0);
while(true){
if((i__7653__auto___7908 < len__7652__auto___7907)){
args7904.push((arguments[i__7653__auto___7908]));

var G__7909 = (i__7653__auto___7908 + (1));
i__7653__auto___7908 = G__7909;
continue;
} else {
}
break;
}

var G__7906 = args7904.length;
switch (G__7906) {
case 2:
return domkm.silk.arrive.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domkm.silk.arrive.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7904.length)].join('')));

}
});

domkm.silk.arrive.cljs$core$IFn$_invoke$arity$2 = (function (rtes,x){
return domkm.silk.arrive.call(null,rtes,x,cljs.core.identity);
});

domkm.silk.arrive.cljs$core$IFn$_invoke$arity$3 = (function (rtes,x,handler){
return handler.call(null,domkm.silk.match.call(null,rtes,domkm.silk.url.call(null,x)));
});

domkm.silk.arrive.cljs$lang$maxFixedArity = 3;

domkm.silk.depart = (function domkm$silk$depart(var_args){
var args7911 = [];
var len__7652__auto___7914 = arguments.length;
var i__7653__auto___7915 = (0);
while(true){
if((i__7653__auto___7915 < len__7652__auto___7914)){
args7911.push((arguments[i__7653__auto___7915]));

var G__7916 = (i__7653__auto___7915 + (1));
i__7653__auto___7915 = G__7916;
continue;
} else {
}
break;
}

var G__7913 = args7911.length;
switch (G__7913) {
case 2:
return domkm.silk.depart.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domkm.silk.depart.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return domkm.silk.depart.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7911.length)].join('')));

}
});

domkm.silk.depart.cljs$core$IFn$_invoke$arity$2 = (function (rtes,nm){
return domkm.silk.depart.call(null,rtes,nm,cljs.core.PersistentArrayMap.EMPTY,cljs.core.str);
});

domkm.silk.depart.cljs$core$IFn$_invoke$arity$3 = (function (rtes,nm,params){
return domkm.silk.depart.call(null,rtes,nm,params,cljs.core.str);
});

domkm.silk.depart.cljs$core$IFn$_invoke$arity$4 = (function (rtes,nm,params,handler){
return handler.call(null,domkm.silk.unmatch.call(null,rtes,cljs.core.assoc.call(null,params,new cljs.core.Keyword("domkm.silk","name","domkm.silk/name",607245322),nm)));
});

domkm.silk.depart.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=silk.js.map