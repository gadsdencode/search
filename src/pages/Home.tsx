import { SearchBar } from '@/components/SearchBar'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-4xl font-bold mb-8">Ask me anything</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  )
}
