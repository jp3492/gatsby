import React, { useState, useMemo } from "react"
import { Link } from "gatsby"
import axios from 'axios'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [users, setUsers] = useState([])

  useMemo(() => {

  }, [useMemo])

  const getUsers = () => axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Home</h1>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <ul>
        {
          users.map((user, i) => (
            <div>
              {
                user.name
              }
            </div>
          ))
        }
      </ul>
      <button onClick={() => getUsers()}>
        Get User
      </button>
    </Layout>
  )
}
export default IndexPage
