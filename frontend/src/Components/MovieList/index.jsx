import React, {Component} from "react";
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"


export default class App  extends Component {
    constructor(props) {
        super(props)

        this.state ={
        loading: true,
        moviesList:[],
        }
    }
    
    async componentDidMount() {
        const url = "http://www.omdbapi.com/?i=tt3896198"
        const apiKey = "&apikey=111970bd"
        const search = "&s="+ this.props.search
        const type = "&type=movie"

        const response = await fetch(url+apiKey+type+search);
        const data = await response.json()
        const dataList = []
        data.Search.forEach(element => {
            if(element.Poster == "N/A"){
                element.Poster= "https://myerstest.com/wp-content/uploads/2017/07/NO-IMG-AVAILABLE.jpg"
            }

            
            dataList.push(element)
        });
        console.log("dataList:", dataList)
        this.setState({
            moviesList: dataList
        })
        console.log("state:",this.state.moviesList)
    }


    // list() {
    //     return this.state.moviesList.map(movie => {
    //         return (
    //             <div key= {movie.imdbID} className= "">
    //                 <h2>{movie.Title}</h2>
    //                 <img src={movie.Poster} alt=""/>
    //                 <h3>{movie.Year}</h3>
    //             </div>
    //         )
    //     })
    // }
    list() {
        return this.state.moviesList.map(movie => {
            return (
                
                    <Card className="bg-dark text-white movie-card">
                        <Card.Img src= {movie.Poster} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text>{movie.Year}</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                
            )
        })
    }

    

    // I want to be able to render this: {this.state.moviesList[0].Title}
    // console.log(this.state.moviesList[0].Title)
    //  <img src={this.state.moviesList[0].Poster} alt=""/>
    //                <p>{this.state.moviesList[0]}</p>



    render() {
        console.log("checking state:",this.state.moviesList)

        return(
            <div>
                <p>moviesList</p>
                <div className= "card-container">
                    {this.list()}
                </div>
                
            </div>
            
            
        )
    }

}