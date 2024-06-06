import express from 'express'
const app = express()

let employees = [
    {
        id: 1,
        name: 'Bhaskar Ray',
        salary: 10000
    },
    {
        id: 2,
        name: 'Anubrata Ray',
        salary: 15000
    },
    {
        id: 3,
        name: 'Tiskar Sarkar',
        salary: 20000
    }
]


app.get('/employees/create/:id/:name/:salary', (req, res) => {
    const employee = {
        id: req.params['id'],
        name: req.params['name'],
        salary: req.params['salary']
    }
    employees.push(employee)
    res.send(employee)
})

app.delete('/employees/delete/:id', (req, res) => {
    let id1 = req.params['id']
    console.log(employees)
    const deleteEmp = employees.filter(employee => employee.id === id1)
    employees.pop(deleteEmp)
    console.log(employees)
    res.send(employees)
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: 'This is a Joke'
        },
        {
            id: 2,
            title: 'Another Joke',
            content: 'This is another Joke'
        },
        {
            id: 3,
            title: 'no 3 Joke',
            content: 'This is no 3 Joke'
        },
        {
            id: 4,
            title: 'no 4 Joke',
            content: 'This is no 4 Joke'
        },
        {
            id: 5,
            title: 'no 5 Joke',
            content: 'This is no 5 Joke'
        }
    ]
    res.send(jokes)
})

app.get('/employees', (req, res) => {
    res.send(employees)
})

const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`)
})