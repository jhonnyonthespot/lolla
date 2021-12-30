(function(r){function C(){this.crc=-1}function J(){}function V(a,b,c){if(0>b||0>c||b+c>a.size)throw new RangeError("offset:"+b+", length:"+c+", size:"+a.size);if(a.slice)return a.slice(b,b+c);if(a.webkitSlice)return a.webkitSlice(b,b+c);if(a.mozSlice)return a.mozSlice(b,b+c);if(a.msSlice)return a.msSlice(b,b+c)}function x(a,b){var c=new ArrayBuffer(a);var d=new Uint8Array(c);b&&d.set(b,0);return{buffer:c,array:d,view:new DataView(c)}}function D(){}function E(a){var b=this,c;b.size=0;b.init=function(d,
f){var e=new Blob([a],{type:"text/plain"});c=new y(e);c.init(function(){b.size=c.size;d()},f)};b.readUint8Array=function(a,b,e,k){c.readUint8Array(a,b,e,k)}}function F(a){var b=this,c;b.size=0;b.init=function(d){for(var f=a.length;"="==a.charAt(f-1);)f--;c=a.indexOf(",")+1;b.size=Math.floor(.75*(f-c));d()};b.readUint8Array=function(b,f,e){var d=x(f),l=4*Math.floor(b/3),n=r.atob(a.substring(l+c,4*Math.ceil((b+f)/3)+c));for(b=l=b-3*Math.floor(l/4);b<l+f;b++)d.array[b-l]=n.charCodeAt(b);e(d.array)}}
function y(a){var b=this;b.size=0;b.init=function(c){b.size=a.size;c()};b.readUint8Array=function(c,b,f,e){var d=new FileReader;d.onload=function(a){f(new Uint8Array(a.target.result))};d.onerror=e;try{d.readAsArrayBuffer(V(a,c,b))}catch(l){e(l)}}}function B(){}function G(a){var b;this.init=function(a){b=new Blob([],{type:"text/plain"});a()};this.writeUint8Array=function(a,d){b=new Blob([b,N?a:a.buffer],{type:"text/plain"});d()};this.getData=function(c,d){var f=new FileReader;f.onload=function(a){c(a.target.result)};
f.onerror=d;f.readAsText(b,a)}}function H(a){var b="",c="";this.init=function(c){b+="data:"+(a||"")+";base64,";c()};this.writeUint8Array=function(a,f){var d,k=c.length,l=c;c="";for(d=0;d<3*Math.floor((k+a.length)/3)-k;d++)l+=String.fromCharCode(a[d]);for(;d<a.length;d++)c+=String.fromCharCode(a[d]);2<l.length?b+=r.btoa(l):c=l;f()};this.getData=function(a){a(b+r.btoa(c))}}function I(a){var b;this.init=function(c){b=new Blob([],{type:a});c()};this.writeUint8Array=function(c,d){b=new Blob([b,N?c:c.buffer],
{type:a});d()};this.getData=function(a){a(b)}}function K(a,b,c,d,f,e,k,l,n,v){function p(){a.removeEventListener("message",w,!1);l(L,g)}function w(b){b=b.data;var c=b.data,l=b.error;if(l)l.toString=function(){return"Error: "+this.message},n(l);else if(b.sn===h)switch("number"===typeof b.codecTime&&(a.codecTime+=b.codecTime),"number"===typeof b.crcTime&&(a.crcTime+=b.crcTime),b.type){case "append":c?(L+=c.length,d.writeUint8Array(c,function(){m()},v)):m();break;case "flush":g=b.crc;c?(L+=c.length,
d.writeUint8Array(c,function(){p()},v)):p();break;case "progress":k&&k(q+b.loaded,e);break;case "importScripts":case "newTask":case "echo":break;default:console.warn("zip.js:launchWorkerProcess: unknown message: ",b)}}function m(){q=524288*t;q<=e?c.readUint8Array(f+q,Math.min(524288,e-q),function(c){k&&k(q,e);var d=0===q?b:{sn:h};d.type="append";d.data=c;try{a.postMessage(d,[c.buffer])}catch(z){a.postMessage(d)}t++},n):a.postMessage({sn:h,type:"flush"})}var t=0,q,h=b.sn,g;var L=0;a.addEventListener("message",
w,!1);m()}function M(a,b,c,d,f,e,k,l,n,v){function p(){m=524288*w;if(m<f)b.readUint8Array(d+m,Math.min(524288,f-m),function(b){try{var d=a.append(b,function(a){k&&k(m+a,f)})}catch(z){n(z);return}d?(t+=d.length,c.writeUint8Array(d,function(){w++;setTimeout(p,1)},v),h&&g.append(d)):(w++,setTimeout(p,1));q&&g.append(b);k&&k(m,f)},n);else{try{var e=a.flush()}catch(W){n(W);return}e?(h&&g.append(e),t+=e.length,c.writeUint8Array(e,function(){l(t,g.get())},v)):l(t,g.get())}}var w=0,m,t=0,q="input"===e,h=
"output"===e,g=new C;p()}function O(a,b,c,d,f,e,k,l,n,v,p){r.zip.useWebWorkers&&k?K(a,{sn:b,codecClass:"NOOP",crcType:"input"},c,d,f,e,n,l,v,p):M(new J,c,d,f,e,"input",n,l,v,p)}function P(a){var b,c="",d="\u00c7\u00fc\u00e9\u00e2\u00e4\u00e0\u00e5\u00e7\u00ea\u00eb\u00e8\u00ef\u00ee\u00ec\u00c4\u00c5\u00c9\u00e6\u00c6\u00f4\u00f6\u00f2\u00fb\u00f9\u00ff\u00d6\u00dc\u00f8\u00a3\u00d8\u00d7\u0192\u00e1\u00ed\u00f3\u00fa\u00f1\u00d1\u00aa\u00ba\u00bf\u00ae\u00ac\u00bd\u00bc\u00a1\u00ab\u00bb___\u00a6\u00a6\u00c1\u00c2\u00c0\u00a9\u00a6\u00a6++\u00a2\u00a5++--+-+\u00e3\u00c3++--\u00a6-+\u00a4\u00f0\u00d0\u00ca\u00cb\u00c8i\u00cd\u00ce\u00cf++__\u00a6\u00cc_\u00d3\u00df\u00d4\u00d2\u00f5\u00d5\u00b5\u00fe\u00de\u00da\u00db\u00d9\u00fd\u00dd\u00af\u00b4\u00ad\u00b1_\u00be\u00b6\u00a7\u00f7\u00b8\u00b0\u00a8\u00b7\u00b9\u00b3\u00b2_ ".split("");
for(b=0;b<a.length;b++){var f=a.charCodeAt(b)&255;c=127<f?c+d[f-128]:c+String.fromCharCode(f)}return c}function Q(a){var b,c="";for(b=0;b<a.length;b++)c+=String.fromCharCode(a[b]);return c}function R(a,b,c,d,f){a.version=b.view.getUint16(c,!0);a.bitFlag=b.view.getUint16(c+2,!0);a.compressionMethod=b.view.getUint16(c+4,!0);a.lastModDateRaw=b.view.getUint32(c+6,!0);a:{var e=a.lastModDateRaw,k=(e&4294901760)>>16;e&=65535;try{var l=new Date(1980+((k&65024)>>9),((k&480)>>5)-1,k&31,(e&63488)>>11,(e&2016)>>
5,2*(e&31),0);break a}catch(n){}l=void 0}a.lastModDate=l;if(1===(a.bitFlag&1))f("File contains encrypted entry.");else{if(d||8!=(a.bitFlag&8))a.crc32=b.view.getUint32(c+10,!0),a.compressedSize=b.view.getUint32(c+14,!0),a.uncompressedSize=b.view.getUint32(c+18,!0);4294967295===a.compressedSize||4294967295===a.uncompressedSize?f("File is using Zip64 (4gb+ file size)."):(a.filenameLength=b.view.getUint16(c+22,!0),a.extraFieldLength=b.view.getUint16(c+24,!0))}}function X(a,b,c){function d(){}function f(b){function d(d,
l){a.readUint8Array(a.size-d,d,function(a){for(var c=a.length-22;0<=c;c--)if(80===a[c]&&75===a[c+1]&&5===a[c+2]&&6===a[c+3]){b(new DataView(a.buffer,c,22));return}l()},function(){c("Error while reading zip file.")})}22>a.size?c("File format is not recognized."):d(22,function(){d(Math.min(65558,a.size),function(){c("File format is not recognized.")})})}var e=0;d.prototype.getData=function(b,d,f,k){function l(a){var b=x(4);b.view.setUint32(0,a);return h.crc32==b.view.getUint32(0)}function m(a,f){k&&
!l(f)?c("CRC failed."):b.getData(function(a){d(a)})}function t(a){c(a||"Error while reading file data.")}function q(a){c(a||"Error while writing file data.")}var h=this;a.readUint8Array(h.offset,30,function(d){d=x(d.length,d);if(1347093252!=d.view.getUint32(0))c("File format is not recognized.");else{R(h,d,4,!1,c);var l=h.offset+30+h.filenameLength+h.extraFieldLength;b.init(function(){if(0===h.compressionMethod)O(h._worker,e++,a,b,l,h.compressedSize,k,m,f,t,q);else{var c=e++,d=h.compressedSize,g=
k?"output":"none";r.zip.useWebWorkers?K(h._worker,{sn:c,codecClass:"Inflater",crcType:g},a,b,l,d,f,m,t,q):M(new r.zip.Inflater,a,b,l,d,g,f,m,t,q)}},q)}},t)};var k={getEntries:function(b){var l=this._worker;f(function(f){var e=f.getUint32(16,!0);var k=f.getUint16(8,!0);0>e||e>=a.size?c("File format is not recognized."):a.readUint8Array(e,a.size-e,function(a){var f=0,e=[],h=x(a.length,a);for(a=0;a<k;a++){var g=new d;g._worker=l;if(1347092738!=h.view.getUint32(f)){c("File format is not recognized.");
return}R(g,h,f+6,!0,c);g.commentLength=h.view.getUint16(f+32,!0);g.directory=16==(h.view.getUint8(f+38)&16);g.offset=h.view.getUint32(f+42,!0);var m=Q(h.array.subarray(f+46,f+46+g.filenameLength));g.filename=2048===(g.bitFlag&2048)?decodeURIComponent(escape(m)):P(m);g.directory||"/"!=g.filename.charAt(g.filename.length-1)||(g.directory=!0);m=Q(h.array.subarray(f+46+g.filenameLength+g.extraFieldLength,f+46+g.filenameLength+g.extraFieldLength+g.commentLength));g.comment=2048===(g.bitFlag&2048)?decodeURIComponent(escape(m)):
P(m);e.push(g);f+=46+g.filenameLength+g.extraFieldLength+g.commentLength}b(e)},function(){c("Error while reading zip file.")})})},close:function(a){this._worker&&(this._worker.terminate(),this._worker=null);a&&a()},_worker:null};r.zip.useWebWorkers?S("inflater",function(a){k._worker=a;b(k)},function(a){c(a)}):b(k)}function T(a){var b,c=[];for(b=0;b<a.length;b++)c.push(a.charCodeAt(b));return c}function Y(a,b,c,d){function f(a){c(a||"Error while writing zip file.")}function e(a){c(a||"Error while reading file data.")}
var k={},l=[],n=0,v=0,p={add:function(b,m,t,q,h){function g(c){A=h.lastModDate||new Date;u=x(26);k[b]={headerArray:u.array,directory:h.directory,filename:z,offset:n,comment:T(unescape(encodeURIComponent(h.comment||"")))};u.view.setUint32(0,335546376);h.version&&u.view.setUint8(0,h.version);d||0===h.level||h.directory||u.view.setUint16(4,2048);u.view.setUint16(6,(A.getHours()<<6|A.getMinutes())<<5|A.getSeconds()/2,!0);u.view.setUint16(8,(A.getFullYear()-1980<<4|A.getMonth()+1)<<5|A.getDate(),!0);u.view.setUint16(22,
z.length,!0);var e=x(30+z.length);e.view.setUint32(0,1347093252);e.array.set(u.array,4);e.array.set(z,30);n+=e.array.length;a.writeUint8Array(e.array,c,f)}function p(b,c){var d=x(16);n+=b||0;d.view.setUint32(0,1347094280);"undefined"!=typeof c&&(u.view.setUint32(10,c,!0),d.view.setUint32(4,c,!0));m&&(d.view.setUint32(8,b,!0),u.view.setUint32(14,b,!0),d.view.setUint32(12,m.size,!0),u.view.setUint32(18,m.size,!0));a.writeUint8Array(d.array,function(){n+=16;t()},f)}function w(){h=h||{};b=b.trim();h.directory&&
"/"!=b.charAt(b.length-1)&&(b+="/");k.hasOwnProperty(b)?c("File already exists."):(z=T(unescape(encodeURIComponent(b))),l.push(b),g(function(){if(m)if(d||0===h.level)O(y,v++,m,a,0,m.size,!0,p,q,e,f);else{var b=v++;r.zip.useWebWorkers?K(y,{sn:b,options:{level:h.level},codecClass:"Deflater",crcType:"input"},m,a,0,m.size,q,p,e,f):M(new r.zip.Deflater,m,a,0,m.size,"input",q,p,e,f)}else p()},f))}var u,z,A,y=this._worker;m?m.init(w,e):w()},close:function(b){this._worker&&(this._worker.terminate(),this._worker=
null);var c=0,d=0,e;for(e=0;e<l.length;e++){var h=k[l[e]];c+=46+h.filename.length+h.comment.length}var g=x(c+22);for(e=0;e<l.length;e++)h=k[l[e]],g.view.setUint32(d,1347092738),g.view.setUint16(d+4,5120),g.array.set(h.headerArray,d+6),g.view.setUint16(d+32,h.comment.length,!0),h.directory&&g.view.setUint8(d+38,16),g.view.setUint32(d+42,h.offset,!0),g.array.set(h.filename,d+46),g.array.set(h.comment,d+46+h.filename.length),d+=46+h.filename.length+h.comment.length;g.view.setUint32(d,1347093766);g.view.setUint16(d+
8,l.length,!0);g.view.setUint16(d+10,l.length,!0);g.view.setUint32(d+12,c,!0);g.view.setUint32(d+16,n,!0);a.writeUint8Array(g.array,function(){a.getData(b)},f)},_worker:null};r.zip.useWebWorkers?S("deflater",function(a){p._worker=a;b(p)},function(a){c(a)}):b(p)}function Z(a){var b=document.createElement("a");return a.map(function(a){b.href=a;return b.href})}function S(a,b,c){function d(a){a=a.data;a.error?(k.terminate(),c(a.error)):"importScripts"===a.type&&(k.removeEventListener("message",d),k.removeEventListener("error",
f),b(k))}function f(a){k.terminate();c(a)}if(null!==r.zip.workerScripts&&null!==r.zip.workerScriptsPath)c(Error("Either zip.workerScripts or zip.workerScriptsPath may be set, not both."));else{if(r.zip.workerScripts){var e=r.zip.workerScripts[a];if(!Array.isArray(e)){c(Error("zip.workerScripts."+a+" is not an array!"));return}e=Z(e)}else e=aa[a].slice(0),e[0]=(r.zip.workerScriptsPath||"")+e[0];var k=new Worker(e[0]);k.codecTime=k.crcTime=0;k.postMessage({type:"importScripts",scripts:e.slice(1)});
k.addEventListener("message",d);k.addEventListener("error",f)}}function U(a){console.error(a)}try{var N=0===(new Blob([new DataView(new ArrayBuffer(0))])).size}catch(a){}C.prototype.append=function(a){for(var b=this.crc|0,c=this.table,d=0,f=a.length|0;d<f;d++)b=b>>>8^c[(b^a[d])&255];this.crc=b};C.prototype.get=function(){return~this.crc};C.prototype.table=function(){var a,b,c=[];for(a=0;256>a;a++){var d=a;for(b=0;8>b;b++)d=d&1?d>>>1^3988292384:d>>>1;c[a]=d}return c}();J.prototype.append=function(a,
b){return a};J.prototype.flush=function(){};E.prototype=new D;E.prototype.constructor=E;F.prototype=new D;F.prototype.constructor=F;y.prototype=new D;y.prototype.constructor=y;B.prototype.getData=function(a){a(this.data)};G.prototype=new B;G.prototype.constructor=G;H.prototype=new B;H.prototype.constructor=H;I.prototype=new B;I.prototype.constructor=I;var aa={deflater:["z-worker.js","deflate.js"],inflater:["z-worker.js","inflate.js"]};r.zip={Reader:D,Writer:B,BlobReader:y,Data64URIReader:F,TextReader:E,
BlobWriter:I,Data64URIWriter:H,TextWriter:G,createReader:function(a,b,c){c=c||U;a.init(function(){X(a,b,c)},c)},createWriter:function(a,b,c,d){c=c||U;d=!!d;a.init(function(){Y(a,b,c,d)},c)},useWebWorkers:!0,workerScriptsPath:null,workerScripts:null}})(this);
