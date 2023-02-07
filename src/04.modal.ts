export interface IModalProps {
    help: { message: string }
    login: { title: string }
}

// Type me 🤔
function openModal(modalType: any, modalProps?: any) {
}

openModal('help', {message: 'Aidez moi!'});
openModal('login', {title: 'Authentification'})



































function openModalSolution<ModalType extends keyof IModalProps>(modalType: ModalType, modalProps?: IModalProps[ModalType]) {
}
