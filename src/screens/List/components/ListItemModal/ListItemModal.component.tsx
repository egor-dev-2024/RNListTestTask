import {Modal, Text, TouchableWithoutFeedback, View} from 'react-native';
import {styles} from './ListItemModal.styles';
import {useAppSelector} from '../../../../redux/hooks/defaultHooks';
import CustomButtonComponent from '../../../../components/CustomButton/CustomButton.component';

interface ListItemModalProps {
  userId: string | number;
  isModalVisible: boolean;
  onClose: () => void;
}

export const ListItemModal = ({
  userId,
  isModalVisible,
  onClose,
}: ListItemModalProps) => {
  //getting selected user from redux
  const user = useAppSelector(state =>
    state.usersList.users?.find(user => user.id == userId),
  );

  return (
    <Modal animationType="fade" transparent={true} visible={isModalVisible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <View>
                {user ? (
                  <>
                    <Text style={styles.modalText}>
                      {user.first_name + ' ' + user.last_name}
                    </Text>
                    <Text style={styles.modalText}>
                      Balance: {user.balance}
                    </Text>
                    <Text style={styles.modalText}>Email: {user.email}</Text>
                    <Text style={styles.modalText}>
                      IP address: {user.ip_address}
                    </Text>
                  </>
                ) : (
                  <Text>Some problems with loading users data. Try later</Text>
                )}
              </View>
              <CustomButtonComponent
                buttonText="Close Modal"
                handleClick={onClose}
                buttonStyle={styles.closeButton}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
