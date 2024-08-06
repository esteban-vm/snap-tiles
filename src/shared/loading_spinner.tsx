import { clsx } from '@/utils'

interface LoadingSpinnerProps {
  className?: string
}

export default function LoadingSpinner({ className }: LoadingSpinnerProps) {
  return <span className={clsx('loading loading-ring', className)} />
}
