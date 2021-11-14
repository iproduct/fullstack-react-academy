
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
        onsearch: PropTypes.func.isRequired
    }
    state: SearchState = {
        keywords: ''
    }

    constructor(props: SearchProps) {
        super(props);
        this.submitKeywords = this.submitKeywords.bind(this)
        // this.keywordsChanged = this.keywordsChanged.bind(this)
    }

    submitKeywords(event: FormEvent) {
        event.preventDefault()
        if (this.state.keywords.trim().length > 0) {
            this.setState({ keywords: '' });
            this.props.onsearch(this.state.keywords)
        }
    }

    keywordsChanged = (event: ChangeEvent) => {
        const val = (event.target as HTMLInputElement).value;
        this.setState({ keywords: val })
    }

    render() {
        return (
            <form onSubmit={this.submitKeywords}>
                <input placeholder="Enter search keywords here ..." type="text" onChange={this.keywordsChanged}
                    value={this.state.keywords} />
                <button className="btn waves-effect waves-light" type="submit">Submit
                    <i className="material-icons right">send</i>
                </button>
            </form>
        )
    }
}
