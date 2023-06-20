from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from faker import Faker
from datetime import datetime, timedelta
from random import randint, choice
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
faker = Faker()
POSTS_COUNT = 550
USERS_COUNT = 100

posts = []
users = []

# CORS configuration
origins = [
    "http://localhost",
    "http://localhost:3002",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Post(BaseModel):
    id: int
    title: str
    image: str
    likes: int
    tags: list[str]
    publishDate: str
    text: str
    userId: int

class User(BaseModel):
    id: int
    firstName: str
    lastName: str
    email: str
    avatar: str


def make_uuid():
    return len(posts) + 1

def create_fake_post():
    return {
        "id": make_uuid(),
        "title": faker.sentence(),
        "text": faker.paragraph(),
        "image": faker.image_url(),
        "likes": randint(0, 100),
        "tags": [faker.word() for _ in range(randint(0, 8))],
        "publishDate": (datetime.now() - timedelta(days=randint(0, 365))).isoformat(),
        # "userId": 1,
        "userId": choice(users)["id"],
    }

def create_fake_user():
    return {
        # "id": 1,
        "id": make_uuid(),
        "firstName": faker.first_name(),
        "lastName": faker.last_name(),
        "email": faker.email(),
        "avatar": faker.image_url(),
    }

@app.on_event("startup")
def generate_data():
    for _ in range(USERS_COUNT):
        users.append(create_fake_user())

    for _ in range(POSTS_COUNT):
        posts.append(create_fake_post())

@app.get("/", include_in_schema=False)
async def redirect_to_docs():
    raise HTTPException(status_code=307, headers={"Location": "/docs"})

@app.get("/posts/{post_id}")
def get_post(post_id: int, _expand: str = None):
    post = next((p for p in posts if p["id"] == post_id), None)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    if _expand == "user":
        user = next((u for u in users if u['id'] == post["userId"]), None)
        if user:
            post["user"] = user
    return post

@app.get("/posts")
def get_all_posts(_expand: str = None):
    all_posts = posts
    if _expand == "user":
        for post in all_posts:
            user = next((u for u in users if u['id'] == post["userId"]), None)
            if user:
                post["user"] = user
    return all_posts

@app.post("/posts")
def create_post(post: Post):
    posts.append(post.dict())
    return {"message": "Post created successfully"}


# uvicorn main:app --port 3000