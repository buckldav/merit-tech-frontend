import { useRouter } from 'next/router'

export default function ProjectDetail() {
  const router = useRouter()
  const { id } = router.query

  return <p>Project: {id}</p>
}