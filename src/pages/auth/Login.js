import React, { useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  Spinner,
} from 'reactstrap'
import '../../styles/AppStyles.css'
import bg1 from '../../img/bg_1.jpg'
import './Signup.css'
import { useNavigate } from 'react-router'
import CustomButton from '../../components/UI/CustomButton'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/auth'
import { useQuery } from '../../hooks'
import ImageBackgroundWrapper from '../../components/UI/ImageBackgroundWrapper'
import GoogleLogin from 'react-google-login'
import { GOGLE_CLIENT_ID } from '../../utils/config'

function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const query = useQuery()
  const rdr = query.get('rdr')
  const [form, setForm] = useState({
    app: 'Model',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }))

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    dispatch(
      login(
        form,
        () => {
          setLoading(false)
          if (rdr && !rdr.includes('login') && !rdr.includes('sign-up')) {
            navigate(rdr)
          } else {
            navigate('/')
          }
        },
        () => {
          setLoading(false)
        },
      ),
    )
  }

  return (
    // <ImageBackgroundWrapper
    //   bg={bg1}
    //   style={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   }}
    // >
    <Row className='m-0 p-0'>
      <Col md={6} className='m-0 p-0'>
        <ImageBackgroundWrapper
          bg={bg1}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className='m-5'>
            <h1 className='auth_title'>Laloona</h1>
            <p className='auth_desc'>Take your modelling career to the next level</p>
          </div>
        </ImageBackgroundWrapper>
      </Col>
      <Col md={6}>
        <div
          style={{
            display: 'flex',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <Card
            className='main_card shadow m-5'
          >
            {/* <CardHeader className="h4 text-center">Welcome back</CardHeader> */}
            <CardBody>
              <h1 className='brand_name'>welcome back!</h1>
              <form onSubmit={handleLogin}>
                <Row className="login-row mt-2">
                  <div className="my-2">
                    <label>Email</label>
                    <Input
                      type="email"
                      required

                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="my-2">
                    <label>Password</label>
                    <Input
                      type="password"

                      required
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                    />
                  </div>
                </Row>
                <div className="text-center mt-3">
                  <CustomButton
                    className="m-1 px-5"
                    // onClick={handleLogin}
                    color="dark"
                    type="submit"
                    loading={loading}
                  >
                    Login
                  </CustomButton>
                </div>

                {/* <div>
                <hr />
                <p className="text-center">Continue with </p>
                <div className="d-flex flex-direction-column mt-2 justify-content-center">
                  <GoogleLogin
                    clientId={GOGLE_CLIENT_ID}
                    buttonText="Login"
                    onSuccess={(e) => console.log(e)}
                    onFailure={(e) => console.log(e)}
                    cookiePolicy={"single_host_origin"}
                    render={(renderProps) => (
                      <CustomButton
                        className="m-1"
                        color="danger"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        Google
                      </CustomButton>
                    )}
                  />

                  <CustomButton className="m-1" color="primary">
                    Facebook
                  </CustomButton>
                  <CustomButton className="m-1" color="warning">
                    Instagram
                  </CustomButton>
                </div>
              </div> */}

                <div className="text-center">
                  <hr style={{ padding: 0 }}></hr>
                  <p
                    style={{
                      fontSize: "13px",
                      marginTop: 5,
                      // color: "grey",
                    }}
                    onClick={() => navigate('/sign-up')}
                  >
                    First time user? | <b>Create account here!</b>{' '}
                  </p>
                  {/* <Button
                  color="dark"
                  // style={{ cursor: "pointer" }}
                  onClick={() => navigate('/sign-up')}
                >
                  Create an account here!
                </Button> */}
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </Col>

    </Row >
    // </ImageBackgroundWrapper>
  )
}

export default Signup
