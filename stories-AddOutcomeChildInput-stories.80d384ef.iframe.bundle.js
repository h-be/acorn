(self.webpackChunkacorn_ui=self.webpackChunkacorn_ui||[]).push([[2481],{"./src/stories/AddOutcomeChildInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AddOutcomeChildInput:()=>AddOutcomeChildInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/variables.scss");var _components_AddOutcomeChildInput_AddOutcomeChildInput__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/AddOutcomeChildInput/AddOutcomeChildInput.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Example/AddOutcomeChildInput",component:_components_AddOutcomeChildInput_AddOutcomeChildInput__WEBPACK_IMPORTED_MODULE_2__.Z},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_AddOutcomeChildInput_AddOutcomeChildInput__WEBPACK_IMPORTED_MODULE_2__.Z,{...args});Template.displayName="Template";const AddOutcomeChildInput=Template.bind({});AddOutcomeChildInput.storyName="AddOutcomeChildInput";AddOutcomeChildInput.args={},AddOutcomeChildInput.parameters={...AddOutcomeChildInput.parameters,docs:{...AddOutcomeChildInput.parameters?.docs,source:{originalSource:"args => {\n  return <AddOutcomeChildInputComponent {...args} />;\n}",...AddOutcomeChildInput.parameters?.docs?.source}}};const __namedExportsOrder=["AddOutcomeChildInput"]},"./src/components/AddOutcomeChildInput/AddOutcomeChildInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/components/AddOutcomeChildInput/AddOutcomeChildInput.scss"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const AddOutcomeChildInput=({onCreateChildOutcome})=>{const[typingText,setTypingText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"add-outcome-child-wrapper",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,{name:"plus.svg",size:"small",className:"light-grey not-hoverable"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__.Z,{value:typingText,placeholder:"Create a new Child by typing Outcome Statement then hitting Enter",onChange:keyboardEvent=>{setTypingText(keyboardEvent.target.value)},onKeyUp:keyboardEvent=>{"Enter"===keyboardEvent.key&&typingText.length>0&&(onCreateChildOutcome(typingText),setTypingText(""))}})]})};AddOutcomeChildInput.displayName="AddOutcomeChildInput";const __WEBPACK_DEFAULT_EXPORT__=AddOutcomeChildInput;try{AddOutcomeChildInput.displayName="AddOutcomeChildInput",AddOutcomeChildInput.__docgenInfo={description:"",displayName:"AddOutcomeChildInput",props:{onCreateChildOutcome:{defaultValue:null,description:"",name:"onCreateChildOutcome",required:!0,type:{name:"(newOutcomeText: string) => Promise<void>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AddOutcomeChildInput/AddOutcomeChildInput.tsx#AddOutcomeChildInput"]={docgenInfo:AddOutcomeChildInput.__docgenInfo,name:"AddOutcomeChildInput",path:"src/components/AddOutcomeChildInput/AddOutcomeChildInput.tsx#AddOutcomeChildInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/components/Icon/Icon.scss"),__webpack_require__("./src/components/Tooltip/Tooltip.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Icon({name,withBackground,size,withTooltipTop,withTooltip,tooltipText,className,onClick=()=>{}}){let[icon,setIcon]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),unmounted=!1;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(async()=>{let importedIcon=await __webpack_require__("./src/images lazy recursive ^\\.\\/.*$")(`./${name}`);unmounted||setIcon(importedIcon.default)})()}),[name]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>function unsub(){unmounted=!0}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:`\n      ${withTooltip?"withTooltip":""} \n      ${withTooltipTop?"withTooltip":""} \n      ${withBackground?"with_background":""}\n       icon \n       ${size} \n       ${className} `,onClick,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"inner-icon",style:{maskImage:`url(${icon})`,WebkitMaskImage:`url(${icon})`}}),withTooltip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_2__.Z,{text:tooltipText}),withTooltipTop&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_2__.Z,{top:!0,text:tooltipText})]})}Icon.displayName="Icon";const __WEBPACK_DEFAULT_EXPORT__=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},withBackground:{defaultValue:null,description:"",name:"withBackground",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},withTooltipTop:{defaultValue:null,description:"",name:"withTooltipTop",required:!1,type:{name:"boolean"}},withTooltip:{defaultValue:null,description:"",name:"withTooltip",required:!1,type:{name:"boolean"}},tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:{value:"() => { }"},description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _images_tooltip_triangle_top_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/images/tooltip-triangle-top.svg"),_images_tooltip_triangle_bottom_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/images/tooltip-triangle-bottom.svg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/components/Tooltip/Tooltip.scss"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Tooltip=({text,top,noTriangle,allowWrapping,noTransition})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:`tooltip-wrapper ${top?"top":""} ${allowWrapping?"allow-wrapping":""} ${noTransition?"":"with-transition"}`,children:[!top&&!noTriangle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{className:"tooltip-triangle-on-top",src:_images_tooltip_triangle_top_svg__WEBPACK_IMPORTED_MODULE_1__}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"tooltip-text-wrapper",children:`${text}`}),top&&!noTriangle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{className:"tooltip-triangle-on-bottom",src:_images_tooltip_triangle_bottom_svg__WEBPACK_IMPORTED_MODULE_2__})]});Tooltip.displayName="Tooltip";const __WEBPACK_DEFAULT_EXPORT__=Tooltip;try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"boolean"}},noTriangle:{defaultValue:null,description:"",name:"noTriangle",required:!1,type:{name:"boolean"}},allowWrapping:{defaultValue:null,description:"",name:"allowWrapping",required:!1,type:{name:"boolean"}},noTransition:{defaultValue:null,description:"",name:"noTransition",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AddOutcomeChildInput/AddOutcomeChildInput.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".add-outcome-child-wrapper{margin-top:.5rem;display:flex;flex-direction:row;align-items:flex-start;font:1rem var(--font-family-primary-medium);color:var(--text-color-placeholder)}.add-outcome-child-wrapper .checkbox-wrapper{opacity:.3;cursor:default}.add-outcome-child-wrapper textarea{resize:none;width:100%;font:1rem var(--font-family-primary-medium);color:var(--text-color-primary);margin-left:.625rem;border:0;outline:0;background-color:transparent;-webkit-font-smoothing:antialiased}.add-outcome-child-wrapper textarea::placeholder{color:var(--text-color-placeholder)}.add-outcome-child-wrapper.small{font:.825rem var(--font-family-primary-medium)}.add-outcome-child-wrapper.small textarea{font:.825rem var(--font-family-primary-medium)}.add-outcome-child-wrapper.large{font:1.25rem var(--font-family-primary-medium)}.add-outcome-child-wrapper.large textarea{font:1.25rem var(--font-family-primary-medium)}",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Icon/Icon.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".icon{width:36px;height:36px;box-sizing:border-box;padding:6px;cursor:pointer;position:relative}.inner-icon{background-color:var(--text-color-primary);mask-repeat:no-repeat;mask-position:center;mask-size:contain;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;-webkit-mask-size:contain;width:100%;height:100%}.icon:not(.not-hoverable) .inner-icon{transition:.2s background-color ease}.icon:not(.not-hoverable):hover .inner-icon{background-color:var(--text-color-link)}.icon.not-hoverable{cursor:default}.icon.uncertain .inner-icon{background-color:var(--color-pumpkin)}.icon.grey .inner-icon{background-color:#898989}.icon.light-grey .inner-icon{background-color:var(--color-silver)}.icon.purple .inner-icon{background-color:var(--text-color-link)}.icon.white .inner-icon{background-color:#fff;cursor:pointer}.icon.very-small{width:16px;height:16px;padding:2px;cursor:pointer}.icon.small{width:24px;height:24px;padding:2px;cursor:pointer}.icon.medium{width:32px;height:32px;padding:2px;cursor:pointer}.icon.medium-MultiEditBar{width:40px;height:32px;padding:6px;cursor:pointer}.icon.medium-expanded-view{height:26px;padding:1px;display:inline-block;position:relative;cursor:pointer}.icon.logo{width:28px;height:18px;padding:1.25px;display:inline-block;position:relative;right:-2px;background:transparent}.icon.view-mode-small{height:24px;width:24px;padding:4px;display:inline-block;position:relative;margin-top:2;margin-left:0;box-sizing:border-box}.icon.user-status{width:18px;height:18px;padding:0px;cursor:pointer}.icon.with_background{background-color:#ffffff80;border-radius:8px;padding:8px;box-shadow:0px 0px 6px rgba(0,0,0,.16)}.icon.with_background:hover{background-color:#fff;padding:8px}.icon.Uncertain .inner-icon{background-color:#ff5d36}.icon.Incomplete .inner-icon{background-color:#ffc400}.icon.InProcess .inner-icon{background-color:#ff9cab}.icon.InReview .inner-icon{background-color:#00e2ff}.icon.Complete .inner-icon{background-color:#83e300}.icon.withTooltip:hover .tooltip-wrapper{visibility:visible;transition-delay:.9s;transition-property:visibility}",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Tooltip/Tooltip.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".tooltip-wrapper{position:absolute;visibility:hidden;font-size:.6875rem;line-height:1.15;white-space:nowrap;font-family:var(--font-family-primary-bold);display:flex;flex-direction:column;z-index:9999}.tooltip-wrapper.with-transition{transition:.3s all ease}.tooltip-wrapper.allow-wrapping{white-space:normal;width:100%;align-items:flex-start;font-size:.875rem}.tooltip-wrapper.allow-wrapping .tooltip-text-wrapper{padding:.5rem .75rem;border-radius:.5rem}.tooltip-wrapper:not(.allow-wrapping){bottom:-30px;left:50%;transform:translateX(-50%);align-items:center}.tooltip-wrapper.top{bottom:30px}.tooltip-wrapper .tooltip-text-wrapper{background-color:var(--text-color-link);padding:.5rem;border-radius:.25rem;color:var(--text-color-dark-bg)}.tooltip-wrapper .tooltip-triangle-on-top{width:12px;height:12px;margin-bottom:-4px}.tooltip-wrapper .tooltip-triangle-on-bottom{width:12px;height:12px;margin-top:-4px}",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/variables.scss":(module,exports,__webpack_require__)=>{var ___CSS_LOADER_API_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_GET_URL_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),___CSS_LOADER_URL_IMPORT_0___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.woff2"),___CSS_LOADER_URL_IMPORT_1___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.woff"),___CSS_LOADER_URL_IMPORT_2___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.woff2"),___CSS_LOADER_URL_IMPORT_3___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.woff"),___CSS_LOADER_URL_IMPORT_4___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.woff2"),___CSS_LOADER_URL_IMPORT_5___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.woff"),___CSS_LOADER_URL_IMPORT_6___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff2"),___CSS_LOADER_URL_IMPORT_7___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff"),___CSS_LOADER_URL_IMPORT_8___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-ExtraBold.woff2"),___CSS_LOADER_URL_IMPORT_9___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-ExtraBold.woff"),___CSS_LOADER_URL_IMPORT_10___=__webpack_require__("./src/fonts/gilroy/gilroy-extrabold-webfont.woff2"),___CSS_LOADER_URL_IMPORT_11___=__webpack_require__("./src/fonts/gilroy/gilroy-extrabold-webfont.woff"),___CSS_LOADER_URL_IMPORT_12___=__webpack_require__("./src/fonts/gilroy/gilroy-light-webfont.woff2"),___CSS_LOADER_URL_IMPORT_13___=__webpack_require__("./src/fonts/gilroy/gilroy-light-webfont.woff");exports=___CSS_LOADER_API_IMPORT___(!1);var ___CSS_LOADER_URL_REPLACEMENT_0___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___),___CSS_LOADER_URL_REPLACEMENT_2___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___),___CSS_LOADER_URL_REPLACEMENT_3___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___),___CSS_LOADER_URL_REPLACEMENT_4___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___),___CSS_LOADER_URL_REPLACEMENT_5___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___),___CSS_LOADER_URL_REPLACEMENT_6___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___),___CSS_LOADER_URL_REPLACEMENT_7___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___),___CSS_LOADER_URL_REPLACEMENT_8___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___),___CSS_LOADER_URL_REPLACEMENT_9___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___),___CSS_LOADER_URL_REPLACEMENT_10___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___),___CSS_LOADER_URL_REPLACEMENT_11___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___),___CSS_LOADER_URL_REPLACEMENT_12___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___),___CSS_LOADER_URL_REPLACEMENT_13___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);exports.push([module.id,'@font-face{font-family:"PlusJakartaSans-regular";src:url('+___CSS_LOADER_URL_REPLACEMENT_0___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_1___+') format("woff");font-weight:normal;font-style:normal;word-spacing:.05em}@font-face{font-family:"PlusJakartaSans-medium";src:url('+___CSS_LOADER_URL_REPLACEMENT_2___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_3___+') format("woff");font-weight:normal;font-style:normal;word-spacing:.05em}@font-face{font-family:"PlusJakartaSans-semibold";src:url('+___CSS_LOADER_URL_REPLACEMENT_4___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_5___+') format("woff");font-weight:normal;font-style:normal;word-spacing:.05em}@font-face{font-family:"PlusJakartaSans-bold";src:url('+___CSS_LOADER_URL_REPLACEMENT_6___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_7___+') format("woff");font-weight:normal;font-style:normal;word-spacing:.05em}@font-face{font-family:"PlusJakartaSans-extrabold";src:url('+___CSS_LOADER_URL_REPLACEMENT_8___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_9___+') format("woff");font-weight:normal;font-style:normal;word-spacing:.05em}@font-face{font-family:"gilroyextrabold";src:url('+___CSS_LOADER_URL_REPLACEMENT_10___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_11___+') format("woff");font-weight:normal;font-style:normal}@font-face{font-family:"gilroylight";src:url('+___CSS_LOADER_URL_REPLACEMENT_12___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_13___+') format("woff");font-weight:normal;font-style:normal}:root{--color-virtually-transaprent: #ffffff00;--color-green-shadow: #4a604392;--shadow-brown-shadow: #8377699b;--color-silver: #bebebe;--color-green: #008414;--color-forest-green: #15841d;--color-bronze: #a89958;--color-pumpkin: #c46310;--color-topaz: #f7cf75;--color-ultramarine-blue: #344cff;--color-gray: #808080;--color-alto: #d0d0d0;--color-turquoise: #12d6c7;--color-persian-green: #00a599;--color-myrtle-green: #277670;--icon-color-light-grey: #d0d0d0;--bg-color-primary: #f7f5f3;--bg-color-secondary: #ffffff;--bg-color-secondary-read-only: #ffffff80;--bg-color-tertiary: #fbfbf9;--bg-color-hover: #f4f1ed;--bg-color-hover-semi-transparent: #f4f1eda1;--bg-color-canvas: #f4f2f0;--bg-color-popup: #ebeae7eb;--bg-color-achieved: #e9efe7;--bg-color-primary-dark: #555555;--bg-color-hover-dark: #c7beb430;--border-color-primary: #222222;--border-color-secondary: #4d4d4d;--border-color-timberwolf: #dbd7d0;--border-color-platinum: #ede7e7;--border-color-bright-gray: #efefef;--border-color-pale-silver: #c3bfba;--shadow-color: #c7beb472;--shadow-color-read-only: #c7beb437;--shadow-color-dark: #c7beb4bd;--shadow-color-hover: #c7beb4bd;--shadow-color-high-priority: #334cf8;--font-family-primary-extrabold: "PlusJakartaSans-extrabold", sans-serif;--font-family-primary-bold: "PlusJakartaSans-bold", sans-serif;--font-family-primary-semibold: "PlusJakartaSans-semibold", sans-serif;--font-family-primary-medium: "PlusJakartaSans-medium", sans-serif;--font-family-primary-regular: "PlusJakartaSans-regular", sans-serif;--font-family-secondary-extrabold: "gilroyextrabold", sans-serif;--text-color-primary: #222222;--text-color-secondary: #4d4d4d;--text-color-tertiary: #8d8c8c;--text-color-quaternary: #9d9d9d;--text-color-caption: #bcbcbc;--text-color-placeholder: #bdbdbd;--text-color-strikethrough: #aea49972;--text-color-invalid: #ff5d36;--text-color-link: #344cff;--text-color-dark-bg: #ffffff}',""]),module.exports=exports},"./src/components/AddOutcomeChildInput/AddOutcomeChildInput.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AddOutcomeChildInput/AddOutcomeChildInput.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/Icon/Icon.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Icon/Icon.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/Tooltip/Tooltip.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Tooltip/Tooltip.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/variables.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/variables.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/images lazy recursive ^\\.\\/.*$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./achieved.svg":["./src/images/achieved.svg",8284],"./acorn-alpha-logo.png":["./src/images/acorn-alpha-logo.png",2663],"./acorn-logo.svg":["./src/images/acorn-logo.svg",5492],"./activity-history.svg":["./src/images/activity-history.svg",5349],"./archive.svg":["./src/images/archive.svg",733],"./arrow-circle-up.svg":["./src/images/arrow-circle-up.svg",3492],"./arrow-right.svg":["./src/images/arrow-right.svg",7142],"./assignees.svg":["./src/images/assignees.svg",2775],"./avatar-placeholder.svg":["./src/images/avatar-placeholder.svg",5469],"./barbell.svg":["./src/images/barbell.svg",352],"./booklet.svg":["./src/images/booklet.svg",4311],"./calculator-grey.svg":["./src/images/calculator-grey.svg",5541],"./calendar.svg":["./src/images/calendar.svg",6378],"./chats-circle.svg":["./src/images/chats-circle.svg",4041],"./check.svg":["./src/images/check.svg",5809],"./chevron-down.svg":["./src/images/chevron-down.svg",1466],"./chevron-left.svg":["./src/images/chevron-left.svg",6166],"./chevron-right.svg":["./src/images/chevron-right.svg",7538],"./chevron-up.svg":["./src/images/chevron-up.svg",5978],"./circle-alert.svg":["./src/images/circle-alert.svg",6471],"./circle-check.svg":["./src/images/circle-check.svg",4889],"./circle-dashed.svg":["./src/images/circle-dashed.svg",3],"./circle-x.svg":["./src/images/circle-x.svg",9175],"./circle.svg":["./src/images/circle.svg",4217],"./comment.svg":["./src/images/comment.svg",2116],"./delete-bin.svg":["./src/images/delete-bin.svg",5273],"./details.svg":["./src/images/details.svg",9037],"./door-closed.svg":["./src/images/door-closed.svg",697],"./door-open.svg":["./src/images/door-open.svg",7354],"./dots-horizontal.svg":["./src/images/dots-horizontal.svg",8168],"./dots-vertical.svg":["./src/images/dots-vertical.svg",7444],"./earth.svg":["./src/images/earth.svg",3898],"./edit.svg":["./src/images/edit.svg",5666],"./enter.svg":["./src/images/enter.svg",7217],"./equalizer.svg":["./src/images/equalizer.svg",3188],"./error-screen-image.png":["./src/images/error-screen-image.png",4548],"./expand.svg":["./src/images/expand.svg",3124],"./export.svg":["./src/images/export.svg",9759],"./external-link.svg":["./src/images/external-link.svg",8342],"./eye.svg":["./src/images/eye.svg",1675],"./file-copy.svg":["./src/images/file-copy.svg",6775],"./flask.svg":["./src/images/flask.svg",3434],"./folder.svg":["./src/images/folder.svg",4200],"./font.svg":["./src/images/font.svg",6741],"./github.svg":["./src/images/github.svg",7926],"./help.svg":["./src/images/help.svg",4958],"./hierarchy.svg":["./src/images/hierarchy.svg",5584],"./import.svg":["./src/images/import.svg",4144],"./info.svg":["./src/images/info.svg",9465],"./intro-vis-1.png":["./src/images/intro-vis-1.png",970],"./intro-vis-2.png":["./src/images/intro-vis-2.png",4453],"./intro-vis-3.png":["./src/images/intro-vis-3.png",3713],"./intro-vis-4.png":["./src/images/intro-vis-4.png",4068],"./leaf-bronze.svg":["./src/images/leaf-bronze.svg",3960],"./leaf-green.svg":["./src/images/leaf-green.svg",5917],"./leaf.svg":["./src/images/leaf.svg",490],"./lightning.svg":["./src/images/lightning.svg",9354],"./link.svg":["./src/images/link.svg",9482],"./lock-closed.svg":["./src/images/lock-closed.svg",5168],"./map.svg":["./src/images/map.svg",8150],"./minus.svg":["./src/images/minus.svg",7667],"./mouse.svg":["./src/images/mouse.svg",4225],"./navigation.svg":["./src/images/navigation.svg",1105],"./notification.svg":["./src/images/notification.svg",8864],"./panning.svg":["./src/images/panning.svg",3732],"./pencil.svg":["./src/images/pencil.svg",3619],"./plus.svg":["./src/images/plus.svg",8152],"./popup-curved-pointer-downside.svg":["./src/images/popup-curved-pointer-downside.svg",865],"./popup-curved-pointer-upside.svg":["./src/images/popup-curved-pointer-upside.svg",1470],"./popup-triangle-white.svg":["./src/images/popup-triangle-white.svg",9647],"./priority-view-empty-state.svg":["./src/images/priority-view-empty-state.svg",188],"./progress-circle.svg":["./src/images/progress-circle.svg",4462],"./refresh.svg":["./src/images/refresh.svg",9964],"./search.svg":["./src/images/search.svg",2725],"./send-plane.svg":["./src/images/send-plane.svg",482],"./settings.svg":["./src/images/settings.svg",9166],"./share.svg":["./src/images/share.svg",385],"./sort-asc.svg":["./src/images/sort-asc.svg",888],"./splash-image-valeriia-miller.jpg":["./src/images/splash-image-valeriia-miller.jpg",8010],"./square-check-green.svg":["./src/images/square-check-green.svg",3051],"./square-check-grey.svg":["./src/images/square-check-grey.svg",140],"./square-check.svg":["./src/images/square-check.svg",5114],"./squares-check.svg":["./src/images/squares-check.svg",6622],"./table.svg":["./src/images/table.svg",8043],"./tag.svg":["./src/images/tag.svg",5466],"./team.svg":["./src/images/team.svg",3359],"./test-tube.svg":["./src/images/test-tube.svg",4290],"./text-align-left.svg":["./src/images/text-align-left.svg",4920],"./timer.svg":["./src/images/timer.svg",6914],"./title.svg":["./src/images/title.svg",1590],"./tooltip-triangle-bottom.svg":["./src/images/tooltip-triangle-bottom.svg"],"./tooltip-triangle-top.svg":["./src/images/tooltip-triangle-top.svg"],"./trackpad.svg":["./src/images/trackpad.svg",9581],"./triangle-bottom-white.svg":["./src/images/triangle-bottom-white.svg",6642],"./triangle-top-white.svg":["./src/images/triangle-top-white.svg",5976],"./uncertain.svg":["./src/images/uncertain.svg",3248],"./user-plus.svg":["./src/images/user-plus.svg",1249],"./x.svg":["./src/images/x.svg",3232],"./zoom-in.svg":["./src/images/zoom-in.svg",5723]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__.t(id,17)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src/images lazy recursive ^\\.\\/.*$",module.exports=webpackAsyncContext},"./src/fonts/gilroy/gilroy-extrabold-webfont.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/gilroy-extrabold-webfont.9d536b59.woff"},"./src/fonts/gilroy/gilroy-extrabold-webfont.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/gilroy-extrabold-webfont.eba219e4.woff2"},"./src/fonts/gilroy/gilroy-light-webfont.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/gilroy-light-webfont.ba334d23.woff"},"./src/fonts/gilroy/gilroy-light-webfont.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/gilroy-light-webfont.77d9316b.woff2"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Bold.3d6b4fa0.woff"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Bold.50cf6471.woff2"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-ExtraBold.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-ExtraBold.d59e544c.woff"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-ExtraBold.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-ExtraBold.259d19d6.woff2"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Medium.724099a1.woff"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Medium.ff53fe0e.woff2"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Regular.f344d0fa.woff"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Regular.c4e0d187.woff2"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-SemiBold.0c667bc0.woff"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-SemiBold.dc64b89d.woff2"},"./src/images/tooltip-triangle-bottom.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/tooltip-triangle-bottom.b069de39.svg"},"./src/images/tooltip-triangle-top.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/tooltip-triangle-top.3cc8a920.svg"}}]);