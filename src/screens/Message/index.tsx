// import { NAVIGATOR } from '@constants/navigator.const';
// import { HumanMessage } from '@langchain/core/messages';
// import { ChatPromptTemplate } from '@langchain/core/prompts';
// import { ChatOpenAI } from '@langchain/openai';
// import { useNavigation } from '@react-navigation/native';
// import { StringOutputParser } from 'node_modules/@langchain/core/dist/output_parsers';
// import { useState } from 'react';
// import { Button, TextInput, View } from 'react-native';

// import { THomeTabsNavigationProp } from '@/types/navigator.type';

const MessageScreen = () => {
  return <></>;
  //   const navigation = useNavigation<THomeTabsNavigationProp>();
  //   const [input, setInput] = useState('');
  //   const [messages, setMessages] = useState<any[]>([]);
  //   const model = new ChatOpenAI({
  //     apiKey: process.env.OPENAI_API_KEY,
  //   });
  //   const sendMessage = async () => {
  //     if (!input) {
  //       return;
  //     }
  //     const prompt = ChatPromptTemplate.fromMessages([
  //       [
  //         'system',
  //         'You are a friendly parrot named Polly. Respond to all queries as a talking parrot would.',
  //       ],
  //       ['placeholder', '{messages}'],
  //     ]);
  //     const originalInput = input;
  //     setInput('');
  //     const newMessages = [...messages, new HumanMessage(originalInput)];
  //     setMessages(newMessages);
  //     try {
  //       const chain = prompt.pipe(model).pipe(new StringOutputParser());
  //       const response = await chain.invoke({
  //         messages: newMessages,
  //       });
  //       setMessages(prevMessages => [...prevMessages, response]);
  //       console.log(response);
  //     } catch (e) {
  //       console.log(e);
  //       setMessages(prevMessages => prevMessages.slice(0, -1));
  //       setInput(originalInput);
  //     }
  //   };
  //   return (
  //     <View>
  //       <TextInput
  //         placeholder="Ask a question..."
  //         value={input}
  //         onChangeText={setInput}
  //         onSubmitEditing={() => {
  //           if (input === '') {
  //             return;
  //           }
  //           sendMessage();
  //         }}
  //       />
  //       <Button
  //         title="Go to Details"
  //         onPress={() => navigation.navigate(NAVIGATOR.PROFILE)}
  //       />
  //     </View>
  //   );
};

export default MessageScreen;
