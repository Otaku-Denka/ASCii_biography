import React , { Component } from 'react';
import GSAP from 'react-gsap-enhancer';
import Textline from '../text_line/textline.js'




class Textfield extends Component {
	constructor(props){
    super(props);
    this.state = {
    		newWidth : 450,
        code: 'this is code ada sdadsa asdasd asdasd',
        delay: 2000
    };
  };
  componentDidMount() {
 
  
  }

	render(){

		return(
			<div name='test' className="textfield">
				<Textline name='line' code={this.state.code} />
			</div>
		)
	}
}

export default GSAP()(Textfield)