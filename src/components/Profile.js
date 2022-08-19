import { Text } from "@aws-amplify/ui-react";

import './Profile.css';
function ProfileHeader(props) {
   return(
      <div class='profile-header'>
         <Text>XXX YYY</Text>
      </div>
   );
}

export default function Profile(props) {
   return(
      <div class='profile-container'>
         <ProfileHeader />
      </div>
   );
}
