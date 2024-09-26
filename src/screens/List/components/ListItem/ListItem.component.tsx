import {Pressable} from 'react-native';
import React, {useState} from 'react';
import {IUser} from '../../../../types/User.interface';
import {ListItemModal} from '../ListItemModal/ListItemModal.component';
import {CustomLabelElementComponent} from '../../../../components/CustomLabelElement/CustomLabelElement.component';

interface UserProps {
  user: IUser;
}

export const ListItemComponent = ({user}: UserProps) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const handleOnListItemPress = () => {
    setModalVisible(true);
  };

  const handleOnListItemDetailsModalClose = () => {
    setModalVisible(false);
  };
  return (
    <>
      <Pressable onPress={handleOnListItemPress}>
        <CustomLabelElementComponent
          title={user.first_name + ' ' + user.last_name}
        />
      </Pressable>
      <ListItemModal
        userId={user.id}
        isModalVisible={isModalVisible}
        onClose={handleOnListItemDetailsModalClose}
      />
    </>
  );
};
