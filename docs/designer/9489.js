"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9489],{39489:(e,t,i)=>{i.r(t),i.d(t,{Adapter:()=>C,CodeActionAdaptor:()=>B,DefinitionAdapter:()=>L,DiagnosticsAdapter:()=>F,DocumentHighlightAdapter:()=>T,FormatAdapter:()=>V,FormatHelper:()=>j,FormatOnTypeAdapter:()=>W,InlayHintsAdapter:()=>$,Kind:()=>K,LibFiles:()=>D,OutlineAdapter:()=>M,QuickInfoAdapter:()=>O,ReferenceAdapter:()=>N,RenameAdapter:()=>U,SignatureHelpAdapter:()=>P,SuggestAdapter:()=>A,WorkerManager:()=>v,flattenDiagnosticMessageText:()=>x,getJavaScriptWorker:()=>J,getTypeScriptWorker:()=>Q,setupJavaScript:()=>G,setupTypeScript:()=>z});var s=i(49100),r=i(70449),n=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,g=(e,t,i)=>(c(e,"symbol"!=typeof t?t+"":t,i),i),p=(e,t,i)=>new Promise(((s,r)=>{var n=e=>{try{a(i.next(e))}catch(e){r(e)}},o=e=>{try{a(i.throw(e))}catch(e){r(e)}},a=e=>e.done?s(e.value):Promise.resolve(e.value).then(n,o);a((i=i.apply(e,t)).next())})),m=Object.defineProperty,h=Object.getOwnPropertyDescriptor,b=Object.getOwnPropertyNames,f=Object.prototype.hasOwnProperty,y=(e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of b(t))f.call(e,r)||r===i||m(e,r,{get:()=>t[r],enumerable:!(s=h(t,r))||s.enumerable});return e},_=(e,t,i)=>(((e,t,i)=>{t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),S={};y(S,s,"default");var v=class{constructor(e,t){g(this,"_configChangeListener"),g(this,"_updateExtraLibsToken"),g(this,"_extraLibsChangeListener"),g(this,"_worker"),g(this,"_client"),this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}_updateExtraLibs(){return p(this,null,(function*(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=yield this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}))}_getClient(){return this._client||(this._client=(()=>p(this,null,(function*(){return this._worker=S.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?yield this._worker.withSyncedResources(S.editor.getModels().filter((e=>e.getLanguageId()===this._modeId)).map((e=>e.uri))):yield this._worker.getProxy()})))()),this._client}getLanguageServiceWorker(...e){return p(this,null,(function*(){const t=yield this._getClient();return this._worker&&(yield this._worker.withSyncedResources(e)),t}))}},k={};function x(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let s="";if(i){s+=t;for(let e=0;e<i;e++)s+="  "}if(s+=e.messageText,i++,e.next)for(const r of e.next)s+=x(r,t,i);return s}function w(e){return e?e.map((e=>e.text)).join(""):""}k["lib.d.ts"]=!0,k["lib.decorators.d.ts"]=!0,k["lib.decorators.legacy.d.ts"]=!0,k["lib.dom.d.ts"]=!0,k["lib.dom.iterable.d.ts"]=!0,k["lib.es2015.collection.d.ts"]=!0,k["lib.es2015.core.d.ts"]=!0,k["lib.es2015.d.ts"]=!0,k["lib.es2015.generator.d.ts"]=!0,k["lib.es2015.iterable.d.ts"]=!0,k["lib.es2015.promise.d.ts"]=!0,k["lib.es2015.proxy.d.ts"]=!0,k["lib.es2015.reflect.d.ts"]=!0,k["lib.es2015.symbol.d.ts"]=!0,k["lib.es2015.symbol.wellknown.d.ts"]=!0,k["lib.es2016.array.include.d.ts"]=!0,k["lib.es2016.d.ts"]=!0,k["lib.es2016.full.d.ts"]=!0,k["lib.es2017.d.ts"]=!0,k["lib.es2017.full.d.ts"]=!0,k["lib.es2017.intl.d.ts"]=!0,k["lib.es2017.object.d.ts"]=!0,k["lib.es2017.sharedmemory.d.ts"]=!0,k["lib.es2017.string.d.ts"]=!0,k["lib.es2017.typedarrays.d.ts"]=!0,k["lib.es2018.asyncgenerator.d.ts"]=!0,k["lib.es2018.asynciterable.d.ts"]=!0,k["lib.es2018.d.ts"]=!0,k["lib.es2018.full.d.ts"]=!0,k["lib.es2018.intl.d.ts"]=!0,k["lib.es2018.promise.d.ts"]=!0,k["lib.es2018.regexp.d.ts"]=!0,k["lib.es2019.array.d.ts"]=!0,k["lib.es2019.d.ts"]=!0,k["lib.es2019.full.d.ts"]=!0,k["lib.es2019.intl.d.ts"]=!0,k["lib.es2019.object.d.ts"]=!0,k["lib.es2019.string.d.ts"]=!0,k["lib.es2019.symbol.d.ts"]=!0,k["lib.es2020.bigint.d.ts"]=!0,k["lib.es2020.d.ts"]=!0,k["lib.es2020.date.d.ts"]=!0,k["lib.es2020.full.d.ts"]=!0,k["lib.es2020.intl.d.ts"]=!0,k["lib.es2020.number.d.ts"]=!0,k["lib.es2020.promise.d.ts"]=!0,k["lib.es2020.sharedmemory.d.ts"]=!0,k["lib.es2020.string.d.ts"]=!0,k["lib.es2020.symbol.wellknown.d.ts"]=!0,k["lib.es2021.d.ts"]=!0,k["lib.es2021.full.d.ts"]=!0,k["lib.es2021.intl.d.ts"]=!0,k["lib.es2021.promise.d.ts"]=!0,k["lib.es2021.string.d.ts"]=!0,k["lib.es2021.weakref.d.ts"]=!0,k["lib.es2022.array.d.ts"]=!0,k["lib.es2022.d.ts"]=!0,k["lib.es2022.error.d.ts"]=!0,k["lib.es2022.full.d.ts"]=!0,k["lib.es2022.intl.d.ts"]=!0,k["lib.es2022.object.d.ts"]=!0,k["lib.es2022.regexp.d.ts"]=!0,k["lib.es2022.sharedmemory.d.ts"]=!0,k["lib.es2022.string.d.ts"]=!0,k["lib.es2023.array.d.ts"]=!0,k["lib.es2023.d.ts"]=!0,k["lib.es2023.full.d.ts"]=!0,k["lib.es5.d.ts"]=!0,k["lib.es6.d.ts"]=!0,k["lib.esnext.d.ts"]=!0,k["lib.esnext.full.d.ts"]=!0,k["lib.esnext.intl.d.ts"]=!0,k["lib.scripthost.d.ts"]=!0,k["lib.webworker.d.ts"]=!0,k["lib.webworker.importscripts.d.ts"]=!0,k["lib.webworker.iterable.d.ts"]=!0;var C=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:r,column:n}=i,{lineNumber:o,column:a}=s;return{startLineNumber:r,startColumn:n,endLineNumber:o,endColumn:a}}},D=class{constructor(e){g(this,"_libFiles"),g(this,"_hasFetchedLibFiles"),g(this,"_fetchLibFilesPromise"),this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return!!e&&0===e.path.indexOf("/lib.")&&!!k[e.path.slice(1)]}getOrCreateModel(e){const t=S.Uri.parse(e),i=S.editor.getModel(t);if(i)return i;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return S.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const s=r.TG.getExtraLibs()[e];return s?S.editor.createModel(s.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}fetchLibFilesIfNecessary(e){return p(this,null,(function*(){this._containsLibFile(e)&&(yield this._fetchLibFiles())}))}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((e=>e.getLibFiles())).then((e=>{this._hasFetchedLibFiles=!0,this._libFiles=e}))),this._fetchLibFilesPromise}},F=class extends C{constructor(e,t,i,s){super(s),g(this,"_disposables",[]),g(this,"_listener",Object.create(null)),this._libFiles=e,this._defaults=t,this._selector=i;const r=e=>{if(e.getLanguageId()!==i)return;const t=()=>{const{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)};let s;const r=e.onDidChangeContent((()=>{clearTimeout(s),s=window.setTimeout(t,500)})),n=e.onDidChangeAttached((()=>{const{onlyVisible:i}=this._defaults.getDiagnosticsOptions();i&&(e.isAttachedToEditor()?t():S.editor.setModelMarkers(e,this._selector,[]))}));this._listener[e.uri.toString()]={dispose(){r.dispose(),n.dispose(),clearTimeout(s)}},t()},n=e=>{S.editor.setModelMarkers(e,this._selector,[]);const t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(S.editor.onDidCreateModel((e=>r(e)))),this._disposables.push(S.editor.onWillDisposeModel(n)),this._disposables.push(S.editor.onDidChangeModelLanguage((e=>{n(e.model),r(e.model)}))),this._disposables.push({dispose(){for(const e of S.editor.getModels())n(e)}});const o=()=>{for(const e of S.editor.getModels())n(e),r(e)};this._disposables.push(this._defaults.onDidChange(o)),this._disposables.push(this._defaults.onDidExtraLibsChange(o)),S.editor.getModels().forEach((e=>r(e)))}dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables=[]}_doValidate(e){return p(this,null,(function*(){const t=yield this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:s,noSemanticValidation:r,noSuggestionDiagnostics:n}=this._defaults.getDiagnosticsOptions();s||i.push(t.getSyntacticDiagnostics(e.uri.toString())),r||i.push(t.getSemanticDiagnostics(e.uri.toString())),n||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const o=yield Promise.all(i);if(!o||e.isDisposed())return;const a=o.reduce(((e,t)=>t.concat(e)),[]).filter((e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code))),l=a.map((e=>e.relatedInformation||[])).reduce(((e,t)=>t.concat(e)),[]).map((e=>e.file?S.Uri.parse(e.file.fileName):null));yield this._libFiles.fetchLibFilesIfNecessary(l),e.isDisposed()||S.editor.setModelMarkers(e,this._selector,a.map((t=>this._convertDiagnostics(e,t))))}))}_convertDiagnostics(e,t){const i=t.start||0,s=t.length||1,{lineNumber:r,column:n}=e.getPositionAt(i),{lineNumber:o,column:a}=e.getPositionAt(i+s),l=[];return t.reportsUnnecessary&&l.push(S.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(S.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:r,startColumn:n,endLineNumber:o,endColumn:a,message:x(t.messageText,"\n"),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach((t=>{let s=e;if(t.file&&(s=this._libFiles.getOrCreateModel(t.file.fileName)),!s)return;const r=t.start||0,n=t.length||1,{lineNumber:o,column:a}=s.getPositionAt(r),{lineNumber:l,column:d}=s.getPositionAt(r+n);i.push({resource:s.uri,startLineNumber:o,startColumn:a,endLineNumber:l,endColumn:d,message:x(t.messageText,"\n")})})),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return S.MarkerSeverity.Error;case 3:return S.MarkerSeverity.Info;case 0:return S.MarkerSeverity.Warning;case 2:return S.MarkerSeverity.Hint}return S.MarkerSeverity.Info}},A=class extends C{get triggerCharacters(){return["."]}provideCompletionItems(e,t,i,s){return p(this,null,(function*(){const i=e.getWordUntilPosition(t),s=new S.Range(t.lineNumber,i.startColumn,t.lineNumber,i.endColumn),r=e.uri,n=e.getOffsetAt(t),o=yield this._worker(r);if(e.isDisposed())return;const a=yield o.getCompletionsAtPosition(r.toString(),n);return a&&!e.isDisposed()?{suggestions:a.entries.map((i=>{let o=s;if(i.replacementSpan){const t=e.getPositionAt(i.replacementSpan.start),s=e.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);o=new S.Range(t.lineNumber,t.column,s.lineNumber,s.column)}const a=[];return void 0!==i.kindModifiers&&-1!==i.kindModifiers.indexOf("deprecated")&&a.push(S.languages.CompletionItemTag.Deprecated),{uri:r,position:t,offset:n,range:o,label:i.name,insertText:i.name,sortText:i.sortText,kind:A.convertKind(i.kind),tags:a}}))}:void 0}))}resolveCompletionItem(e,t){return p(this,null,(function*(){const t=e,i=t.uri,s=t.position,r=t.offset,n=yield this._worker(i),o=yield n.getCompletionEntryDetails(i.toString(),r,t.label);return o?{uri:i,position:s,label:o.name,kind:A.convertKind(o.kind),detail:w(o.displayParts),documentation:{value:A.createDocumentationString(o)}}:t}))}static convertKind(e){switch(e){case K.primitiveType:case K.keyword:return S.languages.CompletionItemKind.Keyword;case K.variable:case K.localVariable:return S.languages.CompletionItemKind.Variable;case K.memberVariable:case K.memberGetAccessor:case K.memberSetAccessor:return S.languages.CompletionItemKind.Field;case K.function:case K.memberFunction:case K.constructSignature:case K.callSignature:case K.indexSignature:return S.languages.CompletionItemKind.Function;case K.enum:return S.languages.CompletionItemKind.Enum;case K.module:return S.languages.CompletionItemKind.Module;case K.class:return S.languages.CompletionItemKind.Class;case K.interface:return S.languages.CompletionItemKind.Interface;case K.warning:return S.languages.CompletionItemKind.File}return S.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=w(e.documentation);if(e.tags)for(const i of e.tags)t+=`\n\n${I(i)}`;return t}};function I(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` — ${s.map((e=>e.text)).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map((e=>e.text)).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var P=class extends C{constructor(){super(...arguments),g(this,"signatureHelpTriggerCharacters",["(",","])}static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case S.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case S.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case S.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}provideSignatureHelp(e,t,i,s){return p(this,null,(function*(){const i=e.uri,r=e.getOffsetAt(t),n=yield this._worker(i);if(e.isDisposed())return;const o=yield n.getSignatureHelpItems(i.toString(),r,{triggerReason:P._toSignatureHelpTriggerReason(s)});if(!o||e.isDisposed())return;const a={activeSignature:o.selectedItemIndex,activeParameter:o.argumentIndex,signatures:[]};return o.items.forEach((e=>{const t={label:"",parameters:[]};t.documentation={value:w(e.documentation)},t.label+=w(e.prefixDisplayParts),e.parameters.forEach(((i,s,r)=>{const n=w(i.displayParts),o={label:n,documentation:{value:w(i.documentation)}};t.label+=n,t.parameters.push(o),s<r.length-1&&(t.label+=w(e.separatorDisplayParts))})),t.label+=w(e.suffixDisplayParts),a.signatures.push(t)})),{value:a,dispose(){}}}))}},O=class extends C{provideHover(e,t,i){return p(this,null,(function*(){const i=e.uri,s=e.getOffsetAt(t),r=yield this._worker(i);if(e.isDisposed())return;const n=yield r.getQuickInfoAtPosition(i.toString(),s);if(!n||e.isDisposed())return;const o=w(n.documentation),a=n.tags?n.tags.map((e=>I(e))).join("  \n\n"):"",l=w(n.displayParts);return{range:this._textSpanToRange(e,n.textSpan),contents:[{value:"```typescript\n"+l+"\n```\n"},{value:o+(a?"\n\n"+a:"")}]}}))}},T=class extends C{provideDocumentHighlights(e,t,i){return p(this,null,(function*(){const i=e.uri,s=e.getOffsetAt(t),r=yield this._worker(i);if(e.isDisposed())return;const n=yield r.getDocumentHighlights(i.toString(),s,[i.toString()]);return n&&!e.isDisposed()?n.flatMap((t=>t.highlightSpans.map((t=>({range:this._textSpanToRange(e,t.textSpan),kind:"writtenReference"===t.kind?S.languages.DocumentHighlightKind.Write:S.languages.DocumentHighlightKind.Text}))))):void 0}))}},L=class extends C{constructor(e,t){super(t),this._libFiles=e}provideDefinition(e,t,i){return p(this,null,(function*(){const i=e.uri,s=e.getOffsetAt(t),r=yield this._worker(i);if(e.isDisposed())return;const n=yield r.getDefinitionAtPosition(i.toString(),s);if(!n||e.isDisposed())return;if(yield this._libFiles.fetchLibFilesIfNecessary(n.map((e=>S.Uri.parse(e.fileName)))),e.isDisposed())return;const o=[];for(let e of n){const t=this._libFiles.getOrCreateModel(e.fileName);t&&o.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return o}))}},N=class extends C{constructor(e,t){super(t),this._libFiles=e}provideReferences(e,t,i,s){return p(this,null,(function*(){const i=e.uri,s=e.getOffsetAt(t),r=yield this._worker(i);if(e.isDisposed())return;const n=yield r.getReferencesAtPosition(i.toString(),s);if(!n||e.isDisposed())return;if(yield this._libFiles.fetchLibFilesIfNecessary(n.map((e=>S.Uri.parse(e.fileName)))),e.isDisposed())return;const o=[];for(let e of n){const t=this._libFiles.getOrCreateModel(e.fileName);t&&o.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return o}))}},M=class extends C{provideDocumentSymbols(e,t){return p(this,null,(function*(){const t=e.uri,i=yield this._worker(t);if(e.isDisposed())return;const s=yield i.getNavigationTree(t.toString());if(!s||e.isDisposed())return;const r=(t,i)=>{var s;return{name:t.text,detail:"",kind:R[t.kind]||S.languages.SymbolKind.Variable,range:this._textSpanToRange(e,t.spans[0]),selectionRange:this._textSpanToRange(e,t.spans[0]),tags:[],children:null==(s=t.childItems)?void 0:s.map((e=>r(e,t.text))),containerName:i}};return s.childItems?s.childItems.map((e=>r(e))):[]}))}},K=class{};_(K,"unknown",""),_(K,"keyword","keyword"),_(K,"script","script"),_(K,"module","module"),_(K,"class","class"),_(K,"interface","interface"),_(K,"type","type"),_(K,"enum","enum"),_(K,"variable","var"),_(K,"localVariable","local var"),_(K,"function","function"),_(K,"localFunction","local function"),_(K,"memberFunction","method"),_(K,"memberGetAccessor","getter"),_(K,"memberSetAccessor","setter"),_(K,"memberVariable","property"),_(K,"constructorImplementation","constructor"),_(K,"callSignature","call"),_(K,"indexSignature","index"),_(K,"constructSignature","construct"),_(K,"parameter","parameter"),_(K,"typeParameter","type parameter"),_(K,"primitiveType","primitive type"),_(K,"label","label"),_(K,"alias","alias"),_(K,"const","const"),_(K,"let","let"),_(K,"warning","warning");var R=Object.create(null);R[K.module]=S.languages.SymbolKind.Module,R[K.class]=S.languages.SymbolKind.Class,R[K.enum]=S.languages.SymbolKind.Enum,R[K.interface]=S.languages.SymbolKind.Interface,R[K.memberFunction]=S.languages.SymbolKind.Method,R[K.memberVariable]=S.languages.SymbolKind.Property,R[K.memberGetAccessor]=S.languages.SymbolKind.Property,R[K.memberSetAccessor]=S.languages.SymbolKind.Property,R[K.variable]=S.languages.SymbolKind.Variable,R[K.const]=S.languages.SymbolKind.Variable,R[K.localVariable]=S.languages.SymbolKind.Variable,R[K.variable]=S.languages.SymbolKind.Variable,R[K.function]=S.languages.SymbolKind.Function,R[K.localFunction]=S.languages.SymbolKind.Function;var E,H,j=class extends C{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},V=class extends j{constructor(){super(...arguments),g(this,"canFormatMultipleRanges",!1)}provideDocumentRangeFormattingEdits(e,t,i,s){return p(this,null,(function*(){const s=e.uri,r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),n=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=yield this._worker(s);if(e.isDisposed())return;const a=yield o.getFormattingEditsForRange(s.toString(),r,n,j._convertOptions(i));return a&&!e.isDisposed()?a.map((t=>this._convertTextChanges(e,t))):void 0}))}},W=class extends j{get autoFormatTriggerCharacters(){return[";","}","\n"]}provideOnTypeFormattingEdits(e,t,i,s,r){return p(this,null,(function*(){const r=e.uri,n=e.getOffsetAt(t),o=yield this._worker(r);if(e.isDisposed())return;const a=yield o.getFormattingEditsAfterKeystroke(r.toString(),n,i,j._convertOptions(s));return a&&!e.isDisposed()?a.map((t=>this._convertTextChanges(e,t))):void 0}))}},B=class extends j{provideCodeActions(e,t,i,s){return p(this,null,(function*(){const s=e.uri,r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),n=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=j._convertOptions(e.getOptions()),a=i.markers.filter((e=>e.code)).map((e=>e.code)).map(Number),l=yield this._worker(s);if(e.isDisposed())return;const d=yield l.getCodeFixesAtPosition(s.toString(),r,n,a,o);return!d||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:d.filter((e=>0===e.changes.filter((e=>e.isNewFile)).length)).map((t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t))),dispose:()=>{}}}))}_tsCodeFixActionToMonacoCodeAction(e,t,i){const s=[];for(const t of i.changes)for(const i of t.textChanges)s.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,i.span),text:i.newText}});return{title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},U=class extends C{constructor(e,t){super(t),this._libFiles=e}provideRenameEdits(e,t,i,s){return p(this,null,(function*(){const s=e.uri,r=s.toString(),n=e.getOffsetAt(t),o=yield this._worker(s);if(e.isDisposed())return;const a=yield o.getRenameInfo(r,n,{allowRenameOfImportPath:!1});if(!1===a.canRename)return{edits:[],rejectReason:a.localizedErrorMessage};if(void 0!==a.fileToRename)throw new Error("Renaming files is not supported.");const l=yield o.findRenameLocations(r,n,!1,!1,!1);if(!l||e.isDisposed())return;const d=[];for(const e of l){const t=this._libFiles.getOrCreateModel(e.fileName);if(!t)throw new Error(`Unknown file ${e.fileName}.`);d.push({resource:t.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(t,e.textSpan),text:i}})}return{edits:d}}))}},$=class extends C{provideInlayHints(e,t,i){return p(this,null,(function*(){const i=e.uri,s=i.toString(),r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),n=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),g=yield this._worker(i);return e.isDisposed()?null:{hints:(yield g.provideInlayHints(s,r,n)).map((t=>{return i=((e,t)=>{for(var i in t||(t={}))d.call(t,i)&&c(e,i,t[i]);if(l)for(var i of l(t))u.call(t,i)&&c(e,i,t[i]);return e})({},t),s={label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)},o(i,a(s));var i,s})),dispose:()=>{}}}))}_convertHintKind(e){return"Parameter"===e?S.languages.InlayHintKind.Parameter:S.languages.InlayHintKind.Type}};function z(e){H=q(e,"typescript")}function G(e){E=q(e,"javascript")}function J(){return new Promise(((e,t)=>{if(!E)return t("JavaScript not registered!");e(E)}))}function Q(){return new Promise(((e,t)=>{if(!H)return t("TypeScript not registered!");e(H)}))}function q(e,t){const i=[],s=[],r=new v(t,e);i.push(r);const n=(...e)=>r.getLanguageServiceWorker(...e),o=new D(n);return function(){const{modeConfiguration:i}=e;X(s),i.completionItems&&s.push(S.languages.registerCompletionItemProvider(t,new A(n))),i.signatureHelp&&s.push(S.languages.registerSignatureHelpProvider(t,new P(n))),i.hovers&&s.push(S.languages.registerHoverProvider(t,new O(n))),i.documentHighlights&&s.push(S.languages.registerDocumentHighlightProvider(t,new T(n))),i.definitions&&s.push(S.languages.registerDefinitionProvider(t,new L(o,n))),i.references&&s.push(S.languages.registerReferenceProvider(t,new N(o,n))),i.documentSymbols&&s.push(S.languages.registerDocumentSymbolProvider(t,new M(n))),i.rename&&s.push(S.languages.registerRenameProvider(t,new U(o,n))),i.documentRangeFormattingEdits&&s.push(S.languages.registerDocumentRangeFormattingEditProvider(t,new V(n))),i.onTypeFormattingEdits&&s.push(S.languages.registerOnTypeFormattingEditProvider(t,new W(n))),i.codeActions&&s.push(S.languages.registerCodeActionProvider(t,new B(n))),i.inlayHints&&s.push(S.languages.registerInlayHintsProvider(t,new $(n))),i.diagnostics&&s.push(new F(o,e,t,n))}(),i.push(function(e){return{dispose:()=>X(e)}}(s)),n}function X(e){for(;e.length;)e.pop().dispose()}}}]);