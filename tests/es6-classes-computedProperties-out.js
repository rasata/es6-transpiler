var DP$0 = Object.defineProperty;var MIXIN$0 = function(t,s){for(var p in s){if(s.hasOwnProperty(p)){DP$0(t,p,Object.getOwnPropertyDescriptor(s,p));}}return t};
var a = 'method1', b = 'method2', x = 'asd';

var A = (function(){"use strict";function A() {}DP$0(A, "prototype", {"configurable": false, "enumerable": false, "writable": false});var $static$0={},$proto$0={};
	$static$0.test1 = function(){ return 'test1' };
	$proto$0.test2 = function(){ return 'test2' };

	DP$0(A.prototype,a,{"set":function(x){ throw new Error('you can\'t set ' + a) },"configurable":true,"enumerable":true});
MIXIN$0(A,$static$0);MIXIN$0(A.prototype,$proto$0);$static$0=$proto$0=void 0;return A;})();

var B = (function(super$0){"use strict";function B() {super$0.apply(this, arguments)}MIXIN$0(B, super$0);B.prototype = Object.create(super$0.prototype, {"constructor": {"value": B, "configurable": true, "writable": true}, c: {"get": c$get$0, "set": c$set$0, "configurable": true, "enumerable": true} });DP$0(B, "prototype", {"configurable": false, "enumerable": false, "writable": false});var $static$0={},$proto$0={};

	$proto$0[a] = function() {
		return a;
	};

	$proto$0[b] = function() {
		return b;
	};

	$proto$0.a = function(){ return 123 };

	DP$0(B.prototype,x + 1,{"get":function(){ return this.__x },"configurable":true,"enumerable":true});
	DP$0(B.prototype,x + 1,{"set":function(a){ this.__x = a + 9 },"configurable":true,"enumerable":true});

	function c$get$0(){ return this.__c }
	function c$set$0(a){ this.__c = a + 9 }

	$static$0[a] = function() {
		return a;
	};

	$static$0[b] = function() {
		return b;
	};

	$static$0.a = function(){ return 123 };

	DP$0(B,x + 1,{"get":function(){ return this.__x },"configurable":true,"enumerable":true});
	DP$0(B,x + 1,{"set":function(a){ this.__x = a + 9 },"configurable":true,"enumerable":true});

	function static_c$get$0(){ return this.__c };Object.defineProperties(B, {c: {"get": static_c$get$0, "set": static_c$set$0, "configurable": true, "enumerable": true}});
	function static_c$set$0(a){ this.__c = a + 9 }
MIXIN$0(B,$static$0);MIXIN$0(B.prototype,$proto$0);$static$0=$proto$0=void 0;return B;})(A);

var objA = new A();
try { objA[a] = isNaN;console.log(false); }
catch(e){ console.log(true); }

B[x + 1] = 11;
B.c = 321;
console.log(B[a]() == a, B[b]() == b, B.a() == 123, B[x + 1] == 11 + 9, B.c == 321 + 9)

var obj = new B();
obj[x + 1] = 11;
obj.c = 321;
console.log(obj[a]() == a, obj[b]() == b, obj.a() == 123, obj[x + 1] == 11 + 9, obj.c == 321 + 9);