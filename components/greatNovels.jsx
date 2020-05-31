import React, { useEffect, useState } from 'react'
import Search from './search'
import GreatNovel from './greatNovel'
import { filteredNovels, retrieveNovels } from '../utils/novels'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [novelsList, setNovelsList] = useState([])
  const [filteredNovelList, setFilteredNovelList] = useState([])

  useEffect(() => {
    async function pullData() {
      const novels = await retrieveNovels()

      setNovelsList(novels)
      setFilteredNovelList(novels)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filteredNovels(novelsList, searchTerm)

    setFilteredNovelList(filtered)
  }, [searchTerm])

  return (
    <div className="page">
      <div className="title">Great Novels</div>
      <div className="subtitle">A searchable list of the greatest novels</div>
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        Array.isArray(filteredNovelList) &&
        filteredNovelList.map(novel => (<GreatNovel key={novel.id} id={novel.id} title={novel.title} />))
      }
      <div className="output">{searchTerm}</div>
    </div>
  )
}
