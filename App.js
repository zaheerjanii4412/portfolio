// // // import React from 'react';
// // // import { NavigationContainer } from '@react-navigation/native';
// // // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // // // import { createStackNavigator } from '@react-navigation/stack';
// // // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // // import { Ionicons } from '@expo/vector-icons';

// // // // Import Screens
// // // import DashboardScreen from './src/screens/DashboardScreen';
// // // import RecommendationsScreen from './src/screens/RecommendationsScreen';
// // // import ChatbotScreen from './src/screens/ChatbotScreen';
// // // import AnalyticsScreen from './src/screens/AnalyticsScreen';
// // // import HotelDetailScreen from './src/screens/HotelDetailScreen';

// // // const Tab = createBottomTabNavigator();
// // // // const Stack = createStackNavigator();
// // // const Stack = createNativeStackNavigator();

// // // function MainTabs() {
// // //   return (
// // //     <Tab.Navigator
// // //       screenOptions={({ route }) => ({
// // //         tabBarIcon: ({ focused, color, size }) => {
// // //           let iconName;
// // //           if (route.name === 'Dashboard') {
// // //             iconName = focused ? 'home' : 'home-outline';
// // //           } else if (route.name === 'Recommendations') {
// // //             iconName = focused ? 'hotel' : 'hotel-outline';
// // //           } else if (route.name === 'Chatbot') {
// // //             iconName = focused ? 'chatbubble' : 'chatbubble-outline';
// // //           } else if (route.name === 'Analytics') {
// // //             iconName = focused ? 'bar-chart' : 'bar-chart-outline';
// // //           }
// // //           return <Ionicons name={iconName} size={size} color={color} />;
// // //         },
// // //         tabBarActiveTintColor: '#007AFF',
// // //         tabBarInactiveTintColor: 'gray',
// // //       })}
// // //     >
// // //       <Tab.Screen name="Dashboard" component={DashboardScreen} />
// // //       <Tab.Screen name="Recommendations" component={RecommendationsScreen} />
// // //       <Tab.Screen name="Chatbot" component={ChatbotScreen} />
// // //       <Tab.Screen name="Analytics" component={AnalyticsScreen} />
// // //     </Tab.Navigator>
// // //   );
// // // }

// // // export default function App() {
// // //   return (
// // //     <NavigationContainer>
// // //       <Stack.Navigator>
// // //         <Stack.Screen 
// // //           name="Main" 
// // //           component={MainTabs} 
// // //           options={{ headerShown: false }}
// // //         />
// // //         <Stack.Screen 
// // //           name="HotelDetail" 
// // //           component={HotelDetailScreen}
// // //           options={{ title: 'Hotel Details' }}
// // //         />
// // //       </Stack.Navigator>
// // //     </NavigationContainer>
// // //   );
// // // }


// // import React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import { Ionicons } from '@expo/vector-icons';
// // import { View, Text, StyleSheet } from 'react-native';

// // // Import the DashboardScreen we created
// // import DashboardScreen from './src/screens/DashboardScreen';

// // // Remove the imports for screens we haven't created yet
// // // We'll create these placeholder functions instead

// // const Tab = createBottomTabNavigator();
// // const Stack = createNativeStackNavigator();

// // // Placeholder screens for tabs we haven't created yet
// // function RecommendationsScreen() {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Hotel Recommendations</Text>
// //       <Text>AI-powered hotel suggestions - Coming Soon</Text>
// //     </View>
// //   );
// // }

// // function ChatbotScreen() {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>AI Assistant</Text>
// //       <Text>Chat with our tourism expert - Coming Soon</Text>
// //     </View>
// //   );
// // }

// // function AnalyticsScreen() {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Analytics</Text>
// //       <Text>Tourism insights and data - Coming Soon</Text>
// //     </View>
// //   );
// // }

// // function HotelDetailScreen() {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Hotel Details</Text>
// //       <Text>Detailed hotel information - Coming Soon</Text>
// //     </View>
// //   );
// // }

// // function MainTabs() {
// //   return (
// //     <Tab.Navigator
// //       screenOptions={({ route }) => ({
// //         tabBarIcon: ({ focused, color, size }) => {
// //           let iconName;
// //           if (route.name === 'Dashboard') {
// //             iconName = focused ? 'home' : 'home-outline';
// //           } else if (route.name === 'Recommendations') {
// //             iconName = focused ? 'business' : 'business-outline';
// //           } else if (route.name === 'Chatbot') {
// //             iconName = focused ? 'chatbubble' : 'chatbubble-outline';
// //           } else if (route.name === 'Analytics') {
// //             iconName = focused ? 'bar-chart' : 'bar-chart-outline';
// //           }
// //           return <Ionicons name={iconName} size={size} color={color} />;
// //         },
// //         tabBarActiveTintColor: '#007AFF',
// //         tabBarInactiveTintColor: 'gray',
// //         headerShown: true,
// //       })}
// //     >
// //       <Tab.Screen name="Dashboard" component={DashboardScreen} />
// //       <Tab.Screen name="Recommendations" component={RecommendationsScreen} />
// //       <Tab.Screen name="Chatbot" component={ChatbotScreen} />
// //       <Tab.Screen name="Analytics" component={AnalyticsScreen} />
// //     </Tab.Navigator>
// //   );
// // }

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator>
// //         <Stack.Screen 
// //           name="Main" 
// //           component={MainTabs} 
// //           options={{ headerShown: false }}
// //         />
// //         <Stack.Screen 
// //           name="HotelDetail" 
// //           component={HotelDetailScreen}
// //           options={{ title: 'Hotel Details' }}
// //         />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#f5f5f5',
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //   },
// // });


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Ionicons } from '@expo/vector-icons';

// // Import Screens
// import DashboardScreen from './src/screens/DashboardScreen';
// import RecommendationsScreen from './src/screens/RecommendationsScreen';
// import ChatbotScreen from './src/screens/ChatbotScreen';
// import AnalyticsScreen from './src/screens/AnalyticsScreen';
// import HotelDetailScreen from './src/screens/HotelDetailScreen';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function MainTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
          
//           if (route.name === 'Dashboard') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Recommendations') {
//             iconName = focused ? 'business' : 'business-outline';
//           } else if (route.name === 'Chatbot') {
//             iconName = focused ? 'chatbubble' : 'chatbubble-outline';
//           } else if (route.name === 'Analytics') {
//             iconName = focused ? 'bar-chart' : 'bar-chart-outline';
//           }
          
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: '#007AFF',
//         tabBarInactiveTintColor: 'gray',
//         headerShown: true,
//         tabBarStyle: {
//           backgroundColor: 'white',
//           borderTopWidth: 1,
//           borderTopColor: '#e0e0e0',
//         },
//       })}
//     >
//       <Tab.Screen 
//         name="Dashboard" 
//         component={DashboardScreen}
//         options={{ 
//           title: 'Dashboard',
//           headerStyle: {
//             backgroundColor: '#007AFF',
//           },
//           headerTintColor: 'white',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//       />
//       <Tab.Screen 
//         name="Recommendations" 
//         component={RecommendationsScreen}
//         options={{ 
//           title: 'Hotel Recommendations',
//           headerStyle: {
//             backgroundColor: '#007AFF',
//           },
//           headerTintColor: 'white',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//       />
//       <Tab.Screen 
//         name="Chatbot" 
//         component={ChatbotScreen}
//         options={{ 
//           title: 'AI Assistant',
//           headerStyle: {
//             backgroundColor: '#007AFF',
//           },
//           headerTintColor: 'white',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//       />
//       <Tab.Screen 
//         name="Analytics" 
//         component={AnalyticsScreen}
//         options={{ 
//           title: 'Analytics',
//           headerStyle: {
//             backgroundColor: '#007AFF',
//           },
//           headerTintColor: 'white',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen 
//           name="Main" 
//           component={MainTabs} 
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen 
//           name="HotelDetail" 
//           component={HotelDetailScreen}
//           options={{ 
//             title: 'Hotel Details',
//             headerStyle: {
//               backgroundColor: '#007AFF',
//             },
//             headerTintColor: 'white',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { testAPI } from './src/utils/apiTest';

// Import Screens
import DashboardScreen from './src/screens/DashboardScreen';
import RecommendationsScreen from './src/screens/RecommendationsScreen';
import ChatbotScreen from './src/screens/ChatbotScreen';
import AnalyticsScreen from './src/screens/AnalyticsScreen';
import HotelDetailScreen from './src/screens/HotelDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Recommendations') {
            iconName = focused ? 'business' : 'business-outline';
          } else if (route.name === 'Chatbot') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Analytics') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
        },
      })}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen}
        options={{ 
          title: 'Dashboard',
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen 
        name="Recommendations" 
        component={RecommendationsScreen}
        options={{ 
          title: 'Hotel Recommendations',
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen 
        name="Chatbot" 
        component={ChatbotScreen}
        options={{ 
          title: 'AI Assistant',
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen 
        name="Analytics" 
        component={AnalyticsScreen}
        options={{ 
          title: 'Analytics',
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiConnected, setApiConnected] = useState(false);

  useEffect(() => {
    const checkAPI = async () => {
      const connected = await testAPI();
      setApiConnected(connected);
      setIsLoading(false);
    };

    checkAPI();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Connecting to Skardu Tourism API...</Text>
        <Text style={styles.apiUrl}>http://192.168.1.10:5000</Text>
      </View>
    );
  }

  if (!apiConnected) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Connection Failed</Text>
        <Text style={styles.errorText}>
          Unable to connect to the Skardu Tourism API
        </Text>
        <Text style={styles.apiUrl}>Trying to reach: http://192.168.1.10:5000</Text>
        <Text style={styles.troubleshootText}>
          Please check:
          {"\n"}• Flask server is running
          {"\n"}• Correct IP address
          {"\n"}• Network connectivity
          {"\n"}• CORS configuration
        </Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Main" 
          component={MainTabs} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="HotelDetail" 
          component={HotelDetailScreen}
          options={{ 
            title: 'Hotel Details',
            headerStyle: {
              backgroundColor: '#007AFF',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  loadingText: {
    fontSize: 18,
    marginTop: 20,
    color: '#2c3e50',
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dc3545',
    marginBottom: 10,
  },
  errorText: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 20,
  },
  apiUrl: {
    fontSize: 14,
    color: '#007AFF',
    fontFamily: 'monospace',
    marginBottom: 20,
    textAlign: 'center',
  },
  troubleshootText: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
    lineHeight: 20,
  },
});