/*! For license information please see e6896d3e069e6c57ea4e.chunk.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{170:function(e,t,a){"use strict";a(2),a(19),a(28),a(42);var i=a(4),n=a(0);Object(i.a)({_template:n["a"]`
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
`,is:"paper-item-body"})},171:function(e,t,a){"use strict";a(2);var i=a(10),n=(a(19),a(33)),o=a(4),r=a(0),l=a(1);Object(o.a)({_template:r["a"]`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        border: 1px solid;
        padding: 2px;
        -moz-appearance: textarea;
        -webkit-appearance: textarea;
        overflow: hidden;
      }

      .mirror-text {
        visibility: hidden;
        word-wrap: break-word;
        @apply --iron-autogrow-textarea;
      }

      .fit {
        @apply --layout-fit;
      }

      textarea {
        position: relative;
        outline: none;
        border: none;
        resize: none;
        background: inherit;
        color: inherit;
        /* see comments in template */
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        text-align: inherit;
        @apply --iron-autogrow-textarea;
      }

      textarea::-webkit-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea::-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-ms-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }
    </style>

    <!-- the mirror sizes the input/textarea so it grows with typing -->
    <!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML -->
    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>

    <!-- size the input/textarea with a div, because the textarea has intrinsic size in ff -->
    <div class="textarea-container fit">
      <textarea id="textarea" name\$="[[name]]" aria-label\$="[[label]]" autocomplete\$="[[autocomplete]]" autofocus\$="[[autofocus]]" inputmode\$="[[inputmode]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" required\$="[[required]]" disabled\$="[[disabled]]" rows\$="[[rows]]" minlength\$="[[minlength]]" maxlength\$="[[maxlength]]"></textarea>
    </div>
`,is:"iron-autogrow-textarea",behaviors:[n.a,i.a],properties:{value:{observer:"_valueChanged",type:String,notify:!0},bindValue:{observer:"_bindValueChanged",type:String,notify:!0},rows:{type:Number,value:1,observer:"_updateCached"},maxRows:{type:Number,value:0,observer:"_updateCached"},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,value:!1},inputmode:{type:String},placeholder:{type:String},readonly:{type:String},required:{type:Boolean},minlength:{type:Number},maxlength:{type:Number},label:{type:String}},listeners:{input:"_onInput"},get textarea(){return this.$.textarea},get selectionStart(){return this.$.textarea.selectionStart},get selectionEnd(){return this.$.textarea.selectionEnd},set selectionStart(e){this.$.textarea.selectionStart=e},set selectionEnd(e){this.$.textarea.selectionEnd=e},attached:function(){navigator.userAgent.match(/iP(?:[oa]d|hone)/)&&(this.$.textarea.style.marginLeft="-3px")},validate:function(){var e=this.$.textarea.validity.valid;return e&&(this.required&&""===this.value?e=!1:this.hasValidator()&&(e=n.a.validate.call(this,this.value))),this.invalid=!e,this.fire("iron-input-validate"),e},_bindValueChanged:function(e){this.value=e},_valueChanged:function(e){var t=this.textarea;t&&(t.value!==e&&(t.value=e||0===e?e:""),this.bindValue=e,this.$.mirror.innerHTML=this._valueForMirror(),this.fire("bind-value-changed",{value:this.bindValue}))},_onInput:function(e){var t=Object(l.b)(e).path;this.value=t?t[0].value:e.target.value},_constrain:function(e){var t;for(e=e||[""],t=this.maxRows>0&&e.length>this.maxRows?e.slice(0,this.maxRows):e.slice(0);this.rows>0&&t.length<this.rows;)t.push("");return t.join("<br/>")+"&#160;"},_valueForMirror:function(){var e=this.textarea;if(e)return this.tokens=e&&e.value?e.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)},_updateCached:function(){this.$.mirror.innerHTML=this._constrain(this.tokens)}});var s=a(32),p=a(76);a(105),a(104),a(103),Object(o.a)({_template:r["a"]`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container no-label-float\$="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate\$="[[autoValidate]]" disabled\$="[[disabled]]" invalid="[[invalid]]">

      <label hidden\$="[[!label]]" aria-hidden="true" for\$="[[_inputId]]" slot="label">[[label]]</label>

      <iron-autogrow-textarea class="paper-input-input" slot="input" id\$="[[_inputId]]" aria-labelledby\$="[[_ariaLabelledBy]]" aria-describedby\$="[[_ariaDescribedBy]]" bind-value="{{value}}" invalid="{{invalid}}" validator\$="[[validator]]" disabled\$="[[disabled]]" autocomplete\$="[[autocomplete]]" autofocus\$="[[autofocus]]" inputmode\$="[[inputmode]]" name\$="[[name]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" required\$="[[required]]" minlength\$="[[minlength]]" maxlength\$="[[maxlength]]" autocapitalize\$="[[autocapitalize]]" rows\$="[[rows]]" max-rows\$="[[maxRows]]" on-change="_onChange"></iron-autogrow-textarea>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
`,is:"paper-textarea",behaviors:[p.a,s.a],properties:{_ariaLabelledBy:{observer:"_ariaLabelledByChanged",type:String},_ariaDescribedBy:{observer:"_ariaDescribedByChanged",type:String},rows:{type:Number,value:1},maxRows:{type:Number,value:0}},get selectionStart(){return this.$.input.textarea.selectionStart},set selectionStart(e){this.$.input.textarea.selectionStart=e},get selectionEnd(){return this.$.input.textarea.selectionEnd},set selectionEnd(e){this.$.input.textarea.selectionEnd=e},_ariaLabelledByChanged:function(e){this._focusableElement.setAttribute("aria-labelledby",e)},_ariaDescribedByChanged:function(e){this._focusableElement.setAttribute("aria-describedby",e)},get _focusableElement(){return this.inputElement.textarea}})},172:function(e,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"a",function(){return r}),a(2);var i=a(40),n=a(1);const o={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(e,t){t&&(e?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(e){this.closingReason=this.closingReason||{},this.closingReason.confirmed=e},_onDialogClick:function(e){for(var t=Object(n.b)(e).path,a=0,i=t.indexOf(this);a<i;a++){var o=t[a];if(o.hasAttribute&&(o.hasAttribute("dialog-dismiss")||o.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(o.hasAttribute("dialog-confirm")),this.close(),e.stopPropagation();break}}}},r=[i.a,o]},178:function(e,t,a){"use strict";a(2),a(19),a(28),a(42),a(69);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content)},189:function(e,t,a){"use strict";a(2);var i=a(77),n=a(172),o=(a(178),a(4)),r=a(0);Object(o.a)({_template:r["a"]`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[n.a,i.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},289:function(e,t,a){"use strict";a.r(t),a(139),a(138),a(119),a(67),a(136),a(189),a(171),a(170),a(85);var i=a(0),n=a(3),o=(a(120),a(137),a(64)),r=a(12);customElements.define("ha-panel-mailbox",class extends(Object(r.a)(n.a)){static get template(){return i["a"]`
    <style include='ha-style'>
      :host {
        -ms-user-select: initial;
        -webkit-user-select: initial;
        -moz-user-select: initial;
      }

      .content {
        padding: 16px;
        max-width: 600px;
        margin: 0 auto;
      }

      paper-card {
        display: block;
      }

      paper-item {
        cursor: pointer;
      }

      .empty {
        text-align: center;
        color: var(--secondary-text-color);
      }

      .header {
        @apply --paper-font-title;
      }

      .row {
        display: flex;
       justify-content: space-between;
      }
      paper-dialog {
        border-radius: 2px;
      }
      paper-dialog p {
        color: var(--secondary-text-color);
      }

      #mp3dialog paper-icon-button {
        float: right;
      }

      @media all and (max-width: 450px) {
        paper-dialog {
          margin: 0;
          width: 100%;
          max-height: calc(100% - 64px);

          position: fixed !important;
          bottom: 0px;
          left: 0px;
          right: 0px;
          overflow: scroll;
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
        }

        .content {
          width: auto;
          padding: 0;
        }
      }

      .tip {
        color: var(--secondary-text-color);
        font-size: 14px;
      }
      .date {
        color: var(--primary-text-color);
      }
    </style>

    <app-header-layout has-scrolling-region>
      <app-header slot="header" fixed>
        <app-toolbar>
          <ha-menu-button narrow='[[narrow]]' show-menu='[[showMenu]]'></ha-menu-button>
          <div main-title>[[localize('panel.mailbox')]]</div>
        </app-toolbar>
      </app-header>
      <div class='content'>
        <paper-card>
          <template is='dom-if' if='[[!_messages.length]]'>
            <div class='card-content empty'>
              [[localize('ui.panel.mailbox.empty')]]
            </div>
          </template>
          <template is='dom-repeat' items='[[_messages]]'>
            <paper-item on-click='openMP3Dialog'>
              <paper-item-body style="width:100%" two-line>
                <div class="row">
                  <div>[[item.caller]]</div>
                  <div class="tip">[[localize('ui.duration.second', 'count', item.duration)]]</div>
                </div>
                <div secondary>
                  <span class="date">[[item.timestamp]]</span> - [[item.message]]
                </div>
              </paper-item-body>
            </paper-item>
          </template>
        </paper-card>
      </div>
    </app-header-layout>

    <paper-dialog with-backdrop id="mp3dialog" on-iron-overlay-closed="_mp3Closed">
      <h2>
        [[localize('ui.panel.mailbox.playback_title')]]
        <paper-icon-button
          on-click='openDeleteDialog'
          icon='hass:delete'
        ></paper-icon-button>
      </h2>
      <div id="transcribe"></div>
      <div>
        <audio id="mp3" preload="none" controls> <source id="mp3src" src="" type="audio/mpeg" /></audio>
      </div>
    </paper-dialog>

    <paper-dialog with-backdrop id="confirmdel">
      <p>[[localize('ui.panel.mailbox.delete_prompt')]]</p>
      <div class="buttons">
        <paper-button dialog-dismiss>[[localize('ui.common.cancel')]]</paper-button>
        <paper-button dialog-confirm autofocus on-click="deleteSelected">[[localize('ui.panel.mailbox.delete_button')]]</paper-button>
      </div>
    </paper-dialog>
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean,value:!1},showMenu:{type:Boolean,value:!1},platforms:{type:Array},_messages:{type:Array},currentMessage:{type:Object}}}connectedCallback(){super.connectedCallback(),this.hassChanged=this.hassChanged.bind(this),this.hass.connection.subscribeEvents(this.hassChanged,"mailbox_updated").then(function(e){this._unsubEvents=e}.bind(this)),this.computePlatforms().then(function(e){this.platforms=e,this.hassChanged()}.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this._unsubEvents&&this._unsubEvents()}hassChanged(){this._messages||(this._messages=[]),this.getMessages().then(function(e){this._messages=e}.bind(this))}openMP3Dialog(e){var t=e.model.item.platform;this.currentMessage=e.model.item,this.$.mp3dialog.open(),this.$.mp3src.src="/api/mailbox/media/"+t+"/"+e.model.item.sha,this.$.transcribe.innerText=e.model.item.message,this.$.mp3.load(),this.$.mp3.play()}_mp3Closed(){this.$.mp3.pause()}openDeleteDialog(){this.$.confirmdel.open()}deleteSelected(){var e=this.currentMessage;this.hass.callApi("DELETE","mailbox/delete/"+e.platform+"/"+e.sha),this.$.mp3dialog.close()}getMessages(){const e=this.platforms.map(function(e){return this.hass.callApi("GET","mailbox/messages/"+e).then(function(t){for(var a=[],i=t.length,n=0;n<i;n++){var r=Object(o.a)(new Date(1e3*t[n].info.origtime));a.push({timestamp:r,caller:t[n].info.callerid,message:t[n].text,sha:t[n].sha,duration:t[n].info.duration,platform:e})}return a})}.bind(this));return Promise.all(e).then(function(t){for(var a=e.length,i=[],n=0;n<a;n++)i=i.concat(t[n]);return i.sort(function(e,t){return new Date(t.timestamp)-new Date(e.timestamp)}),i})}computePlatforms(){return this.hass.callApi("GET","mailbox/platforms")}})}}]);
//# sourceMappingURL=e6896d3e069e6c57ea4e.chunk.js.map