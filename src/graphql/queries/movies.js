import gql from "graphql-tag";

export const getMovies = gql`
    query {
        getMovies{
            id
            title
            image
            trailer
            maturityRating
            language
            releaseDate
            duration
            director
            scriptwriter
            description
            categories{label}
        }
    }
`

export const getMovie = gql`
    query getMovie($id:ID){
        getMovie (id:$id){
            id
            title
            image
            trailer
            maturityRating
            language
            releaseDate
            duration
            director
            scriptwriter
            description
            categories{label}
        }
    }
`