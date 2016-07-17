// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28105){
var map__28130 = p__28105;
var map__28130__$1 = ((((!((map__28130 == null)))?((((map__28130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28130):map__28130);
var m = map__28130__$1;
var n = cljs.core.get.call(null,map__28130__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28130__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28132_28154 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28133_28155 = null;
var count__28134_28156 = (0);
var i__28135_28157 = (0);
while(true){
if((i__28135_28157 < count__28134_28156)){
var f_28158 = cljs.core._nth.call(null,chunk__28133_28155,i__28135_28157);
cljs.core.println.call(null,"  ",f_28158);

var G__28159 = seq__28132_28154;
var G__28160 = chunk__28133_28155;
var G__28161 = count__28134_28156;
var G__28162 = (i__28135_28157 + (1));
seq__28132_28154 = G__28159;
chunk__28133_28155 = G__28160;
count__28134_28156 = G__28161;
i__28135_28157 = G__28162;
continue;
} else {
var temp__4657__auto___28163 = cljs.core.seq.call(null,seq__28132_28154);
if(temp__4657__auto___28163){
var seq__28132_28164__$1 = temp__4657__auto___28163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28132_28164__$1)){
var c__7388__auto___28165 = cljs.core.chunk_first.call(null,seq__28132_28164__$1);
var G__28166 = cljs.core.chunk_rest.call(null,seq__28132_28164__$1);
var G__28167 = c__7388__auto___28165;
var G__28168 = cljs.core.count.call(null,c__7388__auto___28165);
var G__28169 = (0);
seq__28132_28154 = G__28166;
chunk__28133_28155 = G__28167;
count__28134_28156 = G__28168;
i__28135_28157 = G__28169;
continue;
} else {
var f_28170 = cljs.core.first.call(null,seq__28132_28164__$1);
cljs.core.println.call(null,"  ",f_28170);

var G__28171 = cljs.core.next.call(null,seq__28132_28164__$1);
var G__28172 = null;
var G__28173 = (0);
var G__28174 = (0);
seq__28132_28154 = G__28171;
chunk__28133_28155 = G__28172;
count__28134_28156 = G__28173;
i__28135_28157 = G__28174;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28175 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6577__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28175);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28175)))?cljs.core.second.call(null,arglists_28175):arglists_28175));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28136_28176 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28137_28177 = null;
var count__28138_28178 = (0);
var i__28139_28179 = (0);
while(true){
if((i__28139_28179 < count__28138_28178)){
var vec__28140_28180 = cljs.core._nth.call(null,chunk__28137_28177,i__28139_28179);
var name_28181 = cljs.core.nth.call(null,vec__28140_28180,(0),null);
var map__28143_28182 = cljs.core.nth.call(null,vec__28140_28180,(1),null);
var map__28143_28183__$1 = ((((!((map__28143_28182 == null)))?((((map__28143_28182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28143_28182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28143_28182):map__28143_28182);
var doc_28184 = cljs.core.get.call(null,map__28143_28183__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28185 = cljs.core.get.call(null,map__28143_28183__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28181);

cljs.core.println.call(null," ",arglists_28185);

if(cljs.core.truth_(doc_28184)){
cljs.core.println.call(null," ",doc_28184);
} else {
}

var G__28186 = seq__28136_28176;
var G__28187 = chunk__28137_28177;
var G__28188 = count__28138_28178;
var G__28189 = (i__28139_28179 + (1));
seq__28136_28176 = G__28186;
chunk__28137_28177 = G__28187;
count__28138_28178 = G__28188;
i__28139_28179 = G__28189;
continue;
} else {
var temp__4657__auto___28190 = cljs.core.seq.call(null,seq__28136_28176);
if(temp__4657__auto___28190){
var seq__28136_28191__$1 = temp__4657__auto___28190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28136_28191__$1)){
var c__7388__auto___28192 = cljs.core.chunk_first.call(null,seq__28136_28191__$1);
var G__28193 = cljs.core.chunk_rest.call(null,seq__28136_28191__$1);
var G__28194 = c__7388__auto___28192;
var G__28195 = cljs.core.count.call(null,c__7388__auto___28192);
var G__28196 = (0);
seq__28136_28176 = G__28193;
chunk__28137_28177 = G__28194;
count__28138_28178 = G__28195;
i__28139_28179 = G__28196;
continue;
} else {
var vec__28145_28197 = cljs.core.first.call(null,seq__28136_28191__$1);
var name_28198 = cljs.core.nth.call(null,vec__28145_28197,(0),null);
var map__28148_28199 = cljs.core.nth.call(null,vec__28145_28197,(1),null);
var map__28148_28200__$1 = ((((!((map__28148_28199 == null)))?((((map__28148_28199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28148_28199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28148_28199):map__28148_28199);
var doc_28201 = cljs.core.get.call(null,map__28148_28200__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28202 = cljs.core.get.call(null,map__28148_28200__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28198);

cljs.core.println.call(null," ",arglists_28202);

if(cljs.core.truth_(doc_28201)){
cljs.core.println.call(null," ",doc_28201);
} else {
}

var G__28203 = cljs.core.next.call(null,seq__28136_28191__$1);
var G__28204 = null;
var G__28205 = (0);
var G__28206 = (0);
seq__28136_28176 = G__28203;
chunk__28137_28177 = G__28204;
count__28138_28178 = G__28205;
i__28139_28179 = G__28206;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__28150 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28151 = null;
var count__28152 = (0);
var i__28153 = (0);
while(true){
if((i__28153 < count__28152)){
var role = cljs.core._nth.call(null,chunk__28151,i__28153);
var temp__4657__auto___28207__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28207__$1)){
var spec_28208 = temp__4657__auto___28207__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28208));
} else {
}

var G__28209 = seq__28150;
var G__28210 = chunk__28151;
var G__28211 = count__28152;
var G__28212 = (i__28153 + (1));
seq__28150 = G__28209;
chunk__28151 = G__28210;
count__28152 = G__28211;
i__28153 = G__28212;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__28150);
if(temp__4657__auto____$1){
var seq__28150__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28150__$1)){
var c__7388__auto__ = cljs.core.chunk_first.call(null,seq__28150__$1);
var G__28213 = cljs.core.chunk_rest.call(null,seq__28150__$1);
var G__28214 = c__7388__auto__;
var G__28215 = cljs.core.count.call(null,c__7388__auto__);
var G__28216 = (0);
seq__28150 = G__28213;
chunk__28151 = G__28214;
count__28152 = G__28215;
i__28153 = G__28216;
continue;
} else {
var role = cljs.core.first.call(null,seq__28150__$1);
var temp__4657__auto___28217__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28217__$2)){
var spec_28218 = temp__4657__auto___28217__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28218));
} else {
}

var G__28219 = cljs.core.next.call(null,seq__28150__$1);
var G__28220 = null;
var G__28221 = (0);
var G__28222 = (0);
seq__28150 = G__28219;
chunk__28151 = G__28220;
count__28152 = G__28221;
i__28153 = G__28222;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map