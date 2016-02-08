function bellman_ford(a,d){for(var c in a.nodes)a.nodes[c].distance=Infinity;d.distance=0;step("Initially, all distances are infinite and all predecessors are null.");for(c=1;c<a.nodes.length;c++)for(var b in a.edges){var f=a.edges[b];f.source.distance+f.weight<f.target.distance&&(step("Relax edge between "+f.source.id+" and "+f.target.id+"."),f.target.distance=f.source.distance+f.weight,f.target.predecessor=f.source);!f.style.directed&&f.target.distance+f.weight<f.source.distance&&(a.snapShot("Relax edge between "+
f.target.id+" and "+f.source.id+"."),f.source.distance=f.target.distance+f.weight,f.source.predecessor=f.target)}step("Ready.")}
function dijkstra(a,d){for(var c in a.nodes)a.nodes[c].distance=Infinity;a.snapShot("Initially, all distances are infinite and all predecessors are null.");d.distance=0;c=new BinaryMinHeap(a.nodes,"distance");for(var b;void 0!=c.min();){b=c.extractMin();b.optimized=!0;if(Infinity==b.distance)throw"Orphaned node!";for(e in b.edges){var f=b==b.edges[e].target?b.edges[e].source:b.edges[e].target;if(!f.optimized){var g=b.distance+b.edges[e].weight;g<f.distance&&(f.distance=g,c.heapify(),f.predecessor=
b,a.snapShot("Enhancing node."))}}}}function floyd_warshall(a,d){var c=[],b=[];for(j in a.nodes)for(i in c[j]=[],b[j]=[],a.nodes)c[j][i]=j==i?0:Infinity;for(e in a.edges)c[a.edges[e].source.id][a.edges[e].target.id]=a.edges[e].weight;for(k in a.nodes)for(i in a.nodes)for(j in a.nodes)c[i][j]>c[i][k]+c[k][j]&&(c[i][j]=c[i][k]+c[k][j],b[i][j]=k)}function edmonds_karp(a,d,c){}
function BinaryMinHeap(a,d){function c(a){for(var c=2*a+1,h=2*a+2;b[c]&&b[a][d]>b[c][d]||b[h]&&b[a][d]>b[h][d];)c=b[c]?b[h]?b[c][d]>b[h][d]?h:c:c:c,b[a]=b.splice(c,1,b[a])[0],a=c,c=2*a+1,h=2*a+2}var b=[];d=d||"key";this.insert=function(a){void 0==a[d]&&(a={key:a});b.push(a);a=b.length-1;for(var c=Math.floor((a-1)/2);0<=c&&b[a][d]<b[c][d];)b[a]=b.splice(c,1,b[a])[0],a=c,c=Math.floor((a-1)/2)};this.min=function(){return 1==b.length?void 0:b[0]};this.extractMin=function(){var a=this.min();1==b.length&&
(b=[])||(b[0]=b.pop())&&c(0);return a};this.changeKey=function(a,b){throw"function not implemented";};this.heapify=function(){for(var a=Math.floor((b.length-2)/2);0<=a;a--)c(a)};for(i in a||[])this.insert(a[i])}function quickSort(a){if(1>=a.length)return a;var d=a[Math.floor(Math.random()*a.length)],c=[],b=[],f=[],g;for(g in a)a[g]<d&&c.push(a[g]),a[g]==d&&b.push(a[g]),a[g]>d&&f.push(a[g]);return quickSort(c).concat(b).concat(quickSort(f))}
function selectionSort(a){if(1==a.length)return a;var d=Infinity,c,b;for(b in a)a[b]<d&&(d=a[b],c=b);a.splice(c,1);return[d].concat(selectionSort(a))}function mergeSort(a){median=Math.floor(a.length/2);var d=a.slice(0,median),c=a.slice(median-a.length);if(!(1>=a.length)){a=mergeSort(d);c=mergeSort(c);for(d=[];0<a.length||0<c.length;){var b=0<a.length&&0<c.length?a[0]<c[0]?a.shift():c.shift():0<c.length?c.shift():0<a.length?a.shift():null;null!=b&&d.push(b)}a=d}return a}function RedBlackTree(a){}
function BTree(a){}function NaryTree(a,d){}function kmp(a,d){for(var c=[0],b=0,f=1;f<a.length;f++){for(;0<b&&a.charAt(b)!=a.charAt(f);)b=c[b-1];a.charAt(b)==a.charAt(f)&&b++;c[f]=b}for(var f=0,b=[],g=0;g<d.length;g++){for(;0<f&&a.charAt(f)!=d.charAt(g);)f=c[f];a.charAt(f)==d.charAt(g)&&f++;f==a.length&&b.push(g-a.length)&&(f=c[f])}return b}function step(a,d){d()}
function curry(a){return function(){var d=curry.args(arguments),c=arguments.callee,b=this;return d.length>=a.length?a.apply(b,d):function(){return c.apply(b,d.concat(curry.args(arguments)))}}}curry.args=function(a){return Array.prototype.slice.call(a)};Function.prototype.curry=function(){return curry(this)};function topological_sort(a){for(i in a.nodes)a.nodes[i].deleted=!1;var d=topological_sort_helper(a);for(i in a.nodes)delete a.nodes[i].deleted;return d}
function topological_sort_helper(a){var d;for(i in a.nodes)if(!a.nodes[i].deleted){var c=!1;for(j in a.nodes[i].edges)if(a.nodes[i].edges[j].target==a.nodes[i]&&0==a.nodes[i].edges[j].source.deleted){c=!0;break}if(!c){d=a.nodes[i];break}}if(void 0==d)return[];d.deleted=!0;a=topological_sort_helper(a);a.unshift(d);return a};
