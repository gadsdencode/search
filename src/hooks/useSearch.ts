import { useState, useEffect } from 'react'

interface SearchResult {
  id: string
  title: string
  content: string
  url: string
}

export function useSearch(query: string) {
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!query) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setResults([
        {
          id: '1',
          title: 'Sample Result',
          content: 'This is a sample search result',
          url: 'https://example.com'
        }
      ])
      setIsLoading(false)
    }, 1000)
  }, [query])

  return { results, isLoading }
}
