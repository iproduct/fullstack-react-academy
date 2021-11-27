import { on } from 'process'
import React, { ChangeEvent, FormEvent, useState } from 'react'

export type StringSubmitCallback = (comment: string) => any

interface SearchProps {
    onSearch: StringSubmitCallback
}

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchText, setSearchText] = useState("")

    function submitSearch(event: FormEvent) {
        event.preventDefault()
        if(searchText.trim()) {
            onSearch(searchText)
            setSearchText("")
        }
    }

    function searchTextChanged(ev: ChangeEvent<HTMLInputElement>) {
        setSearchText(ev.target.value);
    }

    return (
        <form onSubmit={submitSearch}>
            <input placeholder="Search by keywords" type="text" name="keywords" onChange={searchTextChanged}
                value={searchText} />
            <button className="btn waves-effect waves-light" type="submit">Submit
                <i className="material-icons right">send</i> Search
            </button>
        </form>
    )
}
