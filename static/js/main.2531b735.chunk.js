(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(15),n(2)),s=n(3),l=n(5),u=n(4),h=n(6),p=n(9),d=n(1),m=(n(17),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){this.props.flipCellsAroundMe()}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(a.Component)),f=(n(19),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={hasWon:!1,board:n.createBoard()},n.playAgain=n.playAgain.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"createBoard",value:function(){for(var e=[],t=0;t<this.props.nrows;t++){for(var n=[],a=0;a<this.props.ncols;a++)n.push(Math.random()<this.props.chanceLightStartsOn);e.push(n)}return e}},{key:"flipCellsAround",value:function(e){console.log("flipping",e);var t=this.props,n=t.ncols,a=t.nrows,r=this.state.board,o=e.split("-").map(Number),c=Object(p.a)(o,2),i=c[0],s=c[1];function l(e,t){t>=0&&t<n&&e>=0&&e<a&&(r[e][t]=!r[e][t])}l(i,s),l(i-1,s),l(i+1,s),l(i,s-1),l(i,s+1);var u=r.every(function(e){return e.every(function(e){return!e})});this.setState({board:r,hasWon:u})}},{key:"playAgain",value:function(){this.setState({board:this.createBoard(),hasWon:!1})}},{key:"render",value:function(){var e=this;if(this.state.hasWon)return r.a.createElement("div",{className:"Board-title"},r.a.createElement("h1",{className:"neon-orange"},"Congrats"),r.a.createElement("h1",{className:"neon-blue"},"You Win!!!"),r.a.createElement("button",{onClick:this.playAgain},"Play Again"));for(var t=[],n=0;n<this.props.nrows;n++){for(var a=[],o=function(t){var o="".concat(n,"-").concat(t);a.push(r.a.createElement(m,{flipCellsAroundMe:function(){return e.flipCellsAround(o)},key:o,isLit:e.state.board[n][t]}))},c=0;c<this.props.ncols;c++)o(c);t.push(r.a.createElement("tr",{key:n},a))}return r.a.createElement("div",null,r.a.createElement("div",{className:"Board-title"},r.a.createElement("h1",{className:"neon-orange"},"Lights"),r.a.createElement("h1",{className:"neon-blue"},"Out")),r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,t)))}}]),t}(a.Component));f.defaultProps={nrows:5,ncols:5,chanceLightStartsOn:.25};var b=f,v=(n(21),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.2531b735.chunk.js.map