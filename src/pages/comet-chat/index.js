import React from 'react'
import { CometChat } from '@cometchat-pro/chat'
import { CometChatUI } from '../../cometchat-pro-react-ui-kit/CometChatWorkspace/src'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as UUIDV4 } from 'uuid'
import { updateApi } from '../../redux/actions/api'
import { refreshProfile } from '../../redux/actions/auth'
import { useEffect } from 'react'

const CometChatComponent = (props) => {
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.auth.user)
  const appID = '227496e56acbfead'
  const region = 'us'
  const authKey = 'fc34c3304e20f461e799e1de5df16bcc4cd99537'

  useEffect(() => {
    const appSetting = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(region)
      .build()
    CometChat.init(appID, appSetting).then(
      () => {
        console.log('Initialization completed successfully')
        // You can now call login function.
      },
      (error) => {
        console.log('Initialization failed with error:', error)
        // Check the reason for error and take appropriate action.
      },
    )

    if (userInfo && userInfo.chat_id && userInfo.chat_id !== '') {
      CometChat.login(userInfo.chat_id, authKey).then(
        (user) => {
          console.log('Login Successful:', { user })
        },
        (error) => {
          console.log('Login failed with exception:', { error })
        },
      )
    } else if (userInfo.chat_id === '') {
      const uid =
        userInfo.preferred_name && userInfo.preferred_name !== ''
          ? userInfo.preferred_name
          : UUIDV4()
      const name = `${userInfo.firstname} ${userInfo.lastname}`

      const user = new CometChat.User(uid)
      user.setName(name)
      CometChat.createUser(user, authKey).then(
        (user) => {
          console.log('user created', user)
          updateApi('chat-id', {
            user_id: userInfo.id,
            chat_id: uid,
          })
            .then(() => {
              dispatch(refreshProfile())
            })
            .catch((e) => console.log(e))
        },
        (error) => {
          console.log('error', error)
        },
      )
    }
  }, [dispatch, userInfo])

  return (
    <div style={{ width: '100%', height: '90vh' }}>
      <CometChatUI />
    </div>
  )
}

export default CometChatComponent
