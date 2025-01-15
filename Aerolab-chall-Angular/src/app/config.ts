import { HttpHeaders } from "@angular/common/http"

export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzdmY2MzMGMxMGUzZDAwMjBkMzBmM2UiLCJpYXQiOjE3MzY0Mjg1OTJ9.9vE_XJX0kN9XN6xpJYT5zWY1Uk_VB4FyKa8f6vsxpFs'

export const getProductsUrl = `https://coding-challenge-api.aerolab.co/products`
export const getUserUrl = 'https://coding-challenge-api.aerolab.co/user/me'
export const addPointsUrl = 'https://coding-challenge-api.aerolab.co/user/points'
export const reedemUrl = 'https://coding-challenge-api.aerolab.co/redeem'
export const getHistoryUrl = 'https://coding-challenge-api.aerolab.co/user/history'

export const header = new HttpHeaders({
    'Content-Type':'application/json',
    'Accept':'application/json',
    'Authorization': `Bearer ${token}`
});