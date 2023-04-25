"use strict";
(() => {
var exports = {};
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 15060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _cid_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./src/components/Common/Icon/index.tsx


const Icon = ({ name , size ="" , color =""  })=>{
    const [iconContent, setIconContent] = (0,external_react_.useState)("");
    const loadIcon = (0,external_react_.useCallback)(async (iconName)=>{
        const res = await fetch(`/icons/${iconName}.svg`);
        return await res.text();
    }, []);
    (0,external_react_.useEffect)(()=>{
        const fetchIcon = async ()=>{
            const content = await loadIcon(name);
            setIconContent(content);
        };
        fetchIcon();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        dangerouslySetInnerHTML: {
            __html: iconContent
        },
        className: `w-10 h-10 inline-block icon ${size} ${color}`
    });
};
/* harmony default export */ const Common_Icon = (Icon);

;// CONCATENATED MODULE: ./src/pages/wise/detail/[cid].tsx
/**
 * @file detail page
 * @author mickey.nbut@gmail.com
 */ 


function Detail(props) {
    const { msg  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: external_classnames_default()("text-3xl", "font-bold", "text-center"),
                children: msg
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Common_Icon, {
                name: "like",
                size: "h-15",
                color: "red"
            })
        ]
    });
}
const getServerSideProps = ()=>{
    return {
        props: {
            msg: "Hello AIO"
        }
    };
};
/* harmony default export */ const _cid_ = (Detail);


/***/ }),

/***/ 59003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(15060));
module.exports = __webpack_exports__;

})();