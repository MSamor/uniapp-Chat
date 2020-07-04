(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*************************************!*\
  !*** D:/学习/uni-app/实例/聊天模板/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 9));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUwsWUFBSjtBQUNMRyxZQURLLEVBQVo7O0FBR0FFLEdBQUcsQ0FBQ0MsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5cclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcclxuICAgIC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************************!*\
  !*** D:/学习/uni-app/实例/聊天模板/pages.json ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/HM-chat/HM-chat', function () {return Vue.extend(__webpack_require__(/*! pages/HM-chat/HM-chat.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!*******************************************************************!*\
  !*** D:/学习/uni-app/实例/聊天模板/pages/HM-chat/HM-chat.vue?mpType=page ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HM_chat_vue_vue_type_template_id_1b69f498_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HM-chat.vue?vue&type=template&id=1b69f498&mpType=page */ 3);\n/* harmony import */ var _HM_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HM-chat.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HM_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HM_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _HM_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _HM_chat_vue_vue_type_template_id_1b69f498_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _HM_chat_vue_vue_type_template_id_1b69f498_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _HM_chat_vue_vue_type_template_id_1b69f498_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/HM-chat/HM-chat.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQzBNO0FBQzFNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vSE0tY2hhdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI2OWY0OTgmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hNLWNoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hNLWNoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUU6XFxcXOi/hembt+S4i+i9vVxcXFxIQnVpbGRlclguMi4yLjIuMjAxOTA4MTYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL0hNLWNoYXQvSE0tY2hhdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*************************************************************************************************!*\
  !*** D:/学习/uni-app/实例/聊天模板/pages/HM-chat/HM-chat.vue?vue&type=template&id=1b69f498&mpType=page ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HM_chat_vue_vue_type_template_id_1b69f498_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./HM-chat.vue?vue&type=template&id=1b69f498&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HM_chat_vue_vue_type_template_id_1b69f498_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HM_chat_vue_vue_type_template_id_1b69f498_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HM_chat_vue_vue_type_template_id_1b69f498_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HM_chat_vue_vue_type_template_id_1b69f498_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/学习/uni-app/实例/聊天模板/pages/HM-chat/HM-chat.vue?vue&type=template&id=1b69f498&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      {
        staticClass: _vm._$s(1, "sc", "content"),
        attrs: { _i: 1 },
        on: { touchstart: _vm.hideDrawer }
      },
      [
        _c(
          "scroll-view",
          {
            staticClass: _vm._$s(2, "sc", "msg-list"),
            attrs: {
              "scroll-with-animation": _vm._$s(
                2,
                "a-scroll-with-animation",
                _vm.scrollAnimation
              ),
              "scroll-top": _vm._$s(2, "a-scroll-top", _vm.scrollTop),
              "scroll-into-view": _vm._$s(
                2,
                "a-scroll-into-view",
                _vm.scrollToView
              ),
              _i: 2
            },
            on: { scrolltoupper: _vm.loadHistory }
          },
          [
            _c(
              "view",
              { staticClass: _vm._$s(3, "sc", "loading"), attrs: { _i: 3 } },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(4, "sc", "spinner"),
                    attrs: { _i: 4 }
                  },
                  [
                    _c("view", {
                      staticClass: _vm._$s(5, "sc", "rect1"),
                      attrs: { _i: 5 }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(6, "sc", "rect2"),
                      attrs: { _i: 6 }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(7, "sc", "rect3"),
                      attrs: { _i: 7 }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(8, "sc", "rect4"),
                      attrs: { _i: 8 }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(9, "sc", "rect5"),
                      attrs: { _i: 9 }
                    })
                  ]
                )
              ]
            ),
            _vm._l(_vm._$s(10, "f", { forItems: _vm.msgList }), function(
              row,
              index,
              $20,
              $30
            ) {
              return _c(
                "view",
                {
                  key: _vm._$s(10, "f", { forIndex: $20, key: index }),
                  staticClass: _vm._$s("10-" + $30, "sc", "row"),
                  attrs: {
                    id: _vm._$s("10-" + $30, "a-id", "msg" + row.msg.id),
                    _i: "10-" + $30
                  }
                },
                [
                  _vm._$s("11-" + $30, "i", row.type == "system")
                    ? [
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s("12-" + $30, "sc", "system"),
                            attrs: { _i: "12-" + $30 }
                          },
                          [
                            _vm._$s("13-" + $30, "i", row.msg.type == "text")
                              ? _c(
                                  "view",
                                  {
                                    staticClass: _vm._$s(
                                      "13-" + $30,
                                      "sc",
                                      "text"
                                    ),
                                    attrs: { _i: "13-" + $30 }
                                  },
                                  [
                                    _vm._v(
                                      _vm._$s(
                                        "13-" + $30,
                                        "t0-0",
                                        _vm._s(row.msg.content.text)
                                      )
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]
                        )
                      ]
                    : _vm._e(),
                  _vm._$s("14-" + $30, "i", row.type == "user")
                    ? [
                        _vm._$s(
                          "15-" + $30,
                          "i",
                          row.msg.userinfo.uid == _vm.myuid
                        )
                          ? _c(
                              "view",
                              {
                                staticClass: _vm._$s("15-" + $30, "sc", "my"),
                                attrs: { _i: "15-" + $30 }
                              },
                              [
                                _c(
                                  "view",
                                  {
                                    staticClass: _vm._$s(
                                      "16-" + $30,
                                      "sc",
                                      "left"
                                    ),
                                    attrs: { _i: "16-" + $30 }
                                  },
                                  [
                                    _vm._$s(
                                      "17-" + $30,
                                      "i",
                                      row.msg.type == "text"
                                    )
                                      ? _c(
                                          "view",
                                          {
                                            staticClass: _vm._$s(
                                              "17-" + $30,
                                              "sc",
                                              "bubble"
                                            ),
                                            attrs: { _i: "17-" + $30 }
                                          },
                                          [
                                            _c("rich-text", {
                                              attrs: {
                                                nodes: _vm._$s(
                                                  "18-" + $30,
                                                  "a-nodes",
                                                  row.msg.content.text
                                                ),
                                                _i: "18-" + $30
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._$s(
                                      "19-" + $30,
                                      "i",
                                      row.msg.type == "voice"
                                    )
                                      ? _c(
                                          "view",
                                          {
                                            staticClass: _vm._$s(
                                              "19-" + $30,
                                              "sc",
                                              "bubble voice"
                                            ),
                                            class: _vm._$s(
                                              "19-" + $30,
                                              "c",
                                              _vm.playMsgid == row.msg.id
                                                ? "play"
                                                : ""
                                            ),
                                            attrs: { _i: "19-" + $30 },
                                            on: {
                                              click: function($event) {
                                                return _vm.playVoice(row.msg)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "view",
                                              {
                                                staticClass: _vm._$s(
                                                  "20-" + $30,
                                                  "sc",
                                                  "length"
                                                ),
                                                attrs: { _i: "20-" + $30 }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._$s(
                                                    "20-" + $30,
                                                    "t0-0",
                                                    _vm._s(
                                                      row.msg.content.length
                                                    )
                                                  )
                                                )
                                              ]
                                            ),
                                            _c("view", {
                                              staticClass: _vm._$s(
                                                "21-" + $30,
                                                "sc",
                                                "icon my-voice"
                                              ),
                                              attrs: { _i: "21-" + $30 }
                                            })
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._$s(
                                      "22-" + $30,
                                      "i",
                                      row.msg.type == "img"
                                    )
                                      ? _c(
                                          "view",
                                          {
                                            staticClass: _vm._$s(
                                              "22-" + $30,
                                              "sc",
                                              "bubble img"
                                            ),
                                            attrs: { _i: "22-" + $30 },
                                            on: {
                                              click: function($event) {
                                                return _vm.showPic(row.msg)
                                              }
                                            }
                                          },
                                          [
                                            _c("image", {
                                              style: _vm._$s("23-" + $30, "s", {
                                                width: row.msg.content.w + "px",
                                                height: row.msg.content.h + "px"
                                              }),
                                              attrs: {
                                                src: _vm._$s(
                                                  "23-" + $30,
                                                  "a-src",
                                                  row.msg.content.url
                                                ),
                                                _i: "23-" + $30
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                ),
                                _c(
                                  "view",
                                  {
                                    staticClass: _vm._$s(
                                      "24-" + $30,
                                      "sc",
                                      "right"
                                    ),
                                    attrs: { _i: "24-" + $30 }
                                  },
                                  [
                                    _c("image", {
                                      attrs: {
                                        src: _vm._$s(
                                          "25-" + $30,
                                          "a-src",
                                          row.msg.userinfo.face
                                        ),
                                        _i: "25-" + $30
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._$s(
                          "26-" + $30,
                          "i",
                          row.msg.userinfo.uid != _vm.myuid
                        )
                          ? _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "26-" + $30,
                                  "sc",
                                  "other"
                                ),
                                attrs: { _i: "26-" + $30 }
                              },
                              [
                                _c(
                                  "view",
                                  {
                                    staticClass: _vm._$s(
                                      "27-" + $30,
                                      "sc",
                                      "left"
                                    ),
                                    attrs: { _i: "27-" + $30 }
                                  },
                                  [
                                    _c("image", {
                                      attrs: {
                                        src: _vm._$s(
                                          "28-" + $30,
                                          "a-src",
                                          row.msg.userinfo.face
                                        ),
                                        _i: "28-" + $30
                                      }
                                    })
                                  ]
                                ),
                                _c(
                                  "view",
                                  {
                                    staticClass: _vm._$s(
                                      "29-" + $30,
                                      "sc",
                                      "right"
                                    ),
                                    attrs: { _i: "29-" + $30 }
                                  },
                                  [
                                    _c(
                                      "view",
                                      {
                                        staticClass: _vm._$s(
                                          "30-" + $30,
                                          "sc",
                                          "username"
                                        ),
                                        attrs: { _i: "30-" + $30 }
                                      },
                                      [
                                        _c(
                                          "view",
                                          {
                                            staticClass: _vm._$s(
                                              "31-" + $30,
                                              "sc",
                                              "name"
                                            ),
                                            attrs: { _i: "31-" + $30 }
                                          },
                                          [
                                            _vm._v(
                                              _vm._$s(
                                                "31-" + $30,
                                                "t0-0",
                                                _vm._s(
                                                  row.msg.userinfo.username
                                                )
                                              )
                                            )
                                          ]
                                        ),
                                        _c(
                                          "view",
                                          {
                                            staticClass: _vm._$s(
                                              "32-" + $30,
                                              "sc",
                                              "time"
                                            ),
                                            attrs: { _i: "32-" + $30 }
                                          },
                                          [
                                            _vm._v(
                                              _vm._$s(
                                                "32-" + $30,
                                                "t0-0",
                                                _vm._s(row.msg.time)
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._$s(
                                      "33-" + $30,
                                      "i",
                                      row.msg.type == "text"
                                    )
                                      ? _c(
                                          "view",
                                          {
                                            staticClass: _vm._$s(
                                              "33-" + $30,
                                              "sc",
                                              "bubble"
                                            ),
                                            attrs: { _i: "33-" + $30 }
                                          },
                                          [
                                            _c("rich-text", {
                                              attrs: {
                                                nodes: _vm._$s(
                                                  "34-" + $30,
                                                  "a-nodes",
                                                  row.msg.content.text
                                                ),
                                                _i: "34-" + $30
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._$s(
                                      "35-" + $30,
                                      "i",
                                      row.msg.type == "voice"
                                    )
                                      ? _c(
                                          "view",
                                          {
                                            staticClass: _vm._$s(
                                              "35-" + $30,
                                              "sc",
                                              "bubble voice"
                                            ),
                                            class: _vm._$s(
                                              "35-" + $30,
                                              "c",
                                              _vm.playMsgid == row.msg.id
                                                ? "play"
                                                : ""
                                            ),
                                            attrs: { _i: "35-" + $30 },
                                            on: {
                                              click: function($event) {
                                                return _vm.playVoice(row.msg)
                                              }
                                            }
                                          },
                                          [
                                            _c("view", {
                                              staticClass: _vm._$s(
                                                "36-" + $30,
                                                "sc",
                                                "icon other-voice"
                                              ),
                                              attrs: { _i: "36-" + $30 }
                                            }),
                                            _c(
                                              "view",
                                              {
                                                staticClass: _vm._$s(
                                                  "37-" + $30,
                                                  "sc",
                                                  "length"
                                                ),
                                                attrs: { _i: "37-" + $30 }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._$s(
                                                    "37-" + $30,
                                                    "t0-0",
                                                    _vm._s(
                                                      row.msg.content.length
                                                    )
                                                  )
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._$s(
                                      "38-" + $30,
                                      "i",
                                      row.msg.type == "img"
                                    )
                                      ? _c(
                                          "view",
                                          {
                                            staticClass: _vm._$s(
                                              "38-" + $30,
                                              "sc",
                                              "bubble img"
                                            ),
                                            attrs: { _i: "38-" + $30 },
                                            on: {
                                              click: function($event) {
                                                return _vm.showPic(row.msg)
                                              }
                                            }
                                          },
                                          [
                                            _c("image", {
                                              style: _vm._$s("39-" + $30, "s", {
                                                width: row.msg.content.w + "px",
                                                height: row.msg.content.h + "px"
                                              }),
                                              attrs: {
                                                src: _vm._$s(
                                                  "39-" + $30,
                                                  "a-src",
                                                  row.msg.content.url
                                                ),
                                                _i: "39-" + $30
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    : _vm._e()
                ],
                2
              )
            })
          ],
          2
        )
      ]
    ),
    _c(
      "view",
      {
        staticClass: _vm._$s(40, "sc", "popup-layer"),
        class: _vm._$s(40, "c", _vm.popupLayerClass),
        attrs: { _i: 40 },
        on: {
          touchmove: function($event) {
            $event.stopPropagation()
            $event.preventDefault()
            return _vm.discard($event)
          }
        }
      },
      [
        _c(
          "swiper",
          {
            staticClass: _vm._$s(41, "sc", "emoji-swiper"),
            class: _vm._$s(41, "c", { hidden: _vm.hideEmoji }),
            attrs: { _i: 41 }
          },
          _vm._l(_vm._$s(42, "f", { forItems: _vm.emojiList }), function(
            page,
            pid,
            $21,
            $31
          ) {
            return _c(
              "swiper-item",
              { key: _vm._$s(42, "f", { forIndex: $21, key: pid }) },
              _vm._l(_vm._$s(43 + "-" + $31, "f", { forItems: page }), function(
                em,
                eid,
                $22,
                $32
              ) {
                return _c(
                  "view",
                  {
                    key: _vm._$s(43 + "-" + $31, "f", {
                      forIndex: $22,
                      key: eid
                    }),
                    attrs: { _i: "43-" + $31 + "-" + $32 },
                    on: {
                      click: function($event) {
                        return _vm.addEmoji(em)
                      }
                    }
                  },
                  [
                    _c("image", {
                      attrs: {
                        src: _vm._$s(
                          "44-" + $31 + "-" + $32,
                          "a-src",
                          "/static/img/emoji/" + em.url
                        ),
                        _i: "44-" + $31 + "-" + $32
                      }
                    })
                  ]
                )
              }),
              0
            )
          }),
          0
        ),
        _c(
          "view",
          {
            staticClass: _vm._$s(45, "sc", "more-layer"),
            class: _vm._$s(45, "c", { hidden: _vm.hideMore }),
            attrs: { _i: 45 }
          },
          [
            _c(
              "view",
              { staticClass: _vm._$s(46, "sc", "list"), attrs: { _i: 46 } },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(47, "sc", "box"),
                    attrs: { _i: 47 },
                    on: { click: _vm.chooseImage }
                  },
                  [
                    _c("view", {
                      staticClass: _vm._$s(48, "sc", "icon tupian2"),
                      attrs: { _i: 48 }
                    })
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(49, "sc", "box"),
                    attrs: { _i: 49 },
                    on: { click: _vm.camera }
                  },
                  [
                    _c("view", {
                      staticClass: _vm._$s(50, "sc", "icon paizhao"),
                      attrs: { _i: 50 }
                    })
                  ]
                )
              ]
            )
          ]
        )
      ]
    ),
    _c(
      "view",
      {
        staticClass: _vm._$s(51, "sc", "input-box"),
        class: _vm._$s(51, "c", _vm.popupLayerClass),
        attrs: { _i: 51 },
        on: {
          touchmove: function($event) {
            $event.stopPropagation()
            $event.preventDefault()
            return _vm.discard($event)
          }
        }
      },
      [
        _c(
          "view",
          { staticClass: _vm._$s(52, "sc", "voice"), attrs: { _i: 52 } },
          [
            _c("view", {
              staticClass: _vm._$s(53, "sc", "icon"),
              class: _vm._$s(53, "c", _vm.isVoice ? "jianpan" : "yuyin"),
              attrs: { _i: 53 },
              on: { click: _vm.switchVoice }
            })
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(54, "sc", "textbox"), attrs: { _i: 54 } },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(55, "sc", "voice-mode"),
                class: _vm._$s(55, "c", [
                  _vm.isVoice ? "" : "hidden",
                  _vm.recording ? "recording" : ""
                ]),
                attrs: { _i: 55 },
                on: {
                  touchstart: _vm.voiceBegin,
                  touchmove: function($event) {
                    $event.stopPropagation()
                    $event.preventDefault()
                    return _vm.voiceIng($event)
                  },
                  touchend: _vm.voiceEnd,
                  touchcancel: _vm.voiceCancel
                }
              },
              [_vm._v(_vm._$s(55, "t0-0", _vm._s(_vm.voiceTis)))]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(56, "sc", "text-mode"),
                class: _vm._$s(56, "c", _vm.isVoice ? "hidden" : ""),
                attrs: { _i: 56 }
              },
              [
                _c(
                  "view",
                  { staticClass: _vm._$s(57, "sc", "box"), attrs: { _i: 57 } },
                  [
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.textMsg,
                          expression: "textMsg"
                        }
                      ],
                      attrs: { _i: 58 },
                      domProps: { value: _vm._$s(58, "v-model", _vm.textMsg) },
                      on: {
                        focus: _vm.textareaFocus,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.textMsg = $event.target.value
                        }
                      }
                    })
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(59, "sc", "em"),
                    attrs: { _i: 59 },
                    on: { click: _vm.chooseEmoji }
                  },
                  [
                    _c("view", {
                      staticClass: _vm._$s(60, "sc", "icon biaoqing"),
                      attrs: { _i: 60 }
                    })
                  ]
                )
              ]
            )
          ]
        ),
        _c(
          "view",
          {
            staticClass: _vm._$s(61, "sc", "more"),
            attrs: { _i: 61 },
            on: { click: _vm.showMore }
          },
          [
            _c("view", {
              staticClass: _vm._$s(62, "sc", "icon add"),
              attrs: { _i: 62 }
            })
          ]
        ),
        _c(
          "view",
          {
            staticClass: _vm._$s(63, "sc", "send"),
            class: _vm._$s(63, "c", _vm.isVoice ? "hidden" : ""),
            attrs: { _i: 63 },
            on: { click: _vm.sendText }
          },
          [
            _c("view", {
              staticClass: _vm._$s(64, "sc", "btn"),
              attrs: { _i: 64 }
            })
          ]
        )
      ]
    ),
    _c(
      "view",
      {
        staticClass: _vm._$s(65, "sc", "record"),
        class: _vm._$s(65, "c", _vm.recording ? "" : "hidden"),
        attrs: { _i: 65 }
      },
      [
        _c(
          "view",
          {
            staticClass: _vm._$s(66, "sc", "ing"),
            class: _vm._$s(66, "c", _vm.willStop ? "hidden" : ""),
            attrs: { _i: 66 }
          },
          [
            _c("view", {
              staticClass: _vm._$s(67, "sc", "icon luyin2"),
              attrs: { _i: 67 }
            })
          ]
        ),
        _c(
          "view",
          {
            staticClass: _vm._$s(68, "sc", "cancel"),
            class: _vm._$s(68, "c", _vm.willStop ? "" : "hidden"),
            attrs: { _i: 68 }
          },
          [
            _c("view", {
              staticClass: _vm._$s(69, "sc", "icon chehui"),
              attrs: { _i: 69 }
            })
          ]
        ),
        _c(
          "view",
          {
            staticClass: _vm._$s(70, "sc", "tis"),
            class: _vm._$s(70, "c", _vm.willStop ? "change" : ""),
            attrs: { _i: 70 }
          },
          [_vm._v(_vm._$s(70, "t0-0", _vm._s(_vm.recordTis)))]
        )
      ]
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!*******************************************************************************************!*\
  !*** D:/学习/uni-app/实例/聊天模板/pages/HM-chat/HM-chat.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HM_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./HM-chat.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HM_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HM_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HM_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HM_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HM_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlzQixDQUFnQix3c0JBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFFOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYLjIuMi4yLjIwMTkwODE2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYLjIuMi4yLjIwMTkwODE2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFFOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYLjIuMi4yLjIwMTkwODE2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRTpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWC4yLjIuMi4yMDE5MDgxNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hNLWNoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWC4yLjIuMi4yMDE5MDgxNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWC4yLjIuMi4yMDE5MDgxNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRTpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWC4yLjIuMi4yMDE5MDgxNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXOi/hembt+S4i+i9vVxcXFxIQnVpbGRlclguMi4yLjIuMjAxOTA4MTYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ITS1jaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/学习/uni-app/实例/聊天模板/pages/HM-chat/HM-chat.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      //resize\n      resize: false,\n      //文字消息\n      textMsg: '',\n      //消息列表\n      isHistoryLoading: false,\n      scrollAnimation: false,\n      scrollTop: 0,\n      scrollToView: '',\n      msgList: [],\n      msgImgList: [],\n      myuid: 1,\n\n      //录音相关参数\n\n      //H5不能录音\n      RECORDER: uni.getRecorderManager(),\n\n      isVoice: false,\n      voiceTis: '按住 说话',\n      recordTis: \"手指上滑 取消发送\",\n      recording: false,\n      willStop: false,\n      initPoint: { identifier: 0, Y: 0 },\n      recordTimer: null,\n      recordLength: 1,\n\n      //播放语音相关参数\n      AUDIO: uni.createInnerAudioContext(),\n      playMsgid: null,\n      VoiceTimer: null,\n      // 抽屉参数\n      popupLayerClass: '',\n      // more参数\n      hideMore: true,\n      //表情定义\n      hideEmoji: true,\n      emojiList: [\n      [{ \"url\": \"100.gif\", alt: \"[微笑]\" }, { \"url\": \"101.gif\", alt: \"[伤心]\" }, { \"url\": \"102.gif\", alt: \"[美女]\" }, { \"url\": \"103.gif\", alt: \"[发呆]\" }, { \"url\": \"104.gif\", alt: \"[墨镜]\" }, { \"url\": \"105.gif\", alt: \"[哭]\" }, { \"url\": \"106.gif\", alt: \"[羞]\" }, { \"url\": \"107.gif\", alt: \"[哑]\" }, { \"url\": \"108.gif\", alt: \"[睡]\" }, { \"url\": \"109.gif\", alt: \"[哭]\" }, { \"url\": \"110.gif\", alt: \"[囧]\" }, { \"url\": \"111.gif\", alt: \"[怒]\" }, { \"url\": \"112.gif\", alt: \"[调皮]\" }, { \"url\": \"113.gif\", alt: \"[笑]\" }, { \"url\": \"114.gif\", alt: \"[惊讶]\" }, { \"url\": \"115.gif\", alt: \"[难过]\" }, { \"url\": \"116.gif\", alt: \"[酷]\" }, { \"url\": \"117.gif\", alt: \"[汗]\" }, { \"url\": \"118.gif\", alt: \"[抓狂]\" }, { \"url\": \"119.gif\", alt: \"[吐]\" }, { \"url\": \"120.gif\", alt: \"[笑]\" }, { \"url\": \"121.gif\", alt: \"[快乐]\" }, { \"url\": \"122.gif\", alt: \"[奇]\" }, { \"url\": \"123.gif\", alt: \"[傲]\" }],\n      [{ \"url\": \"124.gif\", alt: \"[饿]\" }, { \"url\": \"125.gif\", alt: \"[累]\" }, { \"url\": \"126.gif\", alt: \"[吓]\" }, { \"url\": \"127.gif\", alt: \"[汗]\" }, { \"url\": \"128.gif\", alt: \"[高兴]\" }, { \"url\": \"129.gif\", alt: \"[闲]\" }, { \"url\": \"130.gif\", alt: \"[努力]\" }, { \"url\": \"131.gif\", alt: \"[骂]\" }, { \"url\": \"132.gif\", alt: \"[疑问]\" }, { \"url\": \"133.gif\", alt: \"[秘密]\" }, { \"url\": \"134.gif\", alt: \"[乱]\" }, { \"url\": \"135.gif\", alt: \"[疯]\" }, { \"url\": \"136.gif\", alt: \"[哀]\" }, { \"url\": \"137.gif\", alt: \"[鬼]\" }, { \"url\": \"138.gif\", alt: \"[打击]\" }, { \"url\": \"139.gif\", alt: \"[bye]\" }, { \"url\": \"140.gif\", alt: \"[汗]\" }, { \"url\": \"141.gif\", alt: \"[抠]\" }, { \"url\": \"142.gif\", alt: \"[鼓掌]\" }, { \"url\": \"143.gif\", alt: \"[糟糕]\" }, { \"url\": \"144.gif\", alt: \"[恶搞]\" }, { \"url\": \"145.gif\", alt: \"[什么]\" }, { \"url\": \"146.gif\", alt: \"[什么]\" }, { \"url\": \"147.gif\", alt: \"[累]\" }],\n      [{ \"url\": \"148.gif\", alt: \"[看]\" }, { \"url\": \"149.gif\", alt: \"[难过]\" }, { \"url\": \"150.gif\", alt: \"[难过]\" }, { \"url\": \"151.gif\", alt: \"[坏]\" }, { \"url\": \"152.gif\", alt: \"[亲]\" }, { \"url\": \"153.gif\", alt: \"[吓]\" }, { \"url\": \"154.gif\", alt: \"[可怜]\" }, { \"url\": \"155.gif\", alt: \"[刀]\" }, { \"url\": \"156.gif\", alt: \"[水果]\" }, { \"url\": \"157.gif\", alt: \"[酒]\" }, { \"url\": \"158.gif\", alt: \"[篮球]\" }, { \"url\": \"159.gif\", alt: \"[乒乓]\" }, { \"url\": \"160.gif\", alt: \"[咖啡]\" }, { \"url\": \"161.gif\", alt: \"[美食]\" }, { \"url\": \"162.gif\", alt: \"[动物]\" }, { \"url\": \"163.gif\", alt: \"[鲜花]\" }, { \"url\": \"164.gif\", alt: \"[枯]\" }, { \"url\": \"165.gif\", alt: \"[唇]\" }, { \"url\": \"166.gif\", alt: \"[爱]\" }, { \"url\": \"167.gif\", alt: \"[分手]\" }, { \"url\": \"168.gif\", alt: \"[生日]\" }, { \"url\": \"169.gif\", alt: \"[电]\" }, { \"url\": \"170.gif\", alt: \"[炸弹]\" }, { \"url\": \"171.gif\", alt: \"[刀子]\" }],\n      [{ \"url\": \"172.gif\", alt: \"[足球]\" }, { \"url\": \"173.gif\", alt: \"[瓢虫]\" }, { \"url\": \"174.gif\", alt: \"[翔]\" }, { \"url\": \"175.gif\", alt: \"[月亮]\" }, { \"url\": \"176.gif\", alt: \"[太阳]\" }, { \"url\": \"177.gif\", alt: \"[礼物]\" }, { \"url\": \"178.gif\", alt: \"[抱抱]\" }, { \"url\": \"179.gif\", alt: \"[拇指]\" }, { \"url\": \"180.gif\", alt: \"[贬低]\" }, { \"url\": \"181.gif\", alt: \"[握手]\" }, { \"url\": \"182.gif\", alt: \"[剪刀手]\" }, { \"url\": \"183.gif\", alt: \"[抱拳]\" }, { \"url\": \"184.gif\", alt: \"[勾引]\" }, { \"url\": \"185.gif\", alt: \"[拳头]\" }, { \"url\": \"186.gif\", alt: \"[小拇指]\" }, { \"url\": \"187.gif\", alt: \"[拇指八]\" }, { \"url\": \"188.gif\", alt: \"[食指]\" }, { \"url\": \"189.gif\", alt: \"[ok]\" }, { \"url\": \"190.gif\", alt: \"[情侣]\" }, { \"url\": \"191.gif\", alt: \"[爱心]\" }, { \"url\": \"192.gif\", alt: \"[蹦哒]\" }, { \"url\": \"193.gif\", alt: \"[颤抖]\" }, { \"url\": \"194.gif\", alt: \"[怄气]\" }, { \"url\": \"195.gif\", alt: \"[跳舞]\" }],\n      [{ \"url\": \"196.gif\", alt: \"[发呆]\" }, { \"url\": \"197.gif\", alt: \"[背着]\" }, { \"url\": \"198.gif\", alt: \"[伸手]\" }, { \"url\": \"199.gif\", alt: \"[耍帅]\" }, { \"url\": \"200.png\", alt: \"[微笑]\" }, { \"url\": \"201.png\", alt: \"[生病]\" }, { \"url\": \"202.png\", alt: \"[哭泣]\" }, { \"url\": \"203.png\", alt: \"[吐舌]\" }, { \"url\": \"204.png\", alt: \"[迷糊]\" }, { \"url\": \"205.png\", alt: \"[瞪眼]\" }, { \"url\": \"206.png\", alt: \"[恐怖]\" }, { \"url\": \"207.png\", alt: \"[忧愁]\" }, { \"url\": \"208.png\", alt: \"[眨眉]\" }, { \"url\": \"209.png\", alt: \"[闭眼]\" }, { \"url\": \"210.png\", alt: \"[鄙视]\" }, { \"url\": \"211.png\", alt: \"[阴暗]\" }, { \"url\": \"212.png\", alt: \"[小鬼]\" }, { \"url\": \"213.png\", alt: \"[礼物]\" }, { \"url\": \"214.png\", alt: \"[拜佛]\" }, { \"url\": \"215.png\", alt: \"[力量]\" }, { \"url\": \"216.png\", alt: \"[金钱]\" }, { \"url\": \"217.png\", alt: \"[蛋糕]\" }, { \"url\": \"218.png\", alt: \"[彩带]\" }, { \"url\": \"219.png\", alt: \"[礼物]\" }]],\n\n      //表情图片图床名称 ，由于我上传的第三方图床名称会有改变，所以有此数据来做对应，您实际应用中应该不需要\n      onlineEmoji: { \"100.gif\": \"AbNQgA.gif\", \"101.gif\": \"AbN3ut.gif\", \"102.gif\": \"AbNM3d.gif\", \"103.gif\": \"AbN8DP.gif\", \"104.gif\": \"AbNljI.gif\", \"105.gif\": \"AbNtUS.gif\", \"106.gif\": \"AbNGHf.gif\", \"107.gif\": \"AbNYE8.gif\", \"108.gif\": \"AbNaCQ.gif\", \"109.gif\": \"AbNN4g.gif\", \"110.gif\": \"AbN0vn.gif\", \"111.gif\": \"AbNd3j.gif\", \"112.gif\": \"AbNsbV.gif\", \"113.gif\": \"AbNwgs.gif\", \"114.gif\": \"AbNrD0.gif\", \"115.gif\": \"AbNDuq.gif\", \"116.gif\": \"AbNg5F.gif\", \"117.gif\": \"AbN6ET.gif\", \"118.gif\": \"AbNcUU.gif\", \"119.gif\": \"AbNRC4.gif\", \"120.gif\": \"AbNhvR.gif\", \"121.gif\": \"AbNf29.gif\", \"122.gif\": \"AbNW8J.gif\", \"123.gif\": \"AbNob6.gif\", \"124.gif\": \"AbN5K1.gif\", \"125.gif\": \"AbNHUO.gif\", \"126.gif\": \"AbNIDx.gif\", \"127.gif\": \"AbN7VK.gif\", \"128.gif\": \"AbNb5D.gif\", \"129.gif\": \"AbNX2d.gif\", \"130.gif\": \"AbNLPe.gif\", \"131.gif\": \"AbNjxA.gif\", \"132.gif\": \"AbNO8H.gif\", \"133.gif\": \"AbNxKI.gif\", \"134.gif\": \"AbNzrt.gif\", \"135.gif\": \"AbU9Vf.gif\", \"136.gif\": \"AbUSqP.gif\", \"137.gif\": \"AbUCa8.gif\", \"138.gif\": \"AbUkGQ.gif\", \"139.gif\": \"AbUFPg.gif\", \"140.gif\": \"AbUPIS.gif\", \"141.gif\": \"AbUZMn.gif\", \"142.gif\": \"AbUExs.gif\", \"143.gif\": \"AbUA2j.gif\", \"144.gif\": \"AbUMIU.gif\", \"145.gif\": \"AbUerq.gif\", \"146.gif\": \"AbUKaT.gif\", \"147.gif\": \"AbUmq0.gif\", \"148.gif\": \"AbUuZV.gif\", \"149.gif\": \"AbUliF.gif\", \"150.gif\": \"AbU1G4.gif\", \"151.gif\": \"AbU8z9.gif\", \"152.gif\": \"AbU3RJ.gif\", \"153.gif\": \"AbUYs1.gif\", \"154.gif\": \"AbUJMR.gif\", \"155.gif\": \"AbUadK.gif\", \"156.gif\": \"AbUtqx.gif\", \"157.gif\": \"AbUUZ6.gif\", \"158.gif\": \"AbUBJe.gif\", \"159.gif\": \"AbUdIO.gif\", \"160.gif\": \"AbU0iD.gif\", \"161.gif\": \"AbUrzd.gif\", \"162.gif\": \"AbUDRH.gif\", \"163.gif\": \"AbUyQA.gif\", \"164.gif\": \"AbUWo8.gif\", \"165.gif\": \"AbU6sI.gif\", \"166.gif\": \"AbU2eP.gif\", \"167.gif\": \"AbUcLt.gif\", \"168.gif\": \"AbU4Jg.gif\", \"169.gif\": \"AbURdf.gif\", \"170.gif\": \"AbUhFS.gif\", \"171.gif\": \"AbU5WQ.gif\", \"172.gif\": \"AbULwV.gif\", \"173.gif\": \"AbUIzj.gif\", \"174.gif\": \"AbUTQs.gif\", \"175.gif\": \"AbU7yn.gif\", \"176.gif\": \"AbUqe0.gif\", \"177.gif\": \"AbUHLq.gif\", \"178.gif\": \"AbUOoT.gif\", \"179.gif\": \"AbUvYF.gif\", \"180.gif\": \"AbUjFU.gif\", \"181.gif\": \"AbaSSJ.gif\", \"182.gif\": \"AbUxW4.gif\", \"183.gif\": \"AbaCO1.gif\", \"184.gif\": \"Abapl9.gif\", \"185.gif\": \"Aba9yR.gif\", \"186.gif\": \"AbaFw6.gif\", \"187.gif\": \"Abaiex.gif\", \"188.gif\": \"AbakTK.gif\", \"189.gif\": \"AbaZfe.png\", \"190.gif\": \"AbaEFO.gif\", \"191.gif\": \"AbaVYD.gif\", \"192.gif\": \"AbamSH.gif\", \"193.gif\": \"AbaKOI.gif\", \"194.gif\": \"Abanld.gif\", \"195.gif\": \"Abau6A.gif\", \"196.gif\": \"AbaQmt.gif\", \"197.gif\": \"Abal0P.gif\", \"198.gif\": \"AbatpQ.gif\", \"199.gif\": \"Aba1Tf.gif\", \"200.png\": \"Aba8k8.png\", \"201.png\": \"AbaGtS.png\", \"202.png\": \"AbaJfg.png\", \"203.png\": \"AbaNlj.png\", \"204.png\": \"Abawmq.png\", \"205.png\": \"AbaU6s.png\", \"206.png\": \"AbaaXn.png\", \"207.png\": \"Aba000.png\", \"208.png\": \"AbarkT.png\", \"209.png\": \"AbastU.png\", \"210.png\": \"AbaB7V.png\", \"211.png\": \"Abafn1.png\", \"212.png\": \"Abacp4.png\", \"213.png\": \"AbayhF.png\", \"214.png\": \"Abag1J.png\", \"215.png\": \"Aba2c9.png\", \"216.png\": \"AbaRXR.png\", \"217.png\": \"Aba476.png\", \"218.png\": \"Abah0x.png\", \"219.png\": \"Abdg58.png\" } };\n\n  },\n  onLoad: function onLoad(option) {var _this = this;\n    uni.connectSocket({\n      url: 'ws://49.235.104.224:8081' });\n\n    uni.onSocketOpen(function (res) {\n      __f__(\"log\", 'WebSocket连接已打开！', \" at pages/HM-chat/HM-chat.vue:207\");\n    });\n    uni.onSocketMessage(function (res) {\n      __f__(\"log\", '收到服务器内容：' + res.data, \" at pages/HM-chat/HM-chat.vue:210\");\n      if (JSON.parse(res.data).myuid != _this.myuid) {\n        __f__(\"log\", \"收到数据\", \" at pages/HM-chat/HM-chat.vue:212\");\n        _this.screenMsg(JSON.parse(res.data));\n      }\n    });\n    uni.onSocketClose(function (res) {\n      __f__(\"log\", 'WebSocket 已关闭！', \" at pages/HM-chat/HM-chat.vue:217\");\n    });\n\n    this.getMsgList();\n    //语音自然播放结束\n    this.AUDIO.onEnded(function (res) {\n      _this.playMsgid = null;\n    });\n\n    //录音开始事件\n    this.RECORDER.onStart(function (e) {\n      _this.recordBegin(e);\n    });\n    //录音结束事件\n    this.RECORDER.onStop(function (e) {\n      _this.recordEnd(e);\n    });\n\n  },\n  onShow: function onShow() {\n    this.scrollTop = 999999999;\n  },\n  methods: {\n    // 接受消息(筛选处理)\n    screenMsg: function screenMsg(msg) {\n      __f__(\"log\", msg, \" at pages/HM-chat/HM-chat.vue:242\");\n      __f__(\"log\", \"正在渲染\", \" at pages/HM-chat/HM-chat.vue:243\");\n      //从长连接处转发给这个方法，进行筛选处理\n      if (msg.type == 'system') {\n        // 系统消息\n        switch (msg.msg.type) {\n          case 'text':\n            this.addSystemTextMsg(msg);\n            break;\n          case 'redEnvelope':\n            this.addSystemRedEnvelopeMsg(msg);\n            break;}\n\n      } else if (msg.type == 'user') {\n        // 用户消息\n        switch (msg.msg.type) {\n          case 'text':\n            this.addTextMsg(msg);\n            break;\n          case 'voice':\n            this.addVoiceMsg(msg);\n            break;\n          case 'img':\n            this.addImgMsg(msg);\n            break;\n          case 'redEnvelope':\n            this.addRedEnvelopeMsg(msg);\n            break;}\n\n        // console.log('用户消息');\n        //非自己的消息震动\n        if (msg.msg.userinfo.uid != this.myuid) {\n          __f__(\"log\", '振动', \" at pages/HM-chat/HM-chat.vue:274\");\n          uni.vibrateLong();\n        }\n      }\n      this.$nextTick(function () {\n        // 滚动到底\n        this.scrollToView = 'msg' + msg.msg.id;\n      });\n    },\n\n    //触发滑动到顶部(加载历史信息记录)\n    loadHistory: function loadHistory(e) {\n      if (this.isHistoryLoading) {\n        return;\n      }\n      this.isHistoryLoading = true; //参数作为进入请求标识，防止重复请求\n      this.scrollAnimation = false; //关闭滑动动画\n      var Viewid = this.msgList[0].msg.id; //记住第一个信息ID\n\n      //本地模拟请求历史记录效果\n      // setTimeout(()=>{\n      // \t// 消息列表\n      // \tlet list = [\n      // \t\t{type:\"user\",msg:{id:4,type:\"voice\",time:\"13:05\",userinfo:{uid:0,username:\"大黑哥\",face:\"/static/img/face.jpg\"},content:{url:\"/static/voice/2.mp3\",length:\"00:06\"}}},\n      // \t\t{type:\"user\",msg:{id:2,type:\"text\",time:\"12:56\",userinfo:{uid:1,username:\"大黑哥\",face:\"/static/img/face.jpg\"},content:{text:\"为什么温度会相差那么大？\"}}},\n      // \t]\n      // \t// 获取消息中的图片,并处理显示尺寸\n      // \tfor(let i=0;i<list.length;i++){\n      // \t\tif(list[i].type=='user'&&list[i].msg.type==\"img\"){\n      // \t\t\tlist[i].msg.content = this.setPicSize(list[i].msg.content);\n      // \t\t\tthis.msgImgList.unshift(list[i].msg.content.url);\n      // \t\t}\n      // \t\tlist[i].msg.id = Math.floor(Math.random()*1000+1);\n      // \t\tthis.msgList.unshift(list[i]);\n      // \t}\n\n      // \t//这段代码很重要，不然每次加载历史数据都会跳到顶部\n      // \tthis.$nextTick(function() {\n      // \t\tthis.scrollToView = 'msg'+Viewid;//跳转上次的第一行信息位置\n      // \t\tthis.$nextTick(function() {\n      // \t\t\tthis.scrollAnimation = true;//恢复滚动动画\n      // \t\t});\n\n      // \t});\n      // this.isHistoryLoading = false;\n      // },1000)\n    },\n    // 加载初始页面消息\n    getMsgList: function getMsgList() {\n      // 消息列表\n      var list = [\n      { type: \"system\", msg: { id: 0, type: \"text\", content: { text: \"我们的私人聊天室\" } } }];\n\n      // 获取消息中的图片,并处理显示尺寸\n      for (var i = 0; i < list.length; i++) {\n        if (list[i].type == 'user' && list[i].msg.type == \"img\") {\n          list[i].msg.content = this.setPicSize(list[i].msg.content);\n          this.msgImgList.push(list[i].msg.content.url);\n        }\n      }\n      this.msgList = list;\n      // 滚动到底部\n      this.$nextTick(function () {\n        //进入页面滚动到底部\n        this.scrollTop = 9999;\n        this.$nextTick(function () {\n          this.scrollAnimation = true;\n        });\n\n      });\n    },\n\n    //处理图片尺寸，如果不处理宽高，新进入页面加载图片时候会闪\n    setPicSize: function setPicSize(content) {\n      // 让图片最长边等于设置的最大长度，短边等比例缩小，图片控件真实改变，区别于aspectFit方式。\n      var maxW = uni.upx2px(350); //350是定义消息图片最大宽度\n      var maxH = uni.upx2px(350); //350是定义消息图片最大高度\n      if (content.w > maxW || content.h > maxH) {\n        var scale = content.w / content.h;\n        content.w = scale > 1 ? maxW : maxH * scale;\n        content.h = scale > 1 ? maxW / scale : maxH;\n      }\n      return content;\n    },\n\n    //更多功能(点击+弹出) \n    showMore: function showMore() {\n      this.isVoice = false;\n      this.hideEmoji = true;\n      if (this.hideMore) {\n        this.hideMore = false;\n        this.openDrawer();\n      } else {\n        this.hideDrawer();\n      }\n    },\n    // 打开抽屉\n    openDrawer: function openDrawer() {\n      this.popupLayerClass = 'showLayer';\n    },\n    // 隐藏抽屉\n    hideDrawer: function hideDrawer() {var _this2 = this;\n      this.popupLayerClass = '';\n      setTimeout(function () {\n        _this2.hideMore = true;\n        _this2.hideEmoji = true;\n      }, 150);\n    },\n    // 选择图片发送\n    chooseImage: function chooseImage() {\n      this.getImage('album');\n    },\n    //拍照发送\n    camera: function camera() {\n      this.getImage('camera');\n    },\n    //选照片 or 拍照\n    getImage: function getImage(type) {var _this3 = this;\n      this.hideDrawer();\n      uni.chooseImage({\n        sourceType: [type],\n        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有\n        success: function success(res) {var _loop = function _loop(\n          i) {\n            uni.getImageInfo({\n              src: res.tempFilePaths[i],\n              success: function success(image) {\n                // console.log(image.width);\n                __f__(\"log\", \"选择图片\", \" at pages/HM-chat/HM-chat.vue:402\");\n                // console.log(image.height);\n                uni.uploadFile({\n                  url: 'http://49.235.104.224:8082/upup', //仅为示例，非真实的接口地址\n                  filePath: res.tempFilePaths[i],\n                  success: function success(uploadFileRes) {\n                    __f__(\"log\", \"上传图片\", \" at pages/HM-chat/HM-chat.vue:408\");\n                    var msg = { url: JSON.parse(uploadFileRes.data).url, w: image.width, h: image.height };\n                    _this3.sendMsg(msg, 'img');\n                  } });\n\n              } });};for (var i = 0; i < res.tempFilePaths.length; i++) {_loop(i);\n\n          }\n        } });\n\n    },\n    // 选择表情\n    chooseEmoji: function chooseEmoji() {\n      this.hideMore = true;\n      if (this.hideEmoji) {\n        this.hideEmoji = false;\n        this.openDrawer();\n      } else {\n        this.hideDrawer();\n      }\n    },\n    //添加表情\n    addEmoji: function addEmoji(em) {\n      this.textMsg += em.alt;\n    },\n\n    //获取焦点，如果不是选表情ing,则关闭抽屉\n    textareaFocus: function textareaFocus() {\n      if (this.popupLayerClass == 'showLayer' && this.hideMore == false) {\n        this.hideDrawer();\n      }\n    },\n    // 发送文字消息\n    sendText: function sendText() {\n      this.hideDrawer(); //隐藏抽屉\n      if (!this.textMsg) {\n        return;\n      }\n      var content = this.replaceEmoji(this.textMsg);\n      var msg = { text: content };\n      this.sendMsg(msg, 'text');\n      this.textMsg = ''; //清空输入框\n    },\n    //替换表情符号为图片\n    replaceEmoji: function replaceEmoji(str) {var _this4 = this;\n      var replacedStr = str.replace(/\\[([^(\\]|\\[)]*)\\]/g, function (item, index) {\n        // console.log(\"item: \" + item);\n        for (var i = 0; i < _this4.emojiList.length; i++) {\n          var row = _this4.emojiList[i];\n          for (var j = 0; j < row.length; j++) {\n            var EM = row[j];\n            if (EM.alt == item) {\n              //在线表情路径，图文混排必须使用网络路径，请上传一份表情到你的服务器后再替换此路径 \n              //比如你上传服务器后，你的100.gif路径为https://www.xxx.com/emoji/100.gif 则替换onlinePath填写为https://www.xxx.com/emoji/\n              var onlinePath = 'http://49.235.104.224:8082/uploads/emoji/';\n              var imgstr = '<img style=\"vertical-align:middle;\" src=\"' + onlinePath + EM.url + '\">';\n              // console.log(\"imgstr: \" + imgstr);\n              return imgstr;\n            }\n          }\n        }\n      });\n      return '<div style=\"line-height:25px\">' + replacedStr + '</div>';\n    },\n\n    // 发送消息\n    sendMsg: function sendMsg(content, type) {\n      //实际应用中，此处应该提交长连接，模板仅做本地处理。\n      var nowDate = new Date();\n      var lastid = this.msgList[this.msgList.length - 1].msg.id;\n      lastid++;\n      var msg = { type: 'user', myuid: this.myuid, msg: { id: lastid, time: nowDate.getHours() + \":\" + nowDate.getMinutes(), type: type, userinfo: { uid: this.myuid, username: \"老婆\", face: \"/static/img/girl.jpg\" }, content: content } };\n      // 发送消息\n      __f__(\"log\", \"发送的消息\", msg, \" at pages/HM-chat/HM-chat.vue:481\");\n      uni.sendSocketMessage({\n        data: JSON.stringify(msg) });\n\n      // console.log(\"发送成功\")\n      this.screenMsg(msg); //渲染的是自己的0\n    },\n\n    // 添加文字消息到列表\n    addTextMsg: function addTextMsg(msg) {\n      this.msgList.push(msg);\n    },\n    // 添加语音消息到列表\n    addVoiceMsg: function addVoiceMsg(msg) {\n      this.msgList.push(msg);\n    },\n    // 添加图片消息到列表\n    addImgMsg: function addImgMsg(msg) {\n      msg.msg.content = this.setPicSize(msg.msg.content);\n      this.msgImgList.push(msg.msg.content.url);\n      this.msgList.push(msg);\n    },\n    // 添加系统文字消息到列表\n    addSystemTextMsg: function addSystemTextMsg(msg) {\n      this.msgList.push(msg);\n    },\n    // 预览图片\n    showPic: function showPic(msg) {\n      uni.previewImage({\n        indicator: \"none\",\n        current: msg.content.url,\n        urls: this.msgImgList });\n\n    },\n    // 播放语音\n    playVoice: function playVoice(msg) {\n      this.playMsgid = msg.id;\n      this.AUDIO.src = msg.content.url;\n      this.$nextTick(function () {\n        this.AUDIO.play();\n      });\n    },\n    // 录音开始\n    voiceBegin: function voiceBegin(e) {\n      if (e.touches.length > 1) {\n        return;\n      }\n      this.initPoint.Y = e.touches[0].clientY;\n      this.initPoint.identifier = e.touches[0].identifier;\n      this.RECORDER.start({ format: \"mp3\" }); //录音开始,\n    },\n    //录音开始UI效果\n    recordBegin: function recordBegin(e) {var _this5 = this;\n      this.recording = true;\n      this.voiceTis = '松开 结束';\n      this.recordLength = 0;\n      this.recordTimer = setInterval(function () {\n        _this5.recordLength++;\n      }, 1000);\n    },\n    // 录音被打断\n    voiceCancel: function voiceCancel() {\n      this.recording = false;\n      this.voiceTis = '按住 说话';\n      this.recordTis = '手指上滑 取消发送';\n      this.willStop = true; //不发送录音\n      this.RECORDER.stop(); //录音结束\n    },\n    // 录音中(判断是否触发上滑取消发送)\n    voiceIng: function voiceIng(e) {\n      if (!this.recording) {\n        return;\n      }\n      var touche = e.touches[0];\n      //上滑一个导航栏的高度触发上滑取消发送\n      if (this.initPoint.Y - touche.clientY >= uni.upx2px(100)) {\n        this.willStop = true;\n        this.recordTis = '松开手指 取消发送';\n      } else {\n        this.willStop = false;\n        this.recordTis = '手指上滑 取消发送';\n      }\n    },\n    // 结束录音\n    voiceEnd: function voiceEnd(e) {\n      if (!this.recording) {\n        return;\n      }\n      this.recording = false;\n      this.voiceTis = '按住 说话';\n      this.recordTis = '手指上滑 取消发送';\n      this.RECORDER.stop(); //录音结束\n    },\n    //录音结束(回调文件)\n    recordEnd: function recordEnd(e) {var _this6 = this;\n      clearInterval(this.recordTimer);\n      if (!this.willStop) {\n        // console.log(\"e: \" + JSON.stringify(e));\n        uni.uploadFile({\n          url: 'http://49.235.104.224:8082/upup', //仅为示例，非真实的接口地址\n          filePath: e.tempFilePath,\n          success: function success(uploadFileRes) {\n            var msg = {\n              length: 0,\n              url: JSON.parse(uploadFileRes.data).url };\n\n            var min = parseInt(_this6.recordLength / 60);\n            var sec = _this6.recordLength % 60;\n            min = min < 10 ? '0' + min : min;\n            sec = sec < 10 ? '0' + sec : sec;\n            msg.length = min + ':' + sec;\n            _this6.sendMsg(msg, 'voice');\n          } });\n\n      } else {\n        __f__(\"log\", '取消发送录音', \" at pages/HM-chat/HM-chat.vue:596\");\n      }\n      this.willStop = false;\n    },\n    // 切换语音/文字输入\n    switchVoice: function switchVoice() {\n      this.hideDrawer();\n      this.isVoice = this.isVoice ? false : true;\n    },\n    discard: function discard() {\n      return;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvSE0tY2hhdC9ITS1jaGF0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzSkE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUZBO0FBR0E7QUFDQSxpQkFKQTtBQUtBO0FBQ0EsNkJBTkE7QUFPQSw0QkFQQTtBQVFBLGtCQVJBO0FBU0Esc0JBVEE7QUFVQSxpQkFWQTtBQVdBLG9CQVhBO0FBWUEsY0FaQTs7QUFjQTs7QUFFQTtBQUNBLHdDQWpCQTs7QUFtQkEsb0JBbkJBO0FBb0JBLHVCQXBCQTtBQXFCQSw0QkFyQkE7QUFzQkEsc0JBdEJBO0FBdUJBLHFCQXZCQTtBQXdCQSx3Q0F4QkE7QUF5QkEsdUJBekJBO0FBMEJBLHFCQTFCQTs7QUE0QkE7QUFDQSwwQ0E3QkE7QUE4QkEscUJBOUJBO0FBK0JBLHNCQS9CQTtBQWdDQTtBQUNBLHlCQWpDQTtBQWtDQTtBQUNBLG9CQW5DQTtBQW9DQTtBQUNBLHFCQXJDQTtBQXNDQTtBQUNBLGcwQkFEQTtBQUVBLGswQkFGQTtBQUdBLG8wQkFIQTtBQUlBLGcxQkFKQTtBQUtBLDgwQkFMQSxDQXRDQTs7QUE2Q0E7QUFDQSw2OEZBOUNBOztBQWdEQSxHQWxEQTtBQW1EQSxRQW5EQSxrQkFtREEsTUFuREEsRUFtREE7QUFDQTtBQUNBLHFDQURBOztBQUdBO0FBQ0E7QUFDQSxLQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FOQTtBQU9BO0FBQ0E7QUFDQSxLQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxLQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTs7QUFJQSxHQXBGQTtBQXFGQSxRQXJGQSxvQkFxRkE7QUFDQTtBQUNBLEdBdkZBO0FBd0ZBO0FBQ0E7QUFDQSxhQUZBLHFCQUVBLEdBRkEsRUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFOQTs7QUFRQSxPQVZBLE1BVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQVpBOztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQTtBQUlBLEtBM0NBOztBQTZDQTtBQUNBLGVBOUNBLHVCQThDQSxDQTlDQSxFQThDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUpBLENBSUE7QUFDQSxtQ0FMQSxDQUtBO0FBQ0EsMENBTkEsQ0FNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FqRkE7QUFrRkE7QUFDQSxjQW5GQSx3QkFtRkE7QUFDQTtBQUNBO0FBQ0EscUZBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7O0FBSUEsT0FQQTtBQVFBLEtBekdBOztBQTJHQTtBQUNBLGNBNUdBLHNCQTRHQSxPQTVHQSxFQTRHQTtBQUNBO0FBQ0EsaUNBRkEsQ0FFQTtBQUNBLGlDQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXRIQTs7QUF3SEE7QUFDQSxZQXpIQSxzQkF5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLEtBbElBO0FBbUlBO0FBQ0EsY0FwSUEsd0JBb0lBO0FBQ0E7QUFDQSxLQXRJQTtBQXVJQTtBQUNBLGNBeElBLHdCQXdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxFQUdBLEdBSEE7QUFJQSxLQTlJQTtBQStJQTtBQUNBLGVBaEpBLHlCQWdKQTtBQUNBO0FBQ0EsS0FsSkE7QUFtSkE7QUFDQSxVQXBKQSxvQkFvSkE7QUFDQTtBQUNBLEtBdEpBO0FBdUpBO0FBQ0EsWUF4SkEsb0JBd0pBLElBeEpBLEVBd0pBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsNENBRkEsRUFFQTtBQUNBO0FBQ0EsV0FEQTtBQUVBO0FBQ0EsdUNBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBREEsRUFDQTtBQUNBLGdEQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFQQTs7QUFTQSxlQWZBLElBRkEsRUFDQTs7QUFrQkE7QUFDQSxTQXZCQTs7QUF5QkEsS0FuTEE7QUFvTEE7QUFDQSxlQXJMQSx5QkFxTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQSxLQTdMQTtBQThMQTtBQUNBLFlBL0xBLG9CQStMQSxFQS9MQSxFQStMQTtBQUNBO0FBQ0EsS0FqTUE7O0FBbU1BO0FBQ0EsaUJBcE1BLDJCQW9NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBeE1BO0FBeU1BO0FBQ0EsWUExTUEsc0JBME1BO0FBQ0Esd0JBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQVJBLENBUUE7QUFDQSxLQW5OQTtBQW9OQTtBQUNBLGdCQXJOQSx3QkFxTkEsR0FyTkEsRUFxTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BaEJBO0FBaUJBO0FBQ0EsS0F4T0E7O0FBME9BO0FBQ0EsV0EzT0EsbUJBMk9BLE9BM09BLEVBMk9BLElBM09BLEVBMk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQURBOztBQUdBO0FBQ0EsMEJBWkEsQ0FZQTtBQUNBLEtBeFBBOztBQTBQQTtBQUNBLGNBM1BBLHNCQTJQQSxHQTNQQSxFQTJQQTtBQUNBO0FBQ0EsS0E3UEE7QUE4UEE7QUFDQSxlQS9QQSx1QkErUEEsR0EvUEEsRUErUEE7QUFDQTtBQUNBLEtBalFBO0FBa1FBO0FBQ0EsYUFuUUEscUJBbVFBLEdBblFBLEVBbVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F2UUE7QUF3UUE7QUFDQSxvQkF6UUEsNEJBeVFBLEdBelFBLEVBeVFBO0FBQ0E7QUFDQSxLQTNRQTtBQTRRQTtBQUNBLFdBN1FBLG1CQTZRQSxHQTdRQSxFQTZRQTtBQUNBO0FBQ0EseUJBREE7QUFFQSxnQ0FGQTtBQUdBLDZCQUhBOztBQUtBLEtBblJBO0FBb1JBO0FBQ0EsYUFyUkEscUJBcVJBLEdBclJBLEVBcVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0EzUkE7QUE0UkE7QUFDQSxjQTdSQSxzQkE2UkEsQ0E3UkEsRUE2UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBTkEsQ0FNQTtBQUNBLEtBcFNBO0FBcVNBO0FBQ0EsZUF0U0EsdUJBc1NBLENBdFNBLEVBc1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxJQUZBO0FBR0EsS0E3U0E7QUE4U0E7QUFDQSxlQS9TQSx5QkErU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFKQSxDQUlBO0FBQ0EsMkJBTEEsQ0FLQTtBQUNBLEtBclRBO0FBc1RBO0FBQ0EsWUF2VEEsb0JBdVRBLENBdlRBLEVBdVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcFVBO0FBcVVBO0FBQ0EsWUF0VUEsb0JBc1VBLENBdFVBLEVBc1VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBUEEsQ0FPQTtBQUNBLEtBOVVBO0FBK1VBO0FBQ0EsYUFoVkEscUJBZ1ZBLENBaFZBLEVBZ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFEQSxFQUNBO0FBQ0Esa0NBRkE7QUFHQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSxxREFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQWRBOztBQWdCQSxPQWxCQSxNQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBeFdBO0FBeVdBO0FBQ0EsZUExV0EseUJBMFdBO0FBQ0E7QUFDQTtBQUNBLEtBN1dBO0FBOFdBLFdBOVdBLHFCQThXQTtBQUNBO0FBQ0EsS0FoWEEsRUF4RkEsRSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCIgQHRvdWNoc3RhcnQ9XCJoaWRlRHJhd2VyXCI+XHJcblx0XHRcdDxzY3JvbGwtdmlldyBjbGFzcz1cIm1zZy1saXN0XCIgc2Nyb2xsLXk9XCJ0cnVlXCIgc2Nyb2xsLWFuY2hvcmluZz1cInRydWVcIiA6c2Nyb2xsLXdpdGgtYW5pbWF0aW9uPVwic2Nyb2xsQW5pbWF0aW9uXCIgOnNjcm9sbC10b3A9XCJzY3JvbGxUb3BcIlxyXG5cdFx0XHQgOnNjcm9sbC1pbnRvLXZpZXc9XCJzY3JvbGxUb1ZpZXdcIiBAc2Nyb2xsdG91cHBlcj1cImxvYWRIaXN0b3J5XCIgdXBwZXItdGhyZXNob2xkPVwiNTBcIj5cclxuXHRcdFx0XHQ8IS0tIOWKoOi9veWOhuWPsuaVsOaNrndhaXRpbmdVSSAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImxvYWRpbmdcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3Bpbm5lclwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlY3QxXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlY3QyXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlY3QzXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlY3Q0XCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlY3Q1XCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInJvd1wiIHYtZm9yPVwiKHJvdyxpbmRleCkgaW4gbXNnTGlzdFwiIDprZXk9XCJpbmRleFwiIDppZD1cIidtc2cnK3Jvdy5tc2cuaWRcIj5cclxuXHRcdFx0XHRcdDwhLS0g57O757uf5raI5oGvIC0tPlxyXG5cdFx0XHRcdFx0PGJsb2NrIHYtaWY9XCJyb3cudHlwZT09J3N5c3RlbSdcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzeXN0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOaWh+Wtl+a2iOaBryAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwicm93Lm1zZy50eXBlPT0ndGV4dCdcIiBjbGFzcz1cInRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdHt7cm93Lm1zZy5jb250ZW50LnRleHR9fVxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHRcdDwhLS0g55So5oi35raI5oGvIC0tPlxyXG5cdFx0XHRcdFx0PGJsb2NrIHYtaWY9XCJyb3cudHlwZT09J3VzZXInXCI+XHJcblx0XHRcdFx0XHRcdDwhLS0g6Ieq5bex5Y+R5Ye655qE5raI5oGvIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm15XCIgdi1pZj1cInJvdy5tc2cudXNlcmluZm8udWlkPT1teXVpZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g5bemLea2iOaBryAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxlZnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0g5paH5a2X5raI5oGvIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cInJvdy5tc2cudHlwZT09J3RleHQnXCIgY2xhc3M9XCJidWJibGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHJpY2gtdGV4dCA6bm9kZXM9XCJyb3cubXNnLmNvbnRlbnQudGV4dFwiPjwvcmljaC10ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSDor63oqIDmtojmga8gLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwicm93Lm1zZy50eXBlPT0ndm9pY2UnXCIgY2xhc3M9XCJidWJibGUgdm9pY2VcIiBAdGFwPVwicGxheVZvaWNlKHJvdy5tc2cpXCIgOmNsYXNzPVwicGxheU1zZ2lkID09IHJvdy5tc2cuaWQ/J3BsYXknOicnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVuZ3RoXCI+e3tyb3cubXNnLmNvbnRlbnQubGVuZ3RofX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbiBteS12b2ljZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0g5Zu+54mH5raI5oGvIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cInJvdy5tc2cudHlwZT09J2ltZydcIiBjbGFzcz1cImJ1YmJsZSBpbWdcIiBAdGFwPVwic2hvd1BpYyhyb3cubXNnKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJvdy5tc2cuY29udGVudC51cmxcIiA6c3R5bGU9XCJ7J3dpZHRoJzogcm93Lm1zZy5jb250ZW50LncrJ3B4JywnaGVpZ2h0Jzogcm93Lm1zZy5jb250ZW50LmgrJ3B4J31cIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOWPsy3lpLTlg48gLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyb3cubXNnLnVzZXJpbmZvLmZhY2VcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOWIq+S6uuWPkeWHuueahOa2iOaBryAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvdGhlclwiIHYtaWY9XCJyb3cubXNnLnVzZXJpbmZvLnVpZCE9bXl1aWRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOW3pi3lpLTlg48gLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsZWZ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInJvdy5tc2cudXNlcmluZm8uZmFjZVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g5Y+zLeeUqOaIt+WQjeensC3ml7bpl7Qt5raI5oGvIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlcm5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJuYW1lXCI+e3tyb3cubXNnLnVzZXJpbmZvLnVzZXJuYW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGltZVwiPnt7cm93Lm1zZy50aW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tIOaWh+Wtl+a2iOaBryAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJyb3cubXNnLnR5cGU9PSd0ZXh0J1wiIGNsYXNzPVwiYnViYmxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxyaWNoLXRleHQgOm5vZGVzPVwicm93Lm1zZy5jb250ZW50LnRleHRcIj48L3JpY2gtdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0g6K+t6Z+z5raI5oGvIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cInJvdy5tc2cudHlwZT09J3ZvaWNlJ1wiIGNsYXNzPVwiYnViYmxlIHZvaWNlXCIgQHRhcD1cInBsYXlWb2ljZShyb3cubXNnKVwiIDpjbGFzcz1cInBsYXlNc2dpZCA9PSByb3cubXNnLmlkPydwbGF5JzonJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb24gb3RoZXItdm9pY2VcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVuZ3RoXCI+e3tyb3cubXNnLmNvbnRlbnQubGVuZ3RofX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tIOWbvueJh+a2iOaBryAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJyb3cubXNnLnR5cGU9PSdpbWcnXCIgY2xhc3M9XCJidWJibGUgaW1nXCIgQHRhcD1cInNob3dQaWMocm93Lm1zZylcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJyb3cubXNnLmNvbnRlbnQudXJsXCIgOnN0eWxlPVwieyd3aWR0aCc6IHJvdy5tc2cuY29udGVudC53KydweCcsJ2hlaWdodCc6IHJvdy5tc2cuY29udGVudC5oKydweCd9XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5oq95bGJ5qCPIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJwb3B1cC1sYXllclwiIDpjbGFzcz1cInBvcHVwTGF5ZXJDbGFzc1wiIEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PVwiZGlzY2FyZFwiPlxyXG5cdFx0XHQ8IS0tIOihqOaDhSAtLT5cclxuXHRcdFx0PHN3aXBlciBjbGFzcz1cImVtb2ppLXN3aXBlclwiIDpjbGFzcz1cIntoaWRkZW46aGlkZUVtb2ppfVwiIGluZGljYXRvci1kb3RzPVwidHJ1ZVwiIGR1cmF0aW9uPVwiMTUwXCI+XHJcblx0XHRcdFx0PHN3aXBlci1pdGVtIHYtZm9yPVwiKHBhZ2UscGlkKSBpbiBlbW9qaUxpc3RcIiA6a2V5PVwicGlkXCI+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWZvcj1cIihlbSxlaWQpIGluIHBhZ2VcIiA6a2V5PVwiZWlkXCIgQHRhcD1cImFkZEVtb2ppKGVtKVwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgbW9kZT1cIndpZHRoRml4XCIgOnNyYz1cIicvc3RhdGljL2ltZy9lbW9qaS8nK2VtLnVybFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9zd2lwZXItaXRlbT5cclxuXHRcdFx0PC9zd2lwZXI+XHJcblx0XHRcdDwhLS0g5pu05aSa5Yqf6IO9IOebuOWGjC3mi43nhact57qi5YyFIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIm1vcmUtbGF5ZXJcIiA6Y2xhc3M9XCJ7aGlkZGVuOmhpZGVNb3JlfVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlzdFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib3hcIiBAdGFwPVwiY2hvb3NlSW1hZ2VcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uIHR1cGlhbjJcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJveFwiIEB0YXA9XCJjYW1lcmFcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uIHBhaXpoYW9cIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwiYm94XCIgQHRhcD1cImhhbmRSZWRFbnZlbG9wZXNcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uIGhvbmdiYW9cIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+IC0tPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSDlupXpg6jovpPlhaXmoI8gLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImlucHV0LWJveFwiIDpjbGFzcz1cInBvcHVwTGF5ZXJDbGFzc1wiIEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PVwiZGlzY2FyZFwiPlxyXG5cdFx0XHQ8IS0tIEg15LiL5LiN6IO95b2V6Z+z77yM6L6T5YWl5qCP5biD5bGA5pS55Yqo5LiA5LiLIC0tPlxyXG5cdFx0XHQ8IS0tICNpZm5kZWYgSDUgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidm9pY2VcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIiA6Y2xhc3M9XCJpc1ZvaWNlPydqaWFucGFuJzoneXV5aW4nXCIgQHRhcD1cInN3aXRjaFZvaWNlXCI+PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHQ8IS0tICNpZmRlZiBINSAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtb3JlXCIgQHRhcD1cInNob3dNb3JlXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uIGFkZFwiPjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0Ym94XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2b2ljZS1tb2RlXCIgOmNsYXNzPVwiW2lzVm9pY2U/Jyc6J2hpZGRlbicscmVjb3JkaW5nPydyZWNvcmRpbmcnOicnXVwiIEB0b3VjaHN0YXJ0PVwidm9pY2VCZWdpblwiXHJcblx0XHRcdFx0IEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PVwidm9pY2VJbmdcIiBAdG91Y2hlbmQ9XCJ2b2ljZUVuZFwiIEB0b3VjaGNhbmNlbD1cInZvaWNlQ2FuY2VsXCI+e3t2b2ljZVRpc319PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dC1tb2RlXCIgOmNsYXNzPVwiaXNWb2ljZT8naGlkZGVuJzonJ1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib3hcIj5cclxuXHRcdFx0XHRcdFx0PHRleHRhcmVhIGN1cnNvci1zcGFjaW5nPVwiMTAwXCIgYXV0by1oZWlnaHQ9XCJ0cnVlXCIgdi1tb2RlbD1cInRleHRNc2dcIiBAZm9jdXM9XCJ0ZXh0YXJlYUZvY3VzXCIgLz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJlbVwiIEB0YXA9XCJjaG9vc2VFbW9qaVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb24gYmlhb3FpbmdcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0gI2lmbmRlZiBINSAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtb3JlXCIgQHRhcD1cInNob3dNb3JlXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uIGFkZFwiPjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzZW5kXCIgOmNsYXNzPVwiaXNWb2ljZT8naGlkZGVuJzonJ1wiIEB0YXA9XCJzZW5kVGV4dFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYnRuXCI+5Y+R6YCBPC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOW9lemfs1VJ5pWI5p6cIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJyZWNvcmRcIiA6Y2xhc3M9XCJyZWNvcmRpbmc/Jyc6J2hpZGRlbidcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpbmdcIiA6Y2xhc3M9XCJ3aWxsU3RvcD8naGlkZGVuJzonJ1wiPjx2aWV3IGNsYXNzPVwiaWNvbiBsdXlpbjJcIiA+PC92aWV3Pjwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjYW5jZWxcIiA6Y2xhc3M9XCJ3aWxsU3RvcD8nJzonaGlkZGVuJ1wiPjx2aWV3IGNsYXNzPVwiaWNvbiBjaGVodWlcIiA+PC92aWV3Pjwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXNcIiA6Y2xhc3M9XCJ3aWxsU3RvcD8nY2hhbmdlJzonJ1wiPnt7cmVjb3JkVGlzfX08L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Ly9yZXNpemVcclxuXHRcdFx0XHRyZXNpemU6ZmFsc2UsXHJcblx0XHRcdFx0Ly/mloflrZfmtojmga9cclxuXHRcdFx0XHR0ZXh0TXNnOicnLFxyXG5cdFx0XHRcdC8v5raI5oGv5YiX6KGoXHJcblx0XHRcdFx0aXNIaXN0b3J5TG9hZGluZzpmYWxzZSxcclxuXHRcdFx0XHRzY3JvbGxBbmltYXRpb246ZmFsc2UsXHJcblx0XHRcdFx0c2Nyb2xsVG9wOjAsXHJcblx0XHRcdFx0c2Nyb2xsVG9WaWV3OicnLFxyXG5cdFx0XHRcdG1zZ0xpc3Q6W10sXHJcblx0XHRcdFx0bXNnSW1nTGlzdDpbXSxcclxuXHRcdFx0XHRteXVpZDoxLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8v5b2V6Z+z55u45YWz5Y+C5pWwXHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBINVxyXG5cdFx0XHRcdC8vSDXkuI3og73lvZXpn7NcclxuXHRcdFx0XHRSRUNPUkRFUjp1bmkuZ2V0UmVjb3JkZXJNYW5hZ2VyKCksXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0aXNWb2ljZTpmYWxzZSxcclxuXHRcdFx0XHR2b2ljZVRpczon5oyJ5L2PIOivtOivnScsXHJcblx0XHRcdFx0cmVjb3JkVGlzOlwi5omL5oyH5LiK5ruRIOWPlua2iOWPkemAgVwiLFxyXG5cdFx0XHRcdHJlY29yZGluZzpmYWxzZSxcclxuXHRcdFx0XHR3aWxsU3RvcDpmYWxzZSxcclxuXHRcdFx0XHRpbml0UG9pbnQ6e2lkZW50aWZpZXI6MCxZOjB9LFxyXG5cdFx0XHRcdHJlY29yZFRpbWVyOm51bGwsXHJcblx0XHRcdFx0cmVjb3JkTGVuZ3RoOjEsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly/mkq3mlL7or63pn7Pnm7jlhbPlj4LmlbBcclxuXHRcdFx0XHRBVURJTzp1bmkuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKSxcclxuXHRcdFx0XHRwbGF5TXNnaWQ6bnVsbCxcclxuXHRcdFx0XHRWb2ljZVRpbWVyOm51bGwsXHJcblx0XHRcdFx0Ly8g5oq95bGJ5Y+C5pWwXHJcblx0XHRcdFx0cG9wdXBMYXllckNsYXNzOicnLFxyXG5cdFx0XHRcdC8vIG1vcmXlj4LmlbBcclxuXHRcdFx0XHRoaWRlTW9yZTp0cnVlLFxyXG5cdFx0XHRcdC8v6KGo5oOF5a6a5LmJXHJcblx0XHRcdFx0aGlkZUVtb2ppOnRydWUsXHJcblx0XHRcdFx0ZW1vamlMaXN0OltcclxuXHRcdFx0XHRcdFt7XCJ1cmxcIjpcIjEwMC5naWZcIixhbHQ6XCJb5b6u56yRXVwifSx7XCJ1cmxcIjpcIjEwMS5naWZcIixhbHQ6XCJb5Lyk5b+DXVwifSx7XCJ1cmxcIjpcIjEwMi5naWZcIixhbHQ6XCJb576O5aWzXVwifSx7XCJ1cmxcIjpcIjEwMy5naWZcIixhbHQ6XCJb5Y+R5ZGGXVwifSx7XCJ1cmxcIjpcIjEwNC5naWZcIixhbHQ6XCJb5aKo6ZWcXVwifSx7XCJ1cmxcIjpcIjEwNS5naWZcIixhbHQ6XCJb5ZOtXVwifSx7XCJ1cmxcIjpcIjEwNi5naWZcIixhbHQ6XCJb576eXVwifSx7XCJ1cmxcIjpcIjEwNy5naWZcIixhbHQ6XCJb5ZORXVwifSx7XCJ1cmxcIjpcIjEwOC5naWZcIixhbHQ6XCJb552hXVwifSx7XCJ1cmxcIjpcIjEwOS5naWZcIixhbHQ6XCJb5ZOtXVwifSx7XCJ1cmxcIjpcIjExMC5naWZcIixhbHQ6XCJb5ZunXVwifSx7XCJ1cmxcIjpcIjExMS5naWZcIixhbHQ6XCJb5oCSXVwifSx7XCJ1cmxcIjpcIjExMi5naWZcIixhbHQ6XCJb6LCD55quXVwifSx7XCJ1cmxcIjpcIjExMy5naWZcIixhbHQ6XCJb56yRXVwifSx7XCJ1cmxcIjpcIjExNC5naWZcIixhbHQ6XCJb5oOK6K62XVwifSx7XCJ1cmxcIjpcIjExNS5naWZcIixhbHQ6XCJb6Zq+6L+HXVwifSx7XCJ1cmxcIjpcIjExNi5naWZcIixhbHQ6XCJb6YW3XVwifSx7XCJ1cmxcIjpcIjExNy5naWZcIixhbHQ6XCJb5rGXXVwifSx7XCJ1cmxcIjpcIjExOC5naWZcIixhbHQ6XCJb5oqT54uCXVwifSx7XCJ1cmxcIjpcIjExOS5naWZcIixhbHQ6XCJb5ZCQXVwifSx7XCJ1cmxcIjpcIjEyMC5naWZcIixhbHQ6XCJb56yRXVwifSx7XCJ1cmxcIjpcIjEyMS5naWZcIixhbHQ6XCJb5b+r5LmQXVwifSx7XCJ1cmxcIjpcIjEyMi5naWZcIixhbHQ6XCJb5aWHXVwifSx7XCJ1cmxcIjpcIjEyMy5naWZcIixhbHQ6XCJb5YKyXVwifV0sXHJcblx0XHRcdFx0XHRbe1widXJsXCI6XCIxMjQuZ2lmXCIsYWx0OlwiW+mlv11cIn0se1widXJsXCI6XCIxMjUuZ2lmXCIsYWx0OlwiW+e0r11cIn0se1widXJsXCI6XCIxMjYuZ2lmXCIsYWx0OlwiW+WQk11cIn0se1widXJsXCI6XCIxMjcuZ2lmXCIsYWx0OlwiW+axl11cIn0se1widXJsXCI6XCIxMjguZ2lmXCIsYWx0OlwiW+mrmOWFtF1cIn0se1widXJsXCI6XCIxMjkuZ2lmXCIsYWx0OlwiW+mXsl1cIn0se1widXJsXCI6XCIxMzAuZ2lmXCIsYWx0OlwiW+WKquWKm11cIn0se1widXJsXCI6XCIxMzEuZ2lmXCIsYWx0OlwiW+mqgl1cIn0se1widXJsXCI6XCIxMzIuZ2lmXCIsYWx0OlwiW+eWkemXrl1cIn0se1widXJsXCI6XCIxMzMuZ2lmXCIsYWx0OlwiW+enmOWvhl1cIn0se1widXJsXCI6XCIxMzQuZ2lmXCIsYWx0OlwiW+S5sV1cIn0se1widXJsXCI6XCIxMzUuZ2lmXCIsYWx0OlwiW+eWr11cIn0se1widXJsXCI6XCIxMzYuZ2lmXCIsYWx0OlwiW+WTgF1cIn0se1widXJsXCI6XCIxMzcuZ2lmXCIsYWx0OlwiW+msvF1cIn0se1widXJsXCI6XCIxMzguZ2lmXCIsYWx0OlwiW+aJk+WHu11cIn0se1widXJsXCI6XCIxMzkuZ2lmXCIsYWx0OlwiW2J5ZV1cIn0se1widXJsXCI6XCIxNDAuZ2lmXCIsYWx0OlwiW+axl11cIn0se1widXJsXCI6XCIxNDEuZ2lmXCIsYWx0OlwiW+aKoF1cIn0se1widXJsXCI6XCIxNDIuZ2lmXCIsYWx0OlwiW+m8k+aOjF1cIn0se1widXJsXCI6XCIxNDMuZ2lmXCIsYWx0OlwiW+ezn+ezlV1cIn0se1widXJsXCI6XCIxNDQuZ2lmXCIsYWx0OlwiW+aBtuaQnl1cIn0se1widXJsXCI6XCIxNDUuZ2lmXCIsYWx0OlwiW+S7gOS5iF1cIn0se1widXJsXCI6XCIxNDYuZ2lmXCIsYWx0OlwiW+S7gOS5iF1cIn0se1widXJsXCI6XCIxNDcuZ2lmXCIsYWx0OlwiW+e0r11cIn1dLFxyXG5cdFx0XHRcdFx0W3tcInVybFwiOlwiMTQ4LmdpZlwiLGFsdDpcIlvnnItdXCJ9LHtcInVybFwiOlwiMTQ5LmdpZlwiLGFsdDpcIlvpmr7ov4ddXCJ9LHtcInVybFwiOlwiMTUwLmdpZlwiLGFsdDpcIlvpmr7ov4ddXCJ9LHtcInVybFwiOlwiMTUxLmdpZlwiLGFsdDpcIlvlnY9dXCJ9LHtcInVybFwiOlwiMTUyLmdpZlwiLGFsdDpcIlvkurJdXCJ9LHtcInVybFwiOlwiMTUzLmdpZlwiLGFsdDpcIlvlkJNdXCJ9LHtcInVybFwiOlwiMTU0LmdpZlwiLGFsdDpcIlvlj6/mgJxdXCJ9LHtcInVybFwiOlwiMTU1LmdpZlwiLGFsdDpcIlvliIBdXCJ9LHtcInVybFwiOlwiMTU2LmdpZlwiLGFsdDpcIlvmsLTmnpxdXCJ9LHtcInVybFwiOlwiMTU3LmdpZlwiLGFsdDpcIlvphZJdXCJ9LHtcInVybFwiOlwiMTU4LmdpZlwiLGFsdDpcIlvnr67nkINdXCJ9LHtcInVybFwiOlwiMTU5LmdpZlwiLGFsdDpcIlvkuZLkuZNdXCJ9LHtcInVybFwiOlwiMTYwLmdpZlwiLGFsdDpcIlvlkpbllaFdXCJ9LHtcInVybFwiOlwiMTYxLmdpZlwiLGFsdDpcIlvnvo7po59dXCJ9LHtcInVybFwiOlwiMTYyLmdpZlwiLGFsdDpcIlvliqjnialdXCJ9LHtcInVybFwiOlwiMTYzLmdpZlwiLGFsdDpcIlvpspzoirFdXCJ9LHtcInVybFwiOlwiMTY0LmdpZlwiLGFsdDpcIlvmnq9dXCJ9LHtcInVybFwiOlwiMTY1LmdpZlwiLGFsdDpcIlvllIddXCJ9LHtcInVybFwiOlwiMTY2LmdpZlwiLGFsdDpcIlvniLFdXCJ9LHtcInVybFwiOlwiMTY3LmdpZlwiLGFsdDpcIlvliIbmiYtdXCJ9LHtcInVybFwiOlwiMTY4LmdpZlwiLGFsdDpcIlvnlJ/ml6VdXCJ9LHtcInVybFwiOlwiMTY5LmdpZlwiLGFsdDpcIlvnlLVdXCJ9LHtcInVybFwiOlwiMTcwLmdpZlwiLGFsdDpcIlvngrjlvLldXCJ9LHtcInVybFwiOlwiMTcxLmdpZlwiLGFsdDpcIlvliIDlrZBdXCJ9XSxcclxuXHRcdFx0XHRcdFt7XCJ1cmxcIjpcIjE3Mi5naWZcIixhbHQ6XCJb6Laz55CDXVwifSx7XCJ1cmxcIjpcIjE3My5naWZcIixhbHQ6XCJb55Oi6JmrXVwifSx7XCJ1cmxcIjpcIjE3NC5naWZcIixhbHQ6XCJb57+UXVwifSx7XCJ1cmxcIjpcIjE3NS5naWZcIixhbHQ6XCJb5pyI5LquXVwifSx7XCJ1cmxcIjpcIjE3Ni5naWZcIixhbHQ6XCJb5aSq6ZizXVwifSx7XCJ1cmxcIjpcIjE3Ny5naWZcIixhbHQ6XCJb56S854mpXVwifSx7XCJ1cmxcIjpcIjE3OC5naWZcIixhbHQ6XCJb5oqx5oqxXVwifSx7XCJ1cmxcIjpcIjE3OS5naWZcIixhbHQ6XCJb5ouH5oyHXVwifSx7XCJ1cmxcIjpcIjE4MC5naWZcIixhbHQ6XCJb6LSs5L2OXVwifSx7XCJ1cmxcIjpcIjE4MS5naWZcIixhbHQ6XCJb5o+h5omLXVwifSx7XCJ1cmxcIjpcIjE4Mi5naWZcIixhbHQ6XCJb5Ymq5YiA5omLXVwifSx7XCJ1cmxcIjpcIjE4My5naWZcIixhbHQ6XCJb5oqx5ouzXVwifSx7XCJ1cmxcIjpcIjE4NC5naWZcIixhbHQ6XCJb5Yu+5byVXVwifSx7XCJ1cmxcIjpcIjE4NS5naWZcIixhbHQ6XCJb5ouz5aS0XVwifSx7XCJ1cmxcIjpcIjE4Ni5naWZcIixhbHQ6XCJb5bCP5ouH5oyHXVwifSx7XCJ1cmxcIjpcIjE4Ny5naWZcIixhbHQ6XCJb5ouH5oyH5YWrXVwifSx7XCJ1cmxcIjpcIjE4OC5naWZcIixhbHQ6XCJb6aOf5oyHXVwifSx7XCJ1cmxcIjpcIjE4OS5naWZcIixhbHQ6XCJbb2tdXCJ9LHtcInVybFwiOlwiMTkwLmdpZlwiLGFsdDpcIlvmg4XkvqNdXCJ9LHtcInVybFwiOlwiMTkxLmdpZlwiLGFsdDpcIlvniLHlv4NdXCJ9LHtcInVybFwiOlwiMTkyLmdpZlwiLGFsdDpcIlvouablk5JdXCJ9LHtcInVybFwiOlwiMTkzLmdpZlwiLGFsdDpcIlvpoqTmipZdXCJ9LHtcInVybFwiOlwiMTk0LmdpZlwiLGFsdDpcIlvmgITmsJRdXCJ9LHtcInVybFwiOlwiMTk1LmdpZlwiLGFsdDpcIlvot7PoiJ5dXCJ9XSxcclxuXHRcdFx0XHRcdFt7XCJ1cmxcIjpcIjE5Ni5naWZcIixhbHQ6XCJb5Y+R5ZGGXVwifSx7XCJ1cmxcIjpcIjE5Ny5naWZcIixhbHQ6XCJb6IOM552AXVwifSx7XCJ1cmxcIjpcIjE5OC5naWZcIixhbHQ6XCJb5Ly45omLXVwifSx7XCJ1cmxcIjpcIjE5OS5naWZcIixhbHQ6XCJb6ICN5biFXVwifSx7XCJ1cmxcIjpcIjIwMC5wbmdcIixhbHQ6XCJb5b6u56yRXVwifSx7XCJ1cmxcIjpcIjIwMS5wbmdcIixhbHQ6XCJb55Sf55eFXVwifSx7XCJ1cmxcIjpcIjIwMi5wbmdcIixhbHQ6XCJb5ZOt5rOjXVwifSx7XCJ1cmxcIjpcIjIwMy5wbmdcIixhbHQ6XCJb5ZCQ6IiMXVwifSx7XCJ1cmxcIjpcIjIwNC5wbmdcIixhbHQ6XCJb6L+357OKXVwifSx7XCJ1cmxcIjpcIjIwNS5wbmdcIixhbHQ6XCJb556q55y8XVwifSx7XCJ1cmxcIjpcIjIwNi5wbmdcIixhbHQ6XCJb5oGQ5oCWXVwifSx7XCJ1cmxcIjpcIjIwNy5wbmdcIixhbHQ6XCJb5b+n5oSBXVwifSx7XCJ1cmxcIjpcIjIwOC5wbmdcIixhbHQ6XCJb55yo55yJXVwifSx7XCJ1cmxcIjpcIjIwOS5wbmdcIixhbHQ6XCJb6Zet55y8XVwifSx7XCJ1cmxcIjpcIjIxMC5wbmdcIixhbHQ6XCJb6YSZ6KeGXVwifSx7XCJ1cmxcIjpcIjIxMS5wbmdcIixhbHQ6XCJb6Zi05pqXXVwifSx7XCJ1cmxcIjpcIjIxMi5wbmdcIixhbHQ6XCJb5bCP6ay8XVwifSx7XCJ1cmxcIjpcIjIxMy5wbmdcIixhbHQ6XCJb56S854mpXVwifSx7XCJ1cmxcIjpcIjIxNC5wbmdcIixhbHQ6XCJb5ouc5L2bXVwifSx7XCJ1cmxcIjpcIjIxNS5wbmdcIixhbHQ6XCJb5Yqb6YePXVwifSx7XCJ1cmxcIjpcIjIxNi5wbmdcIixhbHQ6XCJb6YeR6ZKxXVwifSx7XCJ1cmxcIjpcIjIxNy5wbmdcIixhbHQ6XCJb6JuL57OVXVwifSx7XCJ1cmxcIjpcIjIxOC5wbmdcIixhbHQ6XCJb5b2p5bimXVwifSx7XCJ1cmxcIjpcIjIxOS5wbmdcIixhbHQ6XCJb56S854mpXVwifSxdXHRcdFx0XHRcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdC8v6KGo5oOF5Zu+54mH5Zu+5bqK5ZCN56ewIO+8jOeUseS6juaIkeS4iuS8oOeahOesrOS4ieaWueWbvuW6iuWQjeensOS8muacieaUueWPmO+8jOaJgOS7peacieatpOaVsOaNruadpeWBmuWvueW6lO+8jOaCqOWunumZheW6lOeUqOS4reW6lOivpeS4jemcgOimgVxyXG5cdFx0XHRcdG9ubGluZUVtb2ppOntcIjEwMC5naWZcIjpcIkFiTlFnQS5naWZcIixcIjEwMS5naWZcIjpcIkFiTjN1dC5naWZcIixcIjEwMi5naWZcIjpcIkFiTk0zZC5naWZcIixcIjEwMy5naWZcIjpcIkFiTjhEUC5naWZcIixcIjEwNC5naWZcIjpcIkFiTmxqSS5naWZcIixcIjEwNS5naWZcIjpcIkFiTnRVUy5naWZcIixcIjEwNi5naWZcIjpcIkFiTkdIZi5naWZcIixcIjEwNy5naWZcIjpcIkFiTllFOC5naWZcIixcIjEwOC5naWZcIjpcIkFiTmFDUS5naWZcIixcIjEwOS5naWZcIjpcIkFiTk40Zy5naWZcIixcIjExMC5naWZcIjpcIkFiTjB2bi5naWZcIixcIjExMS5naWZcIjpcIkFiTmQzai5naWZcIixcIjExMi5naWZcIjpcIkFiTnNiVi5naWZcIixcIjExMy5naWZcIjpcIkFiTndncy5naWZcIixcIjExNC5naWZcIjpcIkFiTnJEMC5naWZcIixcIjExNS5naWZcIjpcIkFiTkR1cS5naWZcIixcIjExNi5naWZcIjpcIkFiTmc1Ri5naWZcIixcIjExNy5naWZcIjpcIkFiTjZFVC5naWZcIixcIjExOC5naWZcIjpcIkFiTmNVVS5naWZcIixcIjExOS5naWZcIjpcIkFiTlJDNC5naWZcIixcIjEyMC5naWZcIjpcIkFiTmh2Ui5naWZcIixcIjEyMS5naWZcIjpcIkFiTmYyOS5naWZcIixcIjEyMi5naWZcIjpcIkFiTlc4Si5naWZcIixcIjEyMy5naWZcIjpcIkFiTm9iNi5naWZcIixcIjEyNC5naWZcIjpcIkFiTjVLMS5naWZcIixcIjEyNS5naWZcIjpcIkFiTkhVTy5naWZcIixcIjEyNi5naWZcIjpcIkFiTklEeC5naWZcIixcIjEyNy5naWZcIjpcIkFiTjdWSy5naWZcIixcIjEyOC5naWZcIjpcIkFiTmI1RC5naWZcIixcIjEyOS5naWZcIjpcIkFiTlgyZC5naWZcIixcIjEzMC5naWZcIjpcIkFiTkxQZS5naWZcIixcIjEzMS5naWZcIjpcIkFiTmp4QS5naWZcIixcIjEzMi5naWZcIjpcIkFiTk84SC5naWZcIixcIjEzMy5naWZcIjpcIkFiTnhLSS5naWZcIixcIjEzNC5naWZcIjpcIkFiTnpydC5naWZcIixcIjEzNS5naWZcIjpcIkFiVTlWZi5naWZcIixcIjEzNi5naWZcIjpcIkFiVVNxUC5naWZcIixcIjEzNy5naWZcIjpcIkFiVUNhOC5naWZcIixcIjEzOC5naWZcIjpcIkFiVWtHUS5naWZcIixcIjEzOS5naWZcIjpcIkFiVUZQZy5naWZcIixcIjE0MC5naWZcIjpcIkFiVVBJUy5naWZcIixcIjE0MS5naWZcIjpcIkFiVVpNbi5naWZcIixcIjE0Mi5naWZcIjpcIkFiVUV4cy5naWZcIixcIjE0My5naWZcIjpcIkFiVUEyai5naWZcIixcIjE0NC5naWZcIjpcIkFiVU1JVS5naWZcIixcIjE0NS5naWZcIjpcIkFiVWVycS5naWZcIixcIjE0Ni5naWZcIjpcIkFiVUthVC5naWZcIixcIjE0Ny5naWZcIjpcIkFiVW1xMC5naWZcIixcIjE0OC5naWZcIjpcIkFiVXVaVi5naWZcIixcIjE0OS5naWZcIjpcIkFiVWxpRi5naWZcIixcIjE1MC5naWZcIjpcIkFiVTFHNC5naWZcIixcIjE1MS5naWZcIjpcIkFiVTh6OS5naWZcIixcIjE1Mi5naWZcIjpcIkFiVTNSSi5naWZcIixcIjE1My5naWZcIjpcIkFiVVlzMS5naWZcIixcIjE1NC5naWZcIjpcIkFiVUpNUi5naWZcIixcIjE1NS5naWZcIjpcIkFiVWFkSy5naWZcIixcIjE1Ni5naWZcIjpcIkFiVXRxeC5naWZcIixcIjE1Ny5naWZcIjpcIkFiVVVaNi5naWZcIixcIjE1OC5naWZcIjpcIkFiVUJKZS5naWZcIixcIjE1OS5naWZcIjpcIkFiVWRJTy5naWZcIixcIjE2MC5naWZcIjpcIkFiVTBpRC5naWZcIixcIjE2MS5naWZcIjpcIkFiVXJ6ZC5naWZcIixcIjE2Mi5naWZcIjpcIkFiVURSSC5naWZcIixcIjE2My5naWZcIjpcIkFiVXlRQS5naWZcIixcIjE2NC5naWZcIjpcIkFiVVdvOC5naWZcIixcIjE2NS5naWZcIjpcIkFiVTZzSS5naWZcIixcIjE2Ni5naWZcIjpcIkFiVTJlUC5naWZcIixcIjE2Ny5naWZcIjpcIkFiVWNMdC5naWZcIixcIjE2OC5naWZcIjpcIkFiVTRKZy5naWZcIixcIjE2OS5naWZcIjpcIkFiVVJkZi5naWZcIixcIjE3MC5naWZcIjpcIkFiVWhGUy5naWZcIixcIjE3MS5naWZcIjpcIkFiVTVXUS5naWZcIixcIjE3Mi5naWZcIjpcIkFiVUx3Vi5naWZcIixcIjE3My5naWZcIjpcIkFiVUl6ai5naWZcIixcIjE3NC5naWZcIjpcIkFiVVRRcy5naWZcIixcIjE3NS5naWZcIjpcIkFiVTd5bi5naWZcIixcIjE3Ni5naWZcIjpcIkFiVXFlMC5naWZcIixcIjE3Ny5naWZcIjpcIkFiVUhMcS5naWZcIixcIjE3OC5naWZcIjpcIkFiVU9vVC5naWZcIixcIjE3OS5naWZcIjpcIkFiVXZZRi5naWZcIixcIjE4MC5naWZcIjpcIkFiVWpGVS5naWZcIixcIjE4MS5naWZcIjpcIkFiYVNTSi5naWZcIixcIjE4Mi5naWZcIjpcIkFiVXhXNC5naWZcIixcIjE4My5naWZcIjpcIkFiYUNPMS5naWZcIixcIjE4NC5naWZcIjpcIkFiYXBsOS5naWZcIixcIjE4NS5naWZcIjpcIkFiYTl5Ui5naWZcIixcIjE4Ni5naWZcIjpcIkFiYUZ3Ni5naWZcIixcIjE4Ny5naWZcIjpcIkFiYWlleC5naWZcIixcIjE4OC5naWZcIjpcIkFiYWtUSy5naWZcIixcIjE4OS5naWZcIjpcIkFiYVpmZS5wbmdcIixcIjE5MC5naWZcIjpcIkFiYUVGTy5naWZcIixcIjE5MS5naWZcIjpcIkFiYVZZRC5naWZcIixcIjE5Mi5naWZcIjpcIkFiYW1TSC5naWZcIixcIjE5My5naWZcIjpcIkFiYUtPSS5naWZcIixcIjE5NC5naWZcIjpcIkFiYW5sZC5naWZcIixcIjE5NS5naWZcIjpcIkFiYXU2QS5naWZcIixcIjE5Ni5naWZcIjpcIkFiYVFtdC5naWZcIixcIjE5Ny5naWZcIjpcIkFiYWwwUC5naWZcIixcIjE5OC5naWZcIjpcIkFiYXRwUS5naWZcIixcIjE5OS5naWZcIjpcIkFiYTFUZi5naWZcIixcIjIwMC5wbmdcIjpcIkFiYThrOC5wbmdcIixcIjIwMS5wbmdcIjpcIkFiYUd0Uy5wbmdcIixcIjIwMi5wbmdcIjpcIkFiYUpmZy5wbmdcIixcIjIwMy5wbmdcIjpcIkFiYU5sai5wbmdcIixcIjIwNC5wbmdcIjpcIkFiYXdtcS5wbmdcIixcIjIwNS5wbmdcIjpcIkFiYVU2cy5wbmdcIixcIjIwNi5wbmdcIjpcIkFiYWFYbi5wbmdcIixcIjIwNy5wbmdcIjpcIkFiYTAwMC5wbmdcIixcIjIwOC5wbmdcIjpcIkFiYXJrVC5wbmdcIixcIjIwOS5wbmdcIjpcIkFiYXN0VS5wbmdcIixcIjIxMC5wbmdcIjpcIkFiYUI3Vi5wbmdcIixcIjIxMS5wbmdcIjpcIkFiYWZuMS5wbmdcIixcIjIxMi5wbmdcIjpcIkFiYWNwNC5wbmdcIixcIjIxMy5wbmdcIjpcIkFiYXloRi5wbmdcIixcIjIxNC5wbmdcIjpcIkFiYWcxSi5wbmdcIixcIjIxNS5wbmdcIjpcIkFiYTJjOS5wbmdcIixcIjIxNi5wbmdcIjpcIkFiYVJYUi5wbmdcIixcIjIxNy5wbmdcIjpcIkFiYTQ3Ni5wbmdcIixcIjIxOC5wbmdcIjpcIkFiYWgweC5wbmdcIixcIjIxOS5wbmdcIjpcIkFiZGc1OC5wbmdcIn0sXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKG9wdGlvbikge1xyXG5cdFx0XHR1bmkuY29ubmVjdFNvY2tldCh7XHJcblx0XHRcdCAgdXJsOiAnd3M6Ly80OS4yMzUuMTA0LjIyNDo4MDgxJ1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dW5pLm9uU29ja2V0T3BlbihmdW5jdGlvbiAocmVzKSB7XHJcblx0XHRcdCAgY29uc29sZS5sb2coJ1dlYlNvY2tldOi/nuaOpeW3suaJk+W8gO+8gScpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dW5pLm9uU29ja2V0TWVzc2FnZSgocmVzKSA9PiB7XHJcblx0XHRcdCAgY29uc29sZS5sb2coJ+aUtuWIsOacjeWKoeWZqOWGheWuue+8micgKyByZXMuZGF0YSk7XHJcblx0XHRcdCAgaWYoSlNPTi5wYXJzZShyZXMuZGF0YSkubXl1aWQgIT0gdGhpcy5teXVpZCl7XHJcblx0XHRcdFx0ICBjb25zb2xlLmxvZyhcIuaUtuWIsOaVsOaNrlwiKVxyXG5cdFx0XHRcdCAgdGhpcy5zY3JlZW5Nc2coSlNPTi5wYXJzZShyZXMuZGF0YSkpXHJcblx0XHRcdCAgfVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dW5pLm9uU29ja2V0Q2xvc2UoZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0XHQgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXQg5bey5YWz6Zet77yBJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5nZXRNc2dMaXN0KCk7XHJcblx0XHRcdC8v6K+t6Z+z6Ieq54S25pKt5pS+57uT5p2fXHJcblx0XHRcdHRoaXMuQVVESU8ub25FbmRlZCgocmVzKT0+e1xyXG5cdFx0XHRcdHRoaXMucGxheU1zZ2lkPW51bGw7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvLyAjaWZuZGVmIEg1XHJcblx0XHRcdC8v5b2V6Z+z5byA5aeL5LqL5Lu2XHJcblx0XHRcdHRoaXMuUkVDT1JERVIub25TdGFydCgoZSk9PntcclxuXHRcdFx0XHR0aGlzLnJlY29yZEJlZ2luKGUpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQvL+W9lemfs+e7k+adn+S6i+S7tlxyXG5cdFx0XHR0aGlzLlJFQ09SREVSLm9uU3RvcCgoZSk9PntcclxuXHRcdFx0XHR0aGlzLnJlY29yZEVuZChlKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0b25TaG93KCl7XHJcblx0XHRcdHRoaXMuc2Nyb2xsVG9wID0gOTk5OTk5OTk5O1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHQvLyDmjqXlj5fmtojmga8o562b6YCJ5aSE55CGKVxyXG5cdFx0XHRzY3JlZW5Nc2cobXNnKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhtc2cpXHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLmraPlnKjmuLLmn5NcIilcclxuXHRcdFx0XHQvL+S7jumVv+i/nuaOpeWkhOi9rOWPkee7mei/meS4quaWueazle+8jOi/m+ihjOetm+mAieWkhOeQhlxyXG5cdFx0XHRcdGlmKG1zZy50eXBlPT0nc3lzdGVtJyl7XHJcblx0XHRcdFx0XHQvLyDns7vnu5/mtojmga9cclxuXHRcdFx0XHRcdHN3aXRjaCAobXNnLm1zZy50eXBlKXtcclxuXHRcdFx0XHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5hZGRTeXN0ZW1UZXh0TXNnKG1zZyk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3JlZEVudmVsb3BlJzpcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFkZFN5c3RlbVJlZEVudmVsb3BlTXNnKG1zZyk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fWVsc2UgaWYobXNnLnR5cGU9PSd1c2VyJyl7XHJcblx0XHRcdFx0XHQvLyDnlKjmiLfmtojmga9cclxuXHRcdFx0XHRcdHN3aXRjaCAobXNnLm1zZy50eXBlKXtcclxuXHRcdFx0XHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5hZGRUZXh0TXNnKG1zZyk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3ZvaWNlJzpcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFkZFZvaWNlTXNnKG1zZyk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2ltZyc6XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5hZGRJbWdNc2cobXNnKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAncmVkRW52ZWxvcGUnOlxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYWRkUmVkRW52ZWxvcGVNc2cobXNnKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCfnlKjmiLfmtojmga8nKTtcclxuXHRcdFx0XHRcdC8v6Z2e6Ieq5bex55qE5raI5oGv6ZyH5YqoXHJcblx0XHRcdFx0XHRpZihtc2cubXNnLnVzZXJpbmZvLnVpZCE9dGhpcy5teXVpZCl7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmjK/liqgnKTtcclxuXHRcdFx0XHRcdFx0dW5pLnZpYnJhdGVMb25nKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Ly8g5rua5Yqo5Yiw5bqVXHJcblx0XHRcdFx0XHR0aGlzLnNjcm9sbFRvVmlldyA9ICdtc2cnK21zZy5tc2cuaWRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8v6Kem5Y+R5ruR5Yqo5Yiw6aG26YOoKOWKoOi9veWOhuWPsuS/oeaBr+iusOW9lSlcclxuXHRcdFx0bG9hZEhpc3RvcnkoZSl7XHJcblx0XHRcdFx0aWYodGhpcy5pc0hpc3RvcnlMb2FkaW5nKXtcclxuXHRcdFx0XHRcdHJldHVybiA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuaXNIaXN0b3J5TG9hZGluZyA9IHRydWU7Ly/lj4LmlbDkvZzkuLrov5vlhaXor7fmsYLmoIfor4bvvIzpmLLmraLph43lpI3or7fmsYJcclxuXHRcdFx0XHR0aGlzLnNjcm9sbEFuaW1hdGlvbiA9IGZhbHNlOy8v5YWz6Zet5ruR5Yqo5Yqo55S7XHJcblx0XHRcdFx0bGV0IFZpZXdpZCA9IHRoaXMubXNnTGlzdFswXS5tc2cuaWQ7Ly/orrDkvY/nrKzkuIDkuKrkv6Hmga9JRFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8v5pys5Zyw5qih5ouf6K+35rGC5Y6G5Y+y6K6w5b2V5pWI5p6cXHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdC8vIFx0Ly8g5raI5oGv5YiX6KGoXHJcblx0XHRcdFx0Ly8gXHRsZXQgbGlzdCA9IFtcclxuXHRcdFx0XHQvLyBcdFx0e3R5cGU6XCJ1c2VyXCIsbXNnOntpZDo0LHR5cGU6XCJ2b2ljZVwiLHRpbWU6XCIxMzowNVwiLHVzZXJpbmZvOnt1aWQ6MCx1c2VybmFtZTpcIuWkp+m7keWTpVwiLGZhY2U6XCIvc3RhdGljL2ltZy9mYWNlLmpwZ1wifSxjb250ZW50Ont1cmw6XCIvc3RhdGljL3ZvaWNlLzIubXAzXCIsbGVuZ3RoOlwiMDA6MDZcIn19fSxcclxuXHRcdFx0XHQvLyBcdFx0e3R5cGU6XCJ1c2VyXCIsbXNnOntpZDoyLHR5cGU6XCJ0ZXh0XCIsdGltZTpcIjEyOjU2XCIsdXNlcmluZm86e3VpZDoxLHVzZXJuYW1lOlwi5aSn6buR5ZOlXCIsZmFjZTpcIi9zdGF0aWMvaW1nL2ZhY2UuanBnXCJ9LGNvbnRlbnQ6e3RleHQ6XCLkuLrku4DkuYjmuKnluqbkvJrnm7jlt67pgqPkuYjlpKfvvJ9cIn19fSxcclxuXHRcdFx0XHQvLyBcdF1cclxuXHRcdFx0XHQvLyBcdC8vIOiOt+WPlua2iOaBr+S4reeahOWbvueJhyzlubblpITnkIbmmL7npLrlsLrlr7hcclxuXHRcdFx0XHQvLyBcdGZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHQvLyBcdFx0aWYobGlzdFtpXS50eXBlPT0ndXNlcicmJmxpc3RbaV0ubXNnLnR5cGU9PVwiaW1nXCIpe1xyXG5cdFx0XHRcdC8vIFx0XHRcdGxpc3RbaV0ubXNnLmNvbnRlbnQgPSB0aGlzLnNldFBpY1NpemUobGlzdFtpXS5tc2cuY29udGVudCk7XHJcblx0XHRcdFx0Ly8gXHRcdFx0dGhpcy5tc2dJbWdMaXN0LnVuc2hpZnQobGlzdFtpXS5tc2cuY29udGVudC51cmwpO1xyXG5cdFx0XHRcdC8vIFx0XHR9XHJcblx0XHRcdFx0Ly8gXHRcdGxpc3RbaV0ubXNnLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMDArMSk7XHJcblx0XHRcdFx0Ly8gXHRcdHRoaXMubXNnTGlzdC51bnNoaWZ0KGxpc3RbaV0pO1xyXG5cdFx0XHRcdC8vIFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gXHQvL+i/meauteS7o+eggeW+iOmHjeimge+8jOS4jeeEtuavj+asoeWKoOi9veWOhuWPsuaVsOaNrumDveS8mui3s+WIsOmhtumDqFxyXG5cdFx0XHRcdC8vIFx0dGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gXHRcdHRoaXMuc2Nyb2xsVG9WaWV3ID0gJ21zZycrVmlld2lkOy8v6Lez6L2s5LiK5qyh55qE56ys5LiA6KGM5L+h5oGv5L2N572uXHJcblx0XHRcdFx0Ly8gXHRcdHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIFx0XHRcdHRoaXMuc2Nyb2xsQW5pbWF0aW9uID0gdHJ1ZTsvL+aBouWkjea7muWKqOWKqOeUu1xyXG5cdFx0XHRcdC8vIFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gXHR9KTtcclxuXHRcdFx0XHQvLyB0aGlzLmlzSGlzdG9yeUxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHQvLyB9LDEwMDApXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWKoOi9veWIneWni+mhtemdoua2iOaBr1xyXG5cdFx0XHRnZXRNc2dMaXN0KCl7XHJcblx0XHRcdFx0Ly8g5raI5oGv5YiX6KGoXHJcblx0XHRcdFx0bGV0IGxpc3QgPSBbXHJcblx0XHRcdFx0XHR7dHlwZTpcInN5c3RlbVwiLG1zZzp7aWQ6MCx0eXBlOlwidGV4dFwiLGNvbnRlbnQ6e3RleHQ6XCLmiJHku6znmoTnp4HkurrogYrlpKnlrqRcIn19fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0XHQvLyDojrflj5bmtojmga/kuK3nmoTlm77niYcs5bm25aSE55CG5pi+56S65bC65a+4XHJcblx0XHRcdFx0Zm9yKGxldCBpPTA7aTxsaXN0Lmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdFx0aWYobGlzdFtpXS50eXBlPT0ndXNlcicmJmxpc3RbaV0ubXNnLnR5cGU9PVwiaW1nXCIpe1xyXG5cdFx0XHRcdFx0XHRsaXN0W2ldLm1zZy5jb250ZW50ID0gdGhpcy5zZXRQaWNTaXplKGxpc3RbaV0ubXNnLmNvbnRlbnQpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1zZ0ltZ0xpc3QucHVzaChsaXN0W2ldLm1zZy5jb250ZW50LnVybCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMubXNnTGlzdCA9IGxpc3Q7XHJcblx0XHRcdFx0Ly8g5rua5Yqo5Yiw5bqV6YOoXHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQvL+i/m+WFpemhtemdoua7muWKqOWIsOW6lemDqFxyXG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxUb3AgPSA5OTk5O1xyXG5cdFx0XHRcdFx0dGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2Nyb2xsQW5pbWF0aW9uID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvL+WkhOeQhuWbvueJh+WwuuWvuO+8jOWmguaenOS4jeWkhOeQhuWuvemrmO+8jOaWsOi/m+WFpemhtemdouWKoOi9veWbvueJh+aXtuWAmeS8mumXqlxyXG5cdFx0XHRzZXRQaWNTaXplKGNvbnRlbnQpe1xyXG5cdFx0XHRcdC8vIOiuqeWbvueJh+acgOmVv+i+ueetieS6juiuvue9rueahOacgOWkp+mVv+W6pu+8jOefrei+ueetieavlOS+i+e8qeWwj++8jOWbvueJh+aOp+S7tuecn+WunuaUueWPmO+8jOWMuuWIq+S6jmFzcGVjdEZpdOaWueW8j+OAglxyXG5cdFx0XHRcdGxldCBtYXhXID0gdW5pLnVweDJweCgzNTApOy8vMzUw5piv5a6a5LmJ5raI5oGv5Zu+54mH5pyA5aSn5a695bqmXHJcblx0XHRcdFx0bGV0IG1heEggPSB1bmkudXB4MnB4KDM1MCk7Ly8zNTDmmK/lrprkuYnmtojmga/lm77niYfmnIDlpKfpq5jluqZcclxuXHRcdFx0XHRpZihjb250ZW50Lnc+bWF4V3x8Y29udGVudC5oPm1heEgpe1xyXG5cdFx0XHRcdFx0bGV0IHNjYWxlID0gY29udGVudC53L2NvbnRlbnQuaDtcclxuXHRcdFx0XHRcdGNvbnRlbnQudyA9IHNjYWxlPjE/bWF4VzptYXhIKnNjYWxlO1xyXG5cdFx0XHRcdFx0Y29udGVudC5oID0gc2NhbGU+MT9tYXhXL3NjYWxlOm1heEg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly/mm7TlpJrlip/og70o54K55Ye7K+W8ueWHuikgXHJcblx0XHRcdHNob3dNb3JlKCl7XHJcblx0XHRcdFx0dGhpcy5pc1ZvaWNlID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5oaWRlRW1vamkgPSB0cnVlO1xyXG5cdFx0XHRcdGlmKHRoaXMuaGlkZU1vcmUpe1xyXG5cdFx0XHRcdFx0dGhpcy5oaWRlTW9yZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5vcGVuRHJhd2VyKCk7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLmhpZGVEcmF3ZXIoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaJk+W8gOaKveWxiVxyXG5cdFx0XHRvcGVuRHJhd2VyKCl7XHJcblx0XHRcdFx0dGhpcy5wb3B1cExheWVyQ2xhc3MgPSAnc2hvd0xheWVyJztcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6ZqQ6JeP5oq95bGJXHJcblx0XHRcdGhpZGVEcmF3ZXIoKXtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTGF5ZXJDbGFzcyA9ICcnO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdHRoaXMuaGlkZU1vcmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5oaWRlRW1vamkgPSB0cnVlO1xyXG5cdFx0XHRcdH0sMTUwKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6YCJ5oup5Zu+54mH5Y+R6YCBXHJcblx0XHRcdGNob29zZUltYWdlKCl7XHJcblx0XHRcdFx0dGhpcy5nZXRJbWFnZSgnYWxidW0nKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/mi43nhaflj5HpgIFcclxuXHRcdFx0Y2FtZXJhKCl7XHJcblx0XHRcdFx0dGhpcy5nZXRJbWFnZSgnY2FtZXJhJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v6YCJ54Wn54mHIG9yIOaLjeeFp1xyXG5cdFx0XHRnZXRJbWFnZSh0eXBlKXtcclxuXHRcdFx0XHR0aGlzLmhpZGVEcmF3ZXIoKTtcclxuXHRcdFx0XHR1bmkuY2hvb3NlSW1hZ2Uoe1xyXG5cdFx0XHRcdFx0c291cmNlVHlwZTpbdHlwZV0sXHJcblx0XHRcdFx0XHRzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8v5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKT0+e1xyXG5cdFx0XHRcdFx0XHRmb3IobGV0IGk9MDtpPHJlcy50ZW1wRmlsZVBhdGhzLmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5nZXRJbWFnZUluZm8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0c3JjOiByZXMudGVtcEZpbGVQYXRoc1tpXSxcclxuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChpbWFnZSk9PntcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaW1hZ2Uud2lkdGgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIumAieaLqeWbvueJh1wiKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaW1hZ2UuaGVpZ2h0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLnVwbG9hZEZpbGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogJ2h0dHA6Ly80OS4yMzUuMTA0LjIyNDo4MDgyL3VwdXAnLCAvL+S7heS4uuekuuS+i++8jOmdnuecn+WunueahOaOpeWPo+WcsOWdgFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoc1tpXSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAodXBsb2FkRmlsZVJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLkuIrkvKDlm77niYdcIik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgbXNnID0ge3VybDpKU09OLnBhcnNlKHVwbG9hZEZpbGVSZXMuZGF0YSkudXJsLHc6aW1hZ2Uud2lkdGgsaDppbWFnZS5oZWlnaHR9O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZW5kTXNnKG1zZywnaW1nJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpgInmi6nooajmg4VcclxuXHRcdFx0Y2hvb3NlRW1vamkoKXtcclxuXHRcdFx0XHR0aGlzLmhpZGVNb3JlID0gdHJ1ZTtcclxuXHRcdFx0XHRpZih0aGlzLmhpZGVFbW9qaSl7XHJcblx0XHRcdFx0XHR0aGlzLmhpZGVFbW9qaSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5vcGVuRHJhd2VyKCk7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLmhpZGVEcmF3ZXIoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5re75Yqg6KGo5oOFXHJcblx0XHRcdGFkZEVtb2ppKGVtKXtcclxuXHRcdFx0XHR0aGlzLnRleHRNc2crPWVtLmFsdDtcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8v6I635Y+W54Sm54K577yM5aaC5p6c5LiN5piv6YCJ6KGo5oOFaW5nLOWImeWFs+mXreaKveWxiVxyXG5cdFx0XHR0ZXh0YXJlYUZvY3VzKCl7XHJcblx0XHRcdFx0aWYodGhpcy5wb3B1cExheWVyQ2xhc3M9PSdzaG93TGF5ZXInICYmIHRoaXMuaGlkZU1vcmUgPT0gZmFsc2Upe1xyXG5cdFx0XHRcdFx0dGhpcy5oaWRlRHJhd2VyKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlj5HpgIHmloflrZfmtojmga9cclxuXHRcdFx0c2VuZFRleHQoKXtcclxuXHRcdFx0XHR0aGlzLmhpZGVEcmF3ZXIoKTsvL+makOiXj+aKveWxiVxyXG5cdFx0XHRcdGlmKCF0aGlzLnRleHRNc2cpe1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgY29udGVudCA9IHRoaXMucmVwbGFjZUVtb2ppKHRoaXMudGV4dE1zZyk7XHJcblx0XHRcdFx0bGV0IG1zZyA9IHt0ZXh0OmNvbnRlbnR9XHJcblx0XHRcdFx0dGhpcy5zZW5kTXNnKG1zZywndGV4dCcpO1xyXG5cdFx0XHRcdHRoaXMudGV4dE1zZyA9ICcnOy8v5riF56m66L6T5YWl5qGGXHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5pu/5o2i6KGo5oOF56ym5Y+35Li65Zu+54mHXHJcblx0XHRcdHJlcGxhY2VFbW9qaShzdHIpe1xyXG5cdFx0XHRcdGxldCByZXBsYWNlZFN0ciA9IHN0ci5yZXBsYWNlKC9cXFsoW14oXFxdfFxcWyldKilcXF0vZywoaXRlbSwgaW5kZXgpPT57XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIml0ZW06IFwiICsgaXRlbSk7XHJcblx0XHRcdFx0XHRmb3IobGV0IGk9MDtpPHRoaXMuZW1vamlMaXN0Lmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdFx0XHRsZXQgcm93ID0gdGhpcy5lbW9qaUxpc3RbaV07XHJcblx0XHRcdFx0XHRcdGZvcihsZXQgaj0wO2o8cm93Lmxlbmd0aDtqKyspe1xyXG5cdFx0XHRcdFx0XHRcdGxldCBFTSA9IHJvd1tqXTtcclxuXHRcdFx0XHRcdFx0XHRpZihFTS5hbHQ9PWl0ZW0pe1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly/lnKjnur/ooajmg4Xot6/lvoTvvIzlm77mlofmt7fmjpLlv4Xpobvkvb/nlKjnvZHnu5zot6/lvoTvvIzor7fkuIrkvKDkuIDku73ooajmg4XliLDkvaDnmoTmnI3liqHlmajlkI7lho3mm7/mjaLmraTot6/lvoQgXHJcblx0XHRcdFx0XHRcdFx0XHQvL+avlOWmguS9oOS4iuS8oOacjeWKoeWZqOWQju+8jOS9oOeahDEwMC5naWbot6/lvoTkuLpodHRwczovL3d3dy54eHguY29tL2Vtb2ppLzEwMC5naWYg5YiZ5pu/5o2ib25saW5lUGF0aOWhq+WGmeS4umh0dHBzOi8vd3d3Lnh4eC5jb20vZW1vamkvXHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgb25saW5lUGF0aCA9ICdodHRwOi8vNDkuMjM1LjEwNC4yMjQ6ODA4Mi91cGxvYWRzL2Vtb2ppLydcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBpbWdzdHIgPSAnPGltZyBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZTtcIiBzcmM9XCInK29ubGluZVBhdGgrRU0udXJsKydcIj4nO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJpbWdzdHI6IFwiICsgaW1nc3RyKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBpbWdzdHI7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuICc8ZGl2IHN0eWxlPVwibGluZS1oZWlnaHQ6MjVweFwiPicrcmVwbGFjZWRTdHIrJzwvZGl2Pic7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDlj5HpgIHmtojmga9cclxuXHRcdFx0c2VuZE1zZyhjb250ZW50LHR5cGUpe1xyXG5cdFx0XHRcdC8v5a6e6ZmF5bqU55So5Lit77yM5q2k5aSE5bqU6K+l5o+Q5Lqk6ZW/6L+e5o6l77yM5qih5p2/5LuF5YGa5pys5Zyw5aSE55CG44CCXHJcblx0XHRcdFx0dmFyIG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcdGxldCBsYXN0aWQgPSB0aGlzLm1zZ0xpc3RbdGhpcy5tc2dMaXN0Lmxlbmd0aC0xXS5tc2cuaWQ7XHJcblx0XHRcdFx0bGFzdGlkKys7XHJcblx0XHRcdFx0bGV0IG1zZyA9IHt0eXBlOid1c2VyJyxteXVpZDp0aGlzLm15dWlkLG1zZzp7aWQ6bGFzdGlkLHRpbWU6bm93RGF0ZS5nZXRIb3VycygpK1wiOlwiK25vd0RhdGUuZ2V0TWludXRlcygpLHR5cGU6dHlwZSx1c2VyaW5mbzp7dWlkOnRoaXMubXl1aWQsdXNlcm5hbWU6XCLogIHlqYZcIixmYWNlOlwiL3N0YXRpYy9pbWcvZ2lybC5qcGdcIn0sY29udGVudDpjb250ZW50fX1cclxuXHRcdFx0XHQvLyDlj5HpgIHmtojmga9cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuWPkemAgeeahOa2iOaBr1wiLG1zZylcclxuXHRcdFx0XHR1bmkuc2VuZFNvY2tldE1lc3NhZ2Uoe1xyXG5cdFx0XHRcdFx0ZGF0YTpKU09OLnN0cmluZ2lmeShtc2cpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCLlj5HpgIHmiJDlip9cIilcclxuXHRcdFx0XHR0aGlzLnNjcmVlbk1zZyhtc2cpOy8v5riy5p+T55qE5piv6Ieq5bex55qEMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5re75Yqg5paH5a2X5raI5oGv5Yiw5YiX6KGoXHJcblx0XHRcdGFkZFRleHRNc2cobXNnKXtcclxuXHRcdFx0XHR0aGlzLm1zZ0xpc3QucHVzaChtc2cpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmt7vliqDor63pn7Pmtojmga/liLDliJfooahcclxuXHRcdFx0YWRkVm9pY2VNc2cobXNnKXtcclxuXHRcdFx0XHR0aGlzLm1zZ0xpc3QucHVzaChtc2cpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmt7vliqDlm77niYfmtojmga/liLDliJfooahcclxuXHRcdFx0YWRkSW1nTXNnKG1zZyl7XHJcblx0XHRcdFx0bXNnLm1zZy5jb250ZW50ID0gdGhpcy5zZXRQaWNTaXplKG1zZy5tc2cuY29udGVudCk7XHJcblx0XHRcdFx0dGhpcy5tc2dJbWdMaXN0LnB1c2gobXNnLm1zZy5jb250ZW50LnVybCk7XHJcblx0XHRcdFx0dGhpcy5tc2dMaXN0LnB1c2gobXNnKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5re75Yqg57O757uf5paH5a2X5raI5oGv5Yiw5YiX6KGoXHJcblx0XHRcdGFkZFN5c3RlbVRleHRNc2cobXNnKXtcclxuXHRcdFx0XHR0aGlzLm1zZ0xpc3QucHVzaChtc2cpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpooTop4jlm77niYdcclxuXHRcdFx0c2hvd1BpYyhtc2cpe1xyXG5cdFx0XHRcdHVuaS5wcmV2aWV3SW1hZ2Uoe1xyXG5cdFx0XHRcdFx0aW5kaWNhdG9yOlwibm9uZVwiLFxyXG5cdFx0XHRcdFx0Y3VycmVudDptc2cuY29udGVudC51cmwsXHJcblx0XHRcdFx0XHR1cmxzOiB0aGlzLm1zZ0ltZ0xpc3RcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5pKt5pS+6K+t6Z+zXHJcblx0XHRcdHBsYXlWb2ljZShtc2cpe1xyXG5cdFx0XHRcdHRoaXMucGxheU1zZ2lkPW1zZy5pZDtcclxuXHRcdFx0XHR0aGlzLkFVRElPLnNyYyA9IG1zZy5jb250ZW50LnVybDtcclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRoaXMuQVVESU8ucGxheSgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlvZXpn7PlvIDlp4tcclxuXHRcdFx0dm9pY2VCZWdpbihlKXtcclxuXHRcdFx0XHRpZihlLnRvdWNoZXMubGVuZ3RoPjEpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5pbml0UG9pbnQuWSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xyXG5cdFx0XHRcdHRoaXMuaW5pdFBvaW50LmlkZW50aWZpZXIgPSBlLnRvdWNoZXNbMF0uaWRlbnRpZmllcjtcclxuXHRcdFx0XHR0aGlzLlJFQ09SREVSLnN0YXJ0KHtmb3JtYXQ6XCJtcDNcIn0pOy8v5b2V6Z+z5byA5aeLLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+W9lemfs+W8gOWni1VJ5pWI5p6cXHJcblx0XHRcdHJlY29yZEJlZ2luKGUpe1xyXG5cdFx0XHRcdHRoaXMucmVjb3JkaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLnZvaWNlVGlzPSfmnb7lvIAg57uT5p2fJztcclxuXHRcdFx0XHR0aGlzLnJlY29yZExlbmd0aCA9IDA7XHJcblx0XHRcdFx0dGhpcy5yZWNvcmRUaW1lciA9IHNldEludGVydmFsKCgpPT57XHJcblx0XHRcdFx0XHR0aGlzLnJlY29yZExlbmd0aCsrO1xyXG5cdFx0XHRcdH0sMTAwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5b2V6Z+z6KKr5omT5patXHJcblx0XHRcdHZvaWNlQ2FuY2VsKCl7XHJcblx0XHRcdFx0dGhpcy5yZWNvcmRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLnZvaWNlVGlzPSfmjInkvY8g6K+06K+dJztcclxuXHRcdFx0XHR0aGlzLnJlY29yZFRpcyA9ICfmiYvmjIfkuIrmu5Eg5Y+W5raI5Y+R6YCBJ1xyXG5cdFx0XHRcdHRoaXMud2lsbFN0b3AgPSB0cnVlOy8v5LiN5Y+R6YCB5b2V6Z+zXHJcblx0XHRcdFx0dGhpcy5SRUNPUkRFUi5zdG9wKCk7Ly/lvZXpn7Pnu5PmnZ9cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5b2V6Z+z5LitKOWIpOaWreaYr+WQpuinpuWPkeS4iua7keWPlua2iOWPkemAgSlcclxuXHRcdFx0dm9pY2VJbmcoZSl7XHJcblx0XHRcdFx0aWYoIXRoaXMucmVjb3JkaW5nKXtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IHRvdWNoZSA9IGUudG91Y2hlc1swXTtcclxuXHRcdFx0XHQvL+S4iua7keS4gOS4quWvvOiIquagj+eahOmrmOW6puinpuWPkeS4iua7keWPlua2iOWPkemAgVxyXG5cdFx0XHRcdGlmKHRoaXMuaW5pdFBvaW50LlkgLSB0b3VjaGUuY2xpZW50WT49dW5pLnVweDJweCgxMDApKXtcclxuXHRcdFx0XHRcdHRoaXMud2lsbFN0b3AgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5yZWNvcmRUaXMgPSAn5p2+5byA5omL5oyHIOWPlua2iOWPkemAgSdcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMud2lsbFN0b3AgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMucmVjb3JkVGlzID0gJ+aJi+aMh+S4iua7kSDlj5bmtojlj5HpgIEnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnu5PmnZ/lvZXpn7NcclxuXHRcdFx0dm9pY2VFbmQoZSl7XHJcblx0XHRcdFx0aWYoIXRoaXMucmVjb3JkaW5nKXtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5yZWNvcmRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLnZvaWNlVGlzPSfmjInkvY8g6K+06K+dJztcclxuXHRcdFx0XHR0aGlzLnJlY29yZFRpcyA9ICfmiYvmjIfkuIrmu5Eg5Y+W5raI5Y+R6YCBJ1xyXG5cdFx0XHRcdHRoaXMuUkVDT1JERVIuc3RvcCgpOy8v5b2V6Z+z57uT5p2fXHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5b2V6Z+z57uT5p2fKOWbnuiwg+aWh+S7tilcclxuXHRcdFx0cmVjb3JkRW5kKGUpe1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5yZWNvcmRUaW1lcik7XHJcblx0XHRcdFx0aWYoIXRoaXMud2lsbFN0b3Ape1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJlOiBcIiArIEpTT04uc3RyaW5naWZ5KGUpKTtcclxuXHRcdFx0XHRcdHVuaS51cGxvYWRGaWxlKHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnaHR0cDovLzQ5LjIzNS4xMDQuMjI0OjgwODIvdXB1cCcsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXHJcblx0XHRcdFx0XHRcdGZpbGVQYXRoOiBlLnRlbXBGaWxlUGF0aCxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogKHVwbG9hZEZpbGVSZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgbXNnID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGVuZ3RoOjAsXHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6SlNPTi5wYXJzZSh1cGxvYWRGaWxlUmVzLmRhdGEpLnVybFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRsZXQgbWluID0gcGFyc2VJbnQodGhpcy5yZWNvcmRMZW5ndGgvNjApO1xyXG5cdFx0XHRcdFx0XHRcdGxldCBzZWMgPSB0aGlzLnJlY29yZExlbmd0aCU2MDtcclxuXHRcdFx0XHRcdFx0XHRtaW4gPSBtaW48MTA/JzAnK21pbjptaW47XHJcblx0XHRcdFx0XHRcdFx0c2VjID0gc2VjPDEwPycwJytzZWM6c2VjO1xyXG5cdFx0XHRcdFx0XHRcdG1zZy5sZW5ndGggPSBtaW4rJzonK3NlYztcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNlbmRNc2cobXNnLCd2b2ljZScpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCflj5bmtojlj5HpgIHlvZXpn7MnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy53aWxsU3RvcCA9IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDliIfmjaLor63pn7Mv5paH5a2X6L6T5YWlXHJcblx0XHRcdHN3aXRjaFZvaWNlKCl7XHJcblx0XHRcdFx0dGhpcy5oaWRlRHJhd2VyKCk7XHJcblx0XHRcdFx0dGhpcy5pc1ZvaWNlID0gdGhpcy5pc1ZvaWNlP2ZhbHNlOnRydWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRpc2NhcmQoKXtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHRAaW1wb3J0IFwiQC9zdGF0aWMvSE0tY2hhdC9jc3Mvc3R5bGUuc2Nzc1wiOyBcclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 8 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 10 */
/*!*************************************!*\
  !*** D:/学习/uni-app/实例/聊天模板/App.vue ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDME07QUFDMU0sZ0JBQWdCLDZNQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRTpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWC4yLjIuMi4yMDE5MDgxNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!**************************************************************!*\
  !*** D:/学习/uni-app/实例/聊天模板/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 12);\n/* harmony import */ var _E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtyQixDQUFnQix5ckJBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWC4yLjIuMi4yMDE5MDgxNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWC4yLjIuMi4yMDE5MDgxNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRTpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWC4yLjIuMi4yMDE5MDgxNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXOi/hembt+S4i+i9vVxcXFxIQnVpbGRlclguMi4yLjIuMjAxOTA4MTYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUU6XFxcXOi/hembt+S4i+i9vVxcXFxIQnVpbGRlclguMi4yLjIuMjAxOTA4MTYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUU6XFxcXOi/hembt+S4i+i9vVxcXFxIQnVpbGRlclguMi4yLjIuMjAxOTA4MTYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXOi/hembt+S4i+i9vVxcXFxIQnVpbGRlclguMi4yLjIuMjAxOTA4MTYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFFOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYLjIuMi4yLjIwMTkwODE2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/学习/uni-app/实例/聊天模板/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    // console.log('App Launch')\n  },\n  onShow: function onShow() {\n    // console.log('App Show')\n  },\n  onHide: function onHide() {\n    // console.log('App Hide')\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBWTtBQUNyQjtBQUNBLEdBSGE7QUFJZEMsUUFBTSxFQUFFLGtCQUFZO0FBQ25CO0FBQ0EsR0FOYTtBQU9kQyxRQUFNLEVBQUUsa0JBQVk7QUFDbkI7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdBcHAgU2hvdycpXG5cdH0sXG5cdG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ })
],[[0,"app-config"]]]);