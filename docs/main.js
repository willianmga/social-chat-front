(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/willian.azevedo/git/personal/reactive-chat-front/src/main.ts */"zUnb");


/***/ }),

/***/ "0lwS":
/*!******************************************************!*\
  !*** ./src/app/chat-mobile/chat-mobile.component.ts ***!
  \******************************************************/
/*! exports provided: ChatMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMobileComponent", function() { return ChatMobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat-web-socket.service */ "wc0d");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/session.service */ "pRC4");
/* harmony import */ var _service_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/contact.service */ "HiVs");
/* harmony import */ var _service_chat_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/chat-message.service */ "PEfN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


















const _c0 = ["messageinput"];
const _c1 = ["chatHistoryContainer"];
function ChatMobileComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 60);
} }
function ChatMobileComponent_section_1_div_1_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.sessionDetails == null ? null : ctx_r5.sessionDetails.loggedInUser == null ? null : ctx_r5.sessionDetails.loggedInUser.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.sessionDetails == null ? null : ctx_r5.sessionDetails.loggedInUser == null ? null : ctx_r5.sessionDetails.loggedInUser.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r5.connectionStatusLabelColor());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.connectionStatus);
} }
function ChatMobileComponent_section_1_div_1_mat_selection_list_2_mat_list_option_1_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r9.description);
} }
function ChatMobileComponent_section_1_div_1_mat_selection_list_2_mat_list_option_1_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.getLastReceivedMessage(contact_r9));
} }
function ChatMobileComponent_section_1_div_1_mat_selection_list_2_mat_list_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatMobileComponent_section_1_div_1_mat_selection_list_2_mat_list_option_1_Template_mat_list_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const contact_r9 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r14.openContact(contact_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatMobileComponent_section_1_div_1_mat_selection_list_2_mat_list_option_1_p_4_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatMobileComponent_section_1_div_1_mat_selection_list_2_mat_list_option_1_p_5_Template, 2, 1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", contact_r9 == null ? null : contact_r9.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.hasUnreadMessage(contact_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.hasUnreadMessage(contact_r9));
} }
function ChatMobileComponent_section_1_div_1_mat_selection_list_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-selection-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatMobileComponent_section_1_div_1_mat_selection_list_2_mat_list_option_1_Template, 7, 4, "mat-list-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.contacts);
} }
function ChatMobileComponent_section_1_div_1_mat_selection_list_3_mat_list_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatMobileComponent_section_1_div_1_mat_selection_list_3_mat_list_option_1_Template_mat_list_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const contact_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r18.openContact(contact_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contact_r17.name, " ");
} }
function ChatMobileComponent_section_1_div_1_mat_selection_list_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-selection-list", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatMobileComponent_section_1_div_1_mat_selection_list_3_mat_list_option_1_Template, 2, 1, "mat-list-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.contacts);
} }
function ChatMobileComponent_section_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatMobileComponent_section_1_div_1_mat_card_1_Template, 7, 5, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatMobileComponent_section_1_div_1_mat_selection_list_2_Template, 2, 2, "mat-selection-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatMobileComponent_section_1_div_1_mat_selection_list_3_Template, 2, 2, "mat-selection-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.mobileMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.mobileMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.mobileMode);
} }
function ChatMobileComponent_section_1_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-card", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatMobileComponent_section_1_section_4_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatMobileComponent_section_1_section_4_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.closeContact(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
} }
function ChatMobileComponent_section_1_section_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chatMessage_r26 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r22.getSenderName(chatMessage_r26));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r22.getSenderAvatar(chatMessage_r26), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.getSenderName(chatMessage_r26));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, chatMessage_r26 == null ? null : chatMessage_r26.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chatMessage_r26.content);
} }
function ChatMobileComponent_section_1_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatMobileComponent_section_1_section_4_button_9_Template, 3, 1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatMobileComponent_section_1_section_4_div_12_Template, 11, 7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Start typing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ChatMobileComponent_section_1_section_4_Template_input_keyup_enter_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.sendMessage(_r23.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatMobileComponent_section_1_section_4_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.sendMessage(_r23.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.selectedContact == null ? null : ctx_r4.selectedContact.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedContact == null ? null : ctx_r4.selectedContact.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedContact == null ? null : ctx_r4.selectedContact.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.mobileMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.selectedContact == null ? null : ctx_r4.selectedContact.chatHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Send");
} }
function ChatMobileComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatMobileComponent_section_1_div_1_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatMobileComponent_section_1_section_3_Template, 3, 0, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatMobileComponent_section_1_section_4_Template, 23, 6, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showContactsList());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.showMessageHistory());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showMessageHistory());
} }
class ChatMobileComponent {
    constructor(chatService, sessionService, contactService, chatMessageService, _snackBar) {
        this.chatService = chatService;
        this.sessionService = sessionService;
        this.contactService = contactService;
        this.chatMessageService = chatMessageService;
        this._snackBar = _snackBar;
        this.needsDataReload = false;
        this.contacts = [];
        this.dataLoadFinished = false;
        this.listMode = true;
        this.player = new howler__WEBPACK_IMPORTED_MODULE_2__["Howl"]({
            src: ['assets/notification.mp3']
        });
    }
    ngOnInit() {
        this.checkMobileMode();
        setTimeout(() => {
            this.loadChatData();
        }, 5000);
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    loadChatData() {
        this.chatService
            .openConnection()
            .subscribe(() => {
            this.chatService
                .getConnectionStatusSubject()
                .subscribe(status => {
                this.connectionStatus = status;
                this.dataLoadFinished = true;
                if (this.connectionStatus === _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ChatConnectionStatus"].ONLINE && this.needsDataReload) {
                    this.needsDataReload = false;
                    this.loadChatData();
                }
                else if (this.connectionStatus === _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ChatConnectionStatus"].OFFLINE) {
                    this.needsDataReload = true;
                }
            });
            this.sessionService
                .getSessionDetailsObservable()
                .subscribe((sessionDetails) => {
                this.sessionDetails = sessionDetails;
            });
            this.contactService
                .requestContacts()
                .subscribe((response) => {
                this.contacts = response;
            });
            this.contactService
                .newContactObservable()
                .subscribe(newContact => {
                this.contacts.push(newContact);
            });
            this.chatMessageService
                .getMessagesObservable()
                .subscribe((message) => {
                this.notifyReceivedMessage(message);
            });
            this.chatMessageService
                .getChatHistoryObservable()
                .subscribe(chatHistoryResponse => {
                this.notifyReceivedChatHistory(chatHistoryResponse);
            });
        });
    }
    onResize(event) {
        this.checkMobileMode();
    }
    notifyReceivedChatHistory(chatHistory) {
        this.mergeChatHistoryToHistory(() => this.findContact(chatHistory.destinationId), chatHistory);
    }
    notifyReceivedMessage(message) {
        this.addMessageToHistory(() => this.findMessageDestinationContact(message), message);
        this.player.play();
    }
    notifySentMessage(message) {
        this.addMessageToHistory(() => this.findContact(message.destinationId), message);
    }
    findMessageDestinationContact(message) {
        return (message.destinationType === _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["DestinationType"].USER)
            ? this.findContact(message.from)
            : this.findContact(message.destinationId);
    }
    findMessageSenderContact(message) {
        var _a, _b, _c, _d;
        return (message.from === ((_b = (_a = this.sessionDetails) === null || _a === void 0 ? void 0 : _a.loggedInUser) === null || _b === void 0 ? void 0 : _b.id))
            ? this.findContact((_d = (_c = this.sessionDetails) === null || _c === void 0 ? void 0 : _c.loggedInUser) === null || _d === void 0 ? void 0 : _d.id)
            : this.findContact(message === null || message === void 0 ? void 0 : message.from);
    }
    findContact(contactId) {
        return this.contacts.filter(contact => contact.id === contactId)[0];
    }
    addMessageToHistory(findDestinationContactFunction, message) {
        const destinationContact = findDestinationContactFunction();
        destinationContact.chatHistory.push(message);
    }
    mergeChatHistoryToHistory(findDestinationContactFunction, chatHistoryResponse) {
        const destinationContact = findDestinationContactFunction();
        const newMessages = chatHistoryResponse
            .chatHistory
            .filter(chatMessage => destinationContact.chatHistory
            .filter(message => message.id === chatMessage.id).length === 0);
        const existingMessages = newMessages.concat(destinationContact.chatHistory);
        destinationContact.chatHistory = this.sortChatMessageByDate(existingMessages);
    }
    sortChatMessageByDate(existingMessages) {
        return existingMessages.sort((m1, m2) => {
            if (m1.date > m2.date) {
                return 1;
            }
            else if (m1.date < m2.date) {
                return -1;
            }
            return 0;
        });
    }
    /* View Methods  */
    sendMessage(message) {
        if (message !== undefined && message.trim() !== '') {
            this.chatMessageService
                .sendMessage(message, this.selectedContact)
                .subscribe(requestMessage => {
                this.notifySentMessage(requestMessage.payload);
                this.messageinput.nativeElement.value = '';
                this.messageinput.nativeElement.focus();
            }, error => {
                this._snackBar.open('You are offline. Your message was not sent.', 'ok', {
                    duration: 3000,
                    verticalPosition: 'top'
                });
            });
        }
    }
    openContact(contact) {
        if (!contact.chatHistoryLoaded) {
            contact.chatHistoryLoaded = true;
            this.chatMessageService.requestChatHistory(contact);
        }
        this.selectContact(contact);
        this.listMode = false;
    }
    selectContact(contact) {
        this.selectedContact = contact;
    }
    closeContact() {
        this.listMode = true;
    }
    isReceivedMessage(message) {
        var _a, _b;
        return message.from !== ((_b = (_a = this.sessionDetails) === null || _a === void 0 ? void 0 : _a.loggedInUser) === null || _b === void 0 ? void 0 : _b.id);
    }
    isGroupMessage(message) {
        return message.destinationType !== _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["DestinationType"].USER;
    }
    getSenderName(message) {
        var _a, _b, _c, _d;
        const senderContact = this.findMessageSenderContact(message);
        return (senderContact !== undefined)
            ? senderContact.name
            : ((message === null || message === void 0 ? void 0 : message.from) === ((_b = (_a = this.sessionDetails) === null || _a === void 0 ? void 0 : _a.loggedInUser) === null || _b === void 0 ? void 0 : _b.id))
                ? (_d = (_c = this.sessionDetails) === null || _c === void 0 ? void 0 : _c.loggedInUser) === null || _d === void 0 ? void 0 : _d.name : '';
    }
    getSenderAvatar(message) {
        var _a, _b, _c, _d;
        const senderContact = this.findMessageSenderContact(message);
        return (senderContact !== undefined)
            ? senderContact === null || senderContact === void 0 ? void 0 : senderContact.avatar : (message.from === ((_b = (_a = this.sessionDetails) === null || _a === void 0 ? void 0 : _a.loggedInUser) === null || _b === void 0 ? void 0 : _b.id))
            ? (_d = (_c = this.sessionDetails) === null || _c === void 0 ? void 0 : _c.loggedInUser) === null || _d === void 0 ? void 0 : _d.avatar : '';
    }
    // TODO: find proper last message received
    getLastReceivedMessage(contact) {
        var _a;
        return (_a = contact.chatHistory[contact.chatHistory.length - 1]) === null || _a === void 0 ? void 0 : _a.content;
    }
    // TODO: find whether there's unread message properly
    hasUnreadMessage(contact) {
        return contact.chatHistory.length > 0;
    }
    showContactsList() {
        return (this.mobileMode)
            ? this.listMode
            : true;
    }
    showMessageHistory() {
        return (this.mobileMode)
            ? !this.listMode
            : this.selectedContact !== undefined;
    }
    loadIsFinished() {
        return (this.connectionStatus === _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ChatConnectionStatus"].ONLINE)
            ? this.dataLoadFinished
            : true;
    }
    connectionStatusLabelColor() {
        switch (this.connectionStatus) {
            case _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ChatConnectionStatus"].ONLINE:
                return 'green';
            case _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ChatConnectionStatus"].OFFLINE:
                return 'red';
            default:
                return 'white';
        }
    }
    scrollToBottom() {
        try {
            this.chatHistoryContainer.nativeElement.scrollTop = this.chatHistoryContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
    checkMobileMode() {
        this.mobileMode = window.innerWidth <= _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["MOBILE_MAX_WIDTH"];
    }
}
ChatMobileComponent.ɵfac = function ChatMobileComponent_Factory(t) { return new (t || ChatMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ChatWebSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_chat_message_service__WEBPACK_IMPORTED_MODULE_5__["ChatMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
ChatMobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatMobileComponent, selectors: [["app-chat-mobile"]], viewQuery: function ChatMobileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messageinput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatHistoryContainer = _t.first);
    } }, hostBindings: function ChatMobileComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ChatMobileComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "main-container", 4, "ngIf"], [2, "margin", "50px auto", 3, "diameter"], [1, "main-container"], ["class", "contacts-area", 4, "ngIf"], [1, "chat-history-area"], ["class", "select-contact-container", 4, "ngIf"], ["class", "chat-history-container", 4, "ngIf"], [1, "contacts-area"], ["class", "user-contact-card", 4, "ngIf"], [3, "multiple", 4, "ngIf"], ["class", "contact-list", 3, "multiple", 4, "ngIf"], [1, "user-contact-card"], ["mat-card-avatar", "", 3, "src"], [3, "multiple"], ["class", "contact-option", 3, "click", 4, "ngFor", "ngForOf"], [1, "contact-option", 3, "click"], ["mat-list-avatar", "", 3, "src"], [2, "font-weight", "bold"], ["style", "font-size: x-small", 4, "ngIf"], ["style", "font-size: x-small; font-weight: bold", 4, "ngIf"], [2, "font-size", "x-small"], [2, "font-size", "x-small", "font-weight", "bold"], [1, "contact-list", 3, "multiple"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "select-contact-container"], [1, "contact-details-container"], [1, "contact-card"], [1, "chat-history-container"], ["mat-icon-button", "", "class", "mediumIcon", 3, "click", 4, "ngIf"], [1, "message-history-container"], ["chatHistoryContainer", ""], ["class", "message-container", 4, "ngFor", "ngForOf"], [1, "type-message-container"], [1, "message-type-area"], ["appearance", "fill", 2, "width", "100%", "background-color", "grey"], ["matInput", "", "placeholder", "Type your message", 3, "keyup.enter"], ["messageinput", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-icon-button", "", 1, "mediumIcon", 3, "click"], [3, "inline"], [1, "message-container"], [1, "image"], [3, "alt", "src"], [1, "title"], [1, "subtitle"], [1, "content"]], template: function ChatMobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatMobileComponent_section_0_Template, 3, 1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatMobileComponent_section_1_Template, 5, 3, "section", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadIsFinished());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadIsFinished());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListOption"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListAvatarCssMatStyler"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".main-container[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr;\n  grid-template-areas:\n    \"contacts-area\"\n    \"chat-history-area\";\n}\n\n.contacts-area[_ngcontent-%COMP%] {\n  min-height: calc(100vh - var(--toolbar-fixed-height));\n  grid-row: 1;\n  grid-area: contacts-area;\n  background: white;\n}\n\n.chat-history-area[_ngcontent-%COMP%] {\n  grid-area: chat-history-area;\n  grid-row: 1;\n  display: grid;\n  height: calc(100vh - var(--toolbar-fixed-height));\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas:\n    \"select-contact-container\"\n    \"chat-history-container\";\n}\n\n.select-contact-container[_ngcontent-%COMP%] {\n  grid-area: select-contact-container;\n  display: none;\n}\n\n.chat-history-container[_ngcontent-%COMP%] {\n  background: var(--chat-history-background-color);\n  grid-area: chat-history-container;\n  grid-row: 1;\n  display: grid;\n  height: calc(100vh - var(--toolbar-fixed-height));\n  grid-row-gap: 10px;\n  grid-template-columns: 1fr;\n  grid-template-rows: 90px 1fr 80px;\n  grid-template-areas:\n    \"contact-details-container\"\n    \"message-history-container\"\n    \"type-message-container\";\n}\n\n\n\n.contact-option[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.contact-card[_ngcontent-%COMP%] {\n  height: 36px;\n  max-height: 36px;\n}\n\n\n\n.contact-details-container[_ngcontent-%COMP%] {\n  grid-area: contact-details-container;\n}\n\n.message-history-container[_ngcontent-%COMP%] {\n  grid-area: message-history-container;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  overflow: auto;\n}\n\n.type-message-container[_ngcontent-%COMP%] {\n  grid-area: type-message-container;\n  padding: 0 15px;\n}\n\n.message-type-area[_ngcontent-%COMP%] {\n  color: white;\n}\n\n\n\n.message-container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 95%;\n  margin-top: 4px;\n  display: grid;\n  padding: 10px;\n  grid-template-columns: 68px 1fr;\n  grid-template-rows: auto auto auto;\n  grid-template-areas:\n    \"image title\"\n    \"image subtitle\"\n    \"image content\";\n}\n\n.image[_ngcontent-%COMP%] {\n  grid-area: image;\n}\n\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 48px;\n}\n\n.title[_ngcontent-%COMP%] {\n  grid-area: title;\n  font-weight: bold;\n  font-size: large;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  grid-area: subtitle;\n  font-size: small;\n}\n\n.content[_ngcontent-%COMP%] {\n  font-size: medium;\n  margin-top: 5px;\n}\n\n\n\n.message-container-received-message[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: small;\n  color: blueviolet;\n  font-weight: bold;\n  margin-left: 0px;\n}\n\n.message-container-sent-message[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: small;\n  color: green;\n  font-weight: bold;\n  margin-left: 0px;\n}\n\n.mediumIcon[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\n@media only screen and (min-width: 450px) {\n\n  \n\n  .main-container[_ngcontent-%COMP%] {\n    grid-template-columns: 256px 1fr;\n    grid-template-areas:\n    \"contacts-area chat-history-area\";\n  }\n\n  .contacts-area[_ngcontent-%COMP%] {\n    background: var(--contacts-bar-color);\n    height: calc(100vh - 57px);\n    min-width: 256px;\n    max-width: 256px;\n    grid-area: contacts-area;\n  }\n\n  .chat-history-area[_ngcontent-%COMP%] {\n    min-width: 480px;\n    grid-area: chat-history-area;\n    grid-template-rows: 1fr 1fr;\n  }\n\n  .select-contact-container[_ngcontent-%COMP%] {\n    background: var(--chat-history-background-color);\n    min-width: 480px;\n    grid-template-rows: 1fr;\n    height: calc(100vh - var(--toolbar-fixed-height));\n    display: flex;\n    flex-direction: column;\n  }\n\n  .chat-history-container[_ngcontent-%COMP%] {\n    min-width: 480px;\n    grid-area: chat-history-container;\n    grid-template-rows: 90px 1fr 110px;\n  }\n\n  \n\n  .contact-card[_ngcontent-%COMP%] {\n    color: black;\n    background: white;\n  }\n\n  .contact-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n    color: black;\n  }\n\n  .user-contact-card[_ngcontent-%COMP%] {\n    height: 36px;\n    max-height: 36px;\n    background: var(--contacts-bar-color);\n  }\n\n  .type-message-container[_ngcontent-%COMP%] {\n    width: 90%;\n    height: auto;\n    padding: 15px;\n    margin: 15px auto;\n  }\n\n  .contact-list[_ngcontent-%COMP%]   mat-selection-list[_ngcontent-%COMP%] {\n    padding-top: 0;\n    color: black;\n  }\n\n  .contact-list[_ngcontent-%COMP%]   mat-list-option[_ngcontent-%COMP%] {\n    color: whitesmoke;\n    height: 32px;\n  }\n\n  .contact-list[_ngcontent-%COMP%]   mat-list-option[_ngcontent-%COMP%]:hover {\n    background: grey;\n    color: white;\n  }\n\n  .contact-list[_ngcontent-%COMP%]   mat-list-option[aria-selected=\"true\"][_ngcontent-%COMP%] {\n    background: var(--selected-item-color);\n    color: white;\n    font-weight: bold;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1tb2JpbGUvY2hhdC1tb2JpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUI7O3VCQUVxQjtBQUN2Qjs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlEQUFpRDtFQUNqRCwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCOzs0QkFFMEI7QUFDNUI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlEQUFpRDtFQUNqRCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGlDQUFpQztFQUNqQzs7OzRCQUcwQjtBQUM1Qjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSw4QkFBOEI7O0FBRTlCO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0VBQ2YsYUFBYTtFQUNiLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0Isa0NBQWtDO0VBQ2xDOzs7bUJBR2lCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUdBLDRCQUE0Qjs7QUFFNUI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsY0FBYzs7RUFFZDtJQUNFLGdDQUFnQztJQUNoQztxQ0FDaUM7RUFDbkM7O0VBRUE7SUFDRSxxQ0FBcUM7SUFDckMsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixpREFBaUQ7SUFDakQsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsa0NBQWtDO0VBQ3BDOztFQUVBLHNCQUFzQjs7RUFFdEI7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtbW9iaWxlL2NoYXQtbW9iaWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAgQ29udGFpbmVycyAqL1xuXG4ubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiY29udGFjdHMtYXJlYVwiXG4gICAgXCJjaGF0LWhpc3RvcnktYXJlYVwiO1xufVxuXG4uY29udGFjdHMtYXJlYSB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b29sYmFyLWZpeGVkLWhlaWdodCkpO1xuICBncmlkLXJvdzogMTtcbiAgZ3JpZC1hcmVhOiBjb250YWN0cy1hcmVhO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNoYXQtaGlzdG9yeS1hcmVhIHtcbiAgZ3JpZC1hcmVhOiBjaGF0LWhpc3RvcnktYXJlYTtcbiAgZ3JpZC1yb3c6IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLXRvb2xiYXItZml4ZWQtaGVpZ2h0KSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJzZWxlY3QtY29udGFjdC1jb250YWluZXJcIlxuICAgIFwiY2hhdC1oaXN0b3J5LWNvbnRhaW5lclwiO1xufVxuXG4uc2VsZWN0LWNvbnRhY3QtY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiBzZWxlY3QtY29udGFjdC1jb250YWluZXI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jaGF0LWhpc3RvcnktY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hhdC1oaXN0b3J5LWJhY2tncm91bmQtY29sb3IpO1xuICBncmlkLWFyZWE6IGNoYXQtaGlzdG9yeS1jb250YWluZXI7XG4gIGdyaWQtcm93OiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b29sYmFyLWZpeGVkLWhlaWdodCkpO1xuICBncmlkLXJvdy1nYXA6IDEwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggMWZyIDgwcHg7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJjb250YWN0LWRldGFpbHMtY29udGFpbmVyXCJcbiAgICBcIm1lc3NhZ2UtaGlzdG9yeS1jb250YWluZXJcIlxuICAgIFwidHlwZS1tZXNzYWdlLWNvbnRhaW5lclwiO1xufVxuXG4vKiBDb250YWN0cyBBcmVhICAqL1xuXG4uY29udGFjdC1vcHRpb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb250YWN0LWNhcmQge1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1heC1oZWlnaHQ6IDM2cHg7XG59XG5cbi8qIENoYXQgSGlzdG9yeSBBcmVhICovXG5cbi5jb250YWN0LWRldGFpbHMtY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiBjb250YWN0LWRldGFpbHMtY29udGFpbmVyO1xufVxuXG4ubWVzc2FnZS1oaXN0b3J5LWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogbWVzc2FnZS1oaXN0b3J5LWNvbnRhaW5lcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udHlwZS1tZXNzYWdlLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogdHlwZS1tZXNzYWdlLWNvbnRhaW5lcjtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4ubWVzc2FnZS10eXBlLWFyZWEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFN0YXJ0IG9mIG1lc3NhZ2Ugc3R5bGluZyAgKi9cblxuLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjhweCAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJpbWFnZSB0aXRsZVwiXG4gICAgXCJpbWFnZSBzdWJ0aXRsZVwiXG4gICAgXCJpbWFnZSBjb250ZW50XCI7XG59XG5cbi5pbWFnZSB7XG4gIGdyaWQtYXJlYTogaW1hZ2U7XG59XG5cbi5pbWFnZSBpbWcge1xuICBtYXgtd2lkdGg6IDQ4cHg7XG59XG5cbi50aXRsZSB7XG4gIGdyaWQtYXJlYTogdGl0bGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uc3VidGl0bGUge1xuICBncmlkLWFyZWE6IHN1YnRpdGxlO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4uY29udGVudCB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cblxuLyogRW5kIG9mIG1lc3NhZ2Ugc3R5bGluZyAgKi9cblxuLm1lc3NhZ2UtY29udGFpbmVyLXJlY2VpdmVkLW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogYmx1ZXZpb2xldDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5tZXNzYWdlLWNvbnRhaW5lci1zZW50LW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4ubWVkaXVtSWNvbiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NTBweCkge1xuXG4gIC8qIENvbnRhaW5lciAqL1xuXG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTZweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcImNvbnRhY3RzLWFyZWEgY2hhdC1oaXN0b3J5LWFyZWFcIjtcbiAgfVxuXG4gIC5jb250YWN0cy1hcmVhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250YWN0cy1iYXItY29sb3IpO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU3cHgpO1xuICAgIG1pbi13aWR0aDogMjU2cHg7XG4gICAgbWF4LXdpZHRoOiAyNTZweDtcbiAgICBncmlkLWFyZWE6IGNvbnRhY3RzLWFyZWE7XG4gIH1cblxuICAuY2hhdC1oaXN0b3J5LWFyZWEge1xuICAgIG1pbi13aWR0aDogNDgwcHg7XG4gICAgZ3JpZC1hcmVhOiBjaGF0LWhpc3RvcnktYXJlYTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIH1cblxuICAuc2VsZWN0LWNvbnRhY3QtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGF0LWhpc3RvcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgbWluLXdpZHRoOiA0ODBweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b29sYmFyLWZpeGVkLWhlaWdodCkpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5jaGF0LWhpc3RvcnktY29udGFpbmVyIHtcbiAgICBtaW4td2lkdGg6IDQ4MHB4O1xuICAgIGdyaWQtYXJlYTogY2hhdC1oaXN0b3J5LWNvbnRhaW5lcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggMWZyIDExMHB4O1xuICB9XG5cbiAgLyogQ2hhdCBIaXN0b3J5IEFyZWEgKi9cblxuICAuY29udGFjdC1jYXJkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cblxuICAuY29udGFjdC1jYXJkIG1hdC1jYXJkLXRpdGxlIG1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAudXNlci1jb250YWN0LWNhcmQge1xuICAgIGhlaWdodDogMzZweDtcbiAgICBtYXgtaGVpZ2h0OiAzNnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbnRhY3RzLWJhci1jb2xvcik7XG4gIH1cblxuICAudHlwZS1tZXNzYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgfVxuXG4gIC5jb250YWN0LWxpc3QgbWF0LXNlbGVjdGlvbi1saXN0IHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAuY29udGFjdC1saXN0IG1hdC1saXN0LW9wdGlvbiB7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICB9XG5cbiAgLmNvbnRhY3QtbGlzdCBtYXQtbGlzdC1vcHRpb246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGdyZXk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLmNvbnRhY3QtbGlzdCBtYXQtbGlzdC1vcHRpb25bYXJpYS1zZWxlY3RlZD1cInRydWVcIl0ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlbGVjdGVkLWl0ZW0tY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMobileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-mobile',
                templateUrl: './chat-mobile.component.html',
                styleUrls: ['./chat-mobile.component.css']
            }]
    }], function () { return [{ type: _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ChatWebSocketService"] }, { type: _service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }, { type: _service_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"] }, { type: _service_chat_message_service__WEBPACK_IMPORTED_MODULE_5__["ChatMessageService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, { messageinput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['messageinput']
        }], chatHistoryContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chatHistoryContainer']
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "1ld4":
/*!******************************************!*\
  !*** ./src/app/service/login.service.ts ***!
  \******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class LoginService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    login(loginRequest) {
        return this.httpClient
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].authServiceUrl}/v1/auth`, loginRequest);
    }
    test() {
        return this.httpClient
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].authServiceUrl}/v1/auth`);
    }
    getIp() {
        return this.httpClient.get('http://api.ipify.org/?format=json');
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "1liP":
/*!*************************************************!*\
  !*** ./src/app/service/notification.service.ts ***!
  \*************************************************/
/*! exports provided: NotificationType, NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



var NotificationType;
(function (NotificationType) {
    NotificationType["NEW_MESSAGE"] = "NEW_MESSAGE";
    NotificationType["NEW_CONTACT"] = "NEW_CONTACT";
})(NotificationType || (NotificationType = {}));
class NotificationService {
    constructor() {
        this.notificationsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    newContact(contact) {
        this.notificationsSubject
            .next({
            referenceId: contact.id,
            message: `${contact.name} has joined SocialChat!`,
            avatar: contact.avatar,
            type: NotificationType.NEW_CONTACT,
            read: false
        });
    }
    newMessage(message) {
        this.notificationsSubject
            .next({
            referenceId: message.id,
            message: `New Message: ${message.content}`,
            type: NotificationType.NEW_MESSAGE,
            read: false
        });
    }
    getNotificationsSubject() {
        return this.notificationsSubject;
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8C2i":
/*!***************************************************!*\
  !*** ./src/app/service/loggedIn-guard.service.ts ***!
  \***************************************************/
/*! exports provided: LoggedInGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuardService", function() { return LoggedInGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session.service */ "pRC4");





class LoggedInGuardService {
    constructor(router, sessionService) {
        this.router = router;
        this.sessionService = sessionService;
    }
    canActivate(route, state) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            if (this.sessionService.isLoggedIn()) {
                this.router.navigateByUrl('/chat');
                observer.next(false);
            }
            else {
                observer.next(true);
            }
            observer.complete();
        });
    }
}
LoggedInGuardService.ɵfac = function LoggedInGuardService_Factory(t) { return new (t || LoggedInGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"])); };
LoggedInGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoggedInGuardService, factory: LoggedInGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggedInGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "Ay3y":
/*!*******************************************!*\
  !*** ./src/app/service/signup.service.ts ***!
  \*******************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat-web-socket.service */ "wc0d");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");





class SignupService {
    constructor(chatService) {
        this.chatService = chatService;
        this.signupSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subscribe();
    }
    subscribe() {
        this.chatService
            .getWebSocketObservable()
            .subscribe(responseMessage => {
            const messagePayload = responseMessage.payload;
            if (responseMessage.type === _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["MessageType"].SIGNUP) {
                this.signupSubject.next(messagePayload);
            }
        });
    }
    signup(name, username, password) {
        this.chatService
            .sendWebSocketMessage({
            type: _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["MessageType"].SIGNUP,
            payload: {
                name,
                username,
                password
            }
        });
        return this.signupSubject;
    }
}
SignupService.ɵfac = function SignupService_Factory(t) { return new (t || SignupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ChatWebSocketService"])); };
SignupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignupService, factory: SignupService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ChatWebSocketService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    backendUrl: 'wss://127.0.0.1:8080/chat',
    authServiceUrl: 'https://127.0.0.1:8081'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HiVs":
/*!********************************************!*\
  !*** ./src/app/service/contact.service.ts ***!
  \********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-web-socket.service */ "wc0d");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session.service */ "pRC4");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification.service */ "1liP");







class ContactService {
    constructor(chatService, sessionService, notificationService) {
        this.chatService = chatService;
        this.sessionService = sessionService;
        this.notificationService = notificationService;
        this.contactsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.newContactSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subscribe();
    }
    subscribe() {
        this.chatService
            .getWebSocketObservable()
            .subscribe(responseMessage => {
            const messagePayload = responseMessage.payload;
            if (responseMessage.type === _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["MessageType"].CONTACTS_LIST) {
                this.contactsSubject.next(this.formatContacts(messagePayload));
            }
            else if (responseMessage.type === _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["MessageType"].NEW_CONTACT_REGISTERED) {
                const contact = this.formatContact(messagePayload);
                this.notificationService.newContact(contact);
                this.newContactSubject.next(contact);
            }
        });
    }
    requestContacts() {
        this.chatService
            .sendWebSocketMessage({
            type: _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["MessageType"].CONTACTS_LIST,
            token: this.sessionService.getToken()
        });
        return this.contactsSubject;
    }
    newContactObservable() {
        return this.newContactSubject;
    }
    formatContacts(contacts) {
        return contacts
            .map(contact => this.formatContact(contact));
    }
    formatContact(contact) {
        contact.chatHistory = [];
        contact.chatHistoryLoaded = false;
        try {
            const splitName = contact.name.split(' ');
            contact.name = (splitName.length > 1)
                ? `${this.capitalize(splitName[0])} ${this.capitalize(splitName[splitName.length - 1])}`
                : `${this.capitalize(splitName[0])}`;
            return contact;
        }
        catch (e) {
            return contact;
        }
    }
    capitalize(data) {
        return data.charAt(0).toUpperCase() + data.slice(1);
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_chat_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["ChatWebSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["ChatWebSocketService"] }, { type: _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }, { type: _notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "P1QN":
/*!******************************************************!*\
  !*** ./src/app/system-info/system-info.component.ts ***!
  \******************************************************/
/*! exports provided: SystemInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemInfoComponent", function() { return SystemInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../package.json */ "kiQV");
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../package.json */ "kiQV", 1);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







function SystemInfoComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ") (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contributor_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contributor_r1.name, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", contributor_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", contributor_r1.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class SystemInfoComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.repoName = _package_json__WEBPACK_IMPORTED_MODULE_1__["name"];
        this.description = _package_json__WEBPACK_IMPORTED_MODULE_1__["description"];
        this.version = _package_json__WEBPACK_IMPORTED_MODULE_1__["version"];
        this.repositoryUrl = _package_json__WEBPACK_IMPORTED_MODULE_1__["repository"].url;
        this.contributors = _package_json__WEBPACK_IMPORTED_MODULE_1__["contributors"];
    }
    close() {
        this.dialogRef.close();
    }
}
SystemInfoComponent.ɵfac = function SystemInfoComponent_Factory(t) { return new (t || SystemInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
SystemInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SystemInfoComponent, selectors: [["app-system-info"]], decls: 35, vars: 5, consts: [[2, "background-color", "white", "color", "black"], ["mat-card-image", "", "src", "assets/logo.png"], [2, "text-align", "center"], [1, "container"], [1, "developers-container"], [4, "ngFor", "ngForOf"], [1, "repository-container"], ["target", "_blank", 3, "href"], ["href", "https://github.com/willianmga/reactive-chat-back", "target", "_blank"], [1, "version-container"], [2, "text-align", "right", "margin", "20px"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function SystemInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SocialChat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SystemInfoComponent_li_12_Template, 8, 3, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Repositories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "reactive-chat-back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Back-end: 1.0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemInfoComponent_Template_button_click_33_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contributors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.repositoryUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.repoName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Front-end: ", ctx.version, "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardFooter"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["@media only screen and (min-width: 450px) {\n\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n  }\n\n  .developers-container[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n\n  .repository-container[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n\n  .version-container[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtLWluZm8vc3lzdGVtLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0VBRUU7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtLWluZm8vc3lzdGVtLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NTBweCkge1xuXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZGV2ZWxvcGVycy1jb250YWluZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICAucmVwb3NpdG9yeS1jb250YWluZXIge1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cblxuICAudmVyc2lvbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxNSU7XG4gIH1cblxufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-system-info',
                templateUrl: './system-info.component.html',
                styleUrls: ['./system-info.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "PEfN":
/*!*************************************************!*\
  !*** ./src/app/service/chat-message.service.ts ***!
  \*************************************************/
/*! exports provided: ChatMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageService", function() { return ChatMessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat-web-socket.service */ "wc0d");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session.service */ "pRC4");






class ChatMessageService {
    constructor(chatService, sessionService) {
        this.chatService = chatService;
        this.sessionService = sessionService;
        this.messagesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.chatHistorySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subscribe();
    }
    subscribe() {
        this.chatService
            .getWebSocketObservable()
            .subscribe(responseMessage => {
            const messagePayload = responseMessage.payload;
            if (responseMessage.type === _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["MessageType"].USER_MESSAGE) {
                this.messagesSubject.next(messagePayload);
            }
            else if (responseMessage.type === _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["MessageType"].CHAT_HISTORY) {
                this.chatHistorySubject.next(messagePayload);
            }
        });
    }
    sendMessage(message, destinationContact) {
        const destinationType = (destinationContact.contactType === _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ContactType"].USER)
            ? _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["DestinationType"].USER
            : _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["DestinationType"].ALL_USERS_GROUP;
        const session = this.sessionService
            .getSessionDetails();
        const chatMessage = {
            from: session.loggedInUser.id,
            destinationType,
            destinationId: destinationContact.id,
            content: message,
            mimeType: _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["MimeType"].TEXT,
            date: new Date()
        };
        const newMessage = {
            type: _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["MessageType"].USER_MESSAGE,
            token: session.token,
            payload: chatMessage
        };
        return this.chatService
            .sendWebsocketMessage(newMessage);
    }
    requestChatHistory(destinationContact) {
        var _a;
        const chatHistoryRequest = {
            destinationId: destinationContact.id
        };
        if (destinationContact.chatHistory.length > 0) {
            chatHistoryRequest.lastMessageId = (_a = destinationContact === null || destinationContact === void 0 ? void 0 : destinationContact.chatHistory[0]) === null || _a === void 0 ? void 0 : _a.id;
        }
        const request = {
            type: _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["MessageType"].CHAT_HISTORY,
            token: this.sessionService.getToken(),
            payload: chatHistoryRequest
        };
        this.chatService
            .sendWebSocketMessage(request);
    }
    getMessagesObservable() {
        return this.messagesSubject;
    }
    getChatHistoryObservable() {
        return this.chatHistorySubject;
    }
}
ChatMessageService.ɵfac = function ChatMessageService_Factory(t) { return new (t || ChatMessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ChatWebSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"])); };
ChatMessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatMessageService, factory: ChatMessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ChatWebSocketService"] }, { type: _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _system_info_system_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-info/system-info.component */ "P1QN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-web-socket.service */ "wc0d");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/session.service */ "pRC4");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/notification.service */ "1liP");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function AppComponent_div_6_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notifications_active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
} }
function AppComponent_div_6_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notifications_none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
} }
function AppComponent_div_6_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r6.message);
} }
function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_6_mat_icon_2_Template, 2, 1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_6_mat_icon_3_Template, 2, 1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_6_span_6_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_6_Template_span_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.showSystemInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "System info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_6_Template_span_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasUnreadNotifications());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.hasUnreadNotifications());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.notifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Logged as: ", ctx_r0.sessionDetails == null ? null : ctx_r0.sessionDetails.loggedInUser == null ? null : ctx_r0.sessionDetails.loggedInUser.name, "");
} }
class AppComponent {
    constructor(router, chatService, sessionService, notificationService, systemInfoDialog) {
        this.router = router;
        this.chatService = chatService;
        this.sessionService = sessionService;
        this.notificationService = notificationService;
        this.systemInfoDialog = systemInfoDialog;
        this.title = 'SocialChat';
        this.notifications = [];
        this.loadData();
    }
    loadData() {
        this.sessionService
            .getSessionDetailsObservable()
            .subscribe(sessionDetails => {
            this.sessionDetails = sessionDetails;
        });
        this.notificationService
            .getNotificationsSubject()
            .subscribe(newNotification => {
            const unreadNotifications = this.notifications
                .filter(notification => !notification.read);
            unreadNotifications.push(newNotification);
            this.notifications = unreadNotifications;
        });
    }
    logout() {
        this.sessionService.logoff();
        this.router.navigate(['/login']);
    }
    showSystemInfo() {
        this.systemInfoDialog.open(_system_info_system_info_component__WEBPACK_IMPORTED_MODULE_1__["SystemInfoComponent"]);
    }
    isLoggedIn() {
        var _a;
        return (_a = this.sessionDetails) === null || _a === void 0 ? void 0 : _a.loggedIn;
    }
    hasUnreadNotifications() {
        return this.notifications
            .filter(notification => !notification.read)
            .length > 0;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_web_socket_service__WEBPACK_IMPORTED_MODULE_3__["ChatWebSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 2, consts: [[1, "container"], [2, "background-color", "#400d40"], [1, "spacer"], [4, "ngIf"], ["mat-icon-button", "", 2, "margin-right", "10px", 3, "matMenuTriggerFor"], ["style", "font-size: 30px;", 3, "inline", 4, "ngIf"], ["notification", "matMenu"], ["mat-menu-item", "", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [2, "font-size", "30px", 3, "inline"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_6_Template, 18, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  min-height: var(--toolbar-fixed-height);\n  max-height: var(--toolbar-fixed-height);\n}\n\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100vh;\n  grid-template-columns: 1fr;\n  grid-template-rows: var(--toolbar-fixed-height) 1fr;\n  grid-template-areas:\n    \"header\"\n    \"main\";\n}\n\nheader[_ngcontent-%COMP%] {\n  grid-area: header;\n}\n\nmain[_ngcontent-%COMP%] {\n  grid-area: main;\n}\n\n.spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7RUFDdkMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsbURBQW1EO0VBQ25EOztVQUVRO0FBQ1Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuICBtaW4taGVpZ2h0OiB2YXIoLS10b29sYmFyLWZpeGVkLWhlaWdodCk7XG4gIG1heC1oZWlnaHQ6IHZhcigtLXRvb2xiYXItZml4ZWQtaGVpZ2h0KTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLXRvb2xiYXItZml4ZWQtaGVpZ2h0KSAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJoZWFkZXJcIlxuICAgIFwibWFpblwiO1xufVxuXG5oZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbn1cblxubWFpbiB7XG4gIGdyaWQtYXJlYTogbWFpbjtcbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_3__["ChatWebSocketService"] }, { type: _service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }, { type: _service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "UeAQ":
/*!***********************************************!*\
  !*** ./src/app/service/auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session.service */ "pRC4");





class AuthGuardService {
    constructor(router, sessionService) {
        this.router = router;
        this.sessionService = sessionService;
    }
    canActivate(route, state) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            if (!this.sessionService.isLoggedIn()) {
                this.router.navigateByUrl('/login');
                observer.next(false);
            }
            else {
                observer.next(true);
            }
            observer.complete();
        });
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _system_info_system_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./system-info/system-info.component */ "P1QN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _chat_mobile_chat_mobile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./chat-mobile/chat-mobile.component */ "0lwS");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../environments/environment */ "AytR");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_27__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"],
        _system_info_system_info_component__WEBPACK_IMPORTED_MODULE_22__["SystemInfoComponent"],
        _chat_mobile_chat_mobile_component__WEBPACK_IMPORTED_MODULE_24__["ChatMobileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"],
                    _system_info_system_info_component__WEBPACK_IMPORTED_MODULE_22__["SystemInfoComponent"],
                    _chat_mobile_chat_mobile_component__WEBPACK_IMPORTED_MODULE_24__["ChatMobileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_27__["environment"].production })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kiQV":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, description, version, repository, contributors, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"reactive-chat-front\",\"description\":\"The chat that helps you know others\",\"version\":\"2.1.2\",\"repository\":{\"directory\":\"GitHub\",\"type\":\"git\",\"url\":\"https://github.com/willianmga/reactive-chat-front\"},\"contributors\":[{\"name\":\"Willian Azevedo\",\"email\":\"willian.bodnariuc@gmail.com\",\"url\":\"https://willianmga.github.io/\"}],\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build --prod\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"deploy-gb-pages\":\"sh deploy-gb-pages.sh\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~10.2.0\",\"@angular/cdk\":\"^10.2.7\",\"@angular/common\":\"~10.2.0\",\"@angular/compiler\":\"~10.2.0\",\"@angular/core\":\"~10.2.0\",\"@angular/forms\":\"~10.2.0\",\"@angular/material\":\"^10.2.7\",\"@angular/platform-browser\":\"~10.2.0\",\"@angular/platform-browser-dynamic\":\"~10.2.0\",\"@angular/router\":\"~10.2.0\",\"@angular/service-worker\":\"~10.2.0\",\"express\":\"^4.16.4\",\"howler\":\"^2.2.1\",\"rxjs\":\"~6.6.0\",\"socket.io\":\"^2.2.0\",\"socket.io-client\":\"^2.2.0\",\"tslib\":\"^2.0.0\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.1002.0\",\"@angular/cli\":\"~10.2.0\",\"@angular/compiler-cli\":\"~10.2.0\",\"@types/node\":\"^12.11.1\",\"@types/jasmine\":\"~3.5.0\",\"@types/jasminewd2\":\"~2.0.3\",\"codelyzer\":\"^6.0.0\",\"jasmine-core\":\"~3.6.0\",\"jasmine-spec-reporter\":\"~5.0.0\",\"karma\":\"~5.0.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.2\",\"karma-jasmine\":\"~4.0.0\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"~4.0.2\"}}");

/***/ }),

/***/ "pRC4":
/*!********************************************!*\
  !*** ./src/app/service/session.service.ts ***!
  \********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-web-socket.service */ "wc0d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






const loggedOffSessionDetails = {
    loggedIn: false,
    token: undefined,
    loggedInUser: undefined
};
const logoffMessage = {
    type: _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["MessageType"].LOGOFF
};
const SESSION_KEY = 'session';
class SessionService {
    constructor(router, chatService) {
        this.router = router;
        this.chatService = chatService;
        this.sessionDetailsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](loggedOffSessionDetails);
        this.localStorage = window.localStorage;
        this.subscribe();
        this.openSession();
    }
    subscribe() {
        this.chatService
            .getWebSocketObservable()
            .subscribe(responseMessage => {
            if (responseMessage.type === _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["MessageType"].NOT_AUTHENTICATED) {
                this.unauthorizedOrClosed();
            }
        });
    }
    openSession() {
        this.sessionDetailsSubject.next(this.sessionDetails);
        this.loadFromLocalStorage();
    }
    registerSession(session) {
        this.sessionDetails = session;
        this.localStorage.setItem(SESSION_KEY, JSON.stringify(this.sessionDetails)); // TODO: don't save session details on local storage
        this.sessionDetailsSubject.next(this.sessionDetails);
    }
    logoff() {
        this.deregisterSession();
        this.chatService.resetConnection();
    }
    getToken() {
        var _a;
        return (_a = this.sessionDetails) === null || _a === void 0 ? void 0 : _a.token;
    }
    getSessionDetails() {
        return this.sessionDetails;
    }
    isLoggedIn() {
        var _a;
        return (_a = this.sessionDetails) === null || _a === void 0 ? void 0 : _a.loggedIn;
    }
    getSessionDetailsObservable() {
        return this.sessionDetailsSubject;
    }
    loadFromLocalStorage() {
        const sessionJson = this.localStorage.getItem(SESSION_KEY);
        this.sessionDetails = (sessionJson !== undefined)
            ? JSON.parse(sessionJson)
            : loggedOffSessionDetails;
        this.sessionDetailsSubject.next(this.sessionDetails);
    }
    deregisterSession() {
        this.chatService.sendWebSocketMessage(logoffMessage);
        this.sessionDetails = loggedOffSessionDetails;
        this.localStorage.removeItem(SESSION_KEY);
        this.sessionDetailsSubject.next(this.sessionDetails);
        this.chatService.closeWebsocketConnection();
        this.chatService.openWebSocketConnection();
    }
    unauthorizedOrClosed() {
        this.deregisterSession();
        this.router.navigate(['/login']);
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_chat_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["ChatWebSocketService"])); };
SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["ChatWebSocketService"] }]; }, null); })();


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat-web-socket.service */ "wc0d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/signup.service */ "Ay3y");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/session.service */ "pRC4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function SignupComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Signing you up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_card_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
} }
function SignupComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create your account now, it's easy!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_mat_card_1_div_3_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_mat_card_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.hide = !ctx_r6.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_mat_card_1_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.signup(_r3.value, _r4.value, _r5.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Create Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_mat_card_1_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r1.hide ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.hide ? "visibility_off" : "visibility");
} }
class SignupComponent {
    constructor(router, signUpService, sessionService) {
        this.router = router;
        this.signUpService = signUpService;
        this.sessionService = sessionService;
        this.hide = true;
        this.signingUp = false;
        this.error = false;
    }
    ngOnInit() {
    }
    signup(name, username, password) {
        this.signingUp = true;
        this.error = false;
        this.signUpService
            .signup(name, username, password)
            .subscribe((signupResponse) => {
            if (signupResponse.status === _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ResponseStatus"].SUCCESS) {
                const sessionDetails = {
                    loggedIn: true,
                    token: signupResponse.token,
                    loggedInUser: signupResponse.user
                };
                this.sessionService.registerSession(sessionDetails);
                this.router.navigate(['/chat']);
            }
            else {
                this.signingUp = false;
                this.errorMessage = this.getErrorMessage(signupResponse.status);
                this.error = true;
            }
        });
    }
    login() {
        this.router.navigate(['/login']);
    }
    getErrorMessage(status) {
        switch (status) {
            case _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ResponseStatus"].USERNAME_IN_USE:
                return 'Error: This username is already in use';
            case _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ResponseStatus"].INVALID_NAME:
                return 'Error: Invalid name';
            case _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ResponseStatus"].INVALID_USERNAME:
                return 'Error: Invalid username';
            case _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ResponseStatus"].INVALID_PASSWORD:
                return 'Error: Invalid password';
            default:
                return 'Sorry, it\'s us. Try again..';
        }
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_signup_service__WEBPACK_IMPORTED_MODULE_3__["SignupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 2, vars: 2, consts: [["class", "card", 4, "ngIf"], [1, "card"], [2, "text-align", "center"], [2, "margin", "auto"], ["class", "errorMessageBox", 4, "ngIf"], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", "placeholder", "Type your name"], ["nameInput", ""], ["matInput", "", "placeholder", "Type your username"], ["usernameInput", ""], ["matInput", "", "placeholder", "Type your password", 3, "type"], ["passwordInput", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "20px", 3, "click"], ["mat-raised-button", "", "color", "accent", 2, "margin-left", "20px", 3, "click"], [1, "errorMessageBox"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SignupComponent_mat_card_0_Template, 6, 0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_mat_card_1_Template, 30, 5, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signingUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signingUp);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardFooter"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 25%;\n  min-width: 300px;\n  margin: 15px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIHdpZHRoOiAyNSU7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_signup_service__WEBPACK_IMPORTED_MODULE_3__["SignupService"] }, { type: _service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/auth-guard.service */ "UeAQ");
/* harmony import */ var _chat_mobile_chat_mobile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-mobile/chat-mobile.component */ "0lwS");
/* harmony import */ var _service_loggedIn_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/loggedIn-guard.service */ "8C2i");









const routes = [
    { path: '', redirectTo: '/chat', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], canActivate: [_service_loggedIn_guard_service__WEBPACK_IMPORTED_MODULE_6__["LoggedInGuardService"]] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], canActivate: [_service_loggedIn_guard_service__WEBPACK_IMPORTED_MODULE_6__["LoggedInGuardService"]] },
    { path: 'chat', component: _chat_mobile_chat_mobile_component__WEBPACK_IMPORTED_MODULE_5__["ChatMobileComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat-web-socket.service */ "wc0d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/login.service */ "1ld4");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/session.service */ "pRC4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function LoginComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Logging in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_card_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
} }
function LoginComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_mat_card_1_div_3_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_mat_card_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.hide = !ctx_r5.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_mat_card_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.login(_r3.value, _r4.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_mat_card_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.signup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r1.hide ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.hide ? "visibility_off" : "visibility");
} }
class LoginComponent {
    constructor(router, loginService, sessionService) {
        this.router = router;
        this.loginService = loginService;
        this.sessionService = sessionService;
        this.hide = true;
        this.loggingIn = false;
        this.error = false;
    }
    ngOnInit() {
    }
    login(username, password) {
        var _a, _b, _c, _d;
        this.loggingIn = true;
        this.error = false;
        const loginRequest = {
            username,
            password,
            userDeviceDetails: {
                userIp: '10.198.10.2',
                userAgent: (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent,
                screenResolution: {
                    width: (_b = window.innerWidth) === null || _b === void 0 ? void 0 : _b.toString(),
                    height: (_c = window.innerHeight) === null || _c === void 0 ? void 0 : _c.toString(),
                    orientation: (_d = window.orientation) === null || _d === void 0 ? void 0 : _d.toString()
                }
            }
        };
        this.loginService
            .login(loginRequest)
            .subscribe(loginResponse => {
            this.loginService
                .test()
                .subscribe(result => {
                console.log(result);
            });
            if (loginResponse.status === _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ResponseStatus"].SUCCESS) {
                const sessionDetails = {
                    loggedIn: true,
                    token: loginResponse.token,
                    loggedInUser: loginResponse.user
                };
                this.sessionService.registerSession(sessionDetails);
                this.router.navigate(['/chat']);
            }
            else {
                this.loggingIn = false;
                this.errorMessage = this.getErrorMessage(loginResponse.status);
                this.error = true;
            }
        });
    }
    signup() {
        this.router.navigate(['/signup']);
    }
    getErrorMessage(status) {
        switch (status) {
            case _chat_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["ResponseStatus"].INVALID_CREDENTIALS:
                return 'Error: Invalid Credentials';
            default:
                return 'Sorry, It\'s us. Try again..';
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 2, consts: [["class", "card", 4, "ngIf"], [1, "card"], [2, "text-align", "center"], [2, "margin", "auto"], ["class", "errorMessageBox", 4, "ngIf"], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", "matNativeControl", "", "placeholder", "Type your username"], ["usernameInput", ""], ["matInput", "", "placeholder", "Type your password", 3, "type"], ["passwordInput", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "20px", 3, "click"], ["mat-raised-button", "", "color", "accent", 2, "margin-left", "20px", 3, "click"], [1, "errorMessageBox"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_mat_card_0_Template, 6, 0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_mat_card_1_Template, 25, 5, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggingIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggingIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardFooter"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 25%;\n  min-width: 300px;\n  margin: 15px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgd2lkdGg6IDI1JTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "wc0d":
/*!********************************************!*\
  !*** ./src/app/chat-web-socket.service.ts ***!
  \********************************************/
/*! exports provided: MessageType, DestinationType, ContactType, ResponseStatus, MimeType, ChatConnectionStatus, MOBILE_MAX_WIDTH, ChatWebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return MessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationType", function() { return DestinationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactType", function() { return ContactType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseStatus", function() { return ResponseStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeType", function() { return MimeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatConnectionStatus", function() { return ChatConnectionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBILE_MAX_WIDTH", function() { return MOBILE_MAX_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWebSocketService", function() { return ChatWebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/webSocket */ "3uOa");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "AytR");





var MessageType;
(function (MessageType) {
    MessageType["CONTACTS_LIST"] = "CONTACTS_LIST";
    MessageType["CHAT_HISTORY"] = "CHAT_HISTORY";
    MessageType["NEW_CONTACT_REGISTERED"] = "NEW_CONTACT_REGISTERED";
    MessageType["USER_MESSAGE"] = "USER_MESSAGE";
    MessageType["PING"] = "PING";
    MessageType["PONG"] = "PONG";
    MessageType["CONNECTED"] = "CONNECTED";
    MessageType["DISCONNECTED"] = "DISCONNECTED";
    MessageType["AUTHENTICATE"] = "AUTHENTICATE";
    MessageType["REAUTHENTICATE"] = "REAUTHENTICATE";
    MessageType["SIGNUP"] = "SIGNUP";
    MessageType["LOGOFF"] = "LOGOFF";
    MessageType["NOT_AUTHENTICATED"] = "NOT_AUTHENTICATED";
    MessageType["NOT_AUTHORIZED"] = "NOT_AUTHORIZED";
})(MessageType || (MessageType = {}));
var DestinationType;
(function (DestinationType) {
    DestinationType["USER"] = "USER";
    DestinationType["GROUP"] = "GROUP";
    DestinationType["ALL_USERS_GROUP"] = "ALL_USERS_GROUP";
})(DestinationType || (DestinationType = {}));
var ContactType;
(function (ContactType) {
    ContactType["USER"] = "USER";
    ContactType["GROUP"] = "GROUP";
})(ContactType || (ContactType = {}));
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus["SUCCESS"] = "SUCCESS";
    ResponseStatus["INVALID_CREDENTIALS"] = "INVALID_CREDENTIALS";
    ResponseStatus["INVALID_NAME"] = "INVALID_NAME";
    ResponseStatus["INVALID_USERNAME"] = "INVALID_USERNAME";
    ResponseStatus["INVALID_PASSWORD"] = "INVALID_PASSWORD";
    ResponseStatus["SERVER_ERROR"] = "SERVER_ERROR";
    ResponseStatus["USERNAME_IN_USE"] = "USERNAME_IN_USE";
})(ResponseStatus || (ResponseStatus = {}));
var MimeType;
(function (MimeType) {
    MimeType["TEXT"] = "TEXT";
})(MimeType || (MimeType = {}));
var ChatConnectionStatus;
(function (ChatConnectionStatus) {
    ChatConnectionStatus["CONNECTING"] = "Connecting...";
    ChatConnectionStatus["RECONNECTING"] = "Reconnecting...";
    ChatConnectionStatus["ONLINE"] = "Online";
    ChatConnectionStatus["OFFLINE"] = "Offline";
})(ChatConnectionStatus || (ChatConnectionStatus = {}));
const MOBILE_MAX_WIDTH = 450;
const pingMessage = {
    type: MessageType.PING
};
const MAX_RECONNECTION_TRIES = 3;
class ChatWebSocketService {
    constructor() {
        this.reconnectionTries = 0;
        this.connStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](ChatConnectionStatus.OFFLINE);
        this.chatServerWebSocketSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    openWebSocketConnection() {
        this.updateConnectionStatus(ChatConnectionStatus.CONNECTING);
        this.chatServerWebSocket = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__["webSocket"])({
            url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl}`
            // protocol: ['mycookie', 'value']
        });
        this.listenWebSocketMessages();
        return this.chatServerWebSocket;
    }
    openConnection() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](subscriber => {
            this.openWebSocketConnection()
                .subscribe(connection => {
                subscriber.complete();
            }, error => {
                subscriber.error('failed to open connection');
            });
        });
    }
    closeWebsocketConnection() {
        this.chatServerWebSocket.complete();
    }
    resetConnection() {
        this.closeWebsocketConnection();
        this.openWebSocketConnection();
    }
    sendWebSocketMessage(message) {
        this.chatServerWebSocket.next(message);
    }
    sendWebsocketMessage(message) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](subscriber => {
            if (this.chatConnectionStatus !== ChatConnectionStatus.ONLINE) {
                this.reconnectionTries = 0;
                this.tryReconnectWebSocketConnection();
                subscriber.error(new Error('Connection is closed.'));
            }
            else {
                this.chatServerWebSocket.next(message);
                subscriber.next(message);
                subscriber.complete();
            }
        });
    }
    getWebSocketObservable() {
        return this.chatServerWebSocketSubject;
    }
    getConnectionStatusSubject() {
        return this.connStatusSubject;
    }
    listenWebSocketMessages() {
        this.chatServerWebSocket
            .subscribe((responseMessage) => {
            this.chatServerWebSocketSubject.next(responseMessage);
            this.updateConnectionStatus(ChatConnectionStatus.ONLINE);
            // },
            // () => ''//this.tryReconnectWebSocketConnection()
        });
    }
    monitorConnection() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(30000)
            .subscribe(val => {
            if (this.chatConnectionStatus === ChatConnectionStatus.OFFLINE) {
                console.error('trying to reconnect');
                this.reconnect();
            }
            else {
                this.chatServerWebSocket.next(pingMessage);
            }
        });
    }
    tryReconnectWebSocketConnection() {
        this.updateConnectionStatus(ChatConnectionStatus.OFFLINE);
        if (this.reconnectionTries < MAX_RECONNECTION_TRIES) {
            this.reconnectionTries = this.reconnectionTries + 1;
            console.error(`trying to reconnect (${this.reconnectionTries}/${MAX_RECONNECTION_TRIES})`);
            this.reconnect();
        }
    }
    reconnect() {
        this.updateConnectionStatus(ChatConnectionStatus.RECONNECTING);
        this.resetConnection();
    }
    updateConnectionStatus(status) {
        if (status === ChatConnectionStatus.OFFLINE) {
            this.reconnectionTries = 0;
        }
        this.chatConnectionStatus = status;
        this.connStatusSubject.next(this.chatConnectionStatus);
    }
}
ChatWebSocketService.ɵfac = function ChatWebSocketService_Factory(t) { return new (t || ChatWebSocketService)(); };
ChatWebSocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatWebSocketService, factory: ChatWebSocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatWebSocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map