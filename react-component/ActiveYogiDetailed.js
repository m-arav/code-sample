import React from 'react'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import { Grid } from 'react-bootstrap'
import Divider from 'material-ui/Divider'
import { Col } from 'react-bootstrap'
import Badge from 'material-ui/Badge';
import logo from '../../logo.svg'
import styles from './styles'

function ActiveYogiDetailed(props) {
  const {
    ActiveYogiDetailedHeadingStyle,
    ActiveYogiDetailedBodySyle,
    ActiveYogiDetailedTextSyle,
    ActiveYogiDetailedBadgeStyle
  } = styles
  return(
    <div>
      <Paper zDepth={1}>
        <div style={ActiveYogiDetailedHeadingStyle}>
          {'Recently Active'}
        </div>
        <div style={ActiveYogiDetailedBodySyle} >
          <Grid>
            <div
              style={{display: 'flex'}}>
              <Col xs={3}>
                <div style={ActiveYogiDetailedTextSyle}>
                  <Avatar
                    src={logo}
                    size={50}/>
                  <div>John T</div>
                </div>
              </Col>
              <Col xs={3}>
                <div style={ActiveYogiDetailedTextSyle}>
                  <Avatar
                    src={logo}
                    size={50}/>
                  <div>Raj Abi</div>
                </div>
              </Col>
              <Col xs={3}>
                <div style={ActiveYogiDetailedTextSyle}>
                  <Avatar
                    src={logo}
                    size={50}/>
                  <div>Kramer</div>
                </div>
              </Col>
              <Col xs={3}>
                <div style={ActiveYogiDetailedTextSyle}>
                  <Badge style={{padding: 0}} badgeStyle={ActiveYogiDetailedBadgeStyle}
                    badgeContent={'+5'}>
                  <Avatar
                    src={logo}
                    size={50}/>
                  </Badge>
                  <div>Others</div>
                </div>
              </Col>
            </div>
          </Grid>
        </div>
        <Divider/>
        <FlatButton primary={true} label='View All' fullWidth={true} style={{height: 50}}/>
      </Paper>
    </div>
  )
}

export default ActiveYogiDetailed
