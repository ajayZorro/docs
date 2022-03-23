"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4054:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return s},toc:function(){return m},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={sidebar_position:1},p="CAT API (v1 alpha)",d={unversionedId:"for-developers/cat_api",id:"for-developers/cat_api",title:"CAT API (v1 alpha)",description:"CAT API is a rest API by which individual CAT information can be fetched based on",source:"@site/docs/for-developers/cat_api.md",sourceDirName:"for-developers",slug:"/for-developers/cat_api",permalink:"/docs/for-developers/cat_api",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/for-developers/cat_api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Sham Hiruthik - INDIA",permalink:"/docs/Interns/internListed/shamhiruthik"},next:{title:"CATS API (v1 alpha)",permalink:"/docs/for-developers/cats_api"}},s={},m=[{value:"CAT info API endpoint",id:"cat-info-api-endpoint",level:2},{value:"Details about each response attribute",id:"details-about-each-response-attribute",level:2}],c={toc:m};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cat-api-v1-alpha"},"CAT API (v1 alpha)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CAT API")," is a rest API by which individual CAT information can be fetched based on\nthe cat ",(0,i.kt)("inlineCode",{parentName:"p"},"asset id"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This API is still under a developing stage, so please try to use this API cautiously . ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"New features or change in attributes will happen in the future. Hence, make sure the schema\nbefore using the response. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We are happy to help with more features and parametes under this API. Please contact the spacescan.io team at ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/Bb4sj3Bg9P"},"discord"),", ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/spacescan_io"},"twitter")," or at ",(0,i.kt)("inlineCode",{parentName:"p"},"spacescan.io@gmail.com")," for any suggestions or bugs. "))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We would appreciate your effort on linking back to ",(0,i.kt)("a",{parentName:"p",href:"https://www.spacescan.io/"},"spacescan.io")," and this API, if this API is used for building any product or feature on top of it."))),(0,i.kt)("h2",{id:"cat-info-api-endpoint"},"CAT info API endpoint"),(0,i.kt)("p",null,"The API endpoint to hit for the individual cat information response ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api2.spacescan.io/v0.1/xch/cat/{assetid}"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This ",(0,i.kt)("inlineCode",{parentName:"p"},"assetid")," in the endpoint needs to be replaced with the assetid that the user needs information about. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"version ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.1")," denotes the alpha version of the API. ",(0,i.kt)("inlineCode",{parentName:"p"},"xch/cat")," denotes the CAT present in the chia blockchain. "))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Sample Response for Spacebucks"',title:'"Sample',Response:!0,for:!0,'Spacebucks"':!0},'{\n    "status": "SUCCESS",\n    "cat": [\n        {\n            "asset_id": "78ad32a8c9ea70f27d73e9306fc467bab2a6b15b30289791e37ab6e8612212b1",\n            "asset_name": "Spacebucks",\n            "symbol": "SBX",\n            "price_usd": null,\n            "price_xch": null,\n            "issued_time": null,\n            "updated": 1645975699,\n            "holders": null,\n            "lisp": null,\n            "clvm": null,\n            "description": "The galactic monetary standard.",\n            "tags": "Meme",\n            "total_supply": 1000000000,\n            "txns_count": 17716,\n            "txns_amount": 1005905567.3910004,\n            "logo": "https://images.spacescan.io/xch/cat/78ad32a8c9ea70f27d73e9306fc467bab2a6b15b30289791e37ab6e8612212b1/1.png"\n        }\n    ]\n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Whenever there is a change in the version, the endpoint for this API will change. This change will be updated here in the docs. "),(0,i.kt)("li",{parentName:"ul"},"The last three old versions will always be supported along with the new version. We would provide two weeks\nnotice prior to the old version decommission date.")))),(0,i.kt)("h2",{id:"details-about-each-response-attribute"},"Details about each response attribute"),(0,i.kt)("p",null,"Each attributes inside the response denotes different information about the CAT. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")," denotes whether the API call is made successfully or not. ",(0,i.kt)("inlineCode",{parentName:"li"},"SUCCESS")," symbolize the call is success, ",(0,i.kt)("inlineCode",{parentName:"li"},"FAILURE")," symbolize the call is not success. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cat")," object contains the details about the CAT asset id provided in the endpoint. ")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"CAT Response",src:a(7353).Z,width:"1237",height:"877"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"CAT x_auth_token",src:a(7977).Z,width:"1382",height:"771"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set the header ",(0,i.kt)("inlineCode",{parentName:"p"},"x-auth-id")," key with the value taken from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.spacescan.io/"},"spacescan.io")," user profile info ",(0,i.kt)("inlineCode",{parentName:"p"},"API Key"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This header ",(0,i.kt)("inlineCode",{parentName:"p"},"x-auth-id")," is used for the user validation, and this would be a mandatory header in the future."))),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"CAT x_auth_id",src:a(6544).Z,width:"1893",height:"897"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DataType"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"asset_id")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unique ID used fr tracking every CAT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"asset_name")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name given by the CAT owner for respective CAT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"symbol")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Symbol given by the CAT owner for the respective CAT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"price_usd")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Price of the particular CAT in USD (Converted)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"price_xch")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Price of the particular CAT in XCH")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"issued_time")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Timestamp when the CAT was issued by the CAT owner")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"updated")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Timestamp when the CAT owner updated the CAT details in our API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"holders")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of users currently hold the respective CAT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"lisp")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"chia lisp of a cat tail")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"clvm")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"compiled  version of a chia lisp of a cat tail")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"description")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Detailed description about the respective CAT provided by the CAT owner")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tags")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Tag that was given to the CAT by the CAT owner")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"total_supply")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Total number of CATs that are created for circulation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"txns_count")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Total number of transactions made in the respective CAT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"txns_amount")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Total amount  of CATs transferred")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"logo")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL for the Logo of CAT generated by the CAT owner")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This CAT information from this API, will have some more details when compared to the ",(0,i.kt)("a",{parentName:"li",href:"/docs/for-developers/cats_api"},"CATS API")," v1 alpha")))}u.isMDXComponent=!0},7977:function(e,t,a){t.Z=a.p+"assets/images/Token_Api-d17dbf6537e63d738fd1af3462f4fdba.png"},7353:function(e,t,a){t.Z=a.p+"assets/images/postman_cat_response-575c0a4b0ee376e9f03c895feda77ea9.png"},6544:function(e,t,a){t.Z=a.p+"assets/images/token_id-a0175d4996af5ea62790374d4d01e7c0.png"}}]);