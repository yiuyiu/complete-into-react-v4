import React from "react";
import Pet from "./Pet";
import pf from "petfinder-client";
import SearchBox from "./SearchBox";
import { connect } from "react-redux";
const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});
// class component
// one component should be in one file event it has only five lines
class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    this.search();
  }
  search = () => {
    petfinder.pet
      .find({
        animal: this.props.animal,
        output: "full",
        location: this.props.location,
        breed: this.props.breed
      })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        this.setState({
          pets
        });
      });
  };

  render() {
    return (
      <div className="search">
        <SearchBox search={this.search} />
        {this.state.pets.map(pet => {
          let breed;
          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(",");
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              id={pet.id}
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
            />
          );
        })}
      </div>
    );
  }
}
// connect function grab data outof the store
const mapStateToProps = ({ location, breed, animal }) => ({
  location,
  animal,
  breed
});
// inject the location as prop into resultsWi thContext

export default connect(mapStateToProps)(Results);
