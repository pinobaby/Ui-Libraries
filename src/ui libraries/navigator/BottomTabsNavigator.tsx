import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import Tab1 from '../screens/tabs/Tab1';
import Tab2 from '../screens/tabs/Tab2';
import Tab3 from '../screens/tabs/Tab3';
import { AddIcon, Avatar, AvatarFallbackText, AvatarImage, CopyIcon, GlobeIcon, Icon, SearchIcon } from '@gluestack-ui/themed';
import Tab4 from '../screens/tabs/Tab4';


const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon as={CopyIcon} m="$2" w="$4" h="$4" />
          ),
        })}
      />
      <Tab.Screen
        name="Searh"
        component={Tab1}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon as={SearchIcon} m="$2" w="$4" h="$4" />
          ),
        })}
      />
      <Tab.Screen
        name="add"
        component={Tab2}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon as={AddIcon} m="$2" w="$4" h="$4" />
          ),
        })}
      />
      <Tab.Screen
        name="Reels"
        component={Tab4}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon as={GlobeIcon} m="$2" w="$4" h="$4" />
          ),
        })}
      />
      <Tab.Screen
        name="Acount"
        component={Tab3}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Avatar size="sm">
              <AvatarFallbackText>Peneless</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYMRmTOrZ8D1Dv4oPEOR04FVrpVFkF-XxuF2eSrS68Jg&s",
                }}
              />
            </Avatar>

          ),
        })}
      />
    </Tab.Navigator>

  );
}