# bookr-BE

Bookr is your source for all things Text Book. Picture the AirBNB of text books, a social platform for peer reviewed text books.
Build week backend project for Bookr app

User API:

1. Add a user (POST /api/auth/register)
2. Login a user (POST /api/auth/login)
3. Get all users (GET /api/users)
4. Get a user by id (GET /api/users/:id)
5. Update a user by id (PUT /api/users/:id)
6. Delete a user by id (DELETE /api/users/:id)

Book API:

1. Add a book (POST /api/book/)
2. Get all books (GET /api/books/)
3. Get a book by id (GET /api/book/{id})
4. Delete a book by id (DELETE /api/book/{id})
5. Update a book by id (PUT /api/book/{id})

Review API:

1. Add a review (for a book) (POST /api/review/ - book id in the post body)
2. Get all reviews (for a book) (GET /api/reviews?bookid={bookid})
3. Get a review by id (review id should be globally unique) (GET /api/review/{id})
4. Delete a review by id (review id should be globally unique) (DELETE /api/review/{id})
5. Update a review by id review id should be globally unique) (PUT /api/review/{id})
