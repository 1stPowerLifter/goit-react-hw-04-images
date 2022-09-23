import {  useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { AppStyled } from "./App.styled"
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ApiRequest } from 'API/API';

export const App = () => {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const [totalHitsImg, setTotalHitsImg] = useState(0)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)


  const INITIAL_STATE = () => {
    setQuery("")
    setPage(1)
    setTotalHitsImg(0)
    setImages([])
    setLoading(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      if (query === "") {
        INITIAL_STATE()
      } else if (page !== 1 && query !== "") {
        setLoading(true)
        const { hits } = await ApiRequest(query, page)
        setImages(images => [...images, ...hits])
        setLoading(false)
      } else {
        setLoading(true)
        const { totalHits, hits } = await ApiRequest(query, 1)
        setTotalHitsImg(totalHits)
        setImages(hits)
        setPage(1)
        setLoading(false)
      }
    }
    fetchData()
  }, [page, query])


  const maxPage = Math.ceil(+totalHitsImg / 12)
  return (
    <AppStyled>
      <Searchbar updateQuery={setQuery} />
      <ImageGallery imgs={images}/>
      {page < maxPage && <Button title="Load more" onClick={() => setPage(page => page + 1)} />}
      {loading && <Loader />}
      
      <GlobalStyle />
    </AppStyled>
  );
}
