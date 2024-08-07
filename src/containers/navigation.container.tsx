import { Suspense } from 'react'
import { AppLogo, NavBar, SearchBox } from '@/components'

export default function Navigation() {
  return (
    <NavBar>
      <AppLogo />
      <Suspense fallback={null}>
        <SearchBox />
      </Suspense>
    </NavBar>
  )
}
