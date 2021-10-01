import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import { Navbar } from './components'
import HomePage from './pages/HomePage'
import CryptoHandler from './services/CryptosHandler'
const { Header, Content, Footer } = Layout

const App = () => {
  const [fetching, setFetching] = useState(true)
  const [coins, setCoins] = useState()

  useEffect(() => {
    const CryptoApi = new CryptoHandler()
    CryptoApi.getAllCryptos().then((cryptos) => {
      console.log('ACA', cryptos.data)
      setCoins(cryptos.data.coin)
      setFetching(false)
    })
  }, [])
  return (
    <>
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Navbar />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className='site-layout-content'>
            <Switch>
              <Route exact path='/'>
                <HomePage coins={coins} fetching={fetching} />
              </Route>
              <Route exact path='/user'>
                User perfil
              </Route>
              <Route exact path='/news'>
                News
              </Route>
              <Route exact path='/user/registration'>
                Registration
              </Route>
              <Route exact path='/user/login'>
                Login
              </Route>
              <Route exact path='/user/logout'>
                Logout
              </Route>
              <Route exact path='/crypto/:coinId'>
                crypto perfil
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          CryptoHack React ©2021 Created by Julian DAquila
        </Footer>
      </Layout>
    </>
  )
}

export default App
