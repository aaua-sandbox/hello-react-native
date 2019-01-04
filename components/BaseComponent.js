import React from 'react';

export default class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this._log();
  }

  _log = () => {
    if (/^(App|.+Screen)$/.test(this.constructor.name)) {
      console.debug("\n\nStartedScreen " + this.constructor.name);
      if (this.props.hasOwnProperty('navigation')) {
        console.debug("  state:\n" + JSON.stringify(this.props.navigation.state, null, 2));
      }
    } else {
      console.debug("  Rendered " + this.constructor.name);
    }
  }

  sleep = (waitMsec) => {
    var startMsec = new Date();

    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
  };
}
