import React from 'react'

export const SongArtist = ({artist}) => {
    return (
        <div>
           <h3>{artist.strArtist}</h3> 
            <img src={artist.strArtistThumb} alt={artist.strArtist}></img>
            <p>{artist.intBornYear}-{artist.intDiedYear||"Presente"}</p>
            <p>{artist.strCountry}</p>
            <p>{artist.strGenre}</p>
            <a href="https://www.theaudiodb.com/images/media/artist/banner/qpxsrr1472404013.jpg">Imagen del artista </a>
            <p>{artist.strBiographyEN}</p>
        </div>
    )
}
export default SongArtist