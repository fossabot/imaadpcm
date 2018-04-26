/*
 imaadpcm
 JavaScript IMA ADPCM codec.
 Copyright (c) 2018 Rafael da Silva Rocha.
 https://github.com/rochars/imaadpcm

 References:
 http://www.cs.columbia.edu/~hgs/audio/dvi/
 https://github.com/acida/pyima
 https://wiki.multimedia.cx/index.php/IMA_ADPCM

*/
(function(q){function e(d){if(m[d])return m[d].a;var g=m[d]={m:d,f:!1,a:{}};q[d].call(g.a,g,g.a,e);g.f=!0;return g.a}var m={};e.l=q;e.h=m;e.b=function(d,g){e.c(d)||Object.defineProperty(d,"a",{configurable:!1,enumerable:!0,get:g})};e.i=function(d){var g=d&&d.g?function(){return d["default"]}:function(){return d};e.b(g,g);return g};e.c=function(d){return Object.prototype.hasOwnProperty.call(d,"a")};e.j="";return e(e.o=0)})([function(){function q(b){return 32768<b?b-65536:b}function e(b){var a=b-h;
0<=a?b=0:(b=8,a=-a);var c=r[n],f=c>>3;a>c&&(b|=4,a-=c,f+=c);c>>=1;a>c&&(b|=2,a-=c,f+=c);c>>=1;a>c&&(b|=1,f+=c);a=b;h=a&8?h-f:h+f;-32768>h?h=-32768:32767<h&&(h=32767);n+=t[a&7];0>n?n=0:88<n&&(n=88);return b}function m(b){var a=0;b&4&&(a+=p);b&2&&(a+=p>>1);b&1&&(a+=p>>2);a+=p>>3;b&8&&(a=-a);k+=a;32767<k?k=32767:-32767>k&&(k=-32767);l+=t[b];0>l?l=0:88<l&&(l=88);p=r[l];return k}function d(b){var a=b[0];e(a);var c=[];c.push(a&255);c.push(a>>8&255);c.push(n);c.push(0);for(a=3;a<b.length;a+=2){var f=e(b[a]),
d=e(b[a+1]);c.push(d<<4|f)}for(;256>c.length;)c.push(0);return c}function g(b){k=q(b[1]<<8|b[0]);l=b[2];p=r[l];for(var a=[k,q(b[3]<<8|b[2])],c=4;c<b.length;c++){var f=b[c],d=f>>4;a.push(m(d<<4^f));a.push(m(d))}return a}var t=[-1,-1,-1,-1,2,4,6,8,-1,-1,-1,-1,2,4,6,8],r=[7,8,9,10,11,12,13,14,16,17,19,21,23,25,28,31,34,37,41,45,50,55,60,66,73,80,88,97,107,118,130,143,157,173,190,209,230,253,279,307,337,371,408,449,494,544,598,658,724,796,876,963,1060,1166,1282,1411,1552,1707,1878,2066,2272,2499,2749,
3024,3327,3660,4026,4428,4871,5358,5894,6484,7132,7845,8630,9493,10442,11487,12635,13899,15289,16818,18500,20350,22385,24623,27086,29794,32767],h=0,n=0,k=0,l=0,p=7;window.imaadpcm=window.imaadpcm?window.imaadpcm:{};window.imaadpcm.encode=function(b){for(var a=[],c=[],f=0;f<b.length;f++)if(c.push(b[f]),0==f%505&&0!=f||f==b.length-1)a=a.concat(d(c)),c=[];return a};window.imaadpcm.decode=function(b,a){a=void 0===a?256:a;for(var c=[],d=[],e=0;e<b.length;e++)0==e%a&&0!=e&&(c=c.concat(g(d)),d=[]),d.push(b[e]);
return c};window.imaadpcm.encodeBlock=d;window.imaadpcm.decodeBlock=g}]);
