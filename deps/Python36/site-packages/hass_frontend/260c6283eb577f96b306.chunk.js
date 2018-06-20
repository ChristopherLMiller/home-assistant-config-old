/*! For license information please see 260c6283eb577f96b306.chunk.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{140:function(e,n,a){"use strict";a(2),a(28);var o=a(75),r=a(4),c=a(43),i=a(36);const t=document.createElement("template");t.setAttribute("style","display: none;"),t.innerHTML='<dom-module id="paper-checkbox">\n  <template strip-whitespace="">\n    <style>\n      :host {\n        display: inline-block;\n        white-space: nowrap;\n        cursor: pointer;\n        --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);\n        /* -1px is a sentinel for the default and is replaced in `attached`. */\n        --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);\n        @apply --paper-font-common-base;\n        line-height: 0;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:focus) {\n        outline: none;\n      }\n\n      .hidden {\n        display: none;\n      }\n\n      #checkboxContainer {\n        display: inline-block;\n        position: relative;\n        width: var(--calculated-paper-checkbox-size);\n        height: var(--calculated-paper-checkbox-size);\n        min-width: var(--calculated-paper-checkbox-size);\n        margin: var(--paper-checkbox-margin, initial);\n        vertical-align: var(--paper-checkbox-vertical-align, middle);\n        background-color: var(--paper-checkbox-unchecked-background-color, transparent);\n      }\n\n      #ink {\n        position: absolute;\n\n        /* Center the ripple in the checkbox by negative offsetting it by\n         * (inkWidth - rippleWidth) / 2 */\n        top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n        left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n        width: var(--calculated-paper-checkbox-ink-size);\n        height: var(--calculated-paper-checkbox-ink-size);\n        color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));\n        opacity: 0.6;\n        pointer-events: none;\n      }\n\n      #ink:dir(rtl) {\n        right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n        left: auto;\n      }\n\n      #ink[checked] {\n        color: var(--paper-checkbox-checked-ink-color, var(--primary-color));\n      }\n\n      #checkbox {\n        position: relative;\n        box-sizing: border-box;\n        height: 100%;\n        border: solid 2px;\n        border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n        border-radius: 2px;\n        pointer-events: none;\n        -webkit-transition: background-color 140ms, border-color 140ms;\n        transition: background-color 140ms, border-color 140ms;\n      }\n\n      /* checkbox checked animations */\n      #checkbox.checked #checkmark {\n        -webkit-animation: checkmark-expand 140ms ease-out forwards;\n        animation: checkmark-expand 140ms ease-out forwards;\n      }\n\n      @-webkit-keyframes checkmark-expand {\n        0% {\n          -webkit-transform: scale(0, 0) rotate(45deg);\n        }\n        100% {\n          -webkit-transform: scale(1, 1) rotate(45deg);\n        }\n      }\n\n      @keyframes checkmark-expand {\n        0% {\n          transform: scale(0, 0) rotate(45deg);\n        }\n        100% {\n          transform: scale(1, 1) rotate(45deg);\n        }\n      }\n\n      #checkbox.checked {\n        background-color: var(--paper-checkbox-checked-color, var(--primary-color));\n        border-color: var(--paper-checkbox-checked-color, var(--primary-color));\n      }\n\n      #checkmark {\n        position: absolute;\n        width: 36%;\n        height: 70%;\n        border-style: solid;\n        border-top: none;\n        border-left: none;\n        border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n        border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n        border-color: var(--paper-checkbox-checkmark-color, white);\n        -webkit-transform-origin: 97% 86%;\n        transform-origin: 97% 86%;\n        box-sizing: content-box; /* protect against page-level box-sizing */\n      }\n\n      #checkmark:dir(rtl) {\n        -webkit-transform-origin: 50% 14%;\n        transform-origin: 50% 14%;\n      }\n\n      /* label */\n      #checkboxLabel {\n        position: relative;\n        display: inline-block;\n        vertical-align: middle;\n        padding-left: var(--paper-checkbox-label-spacing, 8px);\n        white-space: normal;\n        line-height: normal;\n        color: var(--paper-checkbox-label-color, var(--primary-text-color));\n        @apply --paper-checkbox-label;\n      }\n\n      :host([checked]) #checkboxLabel {\n        color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));\n        @apply --paper-checkbox-label-checked;\n      }\n\n      #checkboxLabel:dir(rtl) {\n        padding-right: var(--paper-checkbox-label-spacing, 8px);\n        padding-left: 0;\n      }\n\n      #checkboxLabel[hidden] {\n        display: none;\n      }\n\n      /* disabled state */\n\n      :host([disabled]) #checkbox {\n        opacity: 0.5;\n        border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n      }\n\n      :host([disabled][checked]) #checkbox {\n        background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n        opacity: 0.5;\n      }\n\n      :host([disabled]) #checkboxLabel  {\n        opacity: 0.65;\n      }\n\n      /* invalid state */\n      #checkbox.invalid:not(.checked) {\n        border-color: var(--paper-checkbox-error-color, var(--error-color));\n      }\n    </style>\n\n    <div id="checkboxContainer">\n      <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">\n        <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>\n      </div>\n    </div>\n\n    <div id="checkboxLabel"><slot></slot></div>\n  </template>\n\n  \n</dom-module>',document.head.appendChild(t.content),Object(r.a)({is:"paper-checkbox",behaviors:[o.a],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){Object(c.a)(this,function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim()){var e=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),n="px",a=e.match(/[A-Za-z]+$/);null!==a&&(n=a[0]);var o=parseFloat(e),r=8/3*o;"px"===n&&(r=Math.floor(r))%2!=o%2&&r++,this.updateStyles({"--paper-checkbox-ink-size":r+n})}})},_computeCheckboxClass:function(e,n){var a="";return e&&(a+="checked "),n&&(a+="invalid"),a},_computeCheckmarkClass:function(e){return e?"":"hidden"},_createRipple:function(){return this._rippleContainer=this.$.checkboxContainer,i.b._createRipple.call(this)}})},284:function(e,n,a){"use strict";a.r(n),a(27),a(67),a(140),a(58),a(122);var o=a(0),r=a(3),c=a(61),i=a(12);customElements.define("login-form",class extends(Object(i.a)(r.a)){static get template(){return o["a"]`
    <style include="iron-flex iron-positioning"></style>
    <style>
      :host {
        white-space: nowrap;
      }

      paper-input {
        display: block;
        margin-bottom: 16px;
      }

      paper-checkbox {
        margin-right: 8px;
      }

      paper-button {
        margin-left: 72px;
      }

      .interact {
        height: 125px;
      }

      #validatebox {
        margin-top: 16px;
        text-align: center;
      }

      .validatemessage {
        margin-top: 10px;
      }
    </style>

    <div class="layout vertical center center-center fit">
      <img src="/static/icons/favicon-192x192.png" height="192">
      <a href="#" id="hideKeyboardOnFocus"></a>
      <div class="interact">
        <div id="loginform" hidden\$="[[showSpinner]]">
          <paper-input id="passwordInput" label="[[localize('ui.login-form.password')]]" type="password" autofocus="" invalid="[[errorMessage]]" error-message="[[errorMessage]]" value="{{password}}"></paper-input>
          <div class="layout horizontal center">
            <paper-checkbox for="" id="rememberLogin">[[localize('ui.login-form.remember')]]</paper-checkbox>
            <paper-button on-click="validatePassword">[[localize('ui.login-form.log_in')]]</paper-button>
          </div>
        </div>
        <div id="validatebox" hidden\$="[[!showSpinner]]">
          <paper-spinner active="true"></paper-spinner><br>
          <div class="validatemessage">[[computeLoadingMsg(isValidating)]]</div>
        </div>
      </div>
    </div>
`}static get properties(){return{hass:{type:Object},connectionPromise:{type:Object,notify:!0,observer:"handleConnectionPromiseChanged"},errorMessage:{type:String,value:""},isValidating:{type:Boolean,observer:"isValidatingChanged",value:!1},showLoading:{type:Boolean,value:!1},showSpinner:{type:Boolean,computed:"computeShowSpinner(showLoading, isValidating)"},password:{type:String,value:""}}}ready(){super.ready(),this.addEventListener("keydown",e=>this.passwordKeyDown(e))}connectedCallback(){super.connectedCallback(),window.removeInitMsg()}computeLoadingMsg(e){return e?"Connecting":"Loading data"}computeShowSpinner(e,n){return e||n}isValidatingChanged(e){e||setTimeout(()=>{this.$.passwordInput.inputElement.inputElement&&this.$.passwordInput.inputElement.inputElement.focus()},10)}passwordKeyDown(e){13===e.keyCode?(this.validatePassword(),e.preventDefault()):this.errorMessage&&(this.errorMessage="")}validatePassword(){var e=this.password;this.$.hideKeyboardOnFocus.focus(),this.connectionPromise=window.createHassConnection(e),this.$.rememberLogin.checked&&this.connectionPromise.then(function(){localStorage.authToken=e})}handleConnectionPromiseChanged(e){if(e){var n=this;this.isValidating=!0,this.connectionPromise.then(function(){n.isValidating=!1,n.password=""},function(e){n.isValidating=!1,e===c.a?n.errorMessage="Unable to connect":e===c.b?n.errorMessage="Invalid password":n.errorMessage="Unknown error: "+e})}}})}}]);
//# sourceMappingURL=260c6283eb577f96b306.chunk.js.map