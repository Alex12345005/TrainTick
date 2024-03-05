from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class UserBase(BaseModel):
    username: str

class BookingBase(BaseModel):
    journey_date: datetime
    class_type: str
    seats: int
    source: str
    destination: str

class BookingCreate(BookingBase):
    user_id: int

class BookingInDB(BookingBase):
    id: int
    user_id: int

    class Config:
        orm_mode = True

class UserCreate(UserBase):
    password: str

class UserInDB(UserBase):
    id: int
    hashed_password: str

    class Config:
        orm_mode = True

class User(UserInDB):
    bookings: List[BookingInDB] = []

