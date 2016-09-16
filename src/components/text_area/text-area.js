import React , { Component } from 'react';


let codeSequence = [];
export default class Textfield extends Component {
	constructor(props){
    super(props);
    this.state = {
      codeArray: [{
					code:'Forms FORM-2016-09-16',
					delay: 1000
				},{
					code:'Test Jay-Wang Biography Report',
					delay: 1000
				},{
					code:'',
					delay: 6000
				},{
					code:'',
					delay: 0
				},{
					code:'this is my biography testing and trying to type something',
					delay: 200
				},{
					code:'on the form and i have no idea for my biography so i will',
					delay: 200
				},{
					code:'type some shit and %$^%$ what the fuck just copy last row',
					delay: 200
				},{
					code:'i want to eat some meat and drink soda drinking',
					delay: 200
				}]
    };
  };
  componentDidMount() {
 		$.each(this.state.codeArray, function(index,value){
			const element = $('<p class="textline"></p>');
			$('#codeSection').append(element);
			element.html(value.code)
			const elementLength = element.text().length;
			
			codeSequence.push({
				e:element,
				p: { width: elementLength + 'ch' },
				o: { easing: [elementLength], duration: elementLength *40 , delay: value.delay ,
					begin: function(){
						$('#codeSection').find('p').removeClass('cursor');
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
			<div id='codeSection' className="textfield">
				
			</div>
		)
	}
}
