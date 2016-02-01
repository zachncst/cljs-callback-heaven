goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15344__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15344 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15345__i = 0, G__15345__a = new Array(arguments.length -  0);
while (G__15345__i < G__15345__a.length) {G__15345__a[G__15345__i] = arguments[G__15345__i + 0]; ++G__15345__i;}
  args = new cljs.core.IndexedSeq(G__15345__a,0);
} 
return G__15344__delegate.call(this,args);};
G__15344.cljs$lang$maxFixedArity = 0;
G__15344.cljs$lang$applyTo = (function (arglist__15346){
var args = cljs.core.seq(arglist__15346);
return G__15344__delegate(args);
});
G__15344.cljs$core$IFn$_invoke$arity$variadic = G__15344__delegate;
return G__15344;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15347__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15348__i = 0, G__15348__a = new Array(arguments.length -  0);
while (G__15348__i < G__15348__a.length) {G__15348__a[G__15348__i] = arguments[G__15348__i + 0]; ++G__15348__i;}
  args = new cljs.core.IndexedSeq(G__15348__a,0);
} 
return G__15347__delegate.call(this,args);};
G__15347.cljs$lang$maxFixedArity = 0;
G__15347.cljs$lang$applyTo = (function (arglist__15349){
var args = cljs.core.seq(arglist__15349);
return G__15347__delegate(args);
});
G__15347.cljs$core$IFn$_invoke$arity$variadic = G__15347__delegate;
return G__15347;
})()
;

return null;
});
