export interface IModalProps {
    help: { message: string }
    login: { title: string }
}

// Type me 🤔
function openModal<
    ModalType extends keyof IModalProps
>(modalType: ModalType, modalProps?: IModalProps[ModalType]) {
}

openModal('help', {message: 'Aidez moi!'});
openModal('login', {title: 'Authentification'})




































