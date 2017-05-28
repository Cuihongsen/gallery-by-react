require('normalize.css/normalize.css');
require('styles/App.scss');

var imagesDatas=require('../data/imageDatas.json5');
import React from 'react'; 

// console.log(imagesDatas);  
imagesDatas=(function genImageURL(imageDatasArr) {
  for (var i = 0; i < imageDatasArr.length; i++) {
    var singleImageData=imageDatasArr[i];
    singleImageData.imageURL=require('../images/'+singleImageData.fileName);
    imageDatasArr[i]=singleImageData;
  }
  return imageDatasArr;
})(imagesDatas);

class ImgFigure extends React.Component {
  render() {
    return (
      <figure className="image-figure">
        <img src={this.props.data.imageURL} alt={this.props.data.fileName}/>
        <figcaption>
          <h2 className="image-title"> {this.props.data.title}</h2>
        </figcaption>
      </figure> 
    );
  }
}

class AppComponent extends React.Component {
  render() {
    constant:{
      centebPos:{
        left:0;
        right:0;
      }
    }
      var controllerUnits=[],
      imgFigures=[];
        // console.log(imagesDatas);
      
      // alert();
      for (var i = 0; i < imagesDatas.length; i++) {
        var element = imagesDatas[i];
        // console.log("值为:",element);
      }
      imagesDatas.forEach(function(value) {
        imgFigures.push(<ImgFigure data={value}></ImgFigure>)
      });
    return (
      <section className="stage">
        <section className="img-sec">
       {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
