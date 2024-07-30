import type { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'

interface ISliderContext {
  currentIndex: number
  hide: () => void
  show: (index: number) => void
  isOpen: boolean
}

const SliderContext = createContext<ISliderContext>(null!)

export function SliderContextProvider(props: { children: ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(-1)

  const value: ISliderContext = {
    currentIndex,
    hide: () => setCurrentIndex(-1),
    show: (index) => setCurrentIndex(index),
    isOpen: currentIndex >= 0,
  }

  return <SliderContext.Provider value={value} {...props} />
}

export const useSliderContext = () => useContext(SliderContext)
