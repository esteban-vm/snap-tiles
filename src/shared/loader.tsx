import { PuffLoader } from 'react-spinners'

type LoaderProps = Omit<Parameters<typeof PuffLoader>[0], 'className' | 'color'>

export default function Loader(props: LoaderProps) {
  return <PuffLoader {...props} aria-label='Loading indicator' color='oklch(var(--su))' />
}
