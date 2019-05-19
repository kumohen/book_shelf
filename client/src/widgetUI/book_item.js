import React from 'react';
import {Link} from 'react-router-dom';

const BookItem = (item) => {
    return (
      <Link to={`/books/${item._id}`} className="book_item">
            <div className="book_header">
                <h2>{item.name}</h2>
            </div>
            <div className="book_items">
                <div className="book_author">
                    {item.author}
                </div>
                <div className="book_bubble">
                    <strong>price</strong>${item.price}
                </div>

                <div className="book_bubble">
                <strong>pages:</strong> {item.pages}
                </div>
                <div className="book_bubble rating">
                <strong>rating:</strong> {item.rating}
                </div>
            </div>
      </Link>
    );
};

export default BookItem;