'use strict';

const e = React.createElement;

class CopyrightInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return "© 2018 - 2020 GIGARAD";
  }
}

const domContainer = document.querySelector('#copyright_info_container');
ReactDOM.render(e(CopyrightInfo), domContainer);
