goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16157__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16158__i = 0, G__16158__a = new Array(arguments.length -  0);
while (G__16158__i < G__16158__a.length) {G__16158__a[G__16158__i] = arguments[G__16158__i + 0]; ++G__16158__i;}
  args = new cljs.core.IndexedSeq(G__16158__a,0);
} 
return G__16157__delegate.call(this,args);};
G__16157.cljs$lang$maxFixedArity = 0;
G__16157.cljs$lang$applyTo = (function (arglist__16159){
var args = cljs.core.seq(arglist__16159);
return G__16157__delegate(args);
});
G__16157.cljs$core$IFn$_invoke$arity$variadic = G__16157__delegate;
return G__16157;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16160__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16161__i = 0, G__16161__a = new Array(arguments.length -  0);
while (G__16161__i < G__16161__a.length) {G__16161__a[G__16161__i] = arguments[G__16161__i + 0]; ++G__16161__i;}
  args = new cljs.core.IndexedSeq(G__16161__a,0);
} 
return G__16160__delegate.call(this,args);};
G__16160.cljs$lang$maxFixedArity = 0;
G__16160.cljs$lang$applyTo = (function (arglist__16162){
var args = cljs.core.seq(arglist__16162);
return G__16160__delegate(args);
});
G__16160.cljs$core$IFn$_invoke$arity$variadic = G__16160__delegate;
return G__16160;
})()
;

return null;
});
