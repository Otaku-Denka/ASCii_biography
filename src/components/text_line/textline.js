import React, { Component } from 'react';



let codeSequence = [];
export default class Textline extends Component {
	constructor(props){
    super(props);
    this.state = {
      codeArray: [{
					code:'First Name: Wang',
					delay: 4500
				},{
					code:'Last Name: Jay',
					delay: 500
				},{
					code:'Email: jay7396@gmail.com',
					delay: 500
				},{
					code:'Github: https://github.com/Otaku-Denka',
					delay: 500
				}
			]
    };
  };
  componentDidMount() {
 		$.each(this.state.codeArray, function(index,value){
			const element = $('<p class="textline"></p>');
			$('#codeSection1').append(element);
			element.html(value.code)
			const elementLength = element.text().length;
			
			codeSequence.push({
				e:element,
				p: { width: elementLength + 'ch' },
				o: { easing: [elementLength], duration: elementLength *40 , delay: value.delay ,
					begin: function(){
						$('#codeSection1').find('p').removeClass('cursor');
						$(element).addClass('cursor');
					}
				}
			})	
		});
		console.log(codeSequence)
		$.Velocity.RunSequence(codeSequence);

  }

	render(){
		return(
			<div id='codeSection1' className="textfield">
				
			</div>
		)
	}
}
