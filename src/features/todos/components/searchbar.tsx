import { useSearchParams } from 'react-router'
import { useDebouncedCallback } from 'use-debounce'

export function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams()

  const searchDebounceTimeInMs = 300

  const onSearch = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams()

    if (search.length) {
      params.set('search', search)
    }

    setSearchParams(params)
  }, searchDebounceTimeInMs)

  return (
    <input
      type="search"
      className="rounded border"
      placeholder="Search..."
      onChange={(e) => onSearch(e.target.value)}
      defaultValue={searchParams.get('search')?.toString()}
    />
  )
}
