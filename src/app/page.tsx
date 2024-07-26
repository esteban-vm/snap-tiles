import axios from 'axios'
import { ImageItem, ImageList, NavBar, SearchBox } from '@/components'

async function getImageList() {
  try {
    const { API_KEY, API_URL } = process.env

    const { data } = await axios.get<AppTypes.ApiResponse>(API_URL, {
      params: { key: API_KEY, orientation: 'horizontal', safesearch: true },
    })

    return data.hits
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  const list = await getImageList()

  return (
    <main>
      <NavBar>
        <SearchBox />
      </NavBar>
      <ImageList>
        {list?.map((item, index) => <ImageItem key={crypto.randomUUID()} index={index} {...item} />)}
      </ImageList>
    </main>
  )
}
