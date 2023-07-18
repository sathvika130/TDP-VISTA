class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: 0,
      wrapperStyle: {
        backgroundImage: `url('${this.props.data[0].img}')` },

      panelStyle: {
        background: this.props.data[0].colour },

      buttonHover: false,
      buttonStyle: {
        color: '#ffffff' } };


  }
  _changeActive(id) {
    this.setState({
      activeID: id,
      wrapperStyle: {
        backgroundImage: `url('${this.props.data[id].img}')` },

      panelStyle: {
        backgroundColor: this.props.data[id].colour } });


  }
  _buttonColour() {
    if (!this.state.buttonHover) {
      this.setState({
        buttonHover: true,
        buttonStyle: {
          color: this.props.data[this.state.activeID].colour } });


    } else {
      this.setState({
        buttonHover: false,
        buttonStyle: {
          color: '#ffffff' } });


    }
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("section", { className: "wrapper", style: this.state.wrapperStyle }, /*#__PURE__*/
      React.createElement(Selectors, {
        data: this.props.data,
        activeID: this.state.activeID,
        _changeActive: this._changeActive.bind(this) }), /*#__PURE__*/

      React.createElement(Panel, {
        data: this.props.data[this.state.activeID],
        panelStyle: this.state.panelStyle,
        buttonStyle: this.state.buttonStyle,
        _buttonColour: this._buttonColour.bind(this) })));



  }}

class Panel extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("aside", { className: "panel", style: this.props.panelStyle }, /*#__PURE__*/
      React.createElement("h2", { className: "panel-header" }, this.props.data.header), /*#__PURE__*/
      React.createElement("p", { className: "panel-info" }, this.props.data.body), /*#__PURE__*/
      React.createElement("button", { className: "panel-button",
        style: this.props.buttonStyle,
        onMouseEnter: this.props._buttonColour,
        onMouseLeave: this.props._buttonColour }, "Read More")));




  }}

class Selectors extends React.Component {
  _handleClick(e) {
    if (this.props.id !== this.props.activeID) {
      this.props._changeActive(this.props.id);
    } else {
      return;
    }
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "selectors" },
      this.props.data.map((item) => /*#__PURE__*/
      React.createElement(Selector, {
        key: item.id,
        id: item.id,
        _handleClick: this._handleClick,
        _changeActive: this.props._changeActive,
        activeID: this.props.activeID }))));




  }}

class Selector extends React.Component {
  render() {
    let componentClass = 'selector';
    if (this.props.activeID === this.props.id) {
      componentClass = 'selector active';
    }
    return /*#__PURE__*/(
      React.createElement("div", { className: componentClass, onClick: this.props._handleClick.bind(this) }));

  }}


const data = [{
  id: 0,
  header: 'Mountain',
  body: 'Chillwave knausgaard chambray flannel tumblr, narwhal microdosing blog...',
  colour: '#242846',
  img: 'https://images.unsplash.com/photo-1544867885-2333f61544ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBhaW50aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
{
  id: 1,
  header: 'River',
  body: 'Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY...',
  colour: '#ba9077',
  img: 'https://images.unsplash.com/photo-1581592487771-132f53bd2b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHBhaW50aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
{
  id: 2,
  header: 'Beauty ',
  body: 'Flexitarian 3 wolf moon cliche, migas scenester street art...',
  colour: '#1ABC9C',
  img: 'https://images.unsplash.com/photo-1576503918400-0b982e6a98bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHBhaW50aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
{
  id: 3,
  header: 'Nature',
  body: 'Farm-to-table tousled try-hard, normcore ethical tilde iPhone...',
  colour: '#C0392B',
  img: 'https://images.unsplash.com/photo-1581592487771-132f53bd2b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHBhaW50aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
{
  id: 4,
  header: 'Ancient',
  body: 'Tote bag flannel normcore polaroid +1. Quinoa actually 90s sustainable...',
  colour: '#513B56',
  img: 'https://images.unsplash.com/photo-1576503918400-0b982e6a98bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHBhaW50aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' }];



ReactDOM.render( /*#__PURE__*/React.createElement(App, { data: data }), document.querySelector('#app'));