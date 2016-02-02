goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9569__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9570__i = 0, G__9570__a = new Array(arguments.length -  0);
while (G__9570__i < G__9570__a.length) {G__9570__a[G__9570__i] = arguments[G__9570__i + 0]; ++G__9570__i;}
  args = new cljs.core.IndexedSeq(G__9570__a,0);
} 
return G__9569__delegate.call(this,args);};
G__9569.cljs$lang$maxFixedArity = 0;
G__9569.cljs$lang$applyTo = (function (arglist__9571){
var args = cljs.core.seq(arglist__9571);
return G__9569__delegate(args);
});
G__9569.cljs$core$IFn$_invoke$arity$variadic = G__9569__delegate;
return G__9569;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9572__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9573__i = 0, G__9573__a = new Array(arguments.length -  0);
while (G__9573__i < G__9573__a.length) {G__9573__a[G__9573__i] = arguments[G__9573__i + 0]; ++G__9573__i;}
  args = new cljs.core.IndexedSeq(G__9573__a,0);
} 
return G__9572__delegate.call(this,args);};
G__9572.cljs$lang$maxFixedArity = 0;
G__9572.cljs$lang$applyTo = (function (arglist__9574){
var args = cljs.core.seq(arglist__9574);
return G__9572__delegate(args);
});
G__9572.cljs$core$IFn$_invoke$arity$variadic = G__9572__delegate;
return G__9572;
})()
;

return null;
});
