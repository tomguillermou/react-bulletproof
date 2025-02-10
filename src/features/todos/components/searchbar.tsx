import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router'
import { useDebouncedCallback } from 'use-debounce'

export function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams()

  const debounceTimeInMs = 300

  const onSearch = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams()
      const search = event.target.value

      if (search) {
        params.set('search', search)
      }
      setSearchParams(params)
    },
    debounceTimeInMs
  )

  return (
    <input
      type="search"
      className="rounded border"
      placeholder="Search..."
      onChange={onSearch}
      defaultValue={searchParams.get('search')?.toString()}
    />
  )
}
