import axios from 'axios'
import { ImageItem, ImageList, NavBar, SearchBox } from '@/components'

async function getImageList() {
  try {
    const { data } = await axios.get<AppTypes.ApiResponse>(`${process.env.API_URL}?key=${process.env.API_KEY}`, {
      params: { orientation: 'horizontal' },
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
