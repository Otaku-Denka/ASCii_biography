import React, { Component } from 'react';
import GSAP from 'react-gsap-enhancer';

let codeLength;

class Textline extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount() {
		codeLength = this.props.code.length;
		this.addWidthAni = this.addAnimation(createAni)
	}
	render(){
		return <p className='textline cursor'>{ this.props.code }</p>
	}
}

function createAni({target}){
	return new TimelineMax()
		.to(target,codeLength/1000*40,{
			width:`${codeLength}ch`,
		})
}


export default GSAP()(Textline)