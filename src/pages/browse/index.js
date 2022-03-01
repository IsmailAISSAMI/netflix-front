import React from 'react';
import { getMovies } from "../../graphql/queries/movies";
import { useQuery } from "@apollo/react-hooks";
import MovieGrid from '../../components/movie/MovieGrid/MovieGrid';
import TitlePage from "../../components/UI/Title/TitlePage";

const Index = () => {

    const { loading, error, data } = useQuery(getMovies);
    
    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }

    console.log(data);

    return (
        <div className="page__shop">
            <TitlePage title="Movies"/>
            
            {/* {
                data.getMovies.map((el, index)=>{
                    return <p key={index}>{el}</p>
                }
                )
            } */}

        <MovieGrid movies={data.getMovies}/>
            
        </div>
    );
}

export default Index;