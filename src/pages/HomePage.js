import React from 'react'
import millify from 'millify'
import { Collapse, Row, Col, Typography, Avatar } from 'antd'
import HTMLReactParser from 'html-react-parser'
import Loader from '../components/Loader'

const { Text } = Typography
const { Panel } = Collapse

const HomePage = ({ fetching, coins }) => {
  return (
    <div>
      <h1>Home</h1>
      {fetching && <Loader />}
      <div>
        <Row>
          <Col span={4}>Name</Col>
          <Col span={4}>Price</Col>
          <Col span={4}>% 24h</Col>
          <Col span={4}>Market Cap</Col>
          <Col span={4}>Supply</Col>
          <Col span={4}>Favorito</Col>
        </Row>
        <Row>
          {coins?.map((coin) => (
            <Col span={24}>
              <Collapse>
                <Panel
                  key={coin.id}
                  showArrow={false}
                  header={
                    <Row key={coin.id}>
                      <Col span={4}>
                        <Text>
                          <strong>{coin.market_cap_rank}.</strong>
                        </Text>
                        <Avatar className='coin-image' src={coin.image} />
                        <Text>
                          <strong>{coin.name}</strong>
                        </Text>
                      </Col>
                      <Col span={4}>€ {millify(coin.current_price)}</Col>
                      <Col span={4}>
                        {millify(coin.price_change_percentage_24h_in_currency)}%
                      </Col>
                      <Col span={4}>{millify(coin.market_cap)}</Col>
                      <Col span={4}>{millify(coin.circulating_supply)}</Col>
                      <Col span={4}>Add</Col>
                    </Row>
                  }
                >
                  {HTMLReactParser(coin.name || '')}
                </Panel>
              </Collapse>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default HomePage

// return (
//               <div className='coin-item' key={coin.id}>
//                 {console.log('Name:', coin)},
//                 <img src={coin.image} alt={coin.name} />
//                 <p>{coin.name}</p>
//                 </Collapse>
//               </div>
//             )
