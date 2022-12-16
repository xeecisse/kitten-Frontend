import { CometChat } from '@cometchat-pro/chat'

export default (props) => {
  const appID = '227496e56acbfead'
  const region = 'us'
  const authKey = 'fc34c3304e20f461e799e1de5df16bcc4cd99537'
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

  return <div></div>
}
