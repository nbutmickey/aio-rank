exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 24304:
/***/ ((module) => {

// Exports
module.exports = {
	"searchBox": "index_searchBox__IW3d_"
};


/***/ }),

/***/ 62158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/NewStar.6971953c.svg","height":15,"width":16,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 67790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/StarSelected.fb7a5357.svg","height":13,"width":14,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 32292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/empty.bbb46d88.png","height":160,"width":160,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2ElEQVR42i1NOU4DQRDsy94DJBMgEiwkkBMyPkDuhIhP8AAexTN4A4gIWQRAhoA9We/OTFOSXVKrqo/qIgLqujuv6vaYAPCyarob2sN25CsReYP4mpmdJPf7pu2rlNKGv3/rQwwvx3G8QN0x86Isi0FFH3F4atl8fhtjXBd5tj4oiyMcUExpgPvBVM9EVa5FeIPFD5jQuzBvEddBf4qZfmBZufuMWQjF0ELkvaq2Nk3hGdkFXk4hRiIghNA40WhqL9z3fwsWWQ3D9grZS3InON/zPHvylF7/AcBhaujuuLyIAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 5942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13831);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99565);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77253);
/* harmony import */ var _douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92813);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);







const Card = ({ item , operationText , onClickHandler  })=>{
    const { attributes , listeners , setNodeRef , transform , transition  } = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.useSortable)({
        id: item
    });
    const style = {
        transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_4__.CSS.Transform.toString(transform),
        transition: transition
    };
    (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useDndMonitor)({
        onDragStart () {},
        onDragMove () {},
        onDragOver () {},
        onDragEnd (event) {
            if (Math.abs(event.delta.x) < 2 && Math.abs(event.delta.y) < 2 && event.active.id !== "Block_1") {
                onClickHandler(event.active.id);
            }
        },
        onDragCancel () {}
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: setNodeRef,
        ...listeners,
        ...attributes,
        style: style,
        className: "mx-2",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            // eslint-disable-next-line max-len
            className: "flex md:w-full flex-row h-[3rem] px-3 m-2 bg-gray-200 hover:bg-gray-100 rounded-lg cursor-pointer justify-between",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "self-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_6__.IconHome, {
                                size: "extra-large",
                                className: ""
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "self-center ml-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-bold",
                                children: item
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "font-semibold text-lg self-center",
                    children: operationText
                })
            ]
        })
    });
};
const DndList = ({ data , setAddBlock , onClickHandler  })=>{
    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setItems(data);
    }, [
        data
    ]);
    const handleDragEnd = (event)=>{
        const { active , over  } = event;
        if (over && active.id !== over.id && active.id !== "Block_1") {
            setItems((0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.arrayMove)(items, (0,lodash__WEBPACK_IMPORTED_MODULE_5__.indexOf)(items, active.id), (0,lodash__WEBPACK_IMPORTED_MODULE_5__.indexOf)(items, over.id)));
            setAddBlock(items);
        }
    };
    const mouseSensor = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.MouseSensor, {
        // Press delay of 250ms, with tolerance of 5px of movement
        activationConstraint: {
            delay: 5,
            tolerance: 5
        }
    });
    const touchSensor = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.TouchSensor);
    const keyboardSensor = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.KeyboardSensor);
    const sensors = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useSensors)(mouseSensor, touchSensor, keyboardSensor);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.DndContext, {
        collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.closestCenter,
        onDragEnd: handleDragEnd,
        sensors: sensors,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.SortableContext, {
            items: items,
            strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.rectSortingStrategy,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-4",
                children: items.map((item)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
                        item: item,
                        operationText: "+",
                        onClickHandler: onClickHandler
                    }, item);
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DndList);


/***/ }),

/***/ 46386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ InfoTable_InfoTable)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./node_modules/@douyinfe/semi-ui/lib/cjs/index.js
var cjs = __webpack_require__(13233);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./src/components/Pc/Market/search.ts
const Searcher = (()=>{
    // eslint-disable-next-line no-useless-escape
    const escapeRegExp = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
    const escapeReg = (reg)=>reg.replace(escapeRegExp, "\\$&");
    // groupLeft 与 groupRight是对结果进一步处理所使用的分割符，可以修改
    const groupLeft = "(";
    const groupRight = ")";
    const groupExtractReg = new RegExp("(" + escapeReg(groupLeft) + "[\\s\\S]+?" + escapeReg(groupRight) + ")", "g");
    // 从str中找到最大的匹配长度
    const findMax = (str, keyword)=>{
        let max = 0;
        keyword = groupLeft + keyword + groupRight;
        str.token.replace(groupExtractReg, (m)=>{
            // keyword完整的出现在str中，则优秀级最高，排前面
            if (keyword === m) {
                max = Number.MAX_SAFE_INTEGER;
            } else if (m.length > max) {
                max = m.length;
            }
            return m;
        });
        return max;
    };
    const keyReg = (key)=>{
        const src = [
            "(.*?)("
        ];
        const ks = key.split("");
        if (ks.length) {
            while(ks.length){
                src.push(escapeReg(ks.shift() || ""), ")(.*?)(");
            }
            src.pop();
        }
        src.push(")(.*?)");
        const str = src.join("");
        const reg = new RegExp(str, "i");
        const replacer = [];
        let start = key.length;
        let begin = 1;
        while(start > 0){
            start--;
            replacer.push("$", begin, groupLeft + "$", begin + 1, groupRight);
            begin += 2;
        }
        replacer.push("$", begin);
        const info = {
            regexp: reg,
            replacement: replacer.join("")
        };
        return info;
    };
    return {
        search (list, keyword) {
            // 生成搜索正则
            const kr = keyReg(keyword);
            let result = [];
            for (const e of list){
                // 如果匹配
                if (kr.regexp.test(e.token)) {
                    // 把结果放入result数组中
                    result.push(e);
                }
            }
            // 对搜索结果进行排序
            // 1. 匹配关键字大小写一致的优先级最高，比如搜索up, 结果中的[user-page,beginUpdate,update,endUpdate]，update要排在最前面，因为大小写匹配
            // 2. 匹配关键字长的排在前面
            result = result.sort((a, b)=>findMax(b, keyword) - findMax(a, keyword));
            return result;
        }
    };
})();
function fuzzySearch(query, items) {
    return Searcher.search(items, query);
}

// EXTERNAL MODULE: ./src/components/Pc/Market/InfoTable/index.module.less
var index_module = __webpack_require__(24304);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/components/Pc/Market/InfoTable/InfoTable.tsx





const InfoTable = ({ title , columns , data  })=>{
    const [tempData, setData] = (0,external_react_.useState)([]);
    const scroll = (0,external_react_.useMemo)(()=>({
            y: "70vh"
        }), []);
    const handleChange = (e)=>{
        if (e.target.value === "") {
            setData(data); // reset
        } else {
            setData(fuzzySearch(e.target.value, data));
        }
    };
    (0,external_react_.useEffect)(()=>{
        setData(data);
    }, [
        data
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full flex flex-row justify-between my-4 ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-xl font-[500] self-center",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: (index_module_default()).searchBox,
                        id: "search",
                        placeholder: "search for content",
                        onChange: handleChange
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(cjs/* Table */.iA, {
                    pagination: false,
                    columns: columns,
                    dataSource: tempData,
                    scroll: scroll
                })
            })
        ]
    });
};
/* harmony default export */ const InfoTable_InfoTable = (InfoTable);


/***/ }),

/***/ 18544:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "j0": () => (/* binding */ nftColumns),
/* harmony export */   "zu": () => (/* binding */ tokenColumns)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13233);
/* harmony import */ var _components_Svg_NewStar_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62158);
/* harmony import */ var _components_Svg_StarSelected_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67790);
/* harmony import */ var _components_Svg_empty_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32292);
/* harmony import */ var _src_utils_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28565);
/* harmony import */ var _src_utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62400);
/* harmony import */ var _InfoTable_InfoTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46386);
/* harmony import */ var _pages_pc_market__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44542);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_utils_request__WEBPACK_IMPORTED_MODULE_5__, _pages_pc_market__WEBPACK_IMPORTED_MODULE_8__]);
([_src_utils_request__WEBPACK_IMPORTED_MODULE_5__, _pages_pc_market__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// 自选










const sorter = (a, b, prop)=>{
    return parseFloat(a[prop]) - parseFloat(b[prop]) > 0 ? 1 : -1;
};
const headerRenderer = (text, style, showCurrency = false)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_pc_market__WEBPACK_IMPORTED_MODULE_8__.BillContext.Consumer, {
        children: (billType)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: style,
                children: [
                    text,
                    showCurrency ? billType === "USD" ? "$" : "￥" : null
                ]
            })
    });
};
const tokenColumns = (data, setData)=>{
    return [
        {
            title: headerRenderer("币种", "text-[#B4B1C1] font-[500] ml-10 text-[14px] my-[7px]"),
            dataIndex: "token",
            width: "20%",
            render: (text, record)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row ml-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "self-center cursor-pointer",
                            onClick: ()=>{
                                if (data.map((e)=>e.index).includes(record.index)) {
                                    setData(data.filter((e)=>e.index !== record.index));
                                } else {
                                    setData(data.concat(record));
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: data.map((e)=>e.index).includes(record.index) ? _components_Svg_StarSelected_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src : _components_Svg_NewStar_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"].src */ .Z.src,
                                width: 15,
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_9__/* .Image */ .Ee, {
                            src: record.icon,
                            className: "ml-4 h-[1.7rem] w-[1.7rem] self-center"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "font-[600] self-center ml-2",
                            children: text
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-[#656277] font-[500] text-[14px] self-center ml-2",
                            children: record.name
                        })
                    ]
                })
        },
        {
            title: headerRenderer("价格", "text-[#B4B1C1] font-[500] text-[14px]", true),
            dataIndex: "price",
            align: "right",
            sorter: (a, b)=>sorter(a, b, "price"),
            render: (text, record)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_pc_market__WEBPACK_IMPORTED_MODULE_8__.BillContext.Consumer, {
                    children: (billType)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-row justify-end",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-[600] self-center ml-2",
                                        children: text
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-[12px] text-[#656277]",
                                        children: billType === "USD" ? null : `$${record.priceUS}`
                                    })
                                ]
                            })
                        })
                })
        },
        {
            title: headerRenderer("1h", "text-[#B4B1C1] font-[500] text-[14px]"),
            dataIndex: "1H",
            align: "right",
            sorter: (a, b)=>sorter(a, b, "1H"),
            render: (text)=>// eslint-disable-next-line max-len
                // eslint-disable-next-line max-len
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `font-[600] ${!text.startsWith("-") ? "text-green-500" : "text-red-500 font-medium"}`,
                    children: text
                })
        },
        {
            title: headerRenderer("24h", "text-[#B4B1C1] font-[500] text-[14px]"),
            dataIndex: "24H",
            align: "right",
            sorter: (a, b)=>sorter(a, b, "24H"),
            render: (text)=>// eslint-disable-next-line max-len
                // eslint-disable-next-line max-len
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `font-[600] ${!text.startsWith("-") ? "text-green-500" : "text-red-500 font-medium"}`,
                    children: text
                })
        },
        {
            title: headerRenderer("7d", "text-[#B4B1C1] font-[500] text-[14px]"),
            dataIndex: "7D",
            align: "right",
            sorter: (a, b)=>sorter(a, b, "7D"),
            render: (text)=>// eslint-disable-next-line max-len
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `font-[600] ${`font-[600] ${!text.startsWith("-") ? "text-green-500" : "text-red-500 font-medium"}`}`,
                    children: text
                })
        },
        {
            title: headerRenderer("交易额", "text-[#B4B1C1] font-[500] text-[14px]", true),
            dataIndex: "volume",
            align: "right",
            sorter: (a, b)=>sorter(a, b, "volume"),
            render: (text, record)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_pc_market__WEBPACK_IMPORTED_MODULE_8__.BillContext.Consumer, {
                    children: (billType)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-row justify-end",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-[600] self-center ml-2",
                                        children: text
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-[12px] text-[#656277]",
                                        children: billType === "USD" ? null : `$${record.priceUS}`
                                    })
                                ]
                            })
                        })
                })
        },
        {
            title: headerRenderer("市值", "text-[#B4B1C1] font-[500] text-[14px]", true),
            dataIndex: "marketCap",
            align: "right",
            sorter: (a, b)=>sorter(a, b, "marketCap"),
            render: (text, record)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_pc_market__WEBPACK_IMPORTED_MODULE_8__.BillContext.Consumer, {
                    children: (billType)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-row justify-end",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-[600] self-center ml-2",
                                        children: text
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-[12px] text-[#656277]",
                                        children: billType === "USD" ? null : `$${record.priceUS}`
                                    })
                                ]
                            })
                        })
                })
        }
    ];
};
const EmptyPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full h-full text-center flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: _components_Svg_empty_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"].src */ .Z.src,
                alt: "",
                className: "w-[160px] h-[160px] self-center mt-[30vh]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-[#656277] mt-4",
                children: "暂无自选, 请前往token和NFT板块添加自选项"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-black px-3 py-3 rounded-3xl w-[150px] text-white self-center mt-6 cursor-pointer",
                onClick: ()=>{
                    window.location.href = "/pc/router?tab_key=2";
                },
                children: "添加自选"
            })
        ]
    });
};
const nftColumns = (data, setData)=>{
    return [
        {
            title: headerRenderer("系列", "text-[#B4B1C1] font-[500] text-[14px] ml-10"),
            dataIndex: "token",
            width: "25%",
            render: (text, record)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row ml-2 cursor-pointer",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "self-center cursor-pointer",
                            onClick: ()=>{
                                if (data.map((e)=>e.index).includes(record.index)) {
                                    setData(data.filter((e)=>e.index !== record.index));
                                } else {
                                    setData(data.concat(record));
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: data.map((e)=>e.index).includes(record.index) ? _components_Svg_StarSelected_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src : _components_Svg_NewStar_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"].src */ .Z.src,
                                width: 15,
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_9__/* .Image */ .Ee, {
                            src: record.icon,
                            className: "ml-4 h-[1.7rem] w-[1.7rem] self-center"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "font-[600] self-center ml-2",
                            children: text
                        })
                    ]
                })
        },
        {
            title: headerRenderer("价格", "text-[#B4B1C1] font-[500] text-[14px]", true),
            dataIndex: "price",
            align: "right",
            sorter: (a, b)=>sorter(a, b, "price"),
            render: (text, record)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row justify-end",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_9__/* .Image */ .Ee, {
                                src: record.tokenIcon,
                                className: "h-[1rem] w-[1rem] self-center"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-[600] self-center ml-2",
                                children: text
                            })
                        ]
                    })
                })
        },
        {
            title: headerRenderer("1h", "text-[#B4B1C1] font-[500] text-[14px]"),
            dataIndex: "1H",
            align: "right",
            sorter: (a, b)=>sorter(a, b, "1H"),
            render: (text)=>// eslint-disable-next-line max-len
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `font-[600] ${!text.startsWith("-") ? "text-green-500" : "text-red-500 font-medium"}`,
                    children: text
                })
        },
        {
            title: headerRenderer("24h", "text-[#B4B1C1] font-[500] text-[14px]"),
            dataIndex: "24H",
            align: "right",
            sorter: (a, b)=>sorter(a, b, "24H"),
            render: (text)=>// eslint-disable-next-line max-len
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `font-[600] ${!text.startsWith("-") ? "text-green-500" : "text-red-500 font-medium"}`,
                    children: text
                })
        },
        {
            title: headerRenderer("7d", "text-[#B4B1C1] font-[500] text-[14px]"),
            dataIndex: "7D",
            align: "right",
            sorter: (a, b)=>sorter(a, b, "7D"),
            render: (text)=>// eslint-disable-next-line max-len
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `font-[600] ${!text.startsWith("-") ? "text-green-500" : "text-red-500 font-medium"}`,
                    children: text
                })
        },
        {
            title: headerRenderer("交易额", "text-[#B4B1C1] font-[500] text-[14px]", true),
            dataIndex: "volumeFM",
            align: "right",
            sorter: (a, b)=>sorter(a, b, "volumeFM"),
            render: (text, record)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row justify-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_9__/* .Image */ .Ee, {
                                    src: record.tokenIcon,
                                    className: "h-[1rem] w-[1rem] self-center"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-[600] self-center ml-2",
                                    children: text
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "font-[600]",
                            children: record.volume
                        })
                    ]
                })
        },
        {
            title: headerRenderer("市值", "text-[#B4B1C1] font-[500] text-[14px]", true),
            dataIndex: "marketCapFM",
            align: "right",
            sorter: (a, b)=>sorter(a, b, "marketCapFM"),
            render: (text, record)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row justify-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_9__/* .Image */ .Ee, {
                                    src: record.tokenIcon,
                                    className: "h-[1rem] w-[1rem] self-center"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-[600] self-center ml-2",
                                    children: text
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "font-[600]",
                            children: record.marketCap
                        })
                    ]
                })
        }
    ];
};
const TabPane1 = ()=>{
    const [TokenData, setTokenData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [NFTData, setNFTData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_src_utils_request__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
            url: _src_utils_api__WEBPACK_IMPORTED_MODULE_6__/* ["default"].MARKET_SELF_TOKEN */ .Z.MARKET_SELF_TOKEN,
            method: "GET",
            params: {},
            timeout: 5000,
            authorization: false
        }).then((res)=>{
            setTokenData(res.list);
        });
        (0,_src_utils_request__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
            url: _src_utils_api__WEBPACK_IMPORTED_MODULE_6__/* ["default"].MARKET_SELF_TOKEN */ .Z.MARKET_SELF_TOKEN,
            method: "GET",
            params: {},
            timeout: 5000,
            authorization: false
        }).then((res)=>{
            setNFTData(res.list);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: TokenData.length !== 0 || NFTData.length !== 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InfoTable_InfoTable__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: "TOKEN",
                    data: TokenData,
                    columns: tokenColumns(TokenData, setTokenData)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InfoTable_InfoTable__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: "NFT",
                    data: NFTData,
                    columns: nftColumns(NFTData, setNFTData)
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmptyPage, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabPane1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94865:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WD": () => (/* binding */ BlockList),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Card */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13233);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13831);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_utils_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28565);
/* harmony import */ var _src_utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62400);
/* harmony import */ var _InfoTable_InfoTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46386);
/* harmony import */ var _DndList_DndList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5942);
/* harmony import */ var _TabPane1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18544);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_utils_request__WEBPACK_IMPORTED_MODULE_3__, _TabPane1__WEBPACK_IMPORTED_MODULE_7__]);
([_src_utils_request__WEBPACK_IMPORTED_MODULE_3__, _TabPane1__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// TOKEN










const mockBlock = [
    "Block_1",
    "Block_2",
    "Block_3",
    "Block_4",
    "Block_5",
    "Block_6",
    "Block_7"
];
const mockAddBlock = [
    "Block_8",
    "Block_9",
    "Block_10",
    "Block_11",
    "Block_12",
    "Block_13",
    "Block_14"
];
const BlockList = ({ data , current , setCurrent , setModal  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-row",
        children: [
            data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>{
                        setCurrent(item);
                    },
                    className: `
                    rounded-3xl border-[1px] border-[#E9ECF2] px-3 py-[1px] font-normal text-[14px] mr-2 cursor-pointer
                    ${current === item ? "bg-black text-white" : ""}
                `,
                    children: item
                }, item)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>{
                    setModal(true);
                },
                className: `
                rounded-3xl border-[1px] border-[#E9ECF2] px-4 mr-2 cursor-pointer flex flex-col justify-center
            `,
                children: "+"
            })
        ]
    });
};
const Card = ({ item , operationText  })=>{
    return(// eslint-disable-next-line max-len
    /*#__PURE__*/ _jsxs("div", {
        className: "flex flex-row h-[3rem] px-3 mx-4 bg-gray-200 hover:bg-gray-100 rounded-lg cursor-pointer justify-between",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "flex flex-row",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "self-center",
                        children: /*#__PURE__*/ _jsx(IconHome, {
                            size: "extra-large",
                            className: ""
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "self-center ml-2",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "font-bold",
                            children: item
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "font-semibold text-lg self-center",
                children: operationText
            })
        ]
    }));
};
const TabPane2 = ()=>{
    const [TokenData, setTokenData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [myToken, setMyToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [block, setBlock] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mockBlock);
    const [addBlock, setAddBlock] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mockAddBlock);
    const [blockModal, setBlockModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Block_1"); // current block
    const handleAdd = (item)=>{
        if (!block.includes(item)) {
            setBlock(block.concat(item));
            setAddBlock(addBlock.filter((e)=>e !== item));
        }
    };
    const handleDelete = (item)=>{
        if (!addBlock.includes(item)) {
            setAddBlock(addBlock.concat(item));
            setBlock(block.filter((e)=>e !== item));
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_src_utils_request__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
            url: _src_utils_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].MARKET_TOKEN */ .Z.MARKET_TOKEN,
            method: "GET",
            params: {},
            timeout: 5000,
            authorization: false
        }).then((res)=>{
            setTokenData(res.list);
        });
        (0,_src_utils_request__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
            url: _src_utils_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].MARKET_SELF_TOKEN */ .Z.MARKET_SELF_TOKEN,
            method: "GET",
            params: {},
            timeout: 5000,
            authorization: false
        }).then((res)=>{
            setMyToken(res.list);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InfoTable_InfoTable__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlockList, {
                    data: block,
                    current: current,
                    setCurrent: setCurrent,
                    setModal: setBlockModal
                }),
                data: TokenData,
                columns: (0,_TabPane1__WEBPACK_IMPORTED_MODULE_7__/* .tokenColumns */ .zu)(myToken, setMyToken)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_8__/* .Modal */ .u_, {
                style: {
                    position: "relative",
                    left: "150px"
                },
                width: "70%",
                visible: blockModal,
                footer: null,
                onCancel: ()=>{
                    setBlockModal(false);
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.DndContext, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-xl font-bold",
                                children: "板块管理"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-row my-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "self-end font-bold",
                                                children: "板块自选"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " text-xs text-gray-400 self-end ml-2",
                                                children: "长按拖动板块，调整顺序（固定板块不可修改）"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DndList_DndList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        data: block,
                                        setAddBlock: setBlock,
                                        onClickHandler: handleDelete
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "my-6 font-bold",
                                        children: "板块推荐"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DndList_DndList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        data: addBlock,
                                        setAddBlock: setAddBlock,
                                        onClickHandler: handleAdd
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabPane2);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52712:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13233);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13831);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62400);
/* harmony import */ var _src_utils_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28565);
/* harmony import */ var _InfoTable_InfoTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46386);
/* harmony import */ var _DndList_DndList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5942);
/* harmony import */ var _TabPane1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18544);
/* harmony import */ var _TabPane2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94865);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_utils_request__WEBPACK_IMPORTED_MODULE_4__, _TabPane1__WEBPACK_IMPORTED_MODULE_7__, _TabPane2__WEBPACK_IMPORTED_MODULE_8__]);
([_src_utils_request__WEBPACK_IMPORTED_MODULE_4__, _TabPane1__WEBPACK_IMPORTED_MODULE_7__, _TabPane2__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// NFT










const mockBlock = [
    "Block_1",
    "Block_2",
    "Block_3",
    "Block_4",
    "Block_5",
    "Block_6",
    "Block_7"
];
const mockAddBlock = [
    "Block_8",
    "Block_9",
    "Block_10",
    "Block_11",
    "Block_12",
    "Block_13",
    "Block_14"
];
const TabPane3 = ()=>{
    const [NFTData, setNFTData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [myNFT, setMyNFT] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [block, setBlock] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mockBlock);
    const [addBlock, setAddBlock] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mockAddBlock);
    const [blockModal, setBlockModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Block_1"); // current block
    const handleAdd = (item)=>{
        if (!block.includes(item)) {
            setBlock(block.concat(item));
            setAddBlock(addBlock.filter((e)=>e !== item));
        }
    };
    const handleDelete = (item)=>{
        if (!addBlock.includes(item)) {
            setAddBlock(addBlock.concat(item));
            setBlock(block.filter((e)=>e !== item));
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_src_utils_request__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
            url: _src_utils_api__WEBPACK_IMPORTED_MODULE_3__/* ["default"].MARKET_NFT */ .Z.MARKET_NFT,
            method: "GET",
            params: {},
            timeout: 5000,
            authorization: false
        }).then((res)=>{
            setNFTData(res.list);
        });
        (0,_src_utils_request__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
            url: _src_utils_api__WEBPACK_IMPORTED_MODULE_3__/* ["default"].MARKET_SELF_NFT */ .Z.MARKET_SELF_NFT,
            method: "GET",
            params: {},
            timeout: 5000,
            authorization: false
        }).then((res)=>{
            setMyNFT(res.list);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InfoTable_InfoTable__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TabPane2__WEBPACK_IMPORTED_MODULE_8__/* .BlockList */ .WD, {
                    data: block,
                    current: current,
                    setCurrent: setCurrent,
                    setModal: setBlockModal
                }),
                data: NFTData,
                columns: (0,_TabPane1__WEBPACK_IMPORTED_MODULE_7__/* .nftColumns */ .j0)(myNFT, setMyNFT)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_9__/* .Modal */ .u_, {
                style: {
                    position: "relative",
                    left: "150px"
                },
                width: "70%",
                visible: blockModal,
                footer: null,
                onCancel: ()=>{
                    setBlockModal(false);
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.DndContext, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-xl font-bold",
                                children: "板块管理"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-row my-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "self-end font-bold",
                                                children: "板块自选"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " text-xs text-gray-400 self-end ml-2",
                                                children: "长按拖动板块，调整顺序（固定板块不可修改）"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DndList_DndList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        data: block,
                                        setAddBlock: setBlock,
                                        onClickHandler: handleDelete
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "my-6 font-bold",
                                        children: "板块推荐"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DndList_DndList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        data: addBlock,
                                        setAddBlock: setAddBlock,
                                        onClickHandler: handleAdd
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabPane3);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44542:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillContext": () => (/* binding */ BillContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13233);
/* harmony import */ var _douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77253);
/* harmony import */ var _douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Pc_Market_TabPanes_TabPane1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18544);
/* harmony import */ var _components_Pc_Market_TabPanes_TabPane2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94865);
/* harmony import */ var _components_Pc_Market_TabPanes_TabPane3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52712);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Pc_Market_TabPanes_TabPane1__WEBPACK_IMPORTED_MODULE_3__, _components_Pc_Market_TabPanes_TabPane2__WEBPACK_IMPORTED_MODULE_4__, _components_Pc_Market_TabPanes_TabPane3__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Pc_Market_TabPanes_TabPane1__WEBPACK_IMPORTED_MODULE_3__, _components_Pc_Market_TabPanes_TabPane2__WEBPACK_IMPORTED_MODULE_4__, _components_Pc_Market_TabPanes_TabPane3__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// import styles from './index.modules.less';
const mockBill = [
    {
        index: 0,
        bill: "CNY",
        name: "China RMB"
    },
    {
        index: 1,
        bill: "USD",
        name: "United State Dollar"
    },
    {
        index: 2,
        bill: "USD2",
        name: "United State Dollar"
    },
    {
        index: 3,
        bill: "USD3",
        name: "United State Dollar"
    },
    {
        index: 4,
        bill: "USD4",
        name: "United State Dollar"
    }
];
const BillTypeChoose = ({ setBillModal , billType  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        // eslint-disable-next-line max-len
        className: "self-end rounded-[15px] px-3 py-1 h-[30px] flex flex-row justify-center cursor-pointer border-[1px]",
        onClick: ()=>{
            setBillModal(true);
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "font-[500] text-[14px]",
                children: billType
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_6__.IconTriangleDown, {
                className: "self-center ml-1",
                size: "extra-small"
            })
        ]
    });
};
const BillCard = ({ item , setBill  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-row h-[3.5rem] px-3 mt-5 mr-4 hover:bg-gray-200 rounded-lg cursor-pointer",
        onClick: setBill,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "self-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_6__.IconHome, {
                    size: "extra-large",
                    className: ""
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "self-center ml-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-bold",
                        children: item.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-xs text-gray-500",
                        children: item.bill
                    })
                ]
            })
        ]
    });
};
const BillContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)("CNY");
const MarketIndex = ()=>{
    const [BillModal, setBillModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [billType, setBilltype] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("CNY");
    const [currentKey, setCurrentKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"); // 1：自选；2：TOKEN；3：NFT
    const location = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (typeof location.query.tab_key === "string") {
            setCurrentKey(location.query.tab_key);
        }
    }, [
        location.query.tab_key
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BillContext.Provider, {
        value: billType,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "py-7 pl-8 pr-12 h-full w-full ml-[19%]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_7__/* .Tabs */ .mQ, {
                    defaultActiveKey: "1",
                    activeKey: currentKey,
                    onChange: (e)=>{
                        setCurrentKey(e);
                    },
                    type: "card",
                    renderTabBar: (tabBarProps, DefaultTabBar)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row justify-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DefaultTabBar, {
                                    ...tabBarProps
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BillTypeChoose, {
                                    setBillModal: setBillModal,
                                    billType: billType
                                })
                            ]
                        });
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_7__/* .TabPane */ .Jm, {
                            tab: "自选",
                            itemKey: "1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pc_Market_TabPanes_TabPane1__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_7__/* .TabPane */ .Jm, {
                            tab: "TOKEN",
                            itemKey: "2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pc_Market_TabPanes_TabPane2__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_7__/* .TabPane */ .Jm, {
                            tab: "NFT",
                            itemKey: "3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pc_Market_TabPanes_TabPane3__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_7__/* .Modal */ .u_, {
                    style: {
                        position: "relative",
                        left: "150px"
                    },
                    width: "70%",
                    visible: BillModal,
                    footer: null,
                    onCancel: ()=>{
                        setBillModal(false);
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-gray-500 mt-6",
                                        children: "热门货币"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "grid grid-cols-4 w-full px-4",
                                        children: mockBill.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BillCard, {
                                                item: item,
                                                setBill: ()=>{
                                                    setBilltype(item.bill);
                                                    setBillModal(false);
                                                }
                                            }, item.index))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-gray-500 mt-6",
                                        children: "法定货币"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "grid grid-cols-4 w-full px-4",
                                        children: mockBill.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BillCard, {
                                                item: item,
                                                setBill: ()=>{
                                                    setBilltype(item.bill);
                                                    setBillModal(false);
                                                }
                                            }, item.index))
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarketIndex);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API = {
    MARKET_SELF_TOKEN: "/api/v1/market/self/token",
    MARKET_SELF_NFT: "/api/v1/market/self/nft",
    MARKET_TOKEN: "/api/v1/market/token",
    MARKET_NFT: "/api/v1/market/nft"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);


/***/ }),

/***/ 28565:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ request)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99648);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * @file request
 * @author mickey.nbut@gmail.com
 */ 


const defaultConfig = {
    // baseURL: HOST,
    baseURL: process.env.HOST || "https://mock.apifox.cn/m1/2507514-0-default",
    timeout: 5000,
    withCredentials: true,
    method: "GET",
    authorization: true
};
function request(config) {
    const method = config?.method || "GET";
    let userConfig = config;
    userConfig = Object.assign({}, config, method === "POST" ? {
        data: config.params
    } : {
        params: config.params
    });
    if (method === "POST") {
        userConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.omit)(userConfig, "params");
    }
    const axiosConfig = Object.assign({}, defaultConfig, userConfig);
    const ins = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create(axiosConfig);
    ins.interceptors.request.use((config)=>{
        if (!config.headers["content-type"]) {
            if (config.method === "POST") {
                config.headers["content-type"] = "application/json";
            } else {
                config.headers["content-type"] = "application/x-www-form-urlencoded";
                config.data = qs__WEBPACK_IMPORTED_MODULE_2___default().stringify(config.data);
            }
        }
        // 验签
        // const ts = parseInt(String(new Date().getTime() / 1000));
        // const paramsbase64 = base64.encode(JSON.stringify(config.data));
        // const signature = stringMd5(`${config.url}${ts}${paramsbase64}${SALT}`);
        // config.headers.authorization = `${ts}.${paramsbase64}.${signature}`;
        return config;
    });
    ins.interceptors.response.use((res)=>{
        return res.data.data;
    }, (err)=>{
        console.error("err ====> ", err);
    });
    if (axiosConfig.method === "GET") {
        return ins.get(axiosConfig.url, axiosConfig);
    } else {
        return ins.post(axiosConfig.url, axiosConfig);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;