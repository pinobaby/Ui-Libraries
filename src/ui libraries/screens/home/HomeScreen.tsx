import React, { useEffect } from 'react';
import { View, Text, Platform } from 'react-native';
import { StyleSheet } from 'react-native';
import { Accordion, AccordionTrigger, Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, AddIcon, Box, Button, ButtonGroup, ButtonIcon, ButtonText, Center, FormControl, FormControlLabel, FormControlLabelText, HStack, Heading, Image, Input, InputField, InputIcon, InputSlot, KeyboardAvoidingView, SearchIcon, Slider, SliderFilledTrack, SliderThumb, SliderTrack, VStack, } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { AccordionItem } from '@gluestack-ui/config/build/theme/AccordionItem';


const HomeScreen = () => {

  const navigation = useNavigation();
  const [showActionsheet, setShowActionsheet] = React.useState(false)
  const handleClose = () => setShowActionsheet(!showActionsheet)

  return (

    <ScrollView>
      <View style={styles.container}>

        <Input>
          <InputSlot pl='$3'>
            <InputIcon as={SearchIcon} />
          </InputSlot >
          <InputField
            placeholder="Search..."
          />
        </Input>


        <Image
          style={{ marginTop: 20 }}
          size="2xl" borderRadius="$full"
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
        />

        <Button
          style={{ marginTop: 20 }}
          size="lg"
          variant="solid"
          action="positive"
          isDisabled={false}
          isFocusVisible={false}
          onPress={() => {
            navigation.navigate('Tab1')
          }}>
          <ButtonText>go to </ButtonText>
          <ButtonIcon as={AddIcon} />
        </Button>


        <HStack
          style={{
            marginTop: 20,
            margin: 60,
          }}
          p='$12'
          alignItems='center'
          borderColor='$backgroundLight300'
          borderWidth={1}
          borderRadius="$sm"
          $dark-borderColor="$backgroundDark700"
        >
          <Box maxWidth='$64' mr='$9'>
            <Heading mb='$1.5' >
              Was this page helpful?
            </Heading>
            <Text fontSize='$sm' >
              We use this feedback to improve the quality of our documentation.
            </Text>
          </Box>
          <ButtonGroup space='md'>
            <Button variant='outline' py='$2.5' action="secondary">
              <ButtonText fontSize='$sm' fontWeight='$medium'
              >
                No
              </ButtonText>
            </Button>
            <Button
              variant='solid'
              bg='$success700'
              borderColor='$success700'
              $hover-bg='$success800'
              $active-bg='$success700'
            >
              <ButtonText fontSize='$sm' fontWeight='$medium'>
                Yes
              </ButtonText>
            </Button>
          </ButtonGroup>
        </HStack>



        <Center w={300} h={100}>
          <Slider defaultValue={30} size="md" orientation="horizontal" isDisabled={false} isReversed={false}   >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Center>

        <Button onPress={handleClose}>
          <ButtonText>Open</ButtonText>
        </Button>


        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
            <ActionsheetBackdrop />
            <ActionsheetContent maxHeight="75%">
              <ActionsheetDragIndicatorWrapper>
                <ActionsheetDragIndicator />
              </ActionsheetDragIndicatorWrapper>
              <VStack w="$full" p={20}>
                <HStack justifyContent="center" alignItems="center" space="md">
                  <Box
                    w={50}
                    h="$full"
                    px="$2"
                    borderWidth={1}
                    borderStyle="solid"
                    borderColor="$borderLight300"
                    rounded="$sm"
                  >
                    <Image
                      source={{ uri: "https://i.imgur.com/UwTLr26.png" }}
                      flex={1}
                      resizeMode="contain"
                    />
                  </Box>
                  <VStack flex={1}>
                    <Text fontWeight="$bold">Mastercard</Text>
                    <Text>Card ending in 2345</Text>
                  </VStack>
                </HStack>
                <FormControl mt={36}>
                  <FormControlLabel>
                    <FormControlLabelText>
                      Confirm security code
                    </FormControlLabelText>
                  </FormControlLabel>

                  <Input w="$full">
                    <InputSlot>
                      
                    </InputSlot>
                    <InputField placeholder="CVC/CVV" />
                  </Input>
                  <Button onPress={handleClose} mt={20}>
                    <ButtonText>Pay $1000</ButtonText>
                  </Button>
                </FormControl>
              </VStack>
            </ActionsheetContent>
          </Actionsheet>
        </KeyboardAvoidingView>
        
        
      <Accordion m="$5" width="90%" size="sm" variant="filled" type="multiple" isCollapsible={true} isDisabled={false} >
        <AccordionItem value="a">
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }) => {
                return (
                  <>
                    <AccordionTitleText>
                      Sexo?
                    </AccordionTitleText>
                    {isExpanded ? (
                      <AccordionIcon as={ChevronUpIcon} ml="$3"/>
                    ) : (
                      <AccordionIcon as={ChevronDownIcon} ml="$3"/>
                    )}
                  </>
                );
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <AccordionContentText>
              si
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
         <AccordionItem value="b">
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }) => {
                return (
                  <>
                    <AccordionTitleText>
                      What payment methods do you accept?
                    </AccordionTitleText>
                    {isExpanded ? (
                      <AccordionIcon as={ChevronUpIcon} ml="$3"/>
                    ) : (
                      <AccordionIcon as={ChevronDownIcon} ml="$3"/>
                    )}
                  </>
                );
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <AccordionContentText>
             no
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
        </Accordion>
      


      </View>
    </ScrollView >
  )
}



export default HomeScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  lightContainer: {
    backgroundColor: '#FFFFFF',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
});







