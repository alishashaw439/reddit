# Authentication using Reddit API : Auth flow with Deep Linking build in React Native and Configured for iOS

The application features a login screen where users are redirected to the Reddit website to authenticate. Once logged in and permissions are granted to access their content, users are redirected back to the application's home screen using deep linking. The token persists in AsyncStorage in encrypted form. The logout functionality is handled using the context API. Additionally, even if the app is removed from the background or remains in the foreground, it will open on the home screen after the initial successful authentication.
# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.


## Step 1: Start your Application

# using npm
### For iOS
```bash
npm i
npx pod-install
npm start
press i
```

If everything is set up _correctly_, you should see your new app running in your _iOS Simulator_ shortly provided you have set up your simulator correctly.

# Architecture of project and brief introduction
I have created an app in [Reddit create app](https://www.reddit.com/prefs/apps).
The index.js opens up the AuthWall which consists of the AuthProvider(context API for user data). It has AppWrapper as it's children. There is a NavigationStack which has two stacks: AppStack(for logged in user) and AuthStack(for unauthenticated user). Based on the token it renders either of the Stack. I have configured the AppDelegate.m and added url type in the ios workspace for deep linking. 
Getting the url and updating the state is done in the AppWrapper function. I have added the path in the linking.ts file and passed it to the parameter linking in the NavigationContainer.
The access token is recieved from the redirected url sent by the reddit.

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
