import { Card, Image, View, Heading, Flex, Badge, Text, Button, useTheme } from "@aws-amplify/ui-react";

import './Journal.css';

function JournalCard(props) {
   const { tokens } = useTheme();
   return(
      <View
         backgroundColor={tokens.colors.background.secondary}
         padding={tokens.space.medium}
      >
         <Card>
            <Flex direction="row" alignItems="flex-start">
               <Image
                  alt="Road to milford sound"
                  src="/road-to-milford-new-zealand-800w.jpg"
                  width="33%"
               />
               <Flex
                  direction="column"
                  alignItems="flex-start"
                  gap={tokens.space.xs}
               >
                  <Flex>
                     <Badge size="small" variation="warning">High Rank+</Badge>
                     <Badge size="small" variation="success">Reliable</Badge>
                  </Flex>

                  <Heading level={5}>
                     {props.title}
                  </Heading>

                  <Text as="span">
                     Join us on this beautiful outdoor adventure through the glittering
                     rivers through the snowy peaks on New Zealand.
                  </Text>
                  <Button variation="primary">Submit</Button>
               </Flex>
            </Flex>
         </Card>
      </View>
   )
}

export default function Journal(props) {
   return(
      <div class='rental-container'>
         <JournalCard title="King Farmers" />
      </div>
   );
}
