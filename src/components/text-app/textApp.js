import React , { Component } from 'react';
import TextArea from '../text_area/text-area.js'
import Textline from '../text_line/textline.js'


export default class Textapp extends Component {
	render(){
		return (
			<div className="textapp">
				<TextArea />
				<Textline />
			</div>
		)
	}
}