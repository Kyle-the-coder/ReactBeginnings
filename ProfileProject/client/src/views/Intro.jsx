import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";


function TypeWriter() {
return (
	<div className="typeBox">
	<Typewriter

	onInit={(typewriter)=> {

	typewriter
		
	.typeString("May I introduce myself?")
		
	.pauseFor(1000)
	.deleteAll()
	.typeString("I'm")
    .pauseFor(800)
    .deleteAll()
    .typeString("Kyle The Coder")
	.start();
	}}
	/>
	</div>
);
}

export default TypeWriter;
