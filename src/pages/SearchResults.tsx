import { useSearchParams } from 'react-router-dom'
import { SearchBar } from '@/components/SearchBar'
import { ResultsDisplay } from '@/components/ResultsDisplay'
import { useSearch } from '@/hooks/useSearch'

export function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const { results, isLoading } = useSearch(query)

  const handleSearch = (newQuery: string) => {
    setSearchParams({ q: newQuery })
  }

  return (
    <div className="space-y-6">
      <SearchBar onSearch={handleSearch} />
      <ResultsDisplay results={results} isLoading={isLoading} />
    </div>
  )
}
