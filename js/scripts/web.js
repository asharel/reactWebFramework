class Header extends React.Component{
  render() {
    return (
      <header className="w3-container w3-theme">
        <h1>{this.props.children}</h1>
      </header>
    );
  }
}

class OpenNav extends React.Component{
  render(){
    return (
      <div className="w3-container w3-theme">
        <span className="w3-opennav w3-xlarge" onClick={this.props.handleOpenNav}>&#9776; Menu Lateral</span>
      </div>
    );
  }
}

class NavBar extends React.Component{
  render(){

    let firstElement="";

    let elements = this.props.info.map((item,index)=> {
      if(item.key !== "link"){
        if(index==0){
          firstElement = "#"+item.key;
        }
        return <a href={"#"+item.key} key={"#"+item.key}>{item.key}</a>
      }else{
        return <a href={item.url} key={"#"+item.ref}>{item.ref}</a>
      }
    });

    //location.href=firstElement;

    return(
      <div className="NavBar" style={{display: this.props.display}} onClick={this.props.handleCloseNav}>
        <nav className="w3-sidenav w3-large w3-theme-l3" sytle={{display: "block"}}>
          {elements}
        </nav>
      </div>
    );
  }
}

class Stext extends React.Component{
  render(){
    return (
      <div className="sText">
        {this.props.children}
      </div>
    );
  }
}

class Btext extends React.Component{
  render(){
    return (
      <div className="sText">
        <b>{this.props.children}</b>
      </div>
    );
  }
}

class Title extends React.Component {

  render(){
    return (
      <h1 className="TabTitle w3-animate-opacity" >{this.props.children}</h1>
    );
  }
}

class Card extends React.Component{
  render(){
    return (
      <div className="w3-card-24 w3-animate-opacity">

          <header className="w3-container w3-theme">
           <h1>{this.props.title}</h1>
          </header>

          <div className="w3-container">
          <p>{this.props.info}</p>
          </div>

      </div>
    );
  }
}

class VYoutube extends React.Component{

  render(){
    return (
        <div className="yvideo w3-animate-left">
          <br/>
          <iframe width="auto" height="auto"
            src={this.props.url} allowFullScreen>
          </iframe>
          <br/>
        </div>

    );
  }
}

class Tab extends React.Component{
  render(){
    let index=0;
    let id = this.props.id;



    let elements = this.props.info.map((item) => {
      index++;
      switch (item.type) {
        case "stext":
          return <Stext key={"Sk"+id+index}>{item.value}</Stext>
          break;

        case "title":
          return <Title key={"Tk"+id+index}>{item.value}</Title>
          break;

        case "yvideo":
          return <VYoutube key={"VYk"+id+index} url={item.value}/>
          break;

        case "card":
          return <Card key={"Ck"+id+index} info={item.value.info} title={item.value.title}/>
          break;

        case "btext":
          return <Btext key={"Bk"+id+index}>{item.value}</Btext>

        default:
          console.log("Objeto Vacio");
      }

    });

    return (
      <div className="w3-container" id={this.props.id}>
        {elements}
      </div>
    );
  }
}

class InfoContent extends React.Component{
  render(){
    let elements = this.props.info.map((item) => {
      if(item.key!=="link"){
        return <Tab key={"T"+item.key} id={item.key} info={item.value}/>
      }
    });

    return (
      <div className="infoContent">
        <div className="w3-tab">
          {elements}
        </div>
      </div>
    );
  }
}

class Footer extends React.Component{
  render(){
    return (
      <footer className="w3-container w3-theme">
        <h5>{this.props.children}</h5>
        <p>{this.props.info}</p>
      </footer>
    );
  }
}


class Body extends React.Component{


  constructor(props){

    super(props);
    this.state = {
          inf : [
                  {key:"Lorem",value:[
                    {type:"title",value:"LOREM IPSUM"},
                    {type:"btext",value:"Esto es un ejemplo de texto resaltado"},
                    {type:"stext",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat, leo eget scelerisque hendrerit, risus neque dictum nisl, ut varius turpis nisl quis odio. Nunc in odio luctus quam porttitor eleifend vel ut leo. Nunc condimentum diam nisl, sit amet suscipit mi vehicula vitae. In elit tortor, venenatis id augue et, placerat elementum nulla. Sed rutrum, urna id tincidunt ornare, ipsum nisl iaculis dui, non pretium nibh nunc et orci. Quisque sollicitudin urna ipsum, sit amet vulputate purus ultricies eget. Nam sodales diam in mi mollis, feugiat lobortis ante dignissim. Aliquam dignissim vel leo sit amet elementum. Morbi dolor nunc, sodales vel tincidunt at, scelerisque vel purus. Integer semper suscipit euismod. Ut vestibulum quam semper libero pellentesque rhoncus."},
                    {type:"yvideo",value:"https://www.youtube.com/embed/H3ZCKXX7tVI"},
                    {type:"card",value:{title:"Ipsum",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat, leo eget scelerisque hendrerit, risus neque dictum nisl, ut varius turpis nisl quis odio. Nunc in odio luctus quam porttitor eleifend vel ut leo. Nunc condimentum diam nisl, sit amet suscipit mi vehicula vitae. In elit tortor, venenatis id augue et, placerat elementum nulla. Sed rutrum, urna id tincidunt ornare, ipsum nisl iaculis dui, non pretium nibh nunc et orci. Quisque sollicitudin urna ipsum, sit amet vulputate purus ultricies eget. Nam sodales diam in mi mollis, feugiat lobortis ante dignissim. Aliquam dignissim vel leo sit amet elementum. Morbi dolor nunc, sodales vel tincidunt at, scelerisque vel purus. Integer semper suscipit euismod. Ut vestibulum quam semper libero pellentesque rhoncus."}}
                  ]
                  },
                  {key:"Donec",value:[
                    {type:"title",value:"DONEC EFFICITUR"},
                    {type:"stext",value:"Donec efficitur nec eros scelerisque sollicitudin. Nulla convallis mauris et nibh consequat, eleifend ullamcorper purus aliquet. Nulla ex purus, commodo at sapien sit amet, iaculis tempor magna. Vivamus auctor maximus libero vel pharetra. Sed egestas felis non dictum sollicitudin. Phasellus bibendum arcu vel orci mattis molestie. In nec aliquet enim."}
                                     ]
                  },
                  {key:"Maecenas",value:[
                    {type:"title",value:"MAECENAS DAPIBUS"},
                    {type:"stext",value:"Maecenas dapibus convallis enim non porttitor. Quisque ultrices convallis libero, et varius augue tempor nec. Maecenas a nisl diam. Cras justo nulla, malesuada nec orci vitae, porttitor ullamcorper libero. Sed vel mollis metus. Suspendisse condimentum neque nec orci vestibulum, at vulputate sem semper. Curabitur facilisis massa hendrerit iaculis molestie. Maecenas vulputate in mauris pellentesque dictum. Aenean bibendum egestas nibh, eget elementum nisi. Morbi sed quam ac nisi rhoncus rutrum quis aliquam est. In varius quam vel nulla rhoncus, suscipit iaculis lectus ultrices. Vestibulum enim lacus, mollis vel pulvinar quis, rhoncus nec magna. Aliquam tincidunt pharetra ante et finibus."}
                                        ]
                  },
                  {key:"Phasellus",value:[
                    {type:"title",value:"PHASELLUS RUTRUM"},
                    {type:"stext",value:"Phasellus rutrum dolor odio, consectetur pulvinar orci ornare quis. Duis elit odio, iaculis sit amet molestie vel, pretium vel augue. Integer pretium odio vitae lobortis condimentum. Phasellus vitae ligula viverra, laoreet nisl vel, euismod metus. Duis at elit dui. Suspendisse vitae arcu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam eget libero nibh."}
                                         ]
                  },
                  {key:"Ejemplo 2",value:[
                    {type:"title",value:"Ejemplo 2"},
                    {type:"stext",value:"Phasellus rutrum dolor odio, consectetur pulvinar orci ornare quis. Duis elit odio, iaculis sit amet molestie vel, pretium vel augue. Integer pretium odio vitae lobortis condimentum. Phasellus vitae ligula viverra, laoreet nisl vel, euismod metus. Duis at elit dui. Suspendisse vitae arcu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam eget libero nibh."}
                                         ]
                  },
                  {key:"Ejemplo 3",value:[
                    {type:"title",value:"Ejemplo 3"},
                    {type:"stext",value:"Phasellus rutrum dolor odio, consectetur pulvinar orci ornare quis. Duis elit odio, iaculis sit amet molestie vel, pretium vel augue. Integer pretium odio vitae lobortis condimentum. Phasellus vitae ligula viverra, laoreet nisl vel, euismod metus. Duis at elit dui. Suspendisse vitae arcu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam eget libero nibh."}
                                         ]
                  },
                  {key:"link",url:"http://www.google.es",ref:"Google"}
                ],
        navDisplay:"none",
        navDisBool:false
    };

    this.handleClickCloseNav = (e)=>{
      //console.log("Consola Abierta");
      this.setState({navDisplay:"none",navDisBool:false});

      return;
    };

    this.handleClickNav= (e)=>{

      let navState = this.state.navDisBool;

      let dis;

      if(navState){
        dis="none";
      }else{
        dis="block"
      }
      this.setState({navDisplay:dis,navDisBool:!navState});

      return;
    };
  }

  render() {

    console.log("State",this.state);
    return (
    <div className="flex-container">
      <Header>Titulo 1</Header>
      <OpenNav handleOpenNav={this.handleClickNav}/>
      <NavBar handleCloseNav={this.handleClickCloseNav} display={this.state.navDisplay} info={this.state.inf}/>
      <InfoContent info={this.state.inf}/>
      <Footer info="Info del footer">Footer 1</Footer>
      </div>
      );
    }
}


ReactDOM.render(
  React.createElement(Body, null),
  document.getElementById('content')
);
