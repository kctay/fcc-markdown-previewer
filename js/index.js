var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // this is for optional tests
// open link in new tab
// previewer interprets carriage returns and renders them as br (line break) elements.
// also added color styling for code block

var renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
  return "<a href=" + href + " target=\"_blank\">" + text + "</a>";
};

marked.setOptions({
  renderer: renderer,
  breaks: true,
  sanitize: true, //to make the markdown input secure
  highlight: function highlight(code) {
    return hljs.highlightAuto(code).value;
  } });




var textareaStyles = {
  width: 280,
  height: 400,
  border: "2px solid teal",
  fontSize: 12,
  marginBottom: -7 };


var previewStyles = {
  backgroundColor: "lavender",
  border: "2px solid mediumspringgreen",
  fontFamily: "Harmattan",
  padding: "5px 15px" };var


MyApp = function (_React$Component) {_inherits(MyApp, _React$Component);
  function MyApp(props) {_classCallCheck(this, MyApp);var _this = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this,
    props));
    _this.state = {
      markdown: placeholder };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);return _this;
  }_createClass(MyApp, [{ key: "handleChange", value: function handleChange(

    event) {
      this.setState({
        markdown: event.target.value });

    } }, { key: "handleClick", value: function handleClick()

    {
      this.setState({
        markdown: '' });

    } }, { key: "render", value: function render()


    {
      return (
        React.createElement("div", { className: "row" },
          React.createElement("div", { className: "col-md-5" },
            React.createElement("h2", { id: "edithead" }, "Editor"),
            React.createElement("textarea", { id: "editor", value: this.state.markdown, onChange: this.handleChange, style: textareaStyles }),
            React.createElement("button", { onClick: this.handleClick }, "Clear text")),

          React.createElement("div", { className: "col-md-7" },
            React.createElement("h2", { id: "previewhead" }, "Preview"),
            React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.markdown) }, style: previewStyles }))));




    } }]);return MyApp;}(React.Component);



var placeholder = "# Markdown Previewer\n---\n## Final Fantasy XI Online\n---\n![alt text][logo]\n\n[logo]: https://upload.wikimedia.org/wikipedia/en/0/01/Final_Fantasy_XI_logo.png \"copyright Square Enix\"\n\n[The FFXI wikipedia](https://en.wikipedia.org/wiki/Final_Fantasy_XI)  \n\n##### Gameplay\nFinal Fantasy XI is a massively multiplayer online role-playing game (MMORPG) by Square Enix. Players choose from one of five races and explore the game in a fully three-dimensional landscape with enemies freely roaming in it, allowing battles to occur in real time.\n\n---\n##### Races\n1. Elvaan\n2. Hume\n1. Galka\n4. Mithra\n5. Tarutaru\n---\n##### Jobs\n- Warrior\n- Thief\n- Monk\n- Black Mage\n- White Mage\n- Red Mage\n---\n##### Advanced Jobs\n* Ninja, Samurai, Ranger, Summoner, etc  \n---\n##### NPC Introduction\n##### **_Shantotto_**  \nJob: `Black Mage`  \nSecondary: `White Mage`  \nLevel: `99`  \n\n---\n#### Abilities:\n```\nfunction Vortex() {\n  if (target === true) {\n    target.hp = target.hp - mag*20*crit; \n  }\n  reset ATB;\n}\nvar number = Math.floor(Math.random());\n```\n\n---\n\n#### Famous Quotes\n> Ohohohohoho! My powers of destruction require no introduction!\n> -- Shantotto\n\n![alt text](https://vignette.wikia.nocookie.net/finalfantasy/images/e/e4/Shantotto_%28FFXI%29.png/revision/latest?cb=20110407134252)\n\n---\n`All rights reserved Square Enix`\n`Just another FCC assignment`\n";
































































ReactDOM.render(React.createElement(MyApp, null), document.getElementById('preview-window'));