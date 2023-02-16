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
	.typeString("My name is...")
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
