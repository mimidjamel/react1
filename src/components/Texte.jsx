import React, {Component, PureComponent} from "react";
class Texte extends Component

{
    constructor()
    {
        super()
        this.state={
            text:''
        }
    }
    changer=(e)=>{
        this.setState({text:e.target.value}) 
        /* e C’est l’objet événement (event) reçu quand l’utilisateur tape dans un champ.
         e.target  C’est l’élément HTML sur lequel l’événement s’est produit (ici : le champ <input>).
     e.target.value C’est la valeur tapée par l’utilisateur dans le champ.   */
    }
    render()
    {
        return(
            <div>
            <input type='text' value={this.state.value} onChange={this.changer}/>
            <p> tu ataper:{this.state.text}</p>
            </div>
        )
    }
}
export default Texte