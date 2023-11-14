"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[50135],{50135:(t,e,n)=>{n.d(e,{diagram:()=>C});var i=n(18786),r=n(1068),s=n(66254),a=n.n(s),o=n(27037),c=n.n(o),h=n(36236),l=n(24857),d=n(65686),g=(n(74637),n(85804),n(33582),n(21640),n(76003),n(78369),n(73202),n(63926),n(49645),n(70602),function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[1,4],n=[1,13],i=[1,12],r=[1,15],s=[1,16],a=[1,20],o=[1,19],c=[6,7,8],h=[1,26],l=[1,24],d=[1,25],g=[6,7,11],p=[1,6,13,15,16,19,22],u=[1,33],y=[1,34],f=[1,6,7,11,13,15,16,19,22],m={trace:function(){},yy:{},symbols_:{error:2,start:3,mindMap:4,spaceLines:5,SPACELINE:6,NL:7,MINDMAP:8,document:9,stop:10,EOF:11,statement:12,SPACELIST:13,node:14,ICON:15,CLASS:16,nodeWithId:17,nodeWithoutId:18,NODE_DSTART:19,NODE_DESCR:20,NODE_DEND:21,NODE_ID:22,$accept:0,$end:1},terminals_:{2:"error",6:"SPACELINE",7:"NL",8:"MINDMAP",11:"EOF",13:"SPACELIST",15:"ICON",16:"CLASS",19:"NODE_DSTART",20:"NODE_DESCR",21:"NODE_DEND",22:"NODE_ID"},productions_:[0,[3,1],[3,2],[5,1],[5,2],[5,2],[4,2],[4,3],[10,1],[10,1],[10,1],[10,2],[10,2],[9,3],[9,2],[12,2],[12,2],[12,2],[12,1],[12,1],[12,1],[12,1],[12,1],[14,1],[14,1],[18,3],[17,1],[17,4]],performAction:function(t,e,n,i,r,s,a){var o=s.length-1;switch(r){case 6:case 7:return i;case 8:i.getLogger().trace("Stop NL ");break;case 9:i.getLogger().trace("Stop EOF ");break;case 11:i.getLogger().trace("Stop NL2 ");break;case 12:i.getLogger().trace("Stop EOF2 ");break;case 15:i.getLogger().info("Node: ",s[o].id),i.addNode(s[o-1].length,s[o].id,s[o].descr,s[o].type);break;case 16:i.getLogger().trace("Icon: ",s[o]),i.decorateNode({icon:s[o]});break;case 17:case 21:i.decorateNode({class:s[o]});break;case 18:i.getLogger().trace("SPACELIST");break;case 19:i.getLogger().trace("Node: ",s[o].id),i.addNode(0,s[o].id,s[o].descr,s[o].type);break;case 20:i.decorateNode({icon:s[o]});break;case 25:i.getLogger().trace("node found ..",s[o-2]),this.$={id:s[o-1],descr:s[o-1],type:i.getType(s[o-2],s[o])};break;case 26:this.$={id:s[o],descr:s[o],type:i.nodeType.DEFAULT};break;case 27:i.getLogger().trace("node found ..",s[o-3]),this.$={id:s[o-3],descr:s[o-1],type:i.getType(s[o-2],s[o])}}},table:[{3:1,4:2,5:3,6:[1,5],8:e},{1:[3]},{1:[2,1]},{4:6,6:[1,7],7:[1,8],8:e},{6:n,7:[1,10],9:9,12:11,13:i,14:14,15:r,16:s,17:17,18:18,19:a,22:o},t(c,[2,3]),{1:[2,2]},t(c,[2,4]),t(c,[2,5]),{1:[2,6],6:n,12:21,13:i,14:14,15:r,16:s,17:17,18:18,19:a,22:o},{6:n,9:22,12:11,13:i,14:14,15:r,16:s,17:17,18:18,19:a,22:o},{6:h,7:l,10:23,11:d},t(g,[2,22],{17:17,18:18,14:27,15:[1,28],16:[1,29],19:a,22:o}),t(g,[2,18]),t(g,[2,19]),t(g,[2,20]),t(g,[2,21]),t(g,[2,23]),t(g,[2,24]),t(g,[2,26],{19:[1,30]}),{20:[1,31]},{6:h,7:l,10:32,11:d},{1:[2,7],6:n,12:21,13:i,14:14,15:r,16:s,17:17,18:18,19:a,22:o},t(p,[2,14],{7:u,11:y}),t(f,[2,8]),t(f,[2,9]),t(f,[2,10]),t(g,[2,15]),t(g,[2,16]),t(g,[2,17]),{20:[1,35]},{21:[1,36]},t(p,[2,13],{7:u,11:y}),t(f,[2,11]),t(f,[2,12]),{21:[1,37]},t(g,[2,25]),t(g,[2,27])],defaultActions:{2:[2,1],6:[2,2]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[],r=[null],s=[],a=this.table,o="",c=0,h=0,l=1,d=s.slice.call(arguments,1),g=Object.create(this.lexer),p={yy:{}};for(var u in this.yy)Object.prototype.hasOwnProperty.call(this.yy,u)&&(p.yy[u]=this.yy[u]);g.setInput(t,p.yy),p.yy.lexer=g,p.yy.parser=this,void 0===g.yylloc&&(g.yylloc={});var y=g.yylloc;s.push(y);var f=g.options&&g.options.ranges;"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var m,$,_,b,E,x,k,L,N,S={};;){if($=n[n.length-1],this.defaultActions[$]?_=this.defaultActions[$]:(null==m&&(N=void 0,"number"!=typeof(N=i.pop()||g.lex()||l)&&(N instanceof Array&&(N=(i=N).pop()),N=e.symbols_[N]||N),m=N),_=a[$]&&a[$][m]),void 0===_||!_.length||!_[0]){var D="";for(E in L=[],a[$])this.terminals_[E]&&E>2&&L.push("'"+this.terminals_[E]+"'");D=g.showPosition?"Parse error on line "+(c+1)+":\n"+g.showPosition()+"\nExpecting "+L.join(", ")+", got '"+(this.terminals_[m]||m)+"'":"Parse error on line "+(c+1)+": Unexpected "+(m==l?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(D,{text:g.match,token:this.terminals_[m]||m,line:g.yylineno,loc:y,expected:L})}if(_[0]instanceof Array&&_.length>1)throw new Error("Parse Error: multiple actions possible at state: "+$+", token: "+m);switch(_[0]){case 1:n.push(m),r.push(g.yytext),s.push(g.yylloc),n.push(_[1]),m=null,h=g.yyleng,o=g.yytext,c=g.yylineno,y=g.yylloc;break;case 2:if(x=this.productions_[_[1]][1],S.$=r[r.length-x],S._$={first_line:s[s.length-(x||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(x||1)].first_column,last_column:s[s.length-1].last_column},f&&(S._$.range=[s[s.length-(x||1)].range[0],s[s.length-1].range[1]]),void 0!==(b=this.performAction.apply(S,[o,h,c,p.yy,_[1],r,s].concat(d))))return b;x&&(n=n.slice(0,-1*x*2),r=r.slice(0,-1*x),s=s.slice(0,-1*x)),n.push(this.productions_[_[1]][0]),r.push(S.$),s.push(S._$),k=a[n[n.length-2]][n[n.length-1]],n.push(k);break;case 3:return!0}}return!0}},$={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var s in r)this[s]=r[s];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),s=0;s<r.length;s++)if((n=this._input.match(this.rules[r[s]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,r[s])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:t.getLogger().trace("Found comment",e.yytext);break;case 1:return 8;case 2:this.begin("CLASS");break;case 3:return this.popState(),16;case 4:case 23:this.popState();break;case 5:t.getLogger().trace("Begin icon"),this.begin("ICON");break;case 6:return t.getLogger().trace("SPACELINE"),6;case 7:return 7;case 8:return 15;case 9:t.getLogger().trace("end icon"),this.popState();break;case 10:return t.getLogger().trace("Exploding node"),this.begin("NODE"),19;case 11:return t.getLogger().trace("Cloud"),this.begin("NODE"),19;case 12:return t.getLogger().trace("Explosion Bang"),this.begin("NODE"),19;case 13:return t.getLogger().trace("Cloud Bang"),this.begin("NODE"),19;case 14:case 15:case 16:case 17:return this.begin("NODE"),19;case 18:return 13;case 19:return 22;case 20:return 11;case 21:t.getLogger().trace("Starting NSTR"),this.begin("NSTR");break;case 22:return t.getLogger().trace("description:",e.yytext),"NODE_DESCR";case 24:return this.popState(),t.getLogger().trace("node end ))"),"NODE_DEND";case 25:return this.popState(),t.getLogger().trace("node end )"),"NODE_DEND";case 26:return this.popState(),t.getLogger().trace("node end ...",e.yytext),"NODE_DEND";case 27:case 30:case 31:return this.popState(),t.getLogger().trace("node end (("),"NODE_DEND";case 28:case 29:return this.popState(),t.getLogger().trace("node end (-"),"NODE_DEND";case 32:case 33:return t.getLogger().trace("Long description:",e.yytext),20}},rules:[/^(?:\s*%%.*)/i,/^(?:mindmap\b)/i,/^(?::::)/i,/^(?:.+)/i,/^(?:\n)/i,/^(?:::icon\()/i,/^(?:[\s]+[\n])/i,/^(?:[\n]+)/i,/^(?:[^\)]+)/i,/^(?:\))/i,/^(?:-\))/i,/^(?:\(-)/i,/^(?:\)\))/i,/^(?:\))/i,/^(?:\(\()/i,/^(?:\{\{)/i,/^(?:\()/i,/^(?:\[)/i,/^(?:[\s]+)/i,/^(?:[^\(\[\n\-\)\{\}]+)/i,/^(?:$)/i,/^(?:["])/i,/^(?:[^"]+)/i,/^(?:["])/i,/^(?:[\)]\))/i,/^(?:[\)])/i,/^(?:[\]])/i,/^(?:\}\})/i,/^(?:\(-)/i,/^(?:-\))/i,/^(?:\(\()/i,/^(?:\()/i,/^(?:[^\)\]\(\}]+)/i,/^(?:.+(?!\(\())/i],conditions:{CLASS:{rules:[3,4],inclusive:!1},ICON:{rules:[8,9],inclusive:!1},NSTR:{rules:[22,23],inclusive:!1},NODE:{rules:[21,24,25,26,27,28,29,30,31,32,33],inclusive:!1},INITIAL:{rules:[0,1,2,5,6,7,10,11,12,13,14,15,16,17,18,19,20],inclusive:!0}}};function _(){this.yy={}}return m.lexer=$,_.prototype=m,m.Parser=_,new _}());g.parser=g;const p=g,u=t=>(0,i.n)(t,(0,i.g)());let y=[],f=0,m={};const $={DEFAULT:0,NO_BORDER:0,ROUNDED_RECT:1,RECT:2,CIRCLE:3,CLOUD:4,BANG:5,HEXAGON:6},_=(t,e)=>{m[t]=e},b=t=>{switch(t){case $.DEFAULT:return"no-border";case $.RECT:return"rect";case $.ROUNDED_RECT:return"rounded-rect";case $.CIRCLE:return"circle";case $.CLOUD:return"cloud";case $.BANG:return"bang";case $.HEXAGON:return"hexgon";default:return"no-border"}};let E;const x=t=>m[t],k=Object.freeze(Object.defineProperty({__proto__:null,addNode:(t,e,n,r)=>{i.l.info("addNode",t,e,n,r);const s=(0,i.g)(),a={id:f++,nodeId:u(e),level:t,descr:u(n),type:r,children:[],width:(0,i.g)().mindmap.maxNodeWidth};switch(a.type){case $.ROUNDED_RECT:case $.RECT:case $.HEXAGON:a.padding=2*s.mindmap.padding;break;default:a.padding=s.mindmap.padding}const o=function(t){for(let e=y.length-1;e>=0;e--)if(y[e].level<t)return y[e];return null}(t);if(o)o.children.push(a),y.push(a);else{if(0!==y.length){let t=new Error('There can be only one root. No parent could be found for ("'+a.descr+'")');throw t.hash={text:"branch "+name,token:"branch "+name,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+name+'"']},t}y.push(a)}},clear:()=>{y=[],f=0,m={}},decorateNode:t=>{const e=y[y.length-1];t&&t.icon&&(e.icon=u(t.icon)),t&&t.class&&(e.class=u(t.class))},getElementById:x,getLogger:()=>i.l,getMindmap:()=>y.length>0?y[0]:null,getNodeById:t=>y[t],getType:(t,e)=>{switch(i.l.debug("In get type",t,e),t){case"[":return $.RECT;case"(":return")"===e?$.ROUNDED_RECT:$.CLOUD;case"((":return $.CIRCLE;case")":return $.CLOUD;case"))":return $.BANG;case"{{":return $.HEXAGON;default:return $.DEFAULT}},nodeType:$,get parseError(){return E},sanitizeText:u,setElementForId:_,setErrorHandler:t=>{E=t},type2Str:b},Symbol.toStringTag,{value:"Module"}));function L(t,e){t.each((function(){var t,n=(0,r.Ys)(this),i=n.text().split(/(\s+|<br>)/).reverse(),s=[],a=n.attr("y"),o=parseFloat(n.attr("dy")),c=n.text(null).append("tspan").attr("x",0).attr("y",a).attr("dy",o+"em");for(let r=0;r<i.length;r++)t=i[i.length-1-r],s.push(t),c.text(s.join(" ").trim()),(c.node().getComputedTextLength()>e||"<br>"===t)&&(s.pop(),c.text(s.join(" ").trim()),s="<br>"===t?[""]:[t],c=n.append("tspan").attr("x",0).attr("y",a).attr("dy","1.1em").text(t))}))}const N=function(t,e,n,i){const r=n%11,s=t.append("g");e.section=r;let a="section-"+r;r<0&&(a+=" section-root"),s.attr("class",(e.class?e.class+" ":"")+"mindmap-node "+a);const o=s.append("g"),c=s.append("g"),h=c.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(L,e.width).node().getBBox(),l=i.fontSize.replace?i.fontSize.replace("px",""):i.fontSize;if(e.height=h.height+1.1*l*.5+e.padding,e.width=h.width+2*e.padding,e.icon)if(e.type===$.CIRCLE){e.height+=50,e.width+=50;s.append("foreignObject").attr("height","50px").attr("width",e.width).attr("style","text-align: center;").append("div").attr("class","icon-container").append("i").attr("class","node-icon-"+r+" "+e.icon),c.attr("transform","translate("+e.width/2+", "+(e.height/2-1.5*e.padding)+")")}else{e.width+=50;const t=e.height;e.height=Math.max(t,60);const n=Math.abs(e.height-t);s.append("foreignObject").attr("width","60px").attr("height",e.height).attr("style","text-align: center;margin-top:"+n/2+"px;").append("div").attr("class","icon-container").append("i").attr("class","node-icon-"+r+" "+e.icon),c.attr("transform","translate("+(25+e.width/2)+", "+(n/2+e.padding/2)+")")}else c.attr("transform","translate("+e.width/2+", "+e.padding/2+")");switch(e.type){case $.DEFAULT:!function(t,e,n){t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+b(e.type)).attr("d",`M0 ${e.height-5} v${10-e.height} q0,-5 5,-5 h${e.width-10} q5,0 5,5 v${e.height-5} H0 Z`),t.append("line").attr("class","node-line-"+n).attr("x1",0).attr("y1",e.height).attr("x2",e.width).attr("y2",e.height)}(o,e,r);break;case $.ROUNDED_RECT:!function(t,e){t.append("rect").attr("id","node-"+e.id).attr("class","node-bkg node-"+b(e.type)).attr("height",e.height).attr("rx",e.padding).attr("ry",e.padding).attr("width",e.width)}(o,e);break;case $.RECT:!function(t,e){t.append("rect").attr("id","node-"+e.id).attr("class","node-bkg node-"+b(e.type)).attr("height",e.height).attr("width",e.width)}(o,e);break;case $.CIRCLE:o.attr("transform","translate("+e.width/2+", "+ +e.height/2+")"),function(t,e){t.append("circle").attr("id","node-"+e.id).attr("class","node-bkg node-"+b(e.type)).attr("r",e.width/2)}(o,e);break;case $.CLOUD:!function(t,e){const n=e.width,i=e.height,r=.15*n,s=.25*n,a=.35*n,o=.2*n;t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+b(e.type)).attr("d",`M0 0 a${r},${r} 0 0,1 ${.25*n},${-1*n*.1}\n      a${a},${a} 1 0,1 ${.4*n},${-1*n*.1}\n      a${s},${s} 1 0,1 ${.35*n},${1*n*.2}\n\n      a${r},${r} 1 0,1 ${.15*n},${1*i*.35}\n      a${o},${o} 1 0,1 ${-1*n*.15},${1*i*.65}\n\n      a${s},${r} 1 0,1 ${-1*n*.25},${.15*n}\n      a${a},${a} 1 0,1 ${-1*n*.5},0\n      a${r},${r} 1 0,1 ${-1*n*.25},${-1*n*.15}\n\n      a${r},${r} 1 0,1 ${-1*n*.1},${-1*i*.35}\n      a${o},${o} 1 0,1 ${.1*n},${-1*i*.65}\n\n    H0 V0 Z`)}(o,e);break;case $.BANG:!function(t,e){const n=e.width,i=e.height,r=.15*n;t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+b(e.type)).attr("d",`M0 0 a${r},${r} 1 0,0 ${.25*n},${-1*i*.1}\n      a${r},${r} 1 0,0 ${.25*n},0\n      a${r},${r} 1 0,0 ${.25*n},0\n      a${r},${r} 1 0,0 ${.25*n},${1*i*.1}\n\n      a${r},${r} 1 0,0 ${.15*n},${1*i*.33}\n      a${.8*r},${.8*r} 1 0,0 0,${1*i*.34}\n      a${r},${r} 1 0,0 ${-1*n*.15},${1*i*.33}\n\n      a${r},${r} 1 0,0 ${-1*n*.25},${.15*i}\n      a${r},${r} 1 0,0 ${-1*n*.25},0\n      a${r},${r} 1 0,0 ${-1*n*.25},0\n      a${r},${r} 1 0,0 ${-1*n*.25},${-1*i*.15}\n\n      a${r},${r} 1 0,0 ${-1*n*.1},${-1*i*.33}\n      a${.8*r},${.8*r} 1 0,0 0,${-1*i*.34}\n      a${r},${r} 1 0,0 ${.1*n},${-1*i*.33}\n\n    H0 V0 Z`)}(o,e);break;case $.HEXAGON:!function(t,e){const n=e.height,i=n/4,r=e.width-e.padding+2*i;!function(t,e,n,i,r){t.insert("polygon",":first-child").attr("points",i.map((function(t){return t.x+","+t.y})).join(" ")).attr("transform","translate("+(r.width-e)/2+", "+n+")")}(t,r,n,[{x:i,y:0},{x:r-i,y:0},{x:r,y:-n/2},{x:r-i,y:-n},{x:i,y:-n},{x:0,y:-n/2}],e)}(o,e)}return _(e.id,s),e.height},S=function(t){const e=x(t.id),n=t.x||0,i=t.y||0;e.attr("transform","translate("+n+","+i+")")};function D(t,e,n,i){N(t,e,n,i),e.children&&e.children.forEach(((e,r)=>{D(t,e,n<0?r:n,i)}))}function w(t,e,n,i){e.add({group:"nodes",data:{id:t.id,labelText:t.descr,height:t.height,width:t.width,level:i,nodeId:t.id,padding:t.padding,type:t.type},position:{x:t.x,y:t.y}}),t.children&&t.children.forEach((r=>{w(r,e,n,i+1),e.add({group:"edges",data:{id:`${t.id}_${r.id}`,source:t.id,target:r.id,depth:i,section:r.section}})}))}function O(t,e){return new Promise((n=>{const s=(0,r.Ys)("body").append("div").attr("id","cy").attr("style","display:none"),o=a()({container:document.getElementById("cy"),style:[{selector:"edge",style:{"curve-style":"bezier"}}]});s.remove(),w(t,o,e,0),o.nodes().forEach((function(t){t.layoutDimensions=()=>{const e=t.data();return{w:e.width,h:e.height}}})),o.layout({name:"cose-bilkent",quality:"proof",styleEnabled:!1,animate:!1}).run(),o.ready((t=>{i.l.info("Ready",t),n(o)}))}))}a().use(c());const C={db:k,renderer:{draw:async(t,e,n,s)=>{const a=(0,i.g)();s.db.clear(),s.parser.parse(t),i.l.debug("Renering info diagram\n"+t);const o=(0,i.g)().securityLevel;let c;"sandbox"===o&&(c=(0,r.Ys)("#i"+e));const h=("sandbox"===o?(0,r.Ys)(c.nodes()[0].contentDocument.body):(0,r.Ys)("body")).select("#"+e);h.append("g");const l=s.db.getMindmap(),d=h.append("g");d.attr("class","mindmap-edges");const g=h.append("g");g.attr("class","mindmap-nodes"),D(g,l,-1,a);const p=await O(l,a);!function(t,e){e.edges().map(((e,n)=>{const r=e.data();if(e[0]._private.bodyBounds){const s=e[0]._private.rscratch;i.l.trace("Edge: ",n,r),t.insert("path").attr("d",`M ${s.startX},${s.startY} L ${s.midX},${s.midY} L${s.endX},${s.endY} `).attr("class","edge section-edge-"+r.section+" edge-depth-"+r.depth)}}))}(d,p),function(t){t.nodes().map(((t,e)=>{const n=t.data();n.x=t.position().x,n.y=t.position().y,S(n);const r=x(n.nodeId);i.l.info("Id:",e,"Position: (",t.position().x,", ",t.position().y,")",n),r.attr("transform",`translate(${t.position().x-n.width/2}, ${t.position().y-n.height/2})`),r.attr("attr",`apa-${e})`)}))}(p),(0,i.s)(void 0,h,a.mindmap.padding,a.mindmap.useMaxWidth)}},parser:p,styles:t=>`\n  .edge {\n    stroke-width: 3;\n  }\n  ${(t=>{let e="";for(let n=0;n<t.THEME_COLOR_LIMIT;n++)t["lineColor"+n]=t["lineColor"+n]||t["cScaleInv"+n],(0,h.Z)(t["lineColor"+n])?t["lineColor"+n]=(0,l.Z)(t["lineColor"+n],20):t["lineColor"+n]=(0,d.Z)(t["lineColor"+n],20);for(let n=0;n<t.THEME_COLOR_LIMIT;n++){const i=""+(17-3*n);e+=`\n    .section-${n-1} rect, .section-${n-1} path, .section-${n-1} circle, .section-${n-1} polygon, .section-${n-1} path  {\n      fill: ${t["cScale"+n]};\n    }\n    .section-${n-1} text {\n     fill: ${t["cScaleLabel"+n]};\n    }\n    .node-icon-${n-1} {\n      font-size: 40px;\n      color: ${t["cScaleLabel"+n]};\n    }\n    .section-edge-${n-1}{\n      stroke: ${t["cScale"+n]};\n    }\n    .edge-depth-${n-1}{\n      stroke-width: ${i};\n    }\n    .section-${n-1} line {\n      stroke: ${t["cScaleInv"+n]} ;\n      stroke-width: 3;\n    }\n\n    .disabled, .disabled circle, .disabled text {\n      fill: lightgray;\n    }\n    .disabled text {\n      fill: #efefef;\n    }\n    `}return e})(t)}\n  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {\n    fill: ${t.git0};\n  }\n  .section-root text {\n    fill: ${t.gitBranchLabel0};\n  }\n  .icon-container {\n    height:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .edge {\n    fill: none;\n  }\n`}},36236:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(10557),r=n(63658);const s=t=>{const{r:e,g:n,b:s}=r.Z.parse(t),a=.2126*i.Z.channel.toLinear(e)+.7152*i.Z.channel.toLinear(n)+.0722*i.Z.channel.toLinear(s);return i.Z.lang.round(a)},a=t=>s(t)>=.5,o=t=>!a(t)}}]);