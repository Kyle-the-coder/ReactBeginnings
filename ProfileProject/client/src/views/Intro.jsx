import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";


function TypeWriter() {
return (
	<div className="typeBox">
	<Typewriter

	onInit={(typewriter)=> {

	typewriter
		
	.typeString("Welcome!")
		
	.pauseFor(1000)
	.deleteAll()
	
    .pauseFor(800)
    .deleteAll()
    .typeString("I'm Kyle The Coder")
	.start();
	}}
	/>
	</div>
);
}

export default TypeWriter;
