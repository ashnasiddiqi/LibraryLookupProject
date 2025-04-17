#ran with uvicorn mainhw2:app --reload

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Models
class User(BaseModel):
    Name: str
    Email: str

class Book(BaseModel):
    Name: str
    ISBN: str

class Review(BaseModel):
    Rating: int

# In-memory data
user_list = [User(Name="Ash", Email="Ash@example.com")]
book_list = [Book(Name="title", ISBN="123456789")]
rating_list = [Review(Rating=1)]

# User endpoints
@app.get("/users")
async def get_users():
    return {"users": user_list}

@app.post("/users")
async def add_user(user: User):
    user_list.append(user)
    return {"users": user_list}

@app.delete("/users")
async def delete_user(index: int = 0):
    if index < 0 or index >= len(user_list):
        raise HTTPException(status_code=400, detail="Invalid index")
    user_list.pop(index)
    return {"users": user_list}

# Book endpoints (similar structure)
@app.get("/books")
async def get_books():
    return {"books": book_list}

@app.post("/books")
async def add_book(book: Book):
    book_list.append(book)
    return {"books": book_list}

@app.delete("/books")
async def delete_book(index: int = 0):
    if index < 0 or index >= len(book_list):
        raise HTTPException(status_code=400, detail="Invalid index")
    book_list.pop(index)
    return {"books": book_list}

# Rating endpoints
@app.get("/ratings")
async def get_ratings():
    return {"ratings": rating_list}

@app.post("/ratings")
async def add_rating(review: Review):
    rating_list.append(review)
    return {"ratings": rating_list}

@app.delete("/ratings")
async def delete_rating(index: int = 0):
    if index < 0 or index >= len(rating_list):
        raise HTTPException(status_code=400, detail="Invalid index")
    rating_list.pop(index)
    return {"ratings": rating_list}
