/*! For license information please see 65dd52f530e1cdf01b90.chunk.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{140:function(e,a,t){"use strict";t(2),t(28);var n=t(75),o=t(4),i=t(43),c=t(36);const r=document.createElement("template");r.setAttribute("style","display: none;"),r.innerHTML='<dom-module id="paper-checkbox">\n  <template strip-whitespace="">\n    <style>\n      :host {\n        display: inline-block;\n        white-space: nowrap;\n        cursor: pointer;\n        --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);\n        /* -1px is a sentinel for the default and is replaced in `attached`. */\n        --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);\n        @apply --paper-font-common-base;\n        line-height: 0;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:focus) {\n        outline: none;\n      }\n\n      .hidden {\n        display: none;\n      }\n\n      #checkboxContainer {\n        display: inline-block;\n        position: relative;\n        width: var(--calculated-paper-checkbox-size);\n        height: var(--calculated-paper-checkbox-size);\n        min-width: var(--calculated-paper-checkbox-size);\n        margin: var(--paper-checkbox-margin, initial);\n        vertical-align: var(--paper-checkbox-vertical-align, middle);\n        background-color: var(--paper-checkbox-unchecked-background-color, transparent);\n      }\n\n      #ink {\n        position: absolute;\n\n        /* Center the ripple in the checkbox by negative offsetting it by\n         * (inkWidth - rippleWidth) / 2 */\n        top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n        left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n        width: var(--calculated-paper-checkbox-ink-size);\n        height: var(--calculated-paper-checkbox-ink-size);\n        color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));\n        opacity: 0.6;\n        pointer-events: none;\n      }\n\n      #ink:dir(rtl) {\n        right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n        left: auto;\n      }\n\n      #ink[checked] {\n        color: var(--paper-checkbox-checked-ink-color, var(--primary-color));\n      }\n\n      #checkbox {\n        position: relative;\n        box-sizing: border-box;\n        height: 100%;\n        border: solid 2px;\n        border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n        border-radius: 2px;\n        pointer-events: none;\n        -webkit-transition: background-color 140ms, border-color 140ms;\n        transition: background-color 140ms, border-color 140ms;\n      }\n\n      /* checkbox checked animations */\n      #checkbox.checked #checkmark {\n        -webkit-animation: checkmark-expand 140ms ease-out forwards;\n        animation: checkmark-expand 140ms ease-out forwards;\n      }\n\n      @-webkit-keyframes checkmark-expand {\n        0% {\n          -webkit-transform: scale(0, 0) rotate(45deg);\n        }\n        100% {\n          -webkit-transform: scale(1, 1) rotate(45deg);\n        }\n      }\n\n      @keyframes checkmark-expand {\n        0% {\n          transform: scale(0, 0) rotate(45deg);\n        }\n        100% {\n          transform: scale(1, 1) rotate(45deg);\n        }\n      }\n\n      #checkbox.checked {\n        background-color: var(--paper-checkbox-checked-color, var(--primary-color));\n        border-color: var(--paper-checkbox-checked-color, var(--primary-color));\n      }\n\n      #checkmark {\n        position: absolute;\n        width: 36%;\n        height: 70%;\n        border-style: solid;\n        border-top: none;\n        border-left: none;\n        border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n        border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n        border-color: var(--paper-checkbox-checkmark-color, white);\n        -webkit-transform-origin: 97% 86%;\n        transform-origin: 97% 86%;\n        box-sizing: content-box; /* protect against page-level box-sizing */\n      }\n\n      #checkmark:dir(rtl) {\n        -webkit-transform-origin: 50% 14%;\n        transform-origin: 50% 14%;\n      }\n\n      /* label */\n      #checkboxLabel {\n        position: relative;\n        display: inline-block;\n        vertical-align: middle;\n        padding-left: var(--paper-checkbox-label-spacing, 8px);\n        white-space: normal;\n        line-height: normal;\n        color: var(--paper-checkbox-label-color, var(--primary-text-color));\n        @apply --paper-checkbox-label;\n      }\n\n      :host([checked]) #checkboxLabel {\n        color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));\n        @apply --paper-checkbox-label-checked;\n      }\n\n      #checkboxLabel:dir(rtl) {\n        padding-right: var(--paper-checkbox-label-spacing, 8px);\n        padding-left: 0;\n      }\n\n      #checkboxLabel[hidden] {\n        display: none;\n      }\n\n      /* disabled state */\n\n      :host([disabled]) #checkbox {\n        opacity: 0.5;\n        border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n      }\n\n      :host([disabled][checked]) #checkbox {\n        background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n        opacity: 0.5;\n      }\n\n      :host([disabled]) #checkboxLabel  {\n        opacity: 0.65;\n      }\n\n      /* invalid state */\n      #checkbox.invalid:not(.checked) {\n        border-color: var(--paper-checkbox-error-color, var(--error-color));\n      }\n    </style>\n\n    <div id="checkboxContainer">\n      <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">\n        <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>\n      </div>\n    </div>\n\n    <div id="checkboxLabel"><slot></slot></div>\n  </template>\n\n  \n</dom-module>',document.head.appendChild(r.content),Object(o.a)({is:"paper-checkbox",behaviors:[n.a],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){Object(i.a)(this,function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim()){var e=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),a="px",t=e.match(/[A-Za-z]+$/);null!==t&&(a=t[0]);var n=parseFloat(e),o=8/3*n;"px"===a&&(o=Math.floor(o))%2!=n%2&&o++,this.updateStyles({"--paper-checkbox-ink-size":o+a})}})},_computeCheckboxClass:function(e,a){var t="";return e&&(t+="checked "),a&&(t+="invalid"),t},_computeCheckmarkClass:function(e){return e?"":"hidden"},_createRipple:function(){return this._rippleContainer=this.$.checkboxContainer,c.b._createRipple.call(this)}})},170:function(e,a,t){"use strict";t(2),t(19),t(28),t(42);var n=t(4),o=t(0);Object(n.a)({_template:o["a"]`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"})},184:function(e,a,t){"use strict";t(2),t(19),t(42);var n=t(78),o=(t(108),t(4)),i=t(0);Object(o.a)({_template:i["a"]`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[n.a]})},288:function(e,a,t){"use strict";t.r(a),t(139),t(138),t(119),t(136),t(140),t(59),t(58),t(184),t(170),t(85),t(99),t(102);var n=t(0),o=t(3),i=(t(120),t(151),t(12));customElements.define("ha-panel-shopping-list",class extends(Object(i.a)(o.a)){static get template(){return n["a"]`
    <style include="ha-style">
      :host {
        height: 100%;
      }
      app-toolbar paper-listbox {
        width: 150px;
      }
      app-toolbar paper-item {
        cursor: pointer;
      }
      .content {
        padding-bottom: 32px;
        max-width: 600px;
        margin: 0 auto;
      }
      paper-card {
        display: block;
      }
      paper-icon-item {
        border-top: 1px solid var(--divider-color);
      }
      paper-icon-item:first-child {
        border-top: 0;
      }
      paper-checkbox {
        padding: 11px;
      }
      paper-input {
        --paper-input-container-underline: {
          display: none;
        }
        --paper-input-container-underline-focus: {
          display: none;
        }
        position: relative;
        top: 1px;
      }
      .tip {
        padding: 24px;
        text-align: center;
        color: var(--secondary-text-color);
      }
    </style>

    <app-header-layout has-scrolling-region>
      <app-header slot="header" fixed>
        <app-toolbar>
          <ha-menu-button narrow='[[narrow]]' show-menu='[[showMenu]]'></ha-menu-button>
          <div main-title>[[localize('panel.shopping_list')]]</div>
          <ha-start-voice-button hass='[[hass]]' can-listen='{{canListen}}'></ha-start-voice-button>
          <paper-menu-button
            horizontal-align="right"
            horizontal-offset="-5"
            vertical-offset="-5"
          >
            <paper-icon-button
              icon="hass:dots-vertical"
              slot="dropdown-trigger"
            ></paper-icon-button>
            <paper-listbox slot="dropdown-content">
              <paper-item
                on-click="_clearCompleted"
              >[[localize('ui.panel.shopping-list.clear_completed')]]</paper-item>
            </paper-listbox>
          </paper-menu-button>
        </app-toolbar>
      </app-header>

      <div class='content'>
        <paper-card>
          <paper-icon-item on-focus='_focusRowInput'>
            <paper-icon-button
              slot="item-icon"
              icon="hass:plus"
              on-click='_addItem'
            ></paper-icon-button>
            <paper-item-body>
              <paper-input
                id='addBox'
                placeholder="[[localize('ui.panel.shopping-list.add_item')]]"
                on-keydown='_addKeyPress'
                no-label-float
              ></paper-input>
            </paper-item-body>
          </paper-icon-item>

          <template is='dom-repeat' items='[[items]]'>
            <paper-icon-item>
                <paper-checkbox
                  slot="item-icon"
                  checked='{{item.complete}}'
                  on-click='_itemCompleteTapped'
                  tabindex='0'
                ></paper-checkbox>
              <paper-item-body>
                <paper-input
                  id='editBox'
                  no-label-float
                  value='[[item.name]]'
                  on-change='_saveEdit'
                ></paper-input>
              </paper-item-body>
            </paper-icon-item>
          </template>
        </paper-card>
        <div class='tip' hidden$='[[!canListen]]'>
          [[localize('ui.panel.shopping-list.microphone_tip')]]
        </div>
      </div>
    </app-header-layout>
    `}static get properties(){return{hass:Object,narrow:Boolean,showMenu:Boolean,canListen:Boolean,items:{type:Array,value:[]}}}connectedCallback(){super.connectedCallback(),this._fetchData=this._fetchData.bind(this),this.hass.connection.subscribeEvents(this._fetchData,"shopping_list_updated").then(function(e){this._unsubEvents=e}.bind(this)),this._fetchData()}disconnectedCallback(){super.disconnectedCallback(),this._unsubEvents&&this._unsubEvents()}_fetchData(){this.hass.callApi("get","shopping_list").then(function(e){e.reverse(),this.items=e}.bind(this))}_itemCompleteTapped(e){e.stopPropagation(),this.hass.callApi("post","shopping_list/item/"+e.model.item.id,{complete:e.target.checked}).catch(()=>this._fetchData())}_addItem(e){this.hass.callApi("post","shopping_list/item",{name:this.$.addBox.value}).catch(()=>this._fetchData()),this.$.addBox.value="",e&&setTimeout(()=>this.$.addBox.focus(),10)}_addKeyPress(e){13===e.keyCode&&this._addItem()}_saveEdit(e){const{index:a,item:t}=e.model,n=e.target.value;n!==t.name&&(this.set(["items",a,"name"],n),this.hass.callApi("post","shopping_list/item/"+t.id,{name:n}).catch(()=>this._fetchData()))}_clearCompleted(){this.hass.callApi("POST","shopping_list/clear_completed")}})}}]);
//# sourceMappingURL=65dd52f530e1cdf01b90.chunk.js.map