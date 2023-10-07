import React from "react";

const Books = ({books}) => {
    return(
      <div className="container mt-5" >
        <table className="table table-hover table-dark" >
            <thead>
                <tr>
                    <th scope="col" >ID</th>
                    <th scope="col" >Book Name</th>
                    <th scope="col" >Author</th>
                    <th scope="col" >Departments</th>
                    <th scope="col" >Quantity</th>
                    <th scope="col" colSpan="3" >Process</th>
                </tr>
            </thead>
            <tbody>
            {
                books.map((book, index) => {
                    return(
                        <tr scope="col" key={index}>
                            <td>{book._id}</td>
                            <td>{book.bookName}</td>
                            <td>{book.author}</td>
                            <td>{book.department}</td>
                            <td>{book.quantity}</td>
                            <td>{book.comment}</td>
                            <td></td>
                        </tr>
                    )
                })
            }
            </tbody>

        </table>
      </div>  
    );
}

export default Books;
