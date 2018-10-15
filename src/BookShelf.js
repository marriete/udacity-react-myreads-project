import React, { Component } from 'react'
import PropTypes from "prop-types"
import Book from './Book.js'

class BookShelf extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	}

	render() {
		return (
			<div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">Currently Reading</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{this.props.books.map(book => (
								<Book book={book} books={this.props.books} key={book.id} />
							))}
						</ol>
					</div>
				</div>
			</div>
		)
	}
}

export default BookShelf