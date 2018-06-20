(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{280:function(t,e,n){"use strict";n.r(e);var o=n(2),s=n(79),a=n(40),i=n(4),r=n(0),c=null;Object(i.a)({_template:r["a"]`
    <style>
      :host {
        display: block;
        position: fixed;
        background-color: var(--paper-toast-background-color, #323232);
        color: var(--paper-toast-color, #f1f1f1);
        min-height: 48px;
        min-width: 288px;
        padding: 16px 24px;
        box-sizing: border-box;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        border-radius: 2px;
        margin: 12px;
        font-size: 14px;
        cursor: default;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
        transition: transform 0.3s, opacity 0.3s;
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
        @apply --paper-font-common-base;
      }

      :host(.capsule) {
        border-radius: 24px;
      }

      :host(.fit-bottom) {
        width: 100%;
        min-width: 0;
        border-radius: 0;
        margin: 0;
      }

      :host(.paper-toast-open) {
        opacity: 1;
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
      }
    </style>

    <span id="label">{{text}}</span>
    <slot></slot>
`,is:"paper-toast",behaviors:[a.a],properties:{fitInto:{type:Object,value:window,observer:"_onFitIntoChanged"},horizontalAlign:{type:String,value:"left"},verticalAlign:{type:String,value:"bottom"},duration:{type:Number,value:3e3},text:{type:String,value:""},noCancelOnOutsideClick:{type:Boolean,value:!0},noAutoFocus:{type:Boolean,value:!0}},listeners:{transitionend:"__onTransitionEnd"},get visible(){return o.a._warn("`visible` is deprecated, use `opened` instead"),this.opened},get _canAutoClose(){return this.duration>0&&this.duration!==1/0},created:function(){this._autoClose=null,s.a.requestAvailability()},show:function(t){for(var e in"string"==typeof t&&(t={text:t}),t)0===e.indexOf("_")?o.a._warn('The property "'+e+'" is private and was not set.'):e in this?this[e]=t[e]:o.a._warn('The property "'+e+'" is not valid.');this.open()},hide:function(){this.close()},__onTransitionEnd:function(t){t&&t.target===this&&"opacity"===t.propertyName&&(this.opened?this._finishRenderOpened():this._finishRenderClosed())},_openedChanged:function(){null!==this._autoClose&&(this.cancelAsync(this._autoClose),this._autoClose=null),this.opened?(c&&c!==this&&c.close(),c=this,this.fire("iron-announce",{text:this.text}),this._canAutoClose&&(this._autoClose=this.async(this.close,this.duration))):c===this&&(c=null),a.b._openedChanged.apply(this,arguments)},_renderOpened:function(){this.classList.add("paper-toast-open")},_renderClosed:function(){this.classList.remove("paper-toast-open")},_onFitIntoChanged:function(t){this.positionTarget=t}});var l=n(3),p=n(12);customElements.define("notification-manager",class extends(Object(p.a)(l.a)){static get template(){return r["a"]`
    <style>
      paper-toast {
        z-index: 1;
      }
    </style>

    <paper-toast id="toast" text="[[_text]]" no-cancel-on-outside-click="[[_cancelOnOutsideClick]]"></paper-toast>
    <paper-toast id="connToast" duration="0" text="[[localize('ui.notification_toast.connection_lost')]]" opened="[[connectionLost]]"></paper-toast>
`}static get properties(){return{hass:{type:Object,observer:"hassChanged"},wasConnected:{type:Boolean,value:!1},connectionLost:{type:Boolean,computed:"computeConnectionLost(wasConnected, hass)"},_cancelOnOutsideClick:{type:Boolean,value:!1},_text:{type:String,readOnly:!0},toastClass:{type:String,value:""}}}hassChanged(t){t&&t.connected&&(this.wasConnected=!0),t&&t.connection||(this.wasConnected=!1)}computeConnectionLost(t,e){return t&&e&&!e.connected}constructor(){super(),this.handleWindowChange=this.handleWindowChange.bind(this),this._mediaq=window.matchMedia("(max-width: 599px)"),this._mediaq.addListener(this.handleWindowChange)}connectedCallback(){super.connectedCallback(),this.handleWindowChange(this._mediaq)}disconnectedCallback(){super.disconnectedCallback(),this._mediaq.removeListener(this.handleWindowChange)}handleWindowChange(t){this.$.toast.classList.toggle("fit-bottom",t.matches),this.$.connToast.classList.toggle("fit-bottom",t.matches)}showNotification(t){this._set_text(t),this.$.toast.show()}})}}]);
//# sourceMappingURL=d3b57ffdb95dbd9c0494.chunk.js.map