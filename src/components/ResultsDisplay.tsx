import { Card } from './ui/card'

interface Result {
  id: string
  title: string
  content: string
  url: string
}

interface ResultsDisplayProps {
  results: Result[]
  isLoading: boolean
}

export function ResultsDisplay({ results, isLoading }: ResultsDisplayProps) {
  if (isLoading) {
    return <div className="animate-pulse">Loading...</div>
  }

  return (
    <div className="space-y-4">
      {results.map((result) => (
        <Card key={result.id} className="p-4">
          <h3 className="text-lg font-semibold">{result.title}</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {result.content}
          </p>
          <a 
            href={result.url}
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-2 block"
          >
            Learn more
          </a>
        </Card>
      ))}
    </div>
  )
}
