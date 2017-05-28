require('normalize.css/normalize.css');
require('styles/App.scss');

var imagesDatas=require('../data/imageDatas.json');
import React from 'react'; 


imagesDatas=(function genImageURL(imageDatasArr) {
  for (var i = 0; i < imageDatasArr.length; i++) {
    var singleImageData=imageDatasArr[i];
    singleImageData.imageURL=require('../images/'+singleImageData.fileName);
    imageDatas[i]=singleImageData;
  }
  return imageDatasArr;
})(imagesDatas);



class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        
        </section>
        <nav className="controller-nav">

        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
