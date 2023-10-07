import React from "react";

const AddBook = () => {
  return (
    <div>
      <div className="container w-50 mt-5 border border-secondary">
        <form style={{ padding: "20px 20px 10px 20px" }}>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="bookName"
              className="form-control"
              id="floatingInput"
              placeholder="bookName"
            />
            <label for="floatingInput">Book Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="author"
              className="form-control"
              id="floatingInput"
              placeholder="author"
            />
            <label for="floatingInput">Author</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              name="quantity"
              className="form-control"
              id="floatingInput"
              placeholder="quantity"
            />
            <label for="floatingInput">Quantity</label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>Departments</option>
              <option value="History & Criticism">History & Criticism</option>
              <option value="Religious">Religious</option>
              <option value="Music">Music</option>
              <option value="Study & Teaching">Study & Teaching</option>

            </select>
            <label for="floatingSelect">Select Book Departments</label>
          </div>

        <div className="form-floating mb-3">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">Comments</label>
        </div>
        <button type="button" class="btn btn-primary">Primary</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
