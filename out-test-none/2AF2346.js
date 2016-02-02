goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14774__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14775__i = 0, G__14775__a = new Array(arguments.length -  0);
while (G__14775__i < G__14775__a.length) {G__14775__a[G__14775__i] = arguments[G__14775__i + 0]; ++G__14775__i;}
  args = new cljs.core.IndexedSeq(G__14775__a,0);
} 
return G__14774__delegate.call(this,args);};
G__14774.cljs$lang$maxFixedArity = 0;
G__14774.cljs$lang$applyTo = (function (arglist__14776){
var args = cljs.core.seq(arglist__14776);
return G__14774__delegate(args);
});
G__14774.cljs$core$IFn$_invoke$arity$variadic = G__14774__delegate;
return G__14774;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14777__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14778__i = 0, G__14778__a = new Array(arguments.length -  0);
while (G__14778__i < G__14778__a.length) {G__14778__a[G__14778__i] = arguments[G__14778__i + 0]; ++G__14778__i;}
  args = new cljs.core.IndexedSeq(G__14778__a,0);
} 
return G__14777__delegate.call(this,args);};
G__14777.cljs$lang$maxFixedArity = 0;
G__14777.cljs$lang$applyTo = (function (arglist__14779){
var args = cljs.core.seq(arglist__14779);
return G__14777__delegate(args);
});
G__14777.cljs$core$IFn$_invoke$arity$variadic = G__14777__delegate;
return G__14777;
})()
;

return null;
});
