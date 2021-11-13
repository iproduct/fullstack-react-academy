
import React, { ChangeEvent, Component, FormEvent } from 'react'
import PropTypes from 'prop-types'

type SearchCallback = (keywords: string) => any

interface SearchProps {
    onsearch: SearchCallback
}

interface SearchState {
    keywords: string
}

export default class Search extends Component<SearchProps, SearchState> {
    static propTypes = {
        onsearch: PropTypes.func
    }
    state: SearchState = {
        keywords: ''
    }

    constructor(props: SearchProps) {
        super(props);
        this.submitKeywords = this.submitKeywords.bind(this)
        this.keywordsChanged = this.keywordsChanged.bind(this)
    }

    submitKeywords(event: FormEvent) {
        event.preventDefault()
        this.props.onsearch(this.state.keywords)
    }

    keywordsChanged(event: ChangeEvent) {
        const val = (event.target as HTMLInputElement).value;
        this.setState({ keywords: val })
    }

    render() {
        return (
            <form onSubmit={this.submitKeywords}>
                <input placeholder="Enter search keywords here ..." type="text" onChange={this.keywordsChanged}
                    value={this.state.keywords} />
                <input value="Search" type="submit" />
            </form>
        )
    }
}
