import React, { Component } from 'react';

class PlayerHUD extends Component {

	render() {
		return(
			<div
				className = 'PlayerHUD'>
        <div>
          <h5>Name: {this.props.change_PlayerName} </h5>
          <h6>Race: {this.props.chosenRace} </h6>
          <h6>Gender: {this.props.changedGender} </h6>
        </div>
        <div>
          <h5>Health Points: {this.props.HealthPoints}/100 </h5>
          <h6>Mana: {this.props.Mana}/60</h6>
          <h6> Atk: {this.props.Atk} Def: {this.props.Def} Evs: {this.props.Def} Crit: {this.props.Def}%</h6>
        </div>
        <div>
          <div id='toggleButtons'>
            <input className='button' type='button' value='Settings' />
            <input name='Items' className='button' type='button' value='Inventory' onClick={this.props.viewInventory} />
            <br/>
            <input className='button' type='button' value='Equipment' onClick={this.props.viewEquip} />
            <input className='button' type='button' value='Exit Game' onClick={this.props.exitGame} />
          </div>
			  </div>
			</div>
			)
	}
}

export default PlayerHUD;
