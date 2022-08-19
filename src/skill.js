import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './skills.css';

function Skill() {
	return (
		<>
			<label className='label'>React.js</label>
			<div class="progress progressBar">
				<div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "60%", backgroundColor: "#00008B" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">60%</div>
			</div>
			<label className='label'>JavaScript</label>
			<div class="progress progressBar">
				<div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "70%", backgroundColor: "#FF69B4" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
			</div>
			<label className='label'>Python</label>
			<div class="progress progressBar">
				<div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "70%", backgroundColor: "#FFE4B5", color: "#000000" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">70%</div>
			</div>
			<label className='label'>HTML & CSS</label>
			<div class="progress progressBar">
				<div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "80%", backgroundColor: "#191970", color: "#000000" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%</div>
			</div>
			<label className='label'>Bootstrap</label>
			<div class="progress progressBar">
				<div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "70%", backgroundColor: "#006400", color: "#000000" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">70%</div>
			</div>
			<label className='label'>TypeScript</label>
			<div class="progress progressBar">
				<div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "50%", backgroundColor: "#8B008B", color: "#000000" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">50%</div>
			</div>
			<label className='label'>Django</label>
			<div class="progress progressBar">
				<div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "60%", backgroundColor: "#4B0082", color: "#000000" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">60%</div>
			</div>
			<label className='label'>Express.js</label>
			<div class="progress progressBar">
				<div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "50%", backgroundColor: "#2F4F4F", color: "#000000" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">50%</div>
			</div>
			<label className='label'>RESTful API</label>
			<div class="progress progressBarLast">
				<div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "50%", backgroundColor: "#800000", color: "#000000" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">50%</div>
			</div>
		</>
	);
}

export default Skill;