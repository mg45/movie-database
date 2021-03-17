import React, { Component } from 'react'
import MovieItem from './MovieItem'
import movies from './moviesData'
console.log(movies)

/* Thats a Stateless function component ************************************
const MovieList = () => {
    return (
        <div className="grid">
            {movies.map((movie, i) => <MovieItem
                key={i}
                titleProps={movie.title}
                yearProps={movie.year}
                rateProps={movie.rate}
                durationProps={movie.duration}
                directorProps={movie.director}
                genreProps={movie.genre}
            />)}

        </div>
    );
}
export default MovieList;
************************************ */

class MovieList extends Component {
    state = {
        myMovies: movies.slice(),
        titleInput: '',
        genreInput: '',
        alphabeticallyAscending: true,
        importanceAscending: true,
        yearAscending: true,
    }

    handleSortAlphabetically = () => {
        console.log('handleSortAlphabetically')
        let newMovies = this.state.myMovies.sort((a, b) => {
            let aTitle = a.title.toLowerCase()
            let bTitle = b.title.toLowerCase()
            if (aTitle < bTitle) {
                if (this.state.alphabeticallyAscending) {
                    return -1
                } else {
                    return 1
                }

            } else if (bTitle < aTitle) {
                if (this.state.alphabeticallyAscending) {
                    return 1
                } else {
                    return -1
                }
            } else {
                return 0
            }
        })
        console.log(newMovies)
        this.setState({ myMovies: newMovies });
        this.setState({ alphabeticallyAscending: !this.state.alphabeticallyAscending });
    }

    handleSortWithImportance = () => {
        console.log('clicked');
        if (this.state.importanceAscending) {
            let newMovies = this.state.myMovies.sort((a, b) => a.rate - b.rate).reverse()
            this.setState({ myMovies: newMovies });
            this.setState({ importanceAscending: !this.state.importanceAscending });
        } else {
            let newMovies = this.state.myMovies.sort((a, b) => a.rate - b.rate)
            this.setState({ myMovies: newMovies });
            this.setState({ importanceAscending: !this.state.importanceAscending });
        }
    }

    handleSortWithYear = () => {
        console.log('clicked');
        if (this.state.yearAscending) {
            let newMovies = this.state.myMovies.sort((a, b) => a.year - b.year).reverse()
            this.setState({ myMovies: newMovies });
            this.setState({ yearAscending: !this.state.yearAscending });
        } else {
            let newMovies = this.state.myMovies.sort((a, b) => a.year - b.year)
            this.setState({ myMovies: newMovies });
            this.setState({ yearAscending: !this.state.yearAscending });
        }
    }

    handleChangeTitleInput = (event) => {
        console.log(event);
        this.setState({ titleInput: event.target.value });
    }

    handleChangeDirectorInput = (event) => {
        console.log(event);
        this.setState({ directorInput: event.target.value });
    }

    handleChangeGengreInput = (event) => {
        console.log(event);
        console.log(event.target.value);
        this.setState({ genreInput: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("wird nicht neu geladen");
        console.log(this.state.titleInput);
        let newMovie = {
            key: Date.now(),
            title: this.state.titleInput,
            director: this.state.directorInput,
            year: this.state.yearInput,
            duration: this.state.durationInput,
            rate: this.state.rateInput,
            genre: [this.state.genreInput]

            
        }
        console.log(newMovie);
        let newMovies = this.state.myMovies.slice()
        newMovies.push(newMovie)
        this.setState({myMovies: newMovies});
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                    <input type="text" value={this.state.titleInput} onChange={this.handleChangeTitleInput} />
                    </label>

                    <label>
                        Director:
                    <input type="text" value={this.state.directorInput} onChange={this.handleChangeDirectorInput} />
                    </label>
                    
                    <br />
                    
                    {/* 
                    <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
                    */}
                    <input type="checkbox" onChange={this.handleChangeGengreInput} value='Action' /> Action <br/>
                    <input type="checkbox" onChange={this.handleChangeGengreInput} value='Thriller' /> Thriller <br/>
                    <input type="checkbox" onChange={this.handleChangeGengreInput} value='Drama' /> Drama <br/> 

                    <input type="submit" value="Submit" />
                </form>

                <button onClick={this.handleSortWithImportance}>sort With importance</button>
                <button onClick={this.handleSortWithYear}>sort by Year</button>
                <button onClick={this.handleSortAlphabetically}>sort Alphabetically</button>
                <div className="grid">
                    {this.state.myMovies.map((movie, i) => <MovieItem
                        key={i}
                        titleProps={movie.title}
                        yearProps={movie.year}
                        rateProps={movie.rate}
                        durationProps={movie.duration}
                        directorProps={movie.director}
                        genreProps={movie.genre}
                        handleChange={() => this.handleChange(movie.id)}
                    />)}
                </div>
            </>
        );
    }
}

export default MovieList;