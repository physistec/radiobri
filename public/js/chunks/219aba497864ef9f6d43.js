(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{166:function(t,e,a){var n=a(286);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(6)(n,i);n.locals&&(t.exports=n.locals)},247:function(t,e,a){"use strict";a.r(e);var n={props:["plan","chosen","isSubscriptionLoading"]},i=(a(285),a(0)),s=a(1),l=a.n(s),_=a(81),r=a(105),c=a(75),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"plan",attrs:{rounded:"lg",elevation:"10"}},[a("div",{staticClass:"plan__recommended"},[t.plan.recommended?a("v-btn",{attrs:{color:"success",text:"",small:""}},[t._v(t._s(t.$t("Recommended")))]):t._e()],1),t._v(" "),a("div",{staticClass:"plan__name"},[t._v("\n        "+t._s(t.plan.name)+"\n    ")]),t._v(" "),a("div",{staticClass:"plan__price"},[t.plan.free?t._e():a("div",{staticClass:"plan__price__currency"},[t._v("\n            "+t._s(t.planCurrencySymbol(t.plan))+"\n        ")]),t._v(" "),a("div",{staticClass:"plan__price__amount"},[t.plan.free?[t._v(t._s(t.$t("Free")))]:[t._v(t._s(t.price(t.plan.amount)))]],2),t._v(" "),t.plan.free?t._e():a("div",{staticClass:"plan__price__interval"},[t._v("\n            / "+t._s(t.plan.interval)+"\n        ")])]),t._v(" "),a("div",{staticClass:"plan__features"},[t.plan.displayed_features?t._l(t.plan.displayed_features,(function(e,n){return a("div",{key:t.plan.id+"-feature-"+n,staticClass:"plan__features__feature"},[a("div",{staticClass:"plan__features__feature__icon mr-1"},[a("v-icon",{attrs:{color:"success"}},[t._v("$vuetify.icons.check")])],1),t._v(" "),a("div",{staticClass:"plan__features__feature__text"},[t._v("\n                    "+t._s(t.$t(e))+"\n                ")])])})):t._e()],2),t._v(" "),a("div",{staticClass:"plan__action"},[t.chosen?[a("v-btn",{staticClass:"plan-chosen__header__change-btn",attrs:{dense:"",text:"",color:"primary",outlined:"",disabled:t.isSubscriptionLoading},on:{click:function(e){return t.$emit("callToAction")}}},[a("v-icon",{staticClass:"mr-1",attrs:{small:"",color:"primary"}},[t._v("$vuetify.icons.arrow-left")]),t._v("\n                "+t._s(t.$t("Change"))+"\n            ")],1)]:[t.isSubTo(t.plan.id)?a("v-btn",{attrs:{disabled:"",outlined:""}},[t._v(t._s(t.$t("Current Plan")))]):a("v-btn",{staticClass:"primary",on:{click:function(e){return t.$emit("planChosen",t.plan)}}},[t._v(t._s(t.$t("Choose")))])]],2)])}),[],!1,null,"5421cf92",null);e.default=o.exports;l()(o,{VBtn:_.a,VCard:r.a,VIcon:c.a})},285:function(t,e,a){"use strict";a(166)},286:function(t,e,a){(t.exports=a(5)(!1)).push([t.i,".plan[data-v-5421cf92]{margin-right:1.5em;max-width:300px;flex-basis:30%;min-width:200px;min-height:400px;padding-bottom:3em;margin-bottom:1em;padding-top:1em;position:relative}.plan__recommended[data-v-5421cf92]{position:absolute;top:1em;left:0;right:0;display:flex;justify-content:center}.plan__name[data-v-5421cf92]{font-size:2em;font-weight:700;opacity:1;text-align:center;font-weight:400;padding:.8em .5em .5em}.plan__price[data-v-5421cf92]{display:flex;width:100%;justify-content:center}.plan__price__currency[data-v-5421cf92]{font-size:1.4em;font-weight:700;display:flex;align-items:flex-start;margin-top:-.5em}.plan__price__amount[data-v-5421cf92]{font-weight:700;font-size:3em;line-height:1}.plan__price__interval[data-v-5421cf92]{font-size:1.2em;display:flex;align-items:flex-end;margin-left:.2em}.plan__features[data-v-5421cf92]{padding:1em 2em}.plan__features__feature[data-v-5421cf92]{font-size:1em;padding:.5em 0;display:flex;align-items:center}.plan__action[data-v-5421cf92]{text-align:center;position:absolute;bottom:1em;left:0;right:0}.plan__chosen[data-v-5421cf92]{margin-right:0;max-width:1000px}",""])}}]);