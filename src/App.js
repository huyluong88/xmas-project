import React, { Component } from 'react';
import axios from 'axios'
import Modal from 'react-modal'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      name: "please wait while we fetch your pokemon...",
      weight: "loading...",
      pokepic: "loading...",
      id: "loading...",
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
  }
  handleOpenModal(){
    this.setState({
      showModal: true
    })
  }

  componentDidMount(){
    axios.get('http://www.pokeapi.co/api/v2/pokemon/6/').then(response=>this.setState({
      name: response.data.name,
      weight: response.data.weight,
      pokepic: response.data.sprites.front_default,
      id: response.data.id
    }))
    }
  findPokemon(){
    let searchPoke = this.searchPokemon.value
    axios.get(`http://www.pokeapi.co/api/v2/pokemon/${searchPoke}/`).then(response=>this.setState({
      name: response.data.name,
      weight: response.data.weight,
      pokepic: response.data.sprites.front_default,
      id: response.data.id
    }))
  }

  render() {
    return (
      <div className="App">

          <Modal isOpen={this.state.showModal} contentLabel='Testing Modal'>

            <img src={this.state.pokepic} onClick={this.handleOpenModal} width="200px" height="200px"/><br/>

          </Modal>

          Pokemon: {this.state.name}<br/>
          Poke weight: {this.state.weight}<br/>
          Pokedex id: {this.state.id}<br/>
          <input placeholder="enter pokedex id or name"
          ref={(input)=>{this.searchPokemon = input}}/>
          <button onClick={this.findPokemon.bind(this)}>Click to search for pokemon</button>
      </div>
    );
  }
}

{/*access_token=345949879.cc200d5.f9386109fd1b4388b3a3c1893e199500
  huy_realty access_token=3990525899.cc200d5.7e42a830b2ae4cceb9ef0d3ae560f250
  axios.get('https://api.instagram.com/v1/users/self/?access_token=345949879.cc200d5.f9386109fd1b4388b3a3c1893e199500').then(response => this.setState({
      username: response.data.username,
      bio: response.data.bio,
    }))

console.log(response.data.pokemon.map(pokemon=>pokemon.pokemon.name)))

.then(response=>this.setState({
  pokemon: response.data.pokemon.map(poke=>poke.pokemon.name),

}))

http://www.pokeapi.co/api/v2/pokedex/1/
  */}
export default App;
