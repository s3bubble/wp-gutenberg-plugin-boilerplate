/**
 * BLOCK: wp-gutenberg-plugin-boilerplate
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./style.scss"; 
import "./editor.scss"; 
 
const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks;

const blockStyle = {
	backgroundColor: '#900',
	color: '#fff',
	padding: '20px', 
};     
  
registerBlockType( 'wp-gutenberg-plugin-boilerplate/example-01-basic-esnext', {
	title: __( 'Boilerplate', 'wp-gutenberg-plugin-boilerplate' ),
	icon: 'universal-access-alt', 
	category: 'layout',
	edit() {
		return <div style={ blockStyle }>Basic example with JSX! (editor)</div>;
	},
	save() {
		return <div style={ blockStyle }>Basic example with JSX! (front)</div>;
	}, 
}); 