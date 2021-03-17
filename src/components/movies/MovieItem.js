const MovieItem = (props) => {
    // console.log(props.genreProps)
    return (
        <figure>
            <h1>{props.titleProps}</h1>
            <h2>{props.yearProps}</h2>
            <h2>{props.directorProps}</h2>
            <h2>{props.durationProps}</h2>
            <h2>{props.rateProps}</h2>
            <ul>
                {props.genreProps.map((genre, j) => <li key={j}>{genre}</li>)}
            </ul>
        </figure>
    );
}

export default MovieItem;