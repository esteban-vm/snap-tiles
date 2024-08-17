import { PuffLoader } from 'react-spinners'

type LoadingSpinnerProps = Omit<Parameters<typeof PuffLoader>[0], 'className' | 'color'>

export default function LoadingSpinner(props: LoadingSpinnerProps) {
  return <PuffLoader {...props} aria-label='Loading spinner' color='oklch(var(--su))' />
}
