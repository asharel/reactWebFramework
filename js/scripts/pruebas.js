
//Funciones generales de uso
function dateToString(date){
  return date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
}

//Mixins
var IntervalMixin = function(interval){
  return{
    componentDidMount: function() {
      this.__interval = setInterval(this.onTick,interval);
    },
    componentWillUnmount: function() {
      clearInterval(this.__interval);
    }
  };
};


//Declaraciones de elementos DOM
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">{this.props.children}</div>
    );
  }
});

var DateBox = React.createClass({
  getDefaultProps: function() {
    return{
      date: new Date()
    };
  },
  render: function() {
    return (
      //<div className="dateBox">{u.t('La fecha de hoy es: {0,date}', this.props.date)}</div>
      <div className="dateBox">{dateToString(this.props.date)}</div>
    );
  }
});

var Divider = React.createClass({
  // state: {pressed: false}
    render: function () {
    return (
        <div {...this.props}>
            <h2 onClick={this.props.handleClick}>{this.props.children}</h2><hr />
        </div>
        );
    }
});

var Timer = React.createClass({
    mixins:[IntervalMixin(1000)],

    getInitialState: function(){
      return {secondElapsed: 0};
    },
    onTick: function() {
      this.setState({secondElapsed: this.state.secondElapsed+1});
    },
    render: function () {
      return(
        <div>Second Elapsed: {this.state.secondElapsed}</div>
      );
    }
});

//Forms
var MyFormUncontrolled = React.createClass({
  submitHandler: function (event){
    event.preventDefault();
    var helloTo= this.refs.helloTo.value;

    alert(helloTo);
  },
  render: function() {
    return (<form onSubmit={this.submitHandler}>
             <input type="text" ref="helloTo" defaultValue="Hello World!" /><br/>
             <button type="submit">Speak</button>
            </form>);
  }
});

var MyFormControlled = React.createClass({

  getInitialState: function(){
    return {
      helloTo: "Hello World!",
      infoErr: ""
    };
  },

  handleChange: function (event){
    var text=event.target.value.toUpperCase();

    if(text.search("'")==-1){
      this.setState({
        helloTo: text,
        infoErr: ""
      });
    }else{
      this.setState({
        infoErr: "Caracter no invalido"
      });
    }
  },
  submitHandler: function (event){
    event.preventDefault();
    alert(this.state.helloTo);
  },
  render: function() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" value={this.state.helloTo} onChange={this.handleChange}/><br/>
        <label>{this.state.infoErr}</label><br/>
        <button type="submit">Speak</button>
      </form>
    );
  }
});


//Elemento TODO y renderización de la pág
var Todo = React.createClass({
  clickDivider: function() {

    var click_state = this.state.cclicked;
    var color_state;

    if(!click_state){
      color_state='red';
    }else{
      color_state='pink';
    }

    click_state = !click_state;

    this.setState({ccolor:color_state,cclicked:click_state});
  },
  getInitialState: function (){
    return{
      cclicked: false,
      ccolor: 'blue'
    };
  },

  render: function (){
      return(
        <div>
          <Divider style={{color: this.state.ccolor}} handleClick={this.clickDivider}>This is a divider</Divider>
          <CommentBox>And this is a CommentBox</CommentBox>
          <DateBox/><Timer/>
          <MyFormUncontrolled/>
          <MyFormControlled/>
        </div>
      );
  }
});


ReactDOM.render(
  React.createElement(Todo, null),
  document.getElementById('content')
);
