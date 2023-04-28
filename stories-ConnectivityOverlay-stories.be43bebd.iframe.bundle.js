/*! For license information please see stories-ConnectivityOverlay-stories.be43bebd.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkacorn_ui=self.webpackChunkacorn_ui||[]).push([[4077],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})},"./src/stories/ConnectivityOverlay.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ConnectivityOverlay:()=>ConnectivityOverlay_stories_ConnectivityOverlay,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ConnectivityOverlay_stories});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/variables.scss");var Button=__webpack_require__("./src/components/Button/Button.tsx"),Modal=__webpack_require__("./src/components/Modal/Modal.tsx"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),jsx_runtime=(__webpack_require__("./src/components/ConnectivityOverlay/ConnectivityOverlay.scss"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const ConnectivityOverlay_ConnectivityOverlay=({heading,content,buttonText,onClick})=>(0,jsx_runtime.jsx)("div",{className:"connectivity-overlay-wrapper",children:(0,jsx_runtime.jsxs)(Modal.Z,{active:!0,children:[(0,jsx_runtime.jsx)("div",{className:"connectivity-modal-heading",children:(0,jsx_runtime.jsx)(Typography.Z,{style:"heading-modal",children:heading})}),(0,jsx_runtime.jsx)("div",{className:"connectivity-modal-content",children:(0,jsx_runtime.jsx)("div",{className:"connectivity-modal-content-text",children:(0,jsx_runtime.jsx)(Typography.Z,{style:"body-modal",children:content})})}),(0,jsx_runtime.jsx)("div",{className:"connectivity-modal-buttons-wrapper",children:(0,jsx_runtime.jsx)("div",{className:"connectivity-modal-button-primary",children:(0,jsx_runtime.jsx)(Button.Z,{icon:"refresh.svg",text:buttonText,onClick})})})]})});ConnectivityOverlay_ConnectivityOverlay.displayName="ConnectivityOverlay";const components_ConnectivityOverlay_ConnectivityOverlay=ConnectivityOverlay_ConnectivityOverlay;try{ConnectivityOverlay_ConnectivityOverlay.displayName="ConnectivityOverlay",ConnectivityOverlay_ConnectivityOverlay.__docgenInfo={description:"",displayName:"ConnectivityOverlay",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ConnectivityOverlay/ConnectivityOverlay.tsx#ConnectivityOverlay"]={docgenInfo:ConnectivityOverlay_ConnectivityOverlay.__docgenInfo,name:"ConnectivityOverlay",path:"src/components/ConnectivityOverlay/ConnectivityOverlay.tsx#ConnectivityOverlay"})}catch(__react_docgen_typescript_loader_error){}const ConnectivityOverlay_stories={title:"System/ConnectivityOverlay",component:components_ConnectivityOverlay_ConnectivityOverlay},Template=args=>(0,jsx_runtime.jsx)(components_ConnectivityOverlay_ConnectivityOverlay,{...args});Template.displayName="Template";const ConnectivityOverlay_stories_ConnectivityOverlay=Template.bind({});ConnectivityOverlay_stories_ConnectivityOverlay.storyName="ConnectivityOverlay";const args={heading:"Reconnect Acorn",content:"Acorn lost its connection to the local database due to inactivity. Refresh to reconnect and continue working with Acorn.",buttonText:"Restart Acorn",onClick:function(){throw new Error("Function not implemented.")}};ConnectivityOverlay_stories_ConnectivityOverlay.args=args,ConnectivityOverlay_stories_ConnectivityOverlay.parameters={...ConnectivityOverlay_stories_ConnectivityOverlay.parameters,docs:{...ConnectivityOverlay_stories_ConnectivityOverlay.parameters?.docs,source:{originalSource:"args => {\n  return <ConnectivityOverlayComponent {...args} />;\n}",...ConnectivityOverlay_stories_ConnectivityOverlay.parameters?.docs?.source}}};const __namedExportsOrder=["ConnectivityOverlay"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ConnectivityOverlay/ConnectivityOverlay.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".connectivity-overlay-wrapper .modal-wrapper{width:29rem;padding:3.5rem 3.5rem 3rem 3.5rem}.connectivity-overlay-wrapper .connectivity-modal-heading{margin-bottom:1.5rem}.connectivity-overlay-wrapper .connectivity-modal-button-primary{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:1.5rem}",""]),module.exports=exports},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(useSourceMap){var list=[];return list.toString=function toString(){return this.map((function(item){var content=function cssWithMappingToString(item,useSourceMap){var content=item[1]||"",cssMapping=item[3];if(!cssMapping)return content;if(useSourceMap&&"function"==typeof btoa){var sourceMapping=function toComment(sourceMap){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);return"/*# ".concat(data," */")}(cssMapping),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}return[content].join("\n")}(item,useSourceMap);return item[2]?"@media ".concat(item[2]," {").concat(content,"}"):content})).join("")},list.i=function(modules,mediaQuery,dedupe){"string"==typeof modules&&(modules=[[null,modules,""]]);var alreadyImportedModules={};if(dedupe)for(var i=0;i<this.length;i++){var id=this[i][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _i=0;_i<modules.length;_i++){var item=[].concat(modules[_i]);dedupe&&alreadyImportedModules[item[0]]||(mediaQuery&&(item[2]?item[2]="".concat(mediaQuery," and ").concat(item[2]):item[2]=mediaQuery),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/getUrl.js":module=>{"use strict";module.exports=function(url,options){return options||(options={}),"string"!=typeof(url=url&&url.__esModule?url.default:url)?url:(/^['"].*['"]$/.test(url)&&(url=url.slice(1,-1)),options.hash&&(url+=options.hash),/["'() \t\n]/.test(url)||options.needQuotes?'"'.concat(url.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):url)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/ConnectivityOverlay/ConnectivityOverlay.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ConnectivityOverlay/ConnectivityOverlay.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isOldIE=function isOldIE(){var memo;return function memorize(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo}}(),getTarget=function getTarget(){var memo={};return function memorize(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var replaceText=function replaceText(){var textStore=[];return function replace(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}();function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function remove(){!function removeStyleElement(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function update(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}}}]);