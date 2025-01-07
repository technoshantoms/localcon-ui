(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{5290:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(6),r=n.n(o),i=n(1),c=n.n(i),l=n(2),u=n.n(l),h=n(5),m=n(74),d=n(106),p=n(4),_=n(7),v=n(51),y=n(97),w=n(8),b=n(13),g=(n(17),n(274)),f=n(152),k=n(58),E=n(3),I=n.n(E),C=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function N(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var K=function(e){function t(){return A(this,t),P(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return N(t,e),C(t,[{key:"shouldComponentUpdate",value:function(e){return!h.a.are_equal_shallow(e,this.props)}},{key:"_lookUpPubKeyForAddress",value:function(e){return f.a.getState().addresses.get(e)}},{key:"render",value:function(){var e=void 0,t=void 0,n=void 0,a="_accounts",o=this.props.pubkey,r=k.a.getState().keys,i=!1;return this.props.account?(e=this.props.account.get("name"),t=this.props.account.get("id"),n=s.a.createElement(_.b,{to:"/account/"+e+"/permissions"},e)):o?(e=t=o,n=s.a.createElement(g.a,{pubkey:o},o),a="_keys",i=r.has(o)):this.props.address&&(o=this._lookUpPubKeyForAddress(this.props.address),t=this.props.address,n=o?s.a.createElement(g.a,{pubkey:o},o):this.props.address,a="_addresses",i=r.has(o)),s.a.createElement("tr",{key:e},s.a.createElement("td",null,this.props.account?s.a.createElement(y.a,{size:{height:30,width:30},account:e}):o?s.a.createElement("div",{className:"account-image"},s.a.createElement(g.a,{pubkey:o,modalKey:"1"},s.a.createElement("span",{className:"key-icon"}))):null),s.a.createElement("td",{className:(i?"my-key":"")+" pub-key"},n),s.a.createElement("td",null,this.props.weights[t]),s.a.createElement("td",null,s.a.createElement("button",{className:"btn large outline",onClick:this.props.onRemoveItem.bind(this,t,a)},u.a.translate("account.votes.remove_witness"))))}}]),t}(s.a.Component);K.propTypes={account:I.a.object,pubkey:I.a.string,address:I.a.string,onRemoveItem:I.a.func.isRequired,weights:I.a.object};var x=function(e){function t(e){A(this,t);var n=P(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selected_item:null,item_name_input:"",weight_input:"",error:null},n.onItemChange=n.onItemChange.bind(n),n.onItemAccountChange=n.onItemAccountChange.bind(n),n.onAddItem=n.onAddItem.bind(n),n}return N(t,e),C(t,[{key:"onItemChange",value:function(e){this.setState({item_name_input:e})}},{key:"onItemAccountChange",value:function(e){var t=this;if(this.setState({selected_item:e,error:null}),e&&this.props.validateAccount){var n=this.props.validateAccount(e);if(null===n)return;"string"==typeof n?this.setState({error:n}):n.then((function(e){return t.setState({error:e})}))}}},{key:"onWeightChanged",value:function(e){var t=e.target.value.trim();this.setState({weight_input:parseInt(t)})}},{key:"onAddItem",value:function(e){if(e){this.setState({selected_item:null,item_name_input:"",weight_input:"",error:null});var t="string"==typeof e?e:e.get("id");this.props.onAddItem(t,this.state.weight_input)}}},{key:"onWeightKeyDown",value:function(e){13===e.keyCode&&this.state.weight_input&&this.state.selected_item&&this.onAddItem(this.state.selected_item)}},{key:"render",value:function(){var e=this,t=0,n=this.props.accounts.filter((function(e){return!!e})).sort((function(e,t){return e.get("name")>t.get("name")?1:e.get("name")<t.get("name")?-1:0})).map((function(n){return s.a.createElement(K,{key:t++,account:n,weights:e.props.weights,onRemoveItem:e.props.onRemoveItem})})),a=this.props.keys.map((function(n){return s.a.createElement(K,{key:t++,pubkey:n,weights:e.props.weights,onRemoveItem:e.props.onRemoveItem})})),o=this.props.addresses.map((function(n){return s.a.createElement(K,{key:t++,address:n,weights:e.props.weights,onRemoveItem:e.props.onRemoveItem})})),r=this.state.error;!r&&this.state.selected_item&&-1!==this.props.accounts.indexOf(this.state.selected_item)&&(r=u.a.translate("account.perm.warning3")),!r&&this.state.item_name_input&&-1!==this.props.keys.indexOf(this.state.item_name_input)&&(r=u.a.translate("account.perm.warning4"));var i=["10%","70%","30%","10%"];return s.a.createElement("div",null,s.a.createElement(v.a,{label:this.props.label,error:r,placeholder:this.props.placeholder,account:this.state.item_name_input,accountName:this.state.item_name_input,onChange:this.onItemChange,onAccountChanged:this.onItemAccountChange,onAction:this.onAddItem,action_label:"account.votes.add_witness",tabIndex:this.props.tabIndex,allowPubKey:!0,disableActionButton:!this.state.weight_input,allowUppercase:!0},s.a.createElement("input",{value:this.state.weight_input,onChange:this.onWeightChanged.bind(this),className:"weight-input",type:"number",autoComplete:"off",placeholder:u.a.translate("account.perm.weight"),onKeyDown:this.onWeightKeyDown.bind(this),tabIndex:this.props.tabIndex+1})),s.a.createElement("div",{className:"accounts-table-wrap accounts-table-wrap__keys",style:{paddingTop:"2rem"}},s.a.createElement("table",{className:"accounts-table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{style:{width:i[0]}}),s.a.createElement("th",{style:{width:i[1]}},s.a.createElement(c.a,{content:"account.perm.acct_or_key"})),s.a.createElement("th",{style:{width:i[2]}},s.a.createElement(c.a,{content:"account.perm.weight"})),s.a.createElement("th",{style:{width:i[3]}},s.a.createElement(c.a,{content:"account.perm.action"})))),s.a.createElement("tbody",null,n,a,o))))}}]),t}(s.a.Component);x.propTypes={accounts:w.a.ChainObjectsList,onAddItem:I.a.func.isRequired,onRemoveItem:I.a.func.isRequired,validateAccount:I.a.func,label:I.a.string.isRequired,placeholder:I.a.string,tabIndex:I.a.number,weights:I.a.object};var O=Object(b.a)(x,{autosubscribe:!1}),S=n(272),R=n(15),j=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var T=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={validPassword:!1,pass:null,generatedPassword:"P"+p.o.get_random_key().toWif().toString()},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),j(t,[{key:"onSubmit",value:function(){}},{key:"onPasswordChange",value:function(e){var t=e.valid,n=this.props.account.get("name"),a=t?R.a.generateKeyFromPassword(n,"active",e.value).pubKey:null,s=t?R.a.generateKeyFromPassword(n,"owner",e.value).pubKey:null,o=t?R.a.generateKeyFromPassword(n,"active",e.value).pubKey:null;this.setState({validPassword:e.valid,pass:e.value}),this.props.onSetPasswordKeys({active:a,owner:s,memo:o})}},{key:"checkKeyUse",value:function(e,t){return!!e&&("memo"===t?e===this.props.memoKey:this.props[t+"Keys"].reduce((function(t,n){return n===e||t}),!1))}},{key:"_onUseKey",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t)this.props["active"===e?"onRemoveActive":"onRemoveOwner"](this.props[e],"_keys");else if(this.props[e]){var n={active:this.props.account.getIn(["active","weight_threshold"]),owner:this.props.account.getIn(["owner","weight_threshold"])};console.log("key",this.props[e],"weights",n,"weight of role:",n[e]),this.props["active"===e?"onAddActive":"owner"===e?"onAddOwner":"onSetMemo"](this.props[e],n[e])}}},{key:"render",value:function(){var e=this.checkKeyUse(this.props.active&&this.props.active,"active"),t=this.checkKeyUse(this.props.owner&&this.props.owner,"owner"),n=this.checkKeyUse(this.props.memo&&this.props.memo,"memo"),a=u.a.translate("account.perm.use_text"),o=u.a.translate("account.perm.remove_text");return s.a.createElement("div",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xl-7"},s.a.createElement("p",{style:{maxWidth:"800px"}},s.a.createElement(c.a,{content:"account.perm.password_model_1"})),s.a.createElement("p",{style:{maxWidth:"800px"}},s.a.createElement(c.a,{content:"wallet.password_model_1"})),s.a.createElement("p",{style:{maxWidth:"800px"}},s.a.createElement(c.a,{unsafe:!0,content:"wallet.password_model_2"})))),s.a.createElement("div",{className:"divider"}),s.a.createElement("form",{style:{maxWidth:"40rem"},onSubmit:this.onSubmit.bind(this),noValidate:!0},s.a.createElement("label",{className:"left-label"},s.a.createElement(c.a,{content:"wallet.generated"})),s.a.createElement("p",null,this.state.generatedPassword),s.a.createElement("p",{style:{fontWeight:"bold"}},s.a.createElement(c.a,{content:"account.perm.password_model_2"})),s.a.createElement(S.a,{ref:"password",confirmation:!0,onChange:this.onPasswordChange.bind(this),noLabel:!0,passwordLength:12,checkStrength:!0})),s.a.createElement("table",{className:"blue-bg borders"},s.a.createElement("tbody",null,s.a.createElement("tr",{className:e?"in-use":""},s.a.createElement("td",null,s.a.createElement(c.a,{content:"account.perm.new_active"}),":"),s.a.createElement("td",null,this.props.active),s.a.createElement("td",{className:"text-right"},s.a.createElement("button",{className:"btn large outline",onClick:this._onUseKey.bind(this,"active",e)},e?o:a))),s.a.createElement("tr",{className:t?"in-use":""},s.a.createElement("td",null,s.a.createElement(c.a,{content:"account.perm.new_owner"}),":"),s.a.createElement("td",null,this.props.owner),s.a.createElement("td",{className:"text-right"},s.a.createElement("button",{className:"btn large outline",onClick:this._onUseKey.bind(this,"owner",t)},t?o:a))),s.a.createElement("tr",{className:n?"in-use":""},s.a.createElement("td",null,s.a.createElement(c.a,{content:"account.perm.new_memo"}),":"),s.a.createElement("td",null,this.props.memo),s.a.createElement("td",{className:"text-right"},s.a.createElement("button",{className:"btn large outline",style:{visibility:n?"hidden":""},onClick:this._onUseKey.bind(this,"memo",n)},a))))),n?s.a.createElement("p",{style:{maxWidth:"800px",paddingTop:10},className:"has-error"},s.a.createElement(c.a,{content:"account.perm.memo_warning"})):null)}}]),t}(s.a.Component),W=n(346),U=(n(72),n(67)),F=n(68),D=(n(167),n(28)),J=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var M=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n.onPublish=n.onPublish.bind(n),n.onReset=n.onReset.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),J(t,[{key:"componentWillMount",value:function(){this.updateAccountData(this.props.account),m.a.getFinalFeeAsset(this.props.account,"account_update")}},{key:"componentWillReceiveProps",value:function(e){e.account!==this.props.account&&this.updateAccountData(e.account)}},{key:"permissionsFromImmutableObj",value:function(e){var t=e.get("weight_threshold"),n=e.get("account_auths"),a=e.get("key_auths"),s=e.get("address_auths"),o=n.map((function(e){return e.get(0)})),r=a.map((function(e){return e.get(0)})),i=s.map((function(e){return e.get(0)})),c=n.reduce((function(e,t){return e[t.get(0)]=t.get(1),e}),{});return c=a.reduce((function(e,t){return e[t.get(0)]=t.get(1),e}),c),{threshold:t,accounts:o,keys:r,addresses:i,weights:c=s.reduce((function(e,t){return e[t.get(0)]=t.get(1),e}),c)}}},{key:"permissionsToJson",value:function(e,t,n,a,s){var o={weight_threshold:e};return o.account_auths=t.sort(h.a.sortID).map((function(e){return[e,s[e]]})).toJS(),o.key_auths=n.sort(h.a.sortID).map((function(e){return[e,s[e]]})).toJS(),o.address_auths=a.sort(h.a.sortID).map((function(e){return[e,s[e]]})).toJS(),o}},{key:"updateAccountData",value:function(e){var t=this.permissionsFromImmutableObj(e.get("active")),n=this.permissionsFromImmutableObj(e.get("owner")),a=e.get("options").get("memo_key"),s={active_accounts:t.accounts,active_keys:t.keys,active_addresses:t.addresses,owner_accounts:n.accounts,owner_keys:n.keys,owner_addresses:n.addresses,active_weights:t.weights,owner_weights:n.weights,active_threshold:t.threshold,owner_threshold:n.threshold,memo_key:a,prev_active_accounts:t.accounts,prev_active_keys:t.keys,prev_active_addresses:t.addresses,prev_owner_accounts:n.accounts,prev_owner_keys:n.keys,prev_owner_addresses:n.addresses,prev_active_weights:t.weights,prev_owner_weights:n.weights,prev_active_threshold:t.threshold,prev_owner_threshold:n.threshold,prev_memo_key:a};this.setState(s)}},{key:"isChanged",value:function(){var e=this.state;return e.active_accounts!==e.prev_active_accounts||e.active_keys!==e.prev_active_keys||e.active_addresses!==e.prev_active_addresses||e.owner_accounts!==e.prev_owner_accounts||e.owner_keys!==e.prev_owner_keys||e.owner_addresses!==e.prev_owner_addresses||e.active_threshold!==e.prev_active_threshold||e.owner_threshold!==e.prev_owner_threshold||e.memo_key!==e.prev_memo_key}},{key:"didChange",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;if("memo"===e)return t.memo_key!==t.prev_memo_key;var n=!1;return["_keys","_active_addresses","_accounts","_threshold"].forEach((function(a){var s=e+a;t[s]!==t["prev_"+s]&&(n=!0)})),n}},{key:"onPublish",value:function(){var e=this.state,t=this.props.account.toJS();t.fee={amount:0,asset_id:m.a.getFinalFeeAsset(t.id,"account_update")};var n={account:t.id};if(this.didChange("active")&&(n.active=this.permissionsToJson(e.active_threshold,e.active_accounts,e.active_keys,e.active_addresses,e.active_weights)),this.didChange("owner")&&(n.owner=this.permissionsToJson(e.owner_threshold,e.owner_accounts,e.owner_keys,e.owner_addresses,e.owner_weights)),this.didChange("owner")&&0===e.owner_keys.size&&0===e.owner_addresses.size&&1===e.owner_accounts.size&&e.owner_accounts.first()===t.id)return D.a.addNotification({message:"Setting your owner permissions like this will render your account permanently unusable. Please make sure you know what you're doing before modifying account authorities!",level:"error",autoDismiss:10});e.memo_key&&this.didChange("memo")&&this.isValidPubKey(e.memo_key)&&(n.new_options=this.props.account.get("options").toJS(),n.new_options.memo_key=e.memo_key),d.a.updateAccount(n)}},{key:"isValidPubKey",value:function(e){return!!p.i.fromPublicKeyString(e)}},{key:"onReset",value:function(){var e=this.state;this.setState({active_accounts:e.prev_active_accounts,active_keys:e.prev_active_keys,active_addresses:e.prev_active_addresses,owner_accounts:e.prev_owner_accounts,owner_keys:e.prev_owner_keys,owner_addresses:e.prev_owner_addresses,active_weights:e.prev_active_weights,owner_weights:e.prev_owner_weights,active_threshold:e.prev_active_threshold,owner_threshold:e.prev_owner_threshold,memo_key:e.prev_memo_key})}},{key:"onAddItem",value:function(e,t,n){var a={},s=e+(h.a.is_object_id(t)?"_accounts":"_keys");a[s]=this.state[s].push(t),this.state[e+"_weights"][t]=n,this.setState(a)}},{key:"onRemoveItem",value:function(e,t,n){console.log("onRemoveItem",e,t,n);var a={},s=e+n;a[s]=this.state[s].filter((function(e){return e!==t})),this.setState(a)}},{key:"onThresholdChanged",value:function(e,t){var n=parseInt(t.target.value.trim()),a={};a[e]=n,this.setState(a)}},{key:"validateAccount",value:function(e,t){return null}},{key:"sumUpWeights",value:function(e,t,n,a){var s=e.reduce((function(e,t){return e+a[t]}),0);return s=t.reduce((function(e,t){return e+a[t]}),s),n.reduce((function(e,t){return e+a[t]}),s)}},{key:"onMemoKeyChanged",value:function(e){this.setState({memo_key:e})}},{key:"onSetPasswordKeys",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["active","owner","memo"],n={};t.forEach((function(t){n["password_"+t]=e[t]})),this.setState(n)}},{key:"render",value:function(){var e=void 0,t=void 0,n=this.state,a=n.active_accounts,o=n.active_keys,i=n.active_addresses,l=n.active_weights,h=this.state,m=h.owner_accounts,d=h.owner_keys,p=h.owner_addresses,_=h.owner_weights,v=this.state.active_threshold>0?this.state.active_threshold:0,y=this.sumUpWeights(a,o,i,l);this.didChange("active")&&y<v&&(e=u.a.translate("account.perm.warning1",{weights_total:y,threshold:v})),v=this.state.owner_threshold>0?this.state.owner_threshold:0,y=this.sumUpWeights(m,d,p,_),this.didChange("owner")&&y<v&&(t=u.a.translate("account.perm.warning2",{weights_total:y,threshold:v}));var w="btn large inverted"+(!e&&!t&&this.isChanged()&&this.isValidPubKey(this.state.memo_key)?"":" disabled"),b="btn large outline"+(this.isChanged()?"":" disabled"),g=r.a.Set();g=g.add(this.props.account.get("id"));var f=s.a.createElement("div",{className:"account-actions",style:{marginTop:"10px"}},s.a.createElement("button",{className:w,onClick:this.onPublish,tabIndex:9,disabled:!(!e&&!t&&this.isChanged()&&this.isValidPubKey(this.state.memo_key))},s.a.createElement(c.a,{content:"account.perm.publish"})),s.a.createElement("button",{className:b,onClick:this.onReset,tabIndex:8,disabled:!this.isChanged()},s.a.createElement(c.a,{content:"account.perm.reset"}))),k=[{title:"account.perm.active",content:s.a.createElement("div",{className:"permissions-tab"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xl-7"},s.a.createElement(F.a,{path:"components/AccountPermActive"}))),s.a.createElement("div",{className:"threshold-block"},s.a.createElement(c.a,{content:"account.perm.threshold"}),s.a.createElement("input",{type:"number",placeholder:"0",size:"5",value:this.state.active_threshold,onChange:this.onThresholdChanged.bind(this,"active_threshold"),autoComplete:"off",tabIndex:1})),s.a.createElement(O,{label:"account.perm.add_permission_label",accounts:a,keys:o,weights:l,addresses:i,validateAccount:this.validateAccount.bind(this,"active"),onAddItem:this.onAddItem.bind(this,"active"),onRemoveItem:this.onRemoveItem.bind(this,"active"),placeholder:u.a.translate("account.perm.account_name_or_key"),tabIndex:2}),e?s.a.createElement("div",{className:"content-block has-error"},e):null,f,null)},{title:"account.perm.owner",content:s.a.createElement("div",{className:"owner-tab"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xl-7"},s.a.createElement(F.a,{path:"components/AccountPermOwner"}))),s.a.createElement("div",{className:"threshold-block"},s.a.createElement(c.a,{content:"account.perm.threshold"}),s.a.createElement("input",{type:"number",placeholder:"0",size:"5",value:this.state.owner_threshold,onChange:this.onThresholdChanged.bind(this,"owner_threshold"),autoComplete:"off",tabIndex:4})),s.a.createElement(O,{label:"account.perm.add_permission_label",accounts:m,keys:d,weights:_,addresses:p,validateAccount:this.validateAccount.bind(this,"owner"),onAddItem:this.onAddItem.bind(this,"owner"),onRemoveItem:this.onRemoveItem.bind(this,"owner"),placeholder:u.a.translate("account.perm.account_name_or_key"),tabIndex:5}),t?s.a.createElement("div",{className:"content-block has-error"},t):null,f,null)},{title:"account.perm.memo_key",content:s.a.createElement("div",{className:"memo-tab"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xl-7"},s.a.createElement(F.a,{style:{maxWidth:"800px"},path:"components/AccountPermMemo"}))),s.a.createElement(W.a,{ref:"memo_key",value:this.state.memo_key,label:"account.perm.memo_public_key",placeholder:"Public Key",onChange:this.onMemoKeyChanged.bind(this),tabIndex:7}),f,null)},{title:"account.perm.password_model",content:s.a.createElement("div",{className:"cloud-tab"},s.a.createElement(T,{active:this.state.password_active,owner:this.state.password_owner,memo:this.state.password_memo,onSetPasswordKeys:this.onSetPasswordKeys.bind(this),account:this.props.account,activeKeys:this.state.active_keys,ownerKeys:this.state.owner_keys,memoKey:this.state.memo_key,onAddActive:this.onAddItem.bind(this,"active"),onRemoveActive:this.onRemoveItem.bind(this,"active"),onAddOwner:this.onAddItem.bind(this,"owner"),onRemoveOwner:this.onRemoveItem.bind(this,"owner"),onSetMemo:this.onMemoKeyChanged.bind(this)}),f,null)}];return s.a.createElement(U.a,{items:k,dashboardTabsClass:"dashboard__tabs permissions small"})}}]),t}(s.a.Component);t.default=M}}]);