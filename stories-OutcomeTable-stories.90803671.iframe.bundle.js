(self.webpackChunkacorn_ui=self.webpackChunkacorn_ui||[]).push([[6621],{"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_inheritsLoose});var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,(0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.Z)(subClass,superClass)}},"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}__webpack_require__.d(__webpack_exports__,{Z:()=>_setPrototypeOf})},"./src/stories/OutcomeTable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OutcomeTable:()=>OutcomeTable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/variables.scss");var _components_OutcomeTable_OutcomeTable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/OutcomeTable/OutcomeTable.tsx"),_testData_testTags__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/testData/testTags.ts"),_testData_testOutcomes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/testData/testOutcomes.ts"),react_router_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Table View/OutcomeTable",component:_components_OutcomeTable_OutcomeTable__WEBPACK_IMPORTED_MODULE_2__.Z},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.UT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_OutcomeTable_OutcomeTable__WEBPACK_IMPORTED_MODULE_2__.Z,{...args})});Template.displayName="Template";const OutcomeTable=Template.bind({});OutcomeTable.storyName="OutcomeTable";const args={projectTags:_testData_testTags__WEBPACK_IMPORTED_MODULE_3__.ZP,outcomeTrees:[_testData_testOutcomes__WEBPACK_IMPORTED_MODULE_4__.Os],presentMembers:[],topPriorityOutcomes:[],filter:{},openExpandedView:function(actionHash){throw new Error("Function not implemented.")},goToOutcome:function(actionHash){throw new Error("Function not implemented.")}};OutcomeTable.args=args,OutcomeTable.parameters={...OutcomeTable.parameters,docs:{...OutcomeTable.parameters?.docs,source:{originalSource:"args => {\n  return <Router><OutcomeTableComponent {...args} /></Router>;\n}",...OutcomeTable.parameters?.docs?.source}}};const __namedExportsOrder=["OutcomeTable"]},"./src/components/OutcomeTable/OutcomeTable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-router/esm/react-router.js"),_OutcomeTableRow_OutcomeTableRow__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/OutcomeTableRow/OutcomeTableRow.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/components/OutcomeTable/OutcomeTable.scss"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const OutcomeTable=({topPriorityOutcomes,projectTags,outcomeTrees,presentMembers,filter,openExpandedView,goToOutcome})=>{const[columnWidthPercentages,setColumnWidthPercentages]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["5rem","45rem","50%","50%","0%"]),history=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.k6)(),location=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.TH)(),navAndGoToOutcome=actionHash=>{history.push(location.pathname.replace("table","map")),goToOutcome(actionHash)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"outcome-table-wrapper",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"outcome-table-metadata-header",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"outcome-table-metadata-header-label id-label",style:{width:columnWidthPercentages[0],minWidth:columnWidthPercentages[0]},children:"ID#"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"outcome-table-metadata-header-label",style:{width:columnWidthPercentages[1],minWidth:columnWidthPercentages[1]},children:"Outcome Statement"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"outcome-table-metadata-header-assignees-tags-time",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"outcome-table-metadata-header-label",style:{width:columnWidthPercentages[2],minWidth:columnWidthPercentages[2]},children:"Assignees"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"outcome-table-metadata-header-label",style:{width:columnWidthPercentages[3],minWidth:columnWidthPercentages[3]},children:"Tags"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"outcome-table-rows",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:outcomeTrees.map((outcome=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_OutcomeTableRow_OutcomeTableRow__WEBPACK_IMPORTED_MODULE_1__.Z,{columnWidthPercentages,projectTags,topPriorityOutcomes,outcome,presentMembers,filter,parentExpanded:!0,indentationLevel:0,openExpandedView,goToOutcome:navAndGoToOutcome,expandByDefault:outcomeTrees.length<=10},outcome.actionHash)))})})]})};OutcomeTable.displayName="OutcomeTable";const __WEBPACK_DEFAULT_EXPORT__=OutcomeTable;try{OutcomeTable.displayName="OutcomeTable",OutcomeTable.__docgenInfo={description:"",displayName:"OutcomeTable",props:{projectTags:{defaultValue:null,description:"",name:"projectTags",required:!0,type:{name:"any[]"}},outcomeTrees:{defaultValue:null,description:"",name:"outcomeTrees",required:!0,type:{name:"any[]"}},topPriorityOutcomes:{defaultValue:null,description:"",name:"topPriorityOutcomes",required:!0,type:{name:"string[]"}},presentMembers:{defaultValue:null,description:"",name:"presentMembers",required:!0,type:{name:"string[]"}},filter:{defaultValue:null,description:"",name:"filter",required:!0,type:{name:"OutcomeTableFilter"}},openExpandedView:{defaultValue:null,description:"",name:"openExpandedView",required:!0,type:{name:"(actionHash: string) => void"}},goToOutcome:{defaultValue:null,description:"",name:"goToOutcome",required:!0,type:{name:"(actionHash: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OutcomeTable/OutcomeTable.tsx#OutcomeTable"]={docgenInfo:OutcomeTable.__docgenInfo,name:"OutcomeTable",path:"src/components/OutcomeTable/OutcomeTable.tsx#OutcomeTable"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/OutcomeTable/OutcomeTable.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".outcome-table-wrapper{flex:1;display:flex;flex-direction:column;overflow:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:var(--bg-color-tertiary);margin:.5rem;border-radius:.5rem;box-shadow:0rem 0rem 1.25rem var(--shadow-color)}.outcome-table-wrapper .outcome-table-metadata-header{display:flex;flex-direction:row;font:1rem var(--font-family-primary-bold);color:var(--text-color-secondary);border-bottom:.165rem solid var(--border-color-timberwolf)}.outcome-table-wrapper .outcome-table-metadata-header .outcome-table-metadata-header-assignees-tags-time{display:flex;flex-direction:row;flex:1}.outcome-table-wrapper .outcome-table-metadata-header .outcome-table-metadata-header-label{box-sizing:border-box;padding:.625rem 1rem;border-right:.125rem solid var(--bg-color-popup);background-color:var(bg-color-primary)}.outcome-table-wrapper .outcome-table-metadata-header .outcome-table-metadata-header-label:last-child{border-right:none}.outcome-table-wrapper .outcome-table-rows{flex:1;overflow-y:scroll;padding-bottom:3rem}",""]),module.exports=exports},"./node_modules/react-router-dom/esm/react-router-dom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{OL:()=>NavLink,UT:()=>HashRouter,VK:()=>BrowserRouter});var react_router__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router/esm/react-router.js"),_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),history__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/history/esm/history.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),tiny_invariant__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js"),BrowserRouter=function(_React$Component){function BrowserRouter(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this).history=(0,history__WEBPACK_IMPORTED_MODULE_2__.lX)(_this.props),_this}return(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(BrowserRouter,_React$Component),BrowserRouter.prototype.render=function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.F0,{history:this.history,children:this.props.children})},BrowserRouter}(react__WEBPACK_IMPORTED_MODULE_0__.Component);var HashRouter=function(_React$Component){function HashRouter(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this).history=(0,history__WEBPACK_IMPORTED_MODULE_2__.q_)(_this.props),_this}return(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(HashRouter,_React$Component),HashRouter.prototype.render=function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.F0,{history:this.history,children:this.props.children})},HashRouter}(react__WEBPACK_IMPORTED_MODULE_0__.Component);var resolveToLocation=function resolveToLocation(to,currentLocation){return"function"==typeof to?to(currentLocation):to},normalizeToLocation=function normalizeToLocation(to,currentLocation){return"string"==typeof to?(0,history__WEBPACK_IMPORTED_MODULE_2__.ob)(to,null,null,currentLocation):to},forwardRefShim=function forwardRefShim(C){return C},forwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef;void 0===forwardRef&&(forwardRef=forwardRefShim);var LinkAnchor=forwardRef((function(_ref,forwardedRef){var innerRef=_ref.innerRef,navigate=_ref.navigate,_onClick=_ref.onClick,rest=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,["innerRef","navigate","onClick"]),target=rest.target,props=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},rest,{onClick:function onClick(event){try{_onClick&&_onClick(event)}catch(ex){throw event.preventDefault(),ex}event.defaultPrevented||0!==event.button||target&&"_self"!==target||function isModifiedEvent(event){return!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey)}(event)||(event.preventDefault(),navigate())}});return props.ref=forwardRefShim!==forwardRef&&forwardedRef||innerRef,react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",props)}));var Link=forwardRef((function(_ref2,forwardedRef){var _ref2$component=_ref2.component,component=void 0===_ref2$component?LinkAnchor:_ref2$component,replace=_ref2.replace,to=_ref2.to,innerRef=_ref2.innerRef,rest=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref2,["component","replace","to","innerRef"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.s6.Consumer,null,(function(context){context||(0,tiny_invariant__WEBPACK_IMPORTED_MODULE_6__.Z)(!1);var history=context.history,location=normalizeToLocation(resolveToLocation(to,context.location),context.location),href=location?history.createHref(location):"",props=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},rest,{href,navigate:function navigate(){var location=resolveToLocation(to,context.location),isDuplicateNavigation=(0,history__WEBPACK_IMPORTED_MODULE_2__.Ep)(context.location)===(0,history__WEBPACK_IMPORTED_MODULE_2__.Ep)(normalizeToLocation(location));(replace||isDuplicateNavigation?history.replace:history.push)(location)}});return forwardRefShim!==forwardRef?props.ref=forwardedRef||innerRef:props.innerRef=innerRef,react__WEBPACK_IMPORTED_MODULE_0__.createElement(component,props)}))})),forwardRefShim$1=function forwardRefShim(C){return C},forwardRef$1=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef;void 0===forwardRef$1&&(forwardRef$1=forwardRefShim$1);var NavLink=forwardRef$1((function(_ref,forwardedRef){var _ref$ariaCurrent=_ref["aria-current"],ariaCurrent=void 0===_ref$ariaCurrent?"page":_ref$ariaCurrent,_ref$activeClassName=_ref.activeClassName,activeClassName=void 0===_ref$activeClassName?"active":_ref$activeClassName,activeStyle=_ref.activeStyle,classNameProp=_ref.className,exact=_ref.exact,isActiveProp=_ref.isActive,locationProp=_ref.location,sensitive=_ref.sensitive,strict=_ref.strict,styleProp=_ref.style,to=_ref.to,innerRef=_ref.innerRef,rest=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.s6.Consumer,null,(function(context){context||(0,tiny_invariant__WEBPACK_IMPORTED_MODULE_6__.Z)(!1);var currentLocation=locationProp||context.location,toLocation=normalizeToLocation(resolveToLocation(to,currentLocation),currentLocation),path=toLocation.pathname,escapedPath=path&&path.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),match=escapedPath?(0,react_router__WEBPACK_IMPORTED_MODULE_3__.LX)(currentLocation.pathname,{path:escapedPath,exact,sensitive,strict}):null,isActive=!!(isActiveProp?isActiveProp(match,currentLocation):match),className="function"==typeof classNameProp?classNameProp(isActive):classNameProp,style="function"==typeof styleProp?styleProp(isActive):styleProp;isActive&&(className=function joinClassnames(){for(var _len=arguments.length,classnames=new Array(_len),_key=0;_key<_len;_key++)classnames[_key]=arguments[_key];return classnames.filter((function(i){return i})).join(" ")}(className,activeClassName),style=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},style,activeStyle));var props=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({"aria-current":isActive&&ariaCurrent||null,className,style,to:toLocation},rest);return forwardRefShim$1!==forwardRef$1?props.ref=forwardedRef||innerRef:props.innerRef=innerRef,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link,props)}))}))},"./src/components/OutcomeTable/OutcomeTable.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/OutcomeTable/OutcomeTable.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}}}]);