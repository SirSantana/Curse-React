import React , {useState, useEffect} from 'react'
import Loader from './Loader'
import { SongDetail } from './SongDetail'
import { SongForm } from './SongForm'
import {helpHttp} from '../helpers/helpHttp'

function SongSearch() {
    
    const [search, setSearch] = useState(null)
    const [lyric, setLyric] = useState(null)
    const [bio, setBio] = useState(null)
    const[loading, setLoading] = useState(false)

    useEffect(() => {
        if(search === null) return

        const fetchData = async ()=>{
            const {artist, song} = search;

            let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
            let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`

            setLoading(true)

            const [resArtist, resSong] = await Promise.all([helpHttp().get(artistUrl), helpHttp().get(songUrl)])

            console.log(resArtist, resSong)
            setBio(resArtist);
            setLyric(resSong);
            setLoading(false);
        }
        fetchData()
        
    }, [search])

    const handleSearch = (data)=>{
        
       setSearch(data)
    }

    return (
        <div>
            <h2>Song Search</h2>
            {loading &&<Loader/>}
            <SongForm handleSearch={handleSearch}/>
            {search && !loading &&(
            <SongDetail search = {search} lyric={lyric} bio={bio}/>
            )}
            
        </div>
    )
}

export default SongSearch
