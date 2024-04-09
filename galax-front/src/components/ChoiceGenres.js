import "./cssdiectory/ChoicesGenres.css";

import Movies from "../../src/components/JsonFiles/list.json";
import Series from "../../src/components/JsonFiles/list2.json";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


// Auteur: Lorsen
function ChoiceGenres() {
    const { id } = useParams();
    return (
        <div className={"mainContainer"}>

        <div  className={"moviesSection"}>
            <table>
                <tr>
                    <th>
            <h1 className={"titreMovies"}> Catégories Films </h1>
                    </th>
                </tr>
                <tr>
                    <td>
            {
                Movies.genres.map(movies => {
                    return (
                        <div>
                            <input className={"check-genre-M"} type="checkbox"/> {movies.name}
                        </div>
                    )
                })
            }
        </td>
        </tr>
</table>
</div>


            <div className={"seriesSection"}>
                <table>
                    <tr>
                        <th>
                            <h1 className={"titreSeries"}> Catégories Séries </h1>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            {
                                Series.genres.map(series => {
                                    return (
                                        <div>
                                            <input className={"check-genre-S"} type="checkbox"/> {series.name}
                                        </div>
                                    )
                                })
                            }
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default ChoiceGenres;