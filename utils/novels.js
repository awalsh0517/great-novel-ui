import Axios from 'axios'

export const filteredNovels = (list, term) => Array.isArray(list) &&
  list.filter(novel => (
    novel.title.toLowerCase().includes(term.toLowerCase())
  ))

export const retrieveNovels = async () => {
  const { data } = await Axios.get('http://localhost:1337/novels')

  return data
}
