/*! For license information please see cf8ad335cadc3474c091.chunk.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{199:function(e,t,n){"use strict";n(182),n(174),n(208);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML='<dom-module id="lumo-date-picker-overlay" theme-for="vaadin-date-picker-overlay">\n  <template>\n    <style include="lumo-menu-overlay">\n      [part="overlay"] {\n        /*\n        Width:\n            date cell widths\n          + month calendar side padding\n          + year scroller width\n        */\n        width:\n          calc(\n              var(--lumo-size-m) * 7\n            + var(--lumo-space-xs) * 2\n            + 57px\n          );\n        height: 100%;\n        max-height: calc(var(--lumo-size-m) * 14);\n        overflow: hidden;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      [part="content"] {\n        padding: 0;\n        height: 100%;\n        overflow: hidden;\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      @media (max-width: 420px), (max-height: 420px) {\n        [part="overlay"] {\n          width: 100vw;\n          height: 70vh;\n          max-height: 70vh;\n        }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(a.content),n(183),n(179),n(186);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<dom-module id="lumo-button" theme-for="vaadin-button">\n  <template>\n    <style include="lumo-button-sizing lumo-button-style lumo-button-states lumo-button-types lumo-button-colors lumo-button-icons">\n      /* This needs to be the last selector for it to take priority */\n      :host([disabled][disabled]) {\n        pointer-events: none;\n        color: var(--lumo-disabled-text-color);\n        background-color: var(--lumo-contrast-5pct);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-button-sizing">\n  <template>\n    <style>\n      :host {\n        --lumo-button-size: var(--lumo-size-m);\n        min-width: calc(var(--lumo-button-size) * 2);\n        height: var(--lumo-button-size);\n        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);\n        margin: var(--lumo-space-xs) 0;\n        box-sizing: border-box;\n      }\n\n      [part="label"] {\n        padding: calc(var(--lumo-button-size) / 6) 0;\n      }\n\n      :host([theme~="small"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-button-size: var(--lumo-size-s);\n      }\n\n      :host([theme~="large"]) {\n        font-size: var(--lumo-font-size-l);\n        --lumo-button-size: var(--lumo-size-l);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-button-style">\n  <template>\n    <style>\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 500;\n        color: var(--lumo-primary-text-color);\n        background-color: var(--lumo-contrast-5pct);\n        border-radius: var(--lumo-border-radius);\n        cursor: default;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Set only for the internal parts so we don’t affect the host vertical alignment */\n      [part="label"],\n      [part="prefix"],\n      [part="suffix"] {\n        line-height: var(--lumo-line-height-xs);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-button-states">\n  <template>\n    <style>\n      :host::before,\n      :host::after {\n        content: "";\n        /* We rely on the host always being relative */\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: currentColor;\n        border-radius: inherit;\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n      }\n\n      /* Hover */\n\n      :host(:hover)::before {\n        opacity: 0.05;\n      }\n\n      /* Disable for touch devices */\n      @media (pointer: coarse) {\n        :host(:not([active]):hover)::before {\n          opacity: 0;\n        }\n      }\n\n      /* Active */\n\n      :host::after {\n        transition: opacity 1.4s, transform 0.1s;\n        filter: blur(8px);\n      }\n\n      :host([active])::before {\n        opacity: 0.1;\n        transition-duration: 0s;\n      }\n\n      :host([active])::after {\n        opacity: 0.1;\n        transition-duration: 0s, 0s;\n        transform: scale(0);\n      }\n\n      /* Keyboard focus */\n\n      :host([focus-ring]) {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-button-types">\n  <template>\n    <style>\n      /* Tertiary */\n\n      :host([theme~="tertiary"]),\n      :host([theme~="tertiary-inline"]) {\n        background-color: transparent !important;\n        transition: opacity 0.2s;\n        min-width: 0;\n      }\n\n      :host([theme~="tertiary"])::before,\n      :host([theme~="tertiary-inline"])::before {\n        display: none;\n      }\n\n      :host([theme~="tertiary"]) {\n        padding: 0 calc(var(--lumo-button-size) / 6);\n      }\n\n      @media (hover: hover) {\n        :host([theme*="tertiary"]:not([active]):hover) {\n          opacity: 0.8;\n        }\n      }\n\n      :host([theme~="tertiary"][active]),\n      :host([theme~="tertiary-inline"][active]) {\n        opacity: 0.5;\n        transition-duration: 0s;\n      }\n\n      /* Tertiary inline ("text button") */\n\n      :host([theme~="tertiary-inline"]) {\n        margin: 0;\n        height: auto;\n        padding: 0;\n        line-height: inherit;\n        font-size: inherit;\n      }\n\n      :host([theme~="tertiary-inline"]) [part="label"] {\n        padding: 0;\n        line-height: inherit;\n      }\n\n      /* Primary */\n\n      :host([theme~="primary"]) {\n        background-color: var(--lumo-primary-color);\n        color: var(--lumo-primary-contrast-color);\n        font-weight: 600;\n        min-width: calc(var(--lumo-button-size) * 2.5);\n      }\n\n      :host([theme~="primary"]:hover)::before {\n        opacity: 0.1;\n      }\n\n      :host([theme~="primary"][active])::before {\n        background-color: var(--lumo-shade-20pct);\n      }\n\n      @media (pointer: coarse) {\n        :host([theme~="primary"][active])::before {\n          background-color: var(--lumo-shade-60pct);\n        }\n\n        :host([theme~="primary"]:not([active]):hover)::before {\n          opacity: 0;\n        }\n      }\n\n      :host([theme~="primary"][active])::after {\n        opacity: 0.2;\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-button-colors">\n  <template>\n    <style>\n      :host([theme~="success"]) {\n        color: var(--lumo-success-text-color);\n      }\n\n      :host([theme~="success"][theme~="primary"]) {\n        background-color: var(--lumo-success-color);\n        color: var(--lumo-success-contrast-color);\n      }\n\n      :host([theme~="error"]) {\n        color: var(--lumo-error-text-color);\n      }\n\n      :host([theme~="error"][theme~="primary"]) {\n        background-color: var(--lumo-error-color);\n        color: var(--lumo-error-contrast-color);\n      }\n\n      :host([theme~="contrast"]) {\n        color: var(--lumo-contrast);\n      }\n\n      :host([theme~="contrast"][theme~="primary"]) {\n        background-color: var(--lumo-contrast);\n        color: var(--lumo-base-color);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-button-icons">\n  <template>\n    <style>\n      [part] ::slotted(iron-icon) {\n        display: inline-block;\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part] ::slotted(iron-icon[icon^="vaadin:"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part="prefix"] {\n        margin-left: -0.25em;\n        margin-right: 0.25em;\n      }\n\n      [part="suffix"] {\n        margin-left: 0.25em;\n        margin-right: -0.25em;\n      }\n\n      /* Icon-only */\n\n      :host([theme~="icon"]) {\n        min-width: var(--lumo-button-size);\n        padding-left: calc(var(--lumo-button-size) / 4);\n        padding-right: calc(var(--lumo-button-size) / 4);\n      }\n\n      :host([theme~="icon"]) [part="prefix"],\n      :host([theme~="icon"]) [part="suffix"] {\n        margin-left: 0;\n        margin-right: 0;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content);var o=n(3),r=n(51),s=n(173);const l=e=>(class extends((e=>(class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}}))(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{e.composedPath()[0]===this?this._focus(e):-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",e=>this._setFocused(!1)),super.ready(),this.addEventListener("keydown",e=>{!e.defaultPrevented&&e.shiftKey&&9===e.keyCode&&(this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0))}),!this.autofocus||this.focused||this.disabled||window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}),this._boundKeydownListener=this._bodyKeydownListener.bind(this),this._boundKeyupListener=this._bodyKeyupListener.bind(this)}connectedCallback(){super.connectedCallback(),document.body.addEventListener("keydown",this._boundKeydownListener,!0),document.body.addEventListener("keyup",this._boundKeyupListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("keydown",this._boundKeydownListener,!0),document.body.removeEventListener("keyup",this._boundKeyupListener,!0),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&this._tabPressed?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}_bodyKeydownListener(e){this._tabPressed=9===e.keyCode}_bodyKeyupListener(){this._tabPressed=!1}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(e){this._isShiftTabbing||(this.focusElement.focus(),this._setFocused(!0))}focus(){this.disabled||(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement.blur(),this._setFocused(!1)}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e})}});var d=n(22);const h=document.createElement("template");h.setAttribute("style","display: none;"),h.innerHTML='<dom-module id="vaadin-development-mode-probe">\n</dom-module>',document.head.appendChild(h.content);const c=window.Polymer&&window.Polymer.version,u=c&&0===c.indexOf("2");if(window.Vaadin||(window.Vaadin={}),void 0===window.Vaadin.developmentMode){try{window.Vaadin.developmentMode=localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(u?function e(t,n){return t&&[...t.querySelectorAll("link[rel=import]")].forEach(function(t){-1==n.indexOf(t.href)&&(n.push(t.href),e(t.import,n))}),n}(document,[]).filter(function(e){return n="polymer/polymer-element.html",(t=e).lastIndexOf(n)==t.length-n.length;var t,n}).length>0:Array.from(document.querySelectorAll("script")).filter(e=>e.src.indexOf("@vaadin")>-1).length>0)&&!(window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients&&Object.keys(window.Vaadin.Flow.clients).map(e=>window.Vaadin.Flow.clients[e]).filter(e=>e.productionMode).length>0)}catch(e){window.Vaadin.developmentMode=!1}const e=function(){return d.a.import("vaadin-development-mode-probe").assetpath},t=function(t){let n=e();return n.slice(0,n.indexOf("@vaadin")+"@vaadin".length)+"/"+t+"/"+t+".js"},n=function(e,t){if(window.Vaadin&&window.Vaadin.developmentModeCallback){const n=window.Vaadin.developmentModeCallback[e];n&&n(t)}},a=function(e,a){let i=t(e),o=document.body.querySelector("script[src='"+i+"'][async]");o||((o=document.createElement("script")).setAttribute("src",i),o.async=!0,o.onreadystatechange=o.onload=function(){o.__dynamicImportLoaded=!0,n(e,a)},o.onerror=function(){o.parentNode&&o.parentNode.removeChild(o)}),null==o.parentNode?document.body.appendChild(o):o.__dynamicImportLoaded&&o.dispatchEvent(new Event("load"))};window.Vaadin.runIfDevelopmentMode=function(e,t){window.Vaadin.developmentMode&&a(e,t)}}const p=e=>{try{return class extends e{}}finally{window.Vaadin.runIfDevelopmentMode&&window.Vaadin.runIfDevelopmentMode("vaadin-usage-statistics")}};var m=n(0),A=n(20);class f extends(p(l(Object(s.a)(Object(r.a)(o.a))))){static get template(){return m["a"]`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.0.0-pre.3"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){Object(A.addListener)(this,"down",()=>!this.disabled&&this.setAttribute("active","")),Object(A.addListener)(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>!this.disabled&&[13,32].indexOf(e.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(f.is,f);const v=document.createElement("template");v.setAttribute("style","display: none;"),v.innerHTML='<dom-module id="lumo-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">\n  <template>\n    <style>\n      :host {\n        position: relative;\n        background-color: transparent;\n        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */\n        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));\n        background-size: 57px 100%;\n        background-position: top right;\n        background-repeat: no-repeat;\n      }\n\n      /* Month scroller */\n\n      [part="months"] {\n        /* Month calendar height:\n              header height + margin-bottom\n            + weekdays height + margin-bottom\n            + date cell heights\n            + small margin between month calendars\n        */\n        --vaadin-infinite-scroller-item-height:\n          calc(\n              var(--lumo-font-size-l) + var(--lumo-space-m)\n            + var(--lumo-font-size-xs) + var(--lumo-space-s)\n            + var(--lumo-size-m) * 6\n            + var(--lumo-space-s)\n          );\n        --vaadin-infinite-scroller-buffer-offset: 20%;\n        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        position: relative;\n        margin-right: 57px;\n      }\n\n      /* Year scroller */\n\n      [part="years"] {\n        /* TODO get rid of fixed magic number */\n        --vaadin-infinite-scroller-buffer-width: 97px;\n        width: 57px;\n        height: auto;\n        top: 0;\n        bottom: 0;\n        font-size: var(--lumo-font-size-s);\n        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);\n        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n      }\n\n      [part="year-number"],\n      [part="year-separator"] {\n        opacity: 0.5;\n        transition: 0.2s opacity;\n      }\n\n      [part="years"]:hover [part="year-number"],\n      [part="years"]:hover [part="year-separator"] {\n        opacity: 1;\n      }\n\n      /* TODO unsupported selector */\n      #scrollers {\n        position: static;\n        display: block;\n      }\n\n      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the\n       * width of the year scroller */\n      #scrollers[desktop] [part="months"] {\n        right: auto;\n      }\n\n      /* Year scroller position indicator */\n      [part="years"]::before {\n        border: none;\n        width: 1em;\n        height: 1em;\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        transform: translate(-75%, -50%) rotate(45deg);\n        border-top-right-radius: calc(var(--lumo-border-radius) / 2);\n        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);\n        z-index: 1;\n      }\n\n      [part="year-number"],\n      [part="year-separator"] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50%;\n        transform: translateY(-50%);\n      }\n\n      [part="years"] [part="year-separator"]::after {\n        color: var(--lumo-disabled-text-color);\n        content: "•";\n      }\n\n      /* Current year */\n\n      [part="years"] [part="year-number"][current] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Toolbar (footer) */\n\n      [part="toolbar"] {\n        padding: var(--lumo-space-s);\n        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);\n        border-bottom-left-radius: var(--lumo-border-radius);\n        margin-right: 57px;\n      }\n\n      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {\n        [part="toolbar"] {\n          box-shadow: none;\n        }\n      }\n\n      /* Today and Cancel buttons */\n\n      /* TODO: Would be great if I could apply the "tertiary" theme from here instead of copying those styles */\n      [part="toolbar"] [part$="button"] {\n        background-color: transparent;\n        margin: 0;\n        min-width: 0;\n        padding: 0 0.75em;\n      }\n\n      /* Narrow viewport mode (fullscreen) */\n\n      :host([fullscreen]) [part="toolbar"] {\n        order: -1;\n        background-color: var(--lumo-base-color);\n      }\n\n      :host([fullscreen]) [part="overlay-header"] {\n        order: -2;\n        height: var(--lumo-size-m);\n        padding: var(--lumo-space-s);\n        position: absolute;\n        left: 0;\n        right: 0;\n        justify-content: center;\n      }\n\n      :host([fullscreen]) [part="toggle-button"],\n      :host([fullscreen]) [part="clear-button"],\n      [part="overlay-header"] [part="label"] {\n        display: none;\n      }\n\n      /* Very narrow screen (year scroller initially hidden) */\n\n      [part="years-toggle-button"] {\n        position: relative;\n        right: auto;\n        display: flex;\n        align-items: center;\n        height: var(--lumo-size-s);\n        padding: 0 0.5em;\n        border-radius: var(--lumo-border-radius);\n        z-index: 3;\n        color: var(--lumo-primary-text-color);\n        font-weight: 500;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      :host([years-visible]) [part="years-toggle-button"] {\n        background-color: var(--lumo-primary-color);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part="years-toggle-button"]::before {\n        content: none;\n      }\n\n      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */\n      @media screen and (max-width: 374px) {\n        :host {\n          background-image: none;\n        }\n\n        [part="years"] {\n          background-color: var(--lumo-shade-5pct);\n        }\n\n        [part="toolbar"],\n        [part="months"] {\n          margin-right: 0;\n        }\n\n        /* TODO make date-picker adapt to the width of the years part */\n        [part="years"] {\n          --vaadin-infinite-scroller-buffer-width: 90px;\n          width: 50px;\n        }\n\n        :host([years-visible]) [part="months"] {\n          padding-left: 50px;\n        }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(v.content);const b=document.createElement("template");b.setAttribute("style","display: none;"),b.innerHTML='<dom-module id="lumo-month-calendar" theme-for="vaadin-month-calendar">\n  <template>\n    <style>\n      :host {\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        -webkit-tap-highlight-color: transparent;\n        user-select: none;\n        font-size: var(--lumo-font-size-m);\n        color: var(--lumo-body-text-color);\n        text-align: center;\n        padding: 0 var(--lumo-space-xs);\n      }\n\n      /* Month header */\n\n      [part="month-header"] {\n        color: var(--lumo-header-text-color);\n        font-size: var(--lumo-font-size-l);\n        line-height: 1;\n        font-weight: 500;\n        margin-bottom: var(--lumo-space-m);\n      }\n\n      /* Week days and numbers */\n\n      [part="weekdays"],\n      [part="weekday"],\n      [part="week-numbers"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: 1;\n        color: var(--lumo-tertiary-text-color);\n      }\n\n      [part="weekdays"] {\n        margin-bottom: var(--lumo-space-s);\n      }\n\n      /* TODO should have part="week-number" for the cell in weekdays-container */\n      [part="weekday"]:empty,\n      [part="week-numbers"] {\n        width: var(--lumo-size-xs);\n      }\n\n      /* Date and week number cells */\n\n      [part="date"],\n      [part="week-number"] {\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        height: var(--lumo-size-m);\n        position: relative;\n      }\n\n      [part="date"] {\n        transition: color 0.1s;\n      }\n\n      /* Today date */\n\n      [part="date"][today] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Focused date */\n\n      [part="date"]::before {\n        content: "";\n        position: absolute;\n        z-index: -1;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        min-width: 2em;\n        min-height: 2em;\n        width: 80%;\n        height: 80%;\n        max-height: 100%;\n        max-width: 100%;\n        border-radius: var(--lumo-border-radius);\n      }\n\n      [part="date"][focused]::before {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      :host(:not([focused])) [part="date"][focused]::before {\n        animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;\n      }\n\n      @keyframes vaadin-date-picker-month-calendar-focus-date {\n        50% {\n          box-shadow: 0 0 0 2px transparent;\n        }\n      }\n\n      /* TODO should not rely on the role attribute */\n      [part="date"][role="button"]:not([disabled]):not([selected]):hover::before {\n        background-color: var(--lumo-primary-color-10pct);\n      }\n\n      [part="date"][selected] {\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part="date"][selected]::before {\n        background-color: var(--lumo-primary-color);\n      }\n\n      @media (pointer: coarse) {\n        [part="date"]:hover:not([selected])::before,\n        [part="date"][focused]:not([selected])::before {\n          display: none;\n        }\n\n        [part="date"][role="button"]:not([disabled]):active::before {\n          display: block;\n        }\n\n        [part="date"][selected]::before {\n          box-shadow: none;\n        }\n      }\n\n      /* Disabled */\n\n      :host([disabled]) * {\n        color: var(--lumo-disabled-text-color) !important;\n      }\n    </style>\n  </template>\n</dom-module><custom-style>\n  <style>\n    @keyframes vaadin-date-picker-month-calendar-focus-date {\n      50% {\n        box-shadow: 0 0 0 2px transparent;\n      }\n    }\n  </style>\n</custom-style>',document.head.appendChild(b.content),n(202);const g=document.createElement("template");g.setAttribute("style","display: none;"),g.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: default;\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(g.content);const y=document.createElement("template");y.setAttribute("style","display: none;"),y.innerHTML='<dom-module id="lumo-text-field" theme-for="vaadin-text-field">\n  <template>\n    <style>\n      :host {\n        --lumo-text-field-size: var(--lumo-size-m);\n        color: var(--lumo-body-text-color);\n        font-size: var(--lumo-font-size-m);\n        font-family: var(--lumo-font-family);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n        padding: var(--lumo-space-xs) 0;\n      }\n\n      :host::before {\n        height: var(--lumo-text-field-size);\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        /* Label height + margin */\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([focused]:not([readonly])) [part="label"] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      /* Used for required and invalid indicators */\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      [part="value"],\n      [part="input-field"] ::slotted([part="value"]) {\n        cursor: inherit;\n        min-height: var(--lumo-text-field-size);\n        padding: 0 0.25em;\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);\n        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);\n      }\n\n      [part="value"]:focus {\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      /*\n        TODO: CSS custom property in `mask-image` causes crash in Edge\n        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/\n      */\n      @-moz-document url-prefix() {\n        [part="value"],\n        [part="input-field"] ::slotted([part="value"]) {\n          mask-image: var(--_lumo-text-field-overflow-mask-image);\n        }\n      }\n\n      [part="value"]::-webkit-input-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part="value"]:-ms-input-placeholder {\n        color: inherit;\n        opacity: 0.5;\n      }\n\n      [part="value"]::-moz-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part="value"]::placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.1s;\n        opacity: 0.5;\n      }\n\n      [part="input-field"] {\n        border-radius: var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-10pct);\n        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);\n        font-weight: 500;\n        line-height: 1;\n        position: relative;\n        cursor: text;\n        box-sizing: border-box;\n      }\n\n      /* Used for hover and activation effects */\n      [part="input-field"]::after {\n        content: "";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        border-radius: inherit;\n        pointer-events: none;\n        background-color: var(--lumo-contrast-50pct);\n        opacity: 0;\n        transition: transform 0.15s, opacity 0.2s;\n        transform-origin: 100% 0;\n        will-change: transform;\n      }\n\n      /* Hover */\n\n      :host(:hover:not([readonly]):not([focused])) [part="label"] {\n        color: var(--lumo-body-text-color);\n      }\n\n      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {\n        opacity: 0.1;\n      }\n\n      /* Touch device adjustment */\n      @media (pointer: coarse) {\n        :host(:hover:not([readonly]):not([focused])) [part="label"] {\n          color: var(--lumo-secondary-text-color);\n        }\n\n        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {\n          opacity: 0;\n        }\n\n        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {\n          opacity: 0.2;\n        }\n      }\n\n      /* Trigger when not focusing using the keyboard */\n      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {\n        transform: scaleX(0);\n        transition-duration: 0.15s, 1s;\n      }\n\n      /* Focus-ring */\n\n      :host([focus-ring]) [part="input-field"] {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Read-only and disabled */\n      :host([readonly]) [part="value"]::-webkit-input-placeholder,\n      :host([disabled]) [part="value"]::-webkit-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part="value"]:-ms-input-placeholder,\n      :host([disabled]) [part="value"]:-ms-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part="value"]::-moz-placeholder,\n      :host([disabled]) [part="value"]::-moz-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part="value"]::placeholder,\n      :host([disabled]) [part="value"]::placeholder {\n        opacity: 0;\n      }\n\n      /* Read-only */\n\n      :host([readonly]) [part="input-field"] {\n        color: var(--lumo-secondary-text-color);\n        background-color: transparent;\n        cursor: default;\n      }\n\n      :host([readonly]) [part="input-field"]::after {\n        background-color: transparent;\n        opacity: 1;\n        border: 1px dashed var(--lumo-contrast-30pct);\n      }\n\n      /* Disabled style */\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host([disabled]) [part="input-field"] {\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      :host([disabled]) [part="label"],\n      :host([disabled]) [part="value"],\n      :host([disabled]) [part="input-field"] ::slotted(*) {\n        color: var(--lumo-disabled-text-color);\n        -webkit-text-fill-color: var(--lumo-disabled-text-color);\n      }\n\n      /* Required field style */\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      /* Invalid style */\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      :host([invalid]) [part="input-field"] {\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      :host([invalid]) [part="input-field"]::after {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([invalid][focus-ring]) [part="input-field"] {\n        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);\n      }\n\n      /* Error message */\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      /* Small theme */\n\n      :host([theme~="small"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-text-field-size: var(--lumo-size-s);\n      }\n\n      :host([theme~="small"][has-label]) [part="label"] {\n        font-size: var(--lumo-font-size-xs);\n      }\n\n      :host([theme~="small"][has-label]) [part="error-message"] {\n        font-size: var(--lumo-font-size-xxs);\n      }\n\n      /* Text align */\n\n      :host([theme~="align-center"]) [part="value"] {\n        text-align: center;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      :host([theme~="align-right"]) [part="value"] {\n        text-align: right;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      @-moz-document url-prefix() {\n        /* Firefox is smart enough to align overflowing text to right */\n        :host([theme~="align-right"]) [part="value"] {\n          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n        }\n      }\n\n      /* Slotted content */\n\n      [part="input-field"] ::slotted(:not([part]):not(iron-icon)) {\n        color: var(--lumo-secondary-text-color);\n        font-weight: 400;\n      }\n\n      /* Slotted icons */\n\n      [part="input-field"] ::slotted(iron-icon) {\n        color: var(--lumo-contrast-60pct);\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(y.content);const _=document.createElement("template");_.setAttribute("style","display: none;"),_.innerHTML='<dom-module id="vaadin-text-field-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: "\\2003";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part="label"]:empty {\n        display: none;\n      }\n\n      [part="input-field"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      /* Reset the native input styles */\n      [part="value"] {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part="input-field"] ::slotted(*) {\n        flex: none;\n      }\n\n      /* Slotted by vaadin-dropdown-menu-text-field */\n      [part="value"],\n      [part="input-field"] ::slotted([part="value"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part="value"]::-ms-clear {\n        display: none;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(_.content);const w=e=>(class extends(l(e)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},errorMessage:{type:String,value:""},label:{type:String,value:"",observer:"_labelChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},preventInvalidInput:{type:Boolean},_labelId:{type:String},_errorId:{type:String}}}get focusElement(){return this.root.querySelector("[part=value]")}_onInput(e){if(this.preventInvalidInput){const e=this.focusElement;e.value.length>0&&!this.checkValidity()&&(e.value=this.value||"")}}_onChange(e){const t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}_valueChanged(e,t){""===e&&void 0===t||(this.invalid&&this.validate(),""!==e&&null!=e?this.setAttribute("has-value",""):this.removeAttribute("has-value"))}_labelChanged(e){""!==e&&null!=e?this.setAttribute("has-label",""):this.removeAttribute("has-label")}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength?this.focusElement.checkValidity():!this.invalid}ready(){super.ready(),window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles();var e=w._uniqueId=1+w._uniqueId||0;this._errorId=`${this.constructor.is}-error-${e}`,this._labelId=`${this.constructor.is}-label-${e}`,navigator.userAgent.match(/Trident/)&&this._addIEListeners()}validate(){return!(this.invalid=!this.checkValidity())}_addIEListeners(){const e=t=>{t.stopImmediatePropagation(),this.focusElement.removeEventListener("input",e)},t=()=>this.placeholder&&this.focusElement.addEventListener("input",e);this.focusElement.addEventListener("focusin",t),this.focusElement.addEventListener("focusout",t),this._createPropertyObserver("placeholder",t)}_getActiveErrorId(e,t,n){return t&&e?n:void 0}_getActiveLabelId(e,t){return e?t:void 0}_getErrorMessageAriaHidden(e,t,n){return(!this._getActiveErrorId(e,t,n)).toString()}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),window.ShadyCSS&&window.ShadyCSS.nativeCss||!/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(e)||this.updateStyles(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root){const e="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(t=>{t.style[e]="visible",t.style[e]=""})}}});class D extends(p(w(Object(s.a)(o.a)))){static get template(){return m["a"]`
    <style include="vaadin-text-field-shared-styles"></style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field">

        <slot name="prefix"></slot>

        <input part="value" autocomplete\$="[[autocomplete]]" autocorrect\$="[[autocorrect]]" autocapitalize\$="[[autocapitalize]]" autofocus\$="[[autofocus]]" disabled\$="[[disabled]]" list="[[list]]" maxlength\$="[[maxlength]]" minlength\$="[[minlength]]" pattern="[[pattern]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" aria-readonly\$="[[readonly]]" required\$="[[required]]" aria-required\$="[[required]]" value="{{value::input}}" title="[[title]]" on-blur="validate" on-input="_onInput" on-change="_onChange" aria-describedby\$="[[_getActiveErrorId(invalid, errorMessage, _errorId)]]" aria-labelledby\$="[[_getActiveLabelId(label, _labelId)]]" aria-invalid\$="[[invalid]]">

        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.0.1-pre.2"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}customElements.define(D.is,D);const x=document.createElement("template");x.setAttribute("style","display: none;"),x.innerHTML='<dom-module id="lumo-date-picker" theme-for="vaadin-date-picker">\n  <template>\n    <style include="lumo-field-button">\n      :host {\n        outline: none;\n      }\n\n      [part="toggle-button"]::before {\n        content: var(--lumo-icons-calendar);\n      }\n\n      [part="clear-button"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(x.content),n(123);var k=n(203);class S extends k.a{static get is(){return"vaadin-date-picker-overlay"}}customElements.define(S.is,S);var C=n(9),E=n(79);n(88);const M=class{static _getISOWeekNumber(e){var t=e.getDay();0===t&&(t=7);var n=4-t,a=new Date(e.getTime()+24*n*3600*1e3),i=new Date(0,0);i.setFullYear(a.getFullYear());var o=a.getTime()-i.getTime(),r=Math.round(o/864e5);return Math.floor(r/7+1)}static _dateEquals(e,t){return e instanceof Date&&t instanceof Date&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}static _dateAllowed(e,t,n){return(!t||e>=t)&&(!n||e<=n)}static _getClosestDate(e,t){return t.filter(e=>void 0!==e).reduce((t,n)=>n?t?Math.abs(e.getTime()-n.getTime())<Math.abs(t.getTime()-e.getTime())?n:t:n:t)}static _extractDateParts(e){return{day:e.getDate(),month:e.getMonth(),year:e.getFullYear()}}};class I extends(Object(s.a)(Object(r.a)(o.a))){static get template(){return m["a"]`
    <style>
      :host {
        display: block;
      }

      [part="weekdays"],
      #days {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
      }

      #days-container,
      #weekdays-container {
        display: flex;
      }

      [part="week-numbers"] {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 0;
      }

      [part="week-numbers"][hidden],
      [part="weekday"][hidden] {
        display: none;
      }

      [part="weekday"],
      [part="date"] {
        /* Would use calc(100% / 7) but it doesn't work nice on IE */
        width: 14.285714286%;
      }

      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: 12.5%;
        flex-shrink: 0;
      }
    </style>

    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>
    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">
      <div id="weekdays-container">
        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>
        <div part="weekdays">
          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">
            <div part="weekday" role="heading" aria-label\$="[[item.weekDay]]">[[item.weekDayShort]]</div>
          </template>
        </div>
      </div>
      <div id="days-container">
        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">
          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">
            <div part="week-number" role="heading" aria-label\$="[[i18n.week]] [[item]]">[[item]]</div>
          </template>
        </div>
        <div id="days">
          <template is="dom-repeat" items="[[_days]]">
            <div part="date" today\$="[[_isToday(item)]]" selected\$="[[_dateEquals(item, selectedDate)]]" focused\$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled\$="[[!_dateAllowed(item, minDate, maxDate)]]" role\$="[[_getRole(item)]]" aria-label\$="[[_getAriaLabel(item)]]" aria-disabled\$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>
          </template>
        </div>
      </div>
    </div>
`}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)"]}_dateEquals(e,t){return M._dateEquals(e,t)}_dateAllowed(e,t,n){return M._dateAllowed(e,t,n)}_isDisabled(e,t,n){var a=new Date(0,0);a.setFullYear(e.getFullYear()),a.setMonth(e.getMonth()),a.setDate(1);var i=new Date(0,0);return i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()+1),i.setDate(-1),!this._dateAllowed(a,t,n)&&!this._dateAllowed(i,t,n)}_getTitle(e,t){if(void 0!==e&&void 0!==t)return this.i18n.formatTitle(t[e.getMonth()],e.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300)}_dateAdd(e,t){e.setDate(e.getDate()+t)}_applyFirstDayOfWeek(e,t){if(void 0!==e&&void 0!==t)return e.slice(t).concat(e.slice(0,t))}_getWeekDayNames(e,t,n,a){if(void 0!==e&&void 0!==t&&void 0!==n&&void 0!==a)return e=this._applyFirstDayOfWeek(e,a),t=this._applyFirstDayOfWeek(t,a),e.map((e,n)=>({weekDay:e,weekDayShort:t[n]}))}_getDate(e){return e?e.getDate():""}_showWeekNumbersChanged(e,t){e&&1===t?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(e,t){return e&&1===t}_isToday(e){return this._dateEquals(new Date,e)}_getDays(e,t){if(void 0!==e&&void 0!==t){var n=new Date(0,0);for(n.setFullYear(e.getFullYear()),n.setMonth(e.getMonth()),n.setDate(1);n.getDay()!==t;)this._dateAdd(n,-1);for(var a=[],i=n.getMonth(),o=e.getMonth();n.getMonth()===o||n.getMonth()===i;)a.push(n.getMonth()===o?new Date(n.getTime()):null),this._dateAdd(n,1);return a}}_getWeekNumber(e,t){if(void 0!==e&&void 0!==t)return e||(e=t.reduce((e,t)=>!e&&t?t:e)),M._getISOWeekNumber(e)}_getWeekNumbers(e){return e.map(t=>this._getWeekNumber(t,e)).filter((e,t,n)=>n.indexOf(e)===t)}_handleTap(e){this.ignoreTaps||this._notTapping||!e.target.date||e.target.hasAttribute("disabled")||(this.selectedDate=e.target.date,this.dispatchEvent(new CustomEvent("date-tap",{bubbles:!0,composed:!0})))}_preventDefault(e){e.preventDefault()}_getRole(e){return e?"button":"presentational"}_getAriaLabel(e){if(!e)return"";var t=this._getDate(e)+" "+this.i18n.monthNames[e.getMonth()]+" "+e.getFullYear()+", "+this.i18n.weekdays[e.getDay()];return this._isToday(e)&&(t+=", "+this.i18n.today),t}_getAriaDisabled(e,t,n){if(void 0!==e&&void 0!==t&&void 0!==n)return this._dateAllowed(e,t,n)?"false":"true"}}customElements.define(I.is,I);var T=n(44),B=(n(106),n(26)),z=n(17),O=n(7),F=n(1),$=n(43);class Y extends o.a{static get template(){return m["a"]`
    <style>
      :host {
        display: block;
        overflow: hidden;
        height: 500px;
      }

      #scroller {
        position: relative;
        height: 100%;
        overflow: auto;
        outline: none;
        margin-right: -40px;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        overflow-x: hidden;
      }

      #scroller.notouchscroll {
        -webkit-overflow-scrolling: auto;
      }

      #scroller::-webkit-scrollbar {
        display: none;
      }

      .buffer {
        position: absolute;
        width: var(--vaadin-infinite-scroller-buffer-width, 100%);
        box-sizing: border-box;
        padding-right: 40px;
        top: var(--vaadin-infinite-scroller-buffer-offset, 0);
        animation: fadein 0.2s;
      }

      @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    </style>

    <div id="scroller" on-scroll="_scroll">
      <div class="buffer"></div>
      <div class="buffer"></div>
      <div id="fullHeight"></div>
    </div>
`}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready(),this._buffers=Array.prototype.slice.call(this.root.querySelectorAll(".buffer")),this.$.fullHeight.style.height=2*this._initialScroll+"px";var e=this.querySelector("template");this._TemplateClass=Object(B.c)(e,this,{forwardHostProp:function(e,t){"index"!==e&&this._buffers.forEach(n=>{[].forEach.call(n.children,n=>{n._itemWrapper.instance[e]=t})})}}),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&(this.$.scroller.tabIndex=-1)}_activated(e){e&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(e=>{[].forEach.call(e.children,e=>this._ensureStampedInstance(e._itemWrapper))},this),this._buffers[0].translateY||this._reset(),this._initDone=!0)}_translateBuffer(e){var t=e?1:0;this._buffers[t].translateY=this._buffers[t?0:1].translateY+this._bufferHeight*(t?-1:1),this._buffers[t].style.transform="translate3d(0, "+this._buffers[t].translateY+"px, 0)",this._buffers[t].updated=!1,this._buffers.reverse()}_scroll(){if(!this._scrollDisabled){var e=this.$.scroller.scrollTop;(e<this._bufferHeight||e>2*this._initialScroll-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());var t=this.root.querySelector(".buffer").offsetTop,n=e>this._buffers[1].translateY+this.itemHeight+t,a=e<this._buffers[0].translateY+this.itemHeight+t;(n||a)&&(this._translateBuffer(a),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=z.a.debounce(this._debouncerScrollFinish,O.timeOut.after(200),()=>{var e=this.$.scroller.getBoundingClientRect();this._isVisible(this._buffers[0],e)||this._isVisible(this._buffers[1],e)||(this.position=this.position)})}}set position(e){this._preventScrollEvent=!0,e>this._firstIndex&&e<this._firstIndex+2*this.bufferSize?this.$.scroller.scrollTop=this.itemHeight*(e-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~e,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=e%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}get itemHeight(){if(!this._itemHeightVal){const e=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-infinite-scroller-item-height"):getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),t="background-position";this.$.fullHeight.style.setProperty(t,e);const n=getComputedStyle(this.$.fullHeight).getPropertyValue(t);this.$.fullHeight.style.removeProperty(t),this._itemHeightVal=parseFloat(n)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(e=>{e.style.transform="translate3d(0, "+e.translateY+"px, 0)"}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=z.a.debounce(this._debouncerUpdateClones,O.timeOut.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){var e=this.getBoundingClientRect();this._buffers.forEach(t=>{for(var n=0;n<this.bufferSize;n++){const n=document.createElement("div");n.style.height=this.itemHeight+"px",n.instance={};const a="vaadin-infinite-scroller-item-content-"+(Y._contentIndex=Y._contentIndex+1||0),i=document.createElement("slot");i.setAttribute("name",a),i._itemWrapper=n,t.appendChild(i),n.setAttribute("slot",a),this.appendChild(n),Object(F.c)(),setTimeout(()=>{this._isVisible(n,e)&&this._ensureStampedInstance(n)},1)}},this),setTimeout(()=>{Object($.a)(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(e){if(!e.firstElementChild){var t=e.instance;e.instance=new this._TemplateClass({}),e.appendChild(e.instance.root),Object.keys(t).forEach(n=>{e.instance.set(n,t[n])})}}_updateClones(e){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;var t=e?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((n,a)=>{if(!n.updated){var i=this._firstIndex+this.bufferSize*a;[].forEach.call(n.children,(n,a)=>{const o=n._itemWrapper;e&&!this._isVisible(o,t)||(o.instance.index=i+a)}),n.updated=!0}},this)}_isVisible(e,t){var n=e.getBoundingClientRect();return n.bottom>t.top&&n.top<t.bottom}}customElements.define(Y.is,Y),n(101);const P=document.createElement("template");P.setAttribute("style","display: none;"),P.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'vaadin-date-picker-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAYoAAsAAAAABdwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIFqWNtYXAAAAFoAAAAVAAAAFQXVtKKZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAUAAAAFAAtWm1WhlYWQAAAMEAAAANgAAADYNRs5taGhlYQAAAzwAAAAkAAAAJAdCA8lobXR4AAADYAAAACAAAAAgFW4CxGxvY2EAAAOAAAAAEgAAABIBEgDCbWF4cAAAA5QAAAAgAAAAIAAMACNuYW1lAAADtAAAAlIAAAJSbLEfa3Bvc3QAAAYIAAAAIAAAACAAAwAAAAMDfAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QMDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkD//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQFvAKsCqwKrAAUAAAEHFwcXAQGrPMPDPAEAAqs8xMQ8AQAAAQDVAIADKwLVAAsAAAEnBycHFwcXNxc3JwMrPO/vPO/vPO/vPO8CmTzu7jzu7zzv7zzvAAMAgAArA4ADgAADABwAIAAAASMVMwMVITUjFSMiBhURFBYzITI2NRE0JisBNSMTIREhAtXV1Sr+qlUrIzIyIwJWIzIyIytVgP2qAlYBq9YCq1VVVTIk/asjMjIjAlUkMlX9AAHVAAAAAQAAAAADbgNuABMAAAEUDgIjIi4CNTQ+AjMyHgIDbkV3oFtboHdFRXegW1ugd0UBt1ugd0VFd6BbW6B3RUV3oAAAAAABAAAAAQAAvCcusV8PPPUACwQAAAAAANVURPgAAAAA1VRE+AAAAAADgAOAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOAAAEAAAAAAAAAAAAAAAAAAAAIBAAAAAAAAAAAAAAAAgAAAAQAAW8EAADVBAAAgANuAAAAAAAAAAoAFAAeADAASgB+AKAAAAABAAAACAAhAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAGAAAAAEAAAAAAAIABwD5AAEAAAAAAAMAGABpAAEAAAAAAAQAGAEOAAEAAAAAAAUACwBIAAEAAAAAAAYAGACxAAEAAAAAAAoAGgFWAAMAAQQJAAEAMAAYAAMAAQQJAAIADgEAAAMAAQQJAAMAMACBAAMAAQQJAAQAMAEmAAMAAQQJAAUAFgBTAAMAAQQJAAYAMADJAAMAAQQJAAoANAFwdmFhZGluLWRhdGUtcGlja2VyLWljb25zAHYAYQBhAGQAaQBuAC0AZABhAHQAZQAtAHAAaQBjAGsAZQByAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLWRhdGUtcGlja2VyLWljb25zAHYAYQBhAGQAaQBuAC0AZABhAHQAZQAtAHAAaQBjAGsAZQByAC0AaQBjAG8AbgBzdmFhZGluLWRhdGUtcGlja2VyLWljb25zAHYAYQBhAGQAaQBuAC0AZABhAHQAZQAtAHAAaQBjAGsAZQByAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLWRhdGUtcGlja2VyLWljb25zAHYAYQBhAGQAaQBuAC0AZABhAHQAZQAtAHAAaQBjAGsAZQByAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style><dom-module id="vaadin-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      :host([right-aligned]) {\n        align-items: flex-end;\n      }\n\n      [part="overlay"] {\n        display: flex;\n        flex: auto;\n      }\n\n      [part~="content"] {\n        flex: auto;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(P.content);class V extends(Object(s.a)(Object(r.a)(o.a))){static get template(){return m["a"]`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        outline: none;
        background: #fff;
      }

      [part="overlay-header"] {
        display: flex;
        flex-shrink: 0;
        flex-wrap: nowrap;
        align-items: center;
      }

      :host(:not([fullscreen])) [part="overlay-header"] {
        display: none;
      }

      [part="label"] {
        flex-grow: 1;
      }

      [part="clear-button"],
      [part="toggle-button"],
      [part="years-toggle-button"]::before {
        font-family: 'vaadin-date-picker-icons';
      }

      [part="clear-button"]:not([showclear]) {
        display: none;
      }

      [part="clear-button"]::before {
        content: "\\e901";
      }

      [part="toggle-button"]::before {
        content: "\\e902";
      }

      [part="years-toggle-button"] {
        display: flex;
      }

      [part="years-toggle-button"][desktop] {
        display: none;
      }

      [part="years-toggle-button"]::before {
        content: "\\e900";
      }

      :host(:not([years-visible])) [part="years-toggle-button"]::before {
        transform: rotate(180deg);
      }

      #scrollers {
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      [part="months"],
      [part="years"] {
        height: 100%;
      }

      [part="months"] {
        --vaadin-infinite-scroller-item-height: 270px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      #scrollers[desktop] [part="months"] {
        right: 50px;
        transform: none !important;
      }

      [part="years"] {
        --vaadin-infinite-scroller-item-height: 80px;
        width: 50px;
        position: absolute;
        right: 0;
        transform: translateX(100%);
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        /* Center the year scroller position. */
        --vaadin-infinite-scroller-buffer-offset: 50%;
      }

      #scrollers[desktop] [part="years"] {
        position: absolute;
        transform: none !important;
      }

      [part="years"]::before {
        content: '';
        display: block;
        background: transparent;
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        border-left-color: #000;
      }

      :host(.animate) [part="months"],
      :host(.animate) [part="years"] {
        transition: all 200ms;
      }

      [part="toolbar"] {
        display: flex;
        justify-content: space-between;
        z-index: 2;
        flex-shrink: 0;
      }

      [part~="overlay-header"]:not([desktop]) {
        padding-bottom: 40px;
      }

      [part~="years-toggle-button"] {
        position: absolute;
        top: auto;
        right: 8px;
        bottom: 0;
        z-index: 1;
        padding: 8px;
      }

      #announcer {
        display: inline-block;
        position: fixed;
        clip: rect(0, 0, 0, 0);
        clip-path: inset(100%);
      }
    </style>

    <div id="announcer" role="alert" aria-live="polite">
      [[i18n.calendar]]
    </div>

    <div part="overlay-header" on-touchend="_preventDefault" desktop\$="[[_desktopMode]]" aria-hidden="true">
      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
      <div part="clear-button" on-tap="_clear" showclear\$="[[_showClear(selectedDate)]]"></div>
      <div part="toggle-button" on-tap="_cancel"></div>

      <div part="years-toggle-button" desktop\$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">
        [[_yearAfterXMonths(_visibleMonthIndex)]]
      </div>
    </div>

    <div id="scrollers" desktop\$="[[_desktopMode]]" on-track="_track">
      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">
        <template>
          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused\$="[[_focused]]" part="month">
          </vaadin-month-calendar>
        </template>
      </vaadin-infinite-scroller>
      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">
        <template>
          <div part="year-number" role="button" current\$="[[_isCurrentYear(index)]]" selected\$="[[_isSelectedYear(index, selectedDate)]]">
            [[_yearAfterXYears(index)]]
          </div>
          <div part="year-separator" aria-hidden="true"></div>
        </template>
      </vaadin-infinite-scroller>
    </div>

    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
      <vaadin-button id="todayButton" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">
        [[i18n.today]]
      </vaadin-button>
      <vaadin-button id="cancelButton" part="cancel-button" on-tap="_cancel">
        [[i18n.cancel]]
      </vaadin-button>
    </div>

    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>
`}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{selectedDate:{type:Date,notify:!0},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,_focused:Boolean,label:String}}ready(){super.ready(),this.setAttribute("tabindex",0),this.addEventListener("keydown",this._onKeydown.bind(this)),Object(A.addListener)(this,"tap",this._stopPropagation),this.addEventListener("focus",this._onOverlayFocus.bind(this)),this.addEventListener("blur",this._onOverlayBlur.bind(this))}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),Object(A.setTouchAction)(this.$.scrollers,"pan-y"),E.a.requestAvailability()}announceFocusedDate(){var e=this._currentlyFocusedDate(),t=[];M._dateEquals(e,new Date)&&t.push(this.i18n.today),t=t.concat([this.i18n.weekdays[e.getDay()],e.getDate(),this.i18n.monthNames[e.getMonth()],e.getFullYear()]),this.showWeekNumbers&&1===this.i18n.firstDayOfWeek&&(t.push(this.i18n.week),t.push(M._getISOWeekNumber(e))),this.dispatchEvent(new CustomEvent("iron-announce",{bubbles:!0,composed:!0,detail:{text:t.join(" ")}}))}focusCancel(){this.$.cancelButton.focus()}scrollToDate(e,t){this._scrollToPosition(this._differenceInMonths(e,this._originDate),t)}_focusedDateChanged(e){this.revealDate(e)}_isCurrentYear(e){return 0===e}_isSelectedYear(e,t){if(t)return t.getFullYear()===this._originDate.getFullYear()+e}revealDate(e){if(e){var t=this._differenceInMonths(e,this._originDate),n=this.$.monthScroller.position>t,a=this.$.monthScroller.clientHeight/this.$.monthScroller.itemHeight,i=this.$.monthScroller.position+a-1<t;n?this._scrollToPosition(t,!0):i&&this._scrollToPosition(t-a+1,!0)}}_onOverlayFocus(){this._focused=!0}_onOverlayBlur(){this._focused=!1}_initialPositionChanged(e){this.scrollToDate(e)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position),this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=12*this.$.yearScroller.position-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=z.a.debounce(this._debouncer,O.timeOut.after(300),()=>this._ignoreTaps=!1)}_formatDisplayed(e,t,n){return e?t(M._extractDateParts(e)):n}_onTodayTap(){var e=new Date;this.$.monthScroller.position===this._differenceInMonths(e,this._originDate)?(this.selectedDate=e,this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_showClear(e){return!!e}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){var t=(e.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2))/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+12*t,!0)}}_scrollToPosition(e,t){if(void 0===this._targetPosition){if(!t)return this.$.monthScroller.position=e,this._targetPosition=void 0,void this._repositionYearScroller();this._targetPosition=e;var n=t?300:0,a=0,i=this.$.monthScroller.position,o=e=>{var t=e-(a=a||e);if(t<n){var r=((e,t,n,a)=>(e/=a/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t)(t,i,this._targetPosition-i,n);this.$.monthScroller.position=r,window.requestAnimationFrame(o)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:i}})),this.$.monthScroller.position=this._targetPosition,this._targetPosition=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(o)}else this._targetPosition=e}_limit(e,t){return Math.min(t.max,Math.max(t.min,e))}_handleTrack(e){if(!(Math.abs(e.detail.dx)<10||Math.abs(e.detail.ddy)>10)){Math.abs(e.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);var t=this._translateX+e.detail.ddx;this._translateX=this._limit(t,{min:0,max:this._yearScrollerWidth})}}_track(e){if(!this._desktopMode)switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller()}}_toggleAnimateClass(e){e?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(e){this._desktopMode||(this.$.monthScroller.style.transform="translateX("+(e-this._yearScrollerWidth)+"px)",this.$.yearScroller.style.transform="translateX("+e+"px)")}_yearAfterXYears(e){var t=new Date(this._originDate);return t.setFullYear(parseInt(e)+this._originDate.getFullYear()),t.getFullYear()}_yearAfterXMonths(e){return this._dateAfterXMonths(e).getFullYear()}_dateAfterXMonths(e){var t=new Date(this._originDate);return t.setDate(1),t.setMonth(parseInt(e)+this._originDate.getMonth()),t}_differenceInMonths(e,t){return 12*(e.getFullYear()-t.getFullYear())-t.getMonth()+e.getMonth()}_differenceInYears(e,t){return this._differenceInMonths(e,t)/12}_clear(){this.selectedDate=""}_close(){const e=this.getRootNode().host,t=e?e.getRootNode().host:null;t&&(t.opened=!1),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(e){e.preventDefault()}_eventKey(e){for(var t=["down","up","right","left","enter","space","home","end","pageup","pagedown","tab","esc"],n=0;n<t.length;n++){var a=t[n];if(C.a.keyboardEventMatchesKeys(e,a))return a}}_onKeydown(e){var t=this._currentlyFocusedDate();const n=e.composedPath().indexOf(this.$.todayButton)>=0,a=e.composedPath().indexOf(this.$.cancelButton)>=0,i=!n&&!a;var o=this._eventKey(e);if("tab"===o){e.stopPropagation();const t=this.hasAttribute("fullscreen"),o=e.shiftKey;t?e.preventDefault():o&&i||!o&&a?(e.preventDefault(),this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))):o&&n?(this._focused=!0,setTimeout(()=>this.revealDate(this.focusedDate),1)):this._focused=!1}else if(o)switch(e.preventDefault(),e.stopPropagation(),o){case"down":this._moveFocusByDays(7),this.focus();break;case"up":this._moveFocusByDays(-7),this.focus();break;case"right":i&&this._moveFocusByDays(1);break;case"left":i&&this._moveFocusByDays(-1);break;case"enter":i||a?this._close():n&&this._onTodayTap();break;case"space":if(a)this._close();else if(n)this._onTodayTap();else{var r=this.focusedDate;M._dateEquals(r,this.selectedDate)?(this.selectedDate="",this.focusedDate=r):this.selectedDate=r}break;case"home":this._moveFocusInsideMonth(t,"minDate");break;case"end":this._moveFocusInsideMonth(t,"maxDate");break;case"pagedown":this._moveFocusByMonths(e.shiftKey?12:1);break;case"pageup":this._moveFocusByMonths(e.shiftKey?-12:-1);break;case"esc":this._cancel()}}_currentlyFocusedDate(){return this.focusedDate||this.selectedDate||this.initialPosition||new Date}_moveFocusByDays(e){var t=this._currentlyFocusedDate(),n=new Date(0,0);n.setFullYear(t.getFullYear()),n.setMonth(t.getMonth()),n.setDate(t.getDate()+e),this._dateAllowed(n,this.minDate,this.maxDate)?(this.focusedDate=n,this._focusedMonthDate=this.focusedDate.getDate()):this._dateAllowed(t,this.minDate,this.maxDate)?e>0?(this.focusedDate=this.maxDate,this._focusedMonthDate=this.maxDate.getDate()):(this.focusedDate=this.minDate,this._focusedMonthDate=this.minDate.getDate()):(this.focusedDate=M._getClosestDate(t,[this.minDate,this.maxDate]),this._focusedMonthDate=this.focusedDate.getDate())}_moveFocusByMonths(e){var t=this._currentlyFocusedDate(),n=new Date(0,0);n.setFullYear(t.getFullYear()),n.setMonth(t.getMonth()+e);var a=n.getMonth();n.setDate(this._focusedMonthDate||(this._focusedMonthDate=t.getDate())),n.getMonth()!==a&&n.setDate(0),this._dateAllowed(n,this.minDate,this.maxDate)?this.focusedDate=n:this._dateAllowed(t,this.minDate,this.maxDate)?e>0?(this.focusedDate=this.maxDate,this._focusedMonthDate=this.maxDate.getDate()):(this.focusedDate=this.minDate,this._focusedMonthDate=this.minDate.getDate()):(this.focusedDate=M._getClosestDate(t,[this.minDate,this.maxDate]),this._focusedMonthDate=this.focusedDate.getDate())}_moveFocusInsideMonth(e,t){var n=new Date(0,0);n.setFullYear(e.getFullYear()),"minDate"===t?(n.setMonth(e.getMonth()),n.setDate(1)):(n.setMonth(e.getMonth()+1),n.setDate(0)),this._dateAllowed(n,this.minDate,this.maxDate)?(this.focusedDate=n,this._focusedMonthDate=this.focusedDate.getDate()):this._dateAllowed(e,this.minDate,this.maxDate)?(this.focusedDate=this[t],this._focusedMonthDate=this[t].getDate()):(this.focusedDate=M._getClosestDate(e,[this.minDate,this.maxDate]),this._focusedMonthDate=this.focusedDate.getDate())}_dateAllowed(e,t,n){return(!t||e>=t)&&(!n||e<=n)}_isTodayAllowed(e,t){var n=new Date,a=new Date(0,0);return a.setFullYear(n.getFullYear()),a.setMonth(n.getMonth()),a.setDate(n.getDate()),this._dateAllowed(a,e,t)}_stopPropagation(e){e.stopPropagation()}}customElements.define(V.is,V);var W=n(34);const L=e=>(class extends(Object(T.b)([C.a,W.a],e)){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,observer:"_valueChanged",notify:!0,value:""},required:{type:Boolean,value:!1},name:{type:String},initialPosition:String,label:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},showWeekNumbers:{type:Boolean},_fullscreen:{value:!1,observer:"_fullscreenChanged"},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_touchPrevented:Array,i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",clear:"Clear",today:"Today",cancel:"Cancel",formatDate:e=>{const t=String(e.year).replace(/\d+/,e=>"0000".substr(e.length)+e);return[e.month+1,e.day,t].join("/")},parseDate:e=>{const t=e.split("/"),n=new Date;let a,i=n.getMonth(),o=n.getFullYear();if(3===t.length?(o=parseInt(t[2]),t[2].length<3&&o>=0&&(o+=o<50?2e3:1900),i=parseInt(t[0])-1,a=parseInt(t[1])):2===t.length?(i=parseInt(t[0])-1,a=parseInt(t[1])):1===t.length&&(a=parseInt(t[0])),void 0!==a)return{day:a,month:i,year:o}},formatTitle:(e,t)=>e+" "+t})},min:{type:String,observer:"_minChanged"},max:{type:String,observer:"_maxChanged"},_minDate:{type:Date,value:""},_maxDate:{type:Date,value:""},_noInput:{type:Boolean,computed:"_isNoInput(_fullscreen, i18n, i18n.*, _ios)"},_ios:{type:Boolean,value:navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)},_ignoreAnnounce:{value:!0},_focusOverlayOnOpen:Boolean}}static get observers(){return["_updateHasValue(value)","_validateInput(_selectedDate, _minDate, _maxDate)","_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)","_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)"]}ready(){super.ready(),this._overlayContent=this.$.overlay.content.querySelector("#overlay-content"),this._boundOnScroll=this._onScroll.bind(this),this._boundFocus=this._focus.bind(this),Object(A.addListener)(this,"tap",this.open),this.addEventListener("touchend",this._preventDefault.bind(this)),this.addEventListener("keydown",this._onKeydown.bind(this)),this._overlayContent.addEventListener("close",this._close.bind(this)),this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this)),this.addEventListener("input",this._onUserInput.bind(this)),this.addEventListener("focus",e=>this._noInput&&e.target.blur())}connectedCallback(){super.connectedCallback(),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._boundFocus)}disconnectedCallback(){super.disconnectedCallback(),this.$.overlay.removeEventListener("vaadin-overlay-escape-press",this._boundFocus),this.opened=!1}open(){this.disabled||this.readonly||(this.$.overlay.opened=!0)}_close(e){e&&e.stopPropagation(),this._focus(),this.close()}close(){this.$.overlay.close()}get _inputElement(){return this._input()}get _nativeInput(){if(this._inputElement)return this._inputElement.focusElement?this._inputElement.focusElement:this._inputElement.inputElement?this._inputElement.inputElement:window.unwrap?window.unwrap(this._inputElement):this._inputElement}_parseDate(e){var t=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(e);if(t){var n=new Date(0,0);return n.setFullYear(parseInt(t[1],10)),n.setMonth(parseInt(t[2],10)-1),n.setDate(parseInt(t[3],10)),n}}_isNoInput(){return!this._inputElement||this._fullscreen||!this.i18n.parseDate||this._ios}_formatISO(e){return e instanceof Date?new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().split("T")[0]:""}_openedChanged(e){e&&this._updateAlignmentAndPosition()}_selectedDateChanged(e,t){void 0!==e&&void 0!==t&&(this.value=this._formatISO(e),this._focusedDate=e,this._inputValue=e?t(M._extractDateParts(e)):"")}_focusedDateChanged(e,t){void 0!==e&&void 0!==t&&(this._ignoreFocusedDateChange||this._noInput||(this._inputValue=e?t(M._extractDateParts(e)):""))}_updateHasValue(e){e?this.setAttribute("has-value",""):this.removeAttribute("has-value")}_handleDateChange(e,t,n){if(t){var a=this._parseDate(t);a?M._dateEquals(this[e],a)||(this[e]=a):this.value=n}else this[e]=""}_valueChanged(e,t){this._handleDateChange("_selectedDate",e,t)}_minChanged(e,t){this._handleDateChange("_minDate",e,t)}_maxChanged(e,t){this._handleDateChange("_maxDate",e,t)}_updateAlignmentAndPosition(){const e=this._inputElement.getBoundingClientRect().top>window.innerHeight/2,t=this._inputElement.getBoundingClientRect().left+this.clientWidth/2>window.innerWidth/2,n=Math.min(window.innerHeight,document.documentElement.clientHeight),a=Math.min(window.innerWidth,document.documentElement.clientWidth),i=this._inputElement.getBoundingClientRect();this._fullscreen||(t?(this.$.overlay.setAttribute("right-aligned",""),this.$.overlay.style.removeProperty("left"),this.$.overlay.style.right=a-i.right+"px"):(this.$.overlay.removeAttribute("right-aligned"),this.$.overlay.style.removeProperty("right"),this.$.overlay.style.left=i.left+"px"),e?(this.$.overlay.setAttribute("bottom-aligned",""),this.$.overlay.style.removeProperty("top"),this.$.overlay.style.bottom=n-i.top+"px"):(this.$.overlay.removeAttribute("bottom-aligned"),this.$.overlay.style.removeProperty("bottom"),this.$.overlay.style.top=i.bottom+"px")),this._overlayContent._repositionYearScroller()}_fullscreenChanged(){this.$.overlay.opened&&this._updateAlignmentAndPosition()}_onOverlayOpened(){this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring");var e=this._parseDate(this.initialPosition),t=this._selectedDate||this._overlayContent.initialPosition||e||new Date;e||M._dateAllowed(t,this._minDate,this._maxDate)?this._overlayContent.initialPosition=t:this._overlayContent.initialPosition=M._getClosestDate(t,[this._minDate,this._maxDate]),this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this.listen(this,"iron-resize","_updateAlignmentAndPosition"),""===document.createElement("div").style.webkitOverflowScrolling&&(this._touchPrevented=this._preventWebkitOverflowScrollingTouch(this.parentElement)),this._focusOverlayOnOpen?(this._overlayContent.focus(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&this.focusElement.blur(),this.updateStyles(),this._ignoreAnnounce=!1}_preventWebkitOverflowScrollingTouch(e){for(var t=[];e;){if("touch"===window.getComputedStyle(e).webkitOverflowScrolling){var n=e.style.webkitOverflowScrolling;e.style.webkitOverflowScrolling="auto",t.push({element:e,oldInlineValue:n})}e=e.parentElement}return t}_onOverlayClosed(){if(this._ignoreAnnounce=!0,window.removeEventListener("scroll",this._boundOnScroll,!0),this.unlisten(this,"iron-resize","_updateAlignmentAndPosition"),this._touchPrevented&&(this._touchPrevented.forEach(e=>e.element.style.webkitOverflowScrolling=e.oldInlineValue),this._touchPrevented=[]),this.updateStyles(),this._ignoreFocusedDateChange=!0,this.i18n.parseDate){var e=this._inputValue||"";const t=this.i18n.parseDate(e),n=t&&this._parseDate(`${t.year}-${t.month+1}-${t.day}`);this._isValidDate(n)?this._selectedDate=n:(this._selectedDate=null,this._inputValue=e)}else this._focusedDate&&(this._selectedDate=this._focusedDate);this._ignoreFocusedDateChange=!1,this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.invalid=!1,this.validate()}validate(e){return e=void 0!==e?e:this._inputValue,!(this.invalid=!this.checkValidity(e))}checkValidity(e){var t=!e||this._selectedDate&&e===this.i18n.formatDate(M._extractDateParts(this._selectedDate)),n=!this._selectedDate||M._dateAllowed(this._selectedDate,this._minDate,this._maxDate),a=!0;return this._inputElement&&(this._inputElement.checkValidity?a=this._inputElement.checkValidity(e):this._inputElement.validate&&(a=this._inputElement.validate(e))),t&&n&&a}_onScroll(e){e.target!==window&&this._overlayContent.contains(e.target)||this._updateAlignmentAndPosition()}_focus(){this._noInput?this._overlayContent.focus():this._inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputValue.length)}_setSelectionRange(e,t){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,t)}_preventDefault(e){e.preventDefault()}_eventKey(e){for(var t=["down","up","enter","esc","tab"],n=0;n<t.length;n++){var a=t[n];if(C.a.keyboardEventMatchesKeys(e,a))return a}}_isValidDate(e){return e&&!isNaN(e.getTime())}_onKeydown(e){switch(this._noInput&&-1===[9].indexOf(e.keyCode)&&e.preventDefault(),this._eventKey(e)){case"down":case"up":e.preventDefault(),this.opened?(this._overlayContent.focus(),this._overlayContent._onKeydown(e)):(this._focusOverlayOnOpen=!0,this.open());break;case"enter":this._overlayContent.focusedDate&&(this._selectedDate=this._overlayContent.focusedDate),this.close();break;case"esc":this._focusedDate=this._selectedDate,this._close();break;case"tab":this.opened&&(e.preventDefault(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():(this._overlayContent.focus(),this._overlayContent.revealDate(this._focusedDate)))}}_validateInput(e,t,n){e&&(t||n)&&(this.invalid=!M._dateAllowed(e,t,n))}_onUserInput(e){this.opened||this.open(),this._userInputValueChanged()}_userInputValueChanged(e){if(this.opened&&this._inputValue){const e=this.i18n.parseDate&&this.i18n.parseDate(this._inputValue),t=e&&this._parseDate(`${e.year}-${e.month+1}-${e.day}`);this._isValidDate(t)&&(this._ignoreFocusedDateChange=!0,M._dateEquals(t,this._focusedDate)||(this._focusedDate=t),this._ignoreFocusedDateChange=!1)}}_announceFocusedDate(e,t,n){t&&!n&&this._overlayContent.announceFocusedDate()}});class Q extends(p(l(Object(s.a)(L(Object(r.a)(o.a)))))){static get template(){return m["a"]`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }

      [part="clear-button"],
      [part="toggle-button"] {
        font-family: 'vaadin-date-picker-icons';
      }

      [part="clear-button"]::before {
        content: "\\e901";
      }

      [part="toggle-button"]::before {
        content: "\\e902";
      }

      :host([disabled]) [part="clear-button"],
      :host([readonly]) [part="clear-button"],
      :host(:not([has-value])) [part="clear-button"] {
        display: none;
      }
    </style>


    <vaadin-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" aria-label\$="[[label]]" part="text-field">
      <slot name="prefix" slot="prefix"></slot>
      <div part="clear-button" slot="suffix" on-touchend="_clearTouchend" on-click="_clear" role="button" aria-label\$="[[i18n.clear]]"></div>
      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label\$="[[i18n.calendar]]" aria-expanded\$="[[_getAriaExpanded(opened)]]"></div>
    </vaadin-text-field>

    <vaadin-date-picker-overlay id="overlay" fullscreen\$="[[_fullscreen]]" opened="{{opened}}" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed">
      <template>
        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen\$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content">
        </vaadin-date-picker-overlay-content>
      </template>
    </vaadin-date-picker-overlay>

    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">
    </iron-media-query>
`}static get is(){return"vaadin-date-picker"}static get version(){return"3.0.0-pre.3"}static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:String,placeholder:String,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_userInputValue:String}}static get observers(){return["_userInputValueChanged(_userInputValue)"]}ready(){super.ready(),Object($.a)(this,()=>this._inputElement.validate=(()=>{})),this._overlayContent.addEventListener("focus",()=>this.focusElement._setFocused(!0)),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}_onVaadinOverlayClose(e){this._openedWithFocusRing&&this.hasAttribute("focused")?this.focusElement.setAttribute("focus-ring",""):this.hasAttribute("focused")||this.focusElement.blur(),e.detail.sourceEvent&&-1!==e.detail.sourceEvent.composedPath().indexOf(this)&&e.preventDefault()}_clear(){this.value="",this.validate(),this.focus(),Object(A.prevent)("tap")}_clearTouchend(e){this._clear(),e.preventDefault(),Object(A.prevent)("tap")}_toggle(e){e.stopPropagation(),this[this.$.overlay.opened?"close":"open"]()}_input(){return this.$.input}set _inputValue(e){this._inputElement.value=e}get _inputValue(){return this._inputElement.value}_getAriaExpanded(e){return Boolean(e).toString()}get focusElement(){return this._input()||this}}customElements.define(Q.is,Q)}}]);
//# sourceMappingURL=cf8ad335cadc3474c091.chunk.js.map