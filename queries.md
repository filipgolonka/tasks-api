## Login

`curl -XPOST http://localhost:3000/v1/login -d '{"email":"filipgolonka@gmail.com", "password": "test"}' -H "Content-Type:application/json"`

## Create task

`curl -XPOST http://localhost:3000/v1/tasks -d '{"title": "Laugh cruelly like a black ship.", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwZ29sb25rYUBnbWFpbC5jb20iLCJpYXQiOjE1NzkwOTE4NDd9.k89bHhEttO3z4rZIiIdpwbSiO9yTtpD1KdZOhPZ5YyE"}' -H "Content-Type:application/json"`

## Get list

`curl -XGET http://localhost:3000/v1/tasks?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwZ29sb25rYUBnbWFpbC5jb20iLCJpYXQiOjE1NzkwOTE4NDd9.k89bHhEttO3z4rZIiIdpwbSiO9yTtpD1KdZOhPZ5YyE`

## Get single item

`curl -XGET http://localhost:3000/v1/tasks/5e1f06b0bba5211f7aeb6439?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwZ29sb25rYUBnbWFpbC5jb20iLCJpYXQiOjE1NzkwOTE4NDd9.k89bHhEttO3z4rZIiIdpwbSiO9yTtpD1KdZOhPZ5YyE`

## Delete single item

`curl -XDELETE http://localhost:3000/v1/tasks/5e1f0809ea694f20607a706b?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwZ29sb25rYUBnbWFpbC5jb20iLCJpYXQiOjE1NzkwOTE4NDd9.k89bHhEttO3z4rZIiIdpwbSiO9yTtpD1KdZOhPZ5YyE`

## Update single item

`curl -XPUT http://localhost:3000/v1/tasks/5e1f06b0bba5211f7aeb6439 -d '{"title": "The gold blows with endurance, love the bahamas.", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwZ29sb25rYUBnbWFpbC5jb20iLCJpYXQiOjE1NzkwOTE4NDd9.k89bHhEttO3z4rZIiIdpwbSiO9yTtpD1KdZOhPZ5YyE"}' -H "Content-Type:application/json"`
